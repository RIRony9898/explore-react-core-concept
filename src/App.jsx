import "./App.css";
import Singers from "./Singers";
import Todo from "./Todo";

function App() {
  const singers = [
    { id: 1, name: "Dr. Hasem", age: 34 },
    { id: 2, name: "Shakira", age: 32 },
    { id: 3, name: "Adele", age: 31 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singers key={singer.id} singer={singer} />)
      }
      <Device name="laptop" price="55000" />
      <Device name="mobile" price="15000" />
      <Device />
      <Person />
      <Student grade="7" score="99" />
      <Student grade="5" score="60" />
      <Student name="Jamil" grade="8" score="80" />
      <Developer />
      <Todo task="Learn React" isDone={false} />
      <Todo task="DtaBase" isDone={true} />
    </>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <h2>
      This device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  return <h3>This is a person with age {age}</h3>;
}

function Student({ name, grade, score }) {
  // console.log(grade, score)
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: {name}</p>
      <p>Age: </p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "10px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>This is a Developer</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
