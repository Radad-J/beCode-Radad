// script.js

document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const loading = document.getElementById('loading');
    const todoForm = document.getElementById('todo-form');
    const newTodoInput = document.getElementById('new-todo');

    // Function to fetch and display todos
    const fetchTodos = async () => {
        try {
            const response = await fetch('https://todo-api-peach-seven.vercel.app/api/todos');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const todos = await response.json();
            loading.style.display = 'none';
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${todo.text}
                    <button class="button" data-id="${todo._id}">Delete</button>
                `;
                todoList.appendChild(li);
            });

            // Attach event listeners to delete buttons after todos are rendered
            document.querySelectorAll('.button').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const id = event.target.getAttribute('data-id');
                    await deleteTodo(id);
                });
            });

        } catch (error) {
            console.error('Error fetching todos:', error);
            loading.textContent = 'Failed to load todos';
        }
    };

    // Function to add a new todo
    const addTodo = async (event) => {
        event.preventDefault();
        const text = newTodoInput.value.trim();
        if (!text) return;

        try {
            const response = await fetch('https://todo-api-peach-seven.vercel.app/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            newTodoInput.value = '';
            fetchTodos(); // Refresh the list after adding
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    // Function to delete a todo
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`https://todo-api-peach-seven.vercel.app/api/todos/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchTodos(); // Refresh the list after deleting
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    // Attach the submit event listener to the form
    todoForm.addEventListener('submit', addTodo);

    // Initial fetch of todos
    fetchTodos();
});
