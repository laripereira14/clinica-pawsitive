<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require 'db_connection.php';


    if(isset($_GET['carteirinha']) && !empty($_GET['carteirinha'])) {
        $carteirinha = $_GET['carteirinha'];

        $sql = "SELECT * FROM servicos WHERE carteirinha_cliente='$carteirinha'";

        $result = $connection->query($sql);

        $services = [];

        while($row = $result->fetch_assoc()) {
            array_push($services, $row);
        }

        echo json_encode(["success" => 1, "services" => $services]);

    }

    $connection->close();
?>