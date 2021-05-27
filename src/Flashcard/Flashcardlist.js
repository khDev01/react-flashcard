import Flashcard from "./Flashcard"
import book1 from "../book1.json"
import React, { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"

const maxval = Math.max.apply(
  Math,
  book1.map(function (o) {
    return o.Lesson
  })
)
export default function Flashcardlist(props) {
  // console.log(props)
  let [myid, setmyid] = useState(1)
  // const NextLesson = () => {
  //   if (myid < maxval) {
  //     setmyid(myid + 1)
  //   } else {
  //   }
  //   // Flashcardlist()
  // }
  // const PreviousLesson = () => {
  //   if (myid > 1) {
  //     setmyid(myid - 1)
  //   } else {
  //   }
  // }

  if (props.urlid === true && myid !== props.id) {
    setmyid(props.id)
  }
  let filteredArray = book1.filter((obj) => obj.Lesson === myid)
  // .map((obj) => obj.id)

  const [flashcards, setflashcards] = useState(SampleFlashcard)
  useEffect(() => {
    // console.log("Sectond", myid)
    setflashcards(
      filteredArray.map((questionItem, index) => {
        const answer = questionItem.English
        // multiple choice options
        // const option = [questionItem.Arabic, questionItem.English]
        return {
          id: `${index}`,
          question: questionItem.Arabic,
          answer: answer,
          options: [],
        }
      })
    )
  }, [myid])

  // console.log(props.id)
  // console.log(filteredArray)
  return (
    <>
      {/* <button onClick={PreviousLesson}>Previous</button>
      <button onClick={NextLesson}>Next</button> */}
      <h1>
        Lesson {myid} / {props.id}
      </h1>
      {/* <Testing id={myid} /> */}
      <div className="card-grid">
        {flashcards.map((flashcard) => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
      </div>
    </>
  )
}

const SampleFlashcard = [
  {
    id: 1,
    question: "what is 2 + 3",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "question 2",
    answer: "answer",
    options: ["answer", "3", "4", "5"],
  },
]
