public with sharing class HelpTextFinder
{
  @AuraEnabled
  public static string BindExpenceHelpText()
  {
    String fieldHelpText = LightAnujOrg__Expense__c.LightAnujOrg__Amount__c.getDescribe().getInlineHelpText();
    return fieldHelpText; 
  }
}