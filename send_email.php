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
    if (mail($to, $subject, $message)) {
        // Redirect back to index.html with success parameter
        header("Location: index.html?status=success");
        exit;
    } else {
        // Redirect back to index.html with error parameter
        header("Location: index.html?status=error");
        exit;
    }
}
