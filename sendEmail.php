
<?php

# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';

class SendEmail
{

    public static function SendMail($to, $subject, $content)
    {
        $key = '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';

        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("pehlivanovicalmir1@gmail.com");
        $email->setSubject($subject);
        $email->addTo($to);
        $email->addContent("text/plain", $content);
        
        
        $sendGrid = new \SendGrid($key);

        try{
            $response = $sendGrid->send($email);
            return $response;
        }catch(Exception $e){
            echo 'Email exception caught' . $e->getMessage() . "\n";
            return false;
        }
    }
}