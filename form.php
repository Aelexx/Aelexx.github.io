<?php
$email = htmlspecialchars($_POST['Email']);
$password = htmlspecialchars($_POST['Password']);
$name = htmlspecialchars($_POST['Name']);
$surname = htmlspecialchars($_POST['Surname']);
$iq = htmlspecialchars($_POST['Iq']);

echo $email."<br>\n", $password."<br>\n", $name."<br>\n", $surname."<br>\n", $iq."<br>\n";

function PasswordCheck($password_string)
{
    $password_string = trim($password_string);
    if($password_string == '')
    {
        die("Password not entered");
    }
    elseif(strlen($password_string) < 8)
    {
    die("Password must be more than 8 characters in length");
    }
    elseif(!(preg_match('#[0-9]#', $password_string)))
    {
        die("Password must contain at least one number");
    }
    else
    {
    //Success, now process password
    }
}

$password = $_POST['Password'];
PasswordCheck($password);
?>