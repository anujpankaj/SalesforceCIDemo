({	
    update : function(component,evt,helper)
    {
        var expense=component.get("v.expense");
        // Note that updateExpense matches the name attribute in <aura:registerEvent>
        var updateEvent =component.getEvent("updateExpense"); 
        updateEvent.setParams({"expense":expense}).fire();        
    },
    deleteExpense: function(component,evt,helper)
    {
        var expense=component.get("v.expense");
        var deleteEvent=component.getEvent("DeleteExpense");
        deleteEvent.setParams({"expense":expense}).fire();
    },
    editExpense:function(component,evt,helper)
    {
      console.log('edit function call');
      var expense=component.get("v.expense"); 
      var editEvent=component.getEvent("EditExpenseItem"); 
      editEvent.setParams({"expense":expense}).fire();  
    }
})