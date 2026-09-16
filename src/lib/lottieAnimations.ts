/* ==========================================================================
   WAITLIST LAB — Branded Lottie Animations
   All animations use the brand color palette (lime green, dark surfaces,
   royal blue) for visual consistency across every solution landing page.
   ========================================================================== */

// Brand colors in Lottie RGB (0–1) format
const LIME: number[] = [0.56, 1, 0];
const LIME_DIM: number[] = [0.56, 1, 0];
const DARK: number[] = [0.059, 0.059, 0.059];
const SURFACE: number[] = [0.078, 0.078, 0.078];
const SURFACE_LT: number[] = [0.11, 0.11, 0.11];
const WHITE: number[] = [1, 1, 1];
const MUTED: number[] = [0.5, 0.5, 0.5];
const MUTED_DK: number[] = [0.32, 0.32, 0.32];
const ROYAL: number[] = [0.231, 0.51, 0.965];
const BORDER: number[] = [0.14, 0.14, 0.14];

const W = 400;
const H = 300;
const FR = 30;
const OP = 90;

const EASE = { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] } };

// --- Property helpers ---
const sp = (v: any) => ({ a: 0, k: v });
const ap = (k: any[]) => ({ a: 1, k });
const kf = (t: number, s: any) => ({ t, s, ...EASE });
const kfN = (t: number, s: any) => ({ t, s });

// --- Transform helpers ---
const tr = (
  o = 100,
  p: any = [0, 0],
  a: any = [0, 0],
  s: any = [100, 100],
  r = 0,
) => ({
  o: sp(o),
  r: sp(r),
  p: sp(p),
  a: sp(a),
  s: sp(s),
});

const trShape = () => ({
  ty: "tr",
  p: sp([0, 0]),
  a: sp([0, 0]),
  s: sp([100, 100]),
  r: sp(0),
  o: sp(100),
});

// --- Shape helpers ---
const rect = (s: [number, number], p: [number, number], r = 0, nm = "R") => ({
  ty: "rc",
  d: 1,
  s: sp(s),
  p: sp(p),
  r: sp(r),
  nm,
});

const ell = (s: [number, number], p: [number, number], nm = "E") => ({
  ty: "el",
  d: 1,
  s: sp(s),
  p: sp(p),
  nm,
});

const fill = (c: number[], o = 100, nm = "F") => ({
  ty: "fl",
  c: sp([...c, 1]),
  o: sp(o),
  r: 1,
  nm,
});

const stroke = (c: number[], w: number, o = 100, nm = "S") => ({
  ty: "st",
  c: sp([...c, 1]),
  o: sp(o),
  w: sp(w),
  lc: 2,
  lj: 2,
  nm,
});

const path = (verts: number[][], closed = false, nm = "P") => ({
  ty: "sh",
  ks: sp({
    i: verts.map(() => [0, 0]),
    o: verts.map(() => [0, 0]),
    v: verts,
    c: closed,
  }),
  nm,
});

const trim = (start: number, endKf: any[], nm = "T") => ({
  ty: "tm",
  s: sp(start),
  e: ap(endKf),
  o: sp(0),
  m: 1,
  nm,
});

const grp = (items: any[], nm = "G") => ({
  ty: "gr",
  it: [...items, trShape()],
  nm,
});

// --- Layer helpers ---
const layer = (shapes: any[], ksOpts: any = {}, ip = 0, op = OP, nm = "L") => ({
  ty: 4,
  ks: tr(ksOpts.o ?? 100, ksOpts.p, ksOpts.a, ksOpts.s, ksOpts.r ?? 0),
  shapes,
  ip,
  op,
  st: 0,
  nm,
  sr: 1,
  bm: 0,
});

const aLayer = (shapes: any[], ks: any, ip = 0, op = OP, nm = "L") => ({
  ty: 4,
  ks,
  shapes,
  ip,
  op,
  st: 0,
  nm,
  sr: 1,
  bm: 0,
});

const base = (layers: any[]) => ({
  v: "5.7.0",
  fr: FR,
  ip: 0,
  op: OP,
  w: W,
  h: H,
  nm: "Anim",
  ddd: 0,
  assets: [],
  layers,
});

// Card background layer (reused by all animations)
const cardBg = () =>
  layer(
    [
      grp([
        rect([380, 280], [200, 150], 16, "Card"),
        fill(DARK, 100),
        stroke(BORDER, 1.5, 100),
      ]),
    ],
    {},
    0,
    OP,
    "Bg",
  );

// ==========================================================================
// 1. DASHBOARD — animated bar chart
// ==========================================================================
function dashboardAnim() {
  const bars = [45, 70, 55, 85, 62, 95, 75];
  const barW = 30,
    gap = 18,
    startX = 60,
    baseY = 250;

  const barLayers = bars.map((h, i) => {
    const x = startX + i * (barW + gap);
    return aLayer(
      [grp([rect([barW, h], [0, 0], 5, "Bar"), fill(LIME, 75)])],
      {
        o: ap([kf(8 + i * 4, 0), kf(14 + i * 4, 100), kf(78, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([x, baseY]),
        a: sp([0, h / 2]),
        s: ap([
          kf(8 + i * 4, [100, 0]),
          kf(28 + i * 4, [100, 100]),
          kf(78, [100, 100]),
          kfN(90, [100, 0]),
        ]),
      },
      0,
      OP,
      `Bar${i}`,
    );
  });

  const titleLayer = layer(
    [grp([rect([60, 6], [0, 0], 3, "Title"), fill(MUTED, 60)])],
    { p: [50, 35] },
    0,
    OP,
    "Title",
  );

  const statLayers = [0, 1, 2].map((i) => {
    const x = 50 + i * 110;
    return layer(
      [
        grp([
          rect([90, 50], [0, 0], 8, "Stat"),
          fill(SURFACE, 100),
          stroke(BORDER, 1, 100),
        ]),
      ],
      { p: [x + 45, 75] },
      0,
      OP,
      `Stat${i}`,
    );
  });

  return base([cardBg(), ...statLayers, titleLayer, ...barLayers]);
}

// ==========================================================================
// 2. CHART — animated line chart drawing
// ==========================================================================
function chartAnim() {
  const pts = [
    [30, 220],
    [80, 180],
    [130, 195],
    [180, 140],
    [230, 155],
    [280, 100],
    [330, 80],
    [370, 60],
  ];

  const linePath = layer(
    [
      grp([
        path(pts, false, "Line"),
        stroke(LIME, 2.5, 100),
        trim(0, [kf(10, [0]), kf(55, [100])]),
      ]),
    ],
    {},
    0,
    OP,
    "Line",
  );

  const areaPath = aLayer(
    [
      grp([
        path([...pts, [370, 250], [30, 250]], true, "Area"),
        fill(LIME, 12),
      ]),
    ],
    {
      o: ap([kf(40, 0), kf(55, 100), kf(78, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([0, 0]),
      a: sp([0, 0]),
      s: sp([100, 100]),
    },
    0,
    OP,
    "Area",
  );

  const dotLayers = pts.map((pt, i) => {
    const appearFrame = 15 + i * 6;
    return aLayer(
      [grp([ell([8, 8], [0, 0], "Dot"), fill(LIME, 100)])],
      {
        o: ap([
          kf(appearFrame, 0),
          kf(appearFrame + 5, 100),
          kf(78, 100),
          kfN(90, 0),
        ]),
        r: sp(0),
        p: sp(pt),
        a: sp([0, 0]),
        s: ap([
          kf(appearFrame, [0, 0]),
          kf(appearFrame + 5, [100, 100]),
          kf(78, [100, 100]),
          kfN(90, [0, 0]),
        ]),
      },
      0,
      OP,
      `Dot${i}`,
    );
  });

  const gridLayers = [0, 1, 2].map((i) => {
    const y = 80 + i * 55;
    return layer(
      [grp([rect([340, 1], [0, 0], 0, "Grid"), fill(BORDER, 100)])],
      { p: [200, y] },
      0,
      OP,
      `Grid${i}`,
    );
  });

  return base([cardBg(), ...gridLayers, areaPath, linePath, ...dotLayers]);
}

// ==========================================================================
// 3. EDITOR — typing animation with blinking cursor
// ==========================================================================
function editorAnim() {
  const toolbar = layer(
    [
      grp([
        rect([370, 36], [0, 0], 0, "Toolbar"),
        fill(SURFACE, 100),
        stroke(BORDER, 1, 100),
      ]),
    ],
    { p: [200, 40] },
    0,
    OP,
    "Toolbar",
  );

  const toolIcons = [0, 1, 2].map((i) =>
    layer(
      [
        grp([
          ell([14, 14], [0, 0], "Icon"),
          fill(i === 0 ? LIME : MUTED_DK, i === 0 ? 40 : 60),
        ]),
      ],
      { p: [35 + i * 26, 40] },
      0,
      OP,
      `Tool${i}`,
    ),
  );

  const lines = [
    { w: 200, y: 90 },
    { w: 280, y: 115 },
    { w: 240, y: 140 },
    { w: 180, y: 165 },
    { w: 260, y: 205 },
    { w: 220, y: 230 },
  ];

  const lineLayers = lines.map((ln, i) => {
    const appear = 10 + i * 8;
    return aLayer(
      [
        grp([
          rect([ln.w, 5], [0, 0], 2.5, "Line"),
          fill(i === 0 ? WHITE : MUTED, i === 0 ? 80 : 50),
        ]),
      ],
      {
        o: ap([kf(appear, 0), kf(appear + 6, 100), kf(80, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([35 + ln.w / 2, ln.y]),
        a: sp([0, 0]),
        s: ap([
          kf(appear, [0, 100]),
          kf(appear + 6, [100, 100]),
          kf(80, [100, 100]),
          kfN(90, [0, 100]),
        ]),
      },
      0,
      OP,
      `Line${i}`,
    );
  });

  // Blinking cursor
  const cursor = aLayer(
    [grp([rect([2, 18], [0, 0], 1, "Cursor"), fill(LIME, 100)])],
    {
      o: ap([
        kf(0, 0),
        kf(3, 100),
        kf(6, 0),
        kf(9, 100),
        kf(12, 0),
        kf(15, 100),
        kf(18, 0),
        kf(21, 100),
        kf(24, 0),
        kf(27, 100),
        kf(30, 0),
        kf(33, 100),
        kf(36, 0),
        kf(80, 0),
        kf(83, 100),
        kf(86, 0),
        kfN(90, 0),
      ]),
      r: sp(0),
      p: sp([35, 90]),
      a: sp([0, 0]),
      s: sp([100, 100]),
    },
    0,
    OP,
    "Cursor",
  );

  return base([cardBg(), toolbar, ...toolIcons, ...lineLayers, cursor]);
}

// ==========================================================================
// 4. CHAT — chat bubbles appearing with typing indicator
// ==========================================================================
function chatAnim() {
  const bubbles = [
    { w: 160, h: 44, x: 50, y: 80, incoming: true, delay: 5 },
    { w: 140, h: 44, x: 330, y: 140, incoming: false, delay: 20 },
    { w: 120, h: 44, x: 50, y: 200, incoming: true, delay: 35 },
  ];

  const bubbleLayers = bubbles.map((b, i) => {
    const color = b.incoming ? SURFACE : LIME;
    const opacity = b.incoming ? 100 : 15;
    return aLayer(
      [
        grp([
          rect([b.w, b.h], [0, 0], 14, "Bubble"),
          fill(color, opacity),
          stroke(b.incoming ? BORDER : LIME, b.incoming ? 1 : 0, 100),
        ]),
      ],
      {
        o: ap([kf(b.delay, 0), kf(b.delay + 6, 100), kf(80, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([b.incoming ? b.x + b.w / 2 : b.x - b.w / 2, b.y]),
        a: sp([0, 0]),
        s: ap([
          kf(b.delay, [80, 80]),
          kf(b.delay + 6, [100, 100]),
          kf(80, [100, 100]),
          kfN(90, [80, 80]),
        ]),
      },
      0,
      OP,
      `Bubble${i}`,
    );
  });

  // Avatar circles for incoming messages
  const avatars = [
    { x: 30, y: 80, delay: 5 },
    { x: 30, y: 200, delay: 35 },
  ].map((a, i) =>
    aLayer(
      [grp([ell([24, 24], [0, 0], "Avatar"), fill(LIME, 25)])],
      {
        o: ap([kf(a.delay, 0), kf(a.delay + 6, 100), kf(80, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([a.x, a.y]),
        a: sp([0, 0]),
        s: sp([100, 100]),
      },
      0,
      OP,
      `Avatar${i}`,
    ),
  );

  // Typing indicator (3 pulsing dots)
  const typingDots = [0, 1, 2].map((i) =>
    aLayer(
      [grp([ell([7, 7], [0, 0], "Dot"), fill(MUTED, 80)])],
      {
        o: ap([
          kf(50 + i * 4, 0),
          kf(53 + i * 4, 100),
          kf(56 + i * 4, 30),
          kf(59 + i * 4, 100),
          kf(62 + i * 4, 30),
          kf(65 + i * 4, 100),
          kf(80, 100),
          kfN(90, 0),
        ]),
        r: sp(0),
        p: sp([45 + i * 16, 250]),
        a: sp([0, 0]),
        s: ap([
          kf(50 + i * 4, [60, 60]),
          kf(53 + i * 4, [100, 100]),
          kf(80, [100, 100]),
          kfN(90, [60, 60]),
        ]),
      },
      0,
      OP,
      `Typing${i}`,
    ),
  );

  return base([cardBg(), ...avatars, ...bubbleLayers, ...typingDots]);
}

// ==========================================================================
// 5. INBOX — email rows sliding in, notification dot pulsing
// ==========================================================================
function inboxAnim() {
  const rows = [0, 1, 2, 3].map((i) => ({
    y: 50 + i * 52,
    delay: 5 + i * 8,
    unread: i === 0,
  }));

  const rowLayers = rows.map((r, i) =>
    aLayer(
      [
        grp([
          rect([360, 44], [0, 0], 10, "Row"),
          fill(SURFACE, 100),
          stroke(BORDER, 1, 100),
          // Avatar
          ...(true ? [grp([ell([28, 28], [0, 0], "Av"), fill(LIME, 20)])] : []),
          // Name bar
          rect([60, 5], [55, -8], 2.5, "Name"),
          fill(r.unread ? WHITE : MUTED, r.unread ? 70 : 40),
          // Subject bar
          rect([120, 4], [80, 5], 2, "Sub"),
          fill(MUTED, 35),
          // Time bar
          rect([20, 4], [150, 5], 2, "Time"),
          fill(MUTED_DK, 50),
        ]),
      ],
      {
        o: ap([kf(r.delay, 0), kf(r.delay + 6, 100), kf(82, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([200 + 30, r.y]),
        a: sp([0, 0]),
        s: sp([100, 100]),
      },
      0,
      OP,
      `Row${i}`,
    ),
  );

  // Override position animation for slide-in
  const slideRowLayers = rows.map((r, i) =>
    aLayer(
      [
        grp([
          rect([360, 44], [0, 0], 10, "Row"),
          fill(SURFACE, 100),
          stroke(BORDER, 1, 100),
        ]),
      ],
      {
        o: ap([kf(r.delay, 0), kf(r.delay + 6, 100), kf(82, 100), kfN(90, 0)]),
        r: sp(0),
        p: ap([
          kf(r.delay, [260, r.y]),
          kf(r.delay + 8, [200, r.y]),
          kf(82, [200, r.y]),
          kfN(90, [260, r.y]),
        ]),
        a: sp([0, 0]),
        s: sp([100, 100]),
      },
      0,
      OP,
      `SlideRow${i}`,
    ),
  );

  // Simpler approach: just rows with content
  const simpleRows = rows.map((r, i) => {
    const content = [
      grp([
        rect([360, 44], [0, 0], 10, "RowBg"),
        fill(SURFACE, 100),
        stroke(BORDER, 1, 100),
      ]),
      grp([ell([26, 26], [-150, 0], "Avatar"), fill(LIME, r.unread ? 25 : 12)]),
      grp([
        rect([50, 5], [-120, -8], 2.5, "Name"),
        fill(r.unread ? WHITE : MUTED, r.unread ? 70 : 40),
      ]),
      grp([rect([100, 4], [-85, 4], 2, "Sub"), fill(MUTED, 35)]),
    ];
    if (r.unread) {
      content.push(grp([ell([8, 8], [165, 0], "Notif"), fill(LIME, 100)]));
    }
    return aLayer(
      content,
      {
        o: ap([kf(r.delay, 0), kf(r.delay + 6, 100), kf(82, 100), kfN(90, 0)]),
        r: sp(0),
        p: ap([
          kf(r.delay, [240, r.y]),
          kf(r.delay + 8, [200, r.y]),
          kf(82, [200, r.y]),
          kfN(90, [240, r.y]),
        ]),
        a: sp([0, 0]),
        s: sp([100, 100]),
      },
      0,
      OP,
      `Row${i}`,
    );
  });

  // Pulsing notification dot
  const notifDot = aLayer(
    [grp([ell([10, 10], [0, 0], "Dot"), fill(LIME, 100)])],
    {
      o: sp(100),
      r: sp(0),
      p: sp([365, 50]),
      a: sp([0, 0]),
      s: ap([
        kf(0, [100, 100]),
        kf(15, [130, 130]),
        kf(30, [100, 100]),
        kf(45, [130, 130]),
        kf(60, [100, 100]),
        kf(75, [130, 130]),
        kf(90, [100, 100]),
      ]),
    },
    0,
    OP,
    "Notif",
  );

  return base([cardBg(), ...simpleRows, notifDot]);
}

// ==========================================================================
// 6. WORKFLOW — connected nodes with pulse traveling
// ==========================================================================
function workflowAnim() {
  const nodes = [
    { y: 60, label: "Trigger" },
    { y: 125, label: "Email" },
    { y: 190, label: "Wait" },
    { y: 255, label: "SMS" },
  ];

  const nodeLayers = nodes.map((n, i) =>
    aLayer(
      [
        grp([
          rect([200, 40], [0, 0], 10, "Node"),
          fill(i === 0 ? LIME : SURFACE, i === 0 ? 20 : 100),
          stroke(i === 0 ? LIME : BORDER, i === 0 ? 1.5 : 1, 100),
        ]),
      ],
      {
        o: ap([kf(i * 6, 0), kf(i * 6 + 5, 100), kf(82, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([200, n.y]),
        a: sp([0, 0]),
        s: ap([
          kf(i * 6, [80, 80]),
          kf(i * 6 + 5, [100, 100]),
          kf(82, [100, 100]),
          kfN(90, [80, 80]),
        ]),
      },
      0,
      OP,
      `Node${i}`,
    ),
  );

  // Connection lines
  const connLayers = nodes.slice(0, -1).map((n, i) => {
    const y1 = n.y + 20;
    const y2 = nodes[i + 1].y - 20;
    return layer(
      [
        grp([
          rect([2, y2 - y1], [0, (y2 - y1) / 2], 0, "Conn"),
          fill(BORDER, 100),
        ]),
      ],
      { p: [200, y1] },
      0,
      OP,
      `Conn${i}`,
    );
  });

  // Pulse dot traveling down
  const pulse = aLayer(
    [grp([ell([12, 12], [0, 0], "Pulse"), fill(LIME, 100)])],
    {
      o: sp(100),
      r: sp(0),
      p: ap([
        kf(0, [200, 60]),
        kf(20, [200, 60]),
        kf(30, [200, 125]),
        kf(40, [200, 125]),
        kf(50, [200, 190]),
        kf(60, [200, 190]),
        kf(70, [200, 255]),
        kf(80, [200, 255]),
        kfN(90, [200, 60]),
      ]),
      a: sp([0, 0]),
      s: ap([
        kf(0, [0, 0]),
        kf(5, [100, 100]),
        kf(20, [100, 100]),
        kf(22, [0, 0]),
        kf(28, [0, 0]),
        kf(30, [100, 100]),
        kf(40, [100, 100]),
        kf(42, [0, 0]),
        kf(48, [0, 0]),
        kf(50, [100, 100]),
        kf(60, [100, 100]),
        kf(62, [0, 0]),
        kf(68, [0, 0]),
        kf(70, [100, 100]),
        kf(80, [100, 100]),
        kf(82, [0, 0]),
        kfN(90, [0, 0]),
      ]),
    },
    0,
    OP,
    "Pulse",
  );

  // Node icons
  const iconLayers = nodes.map((n, i) =>
    aLayer(
      [
        grp([
          ell([12, 12], [0, 0], "Icon"),
          fill(i === 0 ? LIME : MUTED, i === 0 ? 100 : 60),
        ]),
      ],
      {
        o: ap([kf(i * 6, 0), kf(i * 6 + 5, 100), kf(82, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([130, n.y]),
        a: sp([0, 0]),
        s: sp([100, 100]),
      },
      0,
      OP,
      `Icon${i}`,
    ),
  );

  return base([cardBg(), ...connLayers, ...nodeLayers, ...iconLayers, pulse]);
}

// ==========================================================================
// 7. CALENDAR — grid with date highlight and event bar
// ==========================================================================
function calendarAnim() {
  const header = layer(
    [grp([rect([360, 32], [0, 0], 0, "Header"), fill(SURFACE, 100)])],
    { p: [200, 36] },
    0,
    OP,
    "Header",
  );

  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"].map((d, i) =>
    layer(
      [grp([ell([12, 12], [0, 0], "Day"), fill(MUTED_DK, 40)])],
      { p: [50 + i * 50, 60] },
      0,
      OP,
      `Day${i}`,
    ),
  );

  // Grid cells (4 rows x 7)
  const cellLayers: any[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 7; col++) {
      const x = 50 + col * 50;
      const y = 90 + row * 45;
      cellLayers.push(
        layer(
          [
            grp([
              rect([42, 38], [0, 0], 6, "Cell"),
              fill(SURFACE, 50),
              stroke(BORDER, 1, 50),
            ]),
          ],
          { p: [x, y] },
          0,
          OP,
          `Cell${row}_${col}`,
        ),
      );
    }
  }

  // Highlighted cell (appears with lime fill)
  const highlight = aLayer(
    [
      grp([
        rect([42, 38], [0, 0], 6, "High"),
        fill(LIME, 20),
        stroke(LIME, 1.5, 100),
      ]),
    ],
    {
      o: ap([kf(15, 0), kf(20, 100), kf(80, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([200, 180]),
      a: sp([0, 0]),
      s: ap([
        kf(15, [80, 80]),
        kf(20, [100, 100]),
        kf(80, [100, 100]),
        kfN(90, [80, 80]),
      ]),
    },
    0,
    OP,
    "High",
  );

  // Event bar inside highlighted cell
  const eventBar = aLayer(
    [grp([rect([36, 8], [0, 0], 4, "Event"), fill(LIME, 60)])],
    {
      o: ap([kf(25, 0), kf(30, 100), kf(80, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([200, 185]),
      a: sp([0, 0]),
      s: ap([
        kf(25, [0, 100]),
        kf(30, [100, 100]),
        kf(80, [100, 100]),
        kfN(90, [0, 100]),
      ]),
    },
    0,
    OP,
    "Event",
  );

  return base([
    cardBg(),
    header,
    ...dayLabels,
    ...cellLayers,
    highlight,
    eventBar,
  ]);
}

// ==========================================================================
// 8. PIPELINE — cards moving through stages
// ==========================================================================
function pipelineAnim() {
  const colHeaders = ["New", "Active", "Won"].map((label, i) =>
    layer(
      [
        grp([
          rect([100, 28], [0, 0], 8, "Col"),
          fill(SURFACE, 100),
          stroke(BORDER, 1, 100),
        ]),
        grp([
          ell([6, 6], [-35, 0], "Dot"),
          fill(i === 0 ? LIME : i === 1 ? [1, 0.8, 0.2] : [0.2, 0.8, 0.4], 80),
        ]),
      ],
      { p: [85 + i * 120, 50] },
      0,
      OP,
      `Col${i}`,
    ),
  );

  // Static cards in each column
  const staticCards = [
    { col: 0, y: 110 },
    { col: 0, y: 165 },
    { col: 1, y: 110 },
    { col: 2, y: 110 },
  ].map((c, i) =>
    layer(
      [
        grp([
          rect([96, 48], [0, 0], 8, "Card"),
          fill(SURFACE, 100),
          stroke(BORDER, 1, 100),
        ]),
        grp([rect([60, 4], [-12, -10], 2, "Title"), fill(WHITE, 40)]),
        grp([rect([40, 3], [-22, 2], 2, "Sub"), fill(MUTED, 35)]),
        grp([rect([30, 10], [-30, 12], 3, "Tag"), fill(LIME, 15)]),
      ],
      { p: [85 + c.col * 120, c.y] },
      0,
      OP,
      `SCard${i}`,
    ),
  );

  // Moving card (animates from col 0 → col 1 → col 2)
  const movingCard = aLayer(
    [
      grp([
        rect([96, 48], [0, 0], 8, "Card"),
        fill(SURFACE_LT, 100),
        stroke(LIME, 1.5, 100),
      ]),
      grp([rect([60, 4], [-12, -10], 2, "Title"), fill(WHITE, 60)]),
      grp([rect([40, 3], [-22, 2], 2, "Sub"), fill(MUTED, 45)]),
      grp([rect([30, 10], [-30, 12], 3, "Tag"), fill(LIME, 30)]),
    ],
    {
      o: sp(100),
      r: sp(0),
      p: ap([
        kf(0, [85, 220]),
        kf(25, [85, 220]),
        kf(35, [205, 220]),
        kf(55, [205, 220]),
        kf(65, [325, 220]),
        kf(85, [325, 220]),
        kfN(90, [85, 220]),
      ]),
      a: sp([0, 0]),
      s: sp([100, 100]),
    },
    0,
    OP,
    "MoveCard",
  );

  return base([cardBg(), ...colHeaders, ...staticCards, movingCard]);
}

// ==========================================================================
// 9. FORM — fields filling in, submit button glowing
// ==========================================================================
function formAnim() {
  const fields = [
    { y: 70, delay: 5, textW: 120 },
    { y: 130, delay: 18, textW: 100 },
  ];

  const fieldLayers = fields.map((f, i) => {
    const elements: any[] = [
      grp([
        rect([320, 44], [0, 0], 10, "Field"),
        fill(SURFACE, 100),
        stroke(BORDER, 1, 100),
      ]),
      grp([rect([40, 4], [-130, -12], 2, "Label"), fill(MUTED, 60)]),
    ];
    // Animated text fill
    elements.push(
      aLayer(
        [grp([rect([f.textW, 4], [0, 0], 2, "Text"), fill(WHITE, 50)])],
        {
          o: ap([
            kf(f.delay + 5, 0),
            kf(f.delay + 8, 100),
            kf(82, 100),
            kfN(90, 0),
          ]),
          r: sp(0),
          p: sp([200 - 160 + f.textW / 2, f.y + 4]),
          a: sp([0, 0]),
          s: ap([
            kf(f.delay + 5, [0, 100]),
            kf(f.delay + 12, [100, 100]),
            kf(82, [100, 100]),
            kfN(90, [0, 100]),
          ]),
        },
        0,
        OP,
        `Text${i}`,
      ),
    );
    // Return the field border/label as a static layer
    return layer(elements.slice(0, 2), { p: [200, f.y] }, 0, OP, `Field${i}`);
  });

  // Text fill layers (separate animated layers)
  const textLayers = fields.map((f, i) =>
    aLayer(
      [grp([rect([f.textW, 4], [0, 0], 2, "Text"), fill(WHITE, 50)])],
      {
        o: ap([
          kf(f.delay + 5, 0),
          kf(f.delay + 8, 100),
          kf(82, 100),
          kfN(90, 0),
        ]),
        r: sp(0),
        p: sp([200 - 160 + f.textW / 2, f.y + 4]),
        a: sp([0, 0]),
        s: ap([
          kf(f.delay + 5, [0, 100]),
          kf(f.delay + 12, [100, 100]),
          kf(82, [100, 100]),
          kfN(90, [0, 100]),
        ]),
      },
      0,
      OP,
      `Text${i}`,
    ),
  );

  // Submit button (pulsing glow)
  const submitBtn = aLayer(
    [grp([rect([140, 42], [0, 0], 10, "Btn"), fill(LIME, 100)])],
    {
      o: ap([kf(35, 0), kf(40, 100), kf(82, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([200, 210]),
      a: sp([0, 0]),
      s: ap([
        kf(35, [80, 80]),
        kf(40, [100, 100]),
        kf(50, [102, 102]),
        kf(60, [100, 100]),
        kf(70, [102, 102]),
        kf(80, [100, 100]),
        kfN(90, [80, 80]),
      ]),
    },
    0,
    OP,
    "Submit",
  );

  // Button text
  const btnText = aLayer(
    [grp([rect([50, 5], [0, 0], 2.5, "BtnText"), fill(DARK, 80)])],
    {
      o: ap([kf(38, 0), kf(42, 100), kf(82, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([200, 210]),
      a: sp([0, 0]),
      s: sp([100, 100]),
    },
    0,
    OP,
    "BtnText",
  );

  return base([cardBg(), ...fieldLayers, ...textLayers, submitBtn, btnText]);
}

// ==========================================================================
// 10. PAYMENT — credit card appearing, checkmark success
// ==========================================================================
function paymentAnim() {
  // Credit card
  const card = aLayer(
    [
      grp([
        rect([220, 130], [0, 0], 14, "Card"),
        fill(SURFACE_LT, 100),
        stroke(LIME, 1, 60),
      ]),
    ],
    {
      o: ap([kf(5, 0), kf(12, 100), kf(75, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([200, 130]),
      a: sp([0, 0]),
      s: ap([
        kf(5, [60, 60]),
        kf(12, [100, 100]),
        kf(75, [100, 100]),
        kfN(90, [60, 60]),
      ]),
    },
    0,
    OP,
    "Card",
  );

  // Card chip
  const chip = aLayer(
    [grp([rect([28, 20], [0, 0], 4, "Chip"), fill([0.85, 0.7, 0.3], 80)])],
    {
      o: ap([kf(15, 0), kf(20, 100), kf(75, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([130, 110]),
      a: sp([0, 0]),
      s: sp([100, 100]),
    },
    0,
    OP,
    "Chip",
  );

  // Card number lines
  const cardLines = [0, 1, 2].map((i) =>
    aLayer(
      [grp([rect([40, 4], [0, 0], 2, "Num"), fill(WHITE, 40)])],
      {
        o: ap([
          kf(18 + i * 3, 0),
          kf(22 + i * 3, 100),
          kf(75, 100),
          kfN(90, 0),
        ]),
        r: sp(0),
        p: sp([130 + i * 50, 145]),
        a: sp([0, 0]),
        s: sp([100, 100]),
      },
      0,
      OP,
      `Num${i}`,
    ),
  );

  // Success checkmark circle
  const checkCircle = aLayer(
    [
      grp([
        ell([60, 60], [0, 0], "Check"),
        fill(LIME, 15),
        stroke(LIME, 2.5, 100),
      ]),
    ],
    {
      o: ap([kf(35, 0), kf(40, 100), kf(75, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([290, 195]),
      a: sp([0, 0]),
      s: ap([
        kf(35, [0, 0]),
        kf(40, [100, 100]),
        kf(75, [100, 100]),
        kfN(90, [0, 0]),
      ]),
    },
    0,
    OP,
    "CheckCircle",
  );

  // Checkmark path (drawn with trim)
  const checkPath = aLayer(
    [
      grp([
        path(
          [
            [278, 195],
            [287, 204],
            [302, 188],
          ],
          false,
          "Check",
        ),
        stroke(LIME, 3, 100),
        trim(0, [kf(40, [0]), kf(52, [100])]),
      ]),
    ],
    {
      o: ap([kf(40, 0), kf(52, 100), kf(75, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([0, 0]),
      a: sp([0, 0]),
      s: sp([100, 100]),
    },
    0,
    OP,
    "CheckPath",
  );

  return base([cardBg(), card, chip, ...cardLines, checkCircle, checkPath]);
}

// ==========================================================================
// 11. SOCIAL — post cards appearing in grid with heart pulse
// ==========================================================================
function socialAnim() {
  const posts = [
    { x: 90, y: 80, delay: 5 },
    { x: 310, y: 80, delay: 12 },
    { x: 90, y: 210, delay: 19 },
    { x: 310, y: 210, delay: 26 },
  ];

  const postLayers = posts.map((p, i) =>
    aLayer(
      [
        grp([
          rect([180, 110], [0, 0], 12, "Post"),
          fill(SURFACE, 100),
          stroke(BORDER, 1, 100),
        ]),
        // Image area
        grp([rect([164, 60], [0, -16], 8, "Img"), fill(SURFACE_LT, 100)]),
        // Avatar
        grp([ell([16, 16], [-74, -38], "Av"), fill(LIME, 25)]),
        // Name
        grp([rect([40, 4], [-60, -38], 2, "Name"), fill(WHITE, 50)]),
        // Caption lines
        grp([rect([120, 3], [-22, 30], 1.5, "Cap1"), fill(MUTED, 35)]),
        grp([rect([80, 3], [-42, 38], 1.5, "Cap2"), fill(MUTED, 25)]),
      ],
      {
        o: ap([kf(p.delay, 0), kf(p.delay + 6, 100), kf(82, 100), kfN(90, 0)]),
        r: sp(0),
        p: sp([p.x, p.y]),
        a: sp([0, 0]),
        s: ap([
          kf(p.delay, [85, 85]),
          kf(p.delay + 6, [100, 100]),
          kf(82, [100, 100]),
          kfN(90, [85, 85]),
        ]),
      },
      0,
      OP,
      `Post${i}`,
    ),
  );

  // Heart icon pulsing on first post
  const heart = aLayer(
    [grp([ell([18, 18], [0, 0], "Heart"), fill(LIME, 80)])],
    {
      o: ap([kf(35, 0), kf(38, 100), kf(82, 100), kfN(90, 0)]),
      r: sp(0),
      p: sp([30, 130]),
      a: sp([0, 0]),
      s: ap([
        kf(35, [0, 0]),
        kf(38, [120, 120]),
        kf(42, [100, 100]),
        kf(50, [110, 110]),
        kf(55, [100, 100]),
        kf(82, [100, 100]),
        kfN(90, [0, 0]),
      ]),
    },
    0,
    OP,
    "Heart",
  );

  return base([cardBg(), ...postLayers, heart]);
}

// ==========================================================================
// 12. VIDEO — play button pulsing, progress bar moving
// ==========================================================================
function videoAnim() {
  // Video frame
  const frame = layer(
    [
      grp([
        rect([360, 200], [0, 0], 12, "Frame"),
        fill(SURFACE_LT, 100),
        stroke(BORDER, 1, 100),
      ]),
    ],
    { p: [200, 120] },
    0,
    OP,
    "Frame",
  );

  // Play button circle (pulsing)
  const playCircle = aLayer(
    [grp([ell([64, 64], [0, 0], "Play"), fill(LIME, 80)])],
    {
      o: sp(100),
      r: sp(0),
      p: sp([200, 120]),
      a: sp([0, 0]),
      s: ap([
        kf(0, [100, 100]),
        kf(15, [110, 110]),
        kf(30, [100, 100]),
        kf(45, [110, 110]),
        kf(60, [100, 100]),
        kf(75, [110, 110]),
        kf(90, [100, 100]),
      ]),
    },
    0,
    OP,
    "PlayCircle",
  );

  // Play triangle
  const playTri = layer(
    [
      grp([
        path(
          [
            [188, 105],
            [188, 135],
            [214, 120],
          ],
          true,
          "Tri",
        ),
        fill(DARK, 100),
      ]),
    ],
    {},
    0,
    OP,
    "Tri",
  );

  // Progress bar background
  const progBg = layer(
    [grp([rect([320, 4], [0, 0], 2, "ProgBg"), fill(SURFACE, 100)])],
    { p: [200, 250] },
    0,
    OP,
    "ProgBg",
  );

  // Progress bar fill (animated width)
  const progFill = aLayer(
    [grp([rect([320, 4], [0, 0], 2, "ProgFill"), fill(LIME, 100)])],
    {
      o: sp(100),
      r: sp(0),
      p: sp([200, 250]),
      a: sp([160, 0]),
      s: ap([kf(0, [0, 100]), kf(80, [100, 100]), kfN(90, [0, 100])]),
    },
    0,
    OP,
    "ProgFill",
  );

  return base([cardBg(), frame, playCircle, playTri, progBg, progFill]);
}

// ==========================================================================
// EXPORT MAP
// ==========================================================================
export const animations: Record<string, any> = {
  dashboard: dashboardAnim(),
  chart: chartAnim(),
  editor: editorAnim(),
  chat: chatAnim(),
  inbox: inboxAnim(),
  workflow: workflowAnim(),
  calendar: calendarAnim(),
  pipeline: pipelineAnim(),
  form: formAnim(),
  payment: paymentAnim(),
  social: socialAnim(),
  video: videoAnim(),
};
