({
	BindHelpText : function(component, event, helper) {
		helper.GetHelpText(component);
	},    
    DisplayHelpText : function(component,event,helper)
    {
         var helpcomponent=component.find("helptextdescription");
         $A.util.removeClass(helpcomponent,'toggle');
    },
    HideHelpText : function(component,event,helper)
    {
        var helpcomponent=component.find("helptextdescription");
         $A.util.toggleClass(helpcomponent,'toggle');
    }
})