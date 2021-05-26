import React from "react"
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"
import Flashcardlist from "../Flashcard/Flashcardlist.js"
import Home from "./Home.js"

export default function SideNav() {
  return (
    <>
      <Listnav></Listnav>
    </>
  )
}

// function MedinaArabic() {
//   let match = useRouteMatch()
//   return (
//     <>
//       <Switch></Switch>
//       <main>
//         <Listnav />
//         <div className="content">
//           <h2>MedinaArabic</h2>
//           <div className="container">
//             <Flashcardlist urlid={false} />
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// function Child() {
//   let { id } = useParams()
//   //   return <Flashcardlist id={id} />
//   return (
//     <main className="">
//       <Listnav />
//       <div className="content">
//         <h1>Book 1</h1>
//         <Flashcardlist id={id} urlid={true} />
//       </div>
//     </main>
//   )
// }

function Listnav() {
  const list = []
  const urlid = useParams()
  //   console.log(urlid)
  let link = ""
  for (let i = 1; i < 24; i++) {
    link = "/Medina-arabic/" + i
    if (urlid.id == i) {
      list.push(
        <Link className="active" to={link}>
          Lesson {i}
        </Link>
      )
    } else {
      list.push(<Link to={link}>Lesson {i}</Link>)
    }
  }
  return <nav className="sidebar">{list}</nav>
}
