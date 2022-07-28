import FormulaScreen from "./components/FormulaScreen";
import OutputScreen from "./components/OutputScreen";

function Display(props) {

    const displayStyles = [
        {
            key: 'text',
            value: 'text-right'
        },
        {
            key: 'font',
            value: 'font-mono'
        }
    ].filter(style => style.value).map(style => style.value).join(' ');

    return(
        <div 
            className={`Display ${displayStyles}`}>
            <FormulaScreen
                value={props.formulaValue}/>
            <OutputScreen 
                value={props.outputValue}/>
        </div>
    )
}
export default Display;