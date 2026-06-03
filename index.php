<?php
require('database/config.php');
session_start();
if (isset($_SESSION['Username'])) {
    $username = $_SESSION['Username'];

    try {
        $query = "SELECT * FROM DOFG_Users WHERE Username = :username";

        $stmt = $conn->prepare($query);
        $stmt->execute(['username' => $username]);

        $result = $stmt->fetch();

        $_SESSION['Displayname'] = $result['Displayname'];
        $_SESSION['Balance'] = $result['Balance'];
        $_SESSION['Inventory'] = $result['Inventory'];
        $_SESSION['Killcount'] = $result['Killcount'];
        $_SESSION['Deathcount'] = $result['Deathcount'];
        $_SESSION['ProfilePicture'] = $result['ProfilePicture'];

    } catch(PDOException $e) {
        echo "<script>console.log(Connection failed: " . $e->getMessage().")</script>";
    }
}
if (isset($_SESSION['LOGIN_ERROR'])) { $loginError = $_SESSION['LOGIN_ERROR']; }
if (isset($_SESSION['SIGNUP_ERROR'])) { $signupErrors = $_SESSION['SIGNUP_ERROR']; }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="style/index.css">
    <title>Zombie Slayer Shooter 5K</title>
</head>
<body>
<div class="index-container">
    <div class="index-walls-container">
        <div class="wall left"></div>
        <div class="wall right"></div>
        <div class="wall top"></div>
        <div class="wall bottom"></div>

        <div class="line tl"></div>
        <div class="line tr"></div>
        <div class="line bl"></div>
        <div class="line br"></div>


        <div class="index-backwall-container">
            <div class="index-title">
                <p>Zombie Slayer<br>Shooter 5000</p>
            </div>
            <div class="index-title-feet">

            </div>
            <div class="index-rolls-container">
            </div>
            <div class="index-rol1">
                <a href="guide.html"><img src="images/icons/guide.png" style="width: 80%; margin: auto;"></a>
            </div>
            <div class="index-rol2">
                <a href="shop.php"><img src="images/icons/cart.png" style="width: 80%; margin: auto;"></a>
            </div>
            <div class="index-rol3">
                <a href="./game/frame.html"><img src="images/icons/game.svg" style="width: 80%; margin: auto;"></a>
            </div>

            <div class="index-player" <?php if (isset($_SESSION['Username'])) { ?>onclick="window.location = 'profile.php'" <?php } ?>>
                <p><?php if (isset($_SESSION['Username'])) { ?> <?= $username ?> <?php } else { ?><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">Log in!</button><?php } ?></p>
            </div>
            <div class="index-credits">
                <p>Coins: <?= $_SESSION['Balance'] ?? 0 ?></p>
            </div>

            <div class="lever-holder">

            </div>
            <div class="lever-container" onclick="pullLever()">
                <div class="lever">
                    <div class="lever-rod"></div>
                    <div class="lever-knob"></div>
                </div>
            </div>

            <div class="index-bottom-container">

            </div>
            <div class="index-lights"></div>
        </div>
    </div>
</div>
    <div class="modal fade" id="LoginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="loginModalLabel">Log in!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="login_verwerk.php" method="post">
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" maxlength="50" id="username" name="Username" placeholder="DeathGooner445" autofocus required>
                            <label for="username">Username:</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" minlength="8" id="password" name="Password" placeholder="Password" required>
                            <label for="password">Password:</label>
                        </div><br>
                        <p><?= $loginError ?? "" ?></p>
                        <input class="btn btn-primary mb-3" type="submit" value="Submit">
                    </form>
                    <div class="modal-footer">
                        <p>Haven't signed up yet?</p>
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#SignupModal">
                            Signup here!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="SignupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="signupModalLabel">Signup!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="signup_verwerk.php" method="post" enctype="multipart/form-data">
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="username" name="Username" maxlength="50" placeholder="deathgooner445" autofocus required>
                            <label for="username">Username:</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="displayname" name="Displayname" maxlength="30" placeholder="Death Gooner" required>
                            <label for="displayname">Displayname:</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="password" class="form-control" id="password" name="Password" minlength="8" placeholder="Password" required>
                            <label for="password">Password:</label>
                        </div>
                        <div>
                            <label class="mb-2" for="pfp">Profile Picture: </label>
                            <input type="file" class="form-control" id="pfp" name="Pfp" required>
                        </div>
                        <p><?= $signupError ?? '' ?></p>
                        <input class="btn btn-primary mb-3" type="submit" value="Add a account">
                    </form>
                    <div class="modal-footer">
                        <p>Already signed up?</p>
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#LoginModal">
                            Log in!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
<script src="js/gambling.js"></script>
<?php if (isset($_SESSION['LOGIN_ERROR']) || isset($_SESSION['SIGNUP_ERROR'])) { ?>
<script>
    alert("<?= $_SESSION['LOGIN_ERROR'] ?? '' ?><?= $_SESSION['SIGNUP_ERROR'] ?? '' ?>");
</script>
<?php } ?>
</body>
</html>