<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php 
function addCss(string $css_file_name = 'styles.css'){
    $file_with_path = $_SERVER['DOCUMENT_ROOT'] . "/css/" . $css_file_name;
    $mtime = filemtime($file_with_path);
    echo '<link rel="stylesheet" href="' . $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/css/' . $css_file_name . '?v=' . $mtime . '">';
}
addCss('modern-normalize.min.css');
addCss('styles.css');
addCss('header.css');
addCss('section-hero.css');
addCss('section-amount-of-power-banks.css');
addCss('section-about.css');
addCss('section-articles.css');
addCss('section-reviews.css');
addCss('section-img.css');
addCss('section-partners.css');
addCss('section-donate-top.css');
addCss('section-donate-down.css');
addCss('section-FAQ.css');
addCss('footer.css');
?>
    
    <title>Powerkit</title>
    <link rel="icon" type="image/x-icon" href="../favicon-32x32.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="../js/burger-menu.js" type="module"></script>
    <script src="../js/counter.js" type="module"></script>
</head>