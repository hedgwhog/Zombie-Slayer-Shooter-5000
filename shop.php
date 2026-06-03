<?php
require('database/config.php');
session_start();

$cosmetics = [];

try {
    $query = "SELECT Name FROM DOFG_Cosmetics";

    $stmt = $conn->prepare($query);
    $stmt->execute();

    $allCosmetics = $stmt->fetchAll();

    foreach ($allCosmetics as $cosmetic) {
        array_push($cosmetics, $cosmetic['Name']);
    }

} catch(PDOException $e) {
    echo "<script>console.log('".$e->getMessage()."')</script>";
}

$cosmeticKey = $cosmetics[array_rand($cosmetics)];
$cosmeticKey2 = $cosmetics[array_rand($cosmetics)];
while ($cosmeticKey2 == $cosmeticKey) {
    $cosmeticKey2 = $cosmetics[array_rand($cosmetics)];
}
$cosmeticKey3 = $cosmetics[array_rand($cosmetics)];
while ($cosmeticKey3 == $cosmeticKey || $cosmeticKey3 == $cosmeticKey2) {
    $cosmeticKey3 = $cosmetics[array_rand($cosmetics)];
}

try {
    $getCosmetics = "SELECT Cosmetic_ID, Name, Price, Tier, Image, Description FROM DOFG_Cosmetics WHERE Name IN (:name, :name2, :name3)";

    $statement = $conn->prepare($getCosmetics);
    $statement->execute(['name' => $cosmeticKey,
                         'name2' => $cosmeticKey2,
                         'name3' => $cosmeticKey3]);

    $result = $statement->fetchAll();

    $cosmetic1 = $result[0];
    $cosmetic2 = $result[1];
    $cosmetic3 = $result[2];
} catch(PDOException $e) {
    echo "<script>console.log('".$e->getMessage()."')</script>";
}

if (isset($_SESSION['Username']) && isset($_SESSION['Balance'])) {
    $Username = $_SESSION['Username'];
    $Displayname = $_SESSION['Displayname'];
    $Balance = $_SESSION['Balance'];
    $Inventory = $_SESSION['Inventory'];
    $Pfp = $_SESSION['ProfilePicture'];
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style/style.css" rel="stylesheet">
    <title>ZSS5K - Shop</title>
</head>
<body>
<div class="shop-container">
    <h1 class="shop-title">ZSS5K - SHOP</h1>
    <div class="shop-profile">
        <div class="shop-user-info">
            <b><?= $Displayname ?? 'Log In to buy!' ?></b><br>
            <?= $Username ?? '' ?><br>
            Balance: <?= $Balance ?? 0 ?> Coins
        </div>
        <div class="shop-user-pfp"
             style="background-image: url('images/pfp/<?= $Pfp ?>')">
        </div>
    </div>
    <div class="shop-items">
        <div class="shop-item tier-<?= $cosmetic1['Tier'] ?>">
            <img src="images/cosmetics/<?= $cosmetic1['Image'] ?>" alt="<?= $cosmetic1['Name'] ?>">
            <div class="shop-item-header">
                <h2 class="shop-item-title"><?= $cosmetic1['Name'] ?></h2>

                <div class="shop-item-badges">
                    <span class="shop-item-price"><?= $cosmetic1['Price'] ?> Coins</span>
                    <span class="shop-item-tier tier-badge-<?= $cosmetic1['Tier'] ?>">Tier <?= $cosmetic1['Tier'] ?></span>
                </div>
            </div>
            <p class="shop-item-description"><?= $cosmetic1['Description'] ?? "No description available!"?></p>
            <button id="buy-button-<?= $cosmetic1['Cosmetic_ID'] ?>" class="btn btn-success" onclick="buyCosmetic('<?= $cosmetic1['Name'] ?>', <?= $cosmetic1['Price'] ?>, <?= $cosmetic1['Cosmetic_ID'] ?>)">Buy</button>
        </div>
        <div class="shop-item tier-<?= $cosmetic2['Tier'] ?>">
            <img src="images/cosmetics/<?= $cosmetic2['Image'] ?>" alt="<?= $cosmetic2['Name'] ?>">
            <div class="shop-item-header">
                <h2 class="shop-item-title"><?= $cosmetic2['Name'] ?></h2>

                <div class="shop-item-badges">
                    <span class="shop-item-price"><?= $cosmetic2['Price'] ?> Coins</span>
                    <span class="shop-item-tier tier-badge-<?= $cosmetic2['Tier'] ?>">Tier <?= $cosmetic2['Tier'] ?></span>
                </div>
            </div>
            <p class="shop-item-description"><?= $cosmetic2['Description'] ?? "No description available!"?></p>
            <button id="buy-button-<?= $cosmetic2['Cosmetic_ID'] ?>" class="btn btn-success" onclick="buyCosmetic('<?= $cosmetic2['Name'] ?>', <?= $cosmetic2['Price'] ?>, <?= $cosmetic2['Cosmetic_ID'] ?>)">Buy</button>
        </div>
        <div class="shop-item tier-<?= $cosmetic3['Tier'] ?>">
            <img src="images/cosmetics/<?= $cosmetic3['Image'] ?>" alt="<?= $cosmetic3['Name'] ?>">
            <div class="shop-item-header">
                <h2 class="shop-item-title"><?= $cosmetic3['Name'] ?></h2>

                <div class="shop-item-badges">
                    <span class="shop-item-price"><?= $cosmetic3['Price'] ?> Coins</span>
                    <span class="shop-item-tier tier-badge-<?= $cosmetic3['Tier'] ?>">Tier <?= $cosmetic3['Tier'] ?></span>
                </div>
            </div>
            <p class="shop-item-description"><?= $cosmetic3['Description'] ?? "No description available!"?></p>
            <button id="buy-button-<?= $cosmetic3['Cosmetic_ID'] ?>" class="btn btn-success" onclick="buyCosmetic('<?= $cosmetic3['Name'] ?>', <?= $cosmetic3['Price'] ?>, <?= $cosmetic3['Cosmetic_ID'] ?>)">Buy</button>
        </div>
    </div>
    <div class="arrow" onclick="window.location = 'index.php'"><img src="images/icons/arrow-back.png"></div>
</div>
<?php if (isset($_SESSION['Username'])) { ?>
<script>
    const fetchInventory = async () => {
        let stream = await fetch("/fetchInventory.php?username=<?= $Username ?>");
        let data = await stream.json();

        return data['0'].replaceAll("\"", "").split(";");
    }

    const checkIfinInventory = async (name, id) => {
        let inventory = await fetchInventory();
        if (await inventory.includes(name)) {
            disableButton(id);
            return true
        }
        return false
    }

    const disableButton = (id) => {
        document.getElementById(`buy-button-${id}`).disabled = true;
        return true
    }

    const addCosmeticToInventory = async (inventory) => {
        await fetch("/addInventory.php?username=<?= $Username ?>", {
            method: "POST",
            body: JSON.stringify(inventory)
        })
            .then(async function (res) {
                console.log(await res.text())
            })
            .catch(async function (res) {
                console.log(await res.text())
            })
    }

    const transaction = async (newBalance) => {
        await fetch("/transaction.php?username=<?= $Username ?>", {
            method: "POST",
            body: JSON.stringify({balance: newBalance})
        })
            .then(async function (res) {
                console.log(await res.text())
            })
            .catch(async function (res) {
                console.log(await res.text())
            })
    }

    const buyCosmetic = async (name, price, id) => {
        if (price < <?= $Balance ?>) {
            let newBalance = <?= $Balance ?> - price;
            await transaction(newBalance);
        } else {
            return "You don't have enough money!"
        }

        let inventory = await fetchInventory();
        if (!inventory.includes(name)) {
            inventory.push(name)
            await addCosmeticToInventory(inventory);
        } else {
            return "You already own this item!"
        }
        document.getElementById(`buy-button-${id}`).disabled = true;
        return location.reload();
    }

    checkIfinInventory("<?= $cosmetic1['Name'] ?>", <?= $cosmetic1['Cosmetic_ID'] ?>);
    checkIfinInventory("<?= $cosmetic2['Name'] ?>", <?= $cosmetic2['Cosmetic_ID'] ?>);
    checkIfinInventory("<?= $cosmetic3['Name'] ?>", <?= $cosmetic3['Cosmetic_ID'] ?>);

</script>
<?php } ?>
</body>
</html>