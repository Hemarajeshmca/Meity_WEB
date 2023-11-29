var responseDataFormat = "JSON";

function retrieveBonusPaymentRequest(data)
{
    /**
     * @member {retrieveBonusPaymentRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveBonusPaymentRequestcontext(data['context']);
    }
}

function retrieveBonusPaymentRequestcontext(data)
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
     * @member {retrieveBonusPaymentRequestHeader} Header
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
            this['Header'] = new retrieveBonusPaymentRequestHeader(data['Header']);
    }
}

function retrieveBonusPaymentRequestHeader(data)
{
    /**
     * @member {Int32} bonus_rowid
     */
    this['bonus_rowid'] = null;
    
    /**
     * @member {String} aggrorgn_type
     */
    this['aggrorgn_type'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('bonus_rowid'))
            this['bonus_rowid'] = data['bonus_rowid'];
        
        if(data.hasOwnProperty('aggrorgn_type'))
            this['aggrorgn_type'] = data['aggrorgn_type'];
        
        if(data.hasOwnProperty('aggrorgn_code'))
            this['aggrorgn_code'] = data['aggrorgn_code'];
        
    }
}

function retrieveBonusPaymentResponse(data, format)
{
    /**
     * @member {retrieveBonusPaymentResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveBonusPaymentResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveBonusPaymentResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveBonusPaymentResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveBonusPaymentResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveBonusPaymentResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveBonusPaymentResponseApplicationException(data)
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

function retrieveBonusPaymentResponsecontext(data)
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
     * @member {retrieveBonusPaymentResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveBonusPaymentResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveBonusPaymentResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveBonusPaymentResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveBonusPaymentResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveBonusPaymentResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveBonusPaymentResponseHeader(data)
{
    /**
     * @member {Int32} bonus_rowid
     */
    this['bonus_rowid'] = null;
    
    /**
     * @member {String} aggrorgn_type
     */
    this['aggrorgn_type'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    /**
     * @member {String} bonus_no
     */
    this['bonus_no'] = null;
    
    /**
     * @member {String} bonus_for
     */
    this['bonus_for'] = null;
    
    /**
     * @member {String} bonus_for_desc
     */
    this['bonus_for_desc'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} finyear_desc
     */
    this['finyear_desc'] = null;
    
    /**
     * @member {String} bonus_date
     */
    this['bonus_date'] = null;
    
    /**
     * @member {Decimal} rate_per_ltr
     */
    this['rate_per_ltr'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
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
            this['bonus_rowid'] = parseInt(data.getElementsByTagName("bonus_rowid")[0].lastChild.nodeValue);
            
            this['aggrorgn_type'] = (data.getElementsByTagName("aggrorgn_type")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_type")[0].lastChild.nodeValue : "";
            
            this['aggrorgn_code'] = (data.getElementsByTagName("aggrorgn_code")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_code")[0].lastChild.nodeValue : "";
            
            this['bonus_no'] = (data.getElementsByTagName("bonus_no")[0].lastChild != null) ? data.getElementsByTagName("bonus_no")[0].lastChild.nodeValue : "";
            
            this['bonus_for'] = (data.getElementsByTagName("bonus_for")[0].lastChild != null) ? data.getElementsByTagName("bonus_for")[0].lastChild.nodeValue : "";
            
            this['bonus_for_desc'] = (data.getElementsByTagName("bonus_for_desc")[0].lastChild != null) ? data.getElementsByTagName("bonus_for_desc")[0].lastChild.nodeValue : "";
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['bonus_date'] = (data.getElementsByTagName("bonus_date")[0].lastChild != null) ? data.getElementsByTagName("bonus_date")[0].lastChild.nodeValue : "";
            
            this['rate_per_ltr'] = parseFloat(data.getElementsByTagName("rate_per_ltr")[0].lastChild.nodeValue);
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['bonus_rowid'] = data['bonus_rowid'];
            
            this['aggrorgn_type'] = data['aggrorgn_type'];
            
            this['aggrorgn_code'] = data['aggrorgn_code'];
            
            this['bonus_no'] = data['bonus_no'];
            
            this['bonus_for'] = data['bonus_for'];
            
            this['bonus_for_desc'] = data['bonus_for_desc'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['finyear_desc'] = data['finyear_desc'];
            
            this['bonus_date'] = data['bonus_date'];
            
            this['rate_per_ltr'] = data['rate_per_ltr'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveBonusPaymentResponseDetail(data)
{
    /**
     * @member {Int32} bonusdtl_rowid
     */
    this['bonusdtl_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} milkman_code
     */
    this['milkman_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} milkman_desc
     */
    this['milkman_desc'] = null;
    
    /**
     * @member {String} inter_aggrorgn_code
     */
    this['inter_aggrorgn_code'] = null;
    
    /**
     * @member {String} inter_aggrorgn_desc
     */
    this['inter_aggrorgn_desc'] = null;
    
    /**
     * @member {Decimal} tot_ltr
     */
    this['tot_ltr'] = null;
    
    /**
     * @member {Decimal} bonus_amont
     */
    this['bonus_amont'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
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
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} dflt_dr_acc
     */
    this['dflt_dr_acc'] = null;
    
    /**
     * @member {String} dflt_dr_acc_desc
     */
    this['dflt_dr_acc_desc'] = null;
    
    /**
     * @member {String} dflt_cr_acc
     */
    this['dflt_cr_acc'] = null;
    
    /**
     * @member {String} dflt_cr_acc_desc
     */
    this['dflt_cr_acc_desc'] = null;
    
    /**
     * @member {String} bank_acc_purpose
     */
    this['bank_acc_purpose'] = null;
    
    /**
     * @member {String} bank_acc_purpose_desc
     */
    this['bank_acc_purpose_desc'] = null;
    
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
            this['bonusdtl_rowid'] = parseInt(data.getElementsByTagName("bonusdtl_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['milkman_code'] = (data.getElementsByTagName("milkman_code")[0].lastChild != null) ? data.getElementsByTagName("milkman_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['milkman_desc'] = (data.getElementsByTagName("milkman_desc")[0].lastChild != null) ? data.getElementsByTagName("milkman_desc")[0].lastChild.nodeValue : "";
            
            this['inter_aggrorgn_code'] = (data.getElementsByTagName("inter_aggrorgn_code")[0].lastChild != null) ? data.getElementsByTagName("inter_aggrorgn_code")[0].lastChild.nodeValue : "";
            
            this['inter_aggrorgn_desc'] = (data.getElementsByTagName("inter_aggrorgn_desc")[0].lastChild != null) ? data.getElementsByTagName("inter_aggrorgn_desc")[0].lastChild.nodeValue : "";
            
            this['tot_ltr'] = parseFloat(data.getElementsByTagName("tot_ltr")[0].lastChild.nodeValue);
            
            this['bonus_amont'] = parseFloat(data.getElementsByTagName("bonus_amont")[0].lastChild.nodeValue);
            
            this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['ifsc_code'] = (data.getElementsByTagName("ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("ifsc_code")[0].lastChild.nodeValue : "";
            
            this['dflt_dr_acc'] = (data.getElementsByTagName("dflt_dr_acc")[0].lastChild != null) ? data.getElementsByTagName("dflt_dr_acc")[0].lastChild.nodeValue : "";
            
            this['dflt_dr_acc_desc'] = (data.getElementsByTagName("dflt_dr_acc_desc")[0].lastChild != null) ? data.getElementsByTagName("dflt_dr_acc_desc")[0].lastChild.nodeValue : "";
            
            this['dflt_cr_acc'] = (data.getElementsByTagName("dflt_cr_acc")[0].lastChild != null) ? data.getElementsByTagName("dflt_cr_acc")[0].lastChild.nodeValue : "";
            
            this['dflt_cr_acc_desc'] = (data.getElementsByTagName("dflt_cr_acc_desc")[0].lastChild != null) ? data.getElementsByTagName("dflt_cr_acc_desc")[0].lastChild.nodeValue : "";
            
            this['bank_acc_purpose'] = (data.getElementsByTagName("bank_acc_purpose")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_purpose")[0].lastChild.nodeValue : "";
            
            this['bank_acc_purpose_desc'] = (data.getElementsByTagName("bank_acc_purpose_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_purpose_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['bonusdtl_rowid'] = data['bonusdtl_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['milkman_code'] = data['milkman_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['milkman_desc'] = data['milkman_desc'];
            
            this['inter_aggrorgn_code'] = data['inter_aggrorgn_code'];
            
            this['inter_aggrorgn_desc'] = data['inter_aggrorgn_desc'];
            
            this['tot_ltr'] = data['tot_ltr'];
            
            this['bonus_amont'] = data['bonus_amont'];
            
            this['payment_no'] = data['payment_no'];
            
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_code'] = data['bank_code'];
            
            this['ifsc_code'] = data['ifsc_code'];
            
            this['dflt_dr_acc'] = data['dflt_dr_acc'];
            
            this['dflt_dr_acc_desc'] = data['dflt_dr_acc_desc'];
            
            this['dflt_cr_acc'] = data['dflt_cr_acc'];
            
            this['dflt_cr_acc_desc'] = data['dflt_cr_acc_desc'];
            
            this['bank_acc_purpose'] = data['bank_acc_purpose'];
            
            this['bank_acc_purpose_desc'] = data['bank_acc_purpose_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

