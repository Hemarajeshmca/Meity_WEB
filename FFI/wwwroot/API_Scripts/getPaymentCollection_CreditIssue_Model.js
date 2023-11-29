var responseDataFormat = "JSON";

function getPaymentCollection_CreditIssueRequest(data)
{
    /**
     * @member {getPaymentCollection_CreditIssueRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getPaymentCollection_CreditIssueRequestcontext(data['context']);
    }
}

function getPaymentCollection_CreditIssueRequestcontext(data)
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
     * @member {getPaymentCollection_CreditIssueRequestHeader} Header
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
            this['Header'] = new getPaymentCollection_CreditIssueRequestHeader(data['Header']);
    }
}

function getPaymentCollection_CreditIssueRequestHeader(data)
{
    /**
     * @member {Int32} creditissue_rowid
     */
    this['creditissue_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('creditissue_rowid'))
            this['creditissue_rowid'] = data['creditissue_rowid'];
        
    }
}

function getPaymentCollection_CreditIssueResponse(data, format)
{
    /**
     * @member {getPaymentCollection_CreditIssueResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getPaymentCollection_CreditIssueResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getPaymentCollection_CreditIssueResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getPaymentCollection_CreditIssueResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getPaymentCollection_CreditIssueResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getPaymentCollection_CreditIssueResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getPaymentCollection_CreditIssueResponseApplicationException(data)
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

function getPaymentCollection_CreditIssueResponsecontext(data)
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
     * @member {getPaymentCollection_CreditIssueResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getPaymentCollection_CreditIssueResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getPaymentCollection_CreditIssueResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new getPaymentCollection_CreditIssueResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getPaymentCollection_CreditIssueResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new getPaymentCollection_CreditIssueResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function getPaymentCollection_CreditIssueResponseHeader(data)
{
    /**
     * @member {String} creditissue_no
     */
    this['creditissue_no'] = null;
    
    /**
     * @member {String} creditissue_date
     */
    this['creditissue_date'] = null;
    
    /**
     * @member {Decimal} invoice_amount
     */
    this['invoice_amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("creditissue_no")[0].attributes.length == 0) //Check NULL value
                this['creditissue_no'] = (data.getElementsByTagName("creditissue_no")[0].lastChild != null) ? data.getElementsByTagName("creditissue_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("creditissue_date")[0].attributes.length == 0) //Check NULL value
                this['creditissue_date'] = (data.getElementsByTagName("creditissue_date")[0].lastChild != null) ? data.getElementsByTagName("creditissue_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("invoice_amount")[0].attributes.length == 0) //Check NULL value
                this['invoice_amount'] = data.getElementsByTagName("invoice_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
        }
        else {
            this['creditissue_no'] = data['creditissue_no'];
            
            this['creditissue_date'] = data['creditissue_date'];
            
            this['invoice_amount'] = data['invoice_amount'].toFixed(2);
            
            this['balance_amount'] = data['balance_amount'].toFixed(2);
        }
    }
}

function getPaymentCollection_CreditIssueResponseDetail(data)
{
    /**
     * @member {Int32} paymentcollection_rowid
     */
    this['paymentcollection_rowid'] = null;
    
    /**
     * @member {String} payment_type
     */
    this['payment_type'] = null;
    
    /**
     * @member {String} payment_type_desc
     */
    this['payment_type_desc'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} ref_no
     */
    this['ref_no'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} process_status_desc
     */
    this['process_status_desc'] = null;
    
    /**
     * @member {Decimal} paid_amount
     */
    this['paid_amount'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['paymentcollection_rowid'] = data.getElementsByTagName("paymentcollection_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_type")[0].attributes.length == 0) //Check NULL value
                this['payment_type'] = (data.getElementsByTagName("payment_type")[0].lastChild != null) ? data.getElementsByTagName("payment_type")[0].lastChild.nodeValue : "";
            
            this['payment_type_desc'] = (data.getElementsByTagName("payment_type_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_type_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_no")[0].attributes.length == 0) //Check NULL value
                this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_amount")[0].attributes.length == 0) //Check NULL value
                this['payment_amount'] = data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_mode")[0].attributes.length == 0) //Check NULL value
                this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ref_no")[0].attributes.length == 0) //Check NULL value
                this['ref_no'] = (data.getElementsByTagName("ref_no")[0].lastChild != null) ? data.getElementsByTagName("ref_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_date")[0].attributes.length == 0) //Check NULL value
                this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status_desc")[0].attributes.length == 0) //Check NULL value
                this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("paid_amount")[0].attributes.length == 0) //Check NULL value
                this['paid_amount'] = data.getElementsByTagName("paid_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("mode_flag")[0].attributes.length == 0) //Check NULL value
                this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
            
            this['payment_type'] = data['payment_type'];
            
            this['payment_type_desc'] = data['payment_type_desc'];
            
            this['payment_no'] = data['payment_no'];
            
            this['payment_amount'] = data['payment_amount'].toFixed(2);
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['ref_no'] = data['ref_no'];
            
            this['payment_date'] = data['payment_date'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['paid_amount'] = data['paid_amount'].toFixed(2);
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

