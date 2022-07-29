function OutputScreen(props) {

    const outputScreenStyles = [
        {
            key: 'font',
            value: 'text-3xl'
        }
    ].filter(style => style.value).map(style => style.value).join(' ');

    return(
        <div 
            id={props.id}
            className={`OutputScreen ${outputScreenStyles}`}>
            {props.value}
        </div>
    )
}
export default OutputScreen;