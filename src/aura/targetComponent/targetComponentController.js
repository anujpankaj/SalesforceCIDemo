({
	doInit : function(component, event, helper) {
		var myPageRef = component.get("v.pageReference");
        var releaseName= myPageRef && myPageRef.state ? myPageRef.state.c__releaseName : "Spring 18";
        var recordId= myPageRef && myPageRef.state ? myPageRef.state.c__recordId : "";
        component.set("v.releaseName", releaseName);
        component.set("v.recordId", recordId);
	},
    handlePageChange : function(component, event, helper) {
        var myPageRef = component.get("v.pageReference");
        var releaseName= myPageRef && myPageRef.state ? myPageRef.state.c__releaseName : "Spring 18";
        var recordId= myPageRef && myPageRef.state ? myPageRef.state.c__recordId : "";
        component.set("v.releaseName", releaseName);
        component.set("v.recordId", recordId);
    }
})