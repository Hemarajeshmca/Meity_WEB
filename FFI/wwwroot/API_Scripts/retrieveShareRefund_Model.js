var responseDataFormat = "JSON";

function retrieveShareRefundRequest(data)
{
    /**
     * @member {retrieveShareRefundRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveShareRefundRequestcontext(data['context']);
    }
}

function retrieveShareRefundRequestcontext(data)
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
     * @member {retrieveShareRefundRequestHeader} Header
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
            this['Header'] = new retrieveShareRefundRequestHeader(data['Header']);
    }
}

function retrieveShareRefundRequestHeader(data)
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

function retrieveShareRefundResponse(data, format)
{
    /**
     * @member {retrieveShareRefundResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveShareRefundResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveShareRefundResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveShareRefundResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveShareRefundResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveShareRefundResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveShareRefundResponseApplicationException(data)
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

function retrieveShareRefundResponsecontext(data)
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
     * @member {retrieveShareRefundResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveShareRefundResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveShareRefundResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveShareRefundResponseDetail(data)
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
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
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
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
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
            this['shareapp_rowid'] = parseInt(data.getElementsByTagName("shareapp_rowid")[0].lastChild.nodeValue);
            
            this['refund_rowid'] = parseInt(data.getElementsByTagName("refund_rowid")[0].lastChild.nodeValue);
            
            this['shareapp_no'] = (data.getElementsByTagName("shareapp_no")[0].lastChild != null) ? data.getElementsByTagName("shareapp_no")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['applied_shares'] = parseInt(data.getElementsByTagName("applied_shares")[0].lastChild.nodeValue);
            
            this['rejected_shares'] = parseInt(data.getElementsByTagName("rejected_shares")[0].lastChild.nodeValue);
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['refund_date'] = (data.getElementsByTagName("refund_date")[0].lastChild != null) ? data.getElementsByTagName("refund_date")[0].lastChild.nodeValue : "";
            
            this['refund_amount'] = parseFloat(data.getElementsByTagName("refund_amount")[0].lastChild.nodeValue);
            
            this['payment_ref_no'] = (data.getElementsByTagName("payment_ref_no")[0].lastChild != null) ? data.getElementsByTagName("payment_ref_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['shareapp_rowid'] = data['shareapp_rowid'];
            
            this['refund_rowid'] = data['refund_rowid'];
            
            this['shareapp_no'] = data['shareapp_no'];
            
            this['member_name'] = data['member_name'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['applied_shares'] = data['applied_shares'];
            
            this['rejected_shares'] = data['rejected_shares'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['refund_date'] = data['refund_date'];
            
            this['refund_amount'] = data['refund_amount'];
            
            this['payment_ref_no'] = data['payment_ref_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

