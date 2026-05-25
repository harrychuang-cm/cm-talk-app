import { useEffect, useState } from 'react'
import { PrdView } from './PrdView'
import { UiUxFlowView } from './UiUxFlowView'
import './ProductOverview.css'

type ProductTab = 'prd' | 'flow'
const storageKey = 'product-overview-tab'

export function ProductOverview() {
  const [tab, setTab] = useState<ProductTab>(() => (sessionStorage.getItem(storageKey) as ProductTab | null) ?? 'prd')

  useEffect(() => {
    sessionStorage.setItem(storageKey, tab)
  }, [tab])

  return (
    <main className="product-overview">
      <div className="product-overview__bar">
        <button className={['product-overview__tab', tab === 'prd' && 'is-active'].filter(Boolean).join(' ')} type="button" onClick={() => setTab('prd')}>
          PRD 文件
        </button>
        <button className={['product-overview__tab', tab === 'flow' && 'is-active'].filter(Boolean).join(' ')} type="button" onClick={() => setTab('flow')}>
          UIUX Flow
        </button>
      </div>
      <div className="product-overview__content">{tab === 'prd' ? <PrdView /> : <UiUxFlowView />}</div>
    </main>
  )
}
