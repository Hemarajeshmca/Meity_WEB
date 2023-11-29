var responseDataFormat = "JSON";

function retrieveFLDisbursementAdviceGenRequest(data)
{
    /**
     * @member {retrieveFLDisbursementAdviceGenRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLDisbursementAdviceGenRequestcontext(data['context']);
    }
}

function retrieveFLDisbursementAdviceGenRequestcontext(data)
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
     * @member {retrieveFLDisbursementAdviceGenRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new retrieveFLDisbursementAdviceGenRequestFilter(data['Filter']);
    }
}

function retrieveFLDisbursementAdviceGenRequestFilter(data)
{
    /**
     * @member {String} status_option
     */
    this['status_option'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('status_option'))
            this['status_option'] = data['status_option'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveFLDisbursementAdviceGenResponse(data, format)
{
    /**
     * @member {retrieveFLDisbursementAdviceGenResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLDisbursementAdviceGenResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLDisbursementAdviceGenResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLDisbursementAdviceGenResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLDisbursementAdviceGenResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLDisbursementAdviceGenResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLDisbursementAdviceGenResponseApplicationException(data)
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

function retrieveFLDisbursementAdviceGenResponsecontext(data)
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
     * @member {retrieveFLDisbursementAdviceGenResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new retrieveFLDisbursementAdviceGenResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new retrieveFLDisbursementAdviceGenResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveFLDisbursementAdviceGenResponseList(data)
{
    /**
     * @member {Int32} loanapp_rowid
     */
    this['loanapp_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} loanapp_no
     */
    this['loanapp_no'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} loanscheme_desc
     */
    this['loanscheme_desc'] = null;
    
    /**
     * @member {String} app_date
     */
    this['app_date'] = null;
    
    /**
     * @member {Decimal} loan_amount
     */
    this['loan_amount'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {String} sanctioned_date
     */
    this['sanctioned_date'] = null;
    
    /**
     * @member {Decimal} sanctioned_amount
     */
    this['sanctioned_amount'] = null;
    
    /**
     * @member {String} beneficiary_type
     */
    this['beneficiary_type'] = null;
    
    /**
     * @member {String} beneficiary_type_desc
     */
    this['beneficiary_type_desc'] = null;
    
    /**
     * @member {String} beneficiary_name
     */
    this['beneficiary_name'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_acc_type_desc
     */
    this['bank_acc_type_desc'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_ifsc_code
     */
    this['bank_ifsc_code'] = null;
    
    /**
     * @member {String} disb_advice_no
     */
    this['disb_advice_no'] = null;
    
    /**
     * @member {String} disbursement_date
     */
    this['disbursement_date'] = null;
    
    /**
     * @member {String} status_of_client
     */
    this['status_of_client'] = null;
    
    /**
     * @member {String} status_of_client_desc
     */
    this['status_of_client_desc'] = null;
    
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
            this['loanapp_rowid'] = parseInt(data.getElementsByTagName("loanapp_rowid")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['loanapp_no'] = (data.getElementsByTagName("loanapp_no")[0].lastChild != null) ? data.getElementsByTagName("loanapp_no")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['app_date'] = (data.getElementsByTagName("app_date")[0].lastChild != null) ? data.getElementsByTagName("app_date")[0].lastChild.nodeValue : "";
            
            this['loan_amount'] = parseFloat(data.getElementsByTagName("loan_amount")[0].lastChild.nodeValue);
            
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['sanctioned_date'] = (data.getElementsByTagName("sanctioned_date")[0].lastChild != null) ? data.getElementsByTagName("sanctioned_date")[0].lastChild.nodeValue : "";
            
            this['sanctioned_amount'] = parseFloat(data.getElementsByTagName("sanctioned_amount")[0].lastChild.nodeValue);
            
            this['beneficiary_type'] = (data.getElementsByTagName("beneficiary_type")[0].lastChild != null) ? data.getElementsByTagName("beneficiary_type")[0].lastChild.nodeValue : "";
            
            this['beneficiary_type_desc'] = (data.getElementsByTagName("beneficiary_type_desc")[0].lastChild != null) ? data.getElementsByTagName("beneficiary_type_desc")[0].lastChild.nodeValue : "";
            
            this['beneficiary_name'] = (data.getElementsByTagName("beneficiary_name")[0].lastChild != null) ? data.getElementsByTagName("beneficiary_name")[0].lastChild.nodeValue : "";
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['bank_ifsc_code'] = (data.getElementsByTagName("bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['disb_advice_no'] = (data.getElementsByTagName("disb_advice_no")[0].lastChild != null) ? data.getElementsByTagName("disb_advice_no")[0].lastChild.nodeValue : "";
            
            this['disbursement_date'] = (data.getElementsByTagName("disbursement_date")[0].lastChild != null) ? data.getElementsByTagName("disbursement_date")[0].lastChild.nodeValue : "";
            
            this['status_of_client'] = (data.getElementsByTagName("status_of_client")[0].lastChild != null) ? data.getElementsByTagName("status_of_client")[0].lastChild.nodeValue : "";
            
            this['status_of_client_desc'] = (data.getElementsByTagName("status_of_client_desc")[0].lastChild != null) ? data.getElementsByTagName("status_of_client_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['loanapp_rowid'] = data['loanapp_rowid'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['loanapp_no'] = data['loanapp_no'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['member_name'] = data['member_name'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['app_date'] = data['app_date'];
            
            this['loan_amount'] = data['loan_amount'];
            
            this['loan_no'] = data['loan_no'];
            
            this['sanctioned_date'] = data['sanctioned_date'];
            
            this['sanctioned_amount'] = data['sanctioned_amount'];
            
            this['beneficiary_type'] = data['beneficiary_type'];
            
            this['beneficiary_type_desc'] = data['beneficiary_type_desc'];
            
            this['beneficiary_name'] = data['beneficiary_name'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['bank_code'] = data['bank_code'];
            
            this['bank_ifsc_code'] = data['bank_ifsc_code'];
            
            this['disb_advice_no'] = data['disb_advice_no'];
            
            this['disbursement_date'] = data['disbursement_date'];
            
            this['status_of_client'] = data['status_of_client'];
            
            this['status_of_client_desc'] = data['status_of_client_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

