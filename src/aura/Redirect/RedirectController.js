({
	changeApp : function(component, event, helper) {  
        
         /*   var urlEvent = $A.get("e.force:navigateToURL");
            urlEvent.setParams({
              "url": "/006/o"
            });
            urlEvent.fire();*/
        
       var switchAppEvent = $A.get("e.force:switchApp");
        switchAppEvent.setParams({
           "tabsetId": "02uN00000000bwQIAQ", 
           "startUrl": "home.jsp?tsid=02uN00000000bwQ"
        });
        switchAppEvent.fire(); 
        
       // sforce.one.navigateToURL('home.jsp?tsid=02uN00000000bwQ');
 }
})