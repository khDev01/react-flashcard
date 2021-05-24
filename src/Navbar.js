import React, { useState } from "react"

export default function Navbar({ flashcard }) {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </div>
        <div className="container">
          <Flashcardlist flashcards={flashcards} />;
        </div>
      </Router>
    </div>
  )
}
