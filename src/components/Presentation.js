import React from 'react'
import { Deck, Slide } from 'spectacle'

const Presentation = ({ slides = [] }) =>
  <Deck>
    {
      slides.map((slide, index) =>
        <Slide key={index}>
          {slide}
        </Slide>
      )
    }
  </Deck>

export default Presentation
