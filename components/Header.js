import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div>
        <header class="header">

            <section class="flex">

            < Logo />

            < Navbar />

            <div id="menu-btn" class="fas fa-bars"></div>

            </section>

            </header>
    </div>
  )
}
