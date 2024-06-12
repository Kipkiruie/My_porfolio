<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $subject = $_POST["Subject"];
    $comment = $_POST["comment"];

    // Email details
    $to = "elishak551@gmail.com"; // Your email address
    $subject = "New message from $name: $subject";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Subject: $subject\n";
    $message .= "Message: $comment\n";

    // Send email
    mail($to, $subject, $message);

    // Redirect to success page or display success message
    header("Location: success.html"); // Redirect to a success page
    exit;
}
?>
