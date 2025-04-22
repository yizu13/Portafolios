import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useScroll } from 'framer-motion'
import './App.css'

function App() {
  const { scrollY } = useScroll()
  const [currentScrollPos, setCurrentScrollPos] = useState(0)

  const unsubscribe = scrollY.on('change',(latest) => {
    setCurrentScrollPos(latest);
  });

  useEffect(() => {
    unsubscribe();
  },[scrollY]);
  

  return (
    <>
     <div id='head'className={currentScrollPos? 'head' : ''}>

      </div>
      <div>
      </div> 
    </>
  )
}

export default App
