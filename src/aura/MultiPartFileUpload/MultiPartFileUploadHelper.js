({
	helperGetUserSession : function(cmp,event) {
		var action=cmp.get("c.getCurrentLoginUserSession");
        action.setCallback(this, function(resp){
            var state=resp.getState();
            if(state==="SUCCESS"){
                cmp.set("v.userSession",resp.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    show: function (cmp, event) {
        var spinner = cmp.find("mySpinner");
        $A.util.removeClass(spinner, "slds-hide");
        $A.util.addClass(spinner, "slds-show");
    },
    hide:function (cmp, event) {
        var spinner = cmp.find("mySpinner");
        $A.util.removeClass(spinner, "slds-show");
        $A.util.addClass(spinner, "slds-hide");
    },
    /*
     * Function call for file upload 
     */
    fileUpload : function(cmp, file, base64Data, callback){
        var action=cmp.get("c.UploadLargeFile");
        action.setParams({
            fileName:  file.name,
            fileContent: base64Data,
            contentType: file.type,
            token : cmp.get("v.userSession")
        });
        action.setCallback(this, function(res){
            var state = res.getState();
            if(state === "SUCCESS"){
                callback(res.getReturnValue());
            }
        });
        $A.enqueueAction(action);        
    }
})