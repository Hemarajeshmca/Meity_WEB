var responseDataFormat = "JSON";

function retrieveFLRecoveryPDCRequest(data)
{
    /**
     * @member {retrieveFLRecoveryPDCRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLRecoveryPDCRequestcontext(data['context']);
    }
}

function retrieveFLRecoveryPDCRequestcontext(data)
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
     * @member {retrieveFLRecoveryPDCRequestHeader} Header
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
            this['Header'] = new retrieveFLRecoveryPDCRequestHeader(data['Header']);
    }
}

function retrieveFLRecoveryPDCRequestHeader(data)
{
    /**
     * @member {String} fig_short_name
     */
    this['fig_short_name'] = null;
    
    /**
     * @member {String} loanrecovery_type
     */
    this['loanrecovery_type'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    /**
     * @member {String} instalment_month
     */
    this['instalment_month'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fig_short_name'))
            this['fig_short_name'] = data['fig_short_name'];
        
        if(data.hasOwnProperty('loanrecovery_type'))
            this['loanrecovery_type'] = data['loanrecovery_type'];
        
        if(data.hasOwnProperty('run_date'))
            this['run_date'] = data['run_date'];
        
        if(data.hasOwnProperty('instalment_month'))
            this['instalment_month'] = data['instalment_month'];
        
    }
}

function retrieveFLRecoveryPDCResponse(data, format)
{
    /**
     * @member {retrieveFLRecoveryPDCResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLRecoveryPDCResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLRecoveryPDCResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLRecoveryPDCResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLRecoveryPDCResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLRecoveryPDCResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLRecoveryPDCResponseApplicationException(data)
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

function retrieveFLRecoveryPDCResponsecontext(data)
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
     * @member {retrieveFLRecoveryPDCResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLRecoveryPDCResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLRecoveryPDCResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveFLRecoveryPDCResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLRecoveryPDCResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveFLRecoveryPDCResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveFLRecoveryPDCResponseHeader(data)
{
    /**
     * @member {String} fig_short_name
     */
    this['fig_short_name'] = null;
    
    /**
     * @member {String} loanrecovery_type
     */
    this['loanrecovery_type'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    /**
     * @member {String} instalment_month
     */
    this['instalment_month'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("fig_short_name")[0].attributes.length == 0) //Check NULL value
                this['fig_short_name'] = (data.getElementsByTagName("fig_short_name")[0].lastChild != null) ? data.getElementsByTagName("fig_short_name")[0].lastChild.nodeValue : "";
            
            this['loanrecovery_type'] = (data.getElementsByTagName("loanrecovery_type")[0].lastChild != null) ? data.getElementsByTagName("loanrecovery_type")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("run_date")[0].attributes.length == 0) //Check NULL value
                this['run_date'] = (data.getElementsByTagName("run_date")[0].lastChild != null) ? data.getElementsByTagName("run_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("instalment_month")[0].attributes.length == 0) //Check NULL value
                this['instalment_month'] = (data.getElementsByTagName("instalment_month")[0].lastChild != null) ? data.getElementsByTagName("instalment_month")[0].lastChild.nodeValue : "";
        }
        else {
            this['fig_short_name'] = data['fig_short_name'];
            
            this['loanrecovery_type'] = data['loanrecovery_type'];
            
            this['run_date'] = data['run_date'];
            
            this['instalment_month'] = data['instalment_month'];
        }
    }
}

function retrieveFLRecoveryPDCResponseDetail(data)
{
    /**
     * @member {String} fig_short_name
     */
    this['fig_short_name'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int16} instalment_no
     */
    this['instalment_no'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {String} chq_no
     */
    this['chq_no'] = null;
    
    /**
     * @member {String} box_no
     */
    this['box_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['fig_short_name'] = (data.getElementsByTagName("fig_short_name")[0].lastChild != null) ? data.getElementsByTagName("fig_short_name")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['instalment_no'] = parseInt(data.getElementsByTagName("instalment_no")[0].lastChild.nodeValue);
            
            this['instalment_amount'] = parseFloat(data.getElementsByTagName("instalment_amount")[0].lastChild.nodeValue);
            
            this['instalment_date'] = (data.getElementsByTagName("instalment_date")[0].lastChild != null) ? data.getElementsByTagName("instalment_date")[0].lastChild.nodeValue : "";
            
            this['chq_no'] = (data.getElementsByTagName("chq_no")[0].lastChild != null) ? data.getElementsByTagName("chq_no")[0].lastChild.nodeValue : "";
            
            this['box_no'] = (data.getElementsByTagName("box_no")[0].lastChild != null) ? data.getElementsByTagName("box_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['fig_short_name'] = data['fig_short_name'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['loan_no'] = data['loan_no'];
            
            this['instalment_no'] = data['instalment_no'];
            
            this['instalment_amount'] = data['instalment_amount'];
            
            this['instalment_date'] = data['instalment_date'];
            
            this['chq_no'] = data['chq_no'];
            
            this['box_no'] = data['box_no'];
        }
    }
}

