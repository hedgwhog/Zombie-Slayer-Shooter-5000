<?php
require('database/config.php');

$result = "";


print_r($_POST);
echo "<br>";
print_r($_FILES);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["Name"]);
    $price = $_POST["Price"];
    $tier = $_POST["Rarity"];

    $image = $_FILES["Image"];
    $image_name = count(scandir("images/cosmetics")) . ".jpg";
    $image_temp_name = $image["tmp_name"];

    $description = $_POST["Description"];

    if(move_uploaded_file($image_temp_name, "images/cosmetics/".$image_name)) {

        try {
            $query = "INSERT INTO DOFG_Cosmetics (Name, Price, Tier, Image, Description)
                        VALUES (:name, :price, :tier, :image, :description);";

            $stmt = $conn->prepare($query);
            $stmt->execute([
                "name" => $name,
                "price" => $price,
                "tier" => $tier,
                "image" => $image_name,
                "description" => $description
            ]);

            $result = $stmt->fetchAll();

            if ($stmt->rowcount()) {
                $result = "{$name} has been added!";
            } else {
                $result = "Something went wrong!";
            }
        } catch (error $e) {
            $result = $e->getMessage();
        }
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Resultaat</title>
</head>
<body>
    <p><?= $result ?></p>
</body>
</html>
