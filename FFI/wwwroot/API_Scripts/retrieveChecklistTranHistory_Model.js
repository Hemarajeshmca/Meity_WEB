var responseDataFormat = "JSON";

function retrieveChecklistTranHistoryRequest(data)
{
    /**
     * @member {retrieveChecklistTranHistoryRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveChecklistTranHistoryRequestcontext(data['context']);
    }
}

function retrieveChecklistTranHistoryRequestcontext(data)
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
     * @member {retrieveChecklistTranHistoryRequestHistory_Header} History_Header
     */
    this['History_Header'] = null;
    
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
        
        if(data.hasOwnProperty('History_Header') && data['History_Header'] != null)
            this['History_Header'] = new retrieveChecklistTranHistoryRequestHistory_Header(data['History_Header']);
    }
}

function retrieveChecklistTranHistoryRequestHistory_Header(data)
{
    /**
     * @member {Int32} row_id
     */
    this['row_id'] = null;
    
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
        if(data.hasOwnProperty('row_id'))
            this['row_id'] = data['row_id'];
        
        if(data.hasOwnProperty('doc_rowid'))
            this['doc_rowid'] = data['doc_rowid'];
        
        if(data.hasOwnProperty('doc_no'))
            this['doc_no'] = data['doc_no'];
        
        if(data.hasOwnProperty('doc_type'))
            this['doc_type'] = data['doc_type'];
        
        if(data.hasOwnProperty('edit_date'))
            this['edit_date'] = data['edit_date'];
        
        if(data.hasOwnProperty('edited_by'))
            this['edited_by'] = data['edited_by'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function retrieveChecklistTranHistoryResponse(data, format)
{
    /**
     * @member {retrieveChecklistTranHistoryResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveChecklistTranHistoryResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveChecklistTranHistoryResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveChecklistTranHistoryResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveChecklistTranHistoryResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveChecklistTranHistoryResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveChecklistTranHistoryResponseApplicationException(data)
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

function retrieveChecklistTranHistoryResponsecontext(data)
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
     * @member {retrieveChecklistTranHistoryResponseChklist_Element} Chklist_Element
     */
    this['Chklist_Element'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Chklist_Element = [];
            for(Chklist_Elementchildi = 0; Chklist_Elementchildi < data.getElementsByTagName("Chklist_Element").length; Chklist_Elementchildi++)
            {
                Chklist_Element.push(new retrieveChecklistTranHistoryResponseChklist_Element(data.getElementsByTagName("Chklist_Element")[Chklist_Elementchildi]));
            }
            if(data.getElementsByTagName("Chklist_Element").length > 0)
                this['Chklist_Element'] = Chklist_Element;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Chklist_Element') && data['Chklist_Element'] != null)
            {
                Chklist_Element = [];
                for(Chklist_Elementindex = 0; Chklist_Elementindex < data['Chklist_Element'].length; Chklist_Elementindex++)
                {
                    Chklist_Element.push(new retrieveChecklistTranHistoryResponseChklist_Element(data['Chklist_Element'][Chklist_Elementindex]));
                }
                this['Chklist_Element'] = Chklist_Element;
            }
        }
    }
}

function retrieveChecklistTranHistoryResponseChklist_Element(data)
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
     * @member {String} element_value
     */
    this['element_value'] = null;
    
    /**
     * @member {String} complied_flag
     */
    this['complied_flag'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
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
            
            this['element_value'] = (data.getElementsByTagName("element_value")[0].lastChild != null) ? data.getElementsByTagName("element_value")[0].lastChild.nodeValue : "";
            
            this['complied_flag'] = (data.getElementsByTagName("complied_flag")[0].lastChild != null) ? data.getElementsByTagName("complied_flag")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("remarks")[0].attributes.length == 0) //Check NULL value
                this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
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
            
            this['element_value'] = data['element_value'];
            
            this['complied_flag'] = data['complied_flag'];
            
            this['remarks'] = data['remarks'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

