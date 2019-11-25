<?php

function calc($operand1, $operand2, $operator) {

    if ($operator == '+') {
        return $operand1 + $operand2; }
        elseif ($operator == '-') {
            return $operand1 - $operand2; }
            elseif ($operator == '/') {
                return $operand1 / $operand2;}
                elseif ($operator == '*') {
                    return $operand1 * $operand2;}
                }

                function calcWithEval($operand1, $operand2, $operator) {
                    $expression = "echo $operand1 $operator $operand2 ;";
                    return eval($expression);
                }

?>
