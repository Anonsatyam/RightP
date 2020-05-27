<?php
// DB credentials.
define('DB_HOST','localhost');
define('DB_USER','rightphysio');
define('DB_PASS','rightphysio');
define('DB_NAME','rightphysio');
// Establish database connection.
$link = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

/*try
{
$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e)
{
exit("Error: " . $e->getMessage());
}*/
?>