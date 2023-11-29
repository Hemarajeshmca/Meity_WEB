var responseDataFormat = "JSON";

function retrieveFLRepayment_ModeRequest(data)
{
    /**
     * @member {retrieveFLRepayment_ModeRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLRepayment_ModeRequestcontext(data['context']);
    }
}

function retrieveFLRepayment_ModeRequestcontext(data)
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
     * @member {retrieveFLRepayment_ModeRequestHeader} Header
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
            this['Header'] = new retrieveFLRepayment_ModeRequestHeader(data['Header']);
    }
}

function retrieveFLRepayment_ModeRequestHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} start_date
     */
    this['start_date'] = null;
    
    /**
     * @member {String} end_date
     */
    this['end_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('start_date'))
            this['start_date'] = data['start_date'];
        
        if(data.hasOwnProperty('end_date'))
            this['end_date'] = data['end_date'];
        
    }
}

function retrieveFLRepayment_ModeResponse(data, format)
{
    /**
     * @member {retrieveFLRepayment_ModeResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLRepayment_ModeResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLRepayment_ModeResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLRepayment_ModeResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLRepayment_ModeResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLRepayment_ModeResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLRepayment_ModeResponseApplicationException(data)
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

function retrieveFLRepayment_ModeResponsecontext(data)
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
     * @member {retrieveFLRepayment_ModeResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLRepayment_ModeResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLRepayment_ModeResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveFLRepayment_ModeResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLRepayment_ModeResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveFLRepayment_ModeResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveFLRepayment_ModeResponseHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} start_date
     */
    this['start_date'] = null;
    
    /**
     * @member {String} end_date
     */
    this['end_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['start_date'] = (data.getElementsByTagName("start_date")[0].lastChild != null) ? data.getElementsByTagName("start_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("end_date")[0].attributes.length == 0) //Check NULL value
                this['end_date'] = (data.getElementsByTagName("end_date")[0].lastChild != null) ? data.getElementsByTagName("end_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['loan_no'] = data['loan_no'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['start_date'] = data['start_date'];
            
            this['end_date'] = data['end_date'];
        }
    }
}

function retrieveFLRepayment_ModeResponseDetail(data)
{
    /**
     * @member {String} chq_no
     */
    this['chq_no'] = null;
    
    /**
     * @member {String} chq_date
     */
    this['chq_date'] = null;
    
    /**
     * @member {Decimal} chq_amount
     */
    this['chq_amount'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {String} duepayment_date
     */
    this['duepayment_date'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {String} box_no
     */
    this['box_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {Decimal} principle_amount
     */
    this['principle_amount'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("chq_no")[0].attributes.length == 0) //Check NULL value
                this['chq_no'] = (data.getElementsByTagName("chq_no")[0].lastChild != null) ? data.getElementsByTagName("chq_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("chq_date")[0].attributes.length == 0) //Check NULL value
                this['chq_date'] = (data.getElementsByTagName("chq_date")[0].lastChild != null) ? data.getElementsByTagName("chq_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("chq_amount")[0].attributes.length == 0) //Check NULL value
                this['chq_amount'] = parseFloat(data.getElementsByTagName("chq_amount")[0].lastChild.nodeValue);
            
            this['instalment_date'] = (data.getElementsByTagName("instalment_date")[0].lastChild != null) ? data.getElementsByTagName("instalment_date")[0].lastChild.nodeValue : "";
            
            this['duepayment_date'] = (data.getElementsByTagName("duepayment_date")[0].lastChild != null) ? data.getElementsByTagName("duepayment_date")[0].lastChild.nodeValue : "";
            
            this['instalment_amount'] = parseFloat(data.getElementsByTagName("instalment_amount")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("box_no")[0].attributes.length == 0) //Check NULL value
                this['box_no'] = (data.getElementsByTagName("box_no")[0].lastChild != null) ? data.getElementsByTagName("box_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['principle_amount'] = parseFloat(data.getElementsByTagName("principle_amount")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['chq_no'] = data['chq_no'];
            
            this['chq_date'] = data['chq_date'];
            
            this['chq_amount'] = data['chq_amount'];
            
            this['instalment_date'] = data['instalment_date'];
            
            this['duepayment_date'] = data['duepayment_date'];
            
            this['instalment_amount'] = data['instalment_amount'];
            
            this['box_no'] = data['box_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['principle_amount'] = data['principle_amount'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

