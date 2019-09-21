<!DOCTYPE html>
<html lang="en">
<head>
	<?php 
		session_start();
		if(isset($_SESSION['demo'])){
			$demo="demo";
		}
	?>
	<title>Kira Yönetimine Hoşgeldiniz</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>

        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js"></script>

        <!-- Add additional services that you want to use -->
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-firestore.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-functions.js"></script>

	<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxAHdNJOymM_Uk7Ab5-btkKwfExI1BYTY",
    authDomain: "binasis.firebaseapp.com",
    databaseURL: "https://binasis.firebaseio.com",
    projectId: "binasis",
    storageBucket: "",
    messagingSenderId: "534649597767",
    appId: "1:534649597767:web:68c775ab439cc8dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().languageCode = 'tr';
</script>
<!--===============================================================================================-->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
</head>
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-70">
						Binasis Kayıt Ekranı
					</span>
					<span class="login100-form-avatar">
						<img src="images/logo.jpg" alt="AVATAR" style="width:100%;height: auto;">
                    </span>
             
					<div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "Kullanıcı Adınızı Girin">
						<input class="input100" type="text" name="username" id="kullanici_adi">
						<span class="focus-input100" data-placeholder="Adı Soyadı"></span>
                    </div>
                    <div class="wrap-input100 validate-input m-t-25 m-b-35" data-validate = "Email adresinizi girin">
						<input class="input100" type="email" name="username" id="email">
						<span class="focus-input100" data-placeholder="Email"></span>
                    </div>
                    
                    <div class="wrap-input100 validate-input m-t-25 m-b-35" data-validate = "Telefon girin">
						<input class="input100" type="number" name="username" id="telefon">
						<span class="focus-input100" data-placeholder="Telefon (5XX) XXX XX XX"></span>
					</div>
					<div class="wrap-input100 validate-input m-b-50" data-validate="Şifrenizi Girin">
						<input class="input100" type="password" name="pass" id="sifre">
						<span class="focus-input100" data-placeholder="Şifre"></span>
                    </div>
                    

					<div class="wrap-input100 validate-input m-b-50" data-validate="Şifrenizi Tekrar">
						<input class="input100" type="password" name="pass" id="sifre_tekrar">
						<span class="focus-input100" data-placeholder="Şifreyi tekrar girin."></span>
					</div>
					<div  class="validate-input m-b-50" id="captcha"></div>

  			

					<div class="container-login100-form-btn">
						<button type="button" class="login100-form-btn" id="kayit">
							Kayıt Ol
                        </button>
                    </div>
                    
				
					<ul class="login-more p-t-30">
						
						<li class="m-b-8">
							

							<a href="index.html" class="txt2">
								Kullanıcı Adı / Şifrem
							</a>
							<span class="txt1">
								Zaten var.
							</span>
						</li>

						
						<li>
								<span class="txt1">
									Kiracı ve Apartman Sahibi Arasındaki Entegre Sistem
								</span>
	
								
							</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
	
	<div class="modal animated fadeInLeft  bd-example-modal-lg " id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			
			<div class="modal-body">
			<div class="container">
				<div class="row align-items-center"   style="margin-top:30px;">
				      <div class="col-3">

					  </div>   
					  <div class="col-6">
						<div class="wrap-input100 validate-input m-t-25 m-b-35" data-validate = "Doğrulama Kodu">
							<input class="input100" type="text" name="username" id="dogrulama_kodu" style="text-align:center;font-size:22px;" placeholder="Doğrulama Kodu"/>
						
						</div>
						</div>      
						<div class="col-3">
							<i id="bekleniyor"></i>
						</div>               
						
				</div>
				<center><div role="alert" id="alert">
				  </div></center>
				<center><button type="button" class="btn btn-outline-success" id="dogrula">Doğrula</button></center>
				
			</div>
		
		
			</div>
		</div>
		</div>
    <script>
		

						window.dogrulamatoken='binasis';
						function getToken(callback) {
							
							 window.captcha = new firebase.auth.RecaptchaVerifier('captcha', {
								'size': 'normal',
								'callback': function(token) {
									callback(token);
								},
								'expired-callback': function() {
									callback('');
								}
							});
							window.captcha.render().then(function() {
								captcha.verify();
							});
						}
						function sendTokenToApp (token) {
							
							window.dogrulamatoken=encodeURIComponent(token);
							//location.href = '/telefon_dogrulama.php' + '/?token=' + encodeURIComponent(token);
						}

						document.addEventListener('DOMContentLoaded', function() {
							getToken(sendTokenToApp);
						});
						

                    $('#kayit').click(function(){ // Gönder'e tıklanmış mı kontrol edelim.
						const Toast = Swal.mixin({
						toast: true,
						position: 'top-end',
						showConfirmButton: false,
						timer: 3000
						});
                    // Gelen verileri değişkenlere atıyoruz.
				   if(window.dogrulamatoken=="binasis"){
					Toast.fire({
							type: 'warning',
							title: "Lütfen robot olmadığınızı bize gösterin !"
							})
				   }else{
					var degisken1 = $('#kullanici_adi').val(); // deger1 'i degisken1 değişkenine atadık .
                    var degisken2 = $('#email').val();
                    var degisken3 = $('#telefon').val();
                    var degisken4 = $('#sifre').val();
                    var degisken5 = $('#sifre_tekrar').val();
					var degisken6 = window.dogrulamatoken;
                    var postla = '&kullanici_adi='+ degisken1 + '&email='+ degisken2 + '&telefon='+ degisken3 + '&sifre='+ degisken4 + '&sifre_tekrar='+ degisken5;// Gönderilecek verileri bir değişkende topladık.
                    $.ajax({    // Ajax işlemini başlatıyoruz.
                    type:'POST', // Veri gönderme metodunu Post olarak seçiyoruz.
                    url:'kayit-ajax.php', // Verilerin postlanağı adresi belirliyoruz.
                    data:postla,// Hangi verilerin gönderileceğini belirttik
                    success:function(geridonut){ // Veri gönderme işleminin başarı durumunu sorguluyoruz.
                    $("#veriler1").html(geridonut);// veriler id'sine ajax.php'den dönen verileri basıyoruz. 
					
						if(geridonut=="Lütfen Geçerli Bir Email Girin !"){
							Toast.fire({
							type: 'warning',
							title: "Lütfen Geçerli Bir Email Girin !"
							})
						}
						if(geridonut=="Lütfen telefon formatını gösterildiği şekilde giriniz ! (5XX) XXX XX XX"){
							Toast.fire({
							type: 'warning',
							title: "Lütfen telefon formatını gösterildiği şekilde giriniz ! (5XX) XXX XX XX"
							})
						}
						if(geridonut=="Şifreler Uyuşmuyor !"){
							Toast.fire({
							type: 'warning',
							title: "Şifreler Uyuşmuyor !"
							})
						}
						
						if(geridonut=="Lütfen kullanıcı adınızı karakter sayısının 3 ile 40 arasında olduğundan emin olunuz !"){
							Toast.fire({
							type: 'warning',
							title: "Lütfen kullanıcı adınızı karakter sayısının 3 ile 40 arasında olduğundan emin olunuz !"
							})
						}
						
						if(geridonut=="Telefonunuza doğrulama kodu gönderildi"){
							Toast.fire({
							type: 'success',
							title: "Telefonunuza doğrulama kodu gönderildi"
							})
							var  phoneNumber= '+90' + $('#telefon').val();
							firebase.auth().signInWithPhoneNumber(phoneNumber,  window.captcha )
								.then(function (confirmationResult) {
								// SMS sent. Prompt user to type the code from the message, then sign the
								// user in with confirmationResult.confirm(code).
								window.confirmationResult = confirmationResult;
								//
								setTimeout(() => {
									$("#myModal").modal()
								}, 2000);
								//location.href = "/telefon_dogrulama.php?id="+confirmationResult;
							
								}).catch(function (error) {
								// Error; SMS not sent
								// ...
								});
						
						}             
                    }
                    });
                   
					
				   }
				
				
                    
                    });
					$('#dogrula').click(function(){
									$('#bekleniyor').addClass('fa fa-spinner fa-spin fa-2x fa-fw margin-bottom');
					   				var code = document.getElementById('dogrulama_kodu').value;
									
									   
									   window.confirmationResult.confirm(code).then(function (result) {
									// User signed in successfully.
									$('div').removeClass('alert alert-danger');
									$('#alert').addClass('alert alert-success');
									$('#bekleniyor').removeClass('fa fa-spinner fa-spin fa-2x fa-fw margin-bottom');
									var user = result.user;
							
									var demo1 = "<?php echo $demo ?>";
									alert(demo1);
									if(demo1==="demo"){
											location.href="demo/dashboard.php";
									}else{
										document.getElementById('alert').innerHTML="Telefon numaranız başarıyla tanımlandı. Yönlendiriliyorsunuz...";
										location.href="/kayit_odeme.php";
									}
								    
								
									}).catch(function (error) {
									// User couldn't sign in (bad verification code?)
									
									$('#alert').addClass('alert alert-danger');
									$('#bekleniyor').removeClass('fa fa-spinner fa-spin fa-2x fa-fw margin-bottom');

									document.getElementById('alert').innerHTML="Doğrulama kodunu hatalı !";
									// ...
									});
				   })
                </script>
	<div id="dropDownSelect1"></div>
	
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>