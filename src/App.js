import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Header } from './component/Header'
import { Playlist } from './page/Playlist'
import { Explore } from './page/Explore'
import { Watchlater } from './page/WatchLater'
import { CategoryPage } from './page/CategoryPage'

function App () {
  return (
    <div className='App grid grid-cols-6 m-6'>
      <div className='col-span-1 h-screen'>
        <Header />
      </div>
      <div className='col-span-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/watchlater' element={<Watchlater />} />
          <Route path='/:videoCategory' element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
