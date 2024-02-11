import logo from '/vite.svg'

export default function Header() {
  const now = new Date()
  const name = 'Vite'

  return (
    <header>
      <img src={logo} alt={name}></img>
      {/* <h3>Result University</h3> */}
      <span>Time now is: {now.toLocaleTimeString()} </span>
    </header>
  )
}
