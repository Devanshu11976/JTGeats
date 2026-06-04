# Design Rules

## Color Palette
| Variable              | Hex       | Usage                                      |
|-----------------------|-----------|--------------------------------------------|
| --color-primary       | #1AC073   | Hero bg, buttons, carousel arrows (filled) |
| --color-primary-light | #2EBF91   | Hover states, secondary accents            |
| --color-mint-bg       | #F0FAF7   | Light section backgrounds                  |
| --color-yellow        | #F3BA00   | Discount badges, Search button             |
| --color-grey-light    | #F2F2F2   | Card backgrounds                           |
| --color-section-bg    | #F7F8FA   | Kitchen & Contact section backgrounds      |
| --color-service-bg    | #FAFAFA   | Service/Video section background           |
| --color-text-dark     | #1A1A1A   | Primary text                               |
| --color-text-grey     | #888888   | Secondary/muted text                       |
| --color-white         | #FFFFFF   | Inputs, cards, modal                       |

## Typography
- Font Family: 'Open Sans', sans-serif (ONLY)
- Hero heading: 700, ~64px
- Section headings: 700, ~32px
- Card titles: 600, ~14px
- Body/meta text: 400, ~12-13px
- Buttons: 600, ~14-16px

## Spacing System
- Section padding: 80–100px vertical
- Container max-width: 1200px, centered
- Card gap: 20–24px
- Card padding: 12px

## Section Dimensions (from Figma)
| Section       | Height  | Background |
|---------------|---------|------------|
| Hero          | 800px   | #1AC073    |
| Home Kitchen  | 2029px  | #F7F8FA    |
| Service       | 860px   | #FAFAFA    |
| Contact       | 603px   | #F7F8FA    |

## Component Rules

### Cards
- Border-radius: 12px
- Box-shadow: subtle on hover
- Image: 100% width, fixed height ~180px, object-fit: cover
- Discount badge: yellow (#F3BA00), top-left corner, 8px border-radius

### Buttons
- Primary (green): bg #1AC073, white text, border-radius 8px, padding 12px 28px
- Search (yellow): bg #F3BA00, white text, border-radius 0 8px 8px 0
- Add (+): bg #F3BA00, white, square ~28px, border-radius 4px

### Carousel Arrows
- Left arrow: outlined green circle, white bg inside
- Right arrow: filled green circle (#1AC073), white arrow icon

### Inputs
- Border: 1px solid #E0E0E0
- Border-radius: 8px
- Padding: 14px 18px
- Placeholder color: #AAAAAA
- Font: Open Sans 400

### Modal Overlay
- Background: rgba(0, 0, 0, 0.5)
- Modal card: white, border-radius 12px, padding 40px
- Max-width: 500px, centered

## Hover States
- Cards: translateY(-4px) + stronger shadow
- Primary buttons: background #2EBF91
- Carousel arrows: scale(1.1)
- Nav links: color #1AC073
