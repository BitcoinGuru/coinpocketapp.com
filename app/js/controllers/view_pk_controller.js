(function(pageHash, keyPair, bitcoinWorker, viewPKView, Controllers) {

  function ViewPKController() {
    var self = this;

    self.showOrHide(pageHash.currentPage);
    pageHash.bind('pageHash.pageChanged', self.showOrHide.bind(self));
    viewPKView.bind('submitButton.click', self.submitButtonClicked.bind(self));
  }

  ViewPKController.prototype.showOrHide = function(pageParams) {
    if (pageParams.page === '#/viewpk') {
      viewPKView.show();
      viewPKView.$form.show();
      viewPKView.$decryptedContainer.hide();
    } else {
      viewPKView.hide();
      viewPKView.$viewPKKey.text('');
      viewPKView.$viewPKCode.html('');
    }
  };

  ViewPKController.prototype.submitButtonClicked = function($form) {
    var self = this;
    var password = viewPKView.$passwordInput.val();
    viewPKView.loading();

    bitcoinWorker.async("getPrivateKeyWIF", [password, keyPair], function(result) {
      if(typeof result.error == 'undefined') {
        viewPKView.$decryptedContainer.show();
        self.setPK(result);
        viewPKView.doneLoading();
        viewPKView.$form.hide();
      } else {
        viewPKView.validationMessage(result.error);
        viewPKView.doneLoading();        
      }
    });
  };

  ViewPKController.prototype.setPK = function(pkWIF) {
    viewPKView.setPK(pkWIF);
  };

  Controllers.viewPKController = new ViewPKController();

})(CoinPocketApp.Models.pageHash, CoinPocketApp.Models.keyPair, CoinPocketApp.Models.bitcoinWorker, CoinPocketApp.Views.viewPKView, CoinPocketApp.Controllers);
