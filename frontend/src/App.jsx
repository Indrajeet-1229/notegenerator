import React from 'react'
import HomePage from './pages/HomePage'
import Createpage from './pages/Createpage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className="relative h-full w-full">
   <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>


      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<Createpage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
   
  )
}

export default App