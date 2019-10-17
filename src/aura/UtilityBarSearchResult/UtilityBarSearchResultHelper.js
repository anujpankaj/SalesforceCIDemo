({
	doSerachHelper : function(component,searchtext) {
		var searchevent=component.get("c.SearchText");
        searchevent.setParams({strText : searchtext});
        searchevent.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS"){
                var searchresult=response.getReturnValue();
                component.set("v.searchResult",searchresult);
                searchresult.forEach(function(result){
                    if(result.length>0){
                        component.set("v.showTost",false);
                        return false;
                    }
                    
                });
            }
            else if(state==="ERROR"){
                var errors=response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error message :"+ errors[0].message);
                    }else{
                        console.log("Unknown error");
                    }
                    
                }
            }
        });
        //Cache search result
        searchevent.setStorable();
        $A.enqueueAction(searchevent);
	}
})