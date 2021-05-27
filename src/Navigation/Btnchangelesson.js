import React from "react"
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"

const Btnchangelesson = () => {
  let { id } = useParams()
  let intid = parseInt(id)
  let match = useRouteMatch()

  console.log(match)
  //   let strintnext = id === undefined ? 1 : 1
  //   let strintprev = id === undefined ? 1 : 1
  let strintnext = id == undefined ? 1 : intid < 23 ? intid + 1 : intid
  let strintprev = id == undefined ? 1 : intid > 1 ? intid - 1 : intid
  //   if (id == undefined) {
  //     strintnext = 1
  //     strintprev = 1
  //   }

  return (
    <>
      <Link className="btn" to={`/Medina-arabic/book1/${strintprev}`}>
        Previous lesson
      </Link>
      <Link className="btn" to={`/Medina-arabic/book1/${strintnext}`}>
        Next lesson
      </Link>
      <Link className="btn" to="/Medina-arabic/book1/1">
        book1
      </Link>
      <Link className="btn" to="/Medina-arabic/book2/1">
        book2
      </Link>
      <Link className="btn" to="/Medina-arabic/book3/1">
        book3
      </Link>
      <Link className="btn" to={`/Medina-arabic/book2/${strintprev}`}>
        Previous lesson
      </Link>
      <Link className="btn" to={`/Medina-arabic/book2/${strintnext}`}>
        Next lesson
      </Link>
    </>
  )
}

export default Btnchangelesson
