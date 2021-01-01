<?php 

//require_once 'sendEmail.php';

if(isset($_POST['sendMailBtn'])){

    $emailCustomer = $_POST['fromEmail'];
    $to ='pehlivanovicalmir1@gmail.com';
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $content = 'Email is sent from:' . $emailCustomer . ' Content message: ' . $message; 

    SendEmail::SendMail($to, $subject, $content);

    //header("location:javascript://history.go(-1)");

}