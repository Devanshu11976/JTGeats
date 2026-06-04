# Functionality Specification

## 1. Hero Section
- Search input with placeholder: "Search food you love"
- Yellow "Search" button (decorative — no backend needed)
- Chef illustration on right side

## 2. Home Kitchen Grid
- 4-column grid layout
- 3 rows = 12 food cards
- Each card contains:
  - Food image (full width)
  - Discount badge (yellow, top-left) — shown conditionally
  - Food name (left) + Price (right)
  - Star rating + delivery time badge + Add (+) button
- Hover: subtle card lift/shadow effect

## 3. Popular Items Carousel
- Centered section heading: "Popular Items"
- 3 cards visible at a time
- Left arrow (outlined green circle) — prev slide
- Right arrow (filled green circle) — next slide
- Auto-slides every 5 seconds
- Slides 1 card per click
- Card states:
  - Default: (+) add button
  - Added: quantity counter (− N +)
- "Request a Dish" green CTA button below carousel

## 4. Request a Dish Modal
**Trigger:** Click "Request a Dish" button
**Modal contains:**
  - Heading: "Request a Dish"
  - Dish name input
  - Description textarea
  - Cancel button → closes modal
  - Submit Request button → closes modal
**Behavior:**
  - Background overlay (semi-transparent dark)
  - Body scroll locked when open
  - Scroll re-enabled on close

## 5. Video Section (Service Section)
- Background: #FAFAFA
- Video element centered
- Large play icon overlay when paused
- Click video → plays (icon hides)
- Click again → pauses (icon shows)

## 6. Contact Section
**Left side:**
  - Heading: "Do you have a question or want to become a seller?"
  - Subtext: "Fill this form and our manager will contact you next 48 hours."
  - Input: Your Name
  - Input: Your e-mail
  - Textarea: Your message
  - Green Submit button

**Right side:**
  - Delivery scooter illustration on mint green circle bg

## 7. Navigation (Header)
- Logo / brand name left
- Nav links right
- Fixed or sticky (TBD from full design)
