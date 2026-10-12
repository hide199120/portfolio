// ============================================================
//  ここだけ書き換えればサイト全体に反映されます
// ============================================================
export const site = {
  name: "ひで", // 表示名（ハンドルネームでもOK）
  role: "Web Engineer",
  tagline: "要件定義からリリースまで。\n作って、書いて、学び続けるエンジニア。",
  url: "https://your-portfolio.vercel.app", // デプロイ後のURL

  // 各サービスのユーザー名（URLの末尾部分）
  zenn: "https://zenn.dev/hideweb", // https://zenn.dev/〇〇
  note: "https://note.com/hide19912000", // https://note.com/〇〇
  github: "https://github.com/hide199120", // https://github.com/〇〇

  // ally-study の公開URL（Renderのもの）
  allyStudyUrl: "https://ally-study.onrender.com/",
};

export const about = [
  "新卒で外資SIerに入社し、要件定義・設計・実装・テスト・リリースまで一通りの開発工程を経験しました。PM経験も1年ほどあります。",
  "現在はWebサイト開発をフルスタックで行いながら、プライベートで個人開発「ally-study」を企画から設計・実装・公開まで一人で進めています。",
  "作ったものは必ず言語化する、をルールにZennやNoteで技術記事を書いています。",
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Professional", note: "学習3ヶ月 / 819点で合格" },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Redux Toolkit", "React Three Fiber", "Jest", "Testing Library"] },
  { group: "Backend", items: ["Go", "Gin", "MySQL", "OpenAPI"] },
  { group: "Infra / DevOps", items: ["AWS", "Docker", "GitHub Actions", "Render", "TiDB Cloud"] },
];
