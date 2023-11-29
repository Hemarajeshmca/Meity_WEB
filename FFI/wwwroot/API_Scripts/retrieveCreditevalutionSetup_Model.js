var responseDataFormat = "JSON";

function retrieveCreditevalutionSetupRequest(data)
{
    /**
     * @member {retrieveCreditevalutionSetupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCreditevalutionSetupRequestcontext(data['context']);
    }
}

function retrieveCreditevalutionSetupRequestcontext(data)
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
     * @member {retrieveCreditevalutionSetupRequestHeader} Header
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
            this['Header'] = new retrieveCreditevalutionSetupRequestHeader(data['Header']);
    }
}

function retrieveCreditevalutionSetupRequestHeader(data)
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
        if(data.hasOwnProperty('evaluationmap_id'))
            this['evaluationmap_id'] = data['evaluationmap_id'];
        
        if(data.hasOwnProperty('questionnaire'))
            this['questionnaire'] = data['questionnaire'];
        
        if(data.hasOwnProperty('loan_type'))
            this['loan_type'] = data['loan_type'];
        
    }
}

function retrieveCreditevalutionSetupResponse(data, format)
{
    /**
     * @member {retrieveCreditevalutionSetupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCreditevalutionSetupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCreditevalutionSetupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCreditevalutionSetupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCreditevalutionSetupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCreditevalutionSetupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCreditevalutionSetupResponseApplicationException(data)
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

function retrieveCreditevalutionSetupResponsecontext(data)
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
     * @member {retrieveCreditevalutionSetupResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveCreditevalutionSetupResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCreditevalutionSetupResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveCreditevalutionSetupResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCreditevalutionSetupResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveCreditevalutionSetupResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveCreditevalutionSetupResponseHeader(data)
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

function retrieveCreditevalutionSetupResponseDetail(data)
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
     * @member {String} evalution_category_desc
     */
    this['evalution_category_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['evaluationmapdtl_id'] = parseInt(data.getElementsByTagName("evaluationmapdtl_id")[0].lastChild.nodeValue);
            
            this['row_slno'] = parseInt(data.getElementsByTagName("row_slno")[0].lastChild.nodeValue);
            
            this['evalution_category_code'] = (data.getElementsByTagName("evalution_category_code")[0].lastChild != null) ? data.getElementsByTagName("evalution_category_code")[0].lastChild.nodeValue : "";
            
            this['evalution_category_desc'] = (data.getElementsByTagName("evalution_category_desc")[0].lastChild != null) ? data.getElementsByTagName("evalution_category_desc")[0].lastChild.nodeValue : "";
            
            this['evalution_parameter'] = (data.getElementsByTagName("evalution_parameter")[0].lastChild != null) ? data.getElementsByTagName("evalution_parameter")[0].lastChild.nodeValue : "";
            
            this['weightage'] = parseFloat(data.getElementsByTagName("weightage")[0].lastChild.nodeValue);
            
            this['maxscore'] = parseFloat(data.getElementsByTagName("maxscore")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['evaluationmapdtl_id'] = data['evaluationmapdtl_id'];
            
            this['row_slno'] = data['row_slno'];
            
            this['evalution_category_code'] = data['evalution_category_code'];
            
            this['evalution_category_desc'] = data['evalution_category_desc'];
            
            this['evalution_parameter'] = data['evalution_parameter'];
            
            this['weightage'] = data['weightage'];
            
            this['maxscore'] = data['maxscore'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

