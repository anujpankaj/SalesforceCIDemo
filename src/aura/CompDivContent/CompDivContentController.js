({
	test : function(component, event, helper) {
		var button=event.currentTarget;
        var buttonlabel=button.dataset.label;
        alert(buttonlabel);
	}
})