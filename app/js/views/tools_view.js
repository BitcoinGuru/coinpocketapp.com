(function($, Views) {

  function ToolsView() {
    self = this;

    self.$container = $("#tools");
    self.$address = $("#address-check");
    self.$amount = $("#amount-check");
    self.$checkBalanceButton = $("#check-balance-button");
    self.$checkBalanceContainer = $('#check-balance');

    self.$checkBalanceButton.click(function(e) {
      self.trigger('checkBalanceButton.click');
    });
  }

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

  MicroEvent.mixin(ToolsView);
  Views.toolsView = new ToolsView();

})(jQuery, CoinPocketApp.Views);
