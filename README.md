# Portfolio

Astro製のポートフォリオサイト。Zenn・noteの記事とGitHubリポジトリはビルド時に自動取得します。

## 1. 自分の情報に書き換える

`site.config.ts` だけ編集すればOKです。

- `name` … 表示名
- `zenn` / `note` / `github` … 各サービスのユーザーID（URL末尾）
- `allyStudyUrl` … ally-study の公開URL（Render）
- `url` … Vercelにデプロイした後のURL

## 2. ローカルで確認

```bash
npm install
npm run dev   # http://localhost:4321
```

## 3. Vercelに公開（無料・Hobbyプラン）

1. このフォルダをGitHubに新規リポジトリとしてpush（Publicでも可）
2. https://vercel.com に GitHub アカウントでログイン
3. 「Add New → Project」→ リポジトリを選んで Import
4. Framework Preset が **Astro** になっていることを確認して Deploy

以降は `main` にpushするたびに自動で再デプロイされます。

## 記事を自動で最新にしたい場合

記事一覧はビルド時に取得するので、新しい記事を書いたら再デプロイが必要です。
自動化するなら、Vercelの「Settings → Git → Deploy Hooks」でURLを発行し、
GitHub Actions の schedule（例: 毎日1回）からそのURLを叩くと最新化されます。
