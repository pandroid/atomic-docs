<?php


if (!empty($_POST['deleteDir'])){

//Set user input variable
$inputName = $_POST["inputName"];




deleteSidebarIncludeString($inputName );

deleteCatPageFile($inputName );

deleteCatSidebarIncludeFile($inputName );

deleteCompDir($inputName );



deleteCatScssImportString($inputName );


deleteScssDir($inputName );

header("location:index.php");

}



?>
