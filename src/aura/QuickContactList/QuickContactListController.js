({
	doInit : function(component, event) {
		var action=component.get("c.FindAll");
        action.setCallback(this,function(a){
            component.set("v.contacts",a.getReturnValue())
        });
        $A.enqueueAction(action);               
	}   
}
 {
      searchKeyChange :function(component,event){
        var searchkey=event.getParam("searchKey");
        var action=component.get("c.FindByName");
        action.setParams({
            "searchKey":searchkey           
        });
        action.setCallback(this,function(a){
            component.set("v.contacts",a.getReturnValue())
        });
         $A.enqueueAction(action);   
    }
 })