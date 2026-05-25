import { useMemo, useState } from 'react'
import dagre from '@dagrejs/dagre'
import { Background, Controls, MiniMap, ReactFlow, type Edge, type Node } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import flow from '../../../product/flows/uiux-flow.json'
import './ProductOverview.css'

type FlowNode = {
  id: string
  label: string
  kind: string
  route?: string
  description?: string
  feature?: string
  position?: { x: number; y: number } | null
}

export function UiUxFlowView() {
  const [selected, setSelected] = useState<FlowNode | null>(null)
  const graph = flow as { nodes: FlowNode[]; edges: Array<{ id: string; source: string; target: string; label?: string; kind?: string }> }

  const { nodes, edges } = useMemo(() => {
    const g = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
    g.setGraph({ rankdir: 'TB', nodesep: 48, ranksep: 80 })
    graph.nodes.forEach((node) => g.setNode(node.id, { width: 220, height: 64 }))
    graph.edges.forEach((edge) => g.setEdge(edge.source, edge.target))
    dagre.layout(g)
    const laidOutNodes: Node[] = graph.nodes.map((node) => {
      const point = g.node(node.id) ?? { x: 110, y: 32 }
      return {
        id: node.id,
        position: node.position ?? { x: point.x - 110, y: point.y - 32 },
        data: { label: node.label, kind: node.kind, route: node.route },
        style: {
          borderRadius: 'var(--comp-card-radius)',
          background: 'var(--comp-card-bg)',
          color: 'var(--comp-card-fg)',
          border: 'none',
          boxShadow: 'var(--comp-card-shadow)',
        },
      }
    })
    const laidOutEdges: Edge[] = graph.edges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      animated: edge.kind === 'primary',
      style: { stroke: 'var(--comp-section-eyebrow-fg)' },
    }))
    return { nodes: laidOutNodes, edges: laidOutEdges }
  }, [graph.edges, graph.nodes])

  if (graph.nodes.length === 0) {
    return <div className="flow-empty">尚無 UIUX Flow — 請先執行 `/prd` 自動生成。</div>
  }

  return (
    <>
      <div className="flow-canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          onNodeClick={(_, node) => setSelected(graph.nodes.find((item) => item.id === node.id) ?? null)}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      {selected ? (
        <aside className="flow-detail">
          <strong>{selected.id}</strong>
          <p>{selected.route ?? 'No route'} · {selected.description ?? 'No description'} · {selected.feature ?? 'No feature'}</p>
        </aside>
      ) : null}
    </>
  )
}
