import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import prdMarkdown from '../../../product/PRD.md?raw'
import './ProductOverview.css'

const isPlaceholder = prdMarkdown.includes('Replace this placeholder') || prdMarkdown.includes('TBD')

export function PrdView() {
  return (
    <article className="prd-view">
      {isPlaceholder ? <div className="prd-view__notice">PRD 仍為 placeholder — 請替換內容後執行 `/prd` 重新生成 UIUX Flow。</div> : null}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{prdMarkdown}</ReactMarkdown>
    </article>
  )
}
