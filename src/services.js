function MailsDataSvc($http) {
	let mails;
	let mailboxes;
  this.getAllMails = () => {
	  if(!mails) {		
		mails = $http.get('http://test-api.javascript.ru/v1/vmerkotan/letters?delay=1000')
                  .then(response => response.data);
	  }
      return mails;
    }
  this.getAllMailboxes = () => {
	  if(!mailboxes) {
		mailboxes = $http.get('http://test-api.javascript.ru/v1/vmerkotan/mailboxes?delay=1000')
						.then(response => response.data)
	  }
      return mailboxes;
    }
   this.deleteMail = letterId => {
	return $http.delete('http://test-api.javascript.ru/v1/vmerkotan/letters/' + letterId);	
   }
}

export default MailsDataSvc