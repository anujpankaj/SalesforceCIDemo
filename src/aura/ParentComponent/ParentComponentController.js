({
	ChangeValue : function(component, event, helper) {
		var parent=component.get("v.ParentComp");
       // parent.ObjChild.CheckFlage=true;
       // component.set("v.ParentComp",parent);
        //Call server method
        var parentaction=component.get("c.CalculateMode");
        var number=component.get("v.Number");
        parentaction.setParams({
            "strnumber" : JSON.stringify(number)
        });
        parentaction.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS")
            {
                var resval=response.getReturnValue();
                component.set("v.ParentComp",resval);
            }
            else if(state==="ERROR")
            {
                var error=response.getError();
            }
        });
         $A.enqueueAction(parentaction);
	},
    LoadPageObject : function(component,event,helper)
    {
        var parentAction=component.get("c.LoadNumber");
        parentAction.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS")
            {
                var resval=response.getReturnValue();
                component.set("v.Number",resval);
            }
        });        
        $A.enqueueAction(parentAction);

    }
})