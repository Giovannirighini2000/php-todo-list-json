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
            $data = {
                todo: this.newTodo,
            }

            axios
                .post('./server.php', $data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res) => {
                    this.todosList = res.data

                    this.newTodo = ''
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