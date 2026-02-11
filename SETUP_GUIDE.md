## How to Add Your SVG Files and GIFs to the Project

### Step 1: Add Your SVG Files

Replace the inline SVG placeholders in `components/Letter.tsx` with your actual SVG content:

**For Yes Button:**
1. Open your `yes.svg` file in a text editor
2. Copy the SVG code (everything between `<svg>` and `</svg>`)
3. In `Letter.tsx`, find the YES button SVG section (around line 74) and replace the content inside the `<svg>` tags

**For No Button:**
1. Open your `no.svg` file in a text editor
2. Copy the SVG code
3. In `Letter.tsx`, find the NO button SVG section (around line 88) and replace the content inside the `<svg>` tags

**Example:**
```tsx
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* Paste your SVG content here */}
</svg>
```

### Step 2: Add Your GIF Files to `/public`

Place these GIF files in the `/public` folder:
- `cat_heart.gif` - Default cat reaction (already configured)
- `cat_dance.gif` - Victory dance when user clicks Yes (already configured)
- `cat_no.gif` - **NEW** - Reaction when hovering over No button

### Step 3: How the "No" Button Reaction Works

When the user hovers over the "No" button:
1. The cat gif switches to `cat_no.gif` (the reaction gif)
2. It displays for exactly 2 milliseconds (very quick flash)
3. It automatically switches back to `cat_heart.gif`
4. The button moves to a random position

The logic is in the `handleNoHover` function:
```tsx
const handleNoHover = () => {
  // ... button movement code ...
  
  // Show the "no" reaction gif for 2ms
  setCatImage("/cat_no.gif");
  setTimeout(() => {
    setCatImage("/cat_heart.gif");
  }, 2);
};
```

### Step 4: Gif Positioning

The gif is now displayed next to the envelope on the left side:
- **Desktop:** Side-by-side layout (envelope on right, gif on left)
- **Mobile:** Stacked vertically (gif on top, envelope below)

The positioning is controlled by `.gifContainer` in `Letter.module.css` with a 40px gap between them.

### Step 5: Upload Your Files

1. Go to `/public` folder in your project
2. Upload your SVG files (they can stay as SVG files, they're not needed in `/public` since they're embedded in the component)
3. Upload your three GIF files:
   - `cat_heart.gif`
   - `cat_dance.gif`
   - `cat_no.gif`

### File Structure

```
/public
├── cat_heart.gif      (default cat)
├── cat_dance.gif      (yes reaction)
├── cat_no.gif         (no reaction - NEW)
├── window.png         (envelope window background)
├── envelope.png       (not used anymore)
├── yes.png            (replaced by SVG)
├── no.png             (replaced by SVG)
└── heart-bg.jpg       (background)
```

### Customization Tips

**Change the delay:** If 2ms is too fast/slow, modify the `setTimeout` value in `handleNoHover()`:
```tsx
setTimeout(() => {
  setCatImage("/cat_heart.gif");
}, 200); // Change 2 to any millisecond value
```

**Adjust gif size:** Edit `.sideGif` in `Letter.module.css`:
```css
.sideGif {
  width: 180px;  /* Change this */
  height: 180px; /* Or this */
}
```

**Change spacing:** Adjust the `gap` value in `.letterContainer` in `Letter.module.css`:
```css
.letterContainer {
  gap: 40px; /* Increase or decrease spacing */
}
```
