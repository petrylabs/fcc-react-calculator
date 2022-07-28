import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ControlPanel from './ControlPanel'
import Display from './Display'

function App() {

  const [calcButtons, setCalcButtons] = useState([])

  useEffect(() => {
    fetch('calculator.json')
    .then(res => res.json())
    .then(data => {
      setCalcButtons(data.calculator.buttons);
    })
    console.log(calcButtons, 'calcButtons')
  }, [])

  const appStyles = [
    {
      key: 'width',
      value: 'w-screen max-w-xl'
    },
    {
      key: 'margin',
      value: 'ml-auto mr-auto'
    },
    {
      key: 'border',
      value: 'border-4 border-black'
    },
    {
      key: 'background',
      value: 'bg-black'
    },
    {
      key: 'color',
      value: 'text-white'
    }
  ].map(style => style.value).join(' ')

  return (
    <div className={'App ' + appStyles}>
      <Display 
        id="display"
        formulaValue="1+2+3"
        outputValue="6"
      />
      <ControlPanel 
        id="control-panel"
        calcButtons={calcButtons}
      />

      
    </div>
  )
}

export default App
