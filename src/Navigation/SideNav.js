import React from "react"
import { Link, useParams, useRouteMatch } from "react-router-dom" //Switch, Route, useRouteMatch,
// import Flashcardlist from "../Flashcard/Flashcardlist.js"
// import Home from "./Home.js"

export default function SideNav({ page }) {
  return (
    <>
      <Listnav page={page}></Listnav>
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

function Listnav({ page }) {
  const list = []
  // const hello = "hello"
  //   console.log(hello.includes("elp"))
  const myroute = useRouteMatch()
  const mybooklink = myroute.url.includes("book2")
    ? "/Medina-arabic/book2/"
    : myroute.url.includes("book3")
    ? "/Medina-arabic/book3/"
    : "/Medina-arabic/book1/"
  const maxlessons = myroute.url.includes("book2")
    ? 26
    : myroute.url.includes("book3")
    ? 34
    : 24
  const urlid = useParams()
  //   console.log(urlid)
  let link = ""
  if (page === "main") {
    for (let i = 1; i < 4; i++) {
      link = "/Medina-arabic/book" + i + "/1"
      list.push(<Link to={link}>Book {i}</Link>)
    }
  } else {
    for (let i = 1; i <= maxlessons; i++) {
      link = "/Medina-arabic/book1/" + i
      if (parseInt(urlid.id) === i) {
        list.push(
          <Link key={i} className="active" to={mybooklink + i + "/"}>
            Lesson {i}
          </Link>
        )
      } else {
        list.push(<Link to={mybooklink + i + "/"}>L {i}</Link>)
      }
    }
  }

  return <nav className="sidebar">{list}</nav>
}
