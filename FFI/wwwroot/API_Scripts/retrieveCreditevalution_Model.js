var responseDataFormat = "JSON";

function retrieveCreditevalutionRequest(data)
{
    /**
     * @member {retrieveCreditevalutionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCreditevalutionRequestcontext(data['context']);
    }
}

function retrieveCreditevalutionRequestcontext(data)
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
     * @member {retrieveCreditevalutionRequestHeader} Header
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
            this['Header'] = new retrieveCreditevalutionRequestHeader(data['Header']);
    }
}

function retrieveCreditevalutionRequestHeader(data)
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
        
    }
}

function retrieveCreditevalutionResponse(data, format)
{
    /**
     * @member {retrieveCreditevalutionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCreditevalutionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCreditevalutionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCreditevalutionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCreditevalutionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCreditevalutionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCreditevalutionResponseApplicationException(data)
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

function retrieveCreditevalutionResponsecontext(data)
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
     * @member {retrieveCreditevalutionResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveCreditevalutionResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCreditevalutionResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveCreditevalutionResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCreditevalutionResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveCreditevalutionResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveCreditevalutionResponseHeader(data)
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
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int16} evaluationmap_id
     */
    this['evaluationmap_id'] = null;
    
    /**
     * @member {String} fpoorgn_name
     */
    this['fpoorgn_name'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {Decimal} credit_rate
     */
    this['credit_rate'] = null;
    
    /**
     * @member {String} credit_status
     */
    this['credit_status'] = null;
    
    /**
     * @member {String} credit_status_desc
     */
    this['credit_status_desc'] = null;
    
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
            this['creditevaluation_id'] = parseInt(data.getElementsByTagName("creditevaluation_id")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['member_code'] = (data.getElementsByTagName("member_code")[0].lastChild != null) ? data.getElementsByTagName("member_code")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['evaluationmap_id'] = parseInt(data.getElementsByTagName("evaluationmap_id")[0].lastChild.nodeValue);
            
            this['fpoorgn_name'] = (data.getElementsByTagName("fpoorgn_name")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_name")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['credit_rate'] = parseFloat(data.getElementsByTagName("credit_rate")[0].lastChild.nodeValue);
            
            this['credit_status'] = (data.getElementsByTagName("credit_status")[0].lastChild != null) ? data.getElementsByTagName("credit_status")[0].lastChild.nodeValue : "";
            
            this['credit_status_desc'] = (data.getElementsByTagName("credit_status_desc")[0].lastChild != null) ? data.getElementsByTagName("credit_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['creditevaluation_id'] = data['creditevaluation_id'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['member_code'] = data['member_code'];
            
            this['loan_type'] = data['loan_type'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['loan_no'] = data['loan_no'];
            
            this['evaluationmap_id'] = data['evaluationmap_id'];
            
            this['fpoorgn_name'] = data['fpoorgn_name'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['credit_rate'] = data['credit_rate'];
            
            this['credit_status'] = data['credit_status'];
            
            this['credit_status_desc'] = data['credit_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveCreditevalutionResponseDetail(data)
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
     * @member {String} evalution_category_desc
     */
    this['evalution_category_desc'] = null;
    
    /**
     * @member {Decimal} score
     */
    this['score'] = null;
    
    /**
     * @member {Decimal} rating
     */
    this['rating'] = null;
    
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
            this['evaluationdtl_id'] = parseInt(data.getElementsByTagName("evaluationdtl_id")[0].lastChild.nodeValue);
            
            this['evalution_category_code'] = (data.getElementsByTagName("evalution_category_code")[0].lastChild != null) ? data.getElementsByTagName("evalution_category_code")[0].lastChild.nodeValue : "";
            
            this['evalution_category_desc'] = (data.getElementsByTagName("evalution_category_desc")[0].lastChild != null) ? data.getElementsByTagName("evalution_category_desc")[0].lastChild.nodeValue : "";
            
            this['score'] = parseFloat(data.getElementsByTagName("score")[0].lastChild.nodeValue);
            
            this['rating'] = parseFloat(data.getElementsByTagName("rating")[0].lastChild.nodeValue);
            
            this['evalution_parameter'] = (data.getElementsByTagName("evalution_parameter")[0].lastChild != null) ? data.getElementsByTagName("evalution_parameter")[0].lastChild.nodeValue : "";
            
            this['weightage'] = parseFloat(data.getElementsByTagName("weightage")[0].lastChild.nodeValue);
            
            this['maxscore'] = parseFloat(data.getElementsByTagName("maxscore")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['evaluationdtl_id'] = data['evaluationdtl_id'];
            
            this['evalution_category_code'] = data['evalution_category_code'];
            
            this['evalution_category_desc'] = data['evalution_category_desc'];
            
            this['score'] = data['score'];
            
            this['rating'] = data['rating'];
            
            this['evalution_parameter'] = data['evalution_parameter'];
            
            this['weightage'] = data['weightage'];
            
            this['maxscore'] = data['maxscore'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

