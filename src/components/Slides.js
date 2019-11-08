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
      <h3 className="Slide__subtitle">ES 2015</h3>
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

const thirteen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">arrow function + class</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
      class User { 
        constructor(username) { 
          this.username = username 
          
          makeLink(username, {
            onSuccess(link) { 
              this.setLink(link) 
            }
          }) 
        }

        setLink = link => { 
          this.link = link 
        }
      }

      const makeLink = (username, callback) => {
        if (username) return callback.onSuccess('http://github.com/' + username)
      }
      `}
    />
  </div>

const fourteen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">arrow function + class</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
      constructor(username) { 
        this.username = username 
        
        makeLink(username, {
          onSuccess: link => { 
            this.setLink(link) 
          },
          onError: message => { 
            alert(message) 
          }
        }) 
      }
      `}
    />
  </div>

const fifteen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">Melhorias em objetos literais</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const author = 'J. K. Rowling' 
        const title = 'Harry Potter'
        const dynamicKey = 'myKey'

        // const book = { author: author, title: title }
        const book = { author, title }

        const book = { dynamicKey: 'dinamicamente!' }
        book[dynamicKey] = 'dinamicamente!'

        const book = { [dynamicKey]: 'dinamicamente' }
      `}
    />
  </div>

const sixteen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">desestruturação</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const book = { 
          author: 'J. K. Rowling', 
          title: 'Harry Potter' 
        }

        const { author, title } = book

        // const isAdmin = user => user.type === 'ADMIN'
        const isAdmin = ({ type }) => type === 'ADMIN'

        const myArray = ['first argument', 'second argument']
        const [foo, bar] = myArray
      `}
    />
  </div>

const seventeen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">DEFAULT + REST + SPREAD</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const sayMyName = (name = 'Eduardo') => { console.log(name) }

        const rest = (name, age, ...rest) => { 
          console.log(rest) // [...] 
        }

        const editUser = (user, newProperties) => [
          { ...user, ...newProperties }, 
          user
        ]
      `}
    />
  </div>

const eightteen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">forEach</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const array = [1,2,3,4,5,6]

        array.forEach(number => console.log(number))
      `}
    />
  </div>

const nineteen =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.map</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const numbers = [1,2,3,4,5,6]

        const newNumbers = numbers.map(number => number * 2)

        // const newNumbers = [] 
        
        // for(i in numbers) { 
        //  newNumbers.push(numbers[i] * 2) 
        //}
      `}
    />
  </div>

const twenty =
  <div className="DarkContainer">
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const users = [ 
          { 
            id: 1, 
            username: 'edumoreira1506', 
            type: 'ADMIN', 
            age: 19 
          }, 
          { 
            id: 2, 
            username: 'claudio123', 
            type: 'USER', 
            age: 24 
          },
          { 
            id: 3, 
            username: 'pedrojotajota', 
            type: 'ADMIN', 
            age: 17 
          }
        ]
      `}
    />
  </div>

const twentyOne =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.filter</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const getAdmins = users => { 
          const admins = [] 
          
          for(let i in users) { 
            if(users[i].type === 'ADMIN') { 
              admins.push(users[i]) 
            } 
          }
          
          return admins
        }

        const getAdmins = users => users.filter(user => user.type === 'ADMIN')
      `}
    />
  </div>

const twentyTwo =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.find</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const getUser = (id, users) => { 
          for(let i in users) { 
            if(users[i].id === id) { 
              return users[i] 
            } 
          } 

          return undefined
        }

        const getUser = (id, users) => users.find(user => user.id === id)
      `}
    />
  </div>

const twentyThree =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.findIndex</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const getIndexUser = (id, users) => { 
          for(let i in users) { 
            if(users[i].id === id) { 
              return i 
            } 
          } 

          return undefined
        }

        const getUser = (id, users) => users.findIndex(user => user.id === id)
      `}
    />
  </div>

const twentyFour =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.every</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const allUsersIsAdmin = users => { 
          for(let i in users) { 
            if(users[i].type !== 'ADMIN') { 
              return false 
            } 
          } 

          return true
        }

        const allUsersIsAdmin = users => users.every(user => user.type === 'ADMIN')
      `}
    />
  </div>

const twentyFive =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.some</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const hasUser = (users, id) => { 
          for(let i in users) { 
            if(users[i].id === id) { 
              return true 
            } 
          }
          
          return false
        }

        const hasUser = (users, id) => users.some(user => user.id === id)
      `}
    />
  </div>

const twentySix =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.reduce</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const totalAge = users => { 
          let total = 0 
          
          for(let i in users) { 
            total += users[i].age 
          } 
          
          return total 
        }

        const totalAge = users =>
          users.reduce((total, user) => total + user.age, 0)
      `}
    />
  </div>

const twentySeven =
  <div className="DarkContainer">
    <div className="DarkContainer__subtitle">
      <h3 className="Slide__subtitle">ES7 OU</h3>
      <h3 className="Slide__subtitle">ES 2016</h3>
    </div>
  </div>

const twentyEight =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">.includes / Operador exponencial</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        ['foo', 'bar', 'baz'].includes('foo') // true 
        ['foo', 'bar', 'baz'].includes('foo', 1) // false 

        console.log(2 ** 8) // 256
      `}
    />
  </div>

const twentyNine =
  <div className="DarkContainer">
    <div className="DarkContainer__subtitle">
      <h3 className="Slide__subtitle">ES8 OU</h3>
      <h3 className="Slide__subtitle">ES 2017</h3>
    </div>
  </div>

const thirty =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">Objet API</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const myObject = { a: 1, b: 2, c: 3 }

        Object.keys(myObject) // ['a', 'b', 'c']
        Object.values(myObject) // [1, 2, 3]
        Object.entries(myObject) // [['a', 1], ['b', 2], ['c', 3]]
      `}
    />
  </div>

const thirtyOne =
  <div className="DarkContainer">
    <div className="DarkContainer__title">
      <h3 className="Slide__title">Async/await</h3>
    </div>
    <CodePane
      className="DarkContainer__code"
      lang="javascript"
      source={`
        const getUser = username => axios.get('https://api.github.com/users/' + username)
      
        const getUser = async (username) => 
          await axios.get('https://api.github.com/users/' + username)
      `}
    />
  </div>

export default [
  one, two, three, four, five, six, seven, eight, nine, ten, eleven, twoelven,
  thirteen, fourteen, fifteen, sixteen, seventeen, eightteen, nineteen, twenty,
  twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven,
  twentyEight, twentyNine, thirty, thirtyOne
]
