({
	fetchControlInformation : function(component, event, helper) {
		var controlvalue=component.find("inputText").get("v.value");
        helper.setControlValue(controlvalue);
	}
})