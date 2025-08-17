# BueaDelights - Authentic Cameroonian Cuisine

![BueaDelights Logo](public/logo/logo_caroline_bby.png)

## 📱 About BueaDelights

BueaDelights is a premium food delivery platform specializing in authentic Cameroonian cuisine in Buea, Cameroon. Founded by Caroline Folefack Viviane in 2020, the platform offers a wide variety of traditional dishes, snacks, and beverages with an easy ordering process via WhatsApp integration.

**Live site**: [BueaDelights.com](https://bueadelights.com)

### 🔍 Key Features

- **Progressive Web App (PWA)** with offline capabilities
- **WhatsApp Integration** for seamless ordering
- **Multilingual Support** (French & English)
- **Cart & Favorites System** for enhanced user experience
- **Mobile-First Design** optimized for all screen sizes
- **Performance Optimized** with modern web technologies

## 🧰 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PWA**: Vite PWA Plugin
- **Routing**: React Router DOM
- **Testing**: Vitest
- **Deployment**: Netlify

## 🗂️ Project Structure

```
bueadelights-official/
├── public/                # Static assets
│   ├── avatars/           # User avatar images
│   ├── doc/               # Documentation files
│   ├── flyer/             # Promotional images
│   ├── image/             # General images
│   ├── logo/              # Logo files
│   └── videos/            # Video content
├── src/
│   ├── components/        # UI components
│   │   ├── cart/          # Cart related components
│   │   ├── common/        # Shared/utility components
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── menu/          # Menu-related components
│   │   ├── sections/      # Feature sections
│   │   └── whatsapp/      # WhatsApp integration components
│   ├── contexts/          # React Context providers
│   ├── data/              # Application data (menu items)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── App.tsx                # Main application component
├── index.css              # Global styles
└── main.tsx               # Application entry point
```

## 🍽️ Menu & Services

BueaDelights offers a diverse range of authentic Cameroonian cuisine including:

- **Traditional Dishes**: Ndolé, Eru, Achu, and more
- **Rice & Sides**: Jollof Rice, Fried Rice
- **Grilled Specialties**: Fish, Chicken, and Meat options
- **Snacks & Appetizers**: Plantain Chips, Puff-Puff
- **Beverages**: Traditional and Modern Drinks

All dishes are available in multiple portion sizes with customization options.

## 🌐 WhatsApp Integration

The application features a sophisticated WhatsApp integration that allows customers to:

- View the menu directly in WhatsApp
- Place orders with customizations
- Get delivery information
- Receive recommendations
- Call for support

The WhatsApp number is: **+237 699 808 260**

## ⚙️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm 9+
- Git

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/momogodi2000/bueadelight-V2.git
   cd bueadelight-V2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

## 🚀 Deployment

The application is configured for deployment on Netlify with the following features:

- Automatic HTTPS
- SPA fallback for client-side routing
- Custom redirects for WhatsApp and menu shortcuts
- Performance optimization with Netlify Edge

For detailed deployment instructions, see [DEPLOYMENT.md](public/DEPLOYMENT.md).

## 📱 PWA Features

BueaDelights is a Progressive Web App with:

- Offline capability
- Add to Home Screen prompt
- Fast loading and caching
- Push notification support (in development)
- Responsive design for all devices

## 🛠️ Development Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking
- `npm run test`: Run Vitest tests
- `npm run test:ui`: Run Vitest tests with UI

## 👤 About the Developer

This application was developed by Caroline Folefack Viviane, founder of BueaDelights.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ for BueaDelights © 2023-2025
