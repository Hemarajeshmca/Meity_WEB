var responseDataFormat = "JSON";

function retrieveFinYearRequest(data)
{
    /**
     * @member {retrieveFinYearRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFinYearRequestcontext(data['context']);
    }
}

function retrieveFinYearRequestcontext(data)
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
     * @member {retrieveFinYearRequestHeader} Header
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
            this['Header'] = new retrieveFinYearRequestHeader(data['Header']);
    }
}

function retrieveFinYearRequestHeader(data)
{
    /**
     * @member {Int32} finyear_rowid
     */
    this['finyear_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('finyear_rowid'))
            this['finyear_rowid'] = data['finyear_rowid'];
        
    }
}

function retrieveFinYearResponse(data, format)
{
    /**
     * @member {retrieveFinYearResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFinYearResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFinYearResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFinYearResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFinYearResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFinYearResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFinYearResponseApplicationException(data)
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

function retrieveFinYearResponsecontext(data)
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
     * @member {retrieveFinYearResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFinYearResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFinYearResponseHeader(data['Header']);
        }
    }
}

function retrieveFinYearResponseHeader(data)
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
            this['finyear_rowid'] = parseInt(data.getElementsByTagName("finyear_rowid")[0].lastChild.nodeValue);
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['finyear_start_date'] = (data.getElementsByTagName("finyear_start_date")[0].lastChild != null) ? data.getElementsByTagName("finyear_start_date")[0].lastChild.nodeValue : "";
            
            this['finyear_end_date'] = (data.getElementsByTagName("finyear_end_date")[0].lastChild != null) ? data.getElementsByTagName("finyear_end_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("finyear_narration")[0].attributes.length == 0) //Check NULL value
                this['finyear_narration'] = (data.getElementsByTagName("finyear_narration")[0].lastChild != null) ? data.getElementsByTagName("finyear_narration")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
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
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

