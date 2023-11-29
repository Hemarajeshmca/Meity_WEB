var responseDataFormat = "JSON";

function saveProcessShareAppRequest(data)
{
    /**
     * @member {saveProcessShareAppRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveProcessShareAppRequestcontext(data['context']);
    }
}

function saveProcessShareAppRequestcontext(data)
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
     * @member {saveProcessShareAppRequestHeader} Header
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
            this['Header'] = new saveProcessShareAppRequestHeader(data['Header']);
    }
}

function saveProcessShareAppRequestHeader(data)
{
    /**
     * @member {Int32} shareapp_rowid
     */
    this['shareapp_rowid'] = null;
    
    /**
     * @member {String} shareapp_no
     */
    this['shareapp_no'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} signature_farmer
     */
    this['signature_farmer'] = null;
    
    /**
     * @member {String} photo_farmer
     */
    this['photo_farmer'] = null;
    
    /**
     * @member {String} applied_on
     */
    this['applied_on'] = null;
    
    /**
     * @member {Int16} applied_shares
     */
    this['applied_shares'] = null;
    
    /**
     * @member {Decimal} amount_due
     */
    this['amount_due'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_ref_no
     */
    this['payment_ref_no'] = null;
    
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    /**
     * @member {String} shareapp_remark
     */
    this['shareapp_remark'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('shareapp_rowid'))
            this['shareapp_rowid'] = data['shareapp_rowid'];
        
        if(data.hasOwnProperty('shareapp_no'))
            this['shareapp_no'] = data['shareapp_no'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('signature_farmer'))
            this['signature_farmer'] = data['signature_farmer'];
        
        if(data.hasOwnProperty('photo_farmer'))
            this['photo_farmer'] = data['photo_farmer'];
        
        if(data.hasOwnProperty('applied_on'))
            this['applied_on'] = data['applied_on'];
        
        if(data.hasOwnProperty('applied_shares'))
            this['applied_shares'] = data['applied_shares'];
        
        if(data.hasOwnProperty('amount_due'))
            this['amount_due'] = data['amount_due'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('payment_ref_no'))
            this['payment_ref_no'] = data['payment_ref_no'];
        
        if(data.hasOwnProperty('payment_status'))
            this['payment_status'] = data['payment_status'];
        
        if(data.hasOwnProperty('shareapp_remark'))
            this['shareapp_remark'] = data['shareapp_remark'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveProcessShareAppResponse(data, format)
{
    /**
     * @member {saveProcessShareAppResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveProcessShareAppResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveProcessShareAppResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveProcessShareAppResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveProcessShareAppResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveProcessShareAppResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveProcessShareAppResponseApplicationException(data)
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

function saveProcessShareAppResponsecontext(data)
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
     * @member {saveProcessShareAppResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveProcessShareAppResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveProcessShareAppResponseHeader(data['Header']);
        }
    }
}

function saveProcessShareAppResponseHeader(data)
{
    /**
     * @member {Int32} shareapp_rowid
     */
    this['shareapp_rowid'] = null;
    
    /**
     * @member {String} shareapp_no
     */
    this['shareapp_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['shareapp_rowid'] = parseInt(data.getElementsByTagName("shareapp_rowid")[0].lastChild.nodeValue);
            
            this['shareapp_no'] = (data.getElementsByTagName("shareapp_no")[0].lastChild != null) ? data.getElementsByTagName("shareapp_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['shareapp_rowid'] = data['shareapp_rowid'];
            
            this['shareapp_no'] = data['shareapp_no'];
        }
    }
}

