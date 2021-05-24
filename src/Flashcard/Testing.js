import Flashcard from "./Flashcard"
import book1 from "../book1.json"
import React, { useState, useEffect } from "react"

export default function Testing(myid) {
  let filteredArray = book1.filter((obj) => obj.Lesson === myid.id)

  // .map((obj) => obj.id)
  const [flashcards, setflashcards] = useState(SampleFlashcard)
  useEffect(() => {
    console.log(filteredArray, myid.id)
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
  }, [myid.id])
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
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
