<?php
    $demo =  $_POST['demo'];
    session_start();
    session_destroy();
    $_SESSION['demo']="demo";
    echo "<script>location.href='./kayit.php';</script>"

?>