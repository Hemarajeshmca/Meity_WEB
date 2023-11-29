var responseDataFormat = "JSON";

function saveCreditevalutionSetupRequest(data)
{
    /**
     * @member {saveCreditevalutionSetupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveCreditevalutionSetupRequestcontext(data['context']);
    }
}

function saveCreditevalutionSetupRequestcontext(data)
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
     * @member {saveCreditevalutionSetupRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveCreditevalutionSetupRequestDetail} Detail
     */
    this['Detail'] = null;
    
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
            this['Header'] = new saveCreditevalutionSetupRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveCreditevalutionSetupRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveCreditevalutionSetupRequestHeader(data)
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
        if(data.hasOwnProperty('evaluationmap_id'))
            this['evaluationmap_id'] = data['evaluationmap_id'];
        
        if(data.hasOwnProperty('questionnaire'))
            this['questionnaire'] = data['questionnaire'];
        
        if(data.hasOwnProperty('loan_type'))
            this['loan_type'] = data['loan_type'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveCreditevalutionSetupRequestDetail(data)
{
    /**
     * @member {Int32} evaluationmapdtl_id
     */
    this['evaluationmapdtl_id'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
    /**
     * @member {String} evalution_category_code
     */
    this['evalution_category_code'] = null;
    
    /**
     * @member {String} evalution_parameter
     */
    this['evalution_parameter'] = null;
    
    /**
     * @member {Decimal} weightage
     */
    this['weightage'] = null;
    
    /**
     * @member {Decimal} maxscore
     */
    this['maxscore'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('evaluationmapdtl_id'))
            this['evaluationmapdtl_id'] = data['evaluationmapdtl_id'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('evalution_category_code'))
            this['evalution_category_code'] = data['evalution_category_code'];
        
        if(data.hasOwnProperty('evalution_parameter'))
            this['evalution_parameter'] = data['evalution_parameter'];
        
        if(data.hasOwnProperty('weightage'))
            this['weightage'] = data['weightage'];
        
        if(data.hasOwnProperty('maxscore'))
            this['maxscore'] = data['maxscore'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCreditevalutionSetupResponse(data, format)
{
    /**
     * @member {saveCreditevalutionSetupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveCreditevalutionSetupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveCreditevalutionSetupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveCreditevalutionSetupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveCreditevalutionSetupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveCreditevalutionSetupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveCreditevalutionSetupResponseApplicationException(data)
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

function saveCreditevalutionSetupResponsecontext(data)
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
     * @member {saveCreditevalutionSetupResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveCreditevalutionSetupResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveCreditevalutionSetupResponseHeader(data['Header']);
        }
    }
}

function saveCreditevalutionSetupResponseHeader(data)
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['evaluationmap_id'] = parseInt(data.getElementsByTagName("evaluationmap_id")[0].lastChild.nodeValue);
            
            this['questionnaire'] = (data.getElementsByTagName("questionnaire")[0].lastChild != null) ? data.getElementsByTagName("questionnaire")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
        }
        else {
            this['evaluationmap_id'] = data['evaluationmap_id'];
            
            this['questionnaire'] = data['questionnaire'];
            
            this['loan_type'] = data['loan_type'];
        }
    }
}

