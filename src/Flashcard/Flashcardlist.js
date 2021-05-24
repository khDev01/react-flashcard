import Flashcard from "./Flashcard"
import book1 from "../book1.json"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Flashcardlist(props) {
  // console.log("hello")
  // console.log(myuserid)
  const [myid, setmyid] = useState(1)
  const Clicked = () => {
    setmyid(myid + 1)
    // Flashcardlist()
  }
  let filteredArray = book1.filter((obj) => obj.Lesson === myid)
  // .map((obj) => obj.id)
  const [flashcards, setflashcards] = useState(SampleFlashcard)
  useEffect(() => {
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

  console.log(props.id)
  // console.log(filteredArray)
  return (
    <>
      <button onClick={Clicked}>Click</button>
      <h1>Lesson {myid}</h1>
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
