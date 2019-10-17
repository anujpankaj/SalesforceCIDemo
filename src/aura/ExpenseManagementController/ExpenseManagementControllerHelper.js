({
  getExpenses: function(component) {
        var action = component.get("c.getExpenses");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
                this.updateTotal(component);
            }
        });
        $A.enqueueAction(action);
  },
  updateTotal : function(component) {  
      var expense = component.get("v.expenses");
      var total = 0;
      for(var i=0; i<expense.length; i++){
          var e = expense[i];

          //If you’re using a namespace, use e.myNamespace__Amount__c instead
          total += e.LightAnujOrg__Amount__c;
      }
      //Update counters
      component.set("v.Total", total);
      component.set("v.Exp", expense.length);
  },//Delimiter for future code
  validateInput : function(component)
    {
        var validationflag=true;
        //Validate expense name
        var expnamefield=component.find('expName');
        var expname=expnamefield.get('v.value');
        if(!isNaN(expname) || expname=='')
        {
            validationflag=false;
            expnamefield.set("v.errors", [{message:"Enter an expense name."}]);
        }
        //Validate expense amount
        var expamountfiled=component.find('expAmount');
        var expamount=expamountfiled.get('v.value');
        if(isNaN(expamount)|| expamount=='')
        {
            validationflag=false;
            expamountfiled.set("v.errors",[{message:"Enter an expense amount."}]);
        	
        }
        if(validationflag==true)
        {
            expnamefield.set("v.errors",null);
            expamountfiled.set("v.errors",null);
        }
        return validationflag;
    },//Function for create new expense
    createExpense : function(component,newExpense)
    {
        this.upsertExpense(component,newExpense,function(t){
            if(!isNaN(parseFloat(newExpense.Id)))
            {
                var expenses=component.get('v.expenses');
                expenses.push(t.getReturnValue());
                component.set("v.expenses",expenses);
                this.updateTotal(component);
            }
            else
            {
                this.getExpenses(component);
            }
           
        });        
    },
    upsertExpense:function(component,newExpense,callback)
    {
        $A.log("This is a log message");
        var action=component.get("c.SaveExpense");
        action.setParams(
            {
                "expense":newExpense
            }
        );
        if(callback)
        {
            action.setCallback(this,callback);
        }
        $A.enqueueAction(action);
    },//Delete expense Item
    DeleteExpense : function(component,expense,callback)
    {
        var expenseId=expense.Id;        
        if(isNaN(parseFloat(expenseId)))
           {
              var action=component.get("c.DeleteExpense");
                action.setParams({
                    "expense":expense
                });
                action.setCallback(this,function(response){
                    var state=response.getState();
                    if (state === "SUCCESS") {
                        component.set("v.expenses", response.getReturnValue());
                        this.getExpenses(component);
                    }
                })
                $A.enqueueAction(action);
           }
           else
           {
        		var expenses=component.get("v.expenses");  
                var index=expenses.indexOf(expense);
                if(index>-1)
                {
                    expenses.splice(index,1);
                }
               component.set("v.expenses",expenses);
           }       
    },//Add expense Item
    AddExpenseItem :function(component)
    {
        var expenses=component.get("v.expenses");
        var len=expenses.length;
        expenses.push({
            'Id':len,
            'Name':'test anuj-'+len,
            'LightAnujOrg__Amount__c':0,
            'LightAnujOrg__Client__c': '',
            'LightAnujOrg__Date__c':'',
            'LightAnujOrg__Reimbursed__c':false
        });
        component.set("v.expenses",expenses);
    },//Edit expense item
    EditExpense : function(component,expense)
    {
        component.set("v.newExpense",expense);        
    },
    ResetControl:function(component)
    {
        component.set("v.newExpense", 
                {'sobjectType': 'LightAnujOrg__Expense__c',
                     'Name': '',
                     'LightAnujOrg__Amount__c' : 0,
                     'LightAnujOrg__Client__c' : '',
                     'LightAnujOrg__Date__c' :'',
                     'LightAnujOrg__Reimbursed__c' : false
                });
    },
    
})