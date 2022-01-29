import logo from "./logo.svg"
import "./App.css"
import MakeServer from "./mockServer"
import * as faker from "faker"
import { getUserById } from "./service/userService"
import * as E from "fp-ts/Either"
import { useEffect } from "react"

function App() {

  if (process.env.NODE_ENV === "development") {
      MakeServer({ environment: "development" })
    }


  // TODO: service usage
  useEffect(() => {
    getUserById("1", {}).then(
        (data) => {
          console.log(data)
        },
        (error) => {
          console.log(error)
        }
    )
  },[])
  //

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
