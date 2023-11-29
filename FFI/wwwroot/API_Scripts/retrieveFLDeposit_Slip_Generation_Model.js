var responseDataFormat = "JSON";

function retrieveFLDeposit_Slip_GenerationRequest(data)
{
    /**
     * @member {retrieveFLDeposit_Slip_GenerationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLDeposit_Slip_GenerationRequestcontext(data['context']);
    }
}

function retrieveFLDeposit_Slip_GenerationRequestcontext(data)
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
     * @member {retrieveFLDeposit_Slip_GenerationRequestHeader} Header
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
            this['Header'] = new retrieveFLDeposit_Slip_GenerationRequestHeader(data['Header']);
    }
}

function retrieveFLDeposit_Slip_GenerationRequestHeader(data)
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

function retrieveFLDeposit_Slip_GenerationResponse(data, format)
{
    /**
     * @member {retrieveFLDeposit_Slip_GenerationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLDeposit_Slip_GenerationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLDeposit_Slip_GenerationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLDeposit_Slip_GenerationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLDeposit_Slip_GenerationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLDeposit_Slip_GenerationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLDeposit_Slip_GenerationResponseApplicationException(data)
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

function retrieveFLDeposit_Slip_GenerationResponsecontext(data)
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
     * @member {retrieveFLDeposit_Slip_GenerationResponseDetail} Detail
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
                Detail.push(new retrieveFLDeposit_Slip_GenerationResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
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
                    Detail.push(new retrieveFLDeposit_Slip_GenerationResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveFLDeposit_Slip_GenerationResponseDetail(data)
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
     * @member {String} bank_acc_type_desc
     */
    this['bank_acc_type_desc'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_name
     */
    this['bank_name'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['bank_name'] = (data.getElementsByTagName("bank_name")[0].lastChild != null) ? data.getElementsByTagName("bank_name")[0].lastChild.nodeValue : "";
            
            this['bank_ifsc_code'] = (data.getElementsByTagName("bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['branch_name'] = (data.getElementsByTagName("branch_name")[0].lastChild != null) ? data.getElementsByTagName("branch_name")[0].lastChild.nodeValue : "";
            
            this['amount'] = parseFloat(data.getElementsByTagName("amount")[0].lastChild.nodeValue);
            
            this['deposit_date'] = (data.getElementsByTagName("deposit_date")[0].lastChild != null) ? data.getElementsByTagName("deposit_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_code'] = data['bank_code'];
            
            this['bank_name'] = data['bank_name'];
            
            this['bank_ifsc_code'] = data['bank_ifsc_code'];
            
            this['branch_name'] = data['branch_name'];
            
            this['amount'] = data['amount'];
            
            this['deposit_date'] = data['deposit_date'];
        }
    }
}

