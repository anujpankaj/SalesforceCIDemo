/*
* 
  Purpose :- Class for search input string in define table using SOSL query
  Created By :- Anuj
  Created On :- 01/05/2018  
*/
public with sharing class SearchString{
   /*
   * Function for search phone number in Account,Contact and Lead object
   */
    @AuraEnabled
    public static List<List<SObject>> SearchText(string strText){
        List<List<SObject>> searchList = [FIND :strText IN ALL FIELDS 
                                      RETURNING Account(Name,Site,Phone), Contact(Name,Account.Name,Phone,Email),
                                      Lead(Name,Title,Company,Phone,MobilePhone,Email,Status)
                                 ];
         return searchList; 
    }
}