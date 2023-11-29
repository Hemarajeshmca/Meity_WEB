var responseDataFormat = "JSON";

function saveServiceRequestTransferRequest(data)
{
    /**
     * @member {saveServiceRequestTransferRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveServiceRequestTransferRequestcontext(data['context']);
    }
}

function saveServiceRequestTransferRequestcontext(data)
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
     * @member {saveServiceRequestTransferRequestHeader} Header
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
            this['Header'] = new saveServiceRequestTransferRequestHeader(data['Header']);
    }
}

function saveServiceRequestTransferRequestHeader(data)
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
     * @member {String} tran_member_code
     */
    this['tran_member_code'] = null;
    
    /**
     * @member {String} tran_farmer_code
     */
    this['tran_farmer_code'] = null;
    
    /**
     * @member {String} tran_member_sign
     */
    this['tran_member_sign'] = null;
    
    /**
     * @member {String} tran_farmer_name
     */
    this['tran_farmer_name'] = null;
    
    /**
     * @member {String} tran_sur_name
     */
    this['tran_sur_name'] = null;
    
    /**
     * @member {String} tran_reason
     */
    this['tran_reason'] = null;
    
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
        
        if(data.hasOwnProperty('tran_member_code'))
            this['tran_member_code'] = data['tran_member_code'];
        
        if(data.hasOwnProperty('tran_farmer_code'))
            this['tran_farmer_code'] = data['tran_farmer_code'];
        
        if(data.hasOwnProperty('tran_member_sign'))
            this['tran_member_sign'] = data['tran_member_sign'];
        
        if(data.hasOwnProperty('tran_farmer_name'))
            this['tran_farmer_name'] = data['tran_farmer_name'];
        
        if(data.hasOwnProperty('tran_sur_name'))
            this['tran_sur_name'] = data['tran_sur_name'];
        
        if(data.hasOwnProperty('tran_reason'))
            this['tran_reason'] = data['tran_reason'];
        
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

function saveServiceRequestTransferResponse(data, format)
{
    /**
     * @member {saveServiceRequestTransferResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveServiceRequestTransferResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveServiceRequestTransferResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveServiceRequestTransferResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveServiceRequestTransferResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveServiceRequestTransferResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveServiceRequestTransferResponseApplicationException(data)
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

function saveServiceRequestTransferResponsecontext(data)
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
     * @member {saveServiceRequestTransferResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveServiceRequestTransferResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveServiceRequestTransferResponseHeader(data['Header']);
        }
    }
}

function saveServiceRequestTransferResponseHeader(data)
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

