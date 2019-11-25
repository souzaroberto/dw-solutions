<?php

require 'calc.php';

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

echo(calcWithEval('1', '1', '+'))."\n";

// subtracting 1 - 1
echo calcWithEval('1', '1', '-')."\n";

// multiplying 1 * 1
echo calcWithEval('1', '1', '*')."\n";

// dividing 1 / 1
echo(calcWithEval('1', '1', '/'))."\n";

// echo eval('return 1+2;');

?>