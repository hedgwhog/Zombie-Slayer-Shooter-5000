<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="graphic/style.css">
	<title>Zombie Slayer Shooter 5000</title>
</head>
<body>
	<div id="map"></div>
	<div id="mmofield"></div>
	<div id="plr" class="m-1 hitbox"></div>
	<div id="wepon"></div>

	<div id="profile">
		<span style="left: 12px; top: 69px;">I AM ERROR</span>
		<div class="pfp"></div>
		<div style="left: 70px; top: 20px;">
			<img src="graphic/textures/heart.png">
			<img src="graphic/textures/heart.png">
			<img src="graphic/textures/heart.png">
		</div>
	</div>

	<div id="equiped">
		<img src="graphic/textures/blaffer.png">
		<span>BLAFFER</span>
	</div>

	<script src="js/maps.js"></script>
	<script src="js/zombie.js"></script>
	<script src="js/maphandle.js" defer></script>
	<script src="js/game.js" defer></script>
	<script src="js/mmo.js" defer></script>
<script>
    const username = "<?= $_SESSION['Username'] ?? false ?>";
</script>
</body>
</html>