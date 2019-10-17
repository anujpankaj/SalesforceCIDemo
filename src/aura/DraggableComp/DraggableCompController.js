({
    /*
     * Function for load component data
     * and hanlde mouse data
     */ 
    onInit : function(component,event,helper)
    {
        //function call for add handler
         helper.loadContentData(component,event);
        //function call for add mouse handler
        helper.addEventOnMouse(component,event);
    },
    /*
     * Function for fetch draggable div id
     */ 
    drag : function(component,event,helper)
    {      
        component.set("v.startId",event.target.id);
    },
    /*
     * Function for change mouse pointer to movable 
     * mouse pointer
     */ 
    moveCursor : function(component,event,helper)
    {
        var divid=event.target.id;
        var div=component.find("divid");
        $A.util.addClass(div,"DraggableCursor");
        $A.util.removeClass(div,"DivMargin");
    },
   /*
    * Function for hide populated div
    */
    hideDialog : function(component,event,helper)
    {
        var div=component.find("divDraggable");
        $A.util.addClass(div,"hideDiv");
    },
    /*
     *  Function for display hidden div
     */ 
    showDialog : function(component,event,helper)
    {
    	var div=component.find("divDraggable");
        $A.util.removeClass(div,"hideDiv");
    }
})