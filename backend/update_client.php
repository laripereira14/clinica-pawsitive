<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require 'db_connection.php';

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if (!in_array(null, $_POST)) {
        
        $carteirinha = $connection->real_escape_string($_POST['carteirinha']);
        $nome = $connection->real_escape_string($_POST['nome']);
        $celular = $connection->real_escape_string($_POST['celular']);
        $email = $connection->real_escape_string($_POST['email']);
        $nome_pet = $connection->real_escape_string($_POST['nome_pet']);
        $especie_pet = $connection->real_escape_string($_POST['especie_pet']);
        $data_nasc = $connection->real_escape_string($_POST['data_nasc']);
        $senha = $connection->real_escape_string($_POST['senha']);

        $sql = "UPDATE clientes SET 
                nome='$nome',
                celular='$celular',
                email='$email',
                nome_pet='$nome_pet',
                especie_pet='$especie_pet',
                data_nasc='$data_nasc',
                senha='$senha'
        WHERE carteirinha = '$carteirinha'";

        $query = $connection->query($sql);

        if ($query) {
            echo json_encode(["success" => 1, "msg" => "Dados atualizados com sucesso!"]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Houve um problema. Tente novamente mais tarde." ]);
        }

    } 

    $connection->close();


?>