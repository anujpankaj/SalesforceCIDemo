({
	untoggle : function(component, event, helper) {
		var divcontrol=component.find("divAccount");
        $A.util.removeClass(divcontrol.getElement(),"toggle");
	},
    doAction : function(component,event,helper)
    {
        var divcontrol=component.find("divAccount");
        $A.util.addClass(divcontrol.getElement(),"toggle");
    }
    
    
})