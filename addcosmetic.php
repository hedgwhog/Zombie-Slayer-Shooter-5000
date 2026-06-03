<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>blabla</title>
</head>
<body>
    <form action="addcosmetic_verwerk.php" method="POST" enctype="multipart/form-data">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="Name" id="name" maxlength="50" required><br>
        </div><br>
        <div>
            <label for="price">Price:</label>
            <input type="number" name="Price" id="price" required><br>
        </div><br>
        <div>
            <label for="rarity">Tier:</label>
            <select name="Rarity" id="rarity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select><br>
        </div><br>
        <div>
            <label for="image">Image:</label>
            <input type="file" name="Image" id="image" required><br>
        </div><br>
        <div>
            <label for="description">Description:</label><br>
            <textarea name="Description" id="description" rows="3"></textarea>
        </div><br>
        <input type="submit" value="Add">
    </form>
</body>
</html>
