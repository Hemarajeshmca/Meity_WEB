var responseDataFormat = "JSON";

function retrieveServiceRequestTransferRequest(data)
{
    /**
     * @member {retrieveServiceRequestTransferRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveServiceRequestTransferRequestcontext(data['context']);
    }
}

function retrieveServiceRequestTransferRequestcontext(data)
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
     * @member {retrieveServiceRequestTransferRequestHeader} Header
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
            this['Header'] = new retrieveServiceRequestTransferRequestHeader(data['Header']);
    }
}

function retrieveServiceRequestTransferRequestHeader(data)
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

function retrieveServiceRequestTransferResponse(data, format)
{
    /**
     * @member {retrieveServiceRequestTransferResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveServiceRequestTransferResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveServiceRequestTransferResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveServiceRequestTransferResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveServiceRequestTransferResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveServiceRequestTransferResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveServiceRequestTransferResponseApplicationException(data)
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

function retrieveServiceRequestTransferResponsecontext(data)
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
     * @member {retrieveServiceRequestTransferResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveServiceRequestTransferResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveServiceRequestTransferResponseHeader(data['Header']);
        }
    }
}

function retrieveServiceRequestTransferResponseHeader(data)
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
     * @member {String} tran_member_code
     */
    this['tran_member_code'] = null;
    
    /**
     * @member {String} tran_member_desc
     */
    this['tran_member_desc'] = null;
    
    /**
     * @member {String} tran_farmer_code
     */
    this['tran_farmer_code'] = null;
    
    /**
     * @member {String} tran_farmer_desc
     */
    this['tran_farmer_desc'] = null;
    
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
            
            this['tran_member_code'] = (data.getElementsByTagName("tran_member_code")[0].lastChild != null) ? data.getElementsByTagName("tran_member_code")[0].lastChild.nodeValue : "";
            
            this['tran_member_desc'] = (data.getElementsByTagName("tran_member_desc")[0].lastChild != null) ? data.getElementsByTagName("tran_member_desc")[0].lastChild.nodeValue : "";
            
            this['tran_farmer_code'] = (data.getElementsByTagName("tran_farmer_code")[0].lastChild != null) ? data.getElementsByTagName("tran_farmer_code")[0].lastChild.nodeValue : "";
            
            this['tran_farmer_desc'] = (data.getElementsByTagName("tran_farmer_desc")[0].lastChild != null) ? data.getElementsByTagName("tran_farmer_desc")[0].lastChild.nodeValue : "";
            
            this['tran_member_sign'] = (data.getElementsByTagName("tran_member_sign")[0].lastChild != null) ? data.getElementsByTagName("tran_member_sign")[0].lastChild.nodeValue : "";
            
            this['tran_farmer_name'] = (data.getElementsByTagName("tran_farmer_name")[0].lastChild != null) ? data.getElementsByTagName("tran_farmer_name")[0].lastChild.nodeValue : "";
            
            this['tran_sur_name'] = (data.getElementsByTagName("tran_sur_name")[0].lastChild != null) ? data.getElementsByTagName("tran_sur_name")[0].lastChild.nodeValue : "";
            
            this['tran_reason'] = (data.getElementsByTagName("tran_reason")[0].lastChild != null) ? data.getElementsByTagName("tran_reason")[0].lastChild.nodeValue : "";
            
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
            
            this['tran_member_code'] = data['tran_member_code'];
            
            this['tran_member_desc'] = data['tran_member_desc'];
            
            this['tran_farmer_code'] = data['tran_farmer_code'];
            
            this['tran_farmer_desc'] = data['tran_farmer_desc'];
            
            this['tran_member_sign'] = data['tran_member_sign'];
            
            this['tran_farmer_name'] = data['tran_farmer_name'];
            
            this['tran_sur_name'] = data['tran_sur_name'];
            
            this['tran_reason'] = data['tran_reason'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
            
            this['sr_comments'] = data['sr_comments'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

