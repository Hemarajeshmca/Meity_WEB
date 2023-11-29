var responseDataFormat = "JSON";

function retrieveFinYearListRequest(data)
{
    /**
     * @member {retrieveFinYearListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFinYearListRequestcontext(data['context']);
    }
}

function retrieveFinYearListRequestcontext(data)
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
     * @member {retrieveFinYearListRequestFilter} Filter
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
            this['Filter'] = new retrieveFinYearListRequestFilter(data['Filter']);
    }
}

function retrieveFinYearListRequestFilter(data)
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

function retrieveFinYearListResponse(data, format)
{
    /**
     * @member {retrieveFinYearListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFinYearListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFinYearListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFinYearListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFinYearListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFinYearListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFinYearListResponseApplicationException(data)
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

function retrieveFinYearListResponsecontext(data)
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
     * @member {retrieveFinYearListResponseList} List
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
                List.push(new retrieveFinYearListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveFinYearListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveFinYearListResponseList(data)
{
    /**
     * @member {Int32} finyear_rowid
     */
    this['finyear_rowid'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} finyear_desc
     */
    this['finyear_desc'] = null;
    
    /**
     * @member {String} finyear_start_date
     */
    this['finyear_start_date'] = null;
    
    /**
     * @member {String} finyear_end_date
     */
    this['finyear_end_date'] = null;
    
    /**
     * @member {String} finyear_narration
     */
    this['finyear_narration'] = null;
    
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
            this['finyear_rowid'] = parseInt(data.getElementsByTagName("finyear_rowid")[0].lastChild.nodeValue);
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['finyear_start_date'] = (data.getElementsByTagName("finyear_start_date")[0].lastChild != null) ? data.getElementsByTagName("finyear_start_date")[0].lastChild.nodeValue : "";
            
            this['finyear_end_date'] = (data.getElementsByTagName("finyear_end_date")[0].lastChild != null) ? data.getElementsByTagName("finyear_end_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("finyear_narration")[0].attributes.length == 0) //Check NULL value
                this['finyear_narration'] = (data.getElementsByTagName("finyear_narration")[0].lastChild != null) ? data.getElementsByTagName("finyear_narration")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['finyear_rowid'] = data['finyear_rowid'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['finyear_desc'] = data['finyear_desc'];
            
            this['finyear_start_date'] = data['finyear_start_date'];
            
            this['finyear_end_date'] = data['finyear_end_date'];
            
            this['finyear_narration'] = data['finyear_narration'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

