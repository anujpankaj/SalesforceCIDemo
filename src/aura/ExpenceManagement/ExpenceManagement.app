<aura:application >
	<link href='/resource/bootstrap/' rel="stylesheet"/>
    <!-- Define the Design System static resource (version 0.9.0) -->
    <ltng:require styles="/resource/slds090/assets/styles/salesforce-lightning-design-system.min.css"/>    
    <div class="slds">       	
    </div>
    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a href="#" class="navbar-brand">Add expense using lighting experience</a>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <c:ExpenseManagementController />
            </div>
        </div>
    </div>
</aura:application>