import './foundations.css'

export interface FoundationPageProps {
  title: string
  intent: string
  model: string
  tokens: Array<{ name: string; role: string; swatch?: string }>
  dos: string[]
  donts: string[]
}

export function FoundationPage({ title, intent, model, tokens, dos, donts }: FoundationPageProps) {
  return (
    <main className="foundation-page">
      <section className="foundation-hero">
        <h1>{title}</h1>
        <p>{intent}</p>
      </section>
      <div className="foundation-body">
        <section className="foundation-section">
          <h2>System Model</h2>
          <p>{model}</p>
        </section>
        <section className="foundation-section">
          <h2>Token Contract</h2>
          <div className="foundation-grid">
            {tokens.map((token) => (
              <article className="foundation-token" key={token.name}>
                {token.swatch ? <span className="foundation-swatch" style={{ '--token-swatch': token.swatch } as React.CSSProperties} /> : null}
                <code>{token.name}</code>
                <span>{token.role}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="foundation-section">
          <h2>Specimens</h2>
          <div className="foundation-grid">
            <article className="foundation-token">
              <strong>Dense mobile card</strong>
              <span>Used for sentiment, macro, trade, and feed surfaces.</span>
            </article>
            <article className="foundation-token">
              <strong>Action state</strong>
              <span>Blue primary and lime secondary stay distinct from data semantics.</span>
            </article>
          </div>
        </section>
        <section className="foundation-section">
          <h2>States & Accessibility</h2>
          <p>Focus rings use the primary focus token, touch targets stay at mobile control sizes, and text/background pairs use paired foreground roles.</p>
        </section>
        <section className="foundation-section">
          <h2>Usage Rules</h2>
          <div className="foundation-rules">
            <article className="foundation-token">
              <strong>Do</strong>
              {dos.map((rule) => <span key={rule}>{rule}</span>)}
            </article>
            <article className="foundation-token">
              <strong>Do not</strong>
              {donts.map((rule) => <span key={rule}>{rule}</span>)}
            </article>
          </div>
        </section>
        <section className="foundation-section">
          <h2>Implementation Notes</h2>
          <p>Components consume `--comp-*` slots. Theme changes happen through system roles; raw values remain in the reference layer.</p>
        </section>
      </div>
    </main>
  )
}
