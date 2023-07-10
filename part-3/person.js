let max_length = 6;

const Person = ({ age, hobbies, name }) => {
    let reply;
    if (age >= 18) {
        reply = "Please go Vote!"
    } else {
        reply = "you must be 18"
    }
    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);


    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{reply}</h3>
            <ul>
                <li>Name:   {name.slice(0, max_length)}</li>
                <li>Age:    {age}</li>
                <li>{hobbiesList}</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Person />, document.getElementById('root'));
// root.render(
    // <Person />);