public class ServerSideController{
     @AuraEnabled
     public static Integer serverSideAction(Integer value){
      return (-1) * value;

      }
     @AuraEnabled
    public static String append(String s, Decimal successPercentage) {
        if(Math.random() > successPercentage) {
            return '' + 1/0;
        } else {
            return s + 'a';
           //return '' + 1/0;
        }
    }
}