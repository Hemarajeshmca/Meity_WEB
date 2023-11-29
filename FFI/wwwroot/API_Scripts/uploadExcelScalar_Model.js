var responseDataFormat = "JSON";

function uploadExcelScalarRequest(data)
{
    /**
     * @member {uploadExcelScalarRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new uploadExcelScalarRequestcontext(data['context']);
    }
}

function uploadExcelScalarRequestcontext(data)
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
     * @member {uploadExcelScalarRequestheader} header
     */
    this['header'] = null;
    
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
        
        if(data.hasOwnProperty('header') && data['header'] != null)
            this['header'] = new uploadExcelScalarRequestheader(data['header']);
    }
}

function uploadExcelScalarRequestheader(data)
{
    /**
     * @member {String} option_type
     */
    this['option_type'] = null;
    
    /**
     * @member {String} parameters
     */
    this['parameters'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('option_type'))
            this['option_type'] = data['option_type'];
        
        if(data.hasOwnProperty('parameters'))
            this['parameters'] = data['parameters'];
        
    }
}

function uploadExcelScalarResponse(data, format)
{
    /**
     * @member {uploadExcelScalarResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {uploadExcelScalarResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new uploadExcelScalarResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new uploadExcelScalarResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new uploadExcelScalarResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new uploadExcelScalarResponseApplicationException(data['ApplicationException']);
        }
    }
}

function uploadExcelScalarResponseApplicationException(data)
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

function uploadExcelScalarResponsecontext(data)
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
     * @member {uploadExcelScalarResponseheader} header
     */
    this['header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['header'] = new uploadExcelScalarResponseheader(data.getElementsByTagName("header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['header'] = new uploadExcelScalarResponseheader(data['header']);
        }
    }
}

function uploadExcelScalarResponseheader(data)
{
    /**
     * @member {String} tran_status_desc
     */
    this['tran_status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['tran_status_desc'] = (data.getElementsByTagName("tran_status_desc")[0].lastChild != null) ? data.getElementsByTagName("tran_status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['tran_status_desc'] = data['tran_status_desc'];
        }
    }
}

