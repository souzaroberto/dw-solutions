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

/* function showint_encode($result)
{
  $intshow = [];

  $regex = "//";
  preg_match_all($regex, $result, $matches);

  foreach ($matches[1] as $index => $showint) {

  }

  return $intshow;
}*/

?>