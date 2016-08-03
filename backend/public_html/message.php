<?php
header('Access-Control-Allow-Origin: *');

require_once "db_connect.php";
require_once "user.php";
require_once "response.php";

class requestItem
{
  private $my_query = NULL;

  private $reciever = NULL;
  private $sender = NULL;
  private $requestMsg = NULL;
  public function __construct(dbConnect $my_query,$requestMsg,$reciever, $sender)
  {
    $this->my_query = $my_query;
    $this->reciever = $reciever;
    $this->sender = $sender;
    $this->requestMsg = $requestMsg;
  }
  public function findtoUserEmail() {
    $user = new User($this->my_query);
    $user->loadByUid($this->reciever);
    $recieverEmail = $user->getEmail();

    return $recieverEmail;
  }
  public function sendMsg($toEmail)
  {
    $to = $toEmail;
    $subject= "Free item request";
    $body = "<html>".
         "<body>".
         "$this->requestMsg<br><br><br>";
         "</body>";
        "</html>";
    $from_user = 'Sus App User';
    $headers = "From: \"$from_user\" <$this->sender>\r\n".
               "MIME-Version: 1.0" . "\r\n" .
               "Content-type: text/html; charset=UTF-8" . "\r\n";
        if(mail($to,$subject,$body,$headers)==True){
          echo '1';
        }else{
          echo '0';
        }
  }
}
$msg = $_POST['msg'];
$to = $_POST['toUser'];
$from = $_POST['fromUser'];
$item_request = new requestItem($mysql_db, $msg, $to, $from);
$toEmail = $item_request->findtoUserEmail();
$item_request->sendMsg($toEmail);
