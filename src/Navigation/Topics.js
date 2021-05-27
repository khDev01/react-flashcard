import React from "react"
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"

const Topics = () => {
  let match = useRouteMatch()
  const myTopics = ["Salah", "Dua", "Quran", "Muslim", "Prophets", "Seerah", "Maths"]
  const listItems = myTopics.map((mytopic) => (
    <Link className="navitem" to={`${match.url}/${mytopic}`}>
      {mytopic}
    </Link>
  ))
  return (
    <div>
      <div className="sidebar">{listItems}</div>
      <div className="content">
        <h2>Topics</h2>
        {/* <ul>
        <li>
          <Link to={`${match.url}/React`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul> */}

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
    </div>
  )
}

function Topic() {
  let { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}

export default Topics
