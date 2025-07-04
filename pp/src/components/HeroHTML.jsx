import React from 'react'
import { useScroll } from '@react-three/drei';


function HeroHTML() {

      const scroll = useScroll();

      function handleScroll(target) {
        scroll.el.scrollTo({
        top: scroll.el.scrollHeight * target,
        behavior: 'smooth',
        });
    }

  return (
          <>
            {/* header */}
            <div className="header">
                <div className="header-text">Andy kim</div>
                <div className="header-text">Contents</div>
            </div>
            {/* upper content */}
            <div className="hero-upper-wrapper">
              {/* Desire to create, <br></br>
              Dedicated to find */}
              Curiocity Driven, <br/>
              Creativity Fueled
            </div>


            {/* content1 - Left */}
            <div className="content">
              <div className="blur">
                <div>Contents</div>
                <div onClick={()=>{handleScroll(0.225)}}>projects</div>
                <div>About</div>
                <div>Interests</div>
                <div>Contents</div>
              </div>
            </div>

            {/* content2 - Right */}
            <div className="content right-content" style={{textAlign : 'right'}}>
              <div className="blur">
                    <div onClick={() => window.open('https://github.com/Andysimps0n', '_blank')}>Github</div>
                    <div>Instargram</div>
                    <div>010-1234-1234</div>
                    <div>LinkedIn</div>
              </div>
            </div>
          </>

  )
}

export default HeroHTML
