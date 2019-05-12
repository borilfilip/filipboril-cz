<?php
  header("Access-Control-Allow-Origin: *");

  $servername = "a024um.forpsi.com";
  $username = "f117095";
  $password = "qsJdVN3";
  $dbname = "f117095";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    header('HTTP/1.0 500 Internal Server Error');
    return;
  }

  $sql = "SELECT ID, Content FROM todo_item";
  $result = $conn->query($sql);
  $data = [];

  while($row = $result->fetch_assoc()) {
    $data[] = ['id' => $row["ID"], 'content' => $row['Content']];
  }

  echo json_encode($data);
  $conn->close();
