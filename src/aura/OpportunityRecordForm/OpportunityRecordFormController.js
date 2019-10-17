({
	happyDance : function(component, event, helper) {
        component.find("notifLib").showToast({
            "title" : "Notif Success",
            "message" : "The record has been updated successfully."
        });
	}
})