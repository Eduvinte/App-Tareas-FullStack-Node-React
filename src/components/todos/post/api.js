
async function createTodo(description) {
    const body = { description };
    const response = await fetch("http://localhost:3002/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    return response
}

export default createTodo