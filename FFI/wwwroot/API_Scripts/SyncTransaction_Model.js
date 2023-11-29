var responseDataFormat = "JSON";

function SyncTransactionRequest(data)
{
    /**
     * @member {SyncTransactionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new SyncTransactionRequestcontext(data['context']);
    }
}

function SyncTransactionRequestcontext(data)
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
     * @member {SyncTransactionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {SyncTransactionRequestList} List
     */
    this['List'] = null;
    
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
            this['Header'] = new SyncTransactionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('List') && data['List'] != null)
        {
            List = [];
            for(Listindex = 0; Listindex < data['List'].length; Listindex++)
            {
                List.push(new SyncTransactionRequestList(data['List'][Listindex]));
            }
            this['List'] = List;
        }
    }
}

function SyncTransactionRequestHeader(data)
{
    /**
     * @member {String} option_type
     */
    this['option_type'] = null;
    
    /**
     * @member {String} sub_option_type
     */
    this['sub_option_type'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('option_type'))
            this['option_type'] = data['option_type'];
        
        if(data.hasOwnProperty('sub_option_type'))
            this['sub_option_type'] = data['sub_option_type'];
        
    }
}

function SyncTransactionRequestList(data)
{
    /**
     * @member {String} tran_name
     */
    this['tran_name'] = null;
    
    /**
     * @member {String} query_param_string
     */
    this['query_param_string'] = null;
    
    /**
     * @member {String} tran_flag
     */
    this['tran_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('tran_name'))
            this['tran_name'] = data['tran_name'];
        
        if(data.hasOwnProperty('query_param_string'))
            this['query_param_string'] = data['query_param_string'];
        
        if(data.hasOwnProperty('tran_flag'))
            this['tran_flag'] = data['tran_flag'];
        
    }
}

function SyncTransactionResponse(data, format)
{
    /**
     * @member {SyncTransactionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {SyncTransactionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new SyncTransactionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new SyncTransactionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new SyncTransactionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new SyncTransactionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function SyncTransactionResponseApplicationException(data)
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

function SyncTransactionResponsecontext(data)
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
     * @member {SyncTransactionResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new SyncTransactionResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new SyncTransactionResponseHeader(data['Header']);
        }
    }
}

function SyncTransactionResponseHeader(data)
{
    /**
     * @member {String} update_status
     */
    this['update_status'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['update_status'] = (data.getElementsByTagName("update_status")[0].lastChild != null) ? data.getElementsByTagName("update_status")[0].lastChild.nodeValue : "";
        }
        else {
            this['update_status'] = data['update_status'];
        }
    }
}

