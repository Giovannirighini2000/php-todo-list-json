<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo-list</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js" integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <section>
      <div class="container-todo">
        <h1 class="title-todo">{{ title }}</h1>
      </div>
      <div>
        <ul>
            <li v-for="todo in todosList" :key="todo" class="todo-list">{{todo}}</li>
        </ul>
      </div>
      
    </section>
  </div>
  <script src="./app.js"></script>
</body>
</html>