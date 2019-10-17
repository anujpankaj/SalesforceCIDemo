global class getLeadInfo 
{
    WebService static Lead getLeadAddressByEmailId(string leadEmailId)
    {
         Lead c = [SELECT Street, City, State, PostalCode from Lead WHERE Email = :leadEmailId];
         Lead l = new Lead(Street = c.Street, City = c.City, State = c.State, PostalCode = c.PostalCode);
        return l;
    }
}