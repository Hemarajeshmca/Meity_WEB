var responseDataFormat = "JSON";

function saveShareRefundRequest(data)
{
    /**
     * @member {saveShareRefundRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveShareRefundRequestcontext(data['context']);
    }
}

function saveShareRefundRequestcontext(data)
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
     * @member {saveShareRefundRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveShareRefundRequestDetail} Detail
     */
    this['Detail'] = null;
    
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
            this['Header'] = new saveShareRefundRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveShareRefundRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveShareRefundRequestHeader(data)
{
    /**
     * @member {String} refund_status
     */
    this['refund_status'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} refund_date
     */
    this['refund_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('refund_status'))
            this['refund_status'] = data['refund_status'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('refund_date'))
            this['refund_date'] = data['refund_date'];
        
    }
}

function saveShareRefundRequestDetail(data)
{
    /**
     * @member {Int32} shareapp_rowid
     */
    this['shareapp_rowid'] = null;
    
    /**
     * @member {Int32} refund_rowid
     */
    this['refund_rowid'] = null;
    
    /**
     * @member {String} shareapp_no
     */
    this['shareapp_no'] = null;
    
    /**
     * @member {Int16} applied_shares
     */
    this['applied_shares'] = null;
    
    /**
     * @member {Int16} rejected_shares
     */
    this['rejected_shares'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} refund_date
     */
    this['refund_date'] = null;
    
    /**
     * @member {Decimal} refund_amount
     */
    this['refund_amount'] = null;
    
    /**
     * @member {String} payment_ref_no
     */
    this['payment_ref_no'] = null;
    
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
        if(data.hasOwnProperty('shareapp_rowid'))
            this['shareapp_rowid'] = data['shareapp_rowid'];
        
        if(data.hasOwnProperty('refund_rowid'))
            this['refund_rowid'] = data['refund_rowid'];
        
        if(data.hasOwnProperty('shareapp_no'))
            this['shareapp_no'] = data['shareapp_no'];
        
        if(data.hasOwnProperty('applied_shares'))
            this['applied_shares'] = data['applied_shares'];
        
        if(data.hasOwnProperty('rejected_shares'))
            this['rejected_shares'] = data['rejected_shares'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('refund_date'))
            this['refund_date'] = data['refund_date'];
        
        if(data.hasOwnProperty('refund_amount'))
            this['refund_amount'] = data['refund_amount'];
        
        if(data.hasOwnProperty('payment_ref_no'))
            this['payment_ref_no'] = data['payment_ref_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveShareRefundResponse(data, format)
{
    /**
     * @member {saveShareRefundResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveShareRefundResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveShareRefundResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveShareRefundResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveShareRefundResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveShareRefundResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveShareRefundResponseApplicationException(data)
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

function saveShareRefundResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

