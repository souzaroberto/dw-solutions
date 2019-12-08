<?php

function ps_encode($result)
{
  $processes = [];

  $regex = "/(\d+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+) +(\S+)/";
  preg_match_all($regex, $result, $matches);

  foreach ($matches[1] as $index => $user) {
    $processes[] = [
      "pid"    => $matches[1][$index],
      "user"     => $matches[2][$index],
      "pr"     => $matches[3][$index],
      "ni"     => $matches[4][$index],
      "virt"     => $matches[5][$index],
      "res"     => $matches[6][$index],
      "shr"     => $matches[7][$index],
      "s"    => $matches[8][$index],
      "cpu"   => $matches[9][$index],
      "mem"    => $matches[10][$index],
      "time" => $matches[11][$index],
      "comand" => $matches[12][$index],
    ];
  }

  return $processes;
}