<?php
$count = 0;
foreach (range(0,99) as $number) {
    if ($count == 10) {
        echo "\n";
        $count = 0;
    }
    if ($number < 10) {
        echo "0".$number." ";
        $count++;
    }
    else {
        echo $number." ";
        $count++;
    }
}
echo "\n"
?>