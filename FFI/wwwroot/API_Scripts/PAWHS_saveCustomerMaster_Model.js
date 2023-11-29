var responseDataFormat = "JSON";

function PAWHS_saveCustomerMasterRequest(data)
{
    /**
     * @member {PAWHS_saveCustomerMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveCustomerMasterRequestcontext(data['context']);
    }
}

function PAWHS_saveCustomerMasterRequestcontext(data)
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
     * @member {PAWHS_saveCustomerMasterRequestHeader} Header
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
            this['Header'] = new PAWHS_saveCustomerMasterRequestHeader(data['Header']);
    }
}

function PAWHS_saveCustomerMasterRequestHeader(data)
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
     * @member {String} customer_state
     */
    this['customer_state'] = null;
    
    /**
     * @member {String} customer_dist
     */
    this['customer_dist'] = null;
    
    /**
     * @member {String} customer_taluk
     */
    this['customer_taluk'] = null;
    
    /**
     * @member {String} customer_panchayat
     */
    this['customer_panchayat'] = null;
    
    /**
     * @member {String} customer_village
     */
    this['customer_village'] = null;
    
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
        if(data.hasOwnProperty('customer_rowid'))
            this['customer_rowid'] = data['customer_rowid'];
        
        if(data.hasOwnProperty('customer_code'))
            this['customer_code'] = data['customer_code'];
        
        if(data.hasOwnProperty('customer_type'))
            this['customer_type'] = data['customer_type'];
        
        if(data.hasOwnProperty('customer_name'))
            this['customer_name'] = data['customer_name'];
        
        if(data.hasOwnProperty('customer_addr1'))
            this['customer_addr1'] = data['customer_addr1'];
        
        if(data.hasOwnProperty('customer_addr2'))
            this['customer_addr2'] = data['customer_addr2'];
        
        if(data.hasOwnProperty('customer_country'))
            this['customer_country'] = data['customer_country'];
        
        if(data.hasOwnProperty('customer_state'))
            this['customer_state'] = data['customer_state'];
        
        if(data.hasOwnProperty('customer_dist'))
            this['customer_dist'] = data['customer_dist'];
        
        if(data.hasOwnProperty('customer_taluk'))
            this['customer_taluk'] = data['customer_taluk'];
        
        if(data.hasOwnProperty('customer_panchayat'))
            this['customer_panchayat'] = data['customer_panchayat'];
        
        if(data.hasOwnProperty('customer_village'))
            this['customer_village'] = data['customer_village'];
        
        if(data.hasOwnProperty('customer_pincode'))
            this['customer_pincode'] = data['customer_pincode'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveCustomerMasterResponse(data, format)
{
    /**
     * @member {PAWHS_saveCustomerMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveCustomerMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveCustomerMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveCustomerMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveCustomerMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveCustomerMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveCustomerMasterResponseApplicationException(data)
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

function PAWHS_saveCustomerMasterResponsecontext(data)
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
     * @member {PAWHS_saveCustomerMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveCustomerMasterResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveCustomerMasterResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveCustomerMasterResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['customer_rowid'] = parseInt(data.getElementsByTagName("customer_rowid")[0].lastChild.nodeValue);
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['customer_rowid'] = data['customer_rowid'];
            
            this['customer_code'] = data['customer_code'];
        }
    }
}

