var responseDataFormat = "JSON";

function saveChecklistRequest(data)
{
    /**
     * @member {saveChecklistRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveChecklistRequestcontext(data['context']);
    }
}

function saveChecklistRequestcontext(data)
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
     * @member {saveChecklistRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveChecklistRequestElement} Element
     */
    this['Element'] = null;
    
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
            this['Header'] = new saveChecklistRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Element') && data['Element'] != null)
        {
            Element = [];
            for(Elementindex = 0; Elementindex < data['Element'].length; Elementindex++)
            {
                Element.push(new saveChecklistRequestElement(data['Element'][Elementindex]));
            }
            this['Element'] = Element;
        }
    }
}

function saveChecklistRequestHeader(data)
{
    /**
     * @member {Int32} chklst_rowid
     */
    this['chklst_rowid'] = null;
    
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
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
        if(data.hasOwnProperty('chklst_rowid'))
            this['chklst_rowid'] = data['chklst_rowid'];
        
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveChecklistRequestElement(data)
{
    /**
     * @member {Int32} chklstelement_rowid
     */
    this['chklstelement_rowid'] = null;
    
    /**
     * @member {String} element_code
     */
    this['element_code'] = null;
    
    /**
     * @member {String} subelement_code
     */
    this['subelement_code'] = null;
    
    /**
     * @member {String} mandatory_flag
     */
    this['mandatory_flag'] = null;
    
    /**
     * @member {String} allowed_option
     */
    this['allowed_option'] = null;
    
    /**
     * @member {String} any_all_flag
     */
    this['any_all_flag'] = null;
    
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
        if(data.hasOwnProperty('chklstelement_rowid'))
            this['chklstelement_rowid'] = data['chklstelement_rowid'];
        
        if(data.hasOwnProperty('element_code'))
            this['element_code'] = data['element_code'];
        
        if(data.hasOwnProperty('subelement_code'))
            this['subelement_code'] = data['subelement_code'];
        
        if(data.hasOwnProperty('mandatory_flag'))
            this['mandatory_flag'] = data['mandatory_flag'];
        
        if(data.hasOwnProperty('allowed_option'))
            this['allowed_option'] = data['allowed_option'];
        
        if(data.hasOwnProperty('any_all_flag'))
            this['any_all_flag'] = data['any_all_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveChecklistResponse(data, format)
{
    /**
     * @member {saveChecklistResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveChecklistResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveChecklistResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveChecklistResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveChecklistResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveChecklistResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveChecklistResponseApplicationException(data)
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

function saveChecklistResponsecontext(data)
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
     * @member {saveChecklistResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveChecklistResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveChecklistResponseHeader(data['Header']);
        }
    }
}

function saveChecklistResponseHeader(data)
{
    /**
     * @member {Int32} chklst_rowid
     */
    this['chklst_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['chklst_rowid'] = parseInt(data.getElementsByTagName("chklst_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['chklst_rowid'] = data['chklst_rowid'];
        }
    }
}

