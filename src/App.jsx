import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import AppContextProvider from './lib/AppContextProvider'

function App() {
  return (
    <AppContextProvider>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </AppContextProvider>

  )
}

export default App
