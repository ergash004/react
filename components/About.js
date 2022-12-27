import React from 'react'
import Content from './Content'
import about from './images/about-img.svg'
export default function About() {
  return (
    <div>
            <section class="about" id="about">

                    <div class="row">

                    <div class="image">
                        <img src={about} alt="ergf"/>
                    </div>

                    < Content />

                    </div>

            </section>    
    </div>
  )
}
