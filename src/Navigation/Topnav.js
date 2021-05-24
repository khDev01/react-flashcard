import React from "react"
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"
import Flashcardlist from "../Flashcard/Flashcardlist.js"

export default function Topnav() {
  return (
    <>
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Medina-arabic">
          <MedinaArabic />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
      {/* <button onClick={() => setmyid(myid + 1)}>Click</button> */}
    </>
  )
}

function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  )
}

function MedinaArabic() {
  let match = useRouteMatch()
  return (
    <>
      <h2>MedinaArabic</h2>

      <ul>
        <li>
          <Link to={`${match.url}/5`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Child />
        </Route>
      </Switch>
      <div className="container">
        <Flashcardlist />
      </div>
    </>
  )
}

function Child() {
  let { id } = useParams()
  return <Flashcardlist id={id} />
  //   return (

  //   )
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
