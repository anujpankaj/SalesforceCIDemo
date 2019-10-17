<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>High_Value_Opportunity_Lost</fullName>
        <description>High Value Opportunity Lost</description>
        <protected>false</protected>
        <recipients>
            <recipient>anujpankaj2k8@gmail.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/CommunityChangePasswordEmailTemplate</template>
    </alerts>
    <outboundMessages>
        <fullName>PublishedOpportunity</fullName>
        <apiVersion>37.0</apiVersion>
        <endpointUrl>http://intg-playground.herokuapp.com/sfdc/omlistener/endpoint/d6c25c7c-6aa8-4f58-99ed-92c0ccabd551</endpointUrl>
        <fields>Id</fields>
        <fields>IsWon</fields>
        <fields>Name</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>anujpankaj2k8@gmail.com</integrationUser>
        <name>PublishedOpportunity</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <rules>
        <fullName>PublishedOpportunityOn</fullName>
        <actions>
            <name>PublishedOpportunity</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.StageName</field>
            <operation>equals</operation>
            <value>Closed Won</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
