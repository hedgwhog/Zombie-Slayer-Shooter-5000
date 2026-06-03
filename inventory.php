<?php
session_start();

if (isset($_SESSION['Username'])) {
    $Username = $_SESSION['Username'];
    $Displayname = $_SESSION['Displayname'];
    $Inventory = $_SESSION['Inventory'];
} else {
    $Username = "Not logged in!";
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="style/style.css" rel="stylesheet">
    <title><?= $Displayname ?>'s Inventory!</title>
</head>
<body>
<div class="displayname-container">
<h1><?= $Displayname ?? '' ?>'s Bag</h1>
    <div class="displayline"></div>
</div>

<a href="profile.php">
<div class="inventory-leave">
    +
</div>
</a>

<div id="inventory-container">

</div>

<script>
    const inventoryToArray = (string) => {
        return string.split(";");
    }

    const getInventory = async (name) => {
        let stream = await fetch(`fetchCosmetics.php?name=${name}`);
        return await stream.json();
    }

    const buildCosmetic = (name, price, tier, image, description) => {
        return `<div class="inventory-cosmetics tier-${tier}">
                    <h2>${name}</h2>
                    <p>${description}</p>
                    <img src="images/cosmetics/${image}" alt="${name}">
                </div>`
    }

    const showInventory = (array) => {
        if (array != '') {
            array.forEach(async (cosmetic) => {
                let data = await getInventory(cosmetic);
                let name = cosmetic;
                let price = data['Price'];
                let tier = data['Tier'];
                let image = data['Image']
                let description = data['Description'];

                document.getElementById("inventory-container").innerHTML += buildCosmetic(name, price, tier, image, description);
            });
        } else {
            document.getElementById("inventory-container").innerHTML = '<div class="inventory-cosmetics">No collectibles yet!</div>'
        }
    }

    showInventory(inventoryToArray("<?= $Inventory ?>"))
</script>
</body>
</html>
