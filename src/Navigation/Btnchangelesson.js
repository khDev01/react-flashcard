import React from "react"
import { Link, Switch, Route, useParams } from "react-router-dom"

const Btnchangelesson = () => {
  let { id } = useParams()
  let intid = parseInt(id)
  console.log(id == undefined)
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
      <Link className="btn" to={`/Medina-arabic/${strintprev}`}>
        Previous lesson
      </Link>
      <Link className="btn" to={`/Medina-arabic/${strintnext}`}>
        Next lesson
      </Link>
    </>
  )
}

export default Btnchangelesson
