var responseDataFormat = "JSON";

function retrieveInputCenterRequest(data)
{
    /**
     * @member {retrieveInputCenterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveInputCenterRequestcontext(data['context']);
    }
}

function retrieveInputCenterRequestcontext(data)
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
     * @member {retrieveInputCenterRequestHeader} Header
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
            this['Header'] = new retrieveInputCenterRequestHeader(data['Header']);
    }
}

function retrieveInputCenterRequestHeader(data)
{
    /**
     * @member {Int32} ic_rowid
     */
    this['ic_rowid'] = null;
    
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
        if(data.hasOwnProperty('ic_rowid'))
            this['ic_rowid'] = data['ic_rowid'];
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('version_no'))
            this['version_no'] = data['version_no'];
        
    }
}

function retrieveInputCenterResponse(data, format)
{
    /**
     * @member {retrieveInputCenterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveInputCenterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveInputCenterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveInputCenterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveInputCenterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveInputCenterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveInputCenterResponseApplicationException(data)
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

function retrieveInputCenterResponsecontext(data)
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
     * @member {retrieveInputCenterResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveInputCenterResponseAddress} Address
     */
    this['Address'] = null;
    
    /**
     * @member {retrieveInputCenterResponseBank} Bank
     */
    this['Bank'] = null;
    
    /**
     * @member {retrieveInputCenterResponseUser} User
     */
    this['User'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveInputCenterResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Address = [];
            for(Addresschildi = 0; Addresschildi < data.getElementsByTagName("Address").length; Addresschildi++)
            {
                Address.push(new retrieveInputCenterResponseAddress(data.getElementsByTagName("Address")[Addresschildi]));
            }
            if(data.getElementsByTagName("Address").length > 0)
                this['Address'] = Address;
            
            Bank = [];
            for(Bankchildi = 0; Bankchildi < data.getElementsByTagName("Bank").length; Bankchildi++)
            {
                Bank.push(new retrieveInputCenterResponseBank(data.getElementsByTagName("Bank")[Bankchildi]));
            }
            if(data.getElementsByTagName("Bank").length > 0)
                this['Bank'] = Bank;
            
            User = [];
            for(Userchildi = 0; Userchildi < data.getElementsByTagName("User").length; Userchildi++)
            {
                User.push(new retrieveInputCenterResponseUser(data.getElementsByTagName("User")[Userchildi]));
            }
            if(data.getElementsByTagName("User").length > 0)
                this['User'] = User;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveInputCenterResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Address') && data['Address'] != null)
            {
                Address = [];
                for(Addressindex = 0; Addressindex < data['Address'].length; Addressindex++)
                {
                    Address.push(new retrieveInputCenterResponseAddress(data['Address'][Addressindex]));
                }
                this['Address'] = Address;
            }
            
            
            if(data.hasOwnProperty('Bank') && data['Bank'] != null)
            {
                Bank = [];
                for(Bankindex = 0; Bankindex < data['Bank'].length; Bankindex++)
                {
                    Bank.push(new retrieveInputCenterResponseBank(data['Bank'][Bankindex]));
                }
                this['Bank'] = Bank;
            }
            
            
            if(data.hasOwnProperty('User') && data['User'] != null)
            {
                User = [];
                for(Userindex = 0; Userindex < data['User'].length; Userindex++)
                {
                    User.push(new retrieveInputCenterResponseUser(data['User'][Userindex]));
                }
                this['User'] = User;
            }
        }
    }
}

function retrieveInputCenterResponseHeader(data)
{
    /**
     * @member {Int32} ic_rowid
     */
    this['ic_rowid'] = null;
    
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
     * @member {String} orgn_level_desc
     */
    this['orgn_level_desc'] = null;
    
    /**
     * @member {String} orgn_type
     */
    this['orgn_type'] = null;
    
    /**
     * @member {String} orgn_type_desc
     */
    this['orgn_type_desc'] = null;
    
    /**
     * @member {String} orgn_subtype
     */
    this['orgn_subtype'] = null;
    
    /**
     * @member {String} orgn_subtype_desc
     */
    this['orgn_subtype_desc'] = null;
    
    /**
     * @member {String} primary_lang_code
     */
    this['primary_lang_code'] = null;
    
    /**
     * @member {String} secondary_lang_code
     */
    this['secondary_lang_code'] = null;
    
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
    
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {String} ic_type
     */
    this['ic_type'] = null;
    
    /**
     * @member {String} ic_name
     */
    this['ic_name'] = null;
    
    /**
     * @member {String} fpo_name
     */
    this['fpo_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['ic_rowid'] = parseInt(data.getElementsByTagName("ic_rowid")[0].lastChild.nodeValue);
            
            this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            this['version_no'] = parseInt(data.getElementsByTagName("version_no")[0].lastChild.nodeValue);
            
            this['orgn_cin'] = (data.getElementsByTagName("orgn_cin")[0].lastChild != null) ? data.getElementsByTagName("orgn_cin")[0].lastChild.nodeValue : "";
            
            this['parent_code'] = (data.getElementsByTagName("parent_code")[0].lastChild != null) ? data.getElementsByTagName("parent_code")[0].lastChild.nodeValue : "";
            
            this['orgn_name'] = (data.getElementsByTagName("orgn_name")[0].lastChild != null) ? data.getElementsByTagName("orgn_name")[0].lastChild.nodeValue : "";
            
            this['orgn_ll_name'] = (data.getElementsByTagName("orgn_ll_name")[0].lastChild != null) ? data.getElementsByTagName("orgn_ll_name")[0].lastChild.nodeValue : "";
            
            this['orgn_level'] = (data.getElementsByTagName("orgn_level")[0].lastChild != null) ? data.getElementsByTagName("orgn_level")[0].lastChild.nodeValue : "";
            
            this['orgn_level_desc'] = (data.getElementsByTagName("orgn_level_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_level_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_type'] = (data.getElementsByTagName("orgn_type")[0].lastChild != null) ? data.getElementsByTagName("orgn_type")[0].lastChild.nodeValue : "";
            
            this['orgn_type_desc'] = (data.getElementsByTagName("orgn_type_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_type_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_subtype'] = (data.getElementsByTagName("orgn_subtype")[0].lastChild != null) ? data.getElementsByTagName("orgn_subtype")[0].lastChild.nodeValue : "";
            
            this['orgn_subtype_desc'] = (data.getElementsByTagName("orgn_subtype_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_subtype_desc")[0].lastChild.nodeValue : "";
            
            this['primary_lang_code'] = (data.getElementsByTagName("primary_lang_code")[0].lastChild != null) ? data.getElementsByTagName("primary_lang_code")[0].lastChild.nodeValue : "";
            
            this['secondary_lang_code'] = (data.getElementsByTagName("secondary_lang_code")[0].lastChild != null) ? data.getElementsByTagName("secondary_lang_code")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_type")[0].attributes.length == 0) //Check NULL value
                this['ic_type'] = (data.getElementsByTagName("ic_type")[0].lastChild != null) ? data.getElementsByTagName("ic_type")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_name")[0].attributes.length == 0) //Check NULL value
                this['ic_name'] = (data.getElementsByTagName("ic_name")[0].lastChild != null) ? data.getElementsByTagName("ic_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("fpo_name")[0].attributes.length == 0) //Check NULL value
                this['fpo_name'] = (data.getElementsByTagName("fpo_name")[0].lastChild != null) ? data.getElementsByTagName("fpo_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['ic_rowid'] = data['ic_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['version_no'] = data['version_no'];
            
            this['orgn_cin'] = data['orgn_cin'];
            
            this['parent_code'] = data['parent_code'];
            
            this['orgn_name'] = data['orgn_name'];
            
            this['orgn_ll_name'] = data['orgn_ll_name'];
            
            this['orgn_level'] = data['orgn_level'];
            
            this['orgn_level_desc'] = data['orgn_level_desc'];
            
            this['orgn_type'] = data['orgn_type'];
            
            this['orgn_type_desc'] = data['orgn_type_desc'];
            
            this['orgn_subtype'] = data['orgn_subtype'];
            
            this['orgn_subtype_desc'] = data['orgn_subtype_desc'];
            
            this['primary_lang_code'] = data['primary_lang_code'];
            
            this['secondary_lang_code'] = data['secondary_lang_code'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['ic_code'] = data['ic_code'];
            
            this['ic_type'] = data['ic_type'];
            
            this['ic_name'] = data['ic_name'];
            
            this['fpo_name'] = data['fpo_name'];
        }
    }
}

function retrieveInputCenterResponseAddress(data)
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
            
            this['orgn_add1'] = (data.getElementsByTagName("orgn_add1")[0].lastChild != null) ? data.getElementsByTagName("orgn_add1")[0].lastChild.nodeValue : "";
            
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
            
            this['orgn_add1'] = data['orgn_add1'];
            
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

function retrieveInputCenterResponseBank(data)
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

function retrieveInputCenterResponseUser(data)
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
     * @member {String} aggrorgn_type_desc
     */
    this['aggrorgn_type_desc'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    /**
     * @member {String} aggrloc_type
     */
    this['aggrloc_type'] = null;
    
    /**
     * @member {String} aggrloc_type_desc
     */
    this['aggrloc_type_desc'] = null;
    
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
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} email_id
     */
    this['email_id'] = null;
    
    /**
     * @member {String} contact_no
     */
    this['contact_no'] = null;
    
    /**
     * @member {String} valid_till
     */
    this['valid_till'] = null;
    
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
            this['aggrlocuser_rowid'] = parseInt(data.getElementsByTagName("aggrlocuser_rowid")[0].lastChild.nodeValue);
            
            this['aggrorgn_type'] = (data.getElementsByTagName("aggrorgn_type")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_type")[0].lastChild.nodeValue : "";
            
            this['aggrorgn_type_desc'] = (data.getElementsByTagName("aggrorgn_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_type_desc")[0].lastChild.nodeValue : "";
            
            this['aggrorgn_code'] = (data.getElementsByTagName("aggrorgn_code")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_code")[0].lastChild.nodeValue : "";
            
            this['aggrloc_type'] = (data.getElementsByTagName("aggrloc_type")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_type")[0].lastChild.nodeValue : "";
            
            this['aggrloc_type_desc'] = (data.getElementsByTagName("aggrloc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_type_desc")[0].lastChild.nodeValue : "";
            
            this['aggrloc_code'] = (data.getElementsByTagName("aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['user_code'] = (data.getElementsByTagName("user_code")[0].lastChild != null) ? data.getElementsByTagName("user_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
            
            this['email_id'] = (data.getElementsByTagName("email_id")[0].lastChild != null) ? data.getElementsByTagName("email_id")[0].lastChild.nodeValue : "";
            
            this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            this['valid_till'] = (data.getElementsByTagName("valid_till")[0].lastChild != null) ? data.getElementsByTagName("valid_till")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['aggrlocuser_rowid'] = data['aggrlocuser_rowid'];
            
            this['aggrorgn_type'] = data['aggrorgn_type'];
            
            this['aggrorgn_type_desc'] = data['aggrorgn_type_desc'];
            
            this['aggrorgn_code'] = data['aggrorgn_code'];
            
            this['aggrloc_type'] = data['aggrloc_type'];
            
            this['aggrloc_type_desc'] = data['aggrloc_type_desc'];
            
            this['aggrloc_code'] = data['aggrloc_code'];
            
            this['role_code'] = data['role_code'];
            
            this['user_code'] = data['user_code'];
            
            this['user_name'] = data['user_name'];
            
            this['email_id'] = data['email_id'];
            
            this['contact_no'] = data['contact_no'];
            
            this['valid_till'] = data['valid_till'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

