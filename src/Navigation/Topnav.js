import React from "react"
import { Link, Switch, Route, useParams } from "react-router-dom"
import Flashcardlist from "../Flashcard/Flashcardlist.js"
import Home from "./Home.js"
// import styled from "styled-components"
import Topics from "./Topics.js"
import SideNav from "./SideNav.js"
import Flip from "./Flip.js"
import Btnchangelesson from "./Btnchangelesson.js"
import Book2list from "../Flashcard/book2list.js"
import Book3list from "../Flashcard/book3list.js"
// import book1 from "../book1.json"

// const Container = styled.div`
//   background: darkred;
//   /* make this a fixed navbar at the top, with fixed height */
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   height: 64px;
//   /* add a nice shadow effect */
//   z-index: 1;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
//   /* center the inner container */
//   display: flex;
//   justify-content: center;
// `

// const Content = styled.div`
//   background: red;

//   /* layout children horizontally */
//   display: flex;
//   justify-content: space-between;
//   /* as wide as it can be, but not too wide */
//   width: 100%;
//   max-width: 480px;
// `

// const SideNav = styled.div`
//   background: yellow;
//   /* always show on mobile but can be tucked away;
//      fixed width and add transition */
//   display: block;
//   width: 300px;
//   transition: left 200ms ease-in-out;
//   /* set it on the side */
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: ${(p) => (p.show ? `0` : `-100%`)};
//   /* hide on larger screens */
//   @media screen and (min-width: 600px) {
//     display: none;
//   }
// `

// const Logo = styled.div``

// const TopNav = styled.div`
//   display: none;
//   /* show on larger screens */
//   @media screen and (min-width: 600px) {
//     display: block;
//   }
// `

// const MobileMenuButton = styled.div`
//   display: block;
//   padding: 6px;
//   border: 2px solid white;
//   /* hide on larger screens */
//   @media screen and (min-width: 600px) {
//     display: none;
//   }
// `

export default function Topnav() {
  return (
    <>
      <nav className="topnav">
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
          <Flip />
        </Route>
        <Route exact path="/Medina-arabic">
          <MedinaArabic />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/Medina-arabic/book1/:id">
          <Child />
        </Route>
        <Route path="/Medina-arabic/book2/:id">
          <Child2 />
        </Route>
        <Route path="/Medina-arabic/book3/:id">
          <Child3 />
        </Route>
      </Switch>
      {/* <button onClick={() => setmyid(myid + 1)}>Click</button> */}
    </>
  )
}

// function Home() {
//   return (
//     <>
//       <h2>Home</h2>
//     </>
//   )
// }

function MedinaArabic() {
  // let match = useRouteMatch()
  return (
    <>
      <Switch></Switch>
      <main>
        <SideNav page="main" />
        <div className="content">
          <h2>MedinaArabic</h2>
          <Btnchangelesson />

          <div className="container">
            <Flashcardlist urlid={false} book={1} />
          </div>
        </div>
      </main>
    </>
  )
}
// const maxval = Math.max.apply(
//   Math,
//   book1.map(function (o) {
//     return o.Lesson
//   })
// )

function Child() {
  let { id } = useParams()
  // let changeid = id
  //   return <Flashcardlist id={id} />
  let intid = parseInt(id)
  // //let strintnext = intid < 23 ? intid + 1 : intid
  // // let strintprev = intid > 1 ? intid - 1 : intid
  // console.log("Param", id)
  // const NextLesson = () => {
  //   if (id < maxval) {
  //     changeid += 1
  //   } else {
  //   }
  //   // Flashcardlist()
  // }
  // const PreviousLesson = () => {
  //   if (id > 1) {
  //     changeid -= 1
  //   } else {
  //   }
  // }
  return (
    <main className="">
      <SideNav />

      <div className="content">
        <h1>Book 1</h1>
        <Btnchangelesson />
        <Flashcardlist id={intid} urlid={true} />
      </div>
    </main>
  )
}

function Child2() {
  let { id } = useParams()
  let intid = parseInt(id)
  return (
    <main className="">
      <SideNav />
      <div className="content">
        <h1>Book 2</h1>
        <Btnchangelesson />
        <Book2list id={intid} urlid={true} />
      </div>
    </main>
  )
}

function Child3() {
  let { id } = useParams()
  let intid = parseInt(id)
  return (
    <main className="">
      <SideNav />
      <div className="content">
        <h1>Book 3</h1>
        <Btnchangelesson />
        <Book3list id={intid} urlid={true} />
      </div>
    </main>
  )
}
// function Listnav() {
//   const list = []
//   const urlid = useParams()
//   console.log(urlid)
//   let link = ""
//   for (let i = 1; i < 24; i++) {
//     link = "/Medina-arabic/" + i
//     if (urlid.id == i) {
//       list.push(
//         <a className="active" href={link}>
//           Lesson {i}
//         </a>
//       )
//     } else {
//       list.push(<a href={link}>Lesson {i}</a>)
//     }
//   }
//   return <nav className="sidebar">{list}</nav>
// }
// //////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
