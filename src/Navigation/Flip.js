import React, { useState, useEffect } from "react"

function Flip(props) {
  const [flip, setflip] = useState(false)
  console.log(props)
  useEffect(() => {
    const interval = setInterval(() => {
      if (flip === true) {
        setflip(false)
        console.log(flip)
      } else {
        setflip(true)
        console.log(flip)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [flip])
  // function tick() {
  //   if (flip === true) {
  //     setflip(false)
  //     console.log(flip)

  //     return
  //   } else {
  //     setflip(true)
  //     console.log(flip)

  //     return
  //   }
  // }
  // setInterval(tick, 1000)
  // console.log(flip)
  return (
    <div className="card-grid">
      <div className={`card ${flip ? "flip" : ""}`}>
        <div className="front">
          {props.question}
          {/* <div className="flashcard-options">
          {props.options.map((option) => {
            return <div className="flashcard-option">{option}</div>
          })}
        </div> */}
        </div>
        <div className="back">{props.answer}</div>
        {/* {flip ? flashcard.answer : flashcard.question} */}
      </div>{" "}
    </div>
  )
}
Flip.defaultProps = {
  question: "front",
  answer: "back",
}
export default Flip
