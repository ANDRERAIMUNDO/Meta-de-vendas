import { useState } from 'react'
import NotificationButton from './components/notificationsButton'
import Header from './components/header'
import SalesCard from './components/salesCard'

function App() {
  return(
    <>
    <Header/>
      <main>
      <section id="sales">
      <div className="meta-container">
        <SalesCard/>
      </div>
      </section>
      </main>
    </>
  )
}

export default App
