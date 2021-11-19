const Todo = (props) => {
    const itemClasses = [];

    if (props.item.complete) {
        itemClasses.push("strike-out");
    }

    return (
        <div key={props.i}>
            <span className={itemClasses.join("")}>{props.item.title}</span>
            <input onChange={(e) => props.handleComplete(props.i)} checked={props.item.complete} type="checkbox" />
            <button onClick={(e) => {props.handleItemDelete(props.i)}}>Delete</button>
        </div>
    )
}

export default Todo;