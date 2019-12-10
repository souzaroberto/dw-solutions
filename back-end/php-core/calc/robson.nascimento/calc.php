<?php

/**
 * $operator: '+', '-', '*', '/'
 */
function calc($operand1, $operand2, $operator)
{
    if ($operator == '+'){
        $result = $operand1 + $operand2;
    }
    elseif ($operator == '-'){
        $result = $operand1 - $operand2;
    }
    elseif ($operator == '*'){
        $result = $operand1 * $operand2;
    }
    else {
        $result = $operand1 / $operand2;
    }
    return $result;
}

function calcWithEval($operand1, $operand2, $operator)
{
    $exp = "echo $operand1 $operator $operand2;";
    return eval($exp);
  // TODO 
  // Tips echo eval('return 1+1;');
}

?>