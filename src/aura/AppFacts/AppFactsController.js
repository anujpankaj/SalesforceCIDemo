({
	doInit : function(component, event, helper) {
		var timezone=$A.get("$Locale.language");
        component.set("v.localVariable",timezone);
	}
})