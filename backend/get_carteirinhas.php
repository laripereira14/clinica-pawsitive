<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require 'db_connection.php';

    $sql = "SELECT carteirinha FROM clientes";

    $result = $connection->query($sql);

    $all_carteirinhas = [];

    while($row = $result->fetch_row()) {
        array_push($all_carteirinhas, $row[0]);
    }
       
    echo json_encode(["success" => 1, "carteirinhas" => $all_carteirinhas]);

    $connection->close();
?>