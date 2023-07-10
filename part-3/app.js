const App = () => {
    return (
        <div>
            <Person name="Piggie" age={23} hobbies={["Singing", "picking flowers", "being with Kermit"]} />
            <Person name="Kermit" age={25} hobbies={["Shows", "Time at the pond", "hangingout with Gonzo"]} />
            <Person name="Gonzo" age={27} hobbies={["Telling Jokes", "bugging Miss Piggie"]} />
        </div>
    );
}

console.log("Testing")
ReactDOM.render(<App />, document.getElementById('root'));
root.render(
    <App />);