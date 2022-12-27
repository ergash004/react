import React from 'react'
import nnl from './images/pic-1.png'
import clayer from './images/pic-2.png'
import balance from './images/pic-3.png'
import slay from './images/pic-4.png'
import pic from './images/pic-5.png'
import pic from './images/pic-6.png'
export default function Reviews() {
  return (
    <div>
        <section class="reviews" id="reviews">

<h1 class="heading"> student's <span>reviews</span></h1>

<div class="swiper reviews-slider">

   <div class="swiper-wrapper">

      <div class="swiper-slide slide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
         <div class="user">
            <img src={nnl} alt=""/>
            <div class="user-info">
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="swiper-slide slide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
         <div class="user">
            <img src={clayer} alt=""/>
            <div class="user-info">
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="swiper-slide slide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
         <div class="user">
            <img src={balance} alt=""/>
            <div class="user-info">
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="swiper-slide slide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
         <div class="user">
            <img src={slay} alt=""/>
            <div class="user-info">
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="swiper-slide slide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
         <div class="user">
            <img src={pic} alt="dgv"/>
            <div class="user-info">
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="swiper-slide slide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
         <div class="user">
            <img src={pic-6} alt="khdc"/>
            <div class="user-info">
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

   </div>

   <div class="swiper-pagination"></div>

</div>

</section>


    </div>
  )
}
