var responseDataFormat = "JSON";

function PAWHS_getCustomerMasterListRequest(data)
{
    /**
     * @member {PAWHS_getCustomerMasterListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getCustomerMasterListRequestcontext(data['context']);
    }
}

function PAWHS_getCustomerMasterListRequestcontext(data)
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
     * @member {PAWHS_getCustomerMasterListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new PAWHS_getCustomerMasterListRequestFilter(data['Filter']);
    }
}

function PAWHS_getCustomerMasterListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_FromValue
     */
    this['FilterBy_FromValue'] = null;
    
    /**
     * @member {String} FilterBy_ToValue
     */
    this['FilterBy_ToValue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_FromValue'))
            this['FilterBy_FromValue'] = data['FilterBy_FromValue'];
        
        if(data.hasOwnProperty('FilterBy_ToValue'))
            this['FilterBy_ToValue'] = data['FilterBy_ToValue'];
        
    }
}

function PAWHS_getCustomerMasterListResponse(data, format)
{
    /**
     * @member {PAWHS_getCustomerMasterListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getCustomerMasterListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getCustomerMasterListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getCustomerMasterListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getCustomerMasterListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getCustomerMasterListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getCustomerMasterListResponseApplicationException(data)
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

function PAWHS_getCustomerMasterListResponsecontext(data)
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
     * @member {PAWHS_getCustomerMasterListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new PAWHS_getCustomerMasterListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new PAWHS_getCustomerMasterListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getCustomerMasterListResponseList(data)
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
            
            this['customer_state'] = (data.getElementsByTagName("customer_state")[0].lastChild != null) ? data.getElementsByTagName("customer_state")[0].lastChild.nodeValue : "";
            
            this['customer_dist'] = (data.getElementsByTagName("customer_dist")[0].lastChild != null) ? data.getElementsByTagName("customer_dist")[0].lastChild.nodeValue : "";
            
            this['customer_taluk'] = (data.getElementsByTagName("customer_taluk")[0].lastChild != null) ? data.getElementsByTagName("customer_taluk")[0].lastChild.nodeValue : "";
            
            this['customer_panchayat'] = (data.getElementsByTagName("customer_panchayat")[0].lastChild != null) ? data.getElementsByTagName("customer_panchayat")[0].lastChild.nodeValue : "";
            
            this['customer_village'] = (data.getElementsByTagName("customer_village")[0].lastChild != null) ? data.getElementsByTagName("customer_village")[0].lastChild.nodeValue : "";
            
            this['customer_pincode'] = (data.getElementsByTagName("customer_pincode")[0].lastChild != null) ? data.getElementsByTagName("customer_pincode")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
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
            
            this['customer_state'] = data['customer_state'];
            
            this['customer_dist'] = data['customer_dist'];
            
            this['customer_taluk'] = data['customer_taluk'];
            
            this['customer_panchayat'] = data['customer_panchayat'];
            
            this['customer_village'] = data['customer_village'];
            
            this['customer_pincode'] = data['customer_pincode'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

