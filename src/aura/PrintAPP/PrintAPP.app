<aura:application extends="force:slds">

    <aura:attribute name="recordId" type="String" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <div class="divToPrint">
        <div>
            <c:ReferencingIssues />
        </div>
    </div>

</aura:application>