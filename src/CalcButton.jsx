import { useEffect } from "react";

function CalcButton(props) {
    
    useEffect(()=>{
        console.log('props', props);
    }, []);

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
        }
    ].filter(style => style.value).map(style => style.value).join(' ');

    return(
        <button 
            className={'CalcButton ' + calcButtonStyles}>
            {props.value}
        </button>
    )
}
export default CalcButton;