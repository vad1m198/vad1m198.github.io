angular.module('mailbox')
.service('AuthSvc', function($q, $timeout,  $window) {
	let password = "", email = "";
	let localStorageKey = "mailbox_authenticated"
	return {
        isAuthenticated: function(){
           var deferred = $q.defer();			
		   $timeout(function(){
			   if( (email.trim() === "me@test.com" && password === "qwerty") || $window.localStorage.getItem(localStorageKey)  ) {				  
				  $window.localStorage.setItem(localStorageKey, true);
				  deferred.resolve("Authenticated");
			   } else {				
				  deferred.reject("Incorrect login and/or password...");
			   }			   
           },2000);
		   
           return deferred.promise;
        },
		
		setPassword: function(newPass) {
			password = newPass;
		},
		
		setMail: function(newMail) {
			email = newMail;
		}
    };
})