({
	onGroup : function(component, event, helper) {
		var selected=event.getSource().get("v.label");
        component.set("v.SelectedValue",selected);
	},
    fetchControlInformation : function(component,event,helper){
        var selectedvalue=component.get("v.SelectedValue");
        helper.setControlValue(selectedvalue);
    }
})