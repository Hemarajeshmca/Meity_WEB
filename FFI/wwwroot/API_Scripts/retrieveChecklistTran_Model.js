var responseDataFormat = "JSON";

function retrieveChecklistTranRequest(data)
{
    /**
     * @member {retrieveChecklistTranRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveChecklistTranRequestcontext(data['context']);
    }
}

function retrieveChecklistTranRequestcontext(data)
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
     * @member {retrieveChecklistTranRequestHeader} Header
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
            this['Header'] = new retrieveChecklistTranRequestHeader(data['Header']);
    }
}

function retrieveChecklistTranRequestHeader(data)
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
    
    if(data)
    {
        if(data.hasOwnProperty('doc_rowid'))
            this['doc_rowid'] = data['doc_rowid'];
        
        if(data.hasOwnProperty('doc_no'))
            this['doc_no'] = data['doc_no'];
        
        if(data.hasOwnProperty('doc_type'))
            this['doc_type'] = data['doc_type'];
        
    }
}

function retrieveChecklistTranResponse(data, format)
{
    /**
     * @member {retrieveChecklistTranResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveChecklistTranResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveChecklistTranResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveChecklistTranResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveChecklistTranResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveChecklistTranResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveChecklistTranResponseApplicationException(data)
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

function retrieveChecklistTranResponsecontext(data)
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
     * @member {retrieveChecklistTranResponseElement} Element
     */
    this['Element'] = null;
    
    /**
     * @member {retrieveChecklistTranResponseHistory} History
     */
    this['History'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Element = [];
            for(Elementchildi = 0; Elementchildi < data.getElementsByTagName("Element").length; Elementchildi++)
            {
                Element.push(new retrieveChecklistTranResponseElement(data.getElementsByTagName("Element")[Elementchildi]));
            }
            if(data.getElementsByTagName("Element").length > 0)
                this['Element'] = Element;
            
            History = [];
            for(Historychildi = 0; Historychildi < data.getElementsByTagName("History").length; Historychildi++)
            {
                History.push(new retrieveChecklistTranResponseHistory(data.getElementsByTagName("History")[Historychildi]));
            }
            if(data.getElementsByTagName("History").length > 0)
                this['History'] = History;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Element') && data['Element'] != null)
            {
                Element = [];
                for(Elementindex = 0; Elementindex < data['Element'].length; Elementindex++)
                {
                    Element.push(new retrieveChecklistTranResponseElement(data['Element'][Elementindex]));
                }
                this['Element'] = Element;
            }
            
            
            if(data.hasOwnProperty('History') && data['History'] != null)
            {
                History = [];
                for(Historyindex = 0; Historyindex < data['History'].length; Historyindex++)
                {
                    History.push(new retrieveChecklistTranResponseHistory(data['History'][Historyindex]));
                }
                this['History'] = History;
            }
        }
    }
}

function retrieveChecklistTranResponseElement(data)
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
     * @member {String} allowed_option
     */
    this['allowed_option'] = null;
    
    /**
     * @member {String} mandatory_flag
     */
    this['mandatory_flag'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['chklstelement_rowid'] = parseInt(data.getElementsByTagName("chklstelement_rowid")[0].lastChild.nodeValue);
            
            this['element_code'] = (data.getElementsByTagName("element_code")[0].lastChild != null) ? data.getElementsByTagName("element_code")[0].lastChild.nodeValue : "";
            
            this['element_desc'] = (data.getElementsByTagName("element_desc")[0].lastChild != null) ? data.getElementsByTagName("element_desc")[0].lastChild.nodeValue : "";
            
            this['subelement_code'] = (data.getElementsByTagName("subelement_code")[0].lastChild != null) ? data.getElementsByTagName("subelement_code")[0].lastChild.nodeValue : "";
            
            this['subelement_desc'] = (data.getElementsByTagName("subelement_desc")[0].lastChild != null) ? data.getElementsByTagName("subelement_desc")[0].lastChild.nodeValue : "";
            
            this['allowed_option'] = (data.getElementsByTagName("allowed_option")[0].lastChild != null) ? data.getElementsByTagName("allowed_option")[0].lastChild.nodeValue : "";
            
            this['mandatory_flag'] = (data.getElementsByTagName("mandatory_flag")[0].lastChild != null) ? data.getElementsByTagName("mandatory_flag")[0].lastChild.nodeValue : "";
            
            this['any_all_flag'] = (data.getElementsByTagName("any_all_flag")[0].lastChild != null) ? data.getElementsByTagName("any_all_flag")[0].lastChild.nodeValue : "";
            
            this['element_value'] = (data.getElementsByTagName("element_value")[0].lastChild != null) ? data.getElementsByTagName("element_value")[0].lastChild.nodeValue : "";
            
            this['complied_flag'] = (data.getElementsByTagName("complied_flag")[0].lastChild != null) ? data.getElementsByTagName("complied_flag")[0].lastChild.nodeValue : "";
            
            this['verified_on'] = (data.getElementsByTagName("verified_on")[0].lastChild != null) ? data.getElementsByTagName("verified_on")[0].lastChild.nodeValue : "";
            
            this['verified_by'] = (data.getElementsByTagName("verified_by")[0].lastChild != null) ? data.getElementsByTagName("verified_by")[0].lastChild.nodeValue : "";
            
            this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
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
            
            this['allowed_option'] = data['allowed_option'];
            
            this['mandatory_flag'] = data['mandatory_flag'];
            
            this['any_all_flag'] = data['any_all_flag'];
            
            this['element_value'] = data['element_value'];
            
            this['complied_flag'] = data['complied_flag'];
            
            this['verified_on'] = data['verified_on'];
            
            this['verified_by'] = data['verified_by'];
            
            this['remarks'] = data['remarks'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveChecklistTranResponseHistory(data)
{
    /**
     * @member {Int32} row_id
     */
    this['row_id'] = null;
    
    /**
     * @member {String} edit_date
     */
    this['edit_date'] = null;
    
    /**
     * @member {String} edited_by
     */
    this['edited_by'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['row_id'] = parseInt(data.getElementsByTagName("row_id")[0].lastChild.nodeValue);
            
            this['edit_date'] = (data.getElementsByTagName("edit_date")[0].lastChild != null) ? data.getElementsByTagName("edit_date")[0].lastChild.nodeValue : "";
            
            this['edited_by'] = (data.getElementsByTagName("edited_by")[0].lastChild != null) ? data.getElementsByTagName("edited_by")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['row_id'] = data['row_id'];
            
            this['edit_date'] = data['edit_date'];
            
            this['edited_by'] = data['edited_by'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

