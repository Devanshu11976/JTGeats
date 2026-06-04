# Figma Component Dimensions — JTGeats Home Assignment
> Extracted from Figma design reference + SVG asset analysis + screenshot measurements.
> Last updated: 2026-06-03

---

## 🎨 Global / Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary Green | `#1AC073` | Hero bg, CTA buttons, footer, active arrows |
| Primary Green Light | `#2EBF91` | Button hover states |
| Mint Green | `#C7EACC` | Video section bottom-half background |
| Mint Light | `#F0FAF7` | Contact illustration circle background |
| Yellow Accent | `#F3BA00` | Discount badges, +/− buttons, search btn, cart badge |
| Section BG | `#F7F8FA` | Kitchen & Contact section backgrounds |
| Text Dark | `#1A1A1A` | Primary body text |
| Text Grey | `#888888` | Muted/secondary text |
| Text Placeholder | `#AAAAAA` | Input placeholders |
| White | `#FFFFFF` | Cards, inputs, modal |
| Border | `#E0E0E0` | Input borders |
| Overlay | `rgba(0,0,0,0.5)` | Modal backdrop |

### Typography — Open Sans ONLY
| Element | Weight | Size | Line Height |
|---------|--------|------|-------------|
| Hero Heading | 700 (Bold) | `64px` | `1.15` |
| Section Title | 700 (Bold) | `32px` | `1.2` |
| Service Heading | 700 (Bold) | `36px` | `1.3` |
| Contact Heading | 700 (Bold) | `28px` | `1.35` |
| Footer Brand | 800 (ExtraBold) | `24px` | — |
| Nav Links | 600 (SemiBold) | `15px` | — |
| Footer Links | 600 (SemiBold) | `15px` | — |
| Card Name | 600 (SemiBold) | `14px` | — |
| Card Price | 700 (Bold) | `14px` | — |
| Card Rating | 600 (SemiBold) | `13px` | — |
| Card Time Badge | 600 (SemiBold) | `11px` | — |
| Card Discount Badge | 700 (Bold) | `11px` | — |
| Hero Subtext | 400 (Regular) | `16px` | `1.6` |
| Contact Subtext | 400 (Regular) | `14px` | — |
| Service Subtext | 400 (Regular) | `14px` | `1.6` |
| Search Input | 400 (Regular) | `15px` | — |
| Primary Button | 600 (SemiBold) | `15px` | — |
| Modal Title | 700 (Bold) | `22px` | — |
| Modal Input/Textarea | 400 (Regular) | `14px` | — |

---

## 🧭 1. Header / Navigation Bar

### Overall Layout
- **Position**: `absolute`, `top: 0`, `width: 100%`, `z-index: 100`
- **Padding**: `24px 0` (vertical)
- **Display**: `flex`, `align-items: center`, `justify-content: space-between`
- **Container max-width**: `1200px`, `padding: 0 40px`

### Logo (`.nav__logo-img`)
- **SVG Viewbox**: `88 × 23` pixels
- **Rendered Height**: `28px` (scaled up proportionally)
- **Fill Color**: `#FFFFFF` (white paths only — no ellipse in the SVG)
- **Note**: The Logo.svg contains only letter-path shapes (J, T, G, e, a, t, s). No ellipse/circle element.

### Nav Links (`.nav__links`)
- **Gap between links**: `36px`
- **Font**: `15px`, weight `600`, color `#FFFFFF`
- **Hover**: `opacity: 0.8`

### Icons Area (`.nav__icons`)
- **Gap**: `24px`
- **Search Icon** (`Search.svg`): `20px × 20px`
- **Cart Icon** (`Cart.svg`): `20px × 20px`

### Cart Badge Dot (`.nav__cart-badge`)
- **Shape**: Circle (ellipse/oval)
- **Width**: `8px`
- **Height**: `8px`
- **Border-radius**: `50%`
- **Color**: `#F3BA00` (Yellow)
- **Position**: `top: -2px`, `right: -2px` relative to cart button
- ✅ **This is the "ellipse" in the header** — the yellow notification dot on the cart icon

---

## 🚀 2. Hero Section

### Section Container
- **Background**: `#1AC073` (Primary Green)
- **Min-height**: `800px`
- **Display**: `flex`, `align-items: center`
- **Padding (inner)**: `80px 0` (top and bottom)

### Left Content Block (`.hero__content`)
- **Max-width**: `520px`

### Heading (`.hero__heading`)
- **Font size**: `64px`
- **Font weight**: `700`
- **Color**: `#FFFFFF`
- **Line-height**: `1.15`
- **Margin-bottom**: `20px`
- **Approximate rendered size**: Width ~`580px`, Height ~`147px`

### Sub-text (`.hero__subtext`)
- **Font size**: `16px`
- **Color**: `rgba(255,255,255,0.85)`
- **Margin-bottom**: `36px`
- **Max-width**: `420px`

### Search Bar (`.hero__search`)
- **Total max-width**: `400px`
- **Border-radius**: `8px` (overflow hidden, input + button combined)
- **Input** (`.hero__search-input`):
  - Padding: `16px 20px`
  - Background: `#FFFFFF`
  - Border-radius: `8px 0 0 8px`
- **Search Button** (`.hero__search-btn`):
  - Padding: `16px 28px`
  - Background: `#F3BA00`
  - Color: `#FFFFFF`
  - Border-radius: `0 8px 8px 0`

### Chef Illustration (`.hero__illustration`)
- **SVG Viewbox**: `522 × 526` pixels
- **Rendered max-height**: `680px`
- **Position**: Right side, `width: 50%`, `justify-content: flex-end`, `align-items: flex-end`

---

## 🍽️ 3. Home Kitchen Section

### Section Container
- **Background**: `#F7F8FA`
- **Padding**: `80px 0`

### Section Title
- **Font size**: `32px`, weight `700`
- **Margin-bottom**: `40px`
- **Alignment**: Left

### Grid Layout (`.kitchen__grid`)
- **Columns**: `repeat(4, 1fr)` on desktop
- **Gap**: `24px`
- **Breakpoints**:
  - `≤ 1024px`: 3 columns
  - `≤ 768px`: 2 columns
  - `≤ 480px`: 1 column

### Food Card (`.food-card`)
- **Background**: `#FFFFFF`
- **Border-radius**: `12px`
- **Box-shadow**: `0 2px 8px rgba(0,0,0,0.08)`
- **Hover shadow**: `0 8px 24px rgba(0,0,0,0.14)`
- **Hover transform**: `translateY(-4px)`

#### Card Image Wrap (`.food-card__image-wrap`)
- **Width**: `100%` (full card width)
- **Height**: `250px`
- **Overflow**: `hidden`

#### Card Image (`.food-card__image`)
- **Object-fit**: `cover`
- **Width/Height**: `100%` of image-wrap

#### Discount Badge (`.food-card__badge`)
- **Position**: `absolute`, top-left corner
- **Background**: `#F3BA00`
- **Color**: `#FFFFFF`
- **Font size**: `11px`, weight `700`
- **Padding**: `5px 10px`
- **Border-radius**: `0 0 8px 0` (only bottom-right rounded)

#### Card Info Row (`.food-card__info`)
- **Padding**: `14px 14px 6px`
- **Display**: `flex`, `justify-content: space-between`

#### Card Meta Row (`.food-card__meta`)
- **Padding**: `6px 14px 16px`
- **Gap**: `12px`

#### Star Icon (`.star-icon`)
- **Width**: `14px`, **Height**: `14px`
- **SVG**: `assets/star.svg`

#### Time Badge (`.food-card__time`)
- **Font size**: `11px`, weight `600`
- **Background**: `#F2F2F2`
- **Padding**: `4px 10px`
- **Border-radius**: `6px`

#### Add (+) Button (`.food-card__add`)
- **Width**: `28px`, **Height**: `28px`
- **Background**: `#F3BA00`
- **Border-radius**: `6px`
- **Icon (plus.svg)**: `12px × 12px`

#### Quantity Selector (`.food-card__qty`)
- **Total Width**: `84px` (`28 + 28 + 28`)
- **Height**: `28px`
- **Border**: `1px solid #F3BA00`
- **Border-radius**: `6px`
- **Minus/Plus Buttons**: `28px × 100%`, background `#F3BA00`
- **Count Span**: `min-width: 28px`, centered text, white background

---

## 🎠 4. Popular Items Section

### Section Container
- **Background**: `#F7F8FA`
- **Padding**: `80px 0`

### Title
- **Font size**: `32px`, weight `700`
- **Text-align**: `center`
- **Margin-bottom**: `40px`

### Carousel Wrap (`.popular__carousel-wrap`)
- **Display**: `flex`, `align-items: center`
- **Gap**: `20px`

### Arrow Buttons (`.popular__arrow`)
- **Shape**: Circle (ellipse)
- **Width**: `48px`
- **Height**: `48px`
- **Border-radius**: `50%`
- **Default state**: `background: #FFFFFF`, `border: 2px solid #1AC073`, color `#1AC073`
- **Hover state**: `background: #1AC073`, color `#FFFFFF`
- **Hover transform**: `scale(1.12)`
- **Hover shadow**: `0 4px 16px rgba(26,192,115,0.3)`
- **Arrow SVG icon**: `20px × 20px`, stroke-width `2.5`

### Swiper Carousel (`.popular__swiper`)
- **slidesPerView**: `3` (≥1024px), `2` (≥768px), `1` (<768px)
- **spaceBetween**: `24px`
- **Loop**: enabled
- **Autoplay delay**: `5000ms`
- **Cards**: Same as Food Card dimensions above

### CTA Button (`.popular__cta`)
- **Margin-top**: `48px`
- **Text-align**: `center`
- **Button**: `.btn-primary` — `padding: 14px 36px`, `background: #1AC073`, `border-radius: 8px`

---

## 🎬 5. Video / Service Section

### Section Layout
- **Background**: `linear-gradient(to bottom, #ffffff 50%, #F0FAF7 50%)`
- **Padding**: `80px 0`

### Heading (`.service__heading`)
- **Font size**: `36px`, weight `700`
- **Color**: `#1A1A1A`
- **Max-width**: ~`720px`, centered
- **Margin-bottom**: `16px`

### Sub-text (`.service__subtext`)
- **Font size**: `14px`
- **Color**: `#888888`

### Video Wrapper (`.service__video-wrap`)
- **Max-width**: `800px` (centered)
- **Border-radius**: `12px`
- **Box-shadow**: `0 10px 30px rgba(0,0,0,0.15)`
- **Cursor**: `pointer`
- **Background**: `#000000`

### Play Icon (`.service__play-icon`)
- **Position**: Centered (absolute, transform: translate(-50%,-50%))
- **SVG size**: `72px × 72px`
- **Circle**: `r="12"`, fill `#1AC073`
- **Triangle**: `fill="#FFFFFF"`
- **Hidden class**: `opacity: 0` (when video is playing)

---

## ✉️ 6. Contact Section

### Section Container
- **Background**: `#F7F8FA`
- **Padding**: `100px 0`
- **Min-height**: `603px`

### Left Column (`.contact__left`)
- **Max-width**: `640px`

### Heading (`.contact__heading`)
- **Font size**: `28px`, weight `700`
- **Line-height**: `1.35`
- **Margin-bottom**: `10px`

### Input Fields (`.contact__input`)
- **Padding**: `16px 18px`
- **Border**: `1px solid #E0E0E0`
- **Border-radius**: `8px`
- **Focus border**: `#1AC073`

### Textarea (`.contact__textarea`)
- **Width**: `100%`
- **Min-height**: `140px`
- **Padding**: `16px 18px`
- **Border-radius**: `8px`
- **Margin-bottom**: `20px`

### Submit Button
- **Inherits** `.btn-primary`: `padding: 14px 36px`, bg `#1AC073`, `border-radius: 8px`

### Right Column — Illustration Circle (`.contact__illustration-wrap`)
- **Shape**: Circle (ellipse)
- **Width**: `340px`
- **Height**: `340px`
- **Border-radius**: `50%`
- **Background**: `#F0FAF7` (Mint Light)
- **Illustration**: `assets/delivery-illustration.svg`, width `85%` of circle

---

## 📄 7. Footer

### Section Container
- **Background**: `#1AC073` (Brand Green)
- **Padding**: `40px 0`
- **Color**: `#FFFFFF`

### Layout (`.footer__inner`)
- **Display**: `flex`, `justify-content: space-between`, `align-items: center`

### Brand Text (`.footer__brand`)
- **Text**: "JTGeats"
- **Font size**: `24px`, weight `800`
- **Letter-spacing**: `-0.5px`

### Footer Links
- **Gap**: `36px`
- **Font size**: `15px`, weight `600`

### Social Icons
- **Gap**: `16px`
- **Icon size**: `24px × 24px` each
- **Assets**: `Facebook.svg`, `instagram.svg`

### Divider Line (`.footer__line`)
- **Border-top**: `1px solid rgba(255,255,255,0.25)`
- **Margin-top**: `24px`

---

## 💬 8. Request a Dish Modal

### Overlay (`.modal-overlay`)
- **Position**: `fixed`, `inset: 0`
- **Background**: `rgba(0,0,0,0.5)`
- **Z-index**: `1000`

### Modal Box (`.modal`)
- **Width**: `100%`, **Max-width**: `500px`
- **Padding**: `40px`
- **Border-radius**: `12px`
- **Box-shadow**: `0 20px 60px rgba(0,0,0,0.2)`
- **Animation**: `modalIn` — fade + slide down 20px + scale from 0.97

### Modal Title
- **Font size**: `22px`, weight `700`
- **Margin-bottom**: `24px`

### Input / Textarea
- **Padding**: `14px 16px`
- **Border**: `1px solid #E0E0E0`
- **Border-radius**: `8px`
- **Textarea min-height**: `120px`

### Action Buttons
- **Padding**: `12px 28px`
- **Border-radius**: `8px`
- **Cancel**: bg `#F2F2F2`, text `#1A1A1A`
- **Submit**: bg `#1AC073`, text `#FFFFFF`

---

## 📐 Key Ellipses/Circles Summary

| Element | Width | Height | Color | Notes |
|---------|-------|--------|-------|-------|
| Cart badge dot | `8px` | `8px` | `#F3BA00` | Header — yellow notification dot |
| Carousel arrows | `48px` | `48px` | White/Green | Default white, hover fills green |
| Contact illustration circle | `340px` | `340px` | `#F0FAF7` | Scooter delivery SVG container |
| Video play button | `72px` | `72px` | `#1AC073` | SVG circle with white triangle |

---

## 📏 Global Layout Constants

| Property | Value |
|----------|-------|
| Container max-width | `1200px` |
| Container padding (sides) | `40px` |
| Section vertical padding | `80px` |
| Card border-radius | `12px` |
| Button border-radius | `8px` |
| Input border-radius | `8px` |
| Card box-shadow | `0 2px 8px rgba(0,0,0,0.08)` |
| Card hover box-shadow | `0 8px 24px rgba(0,0,0,0.14)` |
