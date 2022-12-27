import React from 'react'
import course from './images/course-1.svg'
import aske from   './images/course-2.svg'
import asym from   './images/course-3.svg'
import index from  './images/course-4.svg'
import adi from  './images/course-5.svg'
import exx from  './images/course-6.svg'
import Swiper from './Swiper'
export default function Courses() {
  return (
    <div>
     <section class="courses" id="courses">

<h1 class="heading">our <span>courses</span></h1>

<div class="swiper course-slider">

   <div class="swiper-wrapper">

      <div class="swiper-slide slide">
         <img src={course} alt=""/>
         <h3>web development</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
      </div>

      <div class="swiper-slide slide">
         <img src={aske} alt=""/>
         <h3>digital marketing</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
      </div>

      <div class="swiper-slide slide">
         <img src={asym} alt=""/>
         <h3>science and biology</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
      </div>

      <div class="swiper-slide slide">
         <img src={index} alt=""/>
         <h3>graphic design</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
      </div>

      <div class="swiper-slide slide">
         <img src={adi} alt=""/>
         <h3>teaching</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
      </div>

      <div class="swiper-slide slide">
         <img src={exx} alt=""/>
         <h3>engineering</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
      </div>

   </div>

   < Swiper />

</div>

</section>

    </div>
  )
}
