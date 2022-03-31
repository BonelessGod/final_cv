<?php

$bdd = new PDO('mysql:localhost;dbname=portfolio_projet', "root", "");

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_global.css">
    <link rel="stylesheet" href="style_form.css">
    <title>Document</title>
</head>
<body>

<div class="form">

    <div class="formPart">

        <label for="nameInput" class="formIndication">Nom du projet:</label>
        <input type="text" name="name" id="nameInput" class="textInputBox">

    </div>

    <div class="formPart">

        <label for="descriptionInput" class="formIndication">Description du Projet:</label>
        <textarea name="description" id="descriptionInput" cols="30" rows="10" class="textInputBox"></textarea>

    </div>

    <div class="formPart">

        <label for="technoInput" class="formIndication">Language utilisé(s):</label>
        <textarea name="techno" id="technoInput" cols="30" rows="10" class="textInputBox"></textarea>

    </div>

    <div class="formPart">

        <label for="linkInput" class="formIndication">Lien du projet:</label>
        <input type="url" name="link" id="linkInput" class="textInputBox">

    </div>

    <div class="formPart">

        <label for="img" class="formIndication button">Ajouter une image</label>
        <input type="file" name="img" id="img">

    </div>

    <div class="formPart">
        <label for="submit" class="formIndication button">ENVOYER</label>
        <button type="submit" id="submit" class="formIndication button">ENVOYER</button>
    </div>
    
</div>
    
</body>
</html>