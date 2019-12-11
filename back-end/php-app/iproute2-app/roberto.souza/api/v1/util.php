<?php

function linkshow_encode($result)
{
  $linkshow = [];

  $regex = "/(\d+):\s+(.+):.+\s+mtu\s+(\d+).+\s+state\s+(UP|DOWN|UNKNOWN).+\s+link\/\w+\s([a-zA-Z-0-9:]+).+\s+inet\s+(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2})/";
  preg_match_all($regex, $result, $matches);

  foreach ($matches[1] as $index => $show) {
    $linkshow[] = [
      "id" => $matches[1][$index],
      "name" => $matches[2][$index],
      "mtu" => $matches[3][$index],
      "state" => $matches[4][$index],
      "mac" => $matches[5][$index],
      "ip" => $matches[6][$index],
    ];
  }

  return $linkshow;
}

function showint_encode($result)
{
  $intshow = [];

  $regex = "/(RX):.+\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+).+\s+(TX):.+\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/";
  preg_match_all($regex, $result, $matches);

  foreach ($matches[1] as $index => $showint) {
    $intshow[] = [
      "rx" => $matches[1][$index],
      "bytes" => $matches[2][$index],
      "packets" => $matches[3][$index],
      "errors" => $matches[4][$index],
      "dropped" => $matches[5][$index],
      "tx" => $matches[6][$index],
      "bytes" => $matches[7][$index],
      "packets" => $matches[8][$index],
      "errors" => $matches[9][$index],
      "dropped" => $matches[10][$index],
    ];
  }

  return $intshow;
}


?>