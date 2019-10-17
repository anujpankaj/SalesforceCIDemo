({
    /*
     * Function for search string in Account,Contact and Lead object
     */ 
	doSearch : function(component, event, helper) {
        var searchtext=component.get("v.searchText");
		helper.doSerachHelper(component,searchtext);
	},
    /*
     * Function for redirect to record detail page
     **/
    redirectToDetail : function(component, event, helper){
            var anchar=event.currentTarget;
            var recordid=anchar.getAttribute('data-value');
            //Section for redirect to detial page
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
              "recordId": recordid,
              "slideDevName": "detail"
            });
            navEvt.fire();
     }
})