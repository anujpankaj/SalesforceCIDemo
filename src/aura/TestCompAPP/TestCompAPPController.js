({
	AddMinutes : function(component, event, helper) {
		var selectedDateTime=component.find("expdate").get("v.value");
        var globalId=component.find("expdate").getGlobalId();
        component.set("v.HtmlTect","<b> Anun <br/> Pankaj </b>");
        //selectedDateTime=$A.localizationService.formatDate(selectedDateTime, "MMMM DD YYYY, hh:mm:ss a")
        var units=30;
        var ret = new Date(selectedDateTime);
        ret.setTime(ret.getTime() + units * 60000);
        //ret=$A.localizationService.formatDate(ret, "MMMM DD YYYY, hh:mm:ss a");
        //ret = new Date(ret);
        component.set("v.ChangeDate",ret.toISOString()); 
       
	}
})