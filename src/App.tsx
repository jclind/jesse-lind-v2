import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/404/404'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='*'
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
