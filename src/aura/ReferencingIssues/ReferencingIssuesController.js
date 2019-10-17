({
	doInit : function(component, event, helper) {
        var empdata=[
                     {'sobjectType': 'employee','name': 'anuj','age' : '20','phone':'12344'},
                     {'sobjectType':'employee','name': 'pankaj','age' : '20','phone':'2344'}
                    ];
        component.set("v.EmpData",empdata);
	},
    handleClick : function(component,event,helper){
        component.set("v.EmpData",null);
    },
    setDefualt : function(component,event,helper){
        component.set("v.EmpData",component.get("v.DefaultValue"))
    },
    print :function(component,event,helper){
        window.open("https://lightningappbuilder121-dev-ed.lightning.force.com/LightAnujOrg/PrintAPP.app", "printPreview")
        
    }
})