<aura:application >
    <aura:attribute name="test" type="Boolean" default="true"/>
    <aura:attribute name="localVariable" type="String"/>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
	<c:ComponentMainFacts ></c:ComponentMainFacts>
    {!'anuj pankaj'}
    {!123}
    {!true}
    {!false}
    {! v.test ? 'anuj' : 'pankaj'}<br/>
    {!$Locale.timezone}<br/>
    {!v.localVariable}<br/>
    <ui:outputCurrency value="100000" />
</aura:application>