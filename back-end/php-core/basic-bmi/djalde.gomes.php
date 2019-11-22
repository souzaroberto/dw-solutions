<?php

$weight = 70.0;
$height = 1.91;
$result = $weight / ($height**2);

echo $result;

if ($result <= 18.5) {
  echo $result."\n";
  echo "underweight"; } elseif ($result > 18.5 and $result < 25.0) {
  echo $result."\n";
  echo "normalweight"; } elseif ($result >= 25.0 and $result < 30.0) {
  echo $result."\n";
  echo "overweight"; } elseif ($result >= 30.0) {
  echo $result."\n";
  echo "obesity";}





?>