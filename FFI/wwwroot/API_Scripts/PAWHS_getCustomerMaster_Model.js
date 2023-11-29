var responseDataFormat = "JSON";

function PAWHS_getCustomerMasterRequest(data)
{
    /**
     * @member {PAWHS_getCustomerMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getCustomerMasterRequestcontext(data['context']);
    }
}

function PAWHS_getCustomerMasterRequestcontext(data)
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
     * @member {PAWHS_getCustomerMasterRequestHeader} Header
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
            this['Header'] = new PAWHS_getCustomerMasterRequestHeader(data['Header']);
    }
}

function PAWHS_getCustomerMasterRequestHeader(data)
{
    /**
     * @member {Int32} customer_rowid
     */
    this['customer_rowid'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('customer_rowid'))
            this['customer_rowid'] = data['customer_rowid'];
        
        if(data.hasOwnProperty('customer_code'))
            this['customer_code'] = data['customer_code'];
        
    }
}

function PAWHS_getCustomerMasterResponse(data, format)
{
    /**
     * @member {PAWHS_getCustomerMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getCustomerMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getCustomerMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getCustomerMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getCustomerMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getCustomerMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getCustomerMasterResponseApplicationException(data)
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

function PAWHS_getCustomerMasterResponsecontext(data)
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
     * @member {PAWHS_getCustomerMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getCustomerMasterResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getCustomerMasterResponseHeader(data['Header']);
        }
    }
}

function PAWHS_getCustomerMasterResponseHeader(data)
{
    /**
     * @member {Int32} customer_rowid
     */
    this['customer_rowid'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} customer_type
     */
    this['customer_type'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
    /**
     * @member {String} customer_addr1
     */
    this['customer_addr1'] = null;
    
    /**
     * @member {String} customer_addr2
     */
    this['customer_addr2'] = null;
    
    /**
     * @member {String} customer_country
     */
    this['customer_country'] = null;
    
    /**
     * @member {String} customer_country_desc
     */
    this['customer_country_desc'] = null;
    
    /**
     * @member {String} customer_state
     */
    this['customer_state'] = null;
    
    /**
     * @member {String} customer_state_desc
     */
    this['customer_state_desc'] = null;
    
    /**
     * @member {String} customer_dist
     */
    this['customer_dist'] = null;
    
    /**
     * @member {String} customer_dist_desc
     */
    this['customer_dist_desc'] = null;
    
    /**
     * @member {String} customer_taluk
     */
    this['customer_taluk'] = null;
    
    /**
     * @member {String} customer_taluk_desc
     */
    this['customer_taluk_desc'] = null;
    
    /**
     * @member {String} customer_panchayat
     */
    this['customer_panchayat'] = null;
    
    /**
     * @member {String} customer_panchayat_desc
     */
    this['customer_panchayat_desc'] = null;
    
    /**
     * @member {String} customer_village
     */
    this['customer_village'] = null;
    
    /**
     * @member {String} customer_village_desc
     */
    this['customer_village_desc'] = null;
    
    /**
     * @member {String} customer_pincode
     */
    this['customer_pincode'] = null;
    
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
            this['customer_rowid'] = parseInt(data.getElementsByTagName("customer_rowid")[0].lastChild.nodeValue);
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_type'] = (data.getElementsByTagName("customer_type")[0].lastChild != null) ? data.getElementsByTagName("customer_type")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['customer_addr1'] = (data.getElementsByTagName("customer_addr1")[0].lastChild != null) ? data.getElementsByTagName("customer_addr1")[0].lastChild.nodeValue : "";
            
            this['customer_addr2'] = (data.getElementsByTagName("customer_addr2")[0].lastChild != null) ? data.getElementsByTagName("customer_addr2")[0].lastChild.nodeValue : "";
            
            this['customer_country'] = (data.getElementsByTagName("customer_country")[0].lastChild != null) ? data.getElementsByTagName("customer_country")[0].lastChild.nodeValue : "";
            
            this['customer_country_desc'] = (data.getElementsByTagName("customer_country_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_country_desc")[0].lastChild.nodeValue : "";
            
            this['customer_state'] = (data.getElementsByTagName("customer_state")[0].lastChild != null) ? data.getElementsByTagName("customer_state")[0].lastChild.nodeValue : "";
            
            this['customer_state_desc'] = (data.getElementsByTagName("customer_state_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_state_desc")[0].lastChild.nodeValue : "";
            
            this['customer_dist'] = (data.getElementsByTagName("customer_dist")[0].lastChild != null) ? data.getElementsByTagName("customer_dist")[0].lastChild.nodeValue : "";
            
            this['customer_dist_desc'] = (data.getElementsByTagName("customer_dist_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_dist_desc")[0].lastChild.nodeValue : "";
            
            this['customer_taluk'] = (data.getElementsByTagName("customer_taluk")[0].lastChild != null) ? data.getElementsByTagName("customer_taluk")[0].lastChild.nodeValue : "";
            
            this['customer_taluk_desc'] = (data.getElementsByTagName("customer_taluk_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_taluk_desc")[0].lastChild.nodeValue : "";
            
            this['customer_panchayat'] = (data.getElementsByTagName("customer_panchayat")[0].lastChild != null) ? data.getElementsByTagName("customer_panchayat")[0].lastChild.nodeValue : "";
            
            this['customer_panchayat_desc'] = (data.getElementsByTagName("customer_panchayat_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_panchayat_desc")[0].lastChild.nodeValue : "";
            
            this['customer_village'] = (data.getElementsByTagName("customer_village")[0].lastChild != null) ? data.getElementsByTagName("customer_village")[0].lastChild.nodeValue : "";
            
            this['customer_village_desc'] = (data.getElementsByTagName("customer_village_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_village_desc")[0].lastChild.nodeValue : "";
            
            this['customer_pincode'] = (data.getElementsByTagName("customer_pincode")[0].lastChild != null) ? data.getElementsByTagName("customer_pincode")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['customer_rowid'] = data['customer_rowid'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_type'] = data['customer_type'];
            
            this['customer_name'] = data['customer_name'];
            
            this['customer_addr1'] = data['customer_addr1'];
            
            this['customer_addr2'] = data['customer_addr2'];
            
            this['customer_country'] = data['customer_country'];
            
            this['customer_country_desc'] = data['customer_country_desc'];
            
            this['customer_state'] = data['customer_state'];
            
            this['customer_state_desc'] = data['customer_state_desc'];
            
            this['customer_dist'] = data['customer_dist'];
            
            this['customer_dist_desc'] = data['customer_dist_desc'];
            
            this['customer_taluk'] = data['customer_taluk'];
            
            this['customer_taluk_desc'] = data['customer_taluk_desc'];
            
            this['customer_panchayat'] = data['customer_panchayat'];
            
            this['customer_panchayat_desc'] = data['customer_panchayat_desc'];
            
            this['customer_village'] = data['customer_village'];
            
            this['customer_village_desc'] = data['customer_village_desc'];
            
            this['customer_pincode'] = data['customer_pincode'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

