# Shape Properties Analysis (23-oct2023)

These items/components are the items which actually get drawn on the canvas when we create a canvas slide.
So far we have 22 items.
Removing items from code would mean that we can no longer support our older videos.  
It is important to list their unique properties as well as their common properties so that there is no discripency in code and data.

## 1. Line
- **Unique Properties:**
  - x1 (animated)
  - y1 (animated)
  - x2 (animated)
  - y2 (animated)
  - lineWidth (animated)
- **Extra Fields:** Added ✓

## 2. Lines
- **Unique Properties:**
  - x (animated)
  - y (animated)
  - drawBorder (animated)
  - fill (animated)
  - color (animated)
  - fillBg (animated)
  - bgColor (animated)
  - width (animated)
  - height (animated)
  - lines (array of vertices)
- **Extra Fields:** Added ✓

## 3. Rectangle
- **Unique Properties:**
  - x (animated)
  - y (animated)
  - width (animated)
  - height (animated)
  - filled (animated)
  - lineWidth (animated)
- **Extra Fields:** Added ✓

## 4. Text
- **Unique Properties:**
  - text (animated)
  - x (animated)
  - y (animated)
  - fontSize (animated)
  - font (string)
- **Extra Fields:** Added ✓

## 5. Ellipse
- **Unique Properties:**
  - x (animated)
  - y (animated)
  - radiusX (animated)
  - radiusY (animated)
  - rotation (animated)
  - startAngle (animated)
  - endAngle (animated)
  - lineWidth (animated)
  - fill (animated)
- **Extra Fields:** Added ✓

## 6. Pie Chart
- **Unique Properties:**
  - x (animated)
  - y (animated)
  - radius (animated)
  - data (string - JSON format)
- **Extra Fields:** Added ✓

## 7. Circle
- **Unique Properties:**
  - x (animated)
  - y (animated)
  - radius (animated)
  - startAngle (animated)
  - endAngle (animated)
  - fill (animated)
  - lineWidth (animated)
- **Extra Fields:** Added ✓

## 8. Bezier
- **Unique Properties:**
  - x (number)
  - y (number)
  - x1 (number)
  - y1 (number)
  - x2 (number)
  - y2 (number)
  - lineWidth (number)
  - showHandle (boolean)
- **Extra Fields:** Added ✓

## 9. Angle Symbol
- **Unique Properties:**
  - x (number)
  - y (number)
  - radius (number)
  - ticks (number)
  - startAngle (number)
  - endAngle (number)
  - lineWidth (number)
  - showOrigin (boolean)
- **Extra Fields:** Added ✓

## 10. Dot
- **Unique Properties:**
  - x (animated)
  - y (animated)
  - label (animated)
  - dot_width (animated)
  - text_color (animated)
  - text_size (animated)
  - fill (animated)
- **Extra Fields:** Added ✓

## 11. Icon
- **Unique Properties:**
  - text (animated)
  - x (animated)
  - y (animated)
  - fontSize (animated)
  - iconSize (animated)
  - fontFamily (string)
  - icon (string)
  - showBg (boolean)
  - iconOnTop (boolean)
  - iconErrorX (number)
  - iconErrorY (number)
  - bgColor (animated)
- **Extra Fields:** Added ✓

## 12. Grid
- **Unique Properties:**
  - cellWidth (number)
  - cellHeight (number)
  - lineWidth (number)
  - lineColor (string)
- **Extra Fields:** Added ✓

## 13. Polygon
- **Unique Properties:**
  - points (array)
  - filled (boolean)
  - lineWidth (number)
- **Extra Fields:** Added ✓

## 14. Triangle
- **Unique Properties:**
  - x1 (animated)
  - y1 (animated)
  - x2 (animated)
  - y2 (animated)
  - x3 (animated)
  - y3 (animated)
  - lineWidth (animated)
  - filled (animated)
- **Extra Fields:** Added ✓

## 15. Ray
- **Unique Properties:**
  - x0 (animated)
  - y0 (animated)
  - x1 (animated)
  - y1 (animated)
  - lineWidth (animated)
  - arrowWidth (animated)
  - arrowHeight (animated)
  - startArrow (boolean)
  - endArrow (boolean)
- **Extra Fields:** Added ✓

## 16. Repeat Dot
- **Unique Properties:**
  - numberOfDots (number)
  - initialX (number)
  - initialY (number)
  - xFactor (number)
  - yFactor (number)
  - width (number)
- **Extra Fields:** Added ✓

## 17. Repeat Text
- **Unique Properties:**
  - textArray (string)
  - initialX (animated)
  - initialY (animated)
  - xFactor (animated)
  - yFactor (animated)
  - font (string)
- **Extra Fields:** Added ✓

## 18. Paragraph
- **Unique Properties:**
  - text (string)
  - x (animated)
  - y (animated)
  - font (string)
  - fontSize (animated)
  - lineHeightOffset (number)
  - xOffset (number)
- **Extra Fields:** Added ✓

## 19. System Image
- **Unique Properties:**
  - src (string)
  - x (animated)
  - y (animated)
  - width (animated)
  - height (animated)
- **Extra Fields:** Added ✓

## 20. Image
- **Unique Properties:**
  - src (string)
  - image (null)
  - x (number)
  - y (number)
  - ext (string)
  - width (number)
  - height (number)
- **Extra Fields:** Added ✓

## 21. Image2
- **Unique Properties:**
  - src (string)
  - image (null)
  - sx (animated)
  - sy (animated)
  - sw (animated)
  - sh (animated)
  - dx (animated)
  - dy (animated)
  - width (animated)
  - height (animated)
  - ext (string)
- **Extra Fields:** Added ✓

## 22. Sprite
- **Unique Properties:**
  - spriteId (string)
  - sheet (string)
  - sheetItem (string)
  - dx (animated)
  - dy (animated)
  - wFactor (number)
  - hFactor (number)
- **Extra Fields:** Added ✓

## Common Extra Fields:

translate (boolean)
command (string)
name (string)
color (animated)
showAt (number)
globalAlpha (animated)
gap (animated)
dash (animated)
shadowOffsetX (number)
shadowOffsetY (number)
shadowColor (string)
shadowBlur (number)