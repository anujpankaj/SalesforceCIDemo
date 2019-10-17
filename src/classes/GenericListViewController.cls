Global class GenericListViewController extends VisualEditor.DynamicPickList{

    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Contact', 'Contact');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        VisualEditor.DataRow value1 = new VisualEditor.DataRow('Contact', 'Contact');
        myValues.addRow(value1);
        VisualEditor.DataRow value2 = new VisualEditor.DataRow('Account', 'Account');
        myValues.addRow(value2);
        VisualEditor.DataRow value3 = new VisualEditor.DataRow('Lead', 'Lead');
        myValues.addRow(value3);
        //Or you use object describe ti find all object details
        /*for(String ss1: schemaMap.keyset()){
            Schema.SObjectType objToken=schemaMap.get(ss1);
            Schema.DescribeSObjectResult objDescribe=objToken.getdescribe();
            VisualEditor.DataRow value11 = new VisualEditor.DataRow(objDescribe.getLabel(), objDescribe.getName());
            myValues.addRow(value11);
        }
 */
 
       /* VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        Schema.DescribeFieldResult fieldResult = obj__c.fld__c.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry f : ple){
           VisualEditor.DataRow value = new VisualEditor.DataRow(f.getLabel(),f.getValue());
           myValues.addRow(value);
        }*/      
       
        return myValues;
    }
}