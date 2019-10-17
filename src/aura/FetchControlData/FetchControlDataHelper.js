({
    ControlInfo :[],
	setControlValue : function(controlValue) {
		//Add control value in ControlInfo data
		if(controlValue!==undefined){
            this.ControlInfo.push({
                "Value" : controlValue
            });
        }
	}
})