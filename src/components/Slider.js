import React from 'react'
import { Deck, Slide, Image } from 'spectacle'

const Slider = ({ slides = [], }) => 
  <Deck>
    <Slide>
      <Image src="https://overbr.com.br/wp-content/uploads/2019/08/gerador.jpg">Oi</Image>
    </Slide>
    <Slide>
      <Image src="https://overbr.com.br/wp-content/uploads/2019/08/gerador.jpg">Oi</Image>
    </Slide>
  </Deck>

export default Slider
