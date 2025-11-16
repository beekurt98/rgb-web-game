# RGB Color Guess Game

My take on an interactive color-matching game built with Next.js and React, inspired by RGB Rush on Steam. Test your color perception by matching RGB values to recreate target colors.

![RGB Color Guess Game](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react) ![CSS Modules](https://img.shields.io/badge/CSS-Modules-pink?style=flat-square)

## Features

- **Modern UI** - Clean, dark-themed interface with smooth animations
- **Custom Gradient Sliders** - Interactive RGB sliders with visual feedback
- **Responsive Design** - Optimized for both mobile and desktop experiences
- **Real-time Accuracy** - Instant feedback on how close your guess is
- **Score Tracking** - Track your performance across 10 rounds
- **Pure CSS** - No Tailwind, built with CSS Modules for maintainability

## How to Play

1. Observe the **Target** color displayed on screen
2. Use the RGB sliders (Red, Green, Blue) to adjust your guess
3. Watch the **Your Guess** box update in real-time
4. Click **Submit Guess** to see your accuracy score
5. Complete 10 rounds and track your average score

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rgb-web-game

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start playing!

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: CSS Modules
- **Fonts**: Spline Sans (Google Fonts)
- **Icons**: Material Symbols

## Project Structure

```
rgb-web-game/
├── src/
│   ├── app/
│   │   ├── (pages)/rgb/      # Main game page
│   │   ├── globals.css        # Global styles & theme
│   │   └── layout.js          # Root layout
│   ├── components/
│   │   ├── ColorBox.jsx       # Color display
│   │   ├── ColorInput.jsx     # Custom RGB slider
│   │   ├── RgbBoxes.jsx       # Color comparison
│   │   └── RgbInputs.jsx      # Controls container
│   ├── hooks/
│   │   └── useColors.jsx      # State management
│   └── utils/
│       ├── calculator.js      # Accuracy calculation
│       └── helper.js          # Utility functions
```

## Key Features

### Custom RGB Sliders

- Gradient-filled tracks showing color intensity
- Large clickable areas for optimal UX
- Smooth thumb animations with hover effects
- Works seamlessly on touch and mouse devices

### Responsive Design

- Mobile-first (320px+)
- Tablet optimization (480px+)
- Desktop enhancements (768px+)
- Max-width container (640px) centered layout

### Dark Theme

- Eye-comfortable dark palette
- Subtle glass-morphism effects
- Carefully chosen contrast ratios

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari & Chrome Mobile

## License

MIT

---

Built with Next.js and React
