({
	handleSaveRecord : function(component, event, helper) {
		component.find("recordHandler").saveRecord($A.getCallback(function(saveResult)
                                                                  {
                                                                      
                                                                      if(saveResult.state==="SUCESS" ||
                                                                         saveResult.state==="DRAFT"	
                                                                        )
                                                                      {
                                                                          var resultToster=$A.get("e.force:showToast");
                                                                          resultToster.setParams({
                                                                              "title" : "Saved",
                                                                              "message" : "The record was updated."
                                                                          });
                                                                          resultToster.fire();
                                                                          $A.get("e.force.refreshView").fire();
                                                                      }
                                                                      else if(saveResult.state==="INCOMPLETE")
                                                                      {
                                                                          
                                                                      }
                                                                      else if(saveResult.state==="ERROR")
                                                                      {
                                                                          var errormessage=JSON.stringify(saveResult.error);
                                                                      }
                                                                      else
                                                                      {
                                                                          var errormessage=JSON.stringify(saveResult.error);
                                                                      }
                                                                  }                                                                 
                                                                 ))
	}
})