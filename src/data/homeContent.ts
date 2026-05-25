const avatar = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/avatar.jpg', import.meta.url).href
const avatar2 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/avatar-2.jpg', import.meta.url).href
const avatar3 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/avatar-3.jpg', import.meta.url).href
const hero1 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/img-bg-01.jpg', import.meta.url).href
const hero2 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/img-bg-02.jpg', import.meta.url).href
const hero3 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/img-bg-03.jpg', import.meta.url).href
const feedImage1 = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=320&h=320&q=80'
const feedImage2 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=320&h=320&q=80'
const feedImage3 = 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=320&h=320&q=80'
const articleImage = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=860&h=484&q=80'
const icon02 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/icon-02.png', import.meta.url).href
const icon03 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/icon-03.png', import.meta.url).href
const icon04 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/icon-04.png', import.meta.url).href
const icon05 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/icon-05.png', import.meta.url).href
const icon06 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/icon-06.png', import.meta.url).href
const icon07 = new URL('../../design-reference/source-folder/files/testing-demo-v2/talk-ui/imgs/icon-07.png', import.meta.url).href

export const homeContent = {
  app: {
    brand: 'Talk君',
    brandImage: avatar3,
    sentiment: {
      title: '市場情緒',
      summary: 'Talk君目前持倉 β 1.34 組合偏進攻',
      link: '說明',
      metrics: [
        { label: '20日參與', value: '47%' },
        { label: '50日參與', value: '52%' },
        { label: '恐貪指數', value: '61分' },
      ],
    },
  },
  shortcuts: [
    { label: 'AI Bot', image: icon05 },
    { label: '聊天室', image: icon03 },
    { label: '語音直播', image: icon06 },
    { label: '研報', image: icon02 },
    { label: '知識庫', image: icon04 },
    { label: 'Beta計算機', image: icon07 },
  ],
  hero: {
    slides: [
      {
        eyebrow: '本週焦點',
        title: 'CPI 前，先看市場參與度',
        body: 'Talk君整理通膨、美元與殖利率三個訊號，幫你判斷這波是否只是情緒回落。',
        cta: '閱讀判讀',
        image: hero1,
      },
      {
        eyebrow: '行事曆',
        title: 'FOMC\n倒數 6 天',
        body: '把利率決議、非農與企業財報排在同一條時間線，先知道哪天該看盤。',
        cta: '查看事件',
        image: hero2,
      },
      {
        eyebrow: 'AI 摘要',
        title: '把直播變成重點筆記',
        body: '通勤時先讀逐字稿摘要，需要細節再回到原始影片與社團討論。',
        cta: '開啟筆記',
        image: hero3,
      },
    ],
  },
  macro: {
    subtitle: '今日優先追蹤',
    title: '重點總經資訊',
    updatedAt: '09:30 更新',
    items: [
      { label: '市場參與度', value: '63分', meta: '偏謹慎', tone: 'brand' as const },
      { label: '美國 CPI', value: '5/28', meta: '08:30 EST', tone: 'warm' as const },
      { label: '10Y 殖利率', value: '4.47%', meta: '高檔震盪', tone: 'cool' as const },
      { label: '美元指數', value: '104.2', meta: '小幅轉強', tone: 'neutral' as const },
    ],
    insight: {
      title: '【VIP专属】5/20（三）美东 21:30|美西 18:30',
      body: '5/21（四）北京 09:30\n英伟达财报即时解读',
      icon: icon06,
    },
  },
  trades: [
    { type: 'buy' as const, action: '加倉', ticker: 'NVDA', company: 'NVIDIA', date: '5/20 盤後', position: '新建 6%', reason: 'AI 伺服器需求仍強，回測後估值壓力下降，先用小倉位卡位。' },
    { type: 'sell' as const, action: '清倉', ticker: 'TSLA', company: 'Tesla', date: '5/17 開盤', position: '降至 0%', reason: '交付數據未確認反轉，短線消息面波動過高，先清倉保留現金。' },
    { type: 'buy' as const, action: '加碼', ticker: 'MSFT', company: 'Microsoft', date: '5/13 收盤', position: '加碼至 8%', reason: '雲端與 AI Copilot 收入延續，回檔接近支撐區，分批提高核心持倉。' },
  ],
  feed: [
    {
      author: 'Talk君',
      role: '研究主理人',
      time: '12 分鐘前',
      avatar,
      title: '非農前資金為什麼先撤？三個圖表看懂避險訊號',
      summary: '本篇把就業數據、殖利率與市場參與度放在一起看，先整理可能影響週五盤勢的變數。',
      tags: ['總經', '美股', 'VIP'],
      image: feedImage1,
    },
    {
      author: '社群小編',
      role: '內容整理',
      time: '48 分鐘前',
      avatar: avatar2,
      title: '今晚社團重點：CPI、美元轉強與半導體籌碼',
      summary: '小編整理社團討論中最常被問的 5 個問題，快速補上你錯過的訊息。',
      tags: ['社團', '摘要'],
      image: feedImage2,
    },
    {
      author: 'AI Bot',
      role: '知識庫摘要',
      time: '1 小時前',
      avatar: avatar3,
      title: 'H200 供應鏈一頁讀懂：禁令、需求與替代路線',
      summary: '由近期直播與文章整理成短摘要，先看結論，再進一步追原始內容。',
      tags: ['AI 摘要', '供應鏈'],
      image: feedImage3,
    },
  ],
  article: {
    eyebrow: '投資專欄',
    source: 'Talk君研究室 · 8 分鐘讀完',
    title: 'CPI 前的持倉檢查：先看三個資金訊號',
    summary: '這篇整理市場參與度、美元與殖利率三個訊號，幫你在數據公布前檢查美股持倉是否過度集中。',
    image: articleImage,
    points: [
      { label: '市場參與度', text: '若量能沒有跟上反彈，先把追價部位降到可控範圍。' },
      { label: '美元與殖利率', text: '美元轉強時，成長股估值壓力會先反映在高本益比標的。' },
      { label: '持倉策略', text: '核心持倉保留，短線交易用分批與停損控制 CPI 前波動。' },
    ],
  },
}

export type HomeContent = typeof homeContent
