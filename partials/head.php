<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php 
foreach (glob("\.\/css\/*.css") as $key => $value) {
    $css_files = substr($value, 2);
    echo '<link rel="stylesheet" href="';
    echo $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] . $css_files;
    echo '">';
}

?>
    
    <title>Powerkit</title>
</head>