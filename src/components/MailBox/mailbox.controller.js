class MailBoxController {
	constructor($scope, $log, MailsDataSvc) {
		
		this.$scope = $scope;
		this.$log = $log;
		this.MailsDataSvc = MailsDataSvc;
		this.getAllMailBoxes();
	}
	
	getAllMailBoxes() {		
		this.$scope.$emit('startLoading');
		this.MailsDataSvc.getAllMailboxes()
        .then(mailboxes => {
          this.mailboxes = mailboxes;
		  this.$scope.$emit('stopLoading');
        })
		.catch(error => {
			this.$log.error("mailboxes component error >>>>>", error);
			this.$scope.$emit('stopLoading');			
			this.$scope.$emit('showError', error.status + ' ' + error.statusText);	
		})
	}
}

MailBoxController.$inject = ['$scope', '$log', 'MailsDataSvc'];
export default MailBoxController