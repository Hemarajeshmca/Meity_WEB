var responseDataFormat = "JSON";

function saveGSTMasterRequest(data)
{
    /**
     * @member {saveGSTMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveGSTMasterRequestcontext(data['context']);
    }
}

function saveGSTMasterRequestcontext(data)
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
     * @member {saveGSTMasterRequestHeader} Header
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
            this['Header'] = new saveGSTMasterRequestHeader(data['Header']);
    }
}

function saveGSTMasterRequestHeader(data)
{
    /**
     * @member {Int32} gstmaster_rowid
     */
    this['gstmaster_rowid'] = null;
    
    /**
     * @member {String} state_code
     */
    this['state_code'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_desc
     */
    this['hsn_desc'] = null;
    
    /**
     * @member {Decimal} cgst
     */
    this['cgst'] = null;
    
    /**
     * @member {Decimal} sgst
     */
    this['sgst'] = null;
    
    /**
     * @member {Decimal} igst
     */
    this['igst'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('gstmaster_rowid'))
            this['gstmaster_rowid'] = data['gstmaster_rowid'];
        
        if(data.hasOwnProperty('state_code'))
            this['state_code'] = data['state_code'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('hsn_desc'))
            this['hsn_desc'] = data['hsn_desc'];
        
        if(data.hasOwnProperty('cgst'))
            this['cgst'] = data['cgst'];
        
        if(data.hasOwnProperty('sgst'))
            this['sgst'] = data['sgst'];
        
        if(data.hasOwnProperty('igst'))
            this['igst'] = data['igst'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
    }
}

function saveGSTMasterResponse(data, format)
{
    /**
     * @member {saveGSTMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveGSTMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveGSTMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveGSTMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveGSTMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveGSTMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveGSTMasterResponseApplicationException(data)
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

function saveGSTMasterResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

