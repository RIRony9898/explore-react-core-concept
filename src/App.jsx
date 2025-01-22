import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person/>
      <Person/>
      <Person/>
      <Student/>
    </>
  )
}

function Person() {
  const age = 25;
  return <h3>This is a person with age {age}</h3>
}

function Student(){
  return <div>
    <h3>This is a student</h3>
    <p>Name: </p>
    <p>Age: </p>
  </div>
}

export default App
