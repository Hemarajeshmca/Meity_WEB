var responseDataFormat = "JSON";

function saveESPRegRequest(data)
{
    /**
     * @member {saveESPRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveESPRegRequestcontext(data['context']);
    }
}

function saveESPRegRequestcontext(data)
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
     * @member {saveESPRegRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveESPRegRequestAddress} Address
     */
    this['Address'] = null;
    
    /**
     * @member {saveESPRegRequestBearers} Bearers
     */
    this['Bearers'] = null;
    
    /**
     * @member {saveESPRegRequestBank} Bank
     */
    this['Bank'] = null;
    
    /**
     * @member {saveESPRegRequestUser} User
     */
    this['User'] = null;
    
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
            this['Header'] = new saveESPRegRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Address') && data['Address'] != null)
        {
            Address = [];
            for(Addressindex = 0; Addressindex < data['Address'].length; Addressindex++)
            {
                Address.push(new saveESPRegRequestAddress(data['Address'][Addressindex]));
            }
            this['Address'] = Address;
        }
        
        if(data.hasOwnProperty('Bearers') && data['Bearers'] != null)
        {
            Bearers = [];
            for(Bearersindex = 0; Bearersindex < data['Bearers'].length; Bearersindex++)
            {
                Bearers.push(new saveESPRegRequestBearers(data['Bearers'][Bearersindex]));
            }
            this['Bearers'] = Bearers;
        }
        
        if(data.hasOwnProperty('Bank') && data['Bank'] != null)
        {
            Bank = [];
            for(Bankindex = 0; Bankindex < data['Bank'].length; Bankindex++)
            {
                Bank.push(new saveESPRegRequestBank(data['Bank'][Bankindex]));
            }
            this['Bank'] = Bank;
        }
        
        if(data.hasOwnProperty('User') && data['User'] != null)
        {
            User = [];
            for(Userindex = 0; Userindex < data['User'].length; Userindex++)
            {
                User.push(new saveESPRegRequestUser(data['User'][Userindex]));
            }
            this['User'] = User;
        }
    }
}

function saveESPRegRequestHeader(data)
{
    /**
     * @member {Int32} orgn_rowid
     */
    this['orgn_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {Int16} version_no
     */
    this['version_no'] = null;
    
    /**
     * @member {String} orgn_cin
     */
    this['orgn_cin'] = null;
    
    /**
     * @member {String} parent_code
     */
    this['parent_code'] = null;
    
    /**
     * @member {String} orgn_name
     */
    this['orgn_name'] = null;
    
    /**
     * @member {String} orgn_ll_name
     */
    this['orgn_ll_name'] = null;
    
    /**
     * @member {String} orgn_level
     */
    this['orgn_level'] = null;
    
    /**
     * @member {String} orgn_type
     */
    this['orgn_type'] = null;
    
    /**
     * @member {String} orgn_subtype
     */
    this['orgn_subtype'] = null;
    
    /**
     * @member {String} primary_lang_code
     */
    this['primary_lang_code'] = null;
    
    /**
     * @member {String} secondary_lang_code
     */
    this['secondary_lang_code'] = null;
    
    /**
     * @member {String} orgn_logo
     */
    this['orgn_logo'] = null;
    
    /**
     * @member {String} orgn_auth_sign
     */
    this['orgn_auth_sign'] = null;
    
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
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('version_no'))
            this['version_no'] = data['version_no'];
        
        if(data.hasOwnProperty('orgn_cin'))
            this['orgn_cin'] = data['orgn_cin'];
        
        if(data.hasOwnProperty('parent_code'))
            this['parent_code'] = data['parent_code'];
        
        if(data.hasOwnProperty('orgn_name'))
            this['orgn_name'] = data['orgn_name'];
        
        if(data.hasOwnProperty('orgn_ll_name'))
            this['orgn_ll_name'] = data['orgn_ll_name'];
        
        if(data.hasOwnProperty('orgn_level'))
            this['orgn_level'] = data['orgn_level'];
        
        if(data.hasOwnProperty('orgn_type'))
            this['orgn_type'] = data['orgn_type'];
        
        if(data.hasOwnProperty('orgn_subtype'))
            this['orgn_subtype'] = data['orgn_subtype'];
        
        if(data.hasOwnProperty('primary_lang_code'))
            this['primary_lang_code'] = data['primary_lang_code'];
        
        if(data.hasOwnProperty('secondary_lang_code'))
            this['secondary_lang_code'] = data['secondary_lang_code'];
        
        if(data.hasOwnProperty('orgn_logo'))
            this['orgn_logo'] = data['orgn_logo'];
        
        if(data.hasOwnProperty('orgn_auth_sign'))
            this['orgn_auth_sign'] = data['orgn_auth_sign'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveESPRegRequestAddress(data)
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
     * @member {String} orgn_add1
     */
    this['orgn_add1'] = null;
    
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
        
        if(data.hasOwnProperty('orgn_add1'))
            this['orgn_add1'] = data['orgn_add1'];
        
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

function saveESPRegRequestBearers(data)
{
    /**
     * @member {Int32} orgnofficebearers_rowid
     */
    this['orgnofficebearers_rowid'] = null;
    
    /**
     * @member {String} officebearer_role
     */
    this['officebearer_role'] = null;
    
    /**
     * @member {String} officebearer_name
     */
    this['officebearer_name'] = null;
    
    /**
     * @member {String} officebearer_contact_no
     */
    this['officebearer_contact_no'] = null;
    
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
        if(data.hasOwnProperty('orgnofficebearers_rowid'))
            this['orgnofficebearers_rowid'] = data['orgnofficebearers_rowid'];
        
        if(data.hasOwnProperty('officebearer_role'))
            this['officebearer_role'] = data['officebearer_role'];
        
        if(data.hasOwnProperty('officebearer_name'))
            this['officebearer_name'] = data['officebearer_name'];
        
        if(data.hasOwnProperty('officebearer_contact_no'))
            this['officebearer_contact_no'] = data['officebearer_contact_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveESPRegRequestBank(data)
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

function saveESPRegRequestUser(data)
{
    /**
     * @member {Int32} aggrlocuser_rowid
     */
    this['aggrlocuser_rowid'] = null;
    
    /**
     * @member {String} aggrorgn_type
     */
    this['aggrorgn_type'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    /**
     * @member {String} aggrloc_type
     */
    this['aggrloc_type'] = null;
    
    /**
     * @member {String} aggrloc_code
     */
    this['aggrloc_code'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
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
        if(data.hasOwnProperty('aggrlocuser_rowid'))
            this['aggrlocuser_rowid'] = data['aggrlocuser_rowid'];
        
        if(data.hasOwnProperty('aggrorgn_type'))
            this['aggrorgn_type'] = data['aggrorgn_type'];
        
        if(data.hasOwnProperty('aggrorgn_code'))
            this['aggrorgn_code'] = data['aggrorgn_code'];
        
        if(data.hasOwnProperty('aggrloc_type'))
            this['aggrloc_type'] = data['aggrloc_type'];
        
        if(data.hasOwnProperty('aggrloc_code'))
            this['aggrloc_code'] = data['aggrloc_code'];
        
        if(data.hasOwnProperty('role_code'))
            this['role_code'] = data['role_code'];
        
        if(data.hasOwnProperty('user_code'))
            this['user_code'] = data['user_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveESPRegResponse(data, format)
{
    /**
     * @member {saveESPRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveESPRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveESPRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveESPRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveESPRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveESPRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveESPRegResponseApplicationException(data)
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

function saveESPRegResponsecontext(data)
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
     * @member {saveESPRegResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveESPRegResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveESPRegResponseHeader(data['Header']);
        }
    }
}

function saveESPRegResponseHeader(data)
{
    /**
     * @member {Int32} orgn_rowid
     */
    this['orgn_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {Int16} version_no
     */
    this['version_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgn_rowid'] = parseInt(data.getElementsByTagName("orgn_rowid")[0].lastChild.nodeValue);
            
            this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            this['version_no'] = parseInt(data.getElementsByTagName("version_no")[0].lastChild.nodeValue);
        }
        else {
            this['orgn_rowid'] = data['orgn_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['version_no'] = data['version_no'];
        }
    }
}

