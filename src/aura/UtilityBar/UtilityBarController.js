({
    /*
     * Function for hide open utlity panel
     */ 
	hidePanel : function(component, event, helper) {
			helper.hidePanelHelper(component, event, helper);
	},
    /*
     * Function for display utlity panel
     */ 
    openPanel : function(component, event, helper){
        var btn=event.currentTarget
        var btntext=btn.innerText;
        var items=helper.UTILITYITEM;
        //Delete dynamic add component
        var divutility=component.find("divUtilityBody");
		divutility.set("v.body", []);  
        //Set button text value to attrubute
        component.set("v.itemName",btntext);
        //Remove active css class from button
         $A.util.removeClass(btn,'notifiy');
        //Section for bind component inside utility bar
        if(items.toLowerCase()===btntext.toLowerCase()){ 
            helper.hidePanelHelper(component, event, helper);
            $A.util.removeClass(btn,'slds-is-active');  
            helper.UTILITYITEM=""; 
        }
        else{ 
             helper.showPanelHelper(component, event, helper);
             $A.util.addClass(btn,'slds-is-active');
            //Call function for create dynamic component
            var cmpname=btn.dataset.cmpname;
            var searchtext=component.get("v.searchString");
            helper.createCmpHelper(component, event,cmpname,searchtext);
             helper.UTILITYITEM=btntext;
            
        }
         
    },
    /*
     * Function for receive text search from socket.io
     */
    fetchSearchText : function(component, event, helper){
        window.addEventListener("message",function(e){ 
            var searchtext=e.data.split(',')[2].trim();
            component.set("v.searchString",searchtext);
            //Add active css to call button
            var btncall=document.getElementById("btnCall");
            $A.util.addClass(btncall,'notifiy');
            
        });
    }
})