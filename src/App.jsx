import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ControlPanel from './components/ControlPanel'
import Display from './components/Display'

const FORMULA_INITIAL_VALUE = '';
const OUTPUT_INITIAL_VALUE = 0;

const CLEAR_ALL_SIGN = 'AC';
const EQUALS_SIGN = '=';
const DECIMAL_SIGN = '.';
const MINUS_SIGN = '-';

function App() {

  const [calcButtons, setCalcButtons] = useState([]);

  const [formula, setFormula] = useState(FORMULA_INITIAL_VALUE);
  const [output, setOutput] = useState(OUTPUT_INITIAL_VALUE);
  const [evaled, setEvaled] = useState(false);

  useEffect(() => {
    fetch('calculator.json')
    .then(res => res.json())
    .then(data => {
      setCalcButtons(data.calculator.buttons);
    })
  }, [])

  const handleButtonClick = (e) => {
    const inputValue = e.target.value;
    
    inputValue == CLEAR_ALL_SIGN
      ? processClearAll(inputValue)
    : inputValue == EQUALS_SIGN
      ? processEquals(inputValue)
    : inputValue == DECIMAL_SIGN
      ? processDecimal()
    : inputValue == MINUS_SIGN
      ? processMinus(inputValue)
    : isNumber(inputValue)
      ? processNumber(inputValue)
    : isOperator(inputValue)
      ? processOperator(inputValue)
    : null
  }
  
  const processClearAll = (inputValue) => {
    setOutput(OUTPUT_INITIAL_VALUE);
    setFormula(FORMULA_INITIAL_VALUE);
  }
  const processEquals = (inputValue) => {
    if(formula.length > 0) {
      const formulaWithoutTrailingOperatos = formula.replace(/[\+\-\*\/]+$/, '');
      const result = eval(formulaWithoutTrailingOperatos);
      setOutput(result);
      setFormula(formula + '=' + result);
      setEvaled(true);
    }
  }
  
  const processDecimal = () => {
    if(Array.from(output).includes(DECIMAL_SIGN) == false) {
      setOutput(isNumber(output) ? output + DECIMAL_SIGN : '0' + DECIMAL_SIGN);
      setFormula(formula + (isNumber(output) == false || output == OUTPUT_INITIAL_VALUE ? '0' : '') + DECIMAL_SIGN);
    }
  }

  const processNumber = (inputValue) => {
    evaled == true
    || output == OUTPUT_INITIAL_VALUE
    || isOperator(output)
    ? setOutput(inputValue) 
    : setOutput(output + inputValue)
    setFormula((evaled ? FORMULA_INITIAL_VALUE : formula) + inputValue)
    evaled == true && setEvaled(false)
  }

  // 5 * - + 5 -> 10
  const processOperator = (inputValue) => {
    setOutput(inputValue);
    const regex = /(.+?)([^\d]+)$/;

    console.log('regex', regex.test(formula));
    console.log('match', formula.match(regex));
    console.log('replace', formula.replace(regex, '$1' + inputValue))
    // isOperator(formula.slice(-1))
    // ? setFormula(formula.slice(0, -1) + inputValue)
    regex.test(formula)
    ? setFormula(formula.replace(regex, '$1' + inputValue))
    : setFormula((evaled == true ? (formula.match(/\d+$/)).at(0) : formula) + inputValue)
    evaled == true && setEvaled(false)
  }

  const processMinus = (inputValue) => {
    console.log('process minus');
    const formulaLastTwoChars = formula.slice(-2);
    const hasTwoOperators = /[\+\-\*\/]{2}/;
    if(hasTwoOperators.test(formulaLastTwoChars) == false) {
      setOutput(inputValue)
      setFormula((evaled == true ? (formula.match(/\d+$/)).at(0) : formula) + inputValue);
    }
    evaled == true && setEvaled(false)
  }
  

  const isNumber = (inputValue) => {
    return isNaN(inputValue) == false;
  }

  const isOperator = (inputValue) => {
    return ['+', '-', '*', '/'].includes(inputValue);
  }
 
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
  ].filter(style => style.value).map(style => style.value).join(' ')

  return (
      <div className={'App ' + appStyles}>
        <Display 
          id="display"
          formulaValue={formula}
          outputValue={output}
        />
        <ControlPanel 
          controlClickHandler={handleButtonClick}
          id="control-panel"
          calcButtons={calcButtons}
        />
        <div className="grid grid-cols-3 hidden">
          <div className="col-span-2">1</div>
          <div className="row-span-2">2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
  )
}

export default App
