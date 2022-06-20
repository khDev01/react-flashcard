import React from "react"
import { Link, useRouteMatch, useParams } from "react-router-dom"
// import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"

const Btnchangelesson = () => {
  let { id } = useParams()
  let intid = parseInt(id)
  let match = useRouteMatch()
  const lessontochange = match.url.includes("book2")
    ? "book2"
    : match.url.includes("book3")
    ? "book3"
    : "book1"

  //   let strintnext = id === undefined ? 1 : 1
  //   let strintprev = id === undefined ? 1 : 1
  let strintnext = id === undefined ? 1 : intid < 23 ? intid + 1 : intid
  let strintprev = id === undefined ? 1 : intid > 1 ? intid - 1 : intid
  //   if (id == undefined) {
  //     strintnext = 1
  //     strintprev = 1
  //   }
  if (match.url.endsWith("/Medina-arabic")) {
    return (
      <>
        <div>
          <Link className="btngroup" to="/Medina-arabic/book1/1">
            book1
          </Link>
          <Link className="btngroup" to="/Medina-arabic/book2/1">
            book2
          </Link>
          <Link className="btngroup" to="/Medina-arabic/book3/1">
            book3
          </Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link
          className="btn"
          to={`/Medina-arabic/${lessontochange}/${strintprev}`}
        >
          Previous lesson
        </Link>
        <Link
          className="btn"
          to={`/Medina-arabic/${lessontochange}/${strintnext}`}
        >
          Next lesson
        </Link>
        <br />
        <div>
          <Link className="btngroup" to="/Medina-arabic/book1/1">
            book1
          </Link>
          <Link className="btngroup" to="/Medina-arabic/book2/1">
            book2
          </Link>
          <Link className="btngroup" to="/Medina-arabic/book3/1">
            book3
          </Link>
        </div>
      </>
    )
  }
}

export default Btnchangelesson
