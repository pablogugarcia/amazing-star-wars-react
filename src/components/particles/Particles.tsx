import React from 'react'
import ReactParticles, { MoveDirection } from 'react-particles-js'

const Particles = (): JSX.Element => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
    }}
  >
    <ReactParticles
      width="100vw"
      height="100vh"
      params={{
        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.02,
          },
          move: {
            direction: MoveDirection.right,
            speed: 0.15,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            bubble: {
              size: 10,
            },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
)

export default Particles
