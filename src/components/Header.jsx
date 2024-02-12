import logo from '/vite.svg'
import { useState } from 'react'

export default function Header() {
  const name = 'Vite'
  const [now, setTimer] = useState(new Date())
  setInterval(() => setTimer(new Date()), 1000)

  return (
    <header>
      <img src={logo} alt={name}></img>
      <span>Time now is: {now.toLocaleTimeString()}</span>
    </header>
  )
}
