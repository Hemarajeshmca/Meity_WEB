var responseDataFormat = "JSON";

function saveServiceRequestAddressRequest(data)
{
    /**
     * @member {saveServiceRequestAddressRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveServiceRequestAddressRequestcontext(data['context']);
    }
}

function saveServiceRequestAddressRequestcontext(data)
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
     * @member {saveServiceRequestAddressRequestHeader} Header
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
            this['Header'] = new saveServiceRequestAddressRequestHeader(data['Header']);
    }
}

function saveServiceRequestAddressRequestHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} current_member_addr1
     */
    this['current_member_addr1'] = null;
    
    /**
     * @member {String} current_member_addr2
     */
    this['current_member_addr2'] = null;
    
    /**
     * @member {String} current_member_state
     */
    this['current_member_state'] = null;
    
    /**
     * @member {String} current_member_village
     */
    this['current_member_village'] = null;
    
    /**
     * @member {String} current_member_panchayat
     */
    this['current_member_panchayat'] = null;
    
    /**
     * @member {String} current_member_taluk
     */
    this['current_member_taluk'] = null;
    
    /**
     * @member {String} current_member_dist
     */
    this['current_member_dist'] = null;
    
    /**
     * @member {String} current_member_pincode
     */
    this['current_member_pincode'] = null;
    
    /**
     * @member {String} change_member_addr1
     */
    this['change_member_addr1'] = null;
    
    /**
     * @member {String} change_member_addr2
     */
    this['change_member_addr2'] = null;
    
    /**
     * @member {String} change_member_state
     */
    this['change_member_state'] = null;
    
    /**
     * @member {String} change_member_village
     */
    this['change_member_village'] = null;
    
    /**
     * @member {String} change_member_panchayat
     */
    this['change_member_panchayat'] = null;
    
    /**
     * @member {String} change_member_taluk
     */
    this['change_member_taluk'] = null;
    
    /**
     * @member {String} change_member_dist
     */
    this['change_member_dist'] = null;
    
    /**
     * @member {String} change_member_pincode
     */
    this['change_member_pincode'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} chklist_status_flag
     */
    this['chklist_status_flag'] = null;
    
    /**
     * @member {String} sr_comments
     */
    this['sr_comments'] = null;
    
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
        if(data.hasOwnProperty('servicereq_rowid'))
            this['servicereq_rowid'] = data['servicereq_rowid'];
        
        if(data.hasOwnProperty('servicereq_no'))
            this['servicereq_no'] = data['servicereq_no'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('current_member_addr1'))
            this['current_member_addr1'] = data['current_member_addr1'];
        
        if(data.hasOwnProperty('current_member_addr2'))
            this['current_member_addr2'] = data['current_member_addr2'];
        
        if(data.hasOwnProperty('current_member_state'))
            this['current_member_state'] = data['current_member_state'];
        
        if(data.hasOwnProperty('current_member_village'))
            this['current_member_village'] = data['current_member_village'];
        
        if(data.hasOwnProperty('current_member_panchayat'))
            this['current_member_panchayat'] = data['current_member_panchayat'];
        
        if(data.hasOwnProperty('current_member_taluk'))
            this['current_member_taluk'] = data['current_member_taluk'];
        
        if(data.hasOwnProperty('current_member_dist'))
            this['current_member_dist'] = data['current_member_dist'];
        
        if(data.hasOwnProperty('current_member_pincode'))
            this['current_member_pincode'] = data['current_member_pincode'];
        
        if(data.hasOwnProperty('change_member_addr1'))
            this['change_member_addr1'] = data['change_member_addr1'];
        
        if(data.hasOwnProperty('change_member_addr2'))
            this['change_member_addr2'] = data['change_member_addr2'];
        
        if(data.hasOwnProperty('change_member_state'))
            this['change_member_state'] = data['change_member_state'];
        
        if(data.hasOwnProperty('change_member_village'))
            this['change_member_village'] = data['change_member_village'];
        
        if(data.hasOwnProperty('change_member_panchayat'))
            this['change_member_panchayat'] = data['change_member_panchayat'];
        
        if(data.hasOwnProperty('change_member_taluk'))
            this['change_member_taluk'] = data['change_member_taluk'];
        
        if(data.hasOwnProperty('change_member_dist'))
            this['change_member_dist'] = data['change_member_dist'];
        
        if(data.hasOwnProperty('change_member_pincode'))
            this['change_member_pincode'] = data['change_member_pincode'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('chklist_status_flag'))
            this['chklist_status_flag'] = data['chklist_status_flag'];
        
        if(data.hasOwnProperty('sr_comments'))
            this['sr_comments'] = data['sr_comments'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveServiceRequestAddressResponse(data, format)
{
    /**
     * @member {saveServiceRequestAddressResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveServiceRequestAddressResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveServiceRequestAddressResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveServiceRequestAddressResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveServiceRequestAddressResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveServiceRequestAddressResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveServiceRequestAddressResponseApplicationException(data)
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

function saveServiceRequestAddressResponsecontext(data)
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
     * @member {saveServiceRequestAddressResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveServiceRequestAddressResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveServiceRequestAddressResponseHeader(data['Header']);
        }
    }
}

function saveServiceRequestAddressResponseHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['servicereq_no'] = data['servicereq_no'];
        }
    }
}

