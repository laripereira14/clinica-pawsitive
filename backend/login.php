<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require 'db_connection.php';

    $data = json_decode(file_get_contents("php://input"));

    $sql = "SELECT * FROM clientes WHERE carteirinha = '$data->carteirinha' AND senha = '$data->password'";

    $query = $connection->query($sql);

    $numRows = $query->num_rows;

    if ($numRows == 1) {
        $client = $query->fetch_assoc();
        echo json_encode(["success" => 1, "client" => $client ]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Carteirinha ou senha incorretas." ]);
    }

    $connection->close();




?>