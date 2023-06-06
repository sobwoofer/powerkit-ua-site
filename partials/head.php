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
function addCss(string $css_file_name = 'styles.css'){
    echo '<link rel="stylesheet" href="' . $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/css/' . $css_file_name . '">';
}
addCss('modern-normalize.min.css');
addCss('header.css');
addCss('section-hero.css');
addCss('section-amount-of-power-banks.css');
addCss('section-about.css');
addCss('section-articles.css');
addCss('section-reviews.css');
addCss('section-img.css');
addCss('section-partners.css');
addCss('section-donate.css');
addCss('section-FAQ.css');
addCss('footer.css');
addCss('styles.css');
?>
    
    <title>Powerkit</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>