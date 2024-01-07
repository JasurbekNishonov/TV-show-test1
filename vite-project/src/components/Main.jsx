// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react'
import { FaAngleRight, FaAngleLeft} from "react-icons/io5";
import img1 from "../assets/images/1 9.png"
import img2 from "../assets/images/Mask Group (1).png"
import img3 from "../assets/images/Mask Group (2).png"
import img4 from "../assets/images/Mask Group (3).png"
import img5 from "../assets/images/Mask Group (4).png"
import img6 from "../assets/images/Group 27.png"
import img7 from "../assets/images/11.png"
import img8 from "../assets/images/12.png"
import img9 from "../assets/images/Mask Group (6).png"
import img10 from "../assets/images/Mask Group (7).png"
import img11 from "../assets/images/Mask Group (8).png"
import img12 from "../assets/images/Mask Group (9).png"

import img13 from "../assets/images/Group.png"
import img14 from "../assets/images/cinema 1.png"
import img15 from "../assets/images/documentary 1.png"
import img16 from "../assets/images/killer 1.png"
import img17 from "../assets/images/rocket 1.png"
import img18 from "../assets/images/ghost 1.png"
import img19 from "../assets/images/smile 1.png"
import img20 from "../assets/images/castle 1.png"

import img21 from "../assets/images/Mask Group (15).png"
import img22 from "../assets/images/Mask Group (10).png"
import img23 from "../assets/images/Mask Group (11).png"
import img24 from "../assets/images/Mask Group (12).png"
import img25 from "../assets/images/Mask Group (14).png"
import img26 from "../assets/images/Mask Group (13).png"


function Header() {
  const ITEM_WIDTH=60;
  const [scrollPosition, setScrollPosition]=useState(0);
  const containerRef=useRef();
  const handleScroll=(scrollAmount)=>{
    const newScrollPosition=scrollPosition+scrollAmount;
    setScrollPosition(newScrollPosition)
    containerRef.current.scrollLeft=newScrollPosition
  }
  const Scroll1_WIDTH=60;
  const [scroll1Position, setScroll1Position]=useState(0);
  const Movie1Ref=useRef();
  const MoviesScroll1=(scroll1Amount)=>{
    const newScroll1Position=scroll1Position+scroll1Amount;
    setScroll1Position(newScroll1Position)
    Movie1Ref.current.scrollLeft=newScroll1Position
  }
  const Scroll2_WIDTH=60;
  const [scroll2Position, setScroll2Position]=useState(0);
  const Movie2Ref=useRef();
  const MoviesScroll2=(scroll2Amount)=>{
    const newScroll2Position=scroll2Position+scroll2Amount;
    setScroll2Position(newScroll2Position)
    Movie2Ref.current.scrollLeft=newScroll2Position
  }
  const Scroll3_WIDTH=60;
  const [scroll3Position, setScroll3Position]=useState(0);
  const ActorRef=useRef();
  const ActorsScroll=(scroll3Amount)=>{
    const newScroll3Position=scroll3Position+scroll3Amount;
    setScroll3Position(newScroll3Position)
    ActorRef.current.scrollLeft=newScroll3Position
  }
  return (
    <>
    <main>
    <div className="container movie-horizontal">
      <hr/>
      <h2><span></span>Trending TV Shows {/*  */}</h2>
       <div className="movieback">
       <button onClick={() => MoviesScroll1(-Scroll1_WIDTH)} className='scroll-button2'><FaAngleLeft/></button>
      <div className="row row5 movieCarousel" ref={Movie1Ref}>
        <div className="col-2">
          <img src={img1} alt="img" />
        </div>
        <div className="col-2">
          <img src={img2} alt="img" />
        </div>
        <div className="col-2">
          <img src={img3} alt="img" />
        </div>
        <div className="col-2">
          <img src={img4} alt="img" />
        </div>
        <div className="col-2">
          <img src={img5} alt="img" />
        </div>
        <div className="col-2">
          <img src={img6} alt="img" />
        </div>
      </div>
      <button onClick={() => MoviesScroll1(Scroll1_WIDTH)} className='scroll-button2'><FaAngleRight/></button>
      </div>
    </div>
    <div className="container movie-horizontal">
      <h2><span></span>Trending Movies {/*  */}</h2>
     <div className="movieback">
     <button onClick={() => MoviesScroll2(-Scroll2_WIDTH)} className='scroll-button2'><FaAngleLeft/></button>
      <div className="row row5 movieCarousel" ref={Movie2Ref}>
        <div className="col-2">
          <img src={img7} alt="img" />
        </div>
        <div className="col-2">
          <img src={img8} alt="img" />
        </div>
        <div className="col-2">
          <img src={img9} alt="img" />
        </div>
        <div className="col-2">
          <img src={img10} alt="img" />
        </div>
        <div className="col-2">
          <img src={img11} alt="img" />
        </div>
        <div className="col-2">
          <img src={img12} alt="img " />
        </div>
      </div>
      <button onClick={() => MoviesScroll2(Scroll2_WIDTH)} className='scroll-button2'><FaAngleRight/></button>
      </div>
      <button id='SeeMore' className='uniqueBtn'>See more</button>
    </div>
    <div className="container  container-films-box">
    <h2><span></span>Popular Genres {/*  */}</h2>
    
    <div className="row row1">
      <div className="col-3">
        <img src={img13} alt="img" />
        <h3>Romance</h3>
      </div>
      <div className="col-3">
      <img src={img14} alt="img" />
      <h3>Drama</h3>
      </div>
      <div className="col-3">
      <img src={img15} alt="img" />
      <h3>Historical</h3>
      </div>
      <div className="col-3">
      <img src={img16} alt="img" />
      <h3>Action</h3>
      </div>
    </div>
    
    <div className="row row2">
      <div className="col-3">
      <img src={img17} alt="img" />
      <h3>Sci-fi</h3>
      </div>
      <div className="col-3">
      <img src={img18} alt="img" />
      <h3>Horror</h3>
      </div>
      <div className="col-3">
        <img src={img19} alt="img" />
        <h3>Comedy</h3>
        </div>
      <div className="col-3">
        <img src={img20} id='castle' alt="img" />
        <h3>Documentary</h3>
      </div>
      </div>  
    </div>
    <div className="container container-horizontal">
    <h2><span></span>Popular Channels {/*  */}</h2>
    <div className="horizontal-scroll">
    <button onClick={() => handleScroll(-ITEM_WIDTH)} className='scroll-button'><FaAngleLeft/></button>
    <div className="row row3 scrolling-wrapper" ref={containerRef}>
       <div className="col-2">
        <div className="card-block"></div>
       </div>
       <div className="col-2">
        <div className="card-block"></div>
       </div>
       <div className="col-2">
        <div className="card-block"></div>
       </div>
       <div className="col-2">
        <div className="card-block"></div>
       </div>
       <div className="col-2">
        <div className="card-block"></div>
       </div>
    </div>

    <button onClick={() => handleScroll(ITEM_WIDTH)} className='scroll-button'><FaAngleRight/></button>

    </div>
    </div>
    <div className="container actor-horizontal">
    <h2><span></span>Popular Actors & Directors {/*  */}</h2>
    <div className="Actorback">
    <button onClick={() => ActorsScroll(-Scroll3_WIDTH)} className='scroll-button2'><FaAngleLeft/></button>
    <div className="row row4 ActorCarusel" ref={ActorRef}>
     <div className="col-2">
      <img src={img21} alt="img" />
      <h4>Samantha Bowen</h4>
     </div>
     <div className="col-2">
      <img src={img22} alt="img" />
      <h4>Rhys Birch</h4>
     </div>
     <div className="col-2">
      <img src={img23} alt="img" />
      <h4>James Holloway</h4>
     </div>
     <div className="col-2">
      <img src={img24} alt="img" />
      <h4>Joshua Walton</h4>
     </div>
     <div className="col-2">
      <img src={img25} alt="img" />
      <h4>Patrick Elliott</h4>
     </div>
     <div className="col-2">
      <img src={img26} alt="img" />
      <h4>Morgan ONeill</h4>
     </div>
    </div>
    <button onClick={() => ActorsScroll(Scroll3_WIDTH)} className='scroll-button2'><FaAngleRight/></button>
    </div>
    </div>
    </main>
    </>
  )
}

export default Header