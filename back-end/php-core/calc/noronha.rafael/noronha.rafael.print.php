<?php 

require 'noronha.rafael.php'; 

// Calculator

// adding 1 + 1
var_dump(calc(1, 1, '+'));
var_dump(2);

// subtracting 1 - 1
var_dump(calc(1, 1, '-'));
var_dump(0);

// multiplying 1 * 1
var_dump(calc(1, 1, '*'));
var_dump(1);

// dividing 1 / 1
var_dump(calc(1, 1, '/'));
var_dump(1);


echo(calcWithEval('2', '5', '+'));
echo(calcWithEval('2', '5', '*'));



?>