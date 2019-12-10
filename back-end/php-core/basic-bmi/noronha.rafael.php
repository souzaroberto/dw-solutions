<?php

$weight = 70.0;
$height = 1.86;
$result = $weight/($height**2);

if ($result < 18.5 ){
  echo "Underweight"."\n";
  echo "BMI: $result";
}elseif ($result < 25){
    echo "Normal weight\n";
    echo "BMI: $result";
}else{
    echo "Obesity\n";
    echo "BMI: $result";
}
?>