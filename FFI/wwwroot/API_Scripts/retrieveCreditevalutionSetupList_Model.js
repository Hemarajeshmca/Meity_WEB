var responseDataFormat = "JSON";

function retrieveCreditevalutionSetupListRequest(data)
{
    /**
     * @member {retrieveCreditevalutionSetupListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCreditevalutionSetupListRequestcontext(data['context']);
    }
}

function retrieveCreditevalutionSetupListRequestcontext(data)
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
     * @member {retrieveCreditevalutionSetupListRequestFilter} Filter
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
            this['Filter'] = new retrieveCreditevalutionSetupListRequestFilter(data['Filter']);
    }
}

function retrieveCreditevalutionSetupListRequestFilter(data)
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
     * @member {String} FilterBy_FromValue
     */
    this['FilterBy_FromValue'] = null;
    
    /**
     * @member {String} FilterBy_ToValue
     */
    this['FilterBy_ToValue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_FromValue'))
            this['FilterBy_FromValue'] = data['FilterBy_FromValue'];
        
        if(data.hasOwnProperty('FilterBy_ToValue'))
            this['FilterBy_ToValue'] = data['FilterBy_ToValue'];
        
    }
}

function retrieveCreditevalutionSetupListResponse(data, format)
{
    /**
     * @member {retrieveCreditevalutionSetupListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCreditevalutionSetupListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCreditevalutionSetupListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCreditevalutionSetupListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCreditevalutionSetupListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCreditevalutionSetupListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCreditevalutionSetupListResponseApplicationException(data)
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

function retrieveCreditevalutionSetupListResponsecontext(data)
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
     * @member {retrieveCreditevalutionSetupListResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Header = [];
            for(Headerchildi = 0; Headerchildi < data.getElementsByTagName("Header").length; Headerchildi++)
            {
                Header.push(new retrieveCreditevalutionSetupListResponseHeader(data.getElementsByTagName("Header")[Headerchildi]));
            }
            if(data.getElementsByTagName("Header").length > 0)
                this['Header'] = Header;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Header') && data['Header'] != null)
            {
                Header = [];
                for(Headerindex = 0; Headerindex < data['Header'].length; Headerindex++)
                {
                    Header.push(new retrieveCreditevalutionSetupListResponseHeader(data['Header'][Headerindex]));
                }
                this['Header'] = Header;
            }
        }
    }
}

function retrieveCreditevalutionSetupListResponseHeader(data)
{
    /**
     * @member {Int32} evaluationmap_id
     */
    this['evaluationmap_id'] = null;
    
    /**
     * @member {String} questionnaire
     */
    this['questionnaire'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
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
            this['evaluationmap_id'] = parseInt(data.getElementsByTagName("evaluationmap_id")[0].lastChild.nodeValue);
            
            this['questionnaire'] = (data.getElementsByTagName("questionnaire")[0].lastChild != null) ? data.getElementsByTagName("questionnaire")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['evaluationmap_id'] = data['evaluationmap_id'];
            
            this['questionnaire'] = data['questionnaire'];
            
            this['loan_type'] = data['loan_type'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

