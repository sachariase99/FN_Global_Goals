import React from 'react'
import { Header, Navbar, WorldGoals, SharedGoals, Challenges, Contact, Footer } from "./components";

const App = () => (
  <div className='bg-backgroundAccent'>
    <Header />
    <Navbar />
    <div className='max-w-[1000px] m-auto p-4'>
    <WorldGoals />
    <SharedGoals />
    <Challenges />
    <Contact />
    </div>
    <Footer />
  </div>
)

export default App