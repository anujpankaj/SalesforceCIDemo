public class ContactControllterClass {
	@AuraEnabled
    public static list<contact> getContacts()
    {
    	return [select id,Name,Email,Title,Phone from Contact
                where Name!=null];
    }
}