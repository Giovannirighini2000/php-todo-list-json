<?php 

$string_todo = file_get_contents('./todo.json');
header('Content-Type: application/json');
$todo_list = json_decode($string_todo,true);

 echo $string_todo ;
// var_dump($string_todo);



