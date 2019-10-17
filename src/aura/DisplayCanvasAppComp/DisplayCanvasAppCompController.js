({
	afterScriptsLoaded : function(component, event, helper) {		
       debugger;
        Sfdc.canvas.controller.subscribe({
            name : 'myns.netTest',
            onData : function (e) {
                debugger;
                console.log("Subscribed to custom event ", e);
                component.set("v.accountData",JSON.parse(JSON.stringify(e)));
            }
        });
	}
})