public with sharing class ContactController {
	@AuraEnabled
	public static List<Contact> FindAll()
	{
		return [select id,name,Phone from Contact limit 50];
	}
	
	@AuraEnabled
	public static List<Contact> FindByName(string searchKey)
	{
		string name='%'+searchKey+'%';
		return [select id,name,phone from Contact where name like : name limit 50];
	}
	
	@AuraEnabled
	public static List<Contact> FindById(string contactId)
	{
		return [select id,name,phone from Contact where id=:contactId];
	}

}