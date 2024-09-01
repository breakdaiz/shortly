<?xml version="1.0" encoding="utf-8" ?>
<form collapse="none" panelSortOrder="
  SchedulesPanel-Custom.LocationSchedule[Hide=True],
  SchedulesPanel-Custom.BlankEndorsementSchedule[Hide=True],SchedulesPanel-Custom.VehicleSchedule[Hide=True],SchedulesPanel-Custom.TimbyYardLocationSchedule[Hide=True],SchedulesPanel-Custom.TimbyEquipment[Hide=True],SchedulesPanel-Custom.LossHistorySchedule[Hide=True],SchedulesPanel-Custom.LossPayableSchedule[Hide=True]"> <!--PolicyChangesPanel[Hide=True] -->
<!--<form collapse="none" panelSortOrder="SchedulesPanel-Custom.BlankEndorsementSchedule[Hide=True],SchedulesPanel-Custom.VehicleSchedule[Hide=True]" >--> <!-- test --> 
  
 
    <panel if="State:eq:29&amp;&amp;CustomMoney79:gt:150.00">
    <column> <section> <html> <div class="message instruction"> <ul>
				<li>Save Successful. However, the following validation warnings were raised: Michigan policy fee is out of bounds</li>
			</ul> </div> </html> </section> </column>
  </panel>
      <panel if="State:eq:26&amp;&amp;CustomMoney79:gt:250.00">
    <column> <section> <html> <div class="message instruction"> <ul>
				<li>Save Successful. However, the following validation warnings were raised: Maryland policy fee is out of bounds</li>
			</ul> </div> </html> </section> </column>
  </panel>
   <panel if="CustomBool59:eq:True">
    <column> <section> <html> <div class="message instruction"> <ul>
				<li>Save Successful. However, the following validation warnings were raised: Duplicate VIN entries found. Please review.</li>
			</ul> </div> </html> </section> </column>
  </panel>

  <!--<panel ifInRole="10063">-->
  <panel if="_CurrentSystemUser:hasrole:10063&amp;&amp;Status:eq:U">
      <column>
          <section>
              <html>
                  <div class= "message success">Thank you! your quote has been submitted and will begin processing soon. </div>
              </html>
          </section>
      </column>    
  </panel>

  <panel>    
  <column>
    <section title="Proposal Detail" wideLabels="true"> 
      <field name="ProposalID" hidden="true"/>
      <field name="CustomBool34" hidden="true"/> <!--BothEligibleIneligible--> 
        
      <field name="CustomBool56" hidden="true"/> <!--LocSch Ineligible--> 
      <field name="CustomBool57" hidden="true"/> <!--LocSch Flood--> 
      <field name="CustomBool58" hidden="true"/> <!--LocSch Earthquake--> 
      <field name="CustomBool59" hidden="true"/> <!--Duplicate VIN Numbers--> 
        
      <!--Start Added new insured name with DBA when Exist (4579)--> 
      
      <field name="Member" hidden="true" /> <!--Need this for MemberNumber--> 
      <custom label="Named Insured" htmlContent="&lt;a href='dba_update_url' &gt;{Member.Name} DBA {Member.CustomText22}&lt;/a&gt;" /><!-- Renamed to Named Insured | CE changes | Prakhar-->
        
      <!--End Added new insured name with DBA when Exist (4579) --> 

      <custom content="{Member.Street1}" label="Street 1"/>
      <custom content="{Member.Street2}" label="Street 2"/>
      <custom content="{Member.City}" label="City"/>
      <custom content="{Member.State}" label="Insured State"/> <!--Renamed Risk Sate | CE changes | Prakhar--> 
      <field name="State" label="Risk State" toolTip="This field is utilized for reporting purposes and for surplus lines reporting (if applicable). Field defaults to Insured's Business Address State unless otherwise selected."/>  <!--45238 - Kestrel - added Risk State-->
      <custom content="{Member.PostalCode}" label="Postal Code"/>
        
      <field name="ProposalNumber"/>
      <field name="Broker"/> <!--Agency--> 
      <field name="Agent"/>  
      <field name="UnderwriterUser"/>
      <field name="EntryUser" label="Entry User"/> <!-- Added as part of CE changes | Prakhar-->
      <field name="EntryDate" label="Entry Date"/>   <!-- Added as part of CE changes | Prakhar-->
      <field name="ModifiedUser" label="Modified User"/> 
      <field name="ModifiedDate" label="Modified Date"/> 
      <field name="Carrier" label="Carrier"/>  <!--47328 - Kestrel - added Carrier field-->
      <field name="State" required="true" hidden="true"/>      <!-- hided as part of CE changes | Prakhar-->
      <field name="Coverage_CMHCNTEQ.Custom14Code" hidden="true"/>  <!-- added for 37140 | CE changes | Prakhar-->
       <custom content="{Coverage_CMHCNTEQ.Custom14Code}" label="Coverage Form"/> <!-- added for 37140 | CE changes | Prakhar-->
        <custom content="{Coverage_CMHCNTEQ.Custom15Code}" label="Property Covered Coverage Form"/> <!-- added for 55913 | CE changes | Aisiri-->
       <field name="Custom30Code" hidden="true"/> 
     
        
      <custom content="{This.#RejectionReason.Rejection}" label="Rejection Reason"/>
      <field name="CustomBool30"/> <!--Has US DOT--> 
      <field name="CustomText28"/> <!--US DOT--> 
      <field name="Custom21Code"/> <!--Program-->
      <field name="CustomNumber12" label="Est. Number of Power Units" toolTip="&quot;Estimated&quot; (Est.) values are used until Vehicles are added to the schedule, then the &quot;Calculated&quot; (Calc.) values (calculated using the data on the VehicleSchedule) are used." if="Type:eq:A,N,R&amp;&amp;Custom15Code:!eq:dispcd[CE]"/> <!--Number of Power Units--> 
      <custom htmlContent="&lt;b&gt;{Coverage_MTC.CustomNumber64-0}&lt;/b&gt; &amp;nbsp;" label="Calc. Number of Power Units" if="Type:!eq:E"/>
      <custom htmlContent="&lt;b&gt;{Coverage_MTC.CustomNumber64-0}&lt;/b&gt; &amp;nbsp; Prorated: &lt;b&gt;{Coverage_MTC.CustomNumber67-0.000}&lt;/b&gt;" label="Calc. Number of Power Units"  if="Type:eq:E"/>
      <custom htmlContent="{Coverage_APD.CustomNumber27-0} &amp;nbsp; | &amp;nbsp; {Coverage_APD.CustomNumber28-0}" label="Est. Tractors | Trailers" if="CoveragesList:all:20&amp;&amp;Type:eq:A,N"/>
      <custom htmlContent="&lt;b&gt;{Coverage_APD.CustomNumber64-0} &amp;nbsp; | &amp;nbsp; {Coverage_APD.CustomNumber65-0}&lt;/b&gt;" label="Calc. Tractors | Trailers" if="CoveragesList:all:20&amp;&amp;Type:!eq:E"/>       
      <custom htmlContent="&lt;b&gt;{Coverage_APD.CustomNumber64-0} &amp;nbsp; | &amp;nbsp; {Coverage_APD.CustomNumber65-0}&lt;/b&gt; &amp;nbsp;  Prorated: &lt;b&gt;{Coverage_APD.CustomNumber67-0.000} &amp;nbsp; | &amp;nbsp; {Coverage_APD.CustomNumber68-0.000}&lt;/b&gt;" label="Calc. Tractors | Trailers" if="CoveragesList:all:20&amp;&amp;Type:eq:E"/>       
      <custom content="{Coverage_APD.CustomMoney78-C0} + {Coverage_APD.CustomMoney79-C0}" label="Est. TIV: Tractor + Trailer" if="CoveragesList:all:20&amp;&amp;Type:eq:A,N,R" />
      <custom htmlContent="&lt;b&gt;{Coverage_APD.CustomMoney97-C0}&lt;/b&gt; = {Coverage_APD.CustomMoney90-C0} + {Coverage_APD.CustomMoney91-C0} (Annual)" label="Calc. TIV: Tractor + Trailer" if="CoveragesList:all:20&amp;&amp;Type:eq:E" />
      <custom htmlContent="&lt;b&gt;{Coverage_APD.CustomMoney82-C0}&lt;/b&gt; = {Coverage_APD.CustomNumber69-C0} + {Coverage_APD.CustomNumber70-C0} (Prorated)" label="Calc. TIV: Tractor + Trailer" if="CoveragesList:all:20" />

      <field name="CustomText45" label="Primary Commodity" /> <!--Primary Commodity Name--> 
        <!-- CE changes| added if condition start| Prakhar-->
      <field name="CustomNumber13"  if="Custom15Code:!eq:dispcd[CE]"/> <!--Commodity Class--> 
      <field name="CustomBool55" if="Custom15Code:!eq:dispcd[CE]" /> <!--Is Intrastate risk?--> 
      <field name="Custom17Code" label="Intrastate State"  if="Custom15Code:!eq:dispcd[CE]" /> <!--Intrastate State-->   
      <field name="CustomText32" if="CustomBool55:eq:true&amp;&amp;Custom15Code:!eq:dispcd[CE]"/> <!--State MC Number--> 
      <field name="CustomNumber24" if="CustomBool55:eq:true&amp;&amp;Custom15Code:!eq:dispcd[CE]"/> <!--Years Under MC authority--> 
      <field name="CustomBool33" label="Is a state cargo form-H filing needed?" if="CustomBool55:eq:true&amp;&amp;Custom15Code:!eq:dispcd[CE]"/> <!--Form-H-->   
        <!-- CE changes| added if condition end| Prakhar-->
        
      <custom content="{CommissionPercentage}%" label="Commission Percentage" if="CommissionPercentage:!eq:0"/>
      <custom content="{Commission-C}" label="Commission" if="Commission:!eq:0"/>
      <custom content="{CustomNumber47-C}" label="Commission Diff"/>        
      <space/>
      <field name="IsCancellation" hidden="true"/> 
      <field name="CancellationStatus"/> 
      <field name="LastCancellationDate"/> 
      <field name="CancellationReason"/> 
      <field name="CancelledBy"/>  
 
    </section>
  </column>
  <column>
    <section if="CustomBool34:eq:true">
        <html>
          <div class="message notification">
            NOTE: Data suggests this insured may carry commodities excluded by the coverage being offered. Please review the excluded commodities and confirm coverage will meet the needs of your client.
          </div>
        </html>
      </section>
      <section if="CustomBool56:eq:true">
        <html>
          <div class="message notification">
            NOTE: A location is inelgible. please review
          </div>
        </html>
      </section>
      <section if="CustomBool57:eq:true">
        <html>
          <div class="message notification">
            NOTE: Flood is excluded on a location. Please review
          </div>
        </html>
      </section>
      <section if="CustomBool58:eq:true">
        <html>
          <div class="message notification">
            NOTE: Earthquake is excluded on a location. Please review
          </div>
        </html>
      </section>
      <section title="Terms" wideLabels="true">
        <field name="PolicyType"/>
        <field name="EffectiveDate"/>
        <field name="ExpiryDate"/>
        <field name="RetroDate"/>
        <field name="TailDate"/>
        <field name="Status"/> 
         <field name="Custom24Code"/> <!--Sub Status--> 
        <field name="CustomDate5"/> <!--Date Quote Sent to Broker--> 
        <field name="Type" label="Type"/> <!--08/12/2022 - Added for 12367 -->
        
      </section>
    <section title="Premium" wideLabels="true">        
      <!--<custom htmlContent="{Premium-C} &lt;span id=&apos;cancelnote&apos; style=&apos;display: none;&apos;&gt;(Min Premium on Cancel is 25%)&lt;/span&gt;" label="Premium (Prorated)" />-->
      <custom htmlContent="{Premium-C0}" label="Premium (Prorated)" />
      <custom content="{CustomMoney23-C0}" label="Premium (Annualized)"/>
      <custom content="{OriginalPremium-C0}" label="Premium (Original)"/>
      <custom content="{OriginalPremiumDifference-C0}" label="Premium (Diff)"/>
      <custom content="{CustomMoney17-C0}" label="Terror Premium (Annual)" if="CoveragesList:all:53"/>
      <custom content="{CustomMoney17-C0} (if Terrorism is added)" label="Terror Premium (Annual)" if="CoveragesList:!any:53" />
        
      <!--<custom content="{CustomNumber86-C}" label="Fire Marshall Fee"/>-->
      
      <!--<custom content="{CustomMoney91-C}" label="EMPA Fee"/>-->
       <!--<field name="CustomBool76" hidden="true"/> -->
       
    </section>
      
     <section title="Tax Information" wideLabels="true">
        <custom content="{CustomMoney79-C0}" label="Program Fee"/> 
        <custom content="{CustomMoney80-C0}" label="Inspection Fee" if="CustomMoney80:!eq:0"/>
        <custom content="{CustomMoney82-C0}" label="Surplus Lines Tax"/>
        <custom content="{CustomMoney88-C0}" label="Surplus Lines Tax Endt"  if="CustomMoney88:!eq:0&amp;&amp;Type:eq:E"/>
        <custom content="{CustomMoney85-C0}" label="Stamping Fee"/>
        <custom content="{CustomMoney89-C0}" label="Stamping Fee Endt" if="CustomMoney89:!eq:0&amp;&amp;Type:eq:E"/>
        <custom content="{CustomNumber17-C0}" label="Fire Marshal Tax"/>
        <custom content="{CustomNumber19-C0}" label="Fire Marshal Tax Endt" if="CustomNumber19:!eq:0&amp;&amp;Type:eq:E" />
        <custom content="{CustomNumber18-C0}" label="SL Service Charge"/>
        <custom content="{CustomNumber20-C0}" label="SL Service Charge Endt" if="CustomNumber20:!eq:0&amp;&amp;Type:eq:E" />
        <custom content="{CustomMoney90-C0}" label="Municipal Fee"/>
        <custom content="{CustomMoney92-C0}" label="Municipal Fee Endt" if="CustomMoney90:!eq:0&amp;&amp;Type:eq:E"/>
        <field name="Type" hidden="true"/>
      </section>
        
    <section title="Policy" wideLabels="true">
      <field name="PolicySet"/>
      <field name="Custom15Code"/> <!--Policy Type--> 
      <!--<field name="CustomNumber48" label="Minimum Earned Premium"/> inimum Earned Premium -->
      <field name="CustomNumber48" label="Minimum Earned Premium" if="CustomNumber48:!eq:0" /> 
    <field name="SourcePolicy" /> 
     <field name="BindPolicy" /> 
    </section>
      
      <section title="Duplicate VIN's" if="CustomBool59:eq:True"> <!-- if="CustomNarrative9:!eq:''"-->
      <field name="CustomNarrative9" label="VIN Numbers"/> <!--DuplicateVIN--> 
    </section>
    
  </column>
  </panel>
 
  <panel title="Carrier Data" expandedByDefault="true" enableExpandCollapse="true" wideLabels="true" if="Custom15Code:!eq:dispcd[CE]">   
  <column> 
    <section wideLabels="true" if="CustomBool30:eq:true">
        
      <field name="CustomBool53" hidden="true"/> <!--CAB API Done--> 
      <field name="CustomNumber12" /> <!--Number of Power Units--> 
      <field name="CustomNumber34" label="Trailers (Owned+Leased)"/> <!--CAB Trailers--> 
      <field name="CustomText38"/> <!--Carrier Operation--> 
        
      <field name="CustomText40"/> <!--Common Authority Status--> 
      <field name="CustomDate3" label="Common Authority Granted"/> <!--Common Authority Date Granted--> 
      <field name="CustomNumber35" label="Common Authority Years" toolTip="Difference between 'Effective Date' and 'Common Authority Granted Date' (using months)"/> <!--Years Under Common Authority--> 
        
      <field name="CustomText42"/> <!--Contract Authority Status--> 
      <field name="CustomDate2" label="Contract Authority Granted"/> <!--Contract Authority Date Granted--> 
      <field name="CustomNumber16" label="Contract Authority Years" toolTip="Difference between 'Effective Date' and 'Contract Authority Granted Date' (using months)"/> <!--Years Under Authority--> 
        
      <field name="CustomText43"/> <!--Broker Authority Status--> 
      <field name="CustomDate4" label="Broker Authority Granted"/> <!--Broker Authority Date Granted--> 
      <field name="CustomNumber36" label="Broker Authority Years" toolTip="Difference between 'Effective Date' and 'Broker Authority Granted Date' (using months)"/> <!--Years Under Broker Authority--> 
        
      <field name="CustomText45" label="Primary Commodity"/> <!--Primary Commodity Name--> 
      <field name="CustomNumber13" /> <!--Commodity Class--> 
      <field name="CustomText44"/> <!--Carrier Operating Status--> 
      <field name="CustomText37"/> <!--Operation Classification--> 
      <field name="CustomBool36"/> <!--Transports Hazmat--> 
      <field name="CustomNarrative4"/> <!--Cargo Carried (per MCS-150)-->
      <field name="CustomNarrative3" hidden="true"/> <!--CAB API JSON--> 
      </section>
      <section if="CustomBool30:eq:true" ifInRole="1,10003">
      <html processTags="true">
      <field name="Alias_ISO_CMPremium"/> <!--Inland Marine Premium--> 
          &amp;nbsp;  &lt;button onclick=&quot;downloadCABjson();&quot;&gt;View JSON from Carrier&lt;/button&gt;
      </html>
    </section>
  </column>
  <column>
      
    <section wideLabels="true" if="CustomBool30:eq:true">
      <field name="CustomText41" label="Carrier Data From"/> <!--CAB Data From--> 
      <field name="CustomText39"/> <!--DOT Rating--> 
      <field name="CustomNumber14" label="ISS Score"/> <!--CAB Score--> 
      <custom content="{CustomNumber27}%" label="Driver OOS (20.83%)"/>
      <custom content="{CustomNumber28}%" label="Vehicle OOS (5.40%)"/>
      <custom content="{CustomNumber21-#}%" label="Unsafe Driving (65%)"/>
      <custom content="{CustomNumber15-#}%" label="HOS (65%)"/>
      <custom content="{CustomNumber32-#}%" label="Driver Fitness (80%)"/>
      <custom content="{CustomNumber22-#}%" label="Vehicle Maint (80%)"/>
      <custom content="{CustomNumber23-#}%" label="Crash (65%)"/>
      <field name="CustomNumber31"/> <!--Count of Severe Violations--> 
      <custom content="{CustomNumber29-#}%" label="Accident to Power Unit Ratio"/>
      <field name="CustomNumber26"/> <!--Derived Power Unit Count--> 
      <field name="CustomNumber30"/> <!--Number of Incidents-->   
      <field name="CustomNarrative10" label="Carrier Data Changes"/> <!--CAB Data Changes--> 
    </section>
        
   
  </column>
    <!-- KSchreiner: Commented out this "CAB Member Data" that I added to see the CAB API results, but it is not needed.  -->
    <!--  
    <section title="CAB Member Data" wideLabels="true" if="CustomBool30:eq:true">
      <custom content="{Member.Name}" label="Motor Carrier Name"/>
      <custom content="{Member.Street1}, {Member.City}, {Member.State} {Member.PostalCode}" label="Street Address"/>
      <custom content="{Member.BillingAddress1}, {Member.BillingCity}, {Member.BillingState} {Member.BillingPostalCode}" label="Mailing Address"/>
      <custom content="{Member.ContactName}" label="Insured Contact Name"/>
      <custom content="{Member.CustomText1}" label="Phone Number (Office)"/>
      <custom content="{Member.CustomText2}" label="Phone Number (Cell)"/>
      <custom content="{Member.ContactEmail}" label="Email"/>
    </section>
    -->
  </panel>
   
  
  <panel title="Coverage Extensions"  wideLabels="true" enableExpandCollapse="true" expandedByDefault="false"> 
     <column>
      <section if="Custom15Code:!eq:dispcd[CE]">  
        <custom content="{CustomMoney95-C0}" label="Additional Debris Removal Expense"/>   
      </section >
	  
      <!--    Added for CE coverage Extensions  | Prakhar -->
      <section if="Custom15Code:eq:dispcd[CE]" wideLabels="true">
        <field name="CustomNumber232" label="CE Additional Debris Removal Limit" cssClasses="field dollar"/> 
        <field name="Alias_Timby_CE_ExtensionPremium_DebrisRemovalPremium" label="CE Additional Debris Removal Premium" cssClasses="field dollar"/>  <!-- Added for BUG 36176 Himanshu-->
      </section  >
      <section if="Custom30Code:eq:dispcd[IM7002]" wideLabels="true">
        <field name="CustomNumber234"  label = "Equipment Loaned to Others" cssClasses="field dollar"/> 
        <field name="Alias_Timby_CE_ExtensionPremium_EquipmentLoanedPremium" label = "Equipment Loaned To Others Premium"   cssClasses="field dollar"/> <!-- Added for BUG 36176 Himanshu-->
      </section>
      <section if="Custom30Code:eq:dispcd[IM7002]" wideLabels="true">
        <field name="CustomNumber233" label = "Equipment Leased or Rented To Others Limit" cssClasses="field dollar" /> 
        <field name="Alias_Timby_CE_ExtensionPremium_EquipmentLoRPremium" label = "Equipment Leased or Rented To Others Premium"  cssClasses="field dollar"/> <!-- Added for BUG 36176 Namrata-->
      </section>  
      <!--    Added for CE coverage Extensions  | Prakhar -->	  
    </column>
	
    <column>
      <section if="Custom15Code:!eq:dispcd[CE]">  
        <custom content="{CustomMoney96-C0}" label="Fraud or Deciet"/>     
      </section>
      <!-- Added for CE coverage Extensions  | Prakhar -->
      <section if="Custom30Code:eq:dispcd[IM7002]" wideLabels="true">
        <field name="CustomNumber235"  label = "Fraud and Deceit"  cssClasses="field dollar"/> <!--Fraud or Deicet-->
        <field name="Alias_Timby_CE_ExtensionPremium_FraudandDeceitPremium" label = "Fraud and Deceit Premium"  cssClasses="field dollar"/> <!-- Added for BUG 36176 Namrata-->
      </section> 
      <section if="Custom30Code:eq:dispcd[IM7002]" wideLabels="true">
       <field name="CustomNumber236"   label = "Waterborne Equipment" cssClasses="field dollar"/> <!-- Water borne limit--> 
        <field name="Alias_Timby_CE_ExtensionPremium_WaterbornePremium" label = "Waterborne Equipment Premium"  cssClasses="field dollar"/> <!-- Added for BUG 36176 Namrata-->
      </section>
      
    </column>
  </panel>
  
  <panel title ="Additional and Supplemental Coverages" enableExpandCollapse="true" expandedByDefault="false">
    <column>
      <section if="Custom15Code:!eq:dispcd[CE]">
        <custom content="{CustomMoney97-C0}" label="Contract Penalty" />
        <custom content="{CustomMoney99-C0}" label="Freight Charges"/>
        <field name="CustomText48" /> <!--Newly Acquired Terminals--> 
        <custom content="{CustomMoney102-C0}" label="On-board electronics"/>
        <custom content="{CustomMoney104-C0}" label="Pollutant Cleanup And Removal"/>
      </section>
      
      <!-- CE Supplemental Coverages | Prakhar-->
      
      <section  if="Custom15Code:eq:dispcd[CE]&amp;&amp;Custom30Code:eq:dispcd[IM7002]">
         <html>
          <p>Construction Trailers</p>
        </html>
        <field name="CustomNumber270"  label = "Any One Trailer" cssClasses="field dollar" />
        <field name="CustomNumber271"  label = "Any One Loss" cssClasses="field dollar" />
        <field name="Alias_Timby_CE_ConstructionTrailerPremium"  label = "Construction Trailers Premium"  cssClasses="field dollar"/> <!-- Added for BUG 36176 Namrata-->
      </section>
      <section wideLabels="true" if="Custom15Code:eq:dispcd[CE]">
          <field name="CustomNumber237" label="Employee Tools Limit" cssClasses="field dollar" />
          <field name="CustomNumber220" label = "Employee Tools Premium" cssClasses="field dollar"/> <!--Bug 36176 | Himanshu-->
          <field name="CustomNumber238" label="Equipment Leased or Rented From Others" if="Custom30Code:eq:dispcd[IM7000]" cssClasses="field dollar"/>
          <field name="CustomNumber225" toggleFormula="{Custom14Code.DisplayCode}=='IM7000'" cssClasses="field dollar"/>    <!--Equipment Leased or Rented From Others Premium | Bug 36176 | Himanshu --> 
          <field name="CustomNumber239" label="Fire Department Service Charge Limit" if="Custom30Code:eq:dispcd[IM7002]" cssClasses="field dollar"/>
          <field name="Alias_Timby_CE_FireDepartmentServiceChargePremium" label="Fire Department Service Charge Premium" if="Custom30Code:eq:dispcd[IM7002]" cssClasses="field dollar"/> <!-- Added for BUG 36176 Namrata-->
          <field name="CustomNumber240" label="Newly Purchased Equipment Limit" if="Custom30Code:eq:dispcd[IM7000]" cssClasses="field dollar"/>
          <field name="CustomNumber221"  toggleFormula="{Custom14Code.DisplayCode}=='IM7000'"  label = "Newly Purchased Equipment Premium" cssClasses="field dollar"/> <!--| Bug 36176 | Himanshu-->
          <field name="CustomNumber241" label="Pollutant Cleanup and Removal" cssClasses="field dollar"/> 
          <field name="CustomNumber222" cssClasses="field dollar"/> <!--Pollutant Cleanup and Removal Premium | Bug 36176 | Himanshu-->
      </section>
      
    </column>
    <column>
      <section if="Custom15Code:!eq:dispcd[CE]">
        <custom content="{CustomMoney98-C0}" label="Expediting Expense"/>
        <custom content="{CustomMoney100-C0}" label="Moving Equipment"/>
	   <custom content="{CustomMoney101-C0}" label="Off-board electronics"/>
	   <custom content="{CustomMoney103-C0}" label="On-Board Expendable Supplies"/>
	   <custom content="{CustomMoney105-C0}" label="Rewards"/>
      </section>
      
       <!-- CE Supplemental Coverages | Prakhar-->
      <section  wideLabels="true" if="Custom15Code:eq:dispcd[CE]">
          <field name="CustomNumber242" label = "Recharge of Extinguishers" if="Custom30Code:eq:dispcd[IM7002]" cssClasses="field dollar"/><!--Recharge of Existingishers-->
          <field name="Alias_Timby_CE_IM7002_RechargeofExtinguishersPremium" label = "Recharge of Extinguishers Premium"  if="Custom30Code:eq:dispcd[IM7002]" cssClasses="field dollar"/> <!--CE IM7002 Recharge of Extinguishers Premium--> <!-- Added for BUG 36176 Namrata-->
          <field name="CustomNumber243" label="Rental Reimbursement limit" cssClasses="field dollar"/>
          <field name="CustomText68" label="Rental Reimbursement Waiting Period" cssClasses="field"/>
          <field name="CustomNumber223" cssClasses="field dollar"/> <!--Rental Reimbursement Premium | Bug 36176 | Himanshu-->
          <field name="CustomNumber244"  label = "Reward for Recovery of Stolen Equipment"  if="Custom30Code:eq:dispcd[IM7002]" cssClasses="field dollar"/> <!-- Reward for Recovery of Stolen Equipment-->
          <field name="Alias_Timby_CE_IM7002_RewardforStolenEquipmentPremium"  label = "Reward for Recovery of Stolen Equipment Premium"  if="Custom30Code:eq:dispcd[IM7002]" cssClasses="field dollar"/> <!-- CE IM7002 Reward for Recovery of Stolen Equipment Premium--> <!-- Added for BUG 36176 Namrata-->
          <field name="CustomNumber245" label="Spare Parts and Fuel Limit" cssClasses="field dollar"/>
          <field name="CustomNumber224"  cssClasses="field dollar"/> <!--Spare Parts and Fuel Premium | Bug 36176 | Himanshu-->
      </section>
    </column>
  </panel>
  <!--Bug 55899 | Start | Himanshu-->
  <panel title="Exclusions &amp; Limitations" if="Custom15Code:eq:dispcd[CE]" enableExpandCollapse="true" expandedByDefault="false">
    <column>
      <section wideLabels="true">
          <field name="CustomBool114" checkBox="true" label = "Below The Surface of the Ground Exclusion"/><!--Below The Surface of the Ground Exclusion -->
      </section>
      
      <section wideLabels="true">
           <field name="CustomBool115" checkBox="true" label = "Boom Restriction Endorsement"/><!--Boom Restriction Endorsement -->
      </section>
      <section wideLabels="true">
          <field name="CustomBool120" checkBox="true" label = "Earth Movement, Flood and Sewer Backup Exclusion"/><!-- Earth Movement, Flood and Sewer Backup Exclusion -->
      </section>
      <section wideLabels="true">
          <field name="CustomBool138" checkBox="true" label = "Limited Theft Coverage"/><!-- Limited Theft Coverage  -->
      </section>
      <section if="CustomBool120:eq:true">
          <field name="CustomBool121"  checkBox="true"  label="Earth Movement Exclusion"/>
          <field name="CustomBool122"  checkBox="true"  label="Flood Exclusion"/>
          <field name="CustomBool123"  checkBox="true"  label="Sewer Backup Exclusion"/>
      </section>
      
    </column>
    <column>
      <section wideLabels="true">
          <field name="CustomBool129" checkBox="true" label = "Named Storm Exclusion"/><!-- Named Storm Exclusion -->
      </section>
      <section wideLabels="true">
          <field name="CustomBool132" checkBox="true" label = "Protective Devices"/><!-- Protective Devices   -->
      </section>
      <section wideLabels="true">
          <field name="CustomBool136" checkBox="true" label = "Weight of Load Exclusion"/><!-- Weight of Load Exclusion -->
      </section>
      
      <section wideLabels="true">
          <field name="CustomBool137" checkBox="true" label = "Windstorm or Hail Exclusion"/><!-- Windstorm or Hail Exclusion -->
      </section>
    </column>
  </panel>
  <!--Bug 55899 | End | Himanshu-->
    <panel title ="Optional Endorsements - Contractors Equipment" if="Custom15Code:eq:dispcd[CE]" enableExpandCollapse="true" expandedByDefault="false">
    <column>
       <section wideLabels="true" if="Custom30Code:eq:dispcd[IM7000]">  <!--Additional Coverages Endorsement -->
          <field name="CustomBool109" checkBox="true" label = "Additional Coverages Endorsement"  />
       </section>
    
       <section if="CustomBool109:eq:true">
			<field name="CustomBool110"  checkBox="true"  label = "Fraud &amp; Deceit"/>
			<field name="CustomNumber246"  label = "Fraud &amp; Deceit" if="CustomBool110:eq:true" cssClasses="field dollar"/> <!--Fraud & Deceit-->
			<field name="CustomNumber247"  label = "Fraud &amp; Deceit Premium" if="CustomBool110:eq:true" cssClasses="field dollar"/> <!--Fraud & Deceit Premium-->
			<field name="CustomBool111"  checkBox="true"  label = "Recharge of Extinguishers" />
			<field name="CustomNumber248" label = "Recharge of Extinguishers" if="CustomBool111:eq:true" cssClasses="field dollar"/> <!--Recharge of Extinguishers-->
			<field name="CustomNumber249" label = "Recharge of Extinguishers Premium" if="CustomBool111:eq:true" cssClasses="field dollar"/> <!--Recharge of Extinguishers Premium-->
			<field name="CustomBool112"  checkBox="true" label = "Reward for Recovery of Stolen Equipment" />
			<field name="CustomNumber250"  label = "Reward for Recovery of Stolen Equipment" if="CustomBool112:eq:true" cssClasses="field dollar"/> <!--Reward for Recovery of Stolen Equipment-->
			<field name="CustomNumber251"  label = "Reward for Recovery of Stolen Equipment Premium" if="CustomBool112:eq:true" cssClasses="field dollar"/> <!--Reward for Recovery of Stolen Equipment Premium-->
       </section>
      
       <section wideLabels="true">
          <field name="CustomBool113" if="Custom30Code:eq:dispcd[IM7000]" checkBox="true" label = "Agreed Amount Endorsement"/><!--Agreed Amount Endorsement -->
       </section>
      
      <section wideLabels="true">
           <field name="CustomBool116" checkBox="true" label = "Cancellation and Non-Renewal Notice to Designated Person or Organization"/><!-- Cancellation and Non-Renewal Notice to Designated Person or Organization   -->
      </section>
        
      <section wideLabels="true" >
          <field name="CustomBool117" checkBox="true" label = "Continuing Rental or Lease Payments"/><!-- Continuing Rental or Lease Payments   -->
      </section>
       <!-- Added this section as part of 38787 | Prakhar -->
       <section if="CustomBool117:eq:true">
        <field name="CustomNumber252"   label="Per Item Limit" cssClasses="field dollar"/>
        <field name="CustomNumber253"   label="Annual Limit" cssClasses="field dollar"/>
        <field name="CustomNumber226"   label="Continuing Rental or Lease Payments Premium" cssClasses="field dollar"/>
       </section>
      
      <section wideLabels="true" if="Custom30Code:eq:dispcd[IM7000]" >  <!--Equipment Leased or Rented To Others -->
        <field name="CustomBool118" checkBox="true"   label = "Equipment Leased or Rented To Others" /> 
      </section>
      <section if="CustomBool118:eq:true">
        <field name="CustomNumber254" label="Equipment Limit" cssClasses="field dollar"/>  
        <field name="CustomNumber255" label="Catastrophe Limit" cssClasses="field dollar"/> 
        <field name="CustomNumber256" label="Deductible Amount" cssClasses="field dollar"/> 
        <field name="CustomNumber257" label="Premium" cssClasses="field dollar"/>
      </section>
      
       <section wideLabels="true">
          <field name="CustomBool119" checkBox="true" label = "Equipment Borrowed From Others"/><!-- Equipment Borrowed From Others -->
       </section>
       <!-- Added this section as part of 38787 | Prakhar -->
       <section if="CustomBool119:eq:true">
        <field name="CustomNumber258"   label="Per Item Limit" cssClasses="field dollar"/>
        <field name="CustomNumber259"   label="Occurrence Limit" cssClasses="field dollar"/>
        <field name="CustomNumber227"   label="Equipment Borrowed From Others Premium" cssClasses="field dollar"/>
       </section>
      
      <!-- 36200 Tejasri Changes -->
       <section wideLabels="true" if="Custom30Code:eq:dispcd[IM7000]">
         <field name="CustomBool124" checkBox="true" label="Fire Department Service Charge" /><!-- Fire Department Service Charge -->
       </section>
      <section if="CustomBool124:eq:true">
         <field name="CustomNumber260" label = "Limit" cssClasses="field dollar"/> <!--Fire Department Service Charge Limit--> 
      </section>
      <!-- 36200 Tejasri Changes -->
      
      <!--Before doing any changes in this please check the jquery code, we are hiding this section for some conditions-->
       <section wideLabels="true">
          <field name="CustomBool125" checkBox="true" label="Loss Payable Schedule"/><!-- Loss Payable -->
      </section>
      <!-- Added this section as part of 38787 | Prakhar -->
       <section if="CustomBool125:eq:true">
        <field name="CustomBool126"  checkBox="true"  label="Loss Payable" cssClasses="field"/>
        <field name="CustomBool127"  checkBox="true"  label="Lender’s Payable" cssClasses="field"/>
        <field name="CustomBool128"  checkBox="true"  label="Contract Of Sale" cssClasses="field"/>
       </section>
      
    </column>
    
   <column>
       <section wideLabels="true">
          <field name="CustomBool130" checkBox="true" label = "Property Loaned to Others - Scheduled Contractors"/> <!-- Property Loaned to Others - Scheduled Contractors -->
      </section>
         <!-- Added this section as part of 38787 | Prakhar -->
       <section if="CustomBool130:eq:true">
        <field name="CustomNumber261"  label="Limit" cssClasses="field dollar"/>
        <field name="CustomNarrative15"   label="Contractors and Individuals"  cssClasses="field"/>
        <field name="CustomNarrative16"   label="Contractors and Individuals"  cssClasses="field"/>
        <field name="CustomNarrative17"   label="Contractors and Individuals"  cssClasses="field"/>
        <field name="CustomNarrative18"   label="Contractors and Individuals"  cssClasses="field"/>
        <field name="CustomNumber228"   label="Premium"  cssClasses="field dollar"/>
      </section>
       <section wideLabels="true" >
          <field name="CustomBool131" checkBox="true"  label = "Property Loaned to Others – Jobsite Coverage" if="Custom30Code:eq:dispcd[IM7000]"/> <!--Property Loaned to Others – Jobsite Coverage -->
      </section> 
      <!-- Added this section as part of 38787 | Prakhar -->
      <section if="CustomBool131:eq:true">
        <field name="CustomNumber262"   label="Limit" cssClasses="field dollar"/>
        <field name="CustomNumber229" label="Premium" cssClasses="field dollar"/>
      </section>
       <section wideLabels="true">
          <field name="CustomBool133" checkBox="true" label = "Tools Endorsement"/><!-- Tools Endorsement -->
      </section> 
      <!-- Added this section as part of 38787 | Prakhar -->
     <section if="CustomBool133:eq:true">
      <field name="CustomNumber211"   label="The most “we” pay for loss to any one “tool” is" cssClasses="field dollar"/>
      <field name="CustomNumber218"   label="The most “we” pay in any one occurrence for loss to “your” “tools” is" cssClasses="field dollar"/>
      <field name="CustomNumber219"   label="Deductible" cssClasses="field dollar"/>
       <field name="CustomNumber230"   label="Tools Endorsement Premium" cssClasses="field dollar"/>
     </section>
      
       <section wideLabels="true" if="Custom30Code:eq:dispcd[IM7000]">
          <field name="CustomBool134" checkBox="true"  label = "Trailers and Spare Parts Endorsement"/><!-- Trailers and Spare Parts Endorsement-->
      </section>
      <!-- Added this section as part of 38787 | Prakhar -->
     <section if="CustomBool134:eq:true" >
      <field name="CustomNumber179"   label="The most “we” pay in any one occurrence for any one “construction trailer” and the contents in the trailer is" cssClasses="field dollar"/>
      <field name="CustomNumber182"   label="The most “we” pay in any one occurrence for all “construction trailers” and the contents in the trailers is" cssClasses="field dollar"/>
      <field name="CustomNumber210"   label="Deductible" cssClasses="field dollar"/>
       <field name="CustomNumber231"   label="Trailers and Spare Parts Endorsement Premium" cssClasses="field dollar"/>
     </section>
      
      <section wideLabels="true" if="Custom30Code:eq:dispcd[IM7000]">  <!--Waterborne Endorsement -->
        <field name="CustomBool135" checkBox="true" label = "Waterborne Endorsement"/> 
       
      </section>
      <section if="CustomBool135:eq:true" >
        <field name="CustomNumber263" label="Waterborne Limit" cssClasses="field dollar"/>  
        <field name="CustomNumber264" label="Waterborne Deductible" cssClasses="field dollar"/> 
        <field name="CustomNumber265" label="Waterborne  Premium" cssClasses="field dollar"/>  
      </section>
    </column>
    
  </panel>

<!-- Adding the reporting condtions for BUG 61628 - namrata-->
  <panel title="Reporting Conditions" enableExpandCollapse="true" if="Custom15Code:eq:dispcd[CE]"><!--toggleFormula="{Coverage_CMHCNTEQ.Add}=='True'"-->
    
    <column >
      <section>
        <custom content="{Coverage_CMHCNTEQ.Custom18Code}" label="Your Contractors Equipment" required="true"/>
        
         <custom content="{Coverage_CMHCNTEQ.Custom9Code}" label="Reporting Period" /> <!-- Reporting Period-->
         <custom content="{Coverage_CMHCNTEQ.CustomNumber88-0.000}"   label = "Reporting Rate $ per $100 Avg Values" /> <!-- Reporting Rate-->
        <custom content="{Coverage_CMHCNTEQ.CustomMoney119-C0}"  waterMark="$" label="Total Insured Values at Inception"/>  <!-- Total Insured Values at Inception -->
         <custom content="{Coverage_CMHCNTEQ.CustomNumber89-C0}" label="Deposit Premium" waterMark="$"  />  <!-- Deposit Premium -->
         <custom content="{Coverage_CMHCNTEQ.CustomMoney121}"  waterMark="$" hidden="true"/><!--  toggleFormula="{Custom18Code.DisplayCode}=='A'"/-->  <!-- Minimum Premium -->
       
        
         <custom content="{Coverage_CMHCNTEQ.Custom19Code}" label="Leased or Rented from others" required="true"/>
          
           <custom content="{Coverage_CMHCNTEQ.Custom33Code}"  label = "Reporting Period" /><!-- Reporting Period-->
          <custom content="{Coverage_CMHCNTEQ.CustomNumber94-0.000}"   label = "Reporting Rate $ per $100 of Leased/Rented to Others Receipts" /><!-- Reporting Rate-->
          <custom content="{Coverage_CMHCNTEQ.CustomMoney124-C0}"  waterMark="$"  label = "Estimated Annual Leased/Rented to Others at Inception" /><!-- Estimated CustomMoney101 -->
          <custom content="{Coverage_CMHCNTEQ.CustomMoney120-C0}"  label = "Deposit Premium"  waterMark="$" /> <!-- Deposit Premium -->
         <custom content="{Coverage_CMHCNTEQ.CustomMoney122}" label = "Minimum Premium"  waterMark="$" hidden="true"/><!-- toggleFormula="{Custom19Code.DisplayCode}=='A'"/--> <!-- Minimum Premium -->
          

        <custom content="{Coverage_CMHCNTEQ.Custom20Code}" label="Leased or Rented to others" required="true" /> 
          <!--custom content="{Custom7Code}" hidden="true"/--> <!--Reporting Type-->
           <custom content="{Coverage_CMHCNTEQ.Custom11Code}"  label = "Reporting Period"  /><!-- Reporting Period-->
        <custom content="{Coverage_CMHCNTEQ.CustomNumber83-0.000}"   label = "Reporting Rate $ per $100 of Equipment Expenditures" /><!-- Reporting Rate-->
           <custom content="{Coverage_CMHCNTEQ.CustomMoney123-C0}"  waterMark="$"  label = "Estimated Annual Equipment Expenditures at Inception" /><!-- Estimated -->
        <custom content="{Coverage_CMHCNTEQ.CustomMoney92-C0}" label="Deposit Premium" waterMark="$"  /> <!-- Deposit Premium -->
        <custom content="{Coverage_CMHCNTEQ.CustomMoney93}"  waterMark="$" hidden="true"/><!-- toggleFormula="{Custom20Code.DisplayCode}=='A'"/--> <!-- Minimum Premium -->
        
        
      </section>
      </column>
    
  </panel>
  <!-- changes end -Adding the reporting condtions for BUG 61628 - namrata-->
  
 
   <!-- Adding new CE subjectivities for BUG 56214 start -Namrata -->
  <gridPanel 
    if="Type:!eq:E&amp;&amp;Type:!eq:R"
    domain="Custom.TimbyCESubjectivities"  
    title="SUBJECTIVITIES" 
    columns="SubjectivitiesDescription[Title=Subjectivities Description][EditableGridRequired=true],Status[EditableGridRequired=true],DueBy[EditableGridRequired=true],ReceivedDate[EditableGrid=true]" 
    filter="ProposalID={ProposalID-#}"
    inlineEdit="true" 
    editableGrid="true" 
    CreateAnother="true" 
    SaveAndContinue="true" />	
  
   <!--  Added as part of BUG 57904 Start -->
  <gridPanel
    if="CustomBool69:eq:true"
    domain= "Custom.ProtectiveDevicesSchedule"
    title = "Protective Devices Schedule"
    columns = "LocationNumber[Align=Left][Title =Location Number], Address,ProtectiveDeviceorService[Protective Device or Service]"
    filter="ProposalID={ProposalID-#}"
    inlineEdit = "true"
    linkType = "EditPopup"
    showAllLink = "true"
    editableGrid = "true"/>
  
  <!--  Added as part of BUG 57904 end -->
  <!--  Adding new CE subjectivities for BUG 56214 end -Namrata -->
 
  
  <!-- Removing old Subjectivities for BUG 56214 - Namrata -->
  
        <!--38786 - CE starts-->
<!--
  <panel if="Custom15Code:eq:dispcd[CE]">
    <column>   
      <section title="SUBJECTIVITIES">
        
        <html>
          <p><b>General Subjectivities</b></p>
        </html> 
                <field name="CustomBool102" checkBox="true" defaultValue="true" label="Acknowledgment of Terrorism Coverage Acceptance or Rejection (signed disclosure required if rejected)"/> 
                <field name="CustomBool103" checkBox="true" defaultValue="true"  label="Fully completed Surplus Lines Tax Filing Information Form"/> 
                <field name="CustomBool104" checkBox="true" defaultValue="true"  label="Complete Equipment Schedule, including Equipment Description and Value"/> 
                <field name="CustomBool105" checkBox="true" label="Three Years, currently valued Loss Runs for Contractors Equipment"/>
                <field name="CustomBool106" checkBox="true"/>
                <field name="CustomNarrative12" toggleField="CustomBool106" toggleValues="true" label=""/>
                <field name="CustomBool107" checkBox="true"/>
                <field name="CustomNarrative13" toggleField="CustomBool107" toggleValues="true" label=""/>
                <field name="CustomBool108" checkBox="true"/>
             <field name="CustomNarrative14" toggleField="CustomBool108" toggleValues="true" label=""/>
           </section>
    </column>
  </panel>
-->
    <!--38786 - CE ends-->
  <!-- Removing old subjectivities for BUG 56214 - namrata -->

  
   <!-- Start ISSUE 49077: Reynaldo Jaropay - Show Excluded Property --> 
  <panel title="Excluded Property"  wideLabels="true" enableExpandCollapse="true" expandedByDefault="false" > 
    <column>
      <section>
        <field name="Coverage_MTC.Add" hidden="true" />
        <custom htmlContent="&lt;div id='Banner' > &lt;/; div>"  />    <!--ISSUE 51878: Rey Jaropay -->
        <field name="CustomBool71" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool72" checkBox="true" readOnly="true"  cssClasses="excludedProperty" label="Antiques" /> 
        <field name="CustomBool73" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool74" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool75" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool77" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool78" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool79" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool94" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool80" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool81" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool95" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool96" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
      </section>  
    </column>
    <column>
      <section> 
        <field name="CustomBool82" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool83" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool84" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool85" checkBox="true" readOnly="true"  cssClasses="excludedProperty" label="Oversized Loads without prior written approval" /> 
        <field name="CustomBool86" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool87" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool88" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool97" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomBool89" checkBox="true" readOnly="true"  cssClasses="excludedProperty" /> 
        <field name="CustomText27" cssClasses="excludedPropertyText" /> 
        <field name="CustomText62" cssClasses="excludedPropertyText" /> 
        <field name="CustomText63" cssClasses="excludedPropertyText" /> 
        <field name="CustomText64" cssClasses="excludedPropertyText" /> 
      </section> 
    </column>
  </panel>
    <!-- End ISSUE 49077:  --> 
  
  <!-- Bernard | 51797 | Display column width --> 
  
    <gridPanel
    if="Type:!eq:E"
    domain="Custom.LocationSchedule" 
    title="Terminal Locations Schedule" 
    filter="ProposalID={ProposalID-#}" 
    class="class10"
    allowAggregates="true"
    showAllLink="true"
    hideNewLink="false"
    columns="
    &amp;LocationNumber[EditableGridControlCssClass=small], 
    Street1[EditableGridRequired=true],
    Street2,
    City[EditableGridRequired=true],
    State[EditableGridRequired=true][EditableGridControlCssClass=small], 
    PostalCode[EditableGridRequired=true][EditableGridControlCssClass=small], 
    Custom1Code[EditableGridRequired=true][EditableGridControlCssClass=medium], 
    Custom2Code[Title=Protection][EditableGridRequired=true][EditableGridControlCssClass=medium],
    CustomBool7[Title=Earth Movement Exclusion],
    CustomBool8[Title=Flood Exclusion],
    CustomBool9[Title=Named Storm Exclusion],
    CustomMoney2[Align=Left][Format=C0][defaultValue=Coverage_MTC.Limit][EditableGridControlCssClass=small]"
    />
  
   <gridPanel
    if="Type:eq:E&amp;&amp;ChangeEffectiveDate:!empty"
    domain="Custom.LocationSchedule" 
    title="Terminal Locations Schedule" 
    filter="ProposalID={ProposalID-#}" 
    class="class10"
    allowAggregates="true"
    showAllLink="true"
    hideNewLink="false"
    columns="
    &amp;LocationNumber[EditableGridControlCssClass=small], 
    Street1[EditableGridRequired=true],
    Street2,
    City[EditableGridRequired=true],
    State[EditableGridRequired=true][EditableGridControlCssClass=small], 
    PostalCode[EditableGridRequired=true][EditableGridControlCssClass=small], 
    Custom1Code[EditableGridRequired=true][EditableGridControlCssClass=medium], 
    Custom2Code[Title=Protection][EditableGridRequired=true][EditableGridControlCssClass=medium],
    CustomBool7[Title=Earth Movement Exclusion],
    CustomBool8[Title=Flood Excluded],
    CustomBool9[Title=Named Storm Excluded],
    CustomMoney2[Format=C0][defaultValue=Coverage_MTC.Limit][EditableGridControlCssClass=small]"
    />

   <gridPanel
    if="Type:eq:E&amp;&amp;ChangeEffectiveDate:empty"
    domain="Custom.LocationSchedule" 
    title="Terminal Locations Schedule" 
    filter="ProposalID={ProposalID-#}" 
    class="class10"
    inlineEdit="true"
    editableGrid="true"
    allowAggregates="true"
    linkType="EditPopup" 
    showAllLink="true"
    hideNewLink="false"
    columns="
    &amp;LocationNumber[EditableGridControlCssClass=small], 
    Street1[EditableGridRequired=true],
    Street2,
    City[EditableGridRequired=true],
    State[EditableGridRequired=true][EditableGridControlCssClass=small], 
    PostalCode[EditableGridRequired=true][EditableGridControlCssClass=small], 
    Custom1Code[EditableGridRequired=true][EditableGridControlCssClass=medium], 
    Custom2Code[Title=Protection][EditableGridRequired=true][EditableGridControlCssClass=medium],
    CustomBool7[Title=Earth Movement Exclusion],
    CustomBool8[Title=Flood Excluded],
    CustomBool9[Title=Named Storm Excluded],
    CustomMoney2[Format=C0][defaultValue=Coverage_MTC.Limit][EditableGridControlCssClass=small]"
    />
  
  
  <!-- Aishwarya added/updated below grids as part of 16133, even though below grids are for same domain , they differ by the If condition-->  
  
 <!--   <gridPanel  domain="Custom.LocationSchedule" title="Locations" showAllLink="true" inlineEdit="true" editableGrid="true" allowAggregates="true"
    columns="&amp;LocationNumber,
    Street1[EditableGridRequired=true],
    City[EditableGridRequired=true],
    State[EditableGridRequired=true],
    PostalCode[EditableGridRequired=true],
    Custom1Code[EditableGridRequired=true],
    Custom2Code[Title=Protection][EditableGridRequired=true],CustomMoney2[Format=C0]" hideNewLink="false" 
    if="Type:!eq:E"/> -->
  
  <!--  <gridPanel  domain="Custom.LocationSchedule" title="Locations" showAllLink="true" inlineEdit="true" editableGrid="true" allowAggregates="true"
    columns="&amp;LocationNumber,
    Street1[EditableGridRequired=true],
    City[EditableGridRequired=true],
    State[EditableGridRequired=true],
    PostalCode[EditableGridRequired=true],
    Custom1Code[EditableGridRequired=true],
    Custom2Code[Title=Protection][EditableGridRequired=true],CustomMoney2[Format=C0]" hideNewLink="false"
    if="Type:eq:E&amp;&amp;ChangeEffectiveDate:!empty"/>  -->
  
  <!--   <gridPanel  domain="Custom.LocationSchedule" title="Locations" showAllLink="true" allowAggregates="true"
    columns="&amp;LocationNumber,Street1[EditableGridRequired=true],City[EditableGridRequired=true],State[EditableGridRequired=true],
    PostalCode[EditableGridRequired=true],Custom1Code[EditableGridRequired=true],
    Custom2Code[Title=Protection][EditableGridRequired=true],CustomMoney2[Format=C0]" hideNewLink="true"
    if="Type:eq:E&amp;&amp;ChangeEffectiveDate:empty"/> -->
  
   <!-- Aishwarya added/updated below grids as part of 16133, even though below grids are for same domain , they differ by the If condition-->  
  
  <!--CE changes |added if condition |prakhar -->
   <!-- Aishwarya added/updated below grids as part of 16133, even though below grids are for same domain , they differ by the If condition- start-->  
    <gridPanel if="Custom15Code:!eq:dispcd[CE]&amp;&amp;Type:eq:E&amp;&amp;ChangeEffectiveDate:!empty" domain="Custom.VehicleSchedule" title="Vehicles"
    showAllLink="true" inlineEdit="true" editableGrid="true" 
     allowAggregates="true" hideNewLink="false" maxRows="100"
    filter="ProposalID={ProposalID-#}"
    columns="ChangeAction[EditableGridReadOnly=true],&amp;VehicleNumberAutoGenerate[Title=Vehicle Number][Align=Left],
    Year[EditableGrid=true][Align=Left],Make[EditableGrid=true][Align=Left],CustomBool1[EditableGridRequired=true][Align=Left],VehicleValue[EditableGridRequired=true][Format=C0][Align=Left],
    VIN[EditableGridRequired=true][Align=Left],Custom1Code[Align=Left],VehicleCountProrated[Title=Prorated][Format=0.000][EditableGrid=true][Align=Left],
    VehicleValueProrated[Title=Stated Value Prorated][Format=C2][EditableGrid=true][Align=Left],ActiveDate[EditableGrid=true][Align=Left],
    InactiveDate[EditableGrid=true][Align=Left]" />
  
  <gridPanel if="Custom15Code:!eq:dispcd[CE]&amp;&amp;Type:!eq:E" domain="Custom.VehicleSchedule" title="Vehicles" showAllLink="true" inlineEdit="true" editableGrid="true" 
     allowAggregates="true" hideNewLink="false" maxRows="100"
    filter="ProposalID={ProposalID-#}"
    columns="ChangeAction[EditableGridReadOnly=true],&amp;VehicleNumberAutoGenerate[Title=Vehicle Number][Align=Left],
    Year[EditableGrid=true][Align=Left],Make[EditableGrid=true][Align=Left],CustomBool1[EditableGridRequired=true][Align=Left],VehicleValue[EditableGridRequired=true][Format=C0][Align=Left],
    VIN[EditableGridRequired=true][Align=Left],Custom1Code[Align=Left],VehicleCountProrated[Title=Prorated][Format=0.000][EditableGrid=true][Align=Left],
    VehicleValueProrated[Title=Stated Value Prorated][Format=C2][EditableGrid=true][Align=Left],ActiveDate[EditableGrid=true][Align=Left],
    InactiveDate[EditableGrid=true][Align=Left]" />
  
  
  <gridPanel  if="Custom15Code:!eq:dispcd[CE]&amp;&amp;Type:eq:E&amp;&amp;ChangeEffectiveDate:empty" domain="Custom.VehicleSchedule" title="Vehicles"  
     allowAggregates="true" hideNewLink="true" showAllLink="true" maxRows="100"
    filter="ProposalID={ProposalID-#}"
    columns="ChangeAction[EditableGridReadOnly=true],&amp;VehicleNumberAutoGenerate[Title=Vehicle Number][Align=Left],
    Year[EditableGrid=true][Align=Left],Make[EditableGrid=true][Align=Left],CustomBool1[EditableGridRequired=true][Align=Left],VehicleValue[EditableGridRequired=true][Format=C0][Align=Left],
    VIN[EditableGridRequired=true][Align=Left],Custom1Code[Align=Left],VehicleCountProrated[Title=Prorated][Format=0.000][EditableGrid=true][Align=Left],
    VehicleValueProrated[Title=Stated Value Prorated][Format=C2][EditableGrid=true][Align=Left],ActiveDate[EditableGrid=true][Align=Left],
    InactiveDate[EditableGrid=true][Align=Left]" />
   <!-- Aishwarya added/updated grids as part of 16133, even though below grids are for same domain , they differ by the If condition -end-->  

  
  <!-- columns="Year[EditableGridReadOnly=true],Make[EditableGridReadOnly=true]
   if="Type:!eq:E" ChangeAction[EditableGridReadOnly=true] />  K - 17Oct-->

<!--   51797 ticket / Bernard / 0721 -->
<!--  <gridPanel domain="Custom.LocationSchedule" title="Terminal Locations" columns="&amp;LocationNumber,&amp;Street1,City,State,PostalCode,Custom1Code,Custom2Code,CustomMoney1" />--> 
  
  <gridPanel domain="WorkflowLog" title="Logs"  if="Status:eq:R"
    filter="ParentID={ProposalID-#}&amp;&amp;ParentDomainID=60" inlineEdit="false" linkType="ViewPopup"/>
  
<!--   51797 ticket / Bernard / 0721 -->
  <!--<gridPanel domain="Custom.LocationSchedule" title="Locations" if="Status:eq:R"
    filter="ProposalID={ProposalID-#}" inlineEdit="false" linkType="ViewPopup" hideNewLink="true"/>-->
  
  
  <gridPanel domain="Custom.PropertySchedule" title="Properties" if="Status:eq:R"
    filter="ProposalID={ProposalID-#}" inlineEdit="false" linkType="ViewPopup" hideNewLink="true"/>

<!--<gridPanel domain="PolicyChangesPanel" filter="ProposalID={ProposalID-#}" title="Endorsement Changes" if="Status:eq:E"
    columns="Member,ChangeType,&amp;ChangeAction,Status,StartDate,BoundDate,EntryUser,RecalcPremium,GeneratedSummary" />-->
  
  <!--<gridPanel domain="PolicyChange"  title="Endorsement Changes" columns="ChangeType,&amp;ChangeAction[Title=Change],Status,StartDate[Title=Change Effective Date],BoundDate,GeneratedSummary[Title=Summary],EntryUser[Title=Changed By],RecalcPremium"/>-->
  
  
<gridPanel domain="Custom.LossHistorySchedule" columns="Coverage[EditableGridReadOnly=true],LossYear[EditableGridReadOnly=true][Title=Policy Effective Year],PolicyExpirationYear[EditableGridReadOnly=true][Title=Policy Expiration Year],CovgYear[Align=Right][EditableGrid=true][Title=Covg Year N/A],NumberOfClaims,AmountPaid[Title=Total Incurred]" filter="ProposalID={ProposalID-#}" 
   editableGrid="true" inlineEdit="true" linkType="EditPopup" showAllLink="true"  sort = "Coverage.Description , LossYear DESC " />
   
  
  
 <!--Swap header name to include DBA (4579)--> 
  <gridPanel if="Custom15Code:eq:dispcd[CE]" domain="Custom.TimbyYardLocationSchedule" 
    title="Storage and Yard Location Schedule" 
    columns="isSelected[Title=Hazard Hub],&amp;LocationNumber[EditableGrid=false][Title=Loc#],StreetAddress[EditableGrid=true],City[EditableGrid=true],State[EditableGrid=true],ZipCode[EditableGrid=true],MatchLevel[EditableGrid=true],MatchScore[EditableGrid=true],
	WildFireScore[EditableGrid=true],
	DistancetoCoastDistance[EditableGrid=true][Title= Distance to Coast],
	WindScore[EditableGrid=true],
	HurricaneScore[EditableGrid=true][Title= Hurricane Score],
	HailScore[EditableGrid=true],
	HazardHubFloodScore[EditableGrid=true][Title= HH Flood Score],
	DistncetoSignfcntFloodParametersElevationindiff100[EditableGrid=true][Title=Elevation in difference 100],
	EarthquakeScore[EditableGrid=true],
	Tornadoscore[EditableGrid=true]" filter="ProposalID={ProposalID-#}" 
      inlineEdit="true"  editableGrid="true"  SaveAndContinue="TrueWithValidations"/>
  
  <panel if="Custom15Code:eq:dispcd[CE]">   
    <column>    
      <section> 
        <html>       
          <div style="float:right">   
            <!-- <p>Click on the below button to see Hazard Hub scores.</p> -->      
            <button type="button" id="hhRisk" onclick="hhRisk();"><b>Call Hazard Hub For Selected</b></button>       
          </div>  
           <div style="float:right">         
            <!-- <p>Click on the below button to see Hazard Hub scores.</p> -->           
            <button type="button" id="refresh" onclick="refresh();"><b>Refresh Hazard Hub Score</b></button>           
          </div>  
      </html>      
      </section>   
    </column>   
  </panel> 
  
  <gridPanel if="Custom15Code:eq:dispcd[CE]&amp;&amp;Custom30Code:eq:dispcd[IM7000]&amp;&amp;Custom32Code:eq:dispcd[SE]"  domain="Custom.TimbyEquipment" title="Equipment Schedule" filter="ProposalID={ProposalID-#}" 
    inlineEdit="true" linkType="EditPopup" showAllLink="true" editableGrid="true" columns="&amp;EquipmentType[Title=Type][EditableGrid=true],DescofCoveredProperty[Title=Description of Covered Property][EditableGrid=true][Value='123'],EquipmentValuation[Title=Valuation][EditableGrid=true],Value[Align=Left][EditableGrid=true][Format=C0],Deductible[Title=Deductible][EditableGrid=true][EditableGridRequired=true]" />
  
  <!--Start moved the Loss payee schedule below Equipment schedule for BUG 57433 Namrata-->
  <gridPanel if="CustomBool125:eq:true"
      domain="Custom.LossPayableSchedule"
      title="Payable Schedule" 
      filter="ProposalID={ProposalID-#}" 
      columns="&amp;LocationNumber[Title=Location Number], Address[Align=Left], CoveredProperty[Align=Left], NameandAddressofLossPayee[Align=Left]"
      inlineEdit="true"
      editableGrid="true"
      SaveAndContinue="true"/>
    <!--End moved the Loss payee schedule below Equipment schedule for BUG 57433 Namrata-->
  
   <scriptPanel>
    //ISSUE 49077: Rey Jaropay - adjust width so label will not display on multiple lines  
    origami.pageComplete(function(){


      //ISSUE 51797 | Bernard | Set default to NO stormValue

          setDefaultStormValue();

         $('.custom_locationschedule > tbody > tr').click(function(index, tr) {
      
           if($('td:eq(10) :input',this).val() == 'False'){
             $('td:eq(10) :input',this).val('False');
           } 
           else {
             $('td:eq(10) :input',this).val("True");
           }
    
    
           if($('td:eq(9) :input',this).val() == 'False'){
               $('td:eq(9) :input',this).val('False');
           } 
           else {
             $('td:eq(9) :input',this).val("True");
           }
    
    
           if($('td:eq(8) :input',this).val() == 'False'){
               $('td:eq(8) :input',this).val('False');
           } 
           else {
               $('td:eq(8) :input',this).val("True");
           }


         });


        function setDefaultStormValue() {
              $('.custom_locationschedule tr').eq(2).each(function() {
                 var storm_inc =  $('td:eq(10) :input',this).val('False');
                 var flood_inc =  $('td:eq(9) :input',this).val('False');
                 var earth_inc =  $('td:eq(8) :input',this).val('False');
              });
        }

      //END 51797


        $(".excludedProperty label").css("width","20em");
        $(".excludedPropertyText label").hide();
        $(".excludedPropertyText span").css("padding-left","0.5em");


       //Checked if MTC is included in the coverage.
       //BUG 52586
       var proposalID = parseInt($("#ProposalID").val());
       var url = getServerAppRoot() + "dynamic/jsonQuery?";
       var filter="CoverageID==10023&amp;&amp;ProposalID==" + proposalID;
       $.ajax({
          url: url,
          data: { typeName:"ProposalCoverage", take: 1, filter:filter, select:"ProposalCoverageID" }, 
          success:function(rows){ 
              console.log(rows);
              if(rows.status == "success" &amp;&amp; rows.list.length == 0)
                $("div[aria-labelledby='title_ExcludedProperty']").hide(); 
           } 
       });

        $(".excludedPropertyText span").css("float","left");
        $(".excludedPropertyText span").css("width","20em");
        addCheckToExcludedPropertyText(); 
    });

      //Add checkbox to excluded free form text
      function addCheckToExcludedPropertyText(){
        var textFields = ["CustomText27", "CustomText62", "CustomText63", "CustomText64"];
        var imgElement = "&lt;div> &lt;img alt='yes' src='/content/images/yes_check.gif' class='inlineIcon'>&lt;/img>&lt;/div>";
        for(let i = 0; i &lt; textFields.length; i++){
          console.log($("li[for='"+ textFields[i] +"']"));
          if($("li[for='"+ textFields[i] +"']").length > 0)
          {
            $("li[for='"+ textFields[i] +"']").append(imgElement);  
          }
        }
      }
  //End ISSUE 49077:


  //Start ISSUE 51878: Rey Jaropay: Add banner if policy change more than specified count.  
  origami.pageComplete(function(){
    //toggleBanner();
  })
  function toggleBanner(){
      var maxChange = 15;
      var currChange = 0;
      var proposalID = parseInt($("#ProposalID").val());
      var filter ='ProposalID=' + proposalID + ' &amp;&amp;(Status="P"||Status="E")'; 
      $.ajax({
        url: getServerAppRoot() + "dynamic/jsonQuery?",
        data: {
          typeName:"PolicyChange", take: 50, filter:filter,  select:"ProposalID",
        },  
        success:function(rows){  
          if (rows.status=="success") { 
            currChange = rows.list.length;
            var bannerFlag = (currChange > maxChange) ? true : false; 
            var message = "&lt;span> Note: There are a total of " + currChange + " policy changes &lt;/span>";
            if(bannerFlag){
              $("#Banner").show();
              $("#Banner").addClass("message warning");
              $("#Banner").append(message);
              $("#Banner").insertBefore("table[data-origamidomain='policychange']:first");
              
              $("#Banner").click(function() { 
                $("#Banner").fadeToggle();
              });

            }else{
              $("#Banner").hide();
            }
           
          }
        } 
      }); 
  }
  //END ISSUE 51878:


     origami.pageComplete(function(){  
//Changes of Bug-16133-37797-start
$(".lozenge-inactive").css({"background-color":"red","color":"white"});
$('.custom_vehicleschedule.editableDataGrid.striped.dataGrid tbody').on("DOMSubtreeModified", function () {
 $(".lozenge-inactive").css({"background-color":"red","color":"white"});
});
//Changes of Bug-16133-37797-end
		$(" table[class = 'custom_timbyyardlocationschedule editableDataGrid striped dataGrid'] tr[class='editablegridnewrow']").hide();
		$('.Custom_TimbyYardLocationSchedule.dataGrid').attr('style','width:200%');          });


    
  </scriptPanel>
  
  
 <scriptPanel>	
//get Motor Carrier Name
var newName = $(".properties").find("a[href='dba_update_url']")[0].innerText;

//get form title
var titleName  = $(".pagetitle")[0].innerText;

//DBA name exist
if(!titleName.includes(" DBA ")){
    
    // Update page title with DBA
     if(newName.split('DBA')[1].length > 0) $(".pagetitle")[0].innerText = titleName + ' DBA '+newName.split(' DBA ')[1];
 
}
if (newName.split(' DBA')[1].length == 0){

    $(".properties").find("a[href='dba_update_url']")[0].innerText = newName.split(' DBA')[0];


}

//get MemberID
var MemberID =  $("#MemberID").attr('value');

//add url to the Motor Carrier Name field 
$(".properties").find("a[href='dba_update_url']").attr('href', '/Origami/Members/View/'+MemberID);


</scriptPanel> 
  
<scriptPanel snippetName="LoadStateLabel"/>  
  $("#CustomNarrative3").val("01/01/2024");
<scriptPanel>
  $(function() {
  $('#CustomMoney23').html(Math.floor($('#CustomMoney23').html()));
});
</scriptPanel>
  
<scriptPanel>
$(()=> {
  loadStateLabel();
});
function downloadCABjson() {
    var data = $("#CustomNarrative3").val();
    var filename = $("li[for='CustomText28'] span").text() + ".json";
    var type = "application/json";
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
$(()=> {
  if ($("#Type").val() == "E" &amp;&amp; $("#useraction_addchange").length) {
    $("#useraction_edit").hide();
    $("#useraction_addchange").css("font-size", "120%").css("font-weight", "bold");
    $("#useraction_addchange").parent().insertAfter( $("#useraction_edit").parent() );
  }
});
</scriptPanel>
  
  
  <scriptPanel>		
    origami.pageComplete(function(){

   // 51797 | Multiple display Bugs | Bernard 	
   $("div[data-panel-key-desc='(Panel Key: SchedulesPanel-Custom.LocationSchedule)']").hide();
      
     //-----------------------------CE related changes start |Prakhar -------------------------------------
        
        /* Start|Bug-55913|Aisiri */
        $("li[label='Property Covered Coverage Form']").hide();
        /* End|Bug-55913|Aisiri */

        var a=$("li[for='Custom15Code']").text();
        if(a == 'Policy Type: Non-Admitted Monoline Contractors Equipment'){
           $("li[label='Calc. Number of Power Units']").hide();
           $("div[data-panel-key-desc='(Panel Key: SchedulesPanel-Custom.InsuranceHistory)']").hide();
        
         }
      


    $("li[for='CustomBool102'] label").width(700);
    $("li[for='CustomBool103'] label").width(700);
    $("li[for='CustomBool104'] label").width(700);
    $("li[for='CustomBool105'] label").width(700);
    $("li[for='CustomBool106'] label").width(700);
    $("li[for='CustomBool107'] label").width(700);
    $("li[for='CustomBool108'] label").width(700);

    

    //-----------------------------CE related changes end |Prakhar -------------------------------------

        // fetch proposal fields to be displayed in bind screen	
        var comSelect = $("li[label|='Commission']");
        var comPSelect = $("li[label|='Commission Percentage']");
        var commission  = (comSelect.length > 0) ? comSelect.children().eq(1)[0].innerText : '';
        var commissionPercent = (comPSelect.length > 0) ? comPSelect.children().eq(1)[0].innerText : '';

        console.log('com: '+commission);
        console.log('com%: '+commissionPercent);

        var iniBindUrl = $('button#useraction_bind').attr("href");
        // added removal of special characters for those fields below to prevent problem on attaching to bind url
        var newBindUrl = iniBindUrl + '?Commission=' + commission.replace('$','') + '|' + commissionPercent.replace('%','');

        console.log('clean url values: '+ newBindUrl);
    
        $('button#useraction_bind').attr("href", newBindUrl);
        
      // Add an "All Vehicles" link to the Vehicle grid.
      if ( $('a:contains("All Vehicles")').length == 0 ) 
      {
        var allVehicleLink = "&lt;a href='/Origami/Custom__VehicleSchedule?proposalID=" + $('#ProposalID').val() + "' class='panelaction_showAll'>All Vehicles&lt;/a>"
        $('a:contains("New Vehicle Schedule")').after( allVehicleLink );
      }
//Changes of Bug-16133-start
//$(".lozenge-inactive").css({"background-color":"red","color":"white"});
//Changes of Bug-16133-end
    });
  </scriptPanel>
  
  <scriptPanel>
    // Created by Harry T for 16361 to calculate the Minimum Earned Premium Amount
    $(function() {
      var premium =  $('li[label="Premium (Original)"] span').text().replace('$','').replace(',','')|| $('li[label="Premium (Prorated)"] span').text().replace('$','').replace(',','');
      var mep = $('li[for="CustomNumber48"] span').text();
      
      //Aishwarya changes for 14310 start
    if(mep){
     
         mepAmount = parseInt(mep)*0.01* parseInt(premium.replace(',','').replace(',','')); //Changed Number to ParseInt and replace the commas if any extra were there by Tejasri for 40988 Card
        console.log("Premium:" +parseInt(premium.replace(',','')) )
        console.log({premium:premium,mep:mep,mepAmount: mepAmount});
        $('li[for="CustomNumber48"] span').html(mep+'% <span style="padding-left:5rem">$'+mepAmount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'</span>');
        //Added by Rudra 
       // $('li[for="CustomNumber48"] span').html(mep+'% <span style="padding-left:5rem">$'+Math.floor(mepAmount)+'</span>');
     }
    });

 </scriptPanel>
  

 <scriptPanel>
	function hhRisk(){  
         $('.custom_timbyyardlocationschedule tbody').find('tr').each(function()      
		{            
		 var currentRow = $(this).closest("tr").next(); 
		 currentRow=currentRow.next(); 
		 console.log('Current Row {' + currentRow + '}');   
		 var col1=currentRow.find("td:eq(0)").text(); 
		 console.log('Column1 {' + col1 + '}');   
		 if(col1 === ""){ 
						return false; 
						}
		 if( col1 != null || col1 !=""){ 
					   //editableGrid.saveRow($(this).closest("tr"),event);
						 console.log('In IF');
						 editableGrid.saveRow(currentRow,event);
		  }         });          }   
</scriptPanel>
  
  <scriptPanel>
	function refresh(){  
         location.reload();
  
  }
</scriptPanel>
  
  <scriptPanel>
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const HideStuff = async (doDelay=true) => {
    {
      // Wait a bit before running
      if (doDelay) {
        await delay(1000); // Wait 1 second
      }
      $("table[data-origamidomain='custom_losshistoryschedule'] .editablegridnewrow").hide(); // Hide the newrow row.
         $('a[href*="Custom__LossHistorySchedule"]').parent().hide();    //CE BUG 36996 | above query is not working so added this to hide the new row option | Prakhar
      $("table[data-origamidomain='custom_losshistoryschedule'] button[title='Click to Delete']").hide(); // Hide the delete-button.
    }
	}

    $(function()
    {
      HideStuff(true);
      // If anything changes on the page, also call this function.
      $('.inlineExternal').bind('DOMSubtreeModified', function(e) {
        if (e.target.innerHTML.length > 0) {
          HideStuff(false);
        }
      });
    });
  </scriptPanel>
  <!-- 36200 Tejasri Changes start -->
   <scriptPanel>
    origami.pageComplete(function(){
		var a=$("li[for='Custom15Code']").text();
		if(a == 'Policy Type: Non-Admitted Monoline Contractors Equipment'){
            $('#gridpanel_custom_locationschedule').hide();
            
			if($('.proposalcoverage.striped.dataGrid tbody > tr td:eq(4)').text() != '' &amp;&amp; $('.proposalcoverage.striped.dataGrid tbody > tr td:eq(4)').text().indexOf('$') &lt; 0 ){
					var text = "$"+$('.proposalcoverage.striped.dataGrid tbody > tr td:eq(4)').text(); 
					$('.proposalcoverage.striped.dataGrid tbody > tr td:eq(4)').text(text);
					console.log("Limittttt:" + $('.proposalcoverage.striped.dataGrid tbody > tr td:eq(4)').text());
			}
		   if($('.proposalcoverage.striped.dataGrid tbody > tr td:eq(5)').text() != ''  &amp;&amp; $('.proposalcoverage.striped.dataGrid tbody > tr td:eq(5)').text().indexOf('$') &lt; 0 ){
				/* Start|Bug-55913|Aisiri */
                if($("li[label='Property Covered Coverage Form'] span").text() == 'Scheduled Equipment'){
                  $('.proposalcoverage.striped.dataGrid tbody > tr td:eq(5)').text('See Schedule');
                }
                
                else{
                /* End|Bug-55913|Aisiri */

                var dtext = "$"+$('.proposalcoverage.striped.dataGrid tbody > tr td:eq(5)').text();
				$('.proposalcoverage.striped.dataGrid tbody > tr td:eq(5)').text(dtext);
				console.log("Deddd:" + $('.proposalcoverage.striped.dataGrid tbody > tr td:eq(5)').text());

                /* Start|Bug-55913|Aisiri */
                }
                /* End|Bug-55913|Aisiri */
			}
		}
	});
   </scriptPanel>
  
   <!-- 36200 Tejasri Changes End -->
  
  <!-- hide the reporting condition fields based on whether reporting conditions are applied or not - BUG 61628 -Namrata -->
  <scriptPanel>
   
     origami.pageComplete(function(){
    var reporting1 = $("#content ul li[label='Your Contractors Equipment'] span").text();
    var reporting2 = $("#content ul li[label='Leased or Rented from others'] span").text();
    var reporting3 = $("#content ul li[label='Leased or Rented to others'] span").text();
    if (reporting1 != 'Reporting Conditions Apply'){
       $("#content ul li[label='Reporting Rate $ per $100 Avg Values']").hide();
        $("#content ul li[label='Deposit Premium']:eq(0)").hide();
  } 
    if (reporting2 != 'Reporting Conditions Apply'){
       $("#content ul li[label='Reporting Rate $ per $100 of Leased/Rented to Others Receipts']").hide();
       $("#content ul li[label='Reporting Period']:eq(0)").hide(); 
        $("#content ul li[label='Deposit Premium']:eq(1)").hide();
  } 
    if (reporting3 != 'Reporting Conditions Apply'){
       $("#content ul li[label='Reporting Rate $ per $100 of Equipment Expenditures']").hide();
       $("#content ul li[label='Reporting Period']:eq(1)").hide(); 
        $("#content ul li[label='Deposit Premium']:eq(2)").hide();
  }

});
  </scriptPanel>
  <!-- BUG 61628 changes end - Namrata -->

  <!--Bug 57403, 57191 | Timby CE Configuration - Start | Himanshu-->
  <scriptPanel>
    document.addEventListener('DOMContentLoaded', function() {
        var valueSpans = document.querySelectorAll('.dollar .value');
        valueSpans.forEach(function(span) {
            var currentValue = span.textContent;
            var newValue = '$' + currentValue;
            span.textContent = newValue;
        });
    });
    $(".field label").css("width","40%"); //Bug 57191 | Added Cssclass = .field on Timby CE pages | Himanshu
  </scriptPanel>
  <!--Bug 57403, 57191 | Timby CE Configuration - End | Himanshu-->

</form>
