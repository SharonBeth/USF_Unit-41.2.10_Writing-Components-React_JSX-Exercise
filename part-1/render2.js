const NamedComponent = (props) => {
    return (
        <div>
            <p>My name is {props.name}!!</p>
        </div>
    )
}

ReactDOM.render(<NamedComponent />, document.getElementById("root"))