(function($, Views) {

  function ToolsView() {
    self = this;

    self.$container = $("#tools");
    self.$address = $("#address-check");
    self.$amount = $("#amount-check");
    self.$checkBalanceScancodeContainer = $('#check-balance-scancode-container');
    self.$checkBalanceButton = $("#check-balance-button");
    self.$checkBalanceContainer = $('#check-balance');
    self.$getBalanceButton = $("#get-balance-button");

    self.$checkBalanceButton.click(function(e) {
      self.trigger('checkBalanceButton.click');
    });

    self.$getBalanceButton.click(function(e) {
      self.trigger('getBalanceButton.click');
    });

    $("#scancode-button-check").scancode();
  }

  ToolsView.prototype.loadingBalance = function() {
    this.$amount.prop('disabled', true);
    this.$address.prop('disabled', true);
    this.$getBalanceButton.button('loading');
  };

  ToolsView.prototype.doneLoadingBalance = function() {
    this.$amount.prop('disabled', false);
    this.$address.prop('disabled', false);
    this.$getBalanceButton.button('reset');
  };

  ToolsView.prototype.show = function() {
    this.$container.fadeIn();
  };

  ToolsView.prototype.hide = function() {
    this.$container.hide();
  };

  ToolsView.prototype.setAddress = function(address) {
    this.$address.val(address);
  };

  ToolsView.prototype.setAmount = function(amount) {
    this.$amount.val(amount);
  };

  ToolsView.prototype.showScanCode = function() {
    this.$checkBalanceScancodeContainer.show();
  };

  ToolsView.prototype.hideScanCode = function() {
    this.$checkBalanceScancodeContainer.hide();
  };

  MicroEvent.mixin(ToolsView);
  Views.toolsView = new ToolsView();

})(jQuery, CoinPocketApp.Views);
