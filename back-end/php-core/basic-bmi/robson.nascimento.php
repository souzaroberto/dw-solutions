<?php

$weight = 60.0;
$height = 1.65;
$bmi = $weight/$height**2;
$result;

if ($bmi < 18.5){
    $result = "Underweight";
    echo $result."\n";
}
elseif ($bmi <= 24.9){
    $result = "Normal weight";
    echo $result."\n";
}
elseif ($bmi <= 29.9){
    $result = "Overweight";
    echo $result."\n";
}
else {
    $result = "Obesity";
    echo $result."\n";
}

?>