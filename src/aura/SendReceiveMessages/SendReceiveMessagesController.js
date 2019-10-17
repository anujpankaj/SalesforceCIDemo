({
	sendMessage : function(component, event, helper) {
        var msg={
            name: "General",
            value: component.get("v.messageToSend") 
        };
        component.find("RectApp").message(msg);
	},
    handleMessages : function(component, message, helper){
        var payload=message.getParams().payload;
        var name=payload.name;
        if(name === "General"){
            var value=payload.value;
            component.set("v.messageReceived",value);
        }
        else if(name=== "Foo"){
            
        }
    },
    handleError : function(component, error, helper){
        var description=error.getParams().description;
        component.set("v.error", description);
    }
})