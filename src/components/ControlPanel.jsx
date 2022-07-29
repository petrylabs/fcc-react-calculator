import CalcButton from './CalcButton'

function ControlPanel(props) {
    const controlPanelStyles = [
        {
            key: 'display',
            value: 'grid grid-cols-4 grid-flow-rows gap-1'
        }
    ].map(style => style.value).join(' ');
    return(
        <div 
            className={'ControlPanel ' + controlPanelStyles}>
            {props.calcButtons.length > 0
            ? props.calcButtons.map(calcButton => 
                <CalcButton
                    key={calcButton.name}
                    clickHandler={props.controlClickHandler}
                    {...calcButton}
                />
            )
            : <div>Loading...</div>}
        </div>
    )
}
export default ControlPanel;