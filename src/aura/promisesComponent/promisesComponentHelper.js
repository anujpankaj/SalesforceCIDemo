({
    /**
     * Function for call server side function standard way
    */
	helperCallServer : function(component) {
		var serverAaction=component.get("c.serverSideAction");
        serverAaction.setParams({
            'value' : '1' 
        });
        serverAaction.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS"){
                var responseValue=response.getReturnValue();                
                component.set('v.message', responseValue);
            }
            else if(state==="ERROR"){
                var errorMessage=response.getError();
            }
        });
        $A.enqueueAction(serverAaction);
	},
    /**
     * Function for call function using promises
     */ 
    promiseCallServer1 : function(component,resolve, reject){
        var serverAaction=component.get("c.serverSideAction");
        serverAaction.setParams({
            'value' : '1' 
        });
        
        serverAaction.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS"){
                var responseValue=response.getReturnValue();               
                component.set('v.message', responseValue);
                resolve(responseValue);
            }
            else if(state==="ERROR"){
                reject(Error(response.getError()[0].message));
            }
        });
        $A.enqueueAction(serverAaction);
            
        
    },
    promiseCallServer2 : function(component,resolve, reject){
        var serverAaction=component.get("c.append");
        serverAaction.setParams({
            's' : '1' ,
            'successPercentage' : '0.9'
        });
        
        serverAaction.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS"){
                var responseValue=response.getReturnValue();
                component.set('v.message', responseValue);
                resolve(responseValue);
            }
            else if(state==="ERROR"){
                reject(Error(response.getError()[0].message));
            }
        });
        $A.enqueueAction(serverAaction);
            
        
    },
    helperFunctionAsPromise : function(component, helperFunction) {
       return new Promise($A.getCallback(function(resolve, reject) {
            helperFunction(component, resolve, reject);
        }));
    },
   
})