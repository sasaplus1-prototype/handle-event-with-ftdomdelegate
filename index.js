(function(){

  'use strict';

  var delegate = new domDelegate.Delegate(document.body);

  delegate.on('click', 'form input[type="button"]', function(event) {
    alert(event.target.getAttribute('data-message'));
  });

}());
