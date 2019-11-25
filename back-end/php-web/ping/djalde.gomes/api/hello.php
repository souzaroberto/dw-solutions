<?php
  $ip= $_GET['name'] ?? '';
  $quant= $_GET['nome'] ?? '';
  $result = [];
  $result['body'] = shell_exec("ping -c $quant $ip");

  header("Content-type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Origin: *");
  echo json_encode($result);
?>