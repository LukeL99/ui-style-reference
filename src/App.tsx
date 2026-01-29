import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { StylePage } from './pages/StylePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/style/:slug" element={<StylePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
