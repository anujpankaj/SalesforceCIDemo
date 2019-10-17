({
	handleUploadFinished : function(component, event, helper) {
		var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
	},
    readCsvFile : function(component, event, helper){
            var files = event.target.files;
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function(evt) {
               var row=evt.target.result.split(/\r\n|\n/);
               var entries = row[0].split(',');
               var lines = [];
               for (var i=0; i<row.length; i++) {
                        var data = row[i].split(',');
                        var tarr = [];
                         for (var j=0; j<data.length; j++) {
                                tarr.push(data[j]);
                         }
                         lines.push(tarr);
                        while (row.length) {
                          lines.push(row.shift().split(','));
                        }
                  }
           }
           reader.readAsText(file)
    }
})