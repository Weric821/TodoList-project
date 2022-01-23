import logo from "./logo.svg"
import "./App.css"
import MakeServer from "./mockServer"
import * as faker from "faker"

function App() {
  console.log("==", faker.internet.email())
  console.log("====",faker.address.country())
  if (process.env.NODE_ENV === "development") {
    MakeServer({ environment: "development" })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
