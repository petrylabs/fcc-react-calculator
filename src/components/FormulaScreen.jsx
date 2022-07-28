function FormulaScreen(props) {
    
    const formulaScreenStyles = [
        {
            key: 'font',
            value: 'text-sm'
        },
        {
            color: 'color',
            value: 'text-yellow-500'
        }
    ].filter(style => style.value).map(style => style.value).join(' ');

    return(
        <div 
            className={`FormulaScreen ${formulaScreenStyles}`}>
            {props.value}
        </div>
    )
}
export default FormulaScreen;