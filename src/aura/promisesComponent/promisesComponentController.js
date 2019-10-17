({
	doInit : function(component, event, helper) {
		//helper.helperCallServer(component);
        helper.helperFunctionAsPromise(component,helper.promiseCallServer1)
        .then($A.getCallback(function(){
            return helper.helperFunctionAsPromise(component,helper.promiseCallServer2);
        }))
        .catch($A.getCallback(function(err){
            var toastEvent=$A.get("e.force:showToast");
            toastEvent.setParams({
                "title" : 'Error',
                 "type" : 'error',                
                "message" :err.message
            });
            toastEvent.fire();
        }))
	},
    handleParallerPromise : function(component,event,helper){
        Promise.all([
            helper.helperFunctionAsPromise(component,helper.promiseCallServer1),
            helper.helperFunctionAsPromise(component,helper.promiseCallServer2)
        ])
        .then(function(res){
            component.set('v.message', res.join(','));
        })
        .catch($A.getCallback(function(err){
            var toastEvent=$A.get("e.force:showToast");
            toastEvent.setParams({
                "title" : 'Error',
                 "type" : 'error',                
                "message" :err.message
            });
            toastEvent.fire();
        }))
    }
})