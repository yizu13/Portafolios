import { useEffect, useState, useRef, use } from 'react'
import { useScroll } from 'framer-motion'
import * as m from "motion/react-client"
import './App.css'

function App() {
  const { scrollY } = useScroll()
  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const pasaTiempos = [{title: 'Programar'}, {title: 'Leer'}, {title: 'Escuchar música'}, {title: 'Estudiar'}]
  const [hoverDiv, setHoverDiv] = useState({})

  const unsubscribe = scrollY.on('change',(latest) => {
    setCurrentScrollPos(latest);
  });

  useEffect(() => {
    unsubscribe();
  },[scrollY]);

  const handleHoverOn = (element) =>{
    setHoverDiv((state)=>  ({...state, [element]: true}))
  }

  const handleHoverOff = (element) =>{
    setHoverDiv((state)=>  ({...state, [element]: false}))
  }
  
  useEffect(() => {
    const initialState = {};
    for (let i of pasaTiempos) {
      initialState[i.title] = false;
    }
    setHoverDiv(initialState);
  }, []);
  

  return (
    <>
     <div id='head'className={currentScrollPos? 'head' : 'headBase'}>
      <img src="logos/logo_jhs.png" className='mainLogo'/>
      <h1 id='name'>Jesús Alexander Hernández de los Santos</h1>
      <img src="fotos/minume_foto.jpg" className='mainFoto'/>
      </div>
      <div>
        <div id="section1">
        {pasaTiempos.map((element, index) =>{
          return(
            <m.div key={index} className='pasaTiempos' style={{listStyle: "none", display: "flex", flexWrap: "wrap", flexDirection: "row",
              backgroundImage: `url(${'fotos/programming.jpg'})`,backgroundPosition: "center",backgroundSize: "cover", backgroundColor: "black",
              justifyContent: "center", alignContent: "center", 
              borderRadius: 10, width: 350, height: 350, margin: 25, padding: 10, zIndex: 1}} 

             whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onHoverStart={()=> handleHoverOn(element.title)}
             onHoverEnd={()=> handleHoverOff(element.title)}>

              <p  id='cardTitle' className={hoverDiv[element.title]? 'cardTitleInfo' :'cardTitle'}>{element.title}</p>
              <label id='backDescription' className={hoverDiv[element.title]? 'backgroundDes' : 'backgroundDes hidden'}>
                <p>flow</p>
              </label>
            </m.div>
          )
        })}
        </div>
      </div> 
    </>
  )
}

export default App
