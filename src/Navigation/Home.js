import React from "react"
import "../index.css"
import Button from "./button.js"

// props do not need to be sent when called  <Home />
const Home = ({ color, text }) => {
  let hello = 5
  const onClick = () => {
    return
    hello += 1
  }
  return (
    <div>
      {/* // CSS-1-- Inline */}
      <h4 style={{ color: "red" }}>{text}</h4>
      {/* // CSS-2-- Internal */}
      <h5 style={Mystyling}>{text}</h5>
      <p>{hello}</p>
      <Button onClick={onClick} />
    </div>
  )
}

// You may set default values to props
Home.defaultProps = {
  color: "blue",
  text: "Default text",
}

const Mystyling = {
  color: "#d37f46",
}

export default Home
