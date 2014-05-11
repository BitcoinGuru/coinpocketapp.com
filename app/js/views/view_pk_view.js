(function($, Views) {

  function ViewPkView() {
    var self = this;

    self.$container = $("#viewpk");
    self.$form = $("#viewpk-form");
    self.$passwordInput = $("#viewpk-password");
    self.$submitButton = $("#viewpk-submit-button");
    self.$backButton = $("#viewpk-back-button");
    self.$validationMessage = $("#viewpk-validation-message");
    self.$decryptedContainer = $("#viewpk-decrypted");
    self.$viewPKKey = $("#viewpk-key");
    self.$viewPKCode = $("#viewpk-qrcode");

    self.$submitButton.click(function() {
      self.trigger('submitButton.click', self.$form);
    });

    self.$form.submit(function(e) {
      e.preventDefault();
      self.trigger('submitButton.click', self.$form);
    });
  }

  ViewPkView.prototype.show = function() {
    this.$container.fadeIn();
  };

  ViewPkView.prototype.hide = function() {
    this.$container.hide();
    this.clearValidations();
    this.doneLoading();
    this.$passwordInput.val('');
  };

  ViewPkView.prototype.loading = function() {
    this.$passwordInput.prop('disabled', true);
    this.$submitButton.button('loading');
    this.$backButton.hide();
    this.clearValidations();
  };

  ViewPkView.prototype.doneLoading = function() {
    this.$passwordInput.prop('disabled', false);
    this.$submitButton.button('reset');
    this.$backButton.show();
  };

  ViewPkView.prototype.validationMessage = function(message) {
    this.$validationMessage.text(message);
  };

  ViewPkView.prototype.clearValidations = function() {
    this.$validationMessage.text('');
  };

  ViewPkView.prototype.setPK = function(pkWIF) {
    new QRCode(document.getElementById("viewpk-qrcode"), pkWIF);
    this.$viewPKKey.text(pkWIF);
  };

  MicroEvent.mixin(ViewPkView);

  Views.viewPKView = new ViewPkView();
})(jQuery, CoinPocketApp.Views);
