<?php
/*
$a = "3";
$b = "8";

$temp = 0;
$temp = $a;
$a = $b;
$b = $temp;

echo "a is " . $a;
echo "<br/>";
echo "b is " . $b;


$bank_account = "N957324";
echo strlen($bank_account)."\n";
echo "The first letter of the bank account is " . $bank_account[0] . "\n";

$sencond_bank_account = "BE97684531265";
echo "This bank account is from " . substr($sencond_bank_account, 0, 2) . "\n";

$wrong_bank_account = "   BE_954364     ";
echo str_replace("_", "", trim($wrong_bank_account));


$word = "skateboard";
$facial_hair = str_replace("o", "e", substr($word, 5, 9));
echo $facial_hair;

$city = "Brussels";

$weather_condition = "rainy";

$temperature = 24.16879;

echo "The weather in " . $city . " is " . round($temperature) . "C° and it's " . $weather_condition . ".";

$price_with_vat = "37.5€";
$price_with_vat = floatval(str_replace("€", "", $price_with_vat));
echo number_format($price_with_vat - (21 * $price_with_vat / 100), 2);

//surface circle
$circle_radius = 37.59;
$circle_surface = intval(pi() * pow($circle_radius, 2));
echo $circle_surface;

$leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
print_r(str_replace("Bellatrix", "Draco", $leaderboard));


$initialArray = [
    null,
    true,
    ["Apple", "two", null],
    false,
    ["three", "BeCode"],
    4,
    "I'm a big bad wolf",
    ["one"],
];
$arr = array();
array_push($arr, $initialArray[7][0], $initialArray[2][1], $initialArray[4][0]);
print_r($arr);
*/
$planets = array("The Moon", "Venus", "Earth", "Mars", "Jupiter"); // Do not touch this !
array_shift($planets);
array_push($planets, "Saturn");
array_unshift($planets, "Mercury");
print_r($planets);