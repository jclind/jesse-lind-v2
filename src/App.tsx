import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/404/404'
import Layout from './components/Layout/Layout'
import { navLinks } from './assets/data/navLinks'

function App() {
  return (
    <div className='App'>
      <Routes>
        {navLinks.map(link => (
          <Route
            path={link.path}
            element={
              <Layout>
                <>{link.component}</>
              </Layout>
            }
          />
        ))}

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
