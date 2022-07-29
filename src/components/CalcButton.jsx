import { useEffect } from "react";

function CalcButton(props) {

    const colorScheme = {
        "allClear": "bg-red-500",
        "equals": "bg-blue-500",
        "operator": "bg-gray-500",
        "number": "bg-gray-800",
    }
    
    const calcButtonStyles = [
        {
            key: 'border',
            value: 'border-none'
        },
        {
            key: 'background',
            value: colorScheme[props.type]
        },
        {
            key: 'grid-span',
            value: props.span
        },
        {
            key: 'padding',
            value: 'pt-4 pb-4'
        },
        {
            key: 'hover:color',
            value: 'hover:text-black'
        }
    ].filter(style => style.value).map(style => style.value).join(' ');

    return(
        <button
            id={props.name} 
            className={'CalcButton ' + calcButtonStyles}
            onClick={props.clickHandler}
            value={props.value}>
            {props.value}
        </button>
    )
}
export default CalcButton;