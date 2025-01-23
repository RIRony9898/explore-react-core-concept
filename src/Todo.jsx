function Todo({task, isDone}) {
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Pending: {task}</li>
}

export default Todo;