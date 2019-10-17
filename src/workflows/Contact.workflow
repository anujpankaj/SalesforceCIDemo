<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <outboundMessages>
        <fullName>Contact_Name_Start_With_A</fullName>
        <apiVersion>36.0</apiVersion>
        <endpointUrl>http://192.168.2.229:8081/CallBack.aspx</endpointUrl>
        <fields>AssistantName</fields>
        <fields>FirstName</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>anujpankaj2k8@gmail.com</integrationUser>
        <name>Contact Name Start With A</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <rules>
        <fullName>First Name Start With A</fullName>
        <actions>
            <name>Contact_Name_Start_With_A</name>
            <type>OutboundMessage</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.FirstName</field>
            <operation>startsWith</operation>
            <value>A</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
