public with sharing class ExpencesMintance {
    @AuraEnabled
    public static LightAnujOrg__Expense__c SaveExpense(LightAnujOrg__Expense__c expense)
    {
        //Database.upsert(expense);
        upsert expense;
        return expense;        
    }

    @AuraEnabled
    public static List<LightAnujOrg__Expense__c> getExpenses()
    {
        List<LightAnujOrg__Expense__c> expenses=
            [select Id,Name,LightAnujOrg__Amount__c,LightAnujOrg__Client__c,LightAnujOrg__Date__c,
                LightAnujOrg__Reimbursed__c,CreatedDate  from LightAnujOrg__Expense__c];
        return  expenses;
    }
    @AuraEnabled
    public static void DeleteExpense(LightAnujOrg__Expense__c expense)
    {
        //Delete expense
        delete expense;
    }

}