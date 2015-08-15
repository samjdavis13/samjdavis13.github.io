<!DOCTYPE html>

<?php
	error_reporting(0);

	$referrer = $_SERVER['HTTP_REFERER'];

	$name = $_POST["name"];
	$email = $_POST["email"];
	$number = $_POST["number"];
	$message = $_POST["message"];

	if ($referrer == null) {
		$referrer = "http://sjd.co/";
	}

	$send = true;
	if ($name == null || $email == null || $message == null) {
		$send = false;
	}

	$mailWasSent = false;
	if ($send) {
		$to      = 'sam@sjd.co';
		$subject = 'New message at SJD.co from ' . $name;
		$headers = 'From: ' . "mailbot@samjdavis.com" . "\r\n" .
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
		if (mail($to, $subject, $messageToSend, $headers)) {
			$mailWasSent = true;
		}
	}

?>

<!DOCTYPE html>
<html>
<head>
	<title><?php if ($mailWasSent): ?>Email Sent <?php else : ?>Email Not Sent<?php endif ?></title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<style>
	.modal {
	  text-align: center;
	}

	.modal-body, .modal-title, .modal-footer {
		text-align: center;
	}

	.modal:before {
	  display: inline-block;
	  vertical-align: middle;
	  content: " ";
	  height: 100%;
	}

	.modal-dialog {
	  display: inline-block;
	  text-align: left;
	  vertical-align: middle;
	}
</style>
</head>
<body>
	<!-- Modal -->
	<div id="myModal" class="modal fade">
	    <div class="modal-dialog modal-sm">
	        <div class="modal-content">
	            <div class="modal-header">
	                
	                <h4 class="modal-title"><?php if ($mailWasSent): ?>Success!<?php else : ?>Email Not Sent<?php endif ?></h4>
	            </div>
	            <div class="modal-body">

					<?php if ($mailWasSent): ?>
						<p class="text-success">Email has sent succesfully!</p>
					<?php else: ?>
						<p class="text-danger">ERROR: Email was not sent.</p>
						<p>The most likely cause of this is that you visited this page directly and not through the contact page found at <a href="http://sjd.co/">sjd.co</a></p>
						<hr>
						<p>Please tell me what went wrong at <a href="mailto:sam@sjd.co">sam@sjd.co</a></p>
					<?php endif ?>


	            </div>
	            <div class="modal-footer">
	                <a href="<?php echo "$referrer"; ?> "><button type="button" class="btn btn-primary">Return</button></a>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- Latest compiled and minified JavaScript -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

	<script>
		$(document).ready(function(){
			$("#myModal").modal('show');
		});
	</script>
</body>
</html>