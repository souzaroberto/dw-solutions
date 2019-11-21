<?php

$altura = 1.80;
$peso = 62.0;
$bmiValor = $peso / $altura ** 2;
$bmiStatus;

if ($bmiValor < 18.5) {
  $bmiStatus = 'Abaixo do peso';
} elseif ($bmiValor <= 24.9) {
  $bmiStatus = 'Peso Normal';
} elseif ($bmiValor <= 29.9) {
  $bmiStatus = 'Acima do Peso';
} else {
  $bmiStatus = 'Obesidade';
}

echo $bmiStatus;
?>