<?php 

$string_todo = file_get_contents('./todo.json');
header('Content-Type: application/json');

echo $string_todo ;




