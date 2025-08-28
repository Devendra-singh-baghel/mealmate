import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { MealProvider } from './lib/MealContext '

function App() {
  return (
    <div>
      <Header />
      <MealProvider>
        <Outlet />
      </MealProvider>
      <Footer />
    </div>
  )
}

export default App
