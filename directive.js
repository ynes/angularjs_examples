testModule.directive('ngItemtemplate', function() {
  return {
    templateUrl: function(elem, attr) {
      return 'partials/' + attr.type +'.html'
    }
  };
});
