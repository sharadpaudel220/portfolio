<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

// Instantiate PHPMailer
$mail = new PHPMailer(true);

// SMTP configuration
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-gmail-address@gmail.com';
$mail->Password = 'your-gmail-password';
$mail->SMTPSecure = 'tls'; // or ssl
$mail->Port = 587; // or 465

// Form data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Email content
$mail->setFrom($email, $name);
$mail->addAddress('Sharadpaudel220@gmail.com');
$mail->Subject = $subject;
$mail->Body = $message;

// Send email
if ($mail->send()) {
  echo 'Message sent!';
} else {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>
