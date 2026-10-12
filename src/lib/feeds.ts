import { XMLParser } from "fast-xml-parser";

export type Post = { title: string; url: string; date: string; source: "Zenn" | "note" };
export type Repo = { name: string; description: string; url: string; language: string | null; stars: number; updated: string };

const parser = new XMLParser({ ignoreAttributes: false });

async function fetchRss(url: string, source: Post["source"], limit = 6): Promise<Post[]> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "portfolio-build" } });
    if (!res.ok) return [];
    const xml = parser.parse(await res.text());
    const items = xml?.rss?.channel?.item ?? [];
    const list = Array.isArray(items) ? items : [items];
    return list.slice(0, limit).map((i: any) => ({
      title: String(i.title ?? ""),
      url: String(i.link ?? ""),
      date: new Date(i.pubDate ?? Date.now()).toISOString(),
      source,
    }));
  } catch {
    return []; // 取得失敗してもビルドは止めない
  }
}

export const getZennPosts = (id: string) => fetchRss(`https://zenn.dev/${id}/feed`, "Zenn");
export const getNotePosts = (id: string) => fetchRss(`https://note.com/${id}/rss`, "note");

export async function getRepos(user: string, limit = 6): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=30`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio-build" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data
      .filter((r: any) => !r.fork)
      .slice(0, limit)
      .map((r: any) => ({
        name: r.name,
        description: r.description ?? "",
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        updated: r.pushed_at,
      }));
  } catch {
    return [];
  }
}

export const fmtDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};
