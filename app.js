const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todo list',
            todosList: [],
            newTodo: '',

        }
    },
    methods: {
        saveTask() {
            console.log('save task', this.newTodo)
            const newTask = {
                text: this.newTodo,
                status: true,
            }

            axios
                .post('./server.php', newTask, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res) => {
                    this.todosList.push(newTask); // Add new task to the existing list of tasks
                    this.newTodo = ''; // Reset the new task input field
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        fetchTodoList() {
            axios
                .get('./server.php')
                .then((res) => {
                    console.log(res.data)
                    this.todosList = res.data
                })
                .catch((err) => {
                    console.log(err)
                    this.todosList = []
                })

        },
    },
    mounted() {
        this.fetchTodoList()
    },

}).mount('#app')