({
    doInit : function(component, event, helper) {
		helper.rowsChangeHelper(component);
		helper.rowsToShowHelper(component);
        helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
	rowCountsChange : function(component, event, helper) {
		helper.rowCountsChangeHelper(component);
        helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
    columnHeaderChange : function(component, event, helper) {
		helper.columnHeaderChangeHelper(component);
	},
    
    rowsChange : function(component, event, helper) {
		helper.rowsChangeHelper(component);
        helper.rowsToShowHelper(component);
        helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
    paginationOnFirst : function(component, event, helper) {
		helper.paginationOnFirstHelper(component);
		helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
    paginationOnPre : function(component, event, helper) {
		helper.paginationOnPreHelper(component);
        helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
    paginationOnNext : function(component, event, helper) {
		helper.paginationOnNextHelper(component);
        helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
    paginationOnLast : function(component, event, helper) {
		helper.paginationOnLastHelper(component);
        helper.displayPageCounts(component);
        helper.enableDisablePaginationButtonsHelper(component);
	},
    
    clickToSortByColName : function(component, event, helper) {
        helper.clickToSortByColNameHelper(component,event);
    }
})