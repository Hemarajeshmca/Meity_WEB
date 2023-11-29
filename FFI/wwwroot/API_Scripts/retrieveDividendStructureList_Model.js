var responseDataFormat = "JSON";

function retrieveDividendStructureListRequest(data)
{
    /**
     * @member {retrieveDividendStructureListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveDividendStructureListRequestcontext(data['context']);
    }
}

function retrieveDividendStructureListRequestcontext(data)
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
     * @member {retrieveDividendStructureListRequestFilter} Filter
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
            this['Filter'] = new retrieveDividendStructureListRequestFilter(data['Filter']);
    }
}

function retrieveDividendStructureListRequestFilter(data)
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

function retrieveDividendStructureListResponse(data, format)
{
    /**
     * @member {retrieveDividendStructureListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveDividendStructureListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveDividendStructureListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveDividendStructureListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveDividendStructureListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveDividendStructureListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveDividendStructureListResponseApplicationException(data)
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

function retrieveDividendStructureListResponsecontext(data)
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
     * @member {retrieveDividendStructureListResponseList} List
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
                List.push(new retrieveDividendStructureListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveDividendStructureListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveDividendStructureListResponseList(data)
{
    /**
     * @member {Int32} dividendstru_rowid
     */
    this['dividendstru_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} finyear_desc
     */
    this['finyear_desc'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {String} dividend_type
     */
    this['dividend_type'] = null;
    
    /**
     * @member {String} dividend_type_desc
     */
    this['dividend_type_desc'] = null;
    
    /**
     * @member {Decimal} dividend_percent
     */
    this['dividend_percent'] = null;
    
    /**
     * @member {String} report_date
     */
    this['report_date'] = null;
    
    /**
     * @member {String} declared_date
     */
    this['declared_date'] = null;
    
    /**
     * @member {String} payor_bank_code
     */
    this['payor_bank_code'] = null;
    
    /**
     * @member {String} payor_bank_desc
     */
    this['payor_bank_desc'] = null;
    
    /**
     * @member {String} payor_bank_acc_type
     */
    this['payor_bank_acc_type'] = null;
    
    /**
     * @member {String} payor_bank_acc_type_desc
     */
    this['payor_bank_acc_type_desc'] = null;
    
    /**
     * @member {String} payor_bank_acc_no
     */
    this['payor_bank_acc_no'] = null;
    
    /**
     * @member {String} payor_ifsc_code
     */
    this['payor_ifsc_code'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['dividendstru_rowid'] = parseInt(data.getElementsByTagName("dividendstru_rowid")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['dividend_type'] = (data.getElementsByTagName("dividend_type")[0].lastChild != null) ? data.getElementsByTagName("dividend_type")[0].lastChild.nodeValue : "";
            
            this['dividend_type_desc'] = (data.getElementsByTagName("dividend_type_desc")[0].lastChild != null) ? data.getElementsByTagName("dividend_type_desc")[0].lastChild.nodeValue : "";
            
            this['dividend_percent'] = parseFloat(data.getElementsByTagName("dividend_percent")[0].lastChild.nodeValue);
            
            this['report_date'] = (data.getElementsByTagName("report_date")[0].lastChild != null) ? data.getElementsByTagName("report_date")[0].lastChild.nodeValue : "";
            
            this['declared_date'] = (data.getElementsByTagName("declared_date")[0].lastChild != null) ? data.getElementsByTagName("declared_date")[0].lastChild.nodeValue : "";
            
            this['payor_bank_code'] = (data.getElementsByTagName("payor_bank_code")[0].lastChild != null) ? data.getElementsByTagName("payor_bank_code")[0].lastChild.nodeValue : "";
            
            this['payor_bank_desc'] = (data.getElementsByTagName("payor_bank_desc")[0].lastChild != null) ? data.getElementsByTagName("payor_bank_desc")[0].lastChild.nodeValue : "";
            
            this['payor_bank_acc_type'] = (data.getElementsByTagName("payor_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("payor_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['payor_bank_acc_type_desc'] = (data.getElementsByTagName("payor_bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("payor_bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['payor_bank_acc_no'] = (data.getElementsByTagName("payor_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("payor_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['payor_ifsc_code'] = (data.getElementsByTagName("payor_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("payor_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['dividendstru_rowid'] = data['dividendstru_rowid'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['finyear_desc'] = data['finyear_desc'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['dividend_type'] = data['dividend_type'];
            
            this['dividend_type_desc'] = data['dividend_type_desc'];
            
            this['dividend_percent'] = data['dividend_percent'];
            
            this['report_date'] = data['report_date'];
            
            this['declared_date'] = data['declared_date'];
            
            this['payor_bank_code'] = data['payor_bank_code'];
            
            this['payor_bank_desc'] = data['payor_bank_desc'];
            
            this['payor_bank_acc_type'] = data['payor_bank_acc_type'];
            
            this['payor_bank_acc_type_desc'] = data['payor_bank_acc_type_desc'];
            
            this['payor_bank_acc_no'] = data['payor_bank_acc_no'];
            
            this['payor_ifsc_code'] = data['payor_ifsc_code'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

