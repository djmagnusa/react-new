import {useState, useEffect} from 'react';

//a custom hook
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    //so state will be changed everytime mouse moves but the useEffect function will only be called once. Which will not make our browser to crash. 
    useEffect(() => {

      const handleMouseMove = (e) => {
          setPosition({  //setPosition will be called everytime value of x and y is changed but this entire useEffect will called once as we passed an empty list
              x: e.pageX,
              y: e.pageY
          })
      }
        console.log('Setting up event')
        document.addEventListener('mousemove', handleMouseMove)

        return () => { //this going to run when the component is removed 
          document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

   

    return position
}

export { useMousePosition as default }