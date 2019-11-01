<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$employeeNameSurname = $_POST['employeeNameSurname'];
$employeeIDNumber = $_POST['employeeIDNumber'];
$employeeEmail = $_POST['employeeEmail'];
$employeeNumber = $_POST['employeeNumber'];
$employeeCompany = $_POST['employeeCompany'];
$employeeMessage = $_POST['employeeMessage'];

//Validate first
if(empty($employeeNameSurname)||empty($employeeEmail)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($employeeEmail))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'info@webdacity.co.za';//<== update the email address
$email_subject = "Employee - Website Contact Form Submission";
$email_body = "You have received a new message form an employee:\n\n".

    "Employee Name:\n $employeeNameSurname.\n\n".
    "Employee ID Number:\n $employeeIDNumber \n\n".
    "Employee Number:\n $employeeNumber \n\n".
    "Employee Email:\n $employeeEmail \n\n".
    "Employee Company:\n $employeeCompany \n\n".
    "Message:\n $employeeMessage";
    
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