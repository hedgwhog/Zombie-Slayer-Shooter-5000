<?php
session_start();
if ($_SESSION['Username']) {
    $Username = $_SESSION['Username'];
    $Displayname = $_SESSION['Displayname'];
    $Balance = $_SESSION['Balance'];
    $Inventory = $_SESSION['Inventory'];
    $Killcount = $_SESSION['Killcount'];
    $Deathcount = $_SESSION['Deathcount'];
    $Pfp = $_SESSION['ProfilePicture'];
} else { header("Location: index.php"); }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style/style.css" rel="stylesheet">
</head>

<body>

<div class="profile-container">

    <div class="profile-picture"
         style="background-image: url('images/pfp/<?= $Pfp ?>')">
    </div>

    <div class="profile-names">
        <button class="btn btn-danger" onclick="window.location = 'logout.php'">Logout</button>

        <span class="displayname">
            <b>Displayname:</b> <?= $Displayname ?>
        </span>

        <span class="username">
            <b>Username:</b> <?= $Username ?>
        </span>
    </div>

    <div class="profile-stats">
        <b>Stats:</b><br>
        Kills: <?= $Killcount ?> <br>
        Deaths: <?= $Deathcount ?>
    </div>

    <div class="profile-balance">
        <p>
            <b>Balance</b>
            <br><br>
            <span><?= $Balance ?> Coins</span>
        </p>
    </div>

    <div class="profile-killdeath">
        <b>K/D Ratio: </b>
        <?php if ($Killcount != 0 && $Deathcount != 0) { ?><?= round($Killcount / $Deathcount, 2) ?><?php } else { ?> You dont have any kills or deaths. <?php } ?>
    </div>

        <div class="profile-inventory">
            <b>Inventory:</b>
            <div class="inventory-content" onclick="window.location = 'inventory.php'">
                <img src="images/icons/inventory.png">
            </div>
        </div>

</div>
<div class="arrow" onclick="window.location = 'index.php'"><img src="images/icons/arrow-back.png"></div>
</body>
</html>