<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $email_from = "info@etelligent.ca"

  $email_subject = "new submission form"

  $email_body = "User Name: $name.\n".
                  "User Email: $mailFrom.\n".
                    "User Message: $message.\n";

  $mail_to = "shaikh.m.haris@gmail.com"
  $headers = "From: ".$mailFrom;

  mail($mail_to, $email_subject, $email_body, $headers);
  header("Location: about.html");
}