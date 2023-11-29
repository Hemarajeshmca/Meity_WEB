var responseDataFormat = "JSON";

function retrieve_subvention_ListRequest(data)
{
    /**
     * @member {retrieve_subvention_ListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieve_subvention_ListRequestcontext(data['context']);
    }
}

function retrieve_subvention_ListRequestcontext(data)
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
     * @member {retrieve_subvention_ListRequestFilter} Filter
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
            this['Filter'] = new retrieve_subvention_ListRequestFilter(data['Filter']);
    }
}

function retrieve_subvention_ListRequestFilter(data)
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

function retrieve_subvention_ListResponse(data, format)
{
    /**
     * @member {retrieve_subvention_ListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieve_subvention_ListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieve_subvention_ListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieve_subvention_ListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieve_subvention_ListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieve_subvention_ListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieve_subvention_ListResponseApplicationException(data)
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

function retrieve_subvention_ListResponsecontext(data)
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
     * @member {retrieve_subvention_ListResponsesubventiondtl} subventiondtl
     */
    this['subventiondtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            subventiondtl = [];
            for(subventiondtlchildi = 0; subventiondtlchildi < data.getElementsByTagName("subventiondtl").length; subventiondtlchildi++)
            {
                subventiondtl.push(new retrieve_subvention_ListResponsesubventiondtl(data.getElementsByTagName("subventiondtl")[subventiondtlchildi]));
            }
            if(data.getElementsByTagName("subventiondtl").length > 0)
                this['subventiondtl'] = subventiondtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('subventiondtl') && data['subventiondtl'] != null)
            {
                subventiondtl = [];
                for(subventiondtlindex = 0; subventiondtlindex < data['subventiondtl'].length; subventiondtlindex++)
                {
                    subventiondtl.push(new retrieve_subvention_ListResponsesubventiondtl(data['subventiondtl'][subventiondtlindex]));
                }
                this['subventiondtl'] = subventiondtl;
            }
        }
    }
}

function retrieve_subvention_ListResponsesubventiondtl(data)
{
    /**
     * @member {Int32} loansubvention_rowid
     */
    this['loansubvention_rowid'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} subvention_name
     */
    this['subvention_name'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
    /**
     * @member {String} created_date
     */
    this['created_date'] = null;
    
    /**
     * @member {Decimal} Threshold
     */
    this['Threshold'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {String} Ref_Circular_No
     */
    this['Ref_Circular_No'] = null;
    
    /**
     * @member {String} Interest_Paid_From
     */
    this['Interest_Paid_From'] = null;
    
    /**
     * @member {String} Interest_Paid_to
     */
    this['Interest_Paid_to'] = null;
    
    /**
     * @member {String} Loan_Disb_From
     */
    this['Loan_Disb_From'] = null;
    
    /**
     * @member {String} Loan_Disb_To
     */
    this['Loan_Disb_To'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loansubvention_rowid'] = parseInt(data.getElementsByTagName("loansubvention_rowid")[0].lastChild.nodeValue);
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            this['subvention_name'] = (data.getElementsByTagName("subvention_name")[0].lastChild != null) ? data.getElementsByTagName("subvention_name")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['created_date'] = (data.getElementsByTagName("created_date")[0].lastChild != null) ? data.getElementsByTagName("created_date")[0].lastChild.nodeValue : "";
            
            this['Threshold'] = parseFloat(data.getElementsByTagName("Threshold")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['Ref_Circular_No'] = (data.getElementsByTagName("Ref_Circular_No")[0].lastChild != null) ? data.getElementsByTagName("Ref_Circular_No")[0].lastChild.nodeValue : "";
            
            this['Interest_Paid_From'] = (data.getElementsByTagName("Interest_Paid_From")[0].lastChild != null) ? data.getElementsByTagName("Interest_Paid_From")[0].lastChild.nodeValue : "";
            
            this['Interest_Paid_to'] = (data.getElementsByTagName("Interest_Paid_to")[0].lastChild != null) ? data.getElementsByTagName("Interest_Paid_to")[0].lastChild.nodeValue : "";
            
            this['Loan_Disb_From'] = (data.getElementsByTagName("Loan_Disb_From")[0].lastChild != null) ? data.getElementsByTagName("Loan_Disb_From")[0].lastChild.nodeValue : "";
            
            this['Loan_Disb_To'] = (data.getElementsByTagName("Loan_Disb_To")[0].lastChild != null) ? data.getElementsByTagName("Loan_Disb_To")[0].lastChild.nodeValue : "";
        }
        else {
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['subvention_name'] = data['subvention_name'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['loan_type'] = data['loan_type'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['created_date'] = data['created_date'];
            
            this['Threshold'] = data['Threshold'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['Ref_Circular_No'] = data['Ref_Circular_No'];
            
            this['Interest_Paid_From'] = data['Interest_Paid_From'];
            
            this['Interest_Paid_to'] = data['Interest_Paid_to'];
            
            this['Loan_Disb_From'] = data['Loan_Disb_From'];
            
            this['Loan_Disb_To'] = data['Loan_Disb_To'];
        }
    }
}

