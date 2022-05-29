<?php


   include('send_mail.php');

   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Headers: *");
   
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);


   if(isset($_POST['name'])) {
      sendMail($_POST['name'], $_POST['phone'], $_POST['subject'], $_POST['message']);
   }
   


?>