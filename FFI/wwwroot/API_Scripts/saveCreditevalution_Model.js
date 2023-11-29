var responseDataFormat = "JSON";

function saveCreditevalutionRequest(data)
{
    /**
     * @member {saveCreditevalutionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveCreditevalutionRequestcontext(data['context']);
    }
}

function saveCreditevalutionRequestcontext(data)
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
     * @member {saveCreditevalutionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveCreditevalutionRequestDetail} Detail
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
            this['Header'] = new saveCreditevalutionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveCreditevalutionRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveCreditevalutionRequestHeader(data)
{
    /**
     * @member {Int32} creditevaluation_id
     */
    this['creditevaluation_id'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} member_code
     */
    this['member_code'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int16} evaluationmap_id
     */
    this['evaluationmap_id'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {Decimal} credit_rate
     */
    this['credit_rate'] = null;
    
    /**
     * @member {String} credit_status
     */
    this['credit_status'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('creditevaluation_id'))
            this['creditevaluation_id'] = data['creditevaluation_id'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('member_code'))
            this['member_code'] = data['member_code'];
        
        if(data.hasOwnProperty('loan_type'))
            this['loan_type'] = data['loan_type'];
        
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('evaluationmap_id'))
            this['evaluationmap_id'] = data['evaluationmap_id'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('credit_rate'))
            this['credit_rate'] = data['credit_rate'];
        
        if(data.hasOwnProperty('credit_status'))
            this['credit_status'] = data['credit_status'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCreditevalutionRequestDetail(data)
{
    /**
     * @member {Int32} evaluationdtl_id
     */
    this['evaluationdtl_id'] = null;
    
    /**
     * @member {String} evalution_category_code
     */
    this['evalution_category_code'] = null;
    
    /**
     * @member {Decimal} score
     */
    this['score'] = null;
    
    /**
     * @member {Decimal} rating
     */
    this['rating'] = null;
    
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
        if(data.hasOwnProperty('evaluationdtl_id'))
            this['evaluationdtl_id'] = data['evaluationdtl_id'];
        
        if(data.hasOwnProperty('evalution_category_code'))
            this['evalution_category_code'] = data['evalution_category_code'];
        
        if(data.hasOwnProperty('score'))
            this['score'] = data['score'];
        
        if(data.hasOwnProperty('rating'))
            this['rating'] = data['rating'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCreditevalutionResponse(data, format)
{
    /**
     * @member {saveCreditevalutionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveCreditevalutionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveCreditevalutionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveCreditevalutionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveCreditevalutionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveCreditevalutionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveCreditevalutionResponseApplicationException(data)
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

function saveCreditevalutionResponsecontext(data)
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
     * @member {saveCreditevalutionResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveCreditevalutionResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveCreditevalutionResponseHeader(data['Header']);
        }
    }
}

function saveCreditevalutionResponseHeader(data)
{
    /**
     * @member {Int32} creditevaluation_id
     */
    this['creditevaluation_id'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} member_code
     */
    this['member_code'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int16} evaluationmap_id
     */
    this['evaluationmap_id'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['creditevaluation_id'] = parseInt(data.getElementsByTagName("creditevaluation_id")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['member_code'] = (data.getElementsByTagName("member_code")[0].lastChild != null) ? data.getElementsByTagName("member_code")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['evaluationmap_id'] = parseInt(data.getElementsByTagName("evaluationmap_id")[0].lastChild.nodeValue);
        }
        else {
            this['creditevaluation_id'] = data['creditevaluation_id'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['member_code'] = data['member_code'];
            
            this['loan_type'] = data['loan_type'];
            
            this['loan_no'] = data['loan_no'];
            
            this['evaluationmap_id'] = data['evaluationmap_id'];
        }
    }
}

