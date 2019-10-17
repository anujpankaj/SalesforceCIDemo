({
	displayToast : function(component, type, message) {
		var toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
            type : type,
            message : message
        });
        toastEvent.fire();
	},
    connectCometd : function(component){
        var helper = this;
        //Configure CometD
		var cometdUrl = window.location.protocol+'//'+window.location.hostname+'/cometd/41.0/';
        var cometd = component.get('v.cometd');
        cometd.configure({
            url : cometdUrl,
            requestHeaders : { Authorization: 'OAuth '+ component.get('v.sessionId')},
            appendMessageTypeToURL : false 
        });
        cometd.websocketEnabled = false;
        //Establish CometD connection
        cometd.handshake(function(hendshakeReply){
            if(hendshakeReply.successful){
                console.log('Connected to CometD');
                //Subscribe to platform event
                var newSubscription = cometd.subscribe('/event/Notification__e',
                   function(platformEvent){
                    console.log('Platform event received:'+ JSON.stringify(platformEvent));
                    helper.onReceiveNotification(component, platformEvent);
                    }
                );
                //Save subscription for later
                var subscriptions = component.get("v.cometdSubscriptions");
                subscriptions.push(newSubscription);
                component.set('v.cometdSubscriptions', subscriptions);
            }
            else{
                console.error('Failed to connected to CometD');
            }
        });
    },
    disconnectCometd : function(component){
        var cometd = component.get("v.cometd");
        //Unsuscribe all CometD subscriptions
        cometd.batch(function(){
            var subscriptions = component.get('v.cometdSubscriptions');
            subscriptions.forEach( function(subscription){
               cometd.unsubscribe(subscription); 
            });
        });
        
        component.set("v.cometdSubscriptions", []);
        //Disconnect CometD
        cometd.disconnect();
        console.log('CometD disconnected');
    },
    onReceiveNotification : function(component, platformEvent){
      var helper = this;
      //Extract notification from platform event
        var newNotification = {
            time : $A.localizationService.formatDateTime(
                platformEvent.data.payload.CreateDate, 'HH:mm'
                   ),
            message : platformEvent.data.payload.identityapp__Message__c
        };
        //Save notification in history
        var notifications = component.get('v.notifications');
        notifications.push(newNotification);
        component.set("v.notifications", notifications);
        //Display notification in a toast if not muted
        if(!component.get("v.isMuted")){
            helper.displayToast(component, 'info', newNotification.message);
        }
    }
})