import React, { useState, useEffect } from "react"

function Flip(props) {
  const [flip, setflip] = useState(false)
  // console.log(props)
  // Flip card at every interval
  useEffect(() => {
    // setInterval(run code , time.ms)
    const interval = setInterval(() => {
      if (flip === true) {
        setflip(false)
        // console.log(flip)
      } else {
        setflip(true)
        // console.log(flip)
      }
    }, 1000)
    // Makes sure interval only runs on first mount, works as componentWillUnmount
    return () => clearInterval(interval)
  }, [flip])
  return (
    <div className="card-gridstst">
      <div className={`card ${flip ? "flip" : ""}`} style={cardstyle}>
        <div className="front">{props.question}</div>
        <div className="back">{props.answer}</div>
      </div>
    </div>
  )
}
Flip.defaultProps = {
  question: "front",
  answer: "back",
}

const cardstyle = {
  color: "#d37f46",
  // display: "grid",
  width: "20vw",
  "align-items": "center",
  "grid-template-columns": "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
}
export default Flip
