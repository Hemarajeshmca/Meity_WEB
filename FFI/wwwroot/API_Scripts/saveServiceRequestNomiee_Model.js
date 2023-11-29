var responseDataFormat = "JSON";

function saveServiceRequestNomieeRequest(data)
{
    /**
     * @member {saveServiceRequestNomieeRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveServiceRequestNomieeRequestcontext(data['context']);
    }
}

function saveServiceRequestNomieeRequestcontext(data)
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
     * @member {saveServiceRequestNomieeRequestHeader} Header
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
            this['Header'] = new saveServiceRequestNomieeRequestHeader(data['Header']);
    }
}

function saveServiceRequestNomieeRequestHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} cur_member_nominee
     */
    this['cur_member_nominee'] = null;
    
    /**
     * @member {String} changeto_member_nominee
     */
    this['changeto_member_nominee'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} chklst_status_flag
     */
    this['chklst_status_flag'] = null;
    
    /**
     * @member {String} sr_comments
     */
    this['sr_comments'] = null;
    
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
        if(data.hasOwnProperty('servicereq_rowid'))
            this['servicereq_rowid'] = data['servicereq_rowid'];
        
        if(data.hasOwnProperty('servicereq_no'))
            this['servicereq_no'] = data['servicereq_no'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('cur_member_nominee'))
            this['cur_member_nominee'] = data['cur_member_nominee'];
        
        if(data.hasOwnProperty('changeto_member_nominee'))
            this['changeto_member_nominee'] = data['changeto_member_nominee'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('chklst_status_flag'))
            this['chklst_status_flag'] = data['chklst_status_flag'];
        
        if(data.hasOwnProperty('sr_comments'))
            this['sr_comments'] = data['sr_comments'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveServiceRequestNomieeResponse(data, format)
{
    /**
     * @member {saveServiceRequestNomieeResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveServiceRequestNomieeResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveServiceRequestNomieeResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveServiceRequestNomieeResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveServiceRequestNomieeResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveServiceRequestNomieeResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveServiceRequestNomieeResponseApplicationException(data)
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

function saveServiceRequestNomieeResponsecontext(data)
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
     * @member {saveServiceRequestNomieeResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveServiceRequestNomieeResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveServiceRequestNomieeResponseHeader(data['Header']);
        }
    }
}

function saveServiceRequestNomieeResponseHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("servicereq_no")[0].attributes.length == 0) //Check NULL value
                this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['servicereq_no'] = data['servicereq_no'];
        }
    }
}

