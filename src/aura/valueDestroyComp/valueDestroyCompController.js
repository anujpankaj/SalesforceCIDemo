({
	 valueDestroy : function (component, event, helper) {
      var val = event.getParam("value");
      // Do something else here
      alert('hello');
    },
    checkBrowser: function(component) {
        var device = $A.get("$Browser.formFactor");
        alert("You are using a " + device);
    },
    window.onload : function () {
       //some code
       alert("hello");
   }
})