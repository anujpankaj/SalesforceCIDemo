({
	OpenFile : function(component, event, helper) {
       $A.get("e.lightning:openFiles").fire({
            recordIds: [component.get("v.recordIds")] 
                                                        });
	},
    doInitCloseWindow : function(component,event,helper)
    {
     /* window.onLoad(
          $A.getCallback(function(){
              alert('hello');
          })
        );*/
      /*  window.setTimeout(
            $A.getCallback(function() {
                if (component.isValid()) {
                    component.set("v.DisplayButton", true);
                }
            }), 5000
        );*/
        
        window.onbeforeunload(
			$A.getCallback(function(){
              alert("Are you sure want to LOGOUT the session ?");
          })
           
        );
    }
})