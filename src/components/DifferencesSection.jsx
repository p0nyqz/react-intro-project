import Button from '../components/Button/Button'
import { differences } from '../data'
import { useState } from 'react'

export default function DifferencesSection() {
  function handleClick(type) {
    setContentType(type)
  }

  const [contentType, setContentType] = useState()

  return (
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
  )
}
