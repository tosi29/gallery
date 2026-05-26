# Art Gallery (Gallery Deluxe starter)

このリポジトリは **Hugo + Gallery Deluxe** を使った最小構成です。

## セットアップ

```bash
hugo server -D
```

## 構成

- `config.toml`: Gallery Deluxe を Hugo Module として読み込み
- `content/works/*`: 作品ページ（`type: image | interactive`）
- `static/images/*`: サンプル画像
- `static/js/noise-grid.js`: インタラクティブ作品サンプル
- `netlify.toml`: Netlify 用ビルド設定（Hugo バージョン固定）

## 方針

- 表示は Gallery Deluxe のテンプレートに委譲（独自レイアウトは置かない）
- 画像作品は Gallery Deluxe の標準導線で展示
- JS作品は個別ページで埋め込み表示
