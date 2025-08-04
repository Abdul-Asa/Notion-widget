# 📝 Notion Quote Widget

A beautiful, customizable quote widget generator for Notion pages. Create inspiring quote widgets with live previews and embed them directly into your Notion workspace.

![Notion Quote Widget Screenshot](https://img.shields.io/badge/React-18.2.0-blue) ![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.3.1-teal) ![Firebase](https://img.shields.io/badge/Firebase-9.9.4-orange)

## ✨ Features

### 🎨 **Widget Customization**

- **Themes**: Light and Dark mode support
- **Typography**: Multiple size options (Text, Heading 1-3)
- **Categories**: Wisdom, Friendship, Inspirational, and Famous Quotes
- **Live Preview**: See your widget design in real-time

### 🔄 **Dynamic Content**

- Random quote generation using [Quotable API](https://quotable.io)
- Refresh functionality to get new quotes
- Copy-to-clipboard for easy sharing
- Category-based quote filtering

### 🎯 **Notion Integration**

- Generate embeddable URLs for Notion
- Seamless widget embedding workflow
- Responsive design for different screen sizes

### 🎭 **Beautiful UI/UX**

- Smooth scroll animations with Framer Motion
- Responsive design for all devices
- Interactive like system
- Modern, clean interface with Chakra UI

### 🔐 **User Authentication**

- Firebase authentication system
- User dashboard for logged-in users
- Custom quote management (feature in development)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/notion-widget.git
   cd notion-widget
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Usage

### Creating a Quote Widget

1. **Visit the Widget Designer**

   - Go to the `/generate-quote` page
   - Or click "Random Quotes" from the homepage

2. **Customize Your Widget**

   - Choose between Light/Dark themes
   - Select typography size (Text, Heading 1-3)
   - Pick a quote category or leave random
   - Preview changes in real-time

3. **Generate Embed URL**

   - Click "Copy URL" to get the embeddable link
   - The URL contains all your customization parameters

4. **Embed in Notion**
   - Paste the URL in a Notion block
   - Select "Create Embed" from the dropdown
   - Enjoy your custom quote widget! 🎉

### Example Usage

```
https://your-domain.com/generate-quote/url?theme=Dark&size=lg&tag=wisdom
```

## 🏗️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[Chakra UI](https://chakra-ui.com/)** - Component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Firebase](https://firebase.google.com/)** - Authentication & database
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Quotable API](https://quotable.io)** - Quote data source
- **[Axios](https://axios-http.com/)** - HTTP client

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Page footer
│   ├── IconButtons.js  # Icon button components
│   └── Images/         # Image assets
├── pages/              # Application pages
│   ├── Home.js         # Landing page
│   ├── RandomQuote.js  # Widget designer
│   ├── GeneratedPage.js # Embeddable widget
│   ├── Dashboard.js    # User dashboard
│   └── Entry.js        # Login/Signup
├── routes/             # Route configuration
├── utils/              # Utility functions
│   ├── firebase.auth.js
│   ├── firebase.config.js
│   └── quotable.api.js
└── Theme.js            # Chakra UI theme
```

## 🔧 Available Scripts

### Development

```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Build for production
```

### Build Output

- Creates optimized production build in `build/` folder
- Includes code splitting and minification
- Ready for deployment to any static hosting service

## 🌐 API Integration

The app integrates with the [Quotable API](https://quotable.io) to fetch random quotes:

```javascript
// Get random quote
GET https://api.quotable.io/random

// Get quote by category
GET https://api.quotable.io/random?tags=wisdom
```

## 🔮 Future Enhancements

- [ ] Custom quote management for authenticated users
- [ ] Additional widget themes and styles
- [ ] Favorite quotes system
- [ ] Share widgets on social media
- [ ] Picture slideshow widgets
- [ ] Quote scheduling and rotation
- [ ] Widget analytics

## 🎯 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: [Mauricio Quezada](https://www.figma.com/community/file/877573866872969565) & [Notion](https://www.figma.com/community/file/956676366169840092)
- **Quote API**: [Quotable by Luke Peavey](https://github.com/lukePeavey/quotable)
- **GitHub Inspiration**: [Saman's notion-quote](https://github.com/saman/notion-quote)
- **Quotes**: Powered by [Quotable API](https://quotable.io)

---

**Note**: This project is not officially affiliated with Notion. It's an independent tool created to enhance Notion workspace productivity.

## 📞 Support

If you found this project helpful, consider:

- ⭐ Starring the repository
- 🐦 Following on [Twitter](https://twitter.com/AbdullahShehu1)
- 🐛 Reporting issues
- 💡 Suggesting new features

Made with ❤️ for the Notion community
