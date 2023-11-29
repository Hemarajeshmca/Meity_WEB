var responseDataFormat = "JSON";

function retrieveEquipmentReportRequest(data)
{
    /**
     * @member {retrieveEquipmentReportRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveEquipmentReportRequestcontext(data['context']);
    }
}

function retrieveEquipmentReportRequestcontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    /**
     * @member {String} userId
     */
    this['userId'] = null;
    
    /**
     * @member {String} localeId
     */
    this['localeId'] = null;
    
    /**
     * @member {retrieveEquipmentReportRequestHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('orgnId'))
            this['orgnId'] = data['orgnId'];
        
        if(data.hasOwnProperty('locnId'))
            this['locnId'] = data['locnId'];
        
        if(data.hasOwnProperty('userId'))
            this['userId'] = data['userId'];
        
        if(data.hasOwnProperty('localeId'))
            this['localeId'] = data['localeId'];
        
        if(data.hasOwnProperty('Header') && data['Header'] != null)
            this['Header'] = new retrieveEquipmentReportRequestHeader(data['Header']);
    }
}

function retrieveEquipmentReportRequestHeader(data)
{
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('from_date'))
            this['from_date'] = data['from_date'];
        
        if(data.hasOwnProperty('to_date'))
            this['to_date'] = data['to_date'];
        
    }
}

function retrieveEquipmentReportResponse(data, format)
{
    /**
     * @member {retrieveEquipmentReportResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveEquipmentReportResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveEquipmentReportResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveEquipmentReportResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveEquipmentReportResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveEquipmentReportResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveEquipmentReportResponseApplicationException(data)
{
    /**
    * @member {String} sessionId
    */
    this['errorNumber'] = "";
    
    /**
    * @member {String} sessionId
    */
    this['errorDescription'] = "";
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("errorNumber")[0].lastChild != null)
                this['errorNumber'] = data.getElementsByTagName("errorNumber")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("errorDescription")[0].lastChild != null)
                this['errorDescription'] = data.getElementsByTagName("errorDescription")[0].lastChild.nodeValue;
        }
        else {
            this['errorNumber'] = data['errorNumber'];
            this['errorDescription'] = data['errorDescription'];
        }
    }
}

function retrieveEquipmentReportResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    /**
     * @member {retrieveEquipmentReportResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveEquipmentReportResponseLeaseDetails} LeaseDetails
     */
    this['LeaseDetails'] = null;
    
    /**
     * @member {retrieveEquipmentReportResponseEquipmentDetails} EquipmentDetails
     */
    this['EquipmentDetails'] = null;
    
    /**
     * @member {retrieveEquipmentReportResponseEquipmentStatus} EquipmentStatus
     */
    this['EquipmentStatus'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveEquipmentReportResponseHeader(data.getElementsByTagName("Header")[0]);
            
            LeaseDetails = [];
            for(LeaseDetailschildi = 0; LeaseDetailschildi < data.getElementsByTagName("LeaseDetails").length; LeaseDetailschildi++)
            {
                LeaseDetails.push(new retrieveEquipmentReportResponseLeaseDetails(data.getElementsByTagName("LeaseDetails")[LeaseDetailschildi]));
            }
            if(data.getElementsByTagName("LeaseDetails").length > 0)
                this['LeaseDetails'] = LeaseDetails;
            
            EquipmentDetails = [];
            for(EquipmentDetailschildi = 0; EquipmentDetailschildi < data.getElementsByTagName("EquipmentDetails").length; EquipmentDetailschildi++)
            {
                EquipmentDetails.push(new retrieveEquipmentReportResponseEquipmentDetails(data.getElementsByTagName("EquipmentDetails")[EquipmentDetailschildi]));
            }
            if(data.getElementsByTagName("EquipmentDetails").length > 0)
                this['EquipmentDetails'] = EquipmentDetails;
            
            EquipmentStatus = [];
            for(EquipmentStatuschildi = 0; EquipmentStatuschildi < data.getElementsByTagName("EquipmentStatus").length; EquipmentStatuschildi++)
            {
                EquipmentStatus.push(new retrieveEquipmentReportResponseEquipmentStatus(data.getElementsByTagName("EquipmentStatus")[EquipmentStatuschildi]));
            }
            if(data.getElementsByTagName("EquipmentStatus").length > 0)
                this['EquipmentStatus'] = EquipmentStatus;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveEquipmentReportResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('LeaseDetails') && data['LeaseDetails'] != null)
            {
                LeaseDetails = [];
                for(LeaseDetailsindex = 0; LeaseDetailsindex < data['LeaseDetails'].length; LeaseDetailsindex++)
                {
                    LeaseDetails.push(new retrieveEquipmentReportResponseLeaseDetails(data['LeaseDetails'][LeaseDetailsindex]));
                }
                this['LeaseDetails'] = LeaseDetails;
            }
            
            
            if(data.hasOwnProperty('EquipmentDetails') && data['EquipmentDetails'] != null)
            {
                EquipmentDetails = [];
                for(EquipmentDetailsindex = 0; EquipmentDetailsindex < data['EquipmentDetails'].length; EquipmentDetailsindex++)
                {
                    EquipmentDetails.push(new retrieveEquipmentReportResponseEquipmentDetails(data['EquipmentDetails'][EquipmentDetailsindex]));
                }
                this['EquipmentDetails'] = EquipmentDetails;
            }
            
            
            if(data.hasOwnProperty('EquipmentStatus') && data['EquipmentStatus'] != null)
            {
                EquipmentStatus = [];
                for(EquipmentStatusindex = 0; EquipmentStatusindex < data['EquipmentStatus'].length; EquipmentStatusindex++)
                {
                    EquipmentStatus.push(new retrieveEquipmentReportResponseEquipmentStatus(data['EquipmentStatus'][EquipmentStatusindex]));
                }
                this['EquipmentStatus'] = EquipmentStatus;
            }
        }
    }
}

function retrieveEquipmentReportResponseHeader(data)
{
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['from_date'] = (data.getElementsByTagName("from_date")[0].lastChild != null) ? data.getElementsByTagName("from_date")[0].lastChild.nodeValue : "";
            
            this['to_date'] = (data.getElementsByTagName("to_date")[0].lastChild != null) ? data.getElementsByTagName("to_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['from_date'] = data['from_date'];
            
            this['to_date'] = data['to_date'];
        }
    }
}

function retrieveEquipmentReportResponseLeaseDetails(data)
{
    /**
     * @member {Int32} leasedetails_rowid
     */
    this['leasedetails_rowid'] = null;
    
    /**
     * @member {String} of_leases
     */
    this['of_leases'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} esp_name
     */
    this['esp_name'] = null;
    
    /**
     * @member {String} lease_hours
     */
    this['lease_hours'] = null;
    
    /**
     * @member {Decimal} lease_revenue
     */
    this['lease_revenue'] = null;
    
    /**
     * @member {Decimal} cash
     */
    this['cash'] = null;
    
    /**
     * @member {Decimal} cashless
     */
    this['cashless'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['leasedetails_rowid'] = parseInt(data.getElementsByTagName("leasedetails_rowid")[0].lastChild.nodeValue);
            
            this['of_leases'] = (data.getElementsByTagName("of_leases")[0].lastChild != null) ? data.getElementsByTagName("of_leases")[0].lastChild.nodeValue : "";
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['esp_name'] = (data.getElementsByTagName("esp_name")[0].lastChild != null) ? data.getElementsByTagName("esp_name")[0].lastChild.nodeValue : "";
            
            this['lease_hours'] = (data.getElementsByTagName("lease_hours")[0].lastChild != null) ? data.getElementsByTagName("lease_hours")[0].lastChild.nodeValue : "";
            
            this['lease_revenue'] = parseFloat(data.getElementsByTagName("lease_revenue")[0].lastChild.nodeValue);
            
            this['cash'] = parseFloat(data.getElementsByTagName("cash")[0].lastChild.nodeValue);
            
            this['cashless'] = parseFloat(data.getElementsByTagName("cashless")[0].lastChild.nodeValue);
        }
        else {
            this['leasedetails_rowid'] = data['leasedetails_rowid'];
            
            this['of_leases'] = data['of_leases'];
            
            this['esp_code'] = data['esp_code'];
            
            this['esp_name'] = data['esp_name'];
            
            this['lease_hours'] = data['lease_hours'];
            
            this['lease_revenue'] = data['lease_revenue'];
            
            this['cash'] = data['cash'];
            
            this['cashless'] = data['cashless'];
        }
    }
}

function retrieveEquipmentReportResponseEquipmentDetails(data)
{
    /**
     * @member {Int32} equip_details_rowid
     */
    this['equip_details_rowid'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} esp_name
     */
    this['esp_name'] = null;
    
    /**
     * @member {String} lease_hours
     */
    this['lease_hours'] = null;
    
    /**
     * @member {Decimal} lease_revenue
     */
    this['lease_revenue'] = null;
    
    /**
     * @member {Decimal} cash
     */
    this['cash'] = null;
    
    /**
     * @member {Decimal} cashless
     */
    this['cashless'] = null;
    
    /**
     * @member {Decimal} total_revenue
     */
    this['total_revenue'] = null;
    
    /**
     * @member {Decimal} total_rev_cash_per
     */
    this['total_rev_cash_per'] = null;
    
    /**
     * @member {Decimal} total_rev_cashless_per
     */
    this['total_rev_cashless_per'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['equip_details_rowid'] = parseInt(data.getElementsByTagName("equip_details_rowid")[0].lastChild.nodeValue);
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['esp_name'] = (data.getElementsByTagName("esp_name")[0].lastChild != null) ? data.getElementsByTagName("esp_name")[0].lastChild.nodeValue : "";
            
            this['lease_hours'] = (data.getElementsByTagName("lease_hours")[0].lastChild != null) ? data.getElementsByTagName("lease_hours")[0].lastChild.nodeValue : "";
            
            this['lease_revenue'] = parseFloat(data.getElementsByTagName("lease_revenue")[0].lastChild.nodeValue);
            
            this['cash'] = parseFloat(data.getElementsByTagName("cash")[0].lastChild.nodeValue);
            
            this['cashless'] = parseFloat(data.getElementsByTagName("cashless")[0].lastChild.nodeValue);
            
            this['total_revenue'] = parseFloat(data.getElementsByTagName("total_revenue")[0].lastChild.nodeValue);
            
            this['total_rev_cash_per'] = parseFloat(data.getElementsByTagName("total_rev_cash_per")[0].lastChild.nodeValue);
            
            this['total_rev_cashless_per'] = parseFloat(data.getElementsByTagName("total_rev_cashless_per")[0].lastChild.nodeValue);
        }
        else {
            this['equip_details_rowid'] = data['equip_details_rowid'];
            
            this['esp_code'] = data['esp_code'];
            
            this['esp_name'] = data['esp_name'];
            
            this['lease_hours'] = data['lease_hours'];
            
            this['lease_revenue'] = data['lease_revenue'];
            
            this['cash'] = data['cash'];
            
            this['cashless'] = data['cashless'];
            
            this['total_revenue'] = data['total_revenue'];
            
            this['total_rev_cash_per'] = data['total_rev_cash_per'];
            
            this['total_rev_cashless_per'] = data['total_rev_cashless_per'];
        }
    }
}

function retrieveEquipmentReportResponseEquipmentStatus(data)
{
    /**
     * @member {Int32} equip_status_rowid
     */
    this['equip_status_rowid'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} esp_name
     */
    this['esp_name'] = null;
    
    /**
     * @member {String} equipment_code
     */
    this['equipment_code'] = null;
    
    /**
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
    /**
     * @member {String} sixty_days
     */
    this['sixty_days'] = null;
    
    /**
     * @member {String} ninety_days
     */
    this['ninety_days'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['equip_status_rowid'] = parseInt(data.getElementsByTagName("equip_status_rowid")[0].lastChild.nodeValue);
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['esp_name'] = (data.getElementsByTagName("esp_name")[0].lastChild != null) ? data.getElementsByTagName("esp_name")[0].lastChild.nodeValue : "";
            
            this['equipment_code'] = (data.getElementsByTagName("equipment_code")[0].lastChild != null) ? data.getElementsByTagName("equipment_code")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['sixty_days'] = (data.getElementsByTagName("sixty_days")[0].lastChild != null) ? data.getElementsByTagName("sixty_days")[0].lastChild.nodeValue : "";
            
            this['ninety_days'] = (data.getElementsByTagName("ninety_days")[0].lastChild != null) ? data.getElementsByTagName("ninety_days")[0].lastChild.nodeValue : "";
        }
        else {
            this['equip_status_rowid'] = data['equip_status_rowid'];
            
            this['esp_code'] = data['esp_code'];
            
            this['esp_name'] = data['esp_name'];
            
            this['equipment_code'] = data['equipment_code'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['sixty_days'] = data['sixty_days'];
            
            this['ninety_days'] = data['ninety_days'];
        }
    }
}

