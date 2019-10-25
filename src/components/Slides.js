import React from 'react'

const one =
  <div className="Container">
    <div className="Container__personal">
      <h3 className="Personal__name">Eduardo Moreira</h3>
      <h4 className="Personal__detail">Developer at Codeminer42</h4>
      <span className="Bullet"></span>
      <h4 className="Personal__detail">Web System Student at UTFPR/GP</h4>
    </div>
    <div className="Container__title">
      <div className="Title__container">
        <h1 className="Title__text">Tips and tricks: JavaScript | EcmaScript</h1>
      </div>
    </div>
  </div>

const two =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">O que é ES?</h3>
    </div>
    <ul className="List">
      <li className="List__item">JavaScript = linguagem</li>
      <li className="List__item">EcmaScript = padrão</li>
      <li className="List__item">Padronizada pela EcmaInternational</li>
      <li className="List__item">ES6 trouxe conceitos de outras linguagens (Python, Ruby, Java, etc)</li>
    </ul>
    <div className="Logo">
      JS
    </div>
    <div className="Logo">
      ES
    </div>
  </div>

export default [one, two]
