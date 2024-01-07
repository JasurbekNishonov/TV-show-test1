import React , { useState } from 'react'
import logo from "../assets/images/Logo.png"
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faUserPlus, faPlay, faStar, faClose } from '@fortawesome/free-solid-svg-icons' */
import googleLogo from "../assets/Google__G__logo.svg.png"
import appleoLogo from "../assets/Apple-Logo.png"
import commentimg from "../assets/images/Mask Group (14).png"
import { IoClose, FaBell, FaPlay, FaSearch, FaStar, FaUserPlus } from "react-icons/io5";


function Header() {
  const [searchEngine, setsearchEngine] = useState('')

  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  function SearchBtn(){
    const search =document.querySelector("#search")
    const ulNav =document.querySelector("#ul-nav")
      search.style.marginRight="0"
      search.style.opacity="1"
      ulNav.style.display="flex"
      ulNav.style.justifyContent="start"
  }
  function LogInClose(e){
    const LogCard =document.querySelector(".login-card")
    LogCard.style.marginTop="-400px"
    LogCard.style.opacity="0"
    e.preventDefault()
  }
  function NotificationBtn(){
      const notificationCard =document.querySelector(".notification-card")
      notificationCard.style.marginTop="10px"
      notificationCard.style.opacity="1"
      LogInClose()
  }
  function NotificationClose(){
    const notificationCard =document.querySelector(".notification-card")
    notificationCard.style.marginBottom="50px"
    notificationCard.style.opacity="0"
    notificationCard.style.marginTop="-800px"
    setText('')
  }
  function PinComment(event) {
    const count =document.querySelector("#count")
    count.style.display="block"
    if(count.innerHTML<0){
      count.style.display="none"
    }
    event.preventDefault()
    if (text.length>2) {
        let newNote={
            id:Math.random(),
            comment:text,
            time:new Date().toLocaleTimeString(),
            number:count.innerHTML++
        }
        setNotes([...notes,newNote])
        setText('')
    }
}
function DelNote(id){
  const count =document.querySelector("#count")
    setNotes(notes.filter(note=>note.id !=id))
    count.innerHTML-- 
}
  function LogIn(){
    const LogCard =document.querySelector(".login-card")
      LogCard.style.marginTop="10px"
      LogCard.style.opacity="1"
      LogCard.style.zIndex="100"
      setDate('')
      setName('')
      setEmail('')
      NotificationClose()
  }

  function SearchClose(){
    setsearchEngine("")
    const searchInput = document.querySelector("#searchInput")
    const search =document.querySelector("#search")
      search.style.marginRight="-210px"
      search.style.opacity="0"
      searchInput.innerHTML=""
  }
  return (
    <>
    <header>
    <div className="navbar">
    <div className="container">
      <div className="row row0">
        <div className="col-2">
          <img id='Logo' src={logo} alt="" />
        </div>
        <div className="col-4">
          <ul className='nav-ul' id='ul-nav'>
            <li><a className='nav-li' href="#!">Home</a></li>
            <li><a className='nav-li' href="#!">TV Show</a></li>
            <li><a className='nav-li' href="#!">Movies</a></li>
            <li><a className='nav-li' id='series' href="#!">Series</a></li>
            <div id='search' className="searching-engine">
            <input id='searchInput' value={searchEngine} type="text" onChange={(e)=>setsearchEngine(e.target.value)} placeholder='Type here'/>
            <button id='searchClose' onClick={SearchClose}><IoClose/></button>
            </div>
          </ul>
        </div>
        <div className="col-2">
        <ul className='nav-ul'>
          <li onClick={SearchBtn}  className='nav-search'><FaSearch /></li>
          <li onClick={NotificationBtn} className='nav-search'><FaBell /><span className='' id='count'></span></li>
          <li onClick={LogIn} className='nav-search'><FaUserPlus /></li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    <div className="head">
      <div className="container">
        <div className="row">
          <div className="col-8">
          <h1>Night Watch</h1>
      <p>2021<span>18+</span>9 Seconds<FaStar id="star"/>8.8</p>
      <p id='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Ex unde incidunt sequi earum, laboriosam sapiente officia  <br/>  vel quidem maxime, possimus, animi nemo.</p>
      <div className="btn">
        <button className='uniqueBtn'><FaPlay id="play"/>Watch</button>
        <button>More information</button>
          </div>
        </div>
        <div className="col-4">
            <div className="login-card" >
            <form action="">
            <button id='InviteClose' onClick={LogInClose}><IoClose/></button>
              <h3>Enter your name</h3>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your name'/>
              <h3>Enter your date of birth</h3>
              <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Your date of birth'/>
              <h3>Enter your email</h3>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your email'/><br />
              <button className='SignBtn' src="">Sign up or sign in</button><br />
              <button className='browser'><img id='googleLogo' src={googleLogo} alt="google" />Continue With Google</button><br/>
              <button className='browser'><img id='appleLogo' src={appleoLogo} alt="apple" />Continue With Apple</button>
            </form>
            </div>

            <div className="notification-card">
            <button onClick={NotificationClose} id='NotificationClose'><IoClose/></button>
              <h5>Notifications</h5>
            <div className="surface">
              <ul>
              {notes.map((note)=>(
                <li key={note.id}>
                  <div className="commentOwner">
                  <img src={commentimg} alt="" />
                  <p>Name</p>
                  <p>{note.time}</p>
                  <button onClick={()=>DelNote(note.id)} id='DelNote'><IoClose/></button>
                  </div>
                  <a className='PinnedComment' href="#!">{note.comment}</a>
                </li>
             ))}
              </ul>
            </div>
            <div className="task-bar">
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Comment here' />
                <button onClick={PinComment}>send</button>
              </div>
            </div>    
          </div>
      </div>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header