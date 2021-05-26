import React from "react"
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"
import Flashcardlist from "../Flashcard/Flashcardlist.js"
import Home from "./Home.js"
import styled from "styled-components"
import SideNav from "./SideNav.js"
import book1 from "../book1.json"

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
          <Home />
        </Route>
        <Route exact path="/Medina-arabic">
          <MedinaArabic />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/Medina-arabic/:id">
          <Child />
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
  let match = useRouteMatch()
  return (
    <>
      <Switch></Switch>
      <main>
        <SideNav />
        <div className="content">
          <h2>MedinaArabic</h2>
          <div className="container">
            <Flashcardlist urlid={false} />
          </div>
        </div>
      </main>
    </>
  )
}
const maxval = Math.max.apply(
  Math,
  book1.map(function (o) {
    return o.Lesson
  })
)

function Child() {
  let { id } = useParams()
  let changeid = id
  //   return <Flashcardlist id={id} />
  id = parseInt(id)
  // console.log("Param", id)
  const NextLesson = () => {
    if (id < maxval) {
      changeid += 1
    } else {
    }
    // Flashcardlist()
  }
  const PreviousLesson = () => {
    if (id > 1) {
      changeid -= 1
    } else {
    }
  }
  return (
    <main className="">
      <SideNav />

      <div className="content">
        <h1>Book 1</h1>
        <Link className="navitem" to="/Medina-arabic/12">
          Home
        </Link>
        <Flashcardlist id={id} urlid={true} />
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

function Topics() {
  let match = useRouteMatch()
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/React`}>Components</Link>
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
