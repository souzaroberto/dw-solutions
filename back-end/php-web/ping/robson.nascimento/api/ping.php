<?php
  $count = $_GET['count'] ?? '';
  $address = $_GET['address'] ?? '';
  $result = [];
  $result['response'] = shell_exec("ping -c $count $address");

  header("Content-type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Origin: *");
  echo json_encode($result);
?>

