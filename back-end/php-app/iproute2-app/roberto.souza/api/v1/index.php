<?php

require 'util.php';

//$result = shell_exec("ip addr show");
//$ipaddr = linkshow_encode($result);

$link = $_GET['a'] ?? 'links';

if( $link == 'links') {
    $result = shell_exec("ip addr show");
    $dados = linkshow_encode($result);
}elseif ( $link == 'link') {
    $interface = $_GET['link'];
    $result = shell_exec("ip -s link show $interface");
    $dados = showint_encode($result);
}

header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
echo json_encode($dados)

//$name = $_GET['name'] ?? '';
//$result = [];
//$result['body'] = "Olá $name";

//$result2 = shell_exec("ip -s link show");
//$linkshow = linkshow_encode($result2);

//header("Content-type: application/json; charset=UTF-8");
//header("Access-Control-Allow-Origin: *");
//echo json_encode($ipaddr);

?>