import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Presentation from './components/Presentation'
import Slides from './components/Slides'

ReactDOM.render(<Presentation slides={Slides} />, document.getElementById('root'))
