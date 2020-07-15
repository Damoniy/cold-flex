
    (function(){
          // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyAnUv21hhUyUc1lbQkob-YzRU-99KcrQLE",
        authDomain: "cold-flex.firebaseapp.com",
        databaseURL: "https://cold-flex.firebaseio.com",
        projectId: "cold-flex",
        storageBucket: "cold-flex.appspot.com",
        messagingSenderId: "152521814699",
        appId: "1:152521814699:web:9aa23af4c03214a4603dee",
        measurementId: "G-5SPM1QE1CL"
      };
      // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      }());
    /**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
       if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
				var email = document.getElementById('txtEmail').value;
				var password = document.getElementById('txtPassword').value;
				if (email.length < 4) {
				alert('Por favor, insira um e-mail!');
				return;
				}
				if (password.length < 4) {
				alert('Por favor, insira uma senha!');
				return;
				}
				// Sign in with email and pass.
				// [START authwithemail]
				firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// [START_EXCLUDE]
				if (errorCode === 'auth/wrong-password') {
					alert('Senha incorreta!');
				} else {
					alert(errorMessage);
				}
				console.log(error);
        document.getElementById('btnLogin').disabled = false;
				// [END_EXCLUDE]
				});
				// [END authwithemail]
      }
      document.getElementById('btnLogin').disabled = true;
      }

    function initApp(){
      firebase.auth().onAuthStateChanged(function(user) {
        
        var userId = firebase.auth().currentUser.uid;
        var docRef = firebase.database().ref('/users/' + userId);
        var tier = 2;

        if (user) {
          //online
          docRef.once('value').then(function(snapshot) {
            tier = snapshot.val().tier;
          })
          
          if(tier == 1){
            window.location.href = "dashboard.html";
          } else {
            window.location.href = "insertion.html";
          }
        } else {}
      });
    }

    function logOut() {
      firebase.auth().signOut().then(function() {
        window.location.href = "index.html";
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
      }

      function getName(){
        firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
          var userId = firebase.auth().currentUser.uid;
          var docRef = firebase.database().ref('/users/' + userId);

          docRef.once('value').then(function(snapshot) {
            var name = "name ".replace("name", snapshot.val().nome);
            name = name + snapshot.val().sobrenome;
            
            
            document.getElementById("name").innerHTML = "BEM VINDO, " + name;
          })
      }});      
    }
    
    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('txtEmail').value;
      var password = document.getElementById('txtPassword').value;
      var id = document.getElementById('txtMatricula').value;
      var name = document.getElementById('txtNome').value;
      var lastName = document.getElementById('txtLastName').value;
      var store = document.getElementById('loja').value;
      if (email.length < 4) {
        alert('Email inválido!!');
        return;
      }
      if (password.length < 4) {
        alert('Senha não segura!!');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        sendEmailVerification();

        firebase.auth().signInWithEmailAndPassword(email, password);

        var uid = firebase.auth().currentUser.uid;

        firebase.database().ref('users/' + uid).set({
          nome: name,
          sobrenome: lastName,
          email: email,
          matricula : id,
          loja: store,
          tier: 2
        })

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

    function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }

    function getDate(){
      var now = new Date;
      document.write(now.toLocaleDateString())
    }

    function writeUserData() {
      var email = document.getElementById('txtEmail').value;
      var id = document.getElementById('txtMatricula').value;
      var name = document.getElementById('txtNome').value;

      var userId = firebase.auth().currentUser.uid;

      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : id
      });
    }