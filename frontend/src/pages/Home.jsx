import React from 'react'
import Navbar from '../components/homeComponents/Navbar'
import Markets from '../components/homeComponents/Markets'
import Season from '../components/Landing/Season'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Markets/>
      <Season/>
    </div>
  )
}
