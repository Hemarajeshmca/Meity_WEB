var responseDataFormat = "JSON";

function PAWHS_getAggregatorRegRequest(data)
{
    /**
     * @member {PAWHS_getAggregatorRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getAggregatorRegRequestcontext(data['context']);
    }
}

function PAWHS_getAggregatorRegRequestcontext(data)
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
     * @member {PAWHS_getAggregatorRegRequestHeader} Header
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
            this['Header'] = new PAWHS_getAggregatorRegRequestHeader(data['Header']);
    }
}

function PAWHS_getAggregatorRegRequestHeader(data)
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
        if(data.hasOwnProperty('orgn_rowid'))
            this['orgn_rowid'] = data['orgn_rowid'];
        
        if(data.hasOwnProperty('aggregator_code'))
            this['aggregator_code'] = data['aggregator_code'];
        
    }
}

function PAWHS_getAggregatorRegResponse(data, format)
{
    /**
     * @member {PAWHS_getAggregatorRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getAggregatorRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getAggregatorRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getAggregatorRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getAggregatorRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getAggregatorRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getAggregatorRegResponseApplicationException(data)
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

function PAWHS_getAggregatorRegResponsecontext(data)
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
     * @member {PAWHS_getAggregatorRegResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getAggregatorRegResponseAddress} Address
     */
    this['Address'] = null;
    
    /**
     * @member {PAWHS_getAggregatorRegResponseBank} Bank
     */
    this['Bank'] = null;
    
    /**
     * @member {PAWHS_getAggregatorRegResponseFIG} FIG
     */
    this['FIG'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getAggregatorRegResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Address = [];
            for(Addresschildi = 0; Addresschildi < data.getElementsByTagName("Address").length; Addresschildi++)
            {
                Address.push(new PAWHS_getAggregatorRegResponseAddress(data.getElementsByTagName("Address")[Addresschildi]));
            }
            if(data.getElementsByTagName("Address").length > 0)
                this['Address'] = Address;
            
            Bank = [];
            for(Bankchildi = 0; Bankchildi < data.getElementsByTagName("Bank").length; Bankchildi++)
            {
                Bank.push(new PAWHS_getAggregatorRegResponseBank(data.getElementsByTagName("Bank")[Bankchildi]));
            }
            if(data.getElementsByTagName("Bank").length > 0)
                this['Bank'] = Bank;
            
            FIG = [];
            for(FIGchildi = 0; FIGchildi < data.getElementsByTagName("FIG").length; FIGchildi++)
            {
                FIG.push(new PAWHS_getAggregatorRegResponseFIG(data.getElementsByTagName("FIG")[FIGchildi]));
            }
            if(data.getElementsByTagName("FIG").length > 0)
                this['FIG'] = FIG;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getAggregatorRegResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Address') && data['Address'] != null)
            {
                Address = [];
                for(Addressindex = 0; Addressindex < data['Address'].length; Addressindex++)
                {
                    Address.push(new PAWHS_getAggregatorRegResponseAddress(data['Address'][Addressindex]));
                }
                this['Address'] = Address;
            }
            
            
            if(data.hasOwnProperty('Bank') && data['Bank'] != null)
            {
                Bank = [];
                for(Bankindex = 0; Bankindex < data['Bank'].length; Bankindex++)
                {
                    Bank.push(new PAWHS_getAggregatorRegResponseBank(data['Bank'][Bankindex]));
                }
                this['Bank'] = Bank;
            }
            
            
            if(data.hasOwnProperty('FIG') && data['FIG'] != null)
            {
                FIG = [];
                for(FIGindex = 0; FIGindex < data['FIG'].length; FIGindex++)
                {
                    FIG.push(new PAWHS_getAggregatorRegResponseFIG(data['FIG'][FIGindex]));
                }
                this['FIG'] = FIG;
            }
        }
    }
}

function PAWHS_getAggregatorRegResponseHeader(data)
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
     * @member {String} fpo_desc
     */
    this['fpo_desc'] = null;
    
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
     * @member {String} facilitator_name
     */
    this['facilitator_name'] = null;
    
    /**
     * @member {String} facilitator_ll_code
     */
    this['facilitator_ll_code'] = null;
    
    /**
     * @member {String} facilitator_ll_name
     */
    this['facilitator_ll_name'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['orgn_rowid'] = parseInt(data.getElementsByTagName("orgn_rowid")[0].lastChild.nodeValue);
            
            this['aggregator_code'] = (data.getElementsByTagName("aggregator_code")[0].lastChild != null) ? data.getElementsByTagName("aggregator_code")[0].lastChild.nodeValue : "";
            
            this['aggregator_type'] = (data.getElementsByTagName("aggregator_type")[0].lastChild != null) ? data.getElementsByTagName("aggregator_type")[0].lastChild.nodeValue : "";
            
            this['fpo_code'] = (data.getElementsByTagName("fpo_code")[0].lastChild != null) ? data.getElementsByTagName("fpo_code")[0].lastChild.nodeValue : "";
            
            this['fpo_desc'] = (data.getElementsByTagName("fpo_desc")[0].lastChild != null) ? data.getElementsByTagName("fpo_desc")[0].lastChild.nodeValue : "";
            
            this['aggregator_name'] = (data.getElementsByTagName("aggregator_name")[0].lastChild != null) ? data.getElementsByTagName("aggregator_name")[0].lastChild.nodeValue : "";
            
            this['aggregator_ll_name'] = (data.getElementsByTagName("aggregator_ll_name")[0].lastChild != null) ? data.getElementsByTagName("aggregator_ll_name")[0].lastChild.nodeValue : "";
            
            this['orgn_level'] = (data.getElementsByTagName("orgn_level")[0].lastChild != null) ? data.getElementsByTagName("orgn_level")[0].lastChild.nodeValue : "";
            
            this['facilitator_code'] = (data.getElementsByTagName("facilitator_code")[0].lastChild != null) ? data.getElementsByTagName("facilitator_code")[0].lastChild.nodeValue : "";
            
            this['facilitator_name'] = (data.getElementsByTagName("facilitator_name")[0].lastChild != null) ? data.getElementsByTagName("facilitator_name")[0].lastChild.nodeValue : "";
            
            this['facilitator_ll_code'] = (data.getElementsByTagName("facilitator_ll_code")[0].lastChild != null) ? data.getElementsByTagName("facilitator_ll_code")[0].lastChild.nodeValue : "";
            
            this['facilitator_ll_name'] = (data.getElementsByTagName("facilitator_ll_name")[0].lastChild != null) ? data.getElementsByTagName("facilitator_ll_name")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['member_ll_name'] = (data.getElementsByTagName("member_ll_name")[0].lastChild != null) ? data.getElementsByTagName("member_ll_name")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgn_rowid'] = data['orgn_rowid'];
            
            this['aggregator_code'] = data['aggregator_code'];
            
            this['aggregator_type'] = data['aggregator_type'];
            
            this['fpo_code'] = data['fpo_code'];
            
            this['fpo_desc'] = data['fpo_desc'];
            
            this['aggregator_name'] = data['aggregator_name'];
            
            this['aggregator_ll_name'] = data['aggregator_ll_name'];
            
            this['orgn_level'] = data['orgn_level'];
            
            this['facilitator_code'] = data['facilitator_code'];
            
            this['facilitator_name'] = data['facilitator_name'];
            
            this['facilitator_ll_code'] = data['facilitator_ll_code'];
            
            this['facilitator_ll_name'] = data['facilitator_ll_name'];
            
            this['member_name'] = data['member_name'];
            
            this['member_ll_name'] = data['member_ll_name'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getAggregatorRegResponseAddress(data)
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
     * @member {String} addr_type_desc
     */
    this['addr_type_desc'] = null;
    
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
     * @member {String} orgn_country_desc
     */
    this['orgn_country_desc'] = null;
    
    /**
     * @member {String} orgn_state
     */
    this['orgn_state'] = null;
    
    /**
     * @member {String} orgn_state_desc
     */
    this['orgn_state_desc'] = null;
    
    /**
     * @member {String} orgn_dist
     */
    this['orgn_dist'] = null;
    
    /**
     * @member {String} orgn_dist_desc
     */
    this['orgn_dist_desc'] = null;
    
    /**
     * @member {String} orgn_taluk
     */
    this['orgn_taluk'] = null;
    
    /**
     * @member {String} orgn_taluk_desc
     */
    this['orgn_taluk_desc'] = null;
    
    /**
     * @member {String} orgn_panchayat
     */
    this['orgn_panchayat'] = null;
    
    /**
     * @member {String} orgn_panchayat_desc
     */
    this['orgn_panchayat_desc'] = null;
    
    /**
     * @member {String} orgn_village
     */
    this['orgn_village'] = null;
    
    /**
     * @member {String} orgn_village_desc
     */
    this['orgn_village_desc'] = null;
    
    /**
     * @member {String} orgn_pincode
     */
    this['orgn_pincode'] = null;
    
    /**
     * @member {String} orgn_pincode_desc
     */
    this['orgn_pincode_desc'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnaddr_rowid'] = parseInt(data.getElementsByTagName("orgnaddr_rowid")[0].lastChild.nodeValue);
            
            this['addr_type'] = (data.getElementsByTagName("addr_type")[0].lastChild != null) ? data.getElementsByTagName("addr_type")[0].lastChild.nodeValue : "";
            
            this['addr_type_desc'] = (data.getElementsByTagName("addr_type_desc")[0].lastChild != null) ? data.getElementsByTagName("addr_type_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_addr1'] = (data.getElementsByTagName("orgn_addr1")[0].lastChild != null) ? data.getElementsByTagName("orgn_addr1")[0].lastChild.nodeValue : "";
            
            this['orgn_addr2'] = (data.getElementsByTagName("orgn_addr2")[0].lastChild != null) ? data.getElementsByTagName("orgn_addr2")[0].lastChild.nodeValue : "";
            
            this['orgn_country'] = (data.getElementsByTagName("orgn_country")[0].lastChild != null) ? data.getElementsByTagName("orgn_country")[0].lastChild.nodeValue : "";
            
            this['orgn_country_desc'] = (data.getElementsByTagName("orgn_country_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_country_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_state'] = (data.getElementsByTagName("orgn_state")[0].lastChild != null) ? data.getElementsByTagName("orgn_state")[0].lastChild.nodeValue : "";
            
            this['orgn_state_desc'] = (data.getElementsByTagName("orgn_state_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_state_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_dist'] = (data.getElementsByTagName("orgn_dist")[0].lastChild != null) ? data.getElementsByTagName("orgn_dist")[0].lastChild.nodeValue : "";
            
            this['orgn_dist_desc'] = (data.getElementsByTagName("orgn_dist_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_dist_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_taluk'] = (data.getElementsByTagName("orgn_taluk")[0].lastChild != null) ? data.getElementsByTagName("orgn_taluk")[0].lastChild.nodeValue : "";
            
            this['orgn_taluk_desc'] = (data.getElementsByTagName("orgn_taluk_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_taluk_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_panchayat'] = (data.getElementsByTagName("orgn_panchayat")[0].lastChild != null) ? data.getElementsByTagName("orgn_panchayat")[0].lastChild.nodeValue : "";
            
            this['orgn_panchayat_desc'] = (data.getElementsByTagName("orgn_panchayat_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_panchayat_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_village'] = (data.getElementsByTagName("orgn_village")[0].lastChild != null) ? data.getElementsByTagName("orgn_village")[0].lastChild.nodeValue : "";
            
            this['orgn_village_desc'] = (data.getElementsByTagName("orgn_village_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_village_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_pincode'] = (data.getElementsByTagName("orgn_pincode")[0].lastChild != null) ? data.getElementsByTagName("orgn_pincode")[0].lastChild.nodeValue : "";
            
            this['orgn_pincode_desc'] = (data.getElementsByTagName("orgn_pincode_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_pincode_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnaddr_rowid'] = data['orgnaddr_rowid'];
            
            this['addr_type'] = data['addr_type'];
            
            this['addr_type_desc'] = data['addr_type_desc'];
            
            this['orgn_addr1'] = data['orgn_addr1'];
            
            this['orgn_addr2'] = data['orgn_addr2'];
            
            this['orgn_country'] = data['orgn_country'];
            
            this['orgn_country_desc'] = data['orgn_country_desc'];
            
            this['orgn_state'] = data['orgn_state'];
            
            this['orgn_state_desc'] = data['orgn_state_desc'];
            
            this['orgn_dist'] = data['orgn_dist'];
            
            this['orgn_dist_desc'] = data['orgn_dist_desc'];
            
            this['orgn_taluk'] = data['orgn_taluk'];
            
            this['orgn_taluk_desc'] = data['orgn_taluk_desc'];
            
            this['orgn_panchayat'] = data['orgn_panchayat'];
            
            this['orgn_panchayat_desc'] = data['orgn_panchayat_desc'];
            
            this['orgn_village'] = data['orgn_village'];
            
            this['orgn_village_desc'] = data['orgn_village_desc'];
            
            this['orgn_pincode'] = data['orgn_pincode'];
            
            this['orgn_pincode_desc'] = data['orgn_pincode_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function PAWHS_getAggregatorRegResponseBank(data)
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
     * @member {String} bank_acc_type_desc
     */
    this['bank_acc_type_desc'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_desc
     */
    this['bank_desc'] = null;
    
    /**
     * @member {String} branch_code
     */
    this['branch_code'] = null;
    
    /**
     * @member {String} branch_desc
     */
    this['branch_desc'] = null;
    
    /**
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} dflt_dr_acc
     */
    this['dflt_dr_acc'] = null;
    
    /**
     * @member {String} dflt_dr_acc_desc
     */
    this['dflt_dr_acc_desc'] = null;
    
    /**
     * @member {String} dflt_cr_acc
     */
    this['dflt_cr_acc'] = null;
    
    /**
     * @member {String} dflt_cr_acc_desc
     */
    this['dflt_cr_acc_desc'] = null;
    
    /**
     * @member {String} bank_acc_purpose
     */
    this['bank_acc_purpose'] = null;
    
    /**
     * @member {String} bank_acc_purpose_desc
     */
    this['bank_acc_purpose_desc'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnbank_rowid'] = parseInt(data.getElementsByTagName("orgnbank_rowid")[0].lastChild.nodeValue);
            
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['bank_desc'] = (data.getElementsByTagName("bank_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_desc")[0].lastChild.nodeValue : "";
            
            this['branch_code'] = (data.getElementsByTagName("branch_code")[0].lastChild != null) ? data.getElementsByTagName("branch_code")[0].lastChild.nodeValue : "";
            
            this['branch_desc'] = (data.getElementsByTagName("branch_desc")[0].lastChild != null) ? data.getElementsByTagName("branch_desc")[0].lastChild.nodeValue : "";
            
            this['ifsc_code'] = (data.getElementsByTagName("ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("ifsc_code")[0].lastChild.nodeValue : "";
            
            this['dflt_dr_acc'] = (data.getElementsByTagName("dflt_dr_acc")[0].lastChild != null) ? data.getElementsByTagName("dflt_dr_acc")[0].lastChild.nodeValue : "";
            
            this['dflt_dr_acc_desc'] = (data.getElementsByTagName("dflt_dr_acc_desc")[0].lastChild != null) ? data.getElementsByTagName("dflt_dr_acc_desc")[0].lastChild.nodeValue : "";
            
            this['dflt_cr_acc'] = (data.getElementsByTagName("dflt_cr_acc")[0].lastChild != null) ? data.getElementsByTagName("dflt_cr_acc")[0].lastChild.nodeValue : "";
            
            this['dflt_cr_acc_desc'] = (data.getElementsByTagName("dflt_cr_acc_desc")[0].lastChild != null) ? data.getElementsByTagName("dflt_cr_acc_desc")[0].lastChild.nodeValue : "";
            
            this['bank_acc_purpose'] = (data.getElementsByTagName("bank_acc_purpose")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_purpose")[0].lastChild.nodeValue : "";
            
            this['bank_acc_purpose_desc'] = (data.getElementsByTagName("bank_acc_purpose_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_purpose_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnbank_rowid'] = data['orgnbank_rowid'];
            
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_code'] = data['bank_code'];
            
            this['bank_desc'] = data['bank_desc'];
            
            this['branch_code'] = data['branch_code'];
            
            this['branch_desc'] = data['branch_desc'];
            
            this['ifsc_code'] = data['ifsc_code'];
            
            this['dflt_dr_acc'] = data['dflt_dr_acc'];
            
            this['dflt_dr_acc_desc'] = data['dflt_dr_acc_desc'];
            
            this['dflt_cr_acc'] = data['dflt_cr_acc'];
            
            this['dflt_cr_acc_desc'] = data['dflt_cr_acc_desc'];
            
            this['bank_acc_purpose'] = data['bank_acc_purpose'];
            
            this['bank_acc_purpose_desc'] = data['bank_acc_purpose_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function PAWHS_getAggregatorRegResponseFIG(data)
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
     * @member {String} aggrfig_type_desc
     */
    this['aggrfig_type_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['aggrfig_rowid'] = parseInt(data.getElementsByTagName("aggrfig_rowid")[0].lastChild.nodeValue);
            
            this['aggrfig_type'] = (data.getElementsByTagName("aggrfig_type")[0].lastChild != null) ? data.getElementsByTagName("aggrfig_type")[0].lastChild.nodeValue : "";
            
            this['aggrfig_type_desc'] = (data.getElementsByTagName("aggrfig_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggrfig_type_desc")[0].lastChild.nodeValue : "";
            
            this['aggrfig_code'] = (data.getElementsByTagName("aggrfig_code")[0].lastChild != null) ? data.getElementsByTagName("aggrfig_code")[0].lastChild.nodeValue : "";
            
            this['aggrfig_name'] = (data.getElementsByTagName("aggrfig_name")[0].lastChild != null) ? data.getElementsByTagName("aggrfig_name")[0].lastChild.nodeValue : "";
            
            this['aggrvillage_code'] = (data.getElementsByTagName("aggrvillage_code")[0].lastChild != null) ? data.getElementsByTagName("aggrvillage_code")[0].lastChild.nodeValue : "";
            
            this['aggrvillage_name'] = (data.getElementsByTagName("aggrvillage_name")[0].lastChild != null) ? data.getElementsByTagName("aggrvillage_name")[0].lastChild.nodeValue : "";
            
            this['contact_person'] = (data.getElementsByTagName("contact_person")[0].lastChild != null) ? data.getElementsByTagName("contact_person")[0].lastChild.nodeValue : "";
            
            this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['aggrfig_rowid'] = data['aggrfig_rowid'];
            
            this['aggrfig_type'] = data['aggrfig_type'];
            
            this['aggrfig_type_desc'] = data['aggrfig_type_desc'];
            
            this['aggrfig_code'] = data['aggrfig_code'];
            
            this['aggrfig_name'] = data['aggrfig_name'];
            
            this['aggrvillage_code'] = data['aggrvillage_code'];
            
            this['aggrvillage_name'] = data['aggrvillage_name'];
            
            this['contact_person'] = data['contact_person'];
            
            this['contact_no'] = data['contact_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

