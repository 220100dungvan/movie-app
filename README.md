# 🎬 Movie App

<div align="center">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
</div>

<div align="center">
  <h3>✨ A modern movie browsing app ✨</h3>
</div>

---

## 🤖 Introduction

Built with **React.js** for the user interface, **Appwrite** for backend services, and styled with **TailwindCSS**, this Movie App lets users browse trending movies, search titles, and explore content using the **TMDB API**. It features a responsive layout and a sleek, modern design.

## ⚙️ Tech Stack

<table>
  <tr>
    <td align="center">
      <img src="https://appwrite.io/images/logos/appwrite.svg" width="40" height="40" alt="Appwrite"/>
      <br><strong>Appwrite</strong>
    </td>
    <td align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="40" height="40" alt="React"/>
      <br><strong>React.js</strong>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/streamich/react-use/master/docs/logo.png" width="40" height="40" alt="React-use"/>
      <br><strong>React-use</strong>
    </td>
    <td align="center">
      <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="40" height="40" alt="TailwindCSS"/>
      <br><strong>Tailwind CSS</strong>
    </td>
    <td align="center">
      <img src="https://vitejs.dev/logo.svg" width="40" height="40" alt="Vite"/>
      <br><strong>Vite</strong>
    </td>
  </tr>
</table>

## 🔋 Features

| Feature | Description |
|---------|-------------|
| 🎭 **Browse All Movies** | Explore a wide range of movies available on the platform |
| 🔍 **Search Movies** | Easily search for specific movies using a search function |
| 🎬 **Movie Detail Page** | View comprehensive information about movies including trailers, cast, and production details |
| 📈 **Trending Movies Algorithm** | Displays trending movies based on a dynamic algorithm |
| 🎨 **Modern UI/UX** | A sleek and user-friendly interface designed for a great experience |
| 📱 **Responsiveness** | Fully responsive design that works seamlessly across devices |


## 📁 Project Structure

```
📦 src/
├── 🧩 components/
│   ├── 🎬 MovieCard.jsx          # Movie card component
│   ├── 📄 Pagination.jsx         # Pagination controls
│   ├── 🔍 Search.jsx             # Search input component
│   ├── ⏳ Spinner.jsx            # Loading spinner
│   ├── ⬆️ ScrollToTop.jsx        # Auto scroll to top on route change
│   └── 🎯 icons/                 # Custom icon components
│       ├── ⬅️ ChevronLeft.jsx
│       ├── ➡️ ChevronRight.jsx
│       └── ▶️ PlayButton.jsx
├── 📄 pages/
│   ├── 🏠 Home.jsx               # Home page with search and movie grid
│   └── 🎬 MovieDetail.jsx        # Movie detail page
├── 🛠️ utils/
│   └── 📝 format.js              # Utility functions for formatting
├── ☁️ appwrite/
│   ├── ⚙️ config.js              # Appwrite configuration
│   └── 🗃️ database.js            # Database operations
├── 🎯 App.jsx                    # Main app component with routing
├── 🚀 main.jsx                   # App entry point
└── 🎨 index.css                  # Global styles and Tailwind config
```

## 🚀 Getting Started

### 📋 Prerequisites

- 📦 **Node.js** (version 18 or higher)
- 📦 **npm** or **yarn**
- 🔑 **TMDB API key**
- ☁️ **Appwrite account** (optional, for trending movies feature)

### 🛠️ Installation

#### 1️⃣ Clone the repository:
```bash
git clone <your-repo-url>
cd movie-app
```

#### 2️⃣ Install dependencies:
```bash
npm install
```

#### 3️⃣ Environment Setup:
Create a `.env.local` file in the root directory:

```env
# 🎬 TMDB Configuration
VITE_TMDB_API_KEY=your_tmdb_api_key_here

# ☁️ Appwrite Configuration
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID_METRICS=your_collection_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
```

#### 4️⃣ Start the development server:
```bash
npm run dev
```

#### 5️⃣ Open your browser:
Navigate to `http://localhost:5173` 🌐

### 🔑 Getting TMDB API Key

<div align="center">

| Step | Action |
|------|--------|
| 1️⃣ | Visit [The Movie Database](https://www.themoviedb.org/) |
| 2️⃣ | Create an account or sign in |
| 3️⃣ | Go to your account settings |
| 4️⃣ | Navigate to the API section |
| 5️⃣ | Request an API key and follow the instructions |

</div>

---

