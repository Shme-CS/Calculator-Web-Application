# 🧮 JS Calculator

A modern, responsive calculator web application built with vanilla JavaScript, demonstrating clean code architecture and professional frontend development practices.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript) ![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange?style=flat-square&logo=html5) ![CSS3](https://img.shields.io/badge/CSS3-Grid-blue?style=flat-square&logo=css3) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

[![GitHub](https://img.shields.io/badge/GitHub-Shme--CS-181717?logo=github)](https://github.com/Shme-CS) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin)](https://www.linkedin.com/in/shmelis-kassa-28058a305) [![Email](https://img.shields.io/badge/Email-Contact-D14836?logo=gmail)](mailto:project1111mail@gmail.com)

## 📋 Project Overview

This calculator application showcases mastery of core JavaScript fundamentals, DOM manipulation, event handling, and modern CSS techniques. Built without frameworks or libraries, it demonstrates clean, maintainable code suitable for production environments.

## ✨ Features

### Core Functionality
- ➕ **Basic Operations**: Addition, subtraction, multiplication, and division
- 🔢 **Decimal Support**: Handle floating-point numbers with precision
- 🧹 **Clear Function**: Reset calculator to initial state (AC button)
- ⌫ **Delete Function**: Remove last entered character (DEL button)
- 🔄 **Chained Calculations**: Perform multiple operations sequentially

### User Experience
- ⌨️ **Full Keyboard Support**: Use number keys, operators, Enter, Backspace, and Escape
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean interface with smooth animations and visual feedback
- ♿ **Accessibility**: Keyboard navigation and focus indicators

### Error Handling
- 🚫 **Division by Zero Protection**: Prevents invalid calculations
- 🔒 **Multiple Decimal Prevention**: Only one decimal point per number
- ✅ **Input Validation**: Prevents invalid operator sequences
- 📊 **Number Formatting**: Handles large numbers with exponential notation

## 🚀 Demo

### Calculator Interface
```
┌─────────────────────────┐
│  Previous: 123 + 456    │
│  Current:  579          │
├─────────────────────────┤
│  AC  │  DEL │  ÷       │
│  7   │  8   │  9  │  × │
│  4   │  5   │  6  │  - │
│  1   │  2   │  3  │  + │
│  0        │  .  │  =   │
└─────────────────────────┘
```

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `.` | Decimal point |
| `+` `-` `*` `/` | Operations |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last character |
| `Escape` | Clear all |

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **No frameworks or libraries**: Pure vanilla JavaScript

## 📦 Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shme-CS/js-calculator.git
   cd js-calculator
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server:
   npx serve
   # Or with Python:
   python -m http.server 8000
   ```

3. **Start calculating!**
   - No build process required
   - No dependencies to install
   - Works offline

## 📖 Usage Guide

### Basic Operations
1. Click number buttons or use keyboard to enter first number
2. Click an operator (+, -, ×, ÷) or use keyboard
3. Enter second number
4. Press `=` or `Enter` to see result

### Advanced Usage
- **Chained Calculations**: After getting a result, continue with another operation
- **Decimal Numbers**: Click `.` or press period key for decimal point
- **Clear All**: Press `AC` button or `Escape` key to reset
- **Delete Last**: Press `DEL` button or `Backspace` to remove last digit

### Example Calculations
```javascript
// Simple addition
12 + 34 = 46

// Chained operations
10 + 5 × 2 = 30

// Decimal calculations
3.14 × 2 = 6.28

// Division
100 ÷ 4 = 25
```

## 🏗️ Code Structure Explanation

### Architecture Overview
The application follows a clean, modular architecture with separation of concerns:

```
js-calculator/
│
├── index.html          # Semantic HTML structure
├── style.css           # Modern CSS with Grid layout
├── script.js           # Calculator logic and event handling
└── README.md           # Documentation
```

### JavaScript Architecture

#### Calculator Class
The core logic is encapsulated in a `Calculator` class:

```javascript
class Calculator {
    constructor(previousOperandElement, currentOperandElement)
    clear()                    // Reset calculator state
    delete()                   // Remove last character
    appendNumber(number)       // Add digit to current operand
    chooseOperation(operation) // Select mathematical operation
    calculate()                // Perform calculation
    formatResult(number)       // Format output
    getDisplayNumber(number)   // Format for display
    updateDisplay()            // Update DOM
}
```

#### Key Design Patterns
- **Encapsulation**: All calculator logic contained in a single class
- **State Management**: Internal state tracking for operands and operations
- **Event Delegation**: Efficient event handling with data attributes
- **Separation of Concerns**: Logic, presentation, and structure separated

### CSS Architecture

#### Layout Strategy
- **CSS Grid**: Button layout with responsive columns
- **Flexbox**: Display alignment and container centering
- **CSS Variables**: Centralized theming and easy customization

#### Responsive Breakpoints
```css
@media (max-width: 480px)  /* Mobile devices */
@media (max-width: 360px)  /* Small mobile devices */
```

## 🎨 Customization

### Color Scheme
Edit CSS variables in `style.css`:

```css
:root {
    --primary-bg: #1a1a2e;
    --accent-color: #e94560;
    --btn-equals: #00d9ff;
    /* Modify these to change the theme */
}
```

### Button Layout
Modify the grid in `style.css`:

```css
.buttons {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}
```

## 🔮 Future Improvements

- [ ] Add scientific calculator mode (sin, cos, tan, log, etc.)
- [ ] Implement calculation history with localStorage
- [ ] Add theme switcher (light/dark mode)
- [ ] Support for parentheses and order of operations
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Export calculation history as PDF
- [ ] Add unit tests with Jest
- [ ] Implement PWA features for offline use
- [ ] Add sound effects for button presses
- [ ] Support for percentage calculations

## 🧪 Testing

### Manual Testing Checklist
- ✅ All basic operations work correctly
- ✅ Keyboard input functions properly
- ✅ Division by zero shows error
- ✅ Multiple decimals are prevented
- ✅ Display updates correctly
- ✅ Responsive on all screen sizes
- ✅ Buttons provide visual feedback

### Browser Compatibility
Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License

Copyright (c) 2026 Shmelis Kassa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Shmelis Kassa (Shme-CS)**

- 💼 **LinkedIn:** [Shmelis Kassa](https://www.linkedin.com/in/shmelis-kassa-28058a305)
- 📧 **Email:** project1111mail@gmail.com
- 🐙 **GitHub:** [@Shme-CS](https://github.com/Shme-CS)
- 🌐 **Portfolio:** [github.com/Shme-CS](https://github.com/Shme-CS)

Feel free to reach out for collaborations, questions, or just to connect!

## 🙏 Acknowledgments

- Inspired by modern calculator designs
- Built as a portfolio project to demonstrate JavaScript fundamentals
- Thanks to the web development community for best practices

---

⭐ **Star this repository if you found it helpful!**

**Made with ❤️ using Vanilla JavaScript**
