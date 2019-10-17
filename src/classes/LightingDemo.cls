public with sharing class LightingDemo
{
    
     @AuraEnabled
     public static string TestgetExpenses(string inputStr) {
        return inputStr+'hello';
     }

     

}