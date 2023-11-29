var responseDataFormat = "JSON";

function saveChecklistTranRequest(data)
{
    /**
     * @member {saveChecklistTranRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveChecklistTranRequestcontext(data['context']);
    }
}

function saveChecklistTranRequestcontext(data)
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
     * @member {saveChecklistTranRequestElement} Element
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
        
        if(data.hasOwnProperty('Element') && data['Element'] != null)
        {
            Element = [];
            for(Elementindex = 0; Elementindex < data['Element'].length; Elementindex++)
            {
                Element.push(new saveChecklistTranRequestElement(data['Element'][Elementindex]));
            }
            this['Element'] = Element;
        }
    }
}

function saveChecklistTranRequestElement(data)
{
    /**
     * @member {Int32} doc_rowid
     */
    this['doc_rowid'] = null;
    
    /**
     * @member {String} doc_no
     */
    this['doc_no'] = null;
    
    /**
     * @member {String} doc_type
     */
    this['doc_type'] = null;
    
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
     * @member {String} element_value
     */
    this['element_value'] = null;
    
    /**
     * @member {String} complied_flag
     */
    this['complied_flag'] = null;
    
    /**
     * @member {String} verified_on
     */
    this['verified_on'] = null;
    
    /**
     * @member {String} verified_by
     */
    this['verified_by'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
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
        if(data.hasOwnProperty('doc_rowid'))
            this['doc_rowid'] = data['doc_rowid'];
        
        if(data.hasOwnProperty('doc_no'))
            this['doc_no'] = data['doc_no'];
        
        if(data.hasOwnProperty('doc_type'))
            this['doc_type'] = data['doc_type'];
        
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
        
        if(data.hasOwnProperty('element_value'))
            this['element_value'] = data['element_value'];
        
        if(data.hasOwnProperty('complied_flag'))
            this['complied_flag'] = data['complied_flag'];
        
        if(data.hasOwnProperty('verified_on'))
            this['verified_on'] = data['verified_on'];
        
        if(data.hasOwnProperty('verified_by'))
            this['verified_by'] = data['verified_by'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveChecklistTranResponse(data, format)
{
    /**
     * @member {saveChecklistTranResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveChecklistTranResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveChecklistTranResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveChecklistTranResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveChecklistTranResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveChecklistTranResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveChecklistTranResponseApplicationException(data)
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

function saveChecklistTranResponsecontext(data)
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
     * @member {saveChecklistTranResponseElement} Element
     */
    this['Element'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Element = [];
            for(Elementchildi = 0; Elementchildi < data.getElementsByTagName("Element").length; Elementchildi++)
            {
                Element.push(new saveChecklistTranResponseElement(data.getElementsByTagName("Element")[Elementchildi]));
            }
            if(data.getElementsByTagName("Element").length > 0)
                this['Element'] = Element;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Element') && data['Element'] != null)
            {
                Element = [];
                for(Elementindex = 0; Elementindex < data['Element'].length; Elementindex++)
                {
                    Element.push(new saveChecklistTranResponseElement(data['Element'][Elementindex]));
                }
                this['Element'] = Element;
            }
        }
    }
}

function saveChecklistTranResponseElement(data)
{
    /**
     * @member {Int32} doc_rowid
     */
    this['doc_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['doc_rowid'] = parseInt(data.getElementsByTagName("doc_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['doc_rowid'] = data['doc_rowid'];
        }
    }
}

