var responseDataFormat = "JSON";

function getGSTMasterRequest(data)
{
    /**
     * @member {getGSTMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getGSTMasterRequestcontext(data['context']);
    }
}

function getGSTMasterRequestcontext(data)
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
     * @member {getGSTMasterRequestHeader} Header
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
            this['Header'] = new getGSTMasterRequestHeader(data['Header']);
    }
}

function getGSTMasterRequestHeader(data)
{
    /**
     * @member {Int32} gstmaster_rowid
     */
    this['gstmaster_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('gstmaster_rowid'))
            this['gstmaster_rowid'] = data['gstmaster_rowid'];
        
    }
}

function getGSTMasterResponse(data, format)
{
    /**
     * @member {getGSTMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getGSTMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getGSTMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getGSTMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getGSTMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getGSTMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getGSTMasterResponseApplicationException(data)
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

function getGSTMasterResponsecontext(data)
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
     * @member {getGSTMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getGSTMasterResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getGSTMasterResponseHeader(data['Header']);
        }
    }
}

function getGSTMasterResponseHeader(data)
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
     * @member {String} state_desc
     */
    this['state_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['gstmaster_rowid'] = parseInt(data.getElementsByTagName("gstmaster_rowid")[0].lastChild.nodeValue);
            
            this['state_code'] = (data.getElementsByTagName("state_code")[0].lastChild != null) ? data.getElementsByTagName("state_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("state_desc")[0].attributes.length == 0) //Check NULL value
                this['state_desc'] = (data.getElementsByTagName("state_desc")[0].lastChild != null) ? data.getElementsByTagName("state_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_desc'] = (data.getElementsByTagName("hsn_desc")[0].lastChild != null) ? data.getElementsByTagName("hsn_desc")[0].lastChild.nodeValue : "";
            
            this['cgst'] = parseFloat(data.getElementsByTagName("cgst")[0].lastChild.nodeValue);
            
            this['sgst'] = parseFloat(data.getElementsByTagName("sgst")[0].lastChild.nodeValue);
            
            this['igst'] = parseFloat(data.getElementsByTagName("igst")[0].lastChild.nodeValue);
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['gstmaster_rowid'] = data['gstmaster_rowid'];
            
            this['state_code'] = data['state_code'];
            
            this['state_desc'] = data['state_desc'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_desc'] = data['hsn_desc'];
            
            this['cgst'] = data['cgst'];
            
            this['sgst'] = data['sgst'];
            
            this['igst'] = data['igst'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

