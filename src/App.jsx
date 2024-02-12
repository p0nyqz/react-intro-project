import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { ways, differences } from './data'
import { useState } from 'react'

export default function App() {
  const [contentType, setContentType] = useState()

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <>
      <Header />
      <main>
        <h1>Hello world!</h1>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
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

          {!contentType && <p>Press the button</p>}
          {contentType && <p>{differences[contentType]}</p>}

        </section>
      </main>
    </>
  )
}
