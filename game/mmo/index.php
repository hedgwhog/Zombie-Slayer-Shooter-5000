<?php
	function sql($mode, $query, $flags=[]) {
		$pdo = new PDO('sqlite:./mmo.db');
		$stmt = $pdo->prepare($query);
		$stmt->execute($flags);

		if ($mode) {return $stmt->fetchAll(PDO::FETCH_ASSOC);}
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	if ($_GET['div'] == '^') {
		// User leaves
		header("Content-Length: 0");
  		header("Connection: close");
  		flush();
		sql(false, 'DELETE FROM plr WHERE plr = :PLR', ['PLR' => $_GET['uid']]);
	} else if ($_GET['div'] == '!') {
		// User joins
		sql(false, "INSERT INTO plr(room, plr, div, pos) VALUES (:ROOM, :PLR, '<div></div>', '-1,-1')", [
			'ROOM' => $_GET['room'],
			'PLR' => $_GET['uid']
		]);
	} else {
		// User updates
		sql(false, "UPDATE plr SET room = :ROOM, div = :DIV, pos = :POS WHERE plr = :PLR", [
			'ROOM' => $_GET['room'],
			'DIV' => $_GET['div'],
			'PLR' => $_GET['uid'],
			'POS' => $_GET['pos']
		]);
	}

	$res = [];
	foreach (sql(true, 'SELECT div, pos FROM plr WHERE room = :ROOM AND plr != :PLR', [
		'ROOM' => $_GET['room'],
		'PLR' => $_GET['uid']
	]) as $div) {
		$res[] = $div['div'] . '|' . $div['pos'];
	}
?><?= implode('§', $res) ?>