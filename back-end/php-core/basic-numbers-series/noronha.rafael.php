<?php

for ($i = 0; $i < 10; $i--) {
    for ($j = 0; $j < 10; $j ++) {
        echo $i.$j." ";
        if ($j == 9) {
            echo "\n";
        } 
        
    }
}

echo "\n";
echo "\n";

for ($i = 9; $i > -1; $i--) {
    for ($j = 9; $j > -1; $j --) {
        echo $i.$j." ";
        if ($j == 9) {
            echo "\n";
        } 
        
    }
}

echo "\n";
echo "\n";

for ($i = 0; $i < 10; $i++) {
    for ($j = 0; $j < 10; $j++) {
        if ($j % 2 == 1){
            echo $i.$j." ";
            if ($j == 9) {
                echo "\n";
            }
        
        } 
        
    }
}
?>