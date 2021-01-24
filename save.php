<?php

// IP geoloc reverse
require_once("geoip2.phar");
use GeoIp2\Database\Reader;
$reader = new Reader('/usr/share/GeoIP/GeoLite2-City.mmdb');

//We init DB access
try {
  $db = new PDO('sqlite:data/politiscales.sqlite');
} catch(Exception $e) {
  die();
}

$data = array();
$data["ts"] = time();

try {
  $record = $reader->city(getRealIpAddr());

  $data["lat"] = $record->location->latitude;
  $data["lon"] = $record->location->longitude;

} catch(Exception $e) {
  // No IP found.
  die();
}

$data["ref"] = !empty($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : null;
$data["ua"] = $_SERVER['HTTP_USER_AGENT'];
$data["timec"] = !empty($_POST["time"]) ? $_POST["time"] : null;

try {
  parse_str(base64_decode($_POST["data"]), $results);

  if(array_keys_exists(array("p1","p0","c1","c0","t1","t0","j1","j0","e1","e0","s0","s1","b0","m1","m0"), $results) == false) {
    throw new Exception;
  }

  foreach (array("anar", "prag", "femi", "comp", "vega", "mona", "reli") as $key) {
    if(!array_key_exists($key,$results)) {
      $data[$key] = null;
    }
  }

  $data = array_merge($data, $results);

} catch (Exception $e) {
  // Bad request
  die();
}

$prepare_req = $db->prepare('INSERT INTO results VALUES(:ts, :lat, :lon, :ref, :ua, :timec, :p1, :p0, :c1, :c0, :t1, :t0, :j1, :j0, :e1, :e0, :s1, :s0, :b1, :b0, :m1, :m0, :femi, :mona, :vega, :reli, :comp, :anar, :prag)');
$prepare_req->execute($data);

/* FUNCTIONS */

function getRealIpAddr() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function array_keys_exists(array $keys, array $arr) {
   return !array_diff_key(array_flip($keys), $arr);
}
