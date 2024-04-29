<?php
/*
$mystery = "Paaaala";

if ($mystery[0] === "P" && strlen($mystery) > 5 && strpos("l", $mystery) !== -1 ) {
    echo "Great !";
} else {
    echo "Not there yet !";
}

$cities_by_country = [
    "Brussels" => "Belgium",
    "Liège" => "Belgium",
    "Paris" => "France",
    "Charleroi" => "Belgium",
    "Rome" => "Italy",
    "Nice" => "France",
    "Rio de Janeiro" => "Brazil",
    "Antwerp" => "Belgium",
];

?>
<ul>
    <?php foreach ($cities_by_country as $city => $country) : ?>

        <?php if ($country === "Belgium") : ?>

            <li>
                <?php echo $city ?>
            </li>

        <?php endif; ?>

    <?php endforeach; ?>
</ul>

function through_dice($faces, $times)
{
    for ($i = 1; $i <= $times; $i++) {
        echo "die " . $i . ": result " . rand(1, $faces) . "\n";
    }
}

through_dice(10, 8);

function repeat($str, $num){
    $new_str = "";
    for ($i = 0; $i < $num; $i++) {
        $new_str .= $str;
    }
    return $new_str;
}
echo repeat("$", 5);

function greet($first_name, $last_name){
    return "This is ". $first_name .". ". strtoupper($last_name[0]);
}

echo greet("Marlon", "Brandon");

function is_short_weather($temperature){
    return $temperature >= 24 ? true : false;
}

var_dump(is_short_weather(13)); // false
var_dump(is_short_weather(27)); // true
var_dump(is_short_weather(-7)); // false

function last_element($arr){
    return empty($arr) ? null : end($arr);
}
var_dump(last_element([3, 5, 7])); //7
var_dump(last_element([1])); //1
var_dump(last_element([])); //null

function capitalize($str){
    return ucfirst($str) . "\n";
}
echo capitalize("eggplant"); // "Eggplant"
echo capitalize("pamplemousse"); // "Pamplemousse"
echo capitalize("squid"); //"Squid"

function sum_array($arr) {
    return array_sum($arr)."\n";
}

echo sum_array([1, 2, 3]); // 6
echo sum_array([2, 2, 2, 2]); // 8
echo sum_array([50, 50, 1]); // 101
*/
function return_day($day){
    // Define an array where the index 1 corresponds to Monday and 7 to Sunday
    $days = [
        1 => "Monday",
        2 => "Tuesday",
        3 => "Wednesday",
        4 => "Thursday",
        5 => "Friday",
        6 => "Saturday",
        7 => "Sunday"
    ];

    if (isset($days[$day])) {
        return $days[$day];
    } else {
        return null; // Return null
    }
}
var_dump(return_day(1)); // "Monday"
var_dump(return_day(7)); // "Sunday"
var_dump(return_day(4)); // "Thursday"
var_dump(return_day(0)); // null