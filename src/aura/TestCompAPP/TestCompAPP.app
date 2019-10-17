<aura:application >
   <aura:attribute name="today" type="DateTime" />
   <aura:attribute name="ChangeDate" type="DateTime" /> 
    <aura:attribute name="HtmlTect" type="String" default=""/>
   <aura:handler name="change" value="{!v.today}" action="{!c.AddMinutes}"/>
	<!--<c:DraggableComp ></c:DraggableComp>-->
   <!-- <c:ExpenseManagementController ></c:ExpenseManagementController>-->
   <!-- <c:CompBeforeUnload ></c:CompBeforeUnload>-->
   <!-- <c:pdfFiles ></c:pdfFiles>-->
   <!-- <c:CompDivContent ></c:CompDivContent>-->
    <ui:inputDateTime aura:id="expdate" label="Expense Date" class="form-control"
     value="{!v.today}" displayDatePicker="true" change="{!c.AddMinutes}"/>
    
    
    <ui:inputDateTime aura:id="updateDate" label="Time" class="field" value="{!v.ChangeDate}" displayDatePicker="true" />
    <aura:unescapedHtml value="{!v.HtmlTect}"/>
    <ui:outputRichText value="{!v.HtmlTect}"/>
    <c:NegativeValueValidate />

</aura:application>