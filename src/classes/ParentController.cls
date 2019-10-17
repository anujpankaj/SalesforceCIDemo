public with sharing class ParentController
{
    
   @AuraEnabled
   public static WrapperParent LoadParent()
   {
      WrapperParent objParent=new WrapperParent();
      WrapperChild ObjChild1=new WrapperChild();
      ObjChild1.CheckFlage=false;
      objParent.ObjChild=ObjChild1;
      return objParent;
   }
   
    @AuraEnabled
   public static numberclass LoadNumber()
   {
      numberclass obj=new numberclass ();
     
      obj.num1 =12;
      obj.num2 =7;
      return obj;
   }
   
   @AuraEnabled
   public static integer CalculateMode(string strnumber)
   {
       integer modresult=0;
       system.debug('strnumber'+ strnumber);
       numberclass objnumber=new numberclass();
       objnumber= (numberclass)JSON.deserialize(strnumber,numberclass.class);
       system.debug('objnumber'+ objnumber);        
       try
       {
           modresult=math.mod(objnumber.num1,objnumber.num2);
       }
       catch(exception ex)
       {
            throw new AuraHandledException(ex.getMessage());
       }
       
       return  modresult;
   }
}