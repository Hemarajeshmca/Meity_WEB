var responseDataFormat = "JSON";

function retrieveChecklistRequest(data)
{
    /**
     * @member {retrieveChecklistRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveChecklistRequestcontext(data['context']);
    }
}

function retrieveChecklistRequestcontext(data)
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
     * @member {retrieveChecklistRequestHeader} Header
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
            this['Header'] = new retrieveChecklistRequestHeader(data['Header']);
    }
}

function retrieveChecklistRequestHeader(data)
{
    /**
     * @member {Int32} chklst_rowid
     */
    this['chklst_rowid'] = null;
    
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('chklst_rowid'))
            this['chklst_rowid'] = data['chklst_rowid'];
        
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
    }
}

function retrieveChecklistResponse(data, format)
{
    /**
     * @member {retrieveChecklistResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveChecklistResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveChecklistResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveChecklistResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveChecklistResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveChecklistResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveChecklistResponseApplicationException(data)
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

function retrieveChecklistResponsecontext(data)
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
     * @member {retrieveChecklistResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveChecklistResponseElement} Element
     */
    this['Element'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveChecklistResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Element = [];
            for(Elementchildi = 0; Elementchildi < data.getElementsByTagName("Element").length; Elementchildi++)
            {
                Element.push(new retrieveChecklistResponseElement(data.getElementsByTagName("Element")[Elementchildi]));
            }
            if(data.getElementsByTagName("Element").length > 0)
                this['Element'] = Element;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveChecklistResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Element') && data['Element'] != null)
            {
                Element = [];
                for(Elementindex = 0; Elementindex < data['Element'].length; Elementindex++)
                {
                    Element.push(new retrieveChecklistResponseElement(data['Element'][Elementindex]));
                }
                this['Element'] = Element;
            }
        }
    }
}

function retrieveChecklistResponseHeader(data)
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
     * @member {String} activity_desc
     */
    this['activity_desc'] = null;
    
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
            this['chklst_rowid'] = parseInt(data.getElementsByTagName("chklst_rowid")[0].lastChild.nodeValue);
            
            this['activity_code'] = (data.getElementsByTagName("activity_code")[0].lastChild != null) ? data.getElementsByTagName("activity_code")[0].lastChild.nodeValue : "";
            
            this['activity_desc'] = (data.getElementsByTagName("activity_desc")[0].lastChild != null) ? data.getElementsByTagName("activity_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['chklst_rowid'] = data['chklst_rowid'];
            
            this['activity_code'] = data['activity_code'];
            
            this['activity_desc'] = data['activity_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveChecklistResponseElement(data)
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
     * @member {String} element_desc
     */
    this['element_desc'] = null;
    
    /**
     * @member {String} subelement_code
     */
    this['subelement_code'] = null;
    
    /**
     * @member {String} subelement_desc
     */
    this['subelement_desc'] = null;
    
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
     * @member {String} any_all_flag_desc
     */
    this['any_all_flag_desc'] = null;
    
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
            this['chklstelement_rowid'] = parseInt(data.getElementsByTagName("chklstelement_rowid")[0].lastChild.nodeValue);
            
            this['element_code'] = (data.getElementsByTagName("element_code")[0].lastChild != null) ? data.getElementsByTagName("element_code")[0].lastChild.nodeValue : "";
            
            this['element_desc'] = (data.getElementsByTagName("element_desc")[0].lastChild != null) ? data.getElementsByTagName("element_desc")[0].lastChild.nodeValue : "";
            
            this['subelement_code'] = (data.getElementsByTagName("subelement_code")[0].lastChild != null) ? data.getElementsByTagName("subelement_code")[0].lastChild.nodeValue : "";
            
            this['subelement_desc'] = (data.getElementsByTagName("subelement_desc")[0].lastChild != null) ? data.getElementsByTagName("subelement_desc")[0].lastChild.nodeValue : "";
            
            this['mandatory_flag'] = (data.getElementsByTagName("mandatory_flag")[0].lastChild != null) ? data.getElementsByTagName("mandatory_flag")[0].lastChild.nodeValue : "";
            
            this['allowed_option'] = (data.getElementsByTagName("allowed_option")[0].lastChild != null) ? data.getElementsByTagName("allowed_option")[0].lastChild.nodeValue : "";
            
            this['any_all_flag'] = (data.getElementsByTagName("any_all_flag")[0].lastChild != null) ? data.getElementsByTagName("any_all_flag")[0].lastChild.nodeValue : "";
            
            this['any_all_flag_desc'] = (data.getElementsByTagName("any_all_flag_desc")[0].lastChild != null) ? data.getElementsByTagName("any_all_flag_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['chklstelement_rowid'] = data['chklstelement_rowid'];
            
            this['element_code'] = data['element_code'];
            
            this['element_desc'] = data['element_desc'];
            
            this['subelement_code'] = data['subelement_code'];
            
            this['subelement_desc'] = data['subelement_desc'];
            
            this['mandatory_flag'] = data['mandatory_flag'];
            
            this['allowed_option'] = data['allowed_option'];
            
            this['any_all_flag'] = data['any_all_flag'];
            
            this['any_all_flag_desc'] = data['any_all_flag_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

