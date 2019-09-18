<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$dbhost = 'carolinevanaerschot.be.mysql';
$dbuser = 'carolinevanaerschot_be';
$dbpass = 'Poutaise.1';
$dbname = 'carolinevanaerschot_be';

  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
  $dblink->set_charset("utf8mb4");

  if ($dblink->connect_errno) {
     printf("Failed to connect to database");
     exit();
  }

  $result = $dblink->query("SELECT * FROM travaux_global");

  $dbdata = array();

  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }
 
  print json_encode($dbdata);
  
 
?>