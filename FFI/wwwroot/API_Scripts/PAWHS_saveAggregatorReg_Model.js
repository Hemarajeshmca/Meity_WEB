var responseDataFormat = "JSON";

function PAWHS_saveAggregatorRegRequest(data)
{
    /**
     * @member {PAWHS_saveAggregatorRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveAggregatorRegRequestcontext(data['context']);
    }
}

function PAWHS_saveAggregatorRegRequestcontext(data)
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
     * @member {PAWHS_saveAggregatorRegRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveAggregatorRegRequestAddress} Address
     */
    this['Address'] = null;
    
    /**
     * @member {PAWHS_saveAggregatorRegRequestBank} Bank
     */
    this['Bank'] = null;
    
    /**
     * @member {PAWHS_saveAggregatorRegRequestFIG} FIG
     */
    this['FIG'] = null;
    
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
            this['Header'] = new PAWHS_saveAggregatorRegRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Address') && data['Address'] != null)
        {
            Address = [];
            for(Addressindex = 0; Addressindex < data['Address'].length; Addressindex++)
            {
                Address.push(new PAWHS_saveAggregatorRegRequestAddress(data['Address'][Addressindex]));
            }
            this['Address'] = Address;
        }
        
        if(data.hasOwnProperty('Bank') && data['Bank'] != null)
        {
            Bank = [];
            for(Bankindex = 0; Bankindex < data['Bank'].length; Bankindex++)
            {
                Bank.push(new PAWHS_saveAggregatorRegRequestBank(data['Bank'][Bankindex]));
            }
            this['Bank'] = Bank;
        }
        
        if(data.hasOwnProperty('FIG') && data['FIG'] != null)
        {
            FIG = [];
            for(FIGindex = 0; FIGindex < data['FIG'].length; FIGindex++)
            {
                FIG.push(new PAWHS_saveAggregatorRegRequestFIG(data['FIG'][FIGindex]));
            }
            this['FIG'] = FIG;
        }
    }
}

function PAWHS_saveAggregatorRegRequestHeader(data)
{
    /**
     * @member {Int32} orgn_rowid
     */
    this['orgn_rowid'] = null;
    
    /**
     * @member {String} aggregator_code
     */
    this['aggregator_code'] = null;
    
    /**
     * @member {String} aggregator_type
     */
    this['aggregator_type'] = null;
    
    /**
     * @member {String} fpo_code
     */
    this['fpo_code'] = null;
    
    /**
     * @member {String} aggregator_name
     */
    this['aggregator_name'] = null;
    
    /**
     * @member {String} aggregator_ll_name
     */
    this['aggregator_ll_name'] = null;
    
    /**
     * @member {String} orgn_level
     */
    this['orgn_level'] = null;
    
    /**
     * @member {String} facilitator_code
     */
    this['facilitator_code'] = null;
    
    /**
     * @member {String} facilitator_ll_code
     */
    this['facilitator_ll_code'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} member_ll_name
     */
    this['member_ll_name'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('orgn_rowid'))
            this['orgn_rowid'] = data['orgn_rowid'];
        
        if(data.hasOwnProperty('aggregator_code'))
            this['aggregator_code'] = data['aggregator_code'];
        
        if(data.hasOwnProperty('aggregator_type'))
            this['aggregator_type'] = data['aggregator_type'];
        
        if(data.hasOwnProperty('fpo_code'))
            this['fpo_code'] = data['fpo_code'];
        
        if(data.hasOwnProperty('aggregator_name'))
            this['aggregator_name'] = data['aggregator_name'];
        
        if(data.hasOwnProperty('aggregator_ll_name'))
            this['aggregator_ll_name'] = data['aggregator_ll_name'];
        
        if(data.hasOwnProperty('orgn_level'))
            this['orgn_level'] = data['orgn_level'];
        
        if(data.hasOwnProperty('facilitator_code'))
            this['facilitator_code'] = data['facilitator_code'];
        
        if(data.hasOwnProperty('facilitator_ll_code'))
            this['facilitator_ll_code'] = data['facilitator_ll_code'];
        
        if(data.hasOwnProperty('member_name'))
            this['member_name'] = data['member_name'];
        
        if(data.hasOwnProperty('member_ll_name'))
            this['member_ll_name'] = data['member_ll_name'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveAggregatorRegRequestAddress(data)
{
    /**
     * @member {Int32} orgnaddr_rowid
     */
    this['orgnaddr_rowid'] = null;
    
    /**
     * @member {String} addr_type
     */
    this['addr_type'] = null;
    
    /**
     * @member {String} orgn_addr1
     */
    this['orgn_addr1'] = null;
    
    /**
     * @member {String} orgn_addr2
     */
    this['orgn_addr2'] = null;
    
    /**
     * @member {String} orgn_country
     */
    this['orgn_country'] = null;
    
    /**
     * @member {String} orgn_state
     */
    this['orgn_state'] = null;
    
    /**
     * @member {String} orgn_dist
     */
    this['orgn_dist'] = null;
    
    /**
     * @member {String} orgn_taluk
     */
    this['orgn_taluk'] = null;
    
    /**
     * @member {String} orgn_panchayat
     */
    this['orgn_panchayat'] = null;
    
    /**
     * @member {String} orgn_village
     */
    this['orgn_village'] = null;
    
    /**
     * @member {String} orgn_pincode
     */
    this['orgn_pincode'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('orgnaddr_rowid'))
            this['orgnaddr_rowid'] = data['orgnaddr_rowid'];
        
        if(data.hasOwnProperty('addr_type'))
            this['addr_type'] = data['addr_type'];
        
        if(data.hasOwnProperty('orgn_addr1'))
            this['orgn_addr1'] = data['orgn_addr1'];
        
        if(data.hasOwnProperty('orgn_addr2'))
            this['orgn_addr2'] = data['orgn_addr2'];
        
        if(data.hasOwnProperty('orgn_country'))
            this['orgn_country'] = data['orgn_country'];
        
        if(data.hasOwnProperty('orgn_state'))
            this['orgn_state'] = data['orgn_state'];
        
        if(data.hasOwnProperty('orgn_dist'))
            this['orgn_dist'] = data['orgn_dist'];
        
        if(data.hasOwnProperty('orgn_taluk'))
            this['orgn_taluk'] = data['orgn_taluk'];
        
        if(data.hasOwnProperty('orgn_panchayat'))
            this['orgn_panchayat'] = data['orgn_panchayat'];
        
        if(data.hasOwnProperty('orgn_village'))
            this['orgn_village'] = data['orgn_village'];
        
        if(data.hasOwnProperty('orgn_pincode'))
            this['orgn_pincode'] = data['orgn_pincode'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveAggregatorRegRequestBank(data)
{
    /**
     * @member {Int32} orgnbank_rowid
     */
    this['orgnbank_rowid'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} branch_code
     */
    this['branch_code'] = null;
    
    /**
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} dflt_dr_acc
     */
    this['dflt_dr_acc'] = null;
    
    /**
     * @member {String} dflt_cr_acc
     */
    this['dflt_cr_acc'] = null;
    
    /**
     * @member {String} bank_acc_purpose
     */
    this['bank_acc_purpose'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('orgnbank_rowid'))
            this['orgnbank_rowid'] = data['orgnbank_rowid'];
        
        if(data.hasOwnProperty('bank_acc_no'))
            this['bank_acc_no'] = data['bank_acc_no'];
        
        if(data.hasOwnProperty('bank_acc_type'))
            this['bank_acc_type'] = data['bank_acc_type'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('branch_code'))
            this['branch_code'] = data['branch_code'];
        
        if(data.hasOwnProperty('ifsc_code'))
            this['ifsc_code'] = data['ifsc_code'];
        
        if(data.hasOwnProperty('dflt_dr_acc'))
            this['dflt_dr_acc'] = data['dflt_dr_acc'];
        
        if(data.hasOwnProperty('dflt_cr_acc'))
            this['dflt_cr_acc'] = data['dflt_cr_acc'];
        
        if(data.hasOwnProperty('bank_acc_purpose'))
            this['bank_acc_purpose'] = data['bank_acc_purpose'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveAggregatorRegRequestFIG(data)
{
    /**
     * @member {Int32} aggrfig_rowid
     */
    this['aggrfig_rowid'] = null;
    
    /**
     * @member {String} aggrfig_type
     */
    this['aggrfig_type'] = null;
    
    /**
     * @member {String} aggrfig_code
     */
    this['aggrfig_code'] = null;
    
    /**
     * @member {String} aggrfig_name
     */
    this['aggrfig_name'] = null;
    
    /**
     * @member {String} aggrvillage_code
     */
    this['aggrvillage_code'] = null;
    
    /**
     * @member {String} aggrvillage_name
     */
    this['aggrvillage_name'] = null;
    
    /**
     * @member {String} contact_person
     */
    this['contact_person'] = null;
    
    /**
     * @member {String} contact_no
     */
    this['contact_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('aggrfig_rowid'))
            this['aggrfig_rowid'] = data['aggrfig_rowid'];
        
        if(data.hasOwnProperty('aggrfig_type'))
            this['aggrfig_type'] = data['aggrfig_type'];
        
        if(data.hasOwnProperty('aggrfig_code'))
            this['aggrfig_code'] = data['aggrfig_code'];
        
        if(data.hasOwnProperty('aggrfig_name'))
            this['aggrfig_name'] = data['aggrfig_name'];
        
        if(data.hasOwnProperty('aggrvillage_code'))
            this['aggrvillage_code'] = data['aggrvillage_code'];
        
        if(data.hasOwnProperty('aggrvillage_name'))
            this['aggrvillage_name'] = data['aggrvillage_name'];
        
        if(data.hasOwnProperty('contact_person'))
            this['contact_person'] = data['contact_person'];
        
        if(data.hasOwnProperty('contact_no'))
            this['contact_no'] = data['contact_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveAggregatorRegResponse(data, format)
{
    /**
     * @member {PAWHS_saveAggregatorRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveAggregatorRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveAggregatorRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveAggregatorRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveAggregatorRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveAggregatorRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveAggregatorRegResponseApplicationException(data)
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

function PAWHS_saveAggregatorRegResponsecontext(data)
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
     * @member {PAWHS_saveAggregatorRegResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveAggregatorRegResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveAggregatorRegResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveAggregatorRegResponseHeader(data)
{
    /**
     * @member {Int32} orgn_rowid
     */
    this['orgn_rowid'] = null;
    
    /**
     * @member {String} aggregator_code
     */
    this['aggregator_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgn_rowid'] = parseInt(data.getElementsByTagName("orgn_rowid")[0].lastChild.nodeValue);
            
            this['aggregator_code'] = (data.getElementsByTagName("aggregator_code")[0].lastChild != null) ? data.getElementsByTagName("aggregator_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgn_rowid'] = data['orgn_rowid'];
            
            this['aggregator_code'] = data['aggregator_code'];
        }
    }
}

