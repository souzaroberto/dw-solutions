<?php

$weight = 60.0;
$height = 1.60;

$result = $weight / ($height*$height);
$BMI = '';

if ($result < 18.5) {
    $BMI = "Underweight";
} elseif ($result > 18.5 && $result < 24.9) {
    $BMI = "Normal weight";
} elseif ($result > 25 && $result < 29.9) {
    echo "Over weight";
} elseif ($result > 30) {
    echo "Obesity";
}

// WITH SWITCH CASE: 

/*switch ($result) {
    case $result < 18.5:
        echo "Underweight";
        break;
    case $result > 18.5 && $result < 24.9:
        echo "Normal weight";
        break;
    case $result > 25 && $result < 29.9:
        echo "Over weight";
        break;
    case $result > 30:
        echo "Obesity";
        break;
}*/

echo "BMI: $result \nResult: $BMI"

?>