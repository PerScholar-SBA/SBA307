<?php
// Check if this is a POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];
    $category = $_POST['category'];

    // Here you can add validation or store the data in a database

    // For this example, we will return a success response
    $response = array(
        'status' => 'success',
        'message' => 'Form submitted successfully!'
    );

    // Return JSON response
    echo json_encode($response);
} else {
    // If not POST, return error
    $response = array(
        'status' => 'error',
        'message' => 'Invalid request method'
    );
    echo json_encode($response);
}
?>