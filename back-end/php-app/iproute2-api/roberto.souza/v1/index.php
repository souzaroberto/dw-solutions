<?php

require 'util.php';

$result = shell_exec("ip addr show");
$ipaddr = linkshow_encode($result);

header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
echo json_encode($ipaddr);

?>