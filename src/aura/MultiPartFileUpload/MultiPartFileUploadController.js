({
	GetUserInfo : function(component, event, helper) {       
         helper.helperGetUserSession(component, event);         
	},
    handleUploadFinished : function(component, event, helper){
        helper.show(component, event);
        debugger;
        // This will contain the List of File uploaded data and status
        var uploadedFiles = event.getSource().get("v.files")[0];
        var objFileReader  = new FileReader();
        objFileReader.onloadend = $A.getCallback(function(){
            var dataURL = objFileReader .result;
            var content = dataURL.match(/,(.*)$/)[1];
            helper.fileUpload(component, uploadedFiles, content, function(result){
                if(result){
                    helper.hide(component,event);
                }
                else{
                    
                }
            })
            
        });
        objFileReader.readAsDataURL(uploadedFiles);        
    }
})