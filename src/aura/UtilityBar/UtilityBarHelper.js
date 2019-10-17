({
    //Utility item container
    UTILITYITEM : '',
    /*
     * Function for hide utility panel
     */
	hidePanelHelper : function(component, event, helper) {
			var openpanel=component.find("divUtilityOpen");
            $A.util.toggleClass(openpanel, 'slds-is-open popup');              
	},
    /*
     * Function for show utility panel
     */
    showPanelHelper :function(component, event, helper){
         var openpanel=component.find("divUtilityOpen");
         $A.util.addClass(openpanel, 'slds-is-open popup');
    },
    /*
     * Function for create dynaminic component 
     */
    createCmpHelper : function(component, event,cmpName,searchtext){
        $A.createComponent( "c:"+cmpName,
                           {"searchText" : searchtext},
                           function(newcmp, status, errorMsg){
                               if(status==="SUCCESS"){
                                   var divutility=component.find("divUtilityBody");
                                   var body=divutility.get("v.body");
                                   body.push(newcmp);
                                   divutility.set("v.body",body); 
                               }
                                else if (status === "INCOMPLETE") {
                                    console.log("No response from server or client is offline.")
                                    // Show offline error
                                }
                                else if (status === "ERROR") {
                                    console.log("Error: " + errorMessage);
                                    // Show error message
                                }
                           }
        );
        
    }
})