
function App() {
  return (
    <>
      <Banner />
    </>
  )
}

function Banner() {
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}

function Header() {
  return (
    <h1>La maison jungle</h1>
  )
}

function Description() {
  return (
    <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
  )
}

export default App
