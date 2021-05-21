import React, { useState, useEffect } from "react";
import Flashcardlist from "./Flashcardlist.js";
import "./index.css";
import lesson from "./lesson1.json";

function App() {
  const [flashcards, setflashcards] = useState(SampleFlashcard);

  useEffect(() => {
    console.log(lesson);
    
    setflashcards(lesson.map((questionItem, index) => {
      const answer = questionItem.English;
      // multiple choice options
      const option = [questionItem.Arabic, questionItem.English ]
      return {
        id: `${index}`,
        question: questionItem.Arabic,
        answer: answer,
        options: []
      }
    }))
  }, []);

  return (
    <div className="container">
      <Flashcardlist flashcards={flashcards} />;
    </div>
  ) 
  // return <Mydata />
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
];

export default App;
