var responseDataFormat = "JSON";

function saveFinYearRequest(data)
{
    /**
     * @member {saveFinYearRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFinYearRequestcontext(data['context']);
    }
}

function saveFinYearRequestcontext(data)
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
     * @member {saveFinYearRequestHeader} Header
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
            this['Header'] = new saveFinYearRequestHeader(data['Header']);
    }
}

function saveFinYearRequestHeader(data)
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('finyear_rowid'))
            this['finyear_rowid'] = data['finyear_rowid'];
        
        if(data.hasOwnProperty('finyear_code'))
            this['finyear_code'] = data['finyear_code'];
        
        if(data.hasOwnProperty('finyear_desc'))
            this['finyear_desc'] = data['finyear_desc'];
        
        if(data.hasOwnProperty('finyear_start_date'))
            this['finyear_start_date'] = data['finyear_start_date'];
        
        if(data.hasOwnProperty('finyear_end_date'))
            this['finyear_end_date'] = data['finyear_end_date'];
        
        if(data.hasOwnProperty('finyear_narration'))
            this['finyear_narration'] = data['finyear_narration'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFinYearResponse(data, format)
{
    /**
     * @member {saveFinYearResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFinYearResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFinYearResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFinYearResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFinYearResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFinYearResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFinYearResponseApplicationException(data)
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

function saveFinYearResponsecontext(data)
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
     * @member {saveFinYearResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFinYearResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFinYearResponseHeader(data['Header']);
        }
    }
}

function saveFinYearResponseHeader(data)
{
    /**
     * @member {Int32} finyear_rowid
     */
    this['finyear_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['finyear_rowid'] = parseInt(data.getElementsByTagName("finyear_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['finyear_rowid'] = data['finyear_rowid'];
        }
    }
}

