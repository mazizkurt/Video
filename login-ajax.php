<?php
    // $email=$_POST['email'];
    // $password=$_POST['password'];
    // session_start();
    // echo $email;
?>

<?php

include ("baglan.php");
session_start();
session_destroy();
$_SESSION['demo']="demodegil";
if($_POST)
{
$email=$_POST['email'];
$sifre=$_POST['sifre'];

// $query = $db->query("SELECT * FROM users", PDO::FETCH_ASSOC);
$query = $db->query("SELECT * FROM users WHERE Sifre = '{$sifre}' and Mail = '{$email}' " )->fetch(PDO::FETCH_ASSOC);
if($query != NULL)
{
    echo '<div class="alert alert-success" role="alert" style="padding: 30px"><b>Giriş Başarılı!</b> <br>İlgili sayfaya yönlendiriliyor...</div>';
}
else{
    echo '<div class="alert alert-danger" role="alert" style="padding: 30px"><b>Giriş Başarısız!</b> <br> Bilgilerinizi kontrol edip tekrardan giriş yapınız.</div>';
}


}

?>