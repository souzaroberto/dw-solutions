<?php
  $ip = $_GET['ip'] ?? '';
  $count = $_GET['count'] ?? '1';
  $result = [];
  $result['body'] = shell_exec("ping -c ${count} ${ip}");
  header("Content-type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Origin: *");
  echo json_encode($result);
?>