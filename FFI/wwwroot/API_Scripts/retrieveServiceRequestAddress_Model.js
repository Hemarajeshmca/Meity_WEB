var responseDataFormat = "JSON";

function retrieveServiceRequestAddressRequest(data)
{
    /**
     * @member {retrieveServiceRequestAddressRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveServiceRequestAddressRequestcontext(data['context']);
    }
}

function retrieveServiceRequestAddressRequestcontext(data)
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
     * @member {retrieveServiceRequestAddressRequestHeader} Header
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
            this['Header'] = new retrieveServiceRequestAddressRequestHeader(data['Header']);
    }
}

function retrieveServiceRequestAddressRequestHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('servicereq_rowid'))
            this['servicereq_rowid'] = data['servicereq_rowid'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('servicereq_no'))
            this['servicereq_no'] = data['servicereq_no'];
        
    }
}

function retrieveServiceRequestAddressResponse(data, format)
{
    /**
     * @member {retrieveServiceRequestAddressResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveServiceRequestAddressResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveServiceRequestAddressResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveServiceRequestAddressResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveServiceRequestAddressResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveServiceRequestAddressResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveServiceRequestAddressResponseApplicationException(data)
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

function retrieveServiceRequestAddressResponsecontext(data)
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
     * @member {retrieveServiceRequestAddressResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveServiceRequestAddressResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveServiceRequestAddressResponseHeader(data['Header']);
        }
    }
}

function retrieveServiceRequestAddressResponseHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
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
     * @member {String} current_member_state_desc
     */
    this['current_member_state_desc'] = null;
    
    /**
     * @member {String} current_member_village
     */
    this['current_member_village'] = null;
    
    /**
     * @member {String} current_member_village_desc
     */
    this['current_member_village_desc'] = null;
    
    /**
     * @member {String} current_member_panchayat
     */
    this['current_member_panchayat'] = null;
    
    /**
     * @member {String} current_member_panchayat_desc
     */
    this['current_member_panchayat_desc'] = null;
    
    /**
     * @member {String} current_member_taluk
     */
    this['current_member_taluk'] = null;
    
    /**
     * @member {String} current_member_taluk_desc
     */
    this['current_member_taluk_desc'] = null;
    
    /**
     * @member {String} current_member_dist
     */
    this['current_member_dist'] = null;
    
    /**
     * @member {String} current_member_dist_desc
     */
    this['current_member_dist_desc'] = null;
    
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
     * @member {String} change_member_state_desc
     */
    this['change_member_state_desc'] = null;
    
    /**
     * @member {String} change_member_village
     */
    this['change_member_village'] = null;
    
    /**
     * @member {String} change_member_village_desc
     */
    this['change_member_village_desc'] = null;
    
    /**
     * @member {String} change_member_panchayat
     */
    this['change_member_panchayat'] = null;
    
    /**
     * @member {String} change_member_panchayat_desc
     */
    this['change_member_panchayat_desc'] = null;
    
    /**
     * @member {String} change_member_taluk
     */
    this['change_member_taluk'] = null;
    
    /**
     * @member {String} change_member_taluk_desc
     */
    this['change_member_taluk_desc'] = null;
    
    /**
     * @member {String} change_member_dist
     */
    this['change_member_dist'] = null;
    
    /**
     * @member {String} change_member_dist_desc
     */
    this['change_member_dist_desc'] = null;
    
    /**
     * @member {String} change_member_pincode
     */
    this['change_member_pincode'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['current_member_addr1'] = (data.getElementsByTagName("current_member_addr1")[0].lastChild != null) ? data.getElementsByTagName("current_member_addr1")[0].lastChild.nodeValue : "";
            
            this['current_member_addr2'] = (data.getElementsByTagName("current_member_addr2")[0].lastChild != null) ? data.getElementsByTagName("current_member_addr2")[0].lastChild.nodeValue : "";
            
            this['current_member_state'] = (data.getElementsByTagName("current_member_state")[0].lastChild != null) ? data.getElementsByTagName("current_member_state")[0].lastChild.nodeValue : "";
            
            this['current_member_state_desc'] = (data.getElementsByTagName("current_member_state_desc")[0].lastChild != null) ? data.getElementsByTagName("current_member_state_desc")[0].lastChild.nodeValue : "";
            
            this['current_member_village'] = (data.getElementsByTagName("current_member_village")[0].lastChild != null) ? data.getElementsByTagName("current_member_village")[0].lastChild.nodeValue : "";
            
            this['current_member_village_desc'] = (data.getElementsByTagName("current_member_village_desc")[0].lastChild != null) ? data.getElementsByTagName("current_member_village_desc")[0].lastChild.nodeValue : "";
            
            this['current_member_panchayat'] = (data.getElementsByTagName("current_member_panchayat")[0].lastChild != null) ? data.getElementsByTagName("current_member_panchayat")[0].lastChild.nodeValue : "";
            
            this['current_member_panchayat_desc'] = (data.getElementsByTagName("current_member_panchayat_desc")[0].lastChild != null) ? data.getElementsByTagName("current_member_panchayat_desc")[0].lastChild.nodeValue : "";
            
            this['current_member_taluk'] = (data.getElementsByTagName("current_member_taluk")[0].lastChild != null) ? data.getElementsByTagName("current_member_taluk")[0].lastChild.nodeValue : "";
            
            this['current_member_taluk_desc'] = (data.getElementsByTagName("current_member_taluk_desc")[0].lastChild != null) ? data.getElementsByTagName("current_member_taluk_desc")[0].lastChild.nodeValue : "";
            
            this['current_member_dist'] = (data.getElementsByTagName("current_member_dist")[0].lastChild != null) ? data.getElementsByTagName("current_member_dist")[0].lastChild.nodeValue : "";
            
            this['current_member_dist_desc'] = (data.getElementsByTagName("current_member_dist_desc")[0].lastChild != null) ? data.getElementsByTagName("current_member_dist_desc")[0].lastChild.nodeValue : "";
            
            this['current_member_pincode'] = (data.getElementsByTagName("current_member_pincode")[0].lastChild != null) ? data.getElementsByTagName("current_member_pincode")[0].lastChild.nodeValue : "";
            
            this['change_member_addr1'] = (data.getElementsByTagName("change_member_addr1")[0].lastChild != null) ? data.getElementsByTagName("change_member_addr1")[0].lastChild.nodeValue : "";
            
            this['change_member_addr2'] = (data.getElementsByTagName("change_member_addr2")[0].lastChild != null) ? data.getElementsByTagName("change_member_addr2")[0].lastChild.nodeValue : "";
            
            this['change_member_state'] = (data.getElementsByTagName("change_member_state")[0].lastChild != null) ? data.getElementsByTagName("change_member_state")[0].lastChild.nodeValue : "";
            
            this['change_member_state_desc'] = (data.getElementsByTagName("change_member_state_desc")[0].lastChild != null) ? data.getElementsByTagName("change_member_state_desc")[0].lastChild.nodeValue : "";
            
            this['change_member_village'] = (data.getElementsByTagName("change_member_village")[0].lastChild != null) ? data.getElementsByTagName("change_member_village")[0].lastChild.nodeValue : "";
            
            this['change_member_village_desc'] = (data.getElementsByTagName("change_member_village_desc")[0].lastChild != null) ? data.getElementsByTagName("change_member_village_desc")[0].lastChild.nodeValue : "";
            
            this['change_member_panchayat'] = (data.getElementsByTagName("change_member_panchayat")[0].lastChild != null) ? data.getElementsByTagName("change_member_panchayat")[0].lastChild.nodeValue : "";
            
            this['change_member_panchayat_desc'] = (data.getElementsByTagName("change_member_panchayat_desc")[0].lastChild != null) ? data.getElementsByTagName("change_member_panchayat_desc")[0].lastChild.nodeValue : "";
            
            this['change_member_taluk'] = (data.getElementsByTagName("change_member_taluk")[0].lastChild != null) ? data.getElementsByTagName("change_member_taluk")[0].lastChild.nodeValue : "";
            
            this['change_member_taluk_desc'] = (data.getElementsByTagName("change_member_taluk_desc")[0].lastChild != null) ? data.getElementsByTagName("change_member_taluk_desc")[0].lastChild.nodeValue : "";
            
            this['change_member_dist'] = (data.getElementsByTagName("change_member_dist")[0].lastChild != null) ? data.getElementsByTagName("change_member_dist")[0].lastChild.nodeValue : "";
            
            this['change_member_dist_desc'] = (data.getElementsByTagName("change_member_dist_desc")[0].lastChild != null) ? data.getElementsByTagName("change_member_dist_desc")[0].lastChild.nodeValue : "";
            
            this['change_member_pincode'] = (data.getElementsByTagName("change_member_pincode")[0].lastChild != null) ? data.getElementsByTagName("change_member_pincode")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['chklist_status_flag'] = (data.getElementsByTagName("chklist_status_flag")[0].lastChild != null) ? data.getElementsByTagName("chklist_status_flag")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("sr_comments")[0].attributes.length == 0) //Check NULL value
                this['sr_comments'] = (data.getElementsByTagName("sr_comments")[0].lastChild != null) ? data.getElementsByTagName("sr_comments")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['servicereq_no'] = data['servicereq_no'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['current_member_addr1'] = data['current_member_addr1'];
            
            this['current_member_addr2'] = data['current_member_addr2'];
            
            this['current_member_state'] = data['current_member_state'];
            
            this['current_member_state_desc'] = data['current_member_state_desc'];
            
            this['current_member_village'] = data['current_member_village'];
            
            this['current_member_village_desc'] = data['current_member_village_desc'];
            
            this['current_member_panchayat'] = data['current_member_panchayat'];
            
            this['current_member_panchayat_desc'] = data['current_member_panchayat_desc'];
            
            this['current_member_taluk'] = data['current_member_taluk'];
            
            this['current_member_taluk_desc'] = data['current_member_taluk_desc'];
            
            this['current_member_dist'] = data['current_member_dist'];
            
            this['current_member_dist_desc'] = data['current_member_dist_desc'];
            
            this['current_member_pincode'] = data['current_member_pincode'];
            
            this['change_member_addr1'] = data['change_member_addr1'];
            
            this['change_member_addr2'] = data['change_member_addr2'];
            
            this['change_member_state'] = data['change_member_state'];
            
            this['change_member_state_desc'] = data['change_member_state_desc'];
            
            this['change_member_village'] = data['change_member_village'];
            
            this['change_member_village_desc'] = data['change_member_village_desc'];
            
            this['change_member_panchayat'] = data['change_member_panchayat'];
            
            this['change_member_panchayat_desc'] = data['change_member_panchayat_desc'];
            
            this['change_member_taluk'] = data['change_member_taluk'];
            
            this['change_member_taluk_desc'] = data['change_member_taluk_desc'];
            
            this['change_member_dist'] = data['change_member_dist'];
            
            this['change_member_dist_desc'] = data['change_member_dist_desc'];
            
            this['change_member_pincode'] = data['change_member_pincode'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
            
            this['sr_comments'] = data['sr_comments'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

