<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$employerCompanyName = $_POST['employerCompanyName'];
$employerNumberOfEmployees = $_POST['employerNumberOfEmployees'];
$employerCompanyEmail = $_POST['employerCompanyEmail'];
$employerCompanyNumber = $_POST['employerCompanyNumber'];
$employerMessage = $_POST['employerMessage'];

//Validate first
if(empty($employerCompanyName)||empty($employerCompanyEmail)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($employerCompanyEmail))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'info@webdacity.co.za';//<== update the email address
$email_subject = "Employer - Website Contact Form Submission";
$email_body = "You have received a new message form an employer:\n\n".

    "Company Name:\n $employerCompanyName\n\n".
    "Number Of Employees:\n $employerNumberOfEmployees \n\n".
    "Company Rep. Email:\n $employerCompanyEmail \n\n".
    "Company Rep. Number:\n $employerCompanyNumber \n\n".
    "Message:\n $employerMessage";
    
$to = "info@webdacity.co.za";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 