interface BlogContentProps {
  content: string;
  className?: string;
}

/**
 * ブログ本文コンポーネント
 * 読みやすいスタイルでブログ本文を表示
 * 
 * @param content - HTMLコンテンツ
 * @param className - 追加のCSSクラス
 */
export function BlogContent({ content, className = "" }: BlogContentProps) {
  return (
    <div className={`blog-content ${className}`}>
      <div 
        className="prose prose-lg prose-slate max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
          prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6
          prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-5
          prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-em:text-gray-800 prose-em:italic
          prose-a:text-teal-600 prose-a:no-underline prose-a:border-b prose-a:border-teal-300 hover:prose-a:border-teal-500 hover:prose-a:text-teal-700
          prose-blockquote:border-l-4 prose-blockquote:border-teal-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-teal-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
          prose-code:text-teal-700 prose-code:bg-teal-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
          prose-li:text-gray-700 prose-li:mb-1
          prose-hr:border-gray-300 prose-hr:my-8
          prose-img:rounded-lg prose-img:shadow-lg prose-img:mx-auto
          prose-table:border-collapse prose-table:w-full prose-table:mb-4
          prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
          prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
          prose-thead:bg-gray-50
          prose-tbody:bg-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
} 