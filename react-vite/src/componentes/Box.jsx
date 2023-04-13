function Box(props) {
    return (
        <div className={props.color}>
            <span>{props.banana}</span><br />
            <span>{props.number}</span>
        </div>
    )
}

export default Box;