# 🌍 WORLDWISE

_Track your adventures around the world with an interactive map interface._

![Last Commit](https://img.shields.io/github/last-commit/rebestx/worldwise?style=flat&logo=git&logoColor=white&color=00c46a)  
![Top Language](https://img.shields.io/github/languages/top/rebestx/worldwise?style=flat&color=00c46a)  
![Language Count](https://img.shields.io/github/languages/count/rebestx/worldwise?style=flat&color=00c46a)

_Built with modern tools and technologies:_

![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900.svg?style=flat&logo=Leaflet&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&logo=CSS3&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Styling](#styling)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Future Enhancements](#future-enhancements)
- [Known Issues](#known-issues)
- [Acknowledgements](#acknowledgements)

---

## Overview

WorldWise is a modern travel tracking application that helps you keep track of your adventures around the world. Built with React and powered by an interactive map interface, it allows users to log cities they've visited, add personal notes, and visualize their travel history on a beautiful world map.

## Features

- **Interactive World Map**: Navigate and explore the world with a beautiful interactive map
- **City Tracking**: Add cities you've visited by clicking on the map
- **Country Overview**: View all countries you've explored with emoji flags
- **Personal Notes**: Add notes and memories for each visited city
- **User Authentication**: Secure login system to protect your travel data
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Geolocation**: Find your current location with one click
- **Wikipedia Integration**: Learn more about visited cities with direct Wikipedia links

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployment URL here -->

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: CSS Modules
- **Maps**: Leaflet & React Leaflet
- **Build Tool**: Vite
- **Backend**: JSON Server (for development)
- **Linting**: ESLint
- **State Management**: React Context API + useReducer

## Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/worldwise.git
   cd worldwise
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development servers**

   Start the JSON server (backend):

   ```bash
   npm run server
   ```

   In a new terminal, start the React app:

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## Project Structure

```
worldwise/
├── public/                 # Static assets
│   ├── logo.png           # App logo
│   ├── icon.png           # Favicon
│   └── img-1.jpg          # Hero images
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Map.jsx        # Interactive map component
│   │   ├── CityList.jsx   # City listing component
│   │   ├── Form.jsx       # Add city form
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Homepage.jsx   # Landing page
│   │   ├── Login.jsx      # Authentication page
│   │   └── AppLayout.jsx  # Main app layout
│   ├── context/           # React Context providers
│   │   ├── CityContext.jsx    # Cities state management
│   │   └── FakeAuthContext.jsx # Authentication context
│   ├── hooks/             # Custom React hooks
│   │   ├── useCities.jsx  # Cities data hook
│   │   ├── useAuth.jsx    # Authentication hook
│   │   └── useGeolocation.jsx # Geolocation hook
│   └── utils/             # Utility functions
├── data/
│   └── cities.json        # Mock database
└── package.json
```

## Usage

### Getting Started

1. **Login**: Use the default credentials (email: `jack@example.com`, password: `qwerty`)
2. **Explore**: Navigate around the interactive map
3. **Add Cities**: Click on any location on the map to add a new city
4. **View Details**: Click on existing markers to view city information
5. **Manage Data**: View your cities and countries in organized lists

### Features Walkthrough

#### 🗺️ Interactive Map

- Pan and zoom to explore different regions
- Click anywhere to add a new city to your travel log
- View all your visited cities with custom markers
- Get your current location with the "Use my location" button

#### 🏙️ City Management

- Add cities with automatic country detection
- Include personal notes and visit dates
- Delete cities you no longer want to track
- View detailed information for each city

#### 🌏 Country Overview

- See all countries you've visited
- Countries are automatically grouped from your city visits
- Visual representation with country flag emojis

### Available Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run server`  | Start JSON server backend |
| `npm run lint`    | Run ESLint                |

## API Endpoints

The application uses a local JSON server with the following endpoints:

- `GET /cities` - Fetch all cities
- `GET /cities/:id` - Fetch specific city
- `POST /cities` - Add new city
- `DELETE /cities/:id` - Delete city

## Styling

This project uses **CSS Modules** for styling, providing:

- Scoped CSS classes
- Modular component styling
- CSS custom properties for theming
- Responsive design patterns

### Color Palette

- Primary Orange: `#ffb545`
- Primary Green: `#00c46a`
- Dark Backgrounds: `#242a2e`, `#2d3439`, `#42484d`
- Light Text: `#aaa`, `#ececec`, `#d6dee0`

## Authentication

The app includes a mock authentication system:

- **Email**: `jack@example.com`
- **Password**: `qwerty`

For production use, replace the `FakeAuthContext` with a real authentication provider.

### Geolocation Features

- **Browser Geolocation**: Get user's current position
- **Reverse Geocoding**: Convert coordinates to city/country names
- **Error Handling**: Graceful handling of location permission denials

### Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

> **Note**: For production deployment, you'll need to replace the JSON server with a real backend API.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Future Enhancements

- [ ] Real backend API integration
- [ ] User registration system
- [ ] Photo uploads for cities
- [ ] Travel statistics and analytics
- [ ] Social sharing features
- [ ] Offline support with PWA
- [ ] Multi-language support
- [ ] Export travel data functionality

## 🐛 Known Issues

- JSON Server is for development only - replace with real backend for production
- Limited to mock authentication system
- Requires internet connection for map tiles

## 👏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Leaflet](https://leafletjs.com/) - Interactive maps
- [Vite](https://vitejs.dev/) - Build tool
- [BigDataCloud](https://www.bigdatacloud.com/) - Geocoding API
- [OpenStreetMap](https://www.openstreetmap.org/) - Map tiles

---
