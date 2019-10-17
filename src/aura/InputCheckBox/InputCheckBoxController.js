({
	onCheck : function(component, event, helper) {
		var checkCmp = component.find("checkbox");
        component.set("v.checkboxResult",checkCmp.get("v.value"));
	},
    fetchControlInformation : function(component,event,helper){
        checkboxvalue=component.get("v.value");
        helper.setControlValue(controlvalue);
    }
})