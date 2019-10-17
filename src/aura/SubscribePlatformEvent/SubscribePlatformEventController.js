({
	onInit : function(component, event, helper) {
		// Register error listener for the empApi component.
        const empApi = component.find("empApi");
        // Error handler function that prints the error to the console.
        const errorHandler = function (message) {
            console.error("Received error ", JSON.stringify(message));
        };
        // Register error listener and pass in the error handler function.
        empApi.onError(errorHandler);
	},
    // Client-side function that invokes the subscribe method on the
    // empApi component.
    subscribe : function(component, event, helper) {
        debugger;
        // Get the empApi component.
        const empApi = component.find("empApi");
        // Get the channel from the input box.
        var channel = component.find("channel").get("v.value");
        const replayId = -1;

        // Callback function to be passed in the subscribe call.
        // After an event is received, this callback prints the event
        // payload to the console.
        const callback = function (message) {
            console.log("Event Received : " + JSON.stringify(message));
        };

        // Subscribe to the channel and save the returned subscription object.
        empApi.subscribe(channel, replayId, callback).then(function(newSubscription) {
            console.log("Subscribed to channel " + channel);
            component.set("v.subscription", newSubscription);
        });
    },
})