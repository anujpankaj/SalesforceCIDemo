({
	handleClick : function(component, event, helper) {
		var attributeValue=component.get("v.text");
        console.log("current text: "+attributeValue);
        var target;
        if(event.getSource)
        {
            target=event.getSource();
            component.set("v.text",target.get("v.label"));
        }
        else
        {
            target=event.target.value;
            component.set("v.text",target);
        }
        component.sampleMethod("1");
	},
    doAction : function(component,event,helper)
    {
        var params=event.getParam("arguments");
        if(params)
        {
            var pram1=params.param1;
        }
    },
    doSomething :function(component,event,helper)
    {
        
    }
})