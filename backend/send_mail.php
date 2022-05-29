<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    function sendMail($nome, $phone, $subject, $message) {
        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'ssl';
        $mail->Username = 'clinicapawsitive@gmail.com';
        $mail->Password = 'pawsitive2012*';
        $mail->Port = 465;

        $mail->setFrom('clinicapawsitive@gmail.com', "Mensagem de $nome");
        $mail->addAddress('clinicapawsitive@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<p><b> Nome: </b> $nome </p>";
        $mail->Body .= "<p><b> Celular:</b> $phone </p>";
        $mail->Body .= nl2br($_POST['message']);
            
        if(!$mail->send()) {
            echo "Ocorreu um erro. Tente novamente mais tarde.";
        } else {
            echo "Mensagem enviada com sucesso! Tempo estimado de resposta: 24h.";
        }

    }

?>