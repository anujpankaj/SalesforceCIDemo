({
	doInit : function(component, event, helper){
        //var id=component.find("number");
          window.addEventListener("keydown", function(event) {
           if(event.key==='-' || event.code==='Minus'){
               event.preventDefault();
                return false;
            }
            
        }, true);
       /* window.addEventListener("keydown", function(event) {
           if(event.key==='-' || event.code==='Minus'){
               event.preventDefault();
                return false;
            }
            
        }, true);*/
    },
    
    helloWorld : function(component, event, helper){
        console.log(event.getSource().get("v.value"));
        var old=event.getSource().get("v.value");
        if(event.getParam("keyCode")===98){
            component.set("v.oldmyNumber",old);
        }
       
    },
    helloWorld1 : function(component, event, helper){
        var old=component.get("v.oldmyNumber");
        if(old!==-1){
            event.getSource().set("v.value",old);
        }
        
        component.set("v.oldmyNumber",-1);
    }
   
})