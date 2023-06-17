const fetchTodos = async (setTodos) => {
    try {
      const response = await fetch('http://localhost:3002/todos');
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
}
export default fetchTodos;