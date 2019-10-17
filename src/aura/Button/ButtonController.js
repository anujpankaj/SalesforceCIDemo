({
	handleClick : function(component, event, helper) {
        var buttonaction=$A.get("e.c:SaveButton");
        buttonaction.fire();
        var allcontroldata=helper.ControlInfo;
	}
})