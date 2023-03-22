const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todo list',
            todosList: [],

        }
    },
    methods: {
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