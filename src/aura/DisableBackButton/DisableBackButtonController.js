({
    jsLoaded : function(component,event,helper){
        alert('load');
    },
	myAction : function(component, event, helper) {
	
      /*  window.onbeforeunload  = $A.getCallback(function(){
                disableBack();
              //return true;
           });
        window.onpageshow =$A.getCallback(function(event){
            if (event.persisted) {
                disableBack();
            } 
        });
        function disableBack() {
            window.history.forward();
        }*/
       
	}
})