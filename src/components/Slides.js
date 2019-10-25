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

const nine =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">arrow function</h3>
    </div>
    <div className="DarkContainer__text">
      <h3 className="Slide__text">Arrow functions não podem ser constructor, então não é possível usar o operador "new".</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const FunctionUser = function(name, age) { 
          this.name = name 
          this.age = age 
        }

        const ArrowUser = (name, age) => {
          this.name = name
          this.age = age
        }

        const foo = new FunctionUser('Eduardo', 19) 
        const bar = new ArrowUser('Eduardo', 19) // Uncaught TypeError
      `}
    />
  </div>

const ten =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">arrow function</h3>
    </div>
    <div className="DarkContainer__text">
      <h3 className="Slide__text">Expressões de função precisam declarar explicitamente qual será o retorno da função, enquanto Arrow Functions permitem escrever um modelo encurtado onde sempre a última expressão analisada será o retorno da função.</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
      var fn = function() { return 1 } // retorna 1 
      var fn = function() { 1 } // retorna undefined 
      var fn = function() 1 // Uncaught SyntaxError
      
      var fn = () => 1 // retorna 1 
      var fn = () => (1, 2, 3) // retorna 3, última expressão avaliada
      var fn = () => { 1 } // retorna undefined
      var fn = () => { return 1 } // retorna 1

      var fn = function () { return { id: 1, name: 'Eduardo' } } // funciona
      var fn = () => { id: 1, name: 'Eduardo' } // não funciona
      var fn = () => ({ id: 1, name: 'Eduardo' }) // funciona
      `}
    />
  </div>

const eleven =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">class</h3>
    </div>
    <div className="DarkContainer__text">
      <h3 className="Slide__text">Agora conseguimos trabalhar com classes de maneira como já estamos acostumados em outras linguagens podendo até usar hierarquia.</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
      class Car { 
        constructor(model, brand) { 
          this.model = model 
          this.brand = brand 
        } 
        
        walk() { 
          console.log('vrum' } 
        }
      }

      class ModelA extends Car { 
        constructor(brand, color) { 
          super('Model a', brand) 
          this.color = color 
        } 
      }
      `}
    />
  </div>

const twoelven =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">class</h3>
    </div>
    <div className="DarkContainer__text">
      <h3 className="Slide__text">A palavra-chave static define um método estático de uma classe. Bastante parecido com outras linguagens.</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
      class Point { 
        constructor(x, y) { 
          this.x = x 
          this.y = y 
        } 

        static distancy(a, b) { 
          const dx = a.x * b.x 
          const dy = a.y * b.y 

          return Math.hypot(dx, dy) 
        }
      }
      `}
    />
  </div>

export default [
  one, two, three, four, five, six, seven, eight, nine, ten, eleven, twoelven
]
