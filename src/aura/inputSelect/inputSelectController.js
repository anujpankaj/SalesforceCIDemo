({
	loadOptions : function(component, event, helper) {
		 var opts = [
            { value: "Red", label: "Red",selected: true },
            { value: "Green", label: "Green" },
            { value: "Blue", label: "Blue" }
         ];
         component.set("v.PickListItems", opts);
         component.set("v.selectedValue","Red");
        
	},
    fetchControlInformation: function(component,event,helper){
        var selectedvalue=component.get("v.selectedValue");
        helper.setControlValue(selectedvalue);
    }
})