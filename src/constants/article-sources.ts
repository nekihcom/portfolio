/**
 * 記事ソースの定義を一元管理
 * 将来的にソースを追加・削除する場合は、このファイルのみを修正すれば良い
 */
export const ARTICLE_SOURCES = {
  note: {
    id: "note",
    label: "Note",
    iconPath: "/sns/note-icon.svg",
    order: 1,
  },
  qiita: {
    id: "qiita",
    label: "Qiita",
    iconPath: "/sns/qiita-icon.png",
    order: 2,
  },
} as const;

/**
 * 記事ソースのID型
 * ARTICLE_SOURCES のキーから自動生成
 */
export type ArticleSourceId = keyof typeof ARTICLE_SOURCES;

/**
 * 記事ソースIDの配列（表示順でソート済み）
 */
export const ARTICLE_SOURCE_IDS = Object.values(ARTICLE_SOURCES)
  .sort((a, b) => a.order - b.order)
  .map((source) => source.id) as ArticleSourceId[];

/**
 * 文字列が有効な記事ソースIDかどうかを判定
 * @param source - 検証する文字列
 * @returns source が ArticleSourceId 型かどうか
 */
export function isValidArticleSource(
  source: string
): source is ArticleSourceId {
  return source in ARTICLE_SOURCES;
}

/**
 * 記事ソースのメタデータを取得
 * @param source - 記事ソースID
 * @returns 記事ソースのメタデータ
 */
export function getArticleSourceMeta(source: ArticleSourceId) {
  return ARTICLE_SOURCES[source];
}

