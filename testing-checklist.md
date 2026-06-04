# Testing Checklist

## Pre-Build Validation
- [ ] constraints.md reviewed
- [ ] No forbidden tech introduced
- [ ] All CDN links correct and loading

---

## Section Tests

### Hero Section
- [ ] Green background renders correctly (#1AC073)
- [ ] Heading text displays at correct size
- [ ] Search input and button aligned properly
- [ ] Yellow search button correct color (#F3BA00)
- [ ] Chef illustration positioned right side

### Home Kitchen Section
- [ ] Background #F7F8FA
- [ ] 4-column grid, 3 rows (12 cards)
- [ ] Discount badges appear only on correct cards
- [ ] Card images load and cover correctly
- [ ] Price and name aligned (space-between)
- [ ] Rating star + time badge + add button in one row
- [ ] Card hover: lift + shadow effect

### Popular Items Carousel
- [ ] 3 cards visible at once
- [ ] Left arrow navigates to previous slide
- [ ] Right arrow navigates to next slide
- [ ] Auto-slides every 5 seconds
- [ ] Only 1 card moves per click
- [ ] Arrow hover effects working
- [ ] Card hover effects working
- [ ] "Request a Dish" button visible below

### Modal
- [ ] Opens on "Request a Dish" click
- [ ] Overlay is semi-transparent dark
- [ ] Body scroll is DISABLED when open
- [ ] Cancel button closes modal
- [ ] Submit button closes modal
- [ ] Body scroll RE-ENABLED after close
- [ ] Clicking overlay closes modal

### Video Section
- [ ] Video loads
- [ ] Play icon visible when paused
- [ ] Click plays video + hides icon
- [ ] Click again pauses video + shows icon

### Contact Section
- [ ] Background #F7F8FA
- [ ] Name input present and styled
- [ ] Email input present and styled
- [ ] Message textarea present and styled
- [ ] Submit button green (#1AC073)
- [ ] Illustration on right side

---

## Cross-Browser Tests
| Test                        | Chrome | Firefox | Safari |
|-----------------------------|--------|---------|--------|
| Layout intact               | [ ]    | [ ]     | [ ]    |
| Fonts loading               | [ ]    | [ ]     | [ ]    |
| Carousel working            | [ ]    | [ ]     | [ ]    |
| Modal working               | [ ]    | [ ]     | [ ]    |
| Video working               | [ ]    | [ ]     | [ ]    |
| No horizontal scroll        | [ ]    | [ ]     | [ ]    |
| Hover effects working       | [ ]    | [ ]     | [ ]    |

---

## Responsiveness Tests
- [ ] No horizontal scroll at 1440px
- [ ] No horizontal scroll at 1280px
- [ ] No horizontal scroll at 1024px
- [ ] Layout adapts at 768px (tablet)
- [ ] Layout adapts at 375px (mobile) — optional

---

## Code Quality
- [ ] No inline styles (unless necessary)
- [ ] No unused CSS classes
- [ ] No console errors
- [ ] No broken CDN links
- [ ] HTML validates (semantic tags used)
- [ ] CSS variables used for all colors
