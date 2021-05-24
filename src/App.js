import React, { useState, useEffect } from "react"
import Flashcardlist from "./Flashcardlist.js"
import "./index.css"
// import lesson from "./lesson1.json"
import book1 from "./book1.json"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom"

function App() {
  const [myid, setmyid] = useState(1)
  // let mynum = useParams()

  // let LessonNumber = { ṁyid }

  let filteredArray = book1.filter((obj) => obj.Lesson === myid)
  // .map((obj) => obj.id)
  const [flashcards, setflashcards] = useState(SampleFlashcard)
  useEffect(() => {
    document.getElementsByClassName(
      "navitem"
    ).innerHTML = `You clicked ${myid} times`
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
  }, [])

  console.log(filteredArray) // a list of ids

  return (
    <Router>
      <nav>
        <Link className="navitem" to="/">
          Home
        </Link>

        <Link className="navitem" to="/Medina-arabic">
          Medina Arabic
        </Link>

        <Link className="navitem" to="/topics">
          Topics
        </Link>
      </nav>
      <button onClick={() => setmyid(myid + 1)}>Click</button>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Medina-arabic/:id">
          <MedinaArabic />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
      <div className="container">
        <Flashcardlist flashcards={flashcards} />
      </div>
    </Router>
  )
  // return <Mydata />
}

function Home() {
  return <h2>Home</h2>
}

function MedinaArabic() {
  return <h2>MedinaArabic</h2>
}

function Topics() {
  let match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
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

export default App
