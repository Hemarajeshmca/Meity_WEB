var responseDataFormat = "JSON";

function saveFLDeposit_Slip_GenerationRequest(data)
{
    /**
     * @member {saveFLDeposit_Slip_GenerationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFLDeposit_Slip_GenerationRequestcontext(data['context']);
    }
}

function saveFLDeposit_Slip_GenerationRequestcontext(data)
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
     * @member {saveFLDeposit_Slip_GenerationRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFLDeposit_Slip_GenerationRequestDetail} Detail
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
            this['Header'] = new saveFLDeposit_Slip_GenerationRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveFLDeposit_Slip_GenerationRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveFLDeposit_Slip_GenerationRequestHeader(data)
{
    /**
     * @member {String} select_option
     */
    this['select_option'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('select_option'))
            this['select_option'] = data['select_option'];
        
        if(data.hasOwnProperty('run_date'))
            this['run_date'] = data['run_date'];
        
    }
}

function saveFLDeposit_Slip_GenerationRequestDetail(data)
{
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_ifsc_code
     */
    this['bank_ifsc_code'] = null;
    
    /**
     * @member {String} branch_name
     */
    this['branch_name'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {String} deposit_date
     */
    this['deposit_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('bank_acc_no'))
            this['bank_acc_no'] = data['bank_acc_no'];
        
        if(data.hasOwnProperty('bank_acc_type'))
            this['bank_acc_type'] = data['bank_acc_type'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('bank_ifsc_code'))
            this['bank_ifsc_code'] = data['bank_ifsc_code'];
        
        if(data.hasOwnProperty('branch_name'))
            this['branch_name'] = data['branch_name'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('deposit_date'))
            this['deposit_date'] = data['deposit_date'];
        
    }
}

function saveFLDeposit_Slip_GenerationResponse(data, format)
{
    /**
     * @member {saveFLDeposit_Slip_GenerationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFLDeposit_Slip_GenerationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFLDeposit_Slip_GenerationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFLDeposit_Slip_GenerationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFLDeposit_Slip_GenerationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFLDeposit_Slip_GenerationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFLDeposit_Slip_GenerationResponseApplicationException(data)
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

function saveFLDeposit_Slip_GenerationResponsecontext(data)
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

