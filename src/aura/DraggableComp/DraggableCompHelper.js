({
    /*
     * Function for add mouse event handler
     */
	addEventOnMouse : function(component,event) {
		var mouseMoveHandler = function(event) {            
            var divid=component.get("v.startId");
            var div=document.getElementById(divid);
            $A.util.removeClass(div,"DivMargin");
            if(div === null )
                return;
            var leftpx = event.pageX;
            var toppx = event.pageY;
            div.style.left = leftpx + "px";
            div.style.top = toppx + "px";
        };
        var mouseUpHandler = function(event) {            
            component.set("v.startId",null);
        }; 
        var mouseOverHandler=function(event)
        {
            var draggablediv=component.get("v.draggableDivId");
            var currentsectionid=event.target.id;
            if(currentsectionid===draggablediv)
            {
                var div=document.getElementById(currentsectionid);               
                $A.util.addClass(div,"DraggableCursor");
            }
            
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
        document.addEventListener("mouseover", mouseOverHandler);
	},
    /*
     * Function for Load component data
     */ 
    loadContentData : function(component,event)
    {
        var compname=component.get("v.contentCompName"); 
        var comattr=component.get("v.contentCompAttrs");
        $A.createComponent(
            compname,
            comattr,
            function(newcomp, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var contentcomp = component.get("v.divContainer");
                    contentcomp.push(newcomp);
                    component.set("v.divContainer", contentcomp);
                }
                else if (status === "INCOMPLETE") {
                    var incompletemsg="No response from server or client is offline."
                   // this.showMessage(component,event,incompletemsg);
                    // Show offline error
                }
                else if (status === "ERROR") {
                    // Show error message
                    //this.showMessage(component,event,errorMessage);
                    
                }
            }
        );
    },
    /*
     * Function for show error message
     */ 
    showMessage : function(component,event,message)
    {
            if((typeof sforce !='undefined') && 
               sforce &&
               (!!sforce.one)
              )
            {
                alert(message);
            }
            else
            {
               	    var actiontost=$A.get("e.force:showToster");
                    actiontost.setParams({
                        "title" : "Draggable",
                        "message" : message,
                        "type" :"error"
                    });
                actiontost.fire();
            }
       
        
    }
})