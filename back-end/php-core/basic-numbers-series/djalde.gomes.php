<?php
//crescente
for ($i = 0; $i < 10; $i++) {
  if  ($i > 0){
      print("\n");}
  for ($j = 0; $j <10; $j++) {
  
    echo $i.$j.' ';
  }
    
}


//decrescente
echo "\n";
for ($i = 9; $i >= 0; $i--) {
  print("\n");
  for ($j = 9; $j >=0; $j--) {
  
    echo $i.$j.' ';
  }
    
}


//impares
print("\n");
print("\n");
for ($i = 0; $i < 10; $i++) {
  if  ($i > 0){
      print("\n");}
  for ($j = 0; $j <10; $j++) {
    if ($j % 2!=0) {
      echo $i.$j.' ';
  }
    
}
}
?>