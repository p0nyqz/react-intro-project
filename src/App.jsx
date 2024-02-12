import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { ways, differences } from './data'
import { useState } from 'react'

export default function App() {
  const [contentType, setContentType] = useState()

  function handleClick(type) {
    // console.log('button clicked', type)
    setContentType(type)
  }

  // let tabContent = null
  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Press the button</p>
  // }

  return (
    <>
      <Header />
      <main>
        <h1>Hello world!</h1>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button
            isActive={contentType === 'way'}
            onClick={() => handleClick('way')}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === 'easy'}
            onClick={() => handleClick('easy')}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === 'program'}
            onClick={() => handleClick('program')}
          >
            Концентрация
          </Button>
          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Press the button</p>
          )} */}
          {/* {!contentType ? <p>Press the button</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

          {!contentType && <p>Press the button</p>}
          {contentType && <p>{differences[contentType]}</p>}

          {/* {tabContent} */}
        </section>
      </main>
    </>
  )
}
