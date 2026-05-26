# Art Gallery (Hugo minimal starter)

画像作品と JavaScript 作品を混在展示するための最小構成です。

## セットアップ

```bash
hugo server -D
```

## 構成

- `content/works/*`: 作品ページ（`type: image | interactive`）
- `static/images/*`: サンプル画像
- `static/js/noise-grid.js`: インタラクティブ作品のスクリプト
- `layouts/_default/*`: 最小テンプレート

## Gallery Deluxe へ移行するとき

この構成の `content/works` はそのまま流用し、テンプレートを Gallery Deluxe 側に合わせて置き換えるだけで移行できます。


## Netlify

Netlify で `hugo: command not found` を避けるため、`netlify.toml` で `HUGO_VERSION` を固定しています。
