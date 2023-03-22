const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Todo list',
            todos_list: [],

        }
    },
    methods: {
        fetchTodoList() {
            axios
                .get('./server.php')
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(res.data)
                })

        }
    },
    mounted() {
        this.fetchTodoList()
    },

}).mount('#app')