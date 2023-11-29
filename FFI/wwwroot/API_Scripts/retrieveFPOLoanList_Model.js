var responseDataFormat = "JSON";

function retrieveFPOLoanListRequest(data)
{
    /**
     * @member {retrieveFPOLoanListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFPOLoanListRequestcontext(data['context']);
    }
}

function retrieveFPOLoanListRequestcontext(data)
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
     * @member {retrieveFPOLoanListRequestFilter} Filter
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
            this['Filter'] = new retrieveFPOLoanListRequestFilter(data['Filter']);
    }
}

function retrieveFPOLoanListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrieveFPOLoanListResponse(data, format)
{
    /**
     * @member {retrieveFPOLoanListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFPOLoanListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFPOLoanListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFPOLoanListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFPOLoanListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFPOLoanListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFPOLoanListResponseApplicationException(data)
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

function retrieveFPOLoanListResponsecontext(data)
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
     * @member {retrieveFPOLoanListResponseList} List
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
                List.push(new retrieveFPOLoanListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveFPOLoanListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveFPOLoanListResponseList(data)
{
    /**
     * @member {Int32} fpoloan_rowid
     */
    this['fpoloan_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} fpoloan_no
     */
    this['fpoloan_no'] = null;
    
    /**
     * @member {String} institution_type
     */
    this['institution_type'] = null;
    
    /**
     * @member {String} institution_type_desc
     */
    this['institution_type_desc'] = null;
    
    /**
     * @member {String} sanctioned_date
     */
    this['sanctioned_date'] = null;
    
    /**
     * @member {String} fpoloan_start_date
     */
    this['fpoloan_start_date'] = null;
    
    /**
     * @member {String} fpoloan_mat_date
     */
    this['fpoloan_mat_date'] = null;
    
    /**
     * @member {Decimal} sanctioned_amount
     */
    this['sanctioned_amount'] = null;
    
    /**
     * @member {Decimal} received_amount
     */
    this['received_amount'] = null;
    
    /**
     * @member {Decimal} emi_amount
     */
    this['emi_amount'] = null;
    
    /**
     * @member {Decimal} interest_rate
     */
    this['interest_rate'] = null;
    
    /**
     * @member {Decimal} repayment_in_yrs
     */
    this['repayment_in_yrs'] = null;
    
    /**
     * @member {Int16} repayment_in_months
     */
    this['repayment_in_months'] = null;
    
    /**
     * @member {String} repayment_freq
     */
    this['repayment_freq'] = null;
    
    /**
     * @member {String} repayment_freq_desc
     */
    this['repayment_freq_desc'] = null;
    
    /**
     * @member {String} collateral_type
     */
    this['collateral_type'] = null;
    
    /**
     * @member {String} collateral_type_desc
     */
    this['collateral_type_desc'] = null;
    
    /**
     * @member {Decimal} collateral_amount
     */
    this['collateral_amount'] = null;
    
    /**
     * @member {Decimal} payable_amount
     */
    this['payable_amount'] = null;
    
    /**
     * @member {Decimal} payable_exception
     */
    this['payable_exception'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {Decimal} principle_paid
     */
    this['principle_paid'] = null;
    
    /**
     * @member {Decimal} interest_paid
     */
    this['interest_paid'] = null;
    
    /**
     * @member {Decimal} refund_received
     */
    this['refund_received'] = null;
    
    /**
     * @member {String} closed_date
     */
    this['closed_date'] = null;
    
    /**
     * @member {Decimal} settlement_amount
     */
    this['settlement_amount'] = null;
    
    /**
     * @member {Decimal} waive_amount
     */
    this['waive_amount'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['fpoloan_rowid'] = parseInt(data.getElementsByTagName("fpoloan_rowid")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['fpoloan_no'] = (data.getElementsByTagName("fpoloan_no")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_no")[0].lastChild.nodeValue : "";
            
            this['institution_type'] = (data.getElementsByTagName("institution_type")[0].lastChild != null) ? data.getElementsByTagName("institution_type")[0].lastChild.nodeValue : "";
            
            this['institution_type_desc'] = (data.getElementsByTagName("institution_type_desc")[0].lastChild != null) ? data.getElementsByTagName("institution_type_desc")[0].lastChild.nodeValue : "";
            
            this['sanctioned_date'] = (data.getElementsByTagName("sanctioned_date")[0].lastChild != null) ? data.getElementsByTagName("sanctioned_date")[0].lastChild.nodeValue : "";
            
            this['fpoloan_start_date'] = (data.getElementsByTagName("fpoloan_start_date")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_start_date")[0].lastChild.nodeValue : "";
            
            this['fpoloan_mat_date'] = (data.getElementsByTagName("fpoloan_mat_date")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_mat_date")[0].lastChild.nodeValue : "";
            
            this['sanctioned_amount'] = parseFloat(data.getElementsByTagName("sanctioned_amount")[0].lastChild.nodeValue);
            
            this['received_amount'] = parseFloat(data.getElementsByTagName("received_amount")[0].lastChild.nodeValue);
            
            this['emi_amount'] = parseFloat(data.getElementsByTagName("emi_amount")[0].lastChild.nodeValue);
            
            this['interest_rate'] = parseFloat(data.getElementsByTagName("interest_rate")[0].lastChild.nodeValue);
            
            this['repayment_in_yrs'] = parseFloat(data.getElementsByTagName("repayment_in_yrs")[0].lastChild.nodeValue);
            
            this['repayment_in_months'] = parseInt(data.getElementsByTagName("repayment_in_months")[0].lastChild.nodeValue);
            
            this['repayment_freq'] = (data.getElementsByTagName("repayment_freq")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq")[0].lastChild.nodeValue : "";
            
            this['repayment_freq_desc'] = (data.getElementsByTagName("repayment_freq_desc")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq_desc")[0].lastChild.nodeValue : "";
            
            this['collateral_type'] = (data.getElementsByTagName("collateral_type")[0].lastChild != null) ? data.getElementsByTagName("collateral_type")[0].lastChild.nodeValue : "";
            
            this['collateral_type_desc'] = (data.getElementsByTagName("collateral_type_desc")[0].lastChild != null) ? data.getElementsByTagName("collateral_type_desc")[0].lastChild.nodeValue : "";
            
            this['collateral_amount'] = parseFloat(data.getElementsByTagName("collateral_amount")[0].lastChild.nodeValue);
            
            this['payable_amount'] = parseFloat(data.getElementsByTagName("payable_amount")[0].lastChild.nodeValue);
            
            this['payable_exception'] = parseFloat(data.getElementsByTagName("payable_exception")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['principle_paid'] = parseFloat(data.getElementsByTagName("principle_paid")[0].lastChild.nodeValue);
            
            this['interest_paid'] = parseFloat(data.getElementsByTagName("interest_paid")[0].lastChild.nodeValue);
            
            this['refund_received'] = parseFloat(data.getElementsByTagName("refund_received")[0].lastChild.nodeValue);
            
            this['closed_date'] = (data.getElementsByTagName("closed_date")[0].lastChild != null) ? data.getElementsByTagName("closed_date")[0].lastChild.nodeValue : "";
            
            this['settlement_amount'] = parseFloat(data.getElementsByTagName("settlement_amount")[0].lastChild.nodeValue);
            
            this['waive_amount'] = parseFloat(data.getElementsByTagName("waive_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpoloan_rowid'] = data['fpoloan_rowid'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['fpoloan_no'] = data['fpoloan_no'];
            
            this['institution_type'] = data['institution_type'];
            
            this['institution_type_desc'] = data['institution_type_desc'];
            
            this['sanctioned_date'] = data['sanctioned_date'];
            
            this['fpoloan_start_date'] = data['fpoloan_start_date'];
            
            this['fpoloan_mat_date'] = data['fpoloan_mat_date'];
            
            this['sanctioned_amount'] = data['sanctioned_amount'];
            
            this['received_amount'] = data['received_amount'];
            
            this['emi_amount'] = data['emi_amount'];
            
            this['interest_rate'] = data['interest_rate'];
            
            this['repayment_in_yrs'] = data['repayment_in_yrs'];
            
            this['repayment_in_months'] = data['repayment_in_months'];
            
            this['repayment_freq'] = data['repayment_freq'];
            
            this['repayment_freq_desc'] = data['repayment_freq_desc'];
            
            this['collateral_type'] = data['collateral_type'];
            
            this['collateral_type_desc'] = data['collateral_type_desc'];
            
            this['collateral_amount'] = data['collateral_amount'];
            
            this['payable_amount'] = data['payable_amount'];
            
            this['payable_exception'] = data['payable_exception'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['principle_paid'] = data['principle_paid'];
            
            this['interest_paid'] = data['interest_paid'];
            
            this['refund_received'] = data['refund_received'];
            
            this['closed_date'] = data['closed_date'];
            
            this['settlement_amount'] = data['settlement_amount'];
            
            this['waive_amount'] = data['waive_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

