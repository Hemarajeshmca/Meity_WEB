var responseDataFormat = "JSON";

function PAWHS_getPaymentAdviceRequest(data)
{
    /**
     * @member {PAWHS_getPaymentAdviceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getPaymentAdviceRequestcontext(data['context']);
    }
}

function PAWHS_getPaymentAdviceRequestcontext(data)
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
     * @member {PAWHS_getPaymentAdviceRequestHeader} Header
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
            this['Header'] = new PAWHS_getPaymentAdviceRequestHeader(data['Header']);
    }
}

function PAWHS_getPaymentAdviceRequestHeader(data)
{
    /**
     * @member {Int32} payment_rowid
     */
    this['payment_rowid'] = null;
    
    /**
     * @member {String} payment_id
     */
    this['payment_id'] = null;
    
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('payment_rowid'))
            this['payment_rowid'] = data['payment_rowid'];
        
        if(data.hasOwnProperty('payment_id'))
            this['payment_id'] = data['payment_id'];
        
        if(data.hasOwnProperty('from_date'))
            this['from_date'] = data['from_date'];
        
        if(data.hasOwnProperty('to_date'))
            this['to_date'] = data['to_date'];
        
    }
}

function PAWHS_getPaymentAdviceResponse(data, format)
{
    /**
     * @member {PAWHS_getPaymentAdviceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getPaymentAdviceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getPaymentAdviceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getPaymentAdviceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getPaymentAdviceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getPaymentAdviceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getPaymentAdviceResponseApplicationException(data)
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

function PAWHS_getPaymentAdviceResponsecontext(data)
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
     * @member {PAWHS_getPaymentAdviceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getPaymentAdviceResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getPaymentAdviceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_getPaymentAdviceResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getPaymentAdviceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_getPaymentAdviceResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_getPaymentAdviceResponseHeader(data)
{
    /**
     * @member {Int32} payment_rowid
     */
    this['payment_rowid'] = null;
    
    /**
     * @member {String} payment_id
     */
    this['payment_id'] = null;
    
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {DateTime} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['payment_rowid'] = parseInt(data.getElementsByTagName("payment_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("payment_id")[0].attributes.length == 0) //Check NULL value
                this['payment_id'] = (data.getElementsByTagName("payment_id")[0].lastChild != null) ? data.getElementsByTagName("payment_id")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("from_date")[0].attributes.length == 0) //Check NULL value
                this['from_date'] = (data.getElementsByTagName("from_date")[0].lastChild != null) ? data.getElementsByTagName("from_date")[0].lastChild.nodeValue : "";
            
            this['to_date'] = (data.getElementsByTagName("to_date")[0].lastChild != null) ? data.getElementsByTagName("to_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['payment_rowid'] = data['payment_rowid'];
            
            this['payment_id'] = data['payment_id'];
            
            this['from_date'] = data['from_date'];
            
            this['to_date'] = data['to_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function PAWHS_getPaymentAdviceResponseDetail(data)
{
    /**
     * @member {Int32} paymentdtl_rowid
     */
    this['paymentdtl_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {Decimal} amount_paid
     */
    this['amount_paid'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("paymentdtl_rowid")[0].attributes.length == 0) //Check NULL value
                this['paymentdtl_rowid'] = parseInt(data.getElementsByTagName("paymentdtl_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("farmer_code")[0].attributes.length == 0) //Check NULL value
                this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_name")[0].attributes.length == 0) //Check NULL value
                this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("amount_paid")[0].attributes.length == 0) //Check NULL value
                this['amount_paid'] = parseFloat(data.getElementsByTagName("amount_paid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentdtl_rowid'] = data['paymentdtl_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['amount_paid'] = data['amount_paid'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

