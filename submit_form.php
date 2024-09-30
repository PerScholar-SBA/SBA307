<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];
    $category = $_POST['category'];

    // Here you can implement server-side validation and send an email or store the data in a database

    // For this example, we simply return a success response
    echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully!']);
}
?>