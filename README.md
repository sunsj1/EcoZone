# PashuMitra - Cattle Management Application

A modern cattle management web application built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive solution for managing cattle inventory, fertility tracking, and health monitoring.

## 🚀 **Features**

- **Multi-language Support** - Choose from 8 Indian languages
- **User Authentication** - Secure signup and login system
- **Dashboard Analytics** - Comprehensive overview of cattle statistics
- **Cattle Management** - Complete inventory management system
- **Responsive Design** - Mobile-first approach with modern UI
- **Type Safety** - Full TypeScript support for better development experience

## 🎨 **Design & Colors**

The application uses a consistent color scheme matching the original design:

- **Primary Yellow**: `#FFD700` (Yellow-400) - Main brand color
- **Secondary Orange**: `#FFB366` (Orange-400) - Accent color
- **Light Yellow**: `#FEF3C7` (Yellow-100) - Card backgrounds
- **Light Orange**: `#FFEDD5` (Orange-100) - Alternate card backgrounds
- **Gray Scale**: Professional grays for text and borders

## 📱 **Pages & Navigation**

### 1. **Language Selection** (`/language`)

- PashuMitra branding
- 8 language options (English, Hindi, Marathi, Gujarati, Nepali, Bangla, Kannada, Punjabi)
- Clean, centered layout with radio button selection

### 2. **Sign Up** (`/signup`)

- Account creation form
- Email, phone, and password fields
- Remember me checkbox and forgot password link
- Responsive split-screen layout (gray left, white right)

### 3. **Login** (`/login`)

- Authentication form
- Pre-filled email (Adeshmehta27@gmail.com)
- Password field with visibility toggle
- Same responsive layout as signup

### 4. **Dashboard** (`/dashboard`)

- Welcome message for Uday Singh
- 4 stat cards (Total Cows, Milking Cows, Avg Milk/Cow, Dry Cows)
- Fertility Summary with 6 sub-cards
- Cattle Health section (placeholder for future content)
- Yellow header with navigation

### 5. **Cattle List** (`/cattle`)

- Grid of 12 cattle cards
- Alternating light yellow and light orange backgrounds
- Placeholder cow images (replaceable with real images)
- Cattle names and identification numbers
- Navigation back to dashboard

## 🛠 **Tech Stack**

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Routing**: React Router DOM for navigation
- **Build Tool**: Create React App
- **Development**: Hot reload with development navigation

## 🚀 **Getting Started**

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🔧 **Development Features**

### **Development Navigation**

- Fixed navigation panel in top-left corner (development only)
- Quick access to all pages for testing
- Current page highlighting
- Hidden in production builds

### **Component Structure**

```
src/
├── components/              # Reusable UI components
│   ├── Button/             # Button component with variants
│   ├── Card/               # Card component with padding options
│   ├── DevNavigation/      # Development navigation (dev only)
│   └── index.ts            # Component exports
├── pages/                   # Page components
│   ├── LanguageSelection/  # Language selection page
│   ├── SignUp/             # Account creation page
│   ├── Login/              # Authentication page
│   ├── Dashboard/          # Main dashboard
│   ├── CattleList/         # Cattle management page
│   └── index.ts            # Page exports
├── App.tsx                  # Main application with routing
├── index.tsx                # Application entry point
└── index.css                # Global styles with Tailwind
```

## 🖼 **Image Integration**

### **Current Setup**

- Placeholder images using `https://via.placeholder.com/` service
- Cow images are 150x150px with appropriate colors
- Easy to replace with real cattle photos

### **To Replace Images**

1. Update the `imageUrl` property in `src/pages/CattleList/CattleList.tsx`
2. Replace placeholder URLs with actual image paths
3. Ensure images are optimized for web (recommended: 150x150px, JPG/PNG)

## 🎯 **Customization**

### **Adding New Pages**

1. Create new folder in `src/pages/`
2. Create the page component (e.g., `NewPage.tsx`)
3. Create an `index.ts` file for exports
4. Update `src/pages/index.ts` to export the new page
5. Add route in `src/App.tsx`

### **Modifying Colors**

- Update `tailwind.config.js` for global color changes
- Modify component-specific colors in individual files
- Use Tailwind's color palette for consistency

### **Adding New Features**

- Extend interfaces in TypeScript files
- Add new components in `src/components/`
- Update navigation and routing as needed

## 📱 **Responsive Design**

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive grid layouts for all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Accessibility**: Proper focus states and keyboard navigation

## 🚀 **Deployment**

### **Production Build**

```bash
npm run build
```

### **Static Hosting**

The build folder can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔒 **Security Notes**

- Form validation implemented
- Password visibility toggle for better UX
- Remember me functionality (client-side only)
- No actual authentication backend (static UI only)

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

## 🆘 **Support**

For support or questions:

- Check the documentation
- Review the code structure
- Test all pages and navigation
- Ensure all dependencies are installed

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
