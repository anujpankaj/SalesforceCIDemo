({
	doInit : function(component, event, helper) {
		//update helper count
		helper.getExpenses(component);
	},//Create new expense item
    createExpense: function(component,event,helper)
    {   
        if(helper.validateInput(component)==true)
        {
        	var newexpense=component.get('v.newExpense');
            helper.createExpense(component,newexpense);
        }
        
    },//Update expense    
    updateEvent : function(component,event,helper)
    {
        helper.upsertExpense(component,event.getParam("expense"));
    },//Add function for wait
    waiting : function(component,event,helper)
    {
      component.set("v.wait", "updating...");  
    },
    doneWaiting : function(component,event,helper)
    {
        component.set("v.wait","");
        helper.ResetControl(component);       
    },    
    //Delete record
    DeleteEvent :function(component,event,helper)
    {   
     helper.DeleteExpense(component,event.getParam("expense"));   
    },
    AddExpense:function(component,event,helper)
    {
        helper.AddExpenseItem(component);
    },//Edit expense
    EditExpense :function(component,event,helper)
    {
        helper.EditExpense(component,event.getParam("expense"));
    }
})