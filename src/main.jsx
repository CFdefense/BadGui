import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Resteraunts from './pages/Resteraunts.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Explore from './pages/Explore.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Resteraunts />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
