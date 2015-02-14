<!DOCTYPE html>

<?php
	$referrer = $_SERVER['HTTP_REFERER'];

	$name = $_POST["name"];
	$email = $_POST["email"];
	$number = $_POST["number"];
	$message = $_POST["message"];

	$send = true;
	if ($name == null || $email == null || $message == null) {
		$send = false;
	}

	if ($send) {
		$to      = 'sam@sjd.co';
		$subject = 'New message at SJD.co from ' . $name;
		$headers = 'From: ' . $email . "\r\n" .
				    'Reply-To: ' . $email . "\r\n" .
				    'X-Mailer: PHP/' . phpversion();

		// Build sendable message
		$messageToSend = "Hi Sam,\n\n You have a new message at SJD.co from " . $name . 
						"\n\nDETAILS:\n================" .
						"\n\nName: " . $name .
						"\n\nEmail: " . $email .
						"\n\nPhone Number: " . $number .
						"\n\nMessage:\n" . $message . 
						"\n\n--\nSJD.co";

		// SEND EMAIL
		mail($to, $subject, $messageToSend, $headers);

		echo "Email sent!";
	} else {
		echo "Error, email has not been sent.";
	}

	if ($referrer != null) {
		echo "<br><br>Please <a href='" . $referrer . "'>click here</a> to return to " . $referrer;
	} else {
		echo "<br><br>Please <a href='http://sjd.co'>click here</a> to go to sjd.co";
	}

?>

