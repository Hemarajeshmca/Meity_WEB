var responseDataFormat = "JSON";

function retrieveDividendRegisterListRequest(data)
{
    /**
     * @member {retrieveDividendRegisterListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveDividendRegisterListRequestcontext(data['context']);
    }
}

function retrieveDividendRegisterListRequestcontext(data)
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
     * @member {retrieveDividendRegisterListRequestFilter} Filter
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
            this['Filter'] = new retrieveDividendRegisterListRequestFilter(data['Filter']);
    }
}

function retrieveDividendRegisterListRequestFilter(data)
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

function retrieveDividendRegisterListResponse(data, format)
{
    /**
     * @member {retrieveDividendRegisterListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveDividendRegisterListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveDividendRegisterListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveDividendRegisterListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveDividendRegisterListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveDividendRegisterListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveDividendRegisterListResponseApplicationException(data)
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

function retrieveDividendRegisterListResponsecontext(data)
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
     * @member {retrieveDividendRegisterListResponseList} List
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
                List.push(new retrieveDividendRegisterListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveDividendRegisterListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveDividendRegisterListResponseList(data)
{
    /**
     * @member {Int32} dividendstru_rowid
     */
    this['dividendstru_rowid'] = null;
    
    /**
     * @member {String} dividendstru_desc
     */
    this['dividendstru_desc'] = null;
    
    /**
     * @member {Int16} register_rowid
     */
    this['register_rowid'] = null;
    
    /**
     * @member {String} register_no
     */
    this['register_no'] = null;
    
    /**
     * @member {String} register_name
     */
    this['register_name'] = null;
    
    /**
     * @member {String} report_date
     */
    this['report_date'] = null;
    
    /**
     * @member {Int16} record_processed
     */
    this['record_processed'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['dividendstru_rowid'] = parseInt(data.getElementsByTagName("dividendstru_rowid")[0].lastChild.nodeValue);
            
            this['dividendstru_desc'] = (data.getElementsByTagName("dividendstru_desc")[0].lastChild != null) ? data.getElementsByTagName("dividendstru_desc")[0].lastChild.nodeValue : "";
            
            this['register_rowid'] = parseInt(data.getElementsByTagName("register_rowid")[0].lastChild.nodeValue);
            
            this['register_no'] = (data.getElementsByTagName("register_no")[0].lastChild != null) ? data.getElementsByTagName("register_no")[0].lastChild.nodeValue : "";
            
            this['register_name'] = (data.getElementsByTagName("register_name")[0].lastChild != null) ? data.getElementsByTagName("register_name")[0].lastChild.nodeValue : "";
            
            this['report_date'] = (data.getElementsByTagName("report_date")[0].lastChild != null) ? data.getElementsByTagName("report_date")[0].lastChild.nodeValue : "";
            
            this['record_processed'] = parseInt(data.getElementsByTagName("record_processed")[0].lastChild.nodeValue);
        }
        else {
            this['dividendstru_rowid'] = data['dividendstru_rowid'];
            
            this['dividendstru_desc'] = data['dividendstru_desc'];
            
            this['register_rowid'] = data['register_rowid'];
            
            this['register_no'] = data['register_no'];
            
            this['register_name'] = data['register_name'];
            
            this['report_date'] = data['report_date'];
            
            this['record_processed'] = data['record_processed'];
        }
    }
}

