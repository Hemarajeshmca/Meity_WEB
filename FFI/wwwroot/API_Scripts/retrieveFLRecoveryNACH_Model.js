var responseDataFormat = "JSON";

function retrieveFLRecoveryNACHRequest(data)
{
    /**
     * @member {retrieveFLRecoveryNACHRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLRecoveryNACHRequestcontext(data['context']);
    }
}

function retrieveFLRecoveryNACHRequestcontext(data)
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
     * @member {retrieveFLRecoveryNACHRequestHeader} Header
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
            this['Header'] = new retrieveFLRecoveryNACHRequestHeader(data['Header']);
    }
}

function retrieveFLRecoveryNACHRequestHeader(data)
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

function retrieveFLRecoveryNACHResponse(data, format)
{
    /**
     * @member {retrieveFLRecoveryNACHResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLRecoveryNACHResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLRecoveryNACHResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLRecoveryNACHResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLRecoveryNACHResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLRecoveryNACHResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLRecoveryNACHResponseApplicationException(data)
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

function retrieveFLRecoveryNACHResponsecontext(data)
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
     * @member {retrieveFLRecoveryNACHResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLRecoveryNACHResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLRecoveryNACHResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveFLRecoveryNACHResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLRecoveryNACHResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveFLRecoveryNACHResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveFLRecoveryNACHResponseHeader(data)
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

function retrieveFLRecoveryNACHResponseDetail(data)
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
     * @member {String} dr_bank_acc_no
     */
    this['dr_bank_acc_no'] = null;
    
    /**
     * @member {String} dr_bank_acc_type
     */
    this['dr_bank_acc_type'] = null;
    
    /**
     * @member {String} dr_bank_acc_type_desc
     */
    this['dr_bank_acc_type_desc'] = null;
    
    /**
     * @member {String} dr_bank_code
     */
    this['dr_bank_code'] = null;
    
    /**
     * @member {String} dr_bank_ifsc_code
     */
    this['dr_bank_ifsc_code'] = null;
    
    /**
     * @member {String} cr_bank_acc_no
     */
    this['cr_bank_acc_no'] = null;
    
    /**
     * @member {String} cr_bank_acc_type
     */
    this['cr_bank_acc_type'] = null;
    
    /**
     * @member {String} cr_bank_acc_type_desc
     */
    this['cr_bank_acc_type_desc'] = null;
    
    /**
     * @member {String} cr_bank_code
     */
    this['cr_bank_code'] = null;
    
    /**
     * @member {String} cr_bank_ifsc_code
     */
    this['cr_bank_ifsc_code'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
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
            
            this['dr_bank_acc_no'] = (data.getElementsByTagName("dr_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['dr_bank_acc_type'] = (data.getElementsByTagName("dr_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['dr_bank_acc_type_desc'] = (data.getElementsByTagName("dr_bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['dr_bank_code'] = (data.getElementsByTagName("dr_bank_code")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_code")[0].lastChild.nodeValue : "";
            
            this['dr_bank_ifsc_code'] = (data.getElementsByTagName("dr_bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['cr_bank_acc_no'] = (data.getElementsByTagName("cr_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['cr_bank_acc_type'] = (data.getElementsByTagName("cr_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['cr_bank_acc_type_desc'] = (data.getElementsByTagName("cr_bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['cr_bank_code'] = (data.getElementsByTagName("cr_bank_code")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_code")[0].lastChild.nodeValue : "";
            
            this['cr_bank_ifsc_code'] = (data.getElementsByTagName("cr_bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
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
            
            this['dr_bank_acc_no'] = data['dr_bank_acc_no'];
            
            this['dr_bank_acc_type'] = data['dr_bank_acc_type'];
            
            this['dr_bank_acc_type_desc'] = data['dr_bank_acc_type_desc'];
            
            this['dr_bank_code'] = data['dr_bank_code'];
            
            this['dr_bank_ifsc_code'] = data['dr_bank_ifsc_code'];
            
            this['cr_bank_acc_no'] = data['cr_bank_acc_no'];
            
            this['cr_bank_acc_type'] = data['cr_bank_acc_type'];
            
            this['cr_bank_acc_type_desc'] = data['cr_bank_acc_type_desc'];
            
            this['cr_bank_code'] = data['cr_bank_code'];
            
            this['cr_bank_ifsc_code'] = data['cr_bank_ifsc_code'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
        }
    }
}

