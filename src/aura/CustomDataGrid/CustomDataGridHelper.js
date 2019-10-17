({
	rowCountsChangeHelper : function(component) {
		this.rowsToShowHelper(component);
	},
    
    columnHeaderChangeHelper : function(component) {
		this.rowsToShowHelper(component);
	},
    
    rowsChangeHelper : function(component) {
		var rowsData = component.get("v.rows");
        var storeData = [];
        
        for(var k in rowsData) {
            //console.log("****All rows data****" + rowsData[k].trim());
            var data = rowsData[k].trim().split("|");
            var tempData = [];
            
            for(var i in data) {
                tempData.push(this.formatData(data[i]));
            }
            
            storeData.push(tempData);
        }
        
        console.log("****store data****" + storeData);
        component.set("v.rowsToStore", storeData);
	},
    
    rowsToShowHelper : function(component) {
        var columnList = component.get("v.columnHeader");
        var rowsData = component.get("v.rowsToStore");
        var columnCount = columnList.length;
        var showData = [];
        
        if(component.get("v.isLoad")) {
            var rowCountList = component.get("v.rowCounts");
            if(rowCountList.length > 0 && rowCountList[0] != 0) {
                component.set("v.currentRowCount", rowCountList[0]);
            }
            component.set("v.isLoad", false);
        }
        
        var count = component.get("v.currentRowCount");
        console.log("****count****" + count);
        if(component.get("v.currentRowCount") > rowsData.length) {
            count = rowsData.length;
        }
        
        for(var k = 0; k < count; k++) {
            var data = rowsData[k];
            var tempData = [];
            for(var i = 0; i < columnCount; i++) {
            	tempData.push(this.formatData(data[i]));
            }
            showData.push(tempData);
        }
        
        console.log("****show data****" + showData);
        component.set("v.rowsToShow", showData);
        component.set("v.colCount", columnCount);
        component.set("v.paginationCount", 0);
    },
    
    paginationOnFirstHelper : function(component) {
        var rowsData = component.get("v.rowsToStore");
        component.set("v.paginationCount", 0);
        var count = component.get("v.currentRowCount");
        
        if(component.get("v.currentRowCount") > rowsData.length) {
            count = rowsData.length;
        }
        this.rowListAfterPaginationHelper(component, 0, count, rowsData);
    },
    
    paginationOnPreHelper : function(component) {
        var rowsData = component.get("v.rowsToStore");
        var count = component.get("v.currentRowCount");
        var paginationCount = component.get("v.paginationCount");        
        
        paginationCount--;
        if(paginationCount >= 0) {
            component.set("v.paginationCount", paginationCount);
        }else{
            paginationCount = 0;
        }
        
        var start = paginationCount*count;
        var end = parseInt(start) + parseInt(count);
        
        if(end > rowsData.length) {
            end = rowsData.length;
        }
        console.log("****start in pre1****" + start);
        console.log("****end in pre1****" + end);
        
        this.rowListAfterPaginationHelper(component, start, end, rowsData);
    },
    
    paginationOnNextHelper : function(component) {
        var rowsData = component.get("v.rowsToStore");
        var count = component.get("v.currentRowCount");
        var paginationCount = component.get("v.paginationCount");
        
        paginationCount++;        
        
        var start = paginationCount*count;
        var end = parseInt(start) + parseInt(count);
        
        if(end > rowsData.length) {
            end = rowsData.length;            
        }else{
            
        }
        component.set("v.paginationCount", paginationCount);
        console.log("****pagination Count****" + paginationCount);
        console.log("****start in next2****" + start);
        console.log("****end in next2****" + end);
        if(start < end) {
            this.rowListAfterPaginationHelper(component, start, end, rowsData);
        }        
    },
    
    paginationOnLastHelper : function(component) {
        var rowsData = component.get("v.rowsToStore");
        var count = component.get("v.currentRowCount");
        //var paginationCount = component.get("v.paginationCount");
        
        var pages = parseInt(rowsData.length/count);
        console.log("****pages****" + pages);        
        
        var start = pages*parseInt(count);
        console.log("****start****" + parseInt(start));
        console.log("****parseInt(rowsData.length)****" + parseInt(rowsData.length));
        if((parseInt(start) == parseInt(rowsData.length))) {            
            start = parseInt(start) - parseInt(count);
            pages--;
        }
        component.set("v.paginationCount", pages);
        var end = parseInt(start) + parseInt(count);
        
        if(end > rowsData.length) {
            end = rowsData.length;
        }
        
        this.rowListAfterPaginationHelper(component, start, end, rowsData);
    },
    
    rowListAfterPaginationHelper : function(component, start, end, rowsData) {
        console.log("****row List After Pagination Helper****");
        console.log("****start****" + start);
        console.log("****end****" + end);
        var columnCount = component.get("v.columnHeader").length;        
        var showData = [];
        
        component.set("v.rowsToShow", []);
        
        for(var k = start; k < end; k++) {
            var data = rowsData[k];
            var tempData = [];
            for(var i = 0; i < columnCount; i++) {
            	tempData.push(this.formatData(data[i]));
            }
            showData.push(tempData);
        }
        console.log("****after pagination show data****" + showData);
        component.set("v.rowsToShow", showData);
    },
    
    displayPageCounts : function(component) {
        var paginationCount = component.get("v.paginationCount");
        var rowsData = component.get("v.rowsToStore");
        var count = component.get("v.currentRowCount");
        
        var total = parseInt(rowsData.length/count);
        var totalRecords = total*count;
        paginationCount++;
        
        if(rowsData.length > totalRecords) {
            total++;
        }
        
        if(paginationCount > total) {
            paginationCount = total;
        }
        
        component.set("v.pageNo", paginationCount);
        component.set("v.totalPages", total);
    },
    
    formatData : function(data) {
        data = data.replace("[", "");
        data = data.replace("]", "");
        data = data.replace("'", "");
        
        return data;
    },
    
    
    
    enableDisablePaginationButtonsHelper : function(component) {
        var pageNo = component.get("v.pageNo");
        var totalPages = component.get("v.totalPages");
        
        if(pageNo == totalPages && totalPages == 1) {
            this.enableDisableButtonsHelper(component,true,true,true,true);
        } else if(pageNo == 1) {
            this.enableDisableButtonsHelper(component,true,true,false,false);
        }else if(pageNo == totalPages) {
            this.enableDisableButtonsHelper(component,false,false,true,true);
        }else{
            this.enableDisableButtonsHelper(component,false,false,false,false);
        }
    },
    
    enableDisableButtonsHelper : function(component,isFirst,isPre,isNext,isLast) {
        component.set("v.disableFirst", isFirst);
        component.set("v.disablePre", isPre);
        component.set("v.disableNext", isNext);
        component.set("v.disableLast", isLast);
    },
    
    clickToSortByColNameHelper : function(component,event) {
        component.set("v.sortByColumnName", event.target.value);
    }
})