import React from 'react'


import kind from './images/tutor-3.png'
import sad from './images/tutor-4.png'
import faw from './images/tutor-5.png'
import toni from './images/tutor-6.png' 
import Swl from './Swl'
import Swl1 from './Swl1'


export default function Teachers() {
  return (
    <div>
        <section class="teachers" id="teachers">

        <h1 class="heading">expert <span>tutors</span></h1>

        <div class="swiper teachers-slider">

        <div class="swiper-wrapper">

            < Swl />
            
            < Swl1 />

            <div class="swiper-slide slide">
                <img src={kind} alt=""/>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
                <h3>john deo</h3>
            </div>

            <div class="swiper-slide slide">
                <img src={sad } alt=""/>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
                <h3>Asym Fayzullaev</h3>
            </div>

            <div class="swiper-slide slide">
                <img src={faw} alt=""/>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
                <h3>Asym Fayzullaev</h3>
            </div>

            <div class="swiper-slide slide">
                <img src={toni} alt=""/>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
                <h3>Asym Fayzullaev</h3>
            </div>

        </div>

        <div class="swiper-pagination"></div>

        </div>

        </section>

    </div>
  )
}
