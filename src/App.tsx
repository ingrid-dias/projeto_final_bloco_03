import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/footer/footer'

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
