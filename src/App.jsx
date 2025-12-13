import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import SmoothScroll from './components/SmoothScroll'

function App() {

  return (
    <>
    <SmoothScroll>
      <div className='relative'>
        <div className='pointer-events-none fixed inset-0 z-30 opacity-[0.13] bg-[url("/noise-6.jpg")] bg-cover'></div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="*"  element={<NotFound/> }/>
              </Routes>
            </BrowserRouter>
          
        </div>
      </SmoothScroll>
    </>
  )
}

export default App
