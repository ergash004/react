import hom from './images/homg-img.svg'
import React from 'react'

export default function Home() {
  return (
    <div>
        <section class="home" id="home">

<div class="row">

   <div class="content">
      <h3>online <span>education</span></h3>
      <a href="#contact" class="btn">contact us</a>
   </div>

   <div class="image">
      <img src={hom} alt="kgu"/>
   </div>

</div>

</section>
    </div>
  )
}
