<?php 

$string_todo = file_get_contents('./todo.json');
header('Content-Type: application/json');
$todo_list = json_decode($string_todo,true);
$new_todo = isset($_POST['todo']) ? $_POST['todo'] : null;

if ($new_todo !== null) {
  $todo_list[] = $new_todo;
}

$new_array_string = json_encode($todo_list);

 echo $string_todo ;
// var_dump($string_todo);



