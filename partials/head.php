<?php
session_start();
header("Cache-Control: public, max-age=2592000");
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <meta http-equiv="Cache-control" content="public"> -->
    <meta name="description" content="official site of NGO 'Powerkit volunteer', that was created with the purpose of providing information about the activity of organization.">
    <link rel="icon" type="image/x-icon" href="../favicon-32x32.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">

    <link rel="stylesheet" href="https://this4you.github.io/powerkit-order-form/orderForm2.css">

<?php 
function addCss(string $css_file_name = 'styles.css'){
    $file_with_path = $_SERVER['DOCUMENT_ROOT'] . "/css/" . $css_file_name;
    $mtime = hash_file("crc32", $file_with_path);
    // $mtime = filemtime($file_with_path);
    echo '<link rel="stylesheet" href="../css/' . $css_file_name . '?v=' . $mtime . '">';
}
 addCss('modern-normalize.min.css');
// addCss('styles.css');
// addCss('header.css');
// addCss('section-hero.css');
// addCss('section-amount-of-power-banks.css');
// addCss('section-img.css');
// addCss('section-about.css');
// addCss('section-articles.css');
// addCss('section-reviews.css');
// addCss('section-partners.css');
// addCss('section-donate-top.css');
// addCss('section-donate-down.css');
// addCss('section-FAQ.css');
// addCss('section-contacts.css');
// addCss('footer.css');
// addCss('text-offer.css');
    $all_css = ['styles.css',
                'header.css',
                'section-hero.css',
                'section-amount-of-power-banks.css',
                'section-img.css',
                'section-about.css',
                'section-articles.css',
                'section-reviews.css',
                'section-partners.css',
                'section-donate-top.css',
                'section-donate-down.css',
                'section-FAQ.css',
                'section-contacts.css',
                'footer.css',
                'text-offer.css'
             ];

    function createMainCss($arr) {
        $main = '';
        $main_css_path = $_SERVER['DOCUMENT_ROOT'] . "/css/main.css";
        // echo "<style id='lex'>" . $main_css_path . "</style>";
        $main_css_file = fopen($main_css_path, "w" ) or die("main.css - file not found");

        foreach($arr as $value) {
            $file_with_path = $_SERVER['DOCUMENT_ROOT'] . "/css/" . $value;
            $main = $main . file_get_contents($file_with_path, true) ;
        }

        fwrite($main_css_file, $main);
        fclose($main_css_file);
        
    }

    createMainCss($all_css);

    addCss("main.css");
?>
    
    <title>Powerkit</title>
   
</head>