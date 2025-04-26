import { useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import * as m from "motion/react-client"
import { Icon } from "@iconify/react";
import './App.css'

function App() {
  const { scrollY } = useScroll()
  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [quienSoy, setQuienSoy] = useState(false);
  const pasaTiempos = [
    {title: 'Programar', img: "fotos/programming.jpg", description: 'Desde muy pequeño me ha interesado la computación y luego descubrí la programación donde puedo realizar una infinidad de cosas y de tener control completo de los sistemas.'}, 
    {title: 'Leer', img: "fotos/read.jpg" , description: 'No me gusta leer mucho, pero cuando encuentro un tema interesante no me puedo despegar... leo mucho manga :) .'}, 
    {title: 'Escuchar música', img:"fotos/music.png", description: 'Me gusta escuchar música de todo tipo, es mi salida del mundo real aveces.'}, 
    {title: 'Estudiar', img: "fotos/study.jpg" , description: 'Aprender cosas nuevas no es fácil, pero cuando llega el momento de aplicarlo se siente increíble.'},
    {title: 'Videojuegos', img: "fotos/videogames.png", description: 'Me encanta jugar, es la forma en la que puedo liberar todo el estrés del día. Disfruto mucho los juegos de historia y los de estrategia, pero mayormente juego shooters online.'},
    {title: 'Series', img: "fotos/series.png",  description: 'Ahora mismo estoy viendo la serie de The Last of Us, me gustan mucho las películas y series de acción.'},
    {title: 'Chatear', img: "fotos/chat.png",  description: 'Sino hablo con nadie en mucho tiempo siento que morire, cada que puedo hablo con mis amigos para compartir un rato.'},
  
  ]
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
      <div id="section0">
      <m.div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",
              backgroundColor: "black", 
              justifyContent: "center", alignContent: "center", position: "absolute",
              borderRadius: 10, width: 700, height: 350, padding: 10, zIndex: 1, backgroundSize: "cover"}} 

             whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onHoverStart={()=> setQuienSoy(true)}
             onHoverEnd={()=> setQuienSoy(false)}>

              <p  id='cardTitle' className={quienSoy? 'cardTitleInfo' :'cardTitle'}>{'¿Quién soy?'}</p>
              <label id='backDescription' className={quienSoy? 'backgroundDes' : 'backgroundDes hidden'}>
                <p id="description">{'Soy un joven de 19 años que vive en República Dominicana. Es una persona que cumple todo lo que se propone con disciplina y constancia. Estoy estudiando Ciencias de la Computación, con un enfoque en el desarrollo de software. Tengo dos hermanos Melissa y José Ángel, son los mejores que una persona puede tener.'}</p>
              </label>
            </m.div>
            </div>
        <div id="section1">
        {pasaTiempos.slice(0,4).map((element, index) =>{
          return(
            <m.div key={index} style={{listStyle: "none", display: "flex", flexWrap: "wrap", flexDirection: "row",
              backgroundImage: `url(${element.img})`,backgroundPosition: "center",backgroundSize: "cover", backgroundColor: "black",
              justifyContent: "center", alignContent: "center", 
              borderRadius: 10, width: 350, height: 350, margin: 25, padding: 10, zIndex: 1}} 

             whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onHoverStart={()=> handleHoverOn(element.title)}
             onHoverEnd={()=> handleHoverOff(element.title)}>

              <p  id='cardTitle' className={hoverDiv[element.title]? 'cardTitleInfo' :'cardTitle'}>{element.title}</p>
              <label id='backDescription' className={hoverDiv[element.title]? 'backgroundDes' : 'backgroundDes hidden'}>
                <p id="description">{element.description}</p>
              </label>
            </m.div>
          )
        })}
        </div>
        <h2 style={{fontSize: 40}}>Recreación</h2>
        <div id="section2">
        {pasaTiempos.slice(4,7).map((element, index) =>{
          return(
            <m.div key={index} style={{listStyle: "none", display: "flex", flexWrap: "wrap", flexDirection: "row",
              backgroundImage: `url(${element?.img || "fotos/study.jpg"})`,backgroundPosition: "center",backgroundSize: "cover", backgroundColor: "black",
              justifyContent: "center", alignContent: "center", 
              borderRadius: 10, width: 350, height: 350, margin: 25, padding: 10, zIndex: 1}} 

             whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onHoverStart={()=> handleHoverOn(element.title)}
             onHoverEnd={()=> handleHoverOff(element.title)}>

              <p  id='cardTitle' className={hoverDiv[element.title]? 'cardTitleInfo' :'cardTitle'}>{element.title}</p>
              <label id='backDescription' className={hoverDiv[element.title]? 'backgroundDes' : 'backgroundDes hidden'}>
                <p id="description">{element.description}</p>
              </label>
            </m.div>
          )
        })}
        </div>
      </div> 
      <div id="section3">
      <a className='iconButton' href='https://www.instagram.com/0jesus_hernandez/' target="_blank">
        <Icon icon="entypo-social:instagram-with-circle" color="#007286" width="25" height="25" />
      </a>
      <a className='iconButton' href='https://www.linkedin.com/in/jesús-alexander-hernández-de-los-santos-698ba81b4' target="_blank">
        <Icon icon="entypo-social:linkedin-with-circle" color="#007286" width="25" height="25" />
      </a>
      <a className='iconButton' href='mailto:jesushdez1303@gmail.com' target="_blank">
        <Icon icon="entypo-social:google-with-circle" color="#007286" width="25" height="25" />
      </a>
      <a className='iconButton' href='https://github.com/yizu13?tab=repositories' target="_blank">
        <Icon icon="octicon:mark-github-24" color="#007286" width="25" height="25" />
      </a>
      </div>
    </>
  )
}

export default App
