import React from 'react'
import { Image, CodePane } from 'spectacle'

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

const three =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">Alguns frameworks/bibliotecas</h3>
    </div>
    <Image src="js-frameworks-and-lib.png"/>
  </div>

const four =
  <div className="DarkContainer">
    <div className="DarkContainer__subtitle">
      <h3 className="Slide__subtitle">ES6 OU</h3>
      <h3 className="Slide__subtitle">ES6 2015</h3>
    </div>
  </div>

const five =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">CONST, let e var</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
      var foo = 'Foo!'
      let bar = 'Bar!'

      function whatIsVar() { 
        var foo = 'I am var!'
        console.log(foo) // I am var!
      }

      function whatIsLet() { 
        console.log(bar) 
        let bar = 'I am let!' // Uncaught SyntaxError
        
        if (true) { 
          let newBar = 'I am let!'
        } 
        console.log(newBar) // Uncaught ReferenceError
      }
      `}
    />
  </div>

const six =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">CONST, let e var</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const constant = 'a' 
        constant = 'b' // Uncaught TypeError

        const arrayConstant = ['foo', 'bar'] 
        arrayConstant.push('lorem ipsum') 
        
        console.log(arrayConstant) // (3) ["foo", "bar", "lorem ipsum"]

        const user = { 
          id: 1, 
          name: 'Eduardo Moreira', 
          age: 19, 
          stack: ['js','ruby'] 
        } 
        
        user.id = 10 
        user.stack.push('php')
      `}
    />
  </div>

const seven =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">arrow function</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const user = { id: 1, age: 19, type: 'ADMIN' }

        var isAdmin = function(user) { 
          return user.type === 'ADMIN' 
        }

        var isAdmin = (user) => { 
          return user.type === 'ADMIN' 
        }

        var isAdmin = user => { 
          return user.type === 'ADMIN' 
        }

        var isAdmin = user => user.type === 'ADMIN'

        const isAdmin = user => user.type === 'ADMIN'
      `}
    />
  </div>

const eight =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">arrow function</h3>
    </div>
    <div className="DarkContainer__text">
      <h3 className="Slide__text">Importante: As arrow functions não tratam-se apenas de uma diferente sintaxe. As arrow functions possuem this léxico, enquanto o modelo convencional possui this dinâmico.</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const user = { 
          id: 1, 
          age: 19, 
          type: 'ADMIN',

          isAdmin: function() {
            console.log(this) // objeto user
            return this.type === 'ADMIN'
          },

          isAdminArrow: () => {
            console.log(this) // objeto window
            return this.type === 'ADMIN'
          }
        }
      `}
    />
  </div>

export default [one, two, three, four, five, six, seven, eight]
