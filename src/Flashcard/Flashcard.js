import React, { useState } from "react"

export default function Flashcard({ flashcard }) {
  const [flip, setflip] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (flip === true) {
  //       setflip(false)
  //     } else {
  //       setflip(true)
  //     }
  //   }, 2300)
  //   return () => clearInterval(interval)
  // }, [flip])

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setflip(!flip)}
    >
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option, index) => {
            return (
              <div key={index} className="flashcard-option">
                {option}
              </div>
            )
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
      {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}

// function tick() {
//   return <h1>hello</h1>
// }

// setInterval(tick, 1000)
