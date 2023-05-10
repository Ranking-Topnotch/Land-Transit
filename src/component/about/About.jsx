import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
        <section >
            <div className='about__img'></div>
            <div className='about'>
            <h2 className='about__header'>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p className='about__p'>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br/>
                <br/>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className='about__section'>
                <h2>Your destination is wating. Your plane is waiting</h2>
                <button>Explore our plane</button>
            </div>
            </div>
        </section>
    </div>
  )
}

export default About