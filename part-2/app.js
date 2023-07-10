const App = () => (
    <div>
        <Tweet username="ADGob" name="Gob" date="7/10/2023" message="Its not a trick its an illusion" />
        <Tweet username="ADmichael" name="Michael" date="7/10/2023" message="No magic at the wedding Gob" />
        <Tweet username="ADlucille" name="Lucille" date="7/10/2023" message="What is the price of a banana, $7" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))