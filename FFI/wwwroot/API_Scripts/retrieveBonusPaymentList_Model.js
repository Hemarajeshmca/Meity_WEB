var responseDataFormat = "JSON";

function retrieveBonusPaymentListRequest(data)
{
    /**
     * @member {retrieveBonusPaymentListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveBonusPaymentListRequestcontext(data['context']);
    }
}

function retrieveBonusPaymentListRequestcontext(data)
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
     * @member {retrieveBonusPaymentListRequestFilter} Filter
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
            this['Filter'] = new retrieveBonusPaymentListRequestFilter(data['Filter']);
    }
}

function retrieveBonusPaymentListRequestFilter(data)
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

function retrieveBonusPaymentListResponse(data, format)
{
    /**
     * @member {retrieveBonusPaymentListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveBonusPaymentListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveBonusPaymentListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveBonusPaymentListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveBonusPaymentListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveBonusPaymentListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveBonusPaymentListResponseApplicationException(data)
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

function retrieveBonusPaymentListResponsecontext(data)
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
     * @member {retrieveBonusPaymentListResponseList} List
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
                List.push(new retrieveBonusPaymentListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveBonusPaymentListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveBonusPaymentListResponseList(data)
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
     * @member {Int16} record_processed
     */
    this['record_processed'] = null;
    
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
            
            this['record_processed'] = parseInt(data.getElementsByTagName("record_processed")[0].lastChild.nodeValue);
            
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
            
            this['record_processed'] = data['record_processed'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

