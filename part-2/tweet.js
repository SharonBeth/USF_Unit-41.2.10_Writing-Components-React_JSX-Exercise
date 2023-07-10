const Tweet = (props) => (
    <ul class="tweet">
        <li>username: {props.username}</li>
        <li>name: {props.name}</li>
        <li>date: {props.date}</li>
        <li>message: {props.message}</li>
    </ul>
)

ReactDOM.render(<Tweet />, document.getElementById("root"))