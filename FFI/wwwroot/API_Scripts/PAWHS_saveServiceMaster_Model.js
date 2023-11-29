var responseDataFormat = "JSON";

function PAWHS_saveServiceMasterRequest(data)
{
    /**
     * @member {PAWHS_saveServiceMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveServiceMasterRequestcontext(data['context']);
    }
}

function PAWHS_saveServiceMasterRequestcontext(data)
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
     * @member {PAWHS_saveServiceMasterRequestHeader} Header
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
            this['Header'] = new PAWHS_saveServiceMasterRequestHeader(data['Header']);
    }
}

function PAWHS_saveServiceMasterRequestHeader(data)
{
    /**
     * @member {Int32} service_rowid
     */
    this['service_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} service_code
     */
    this['service_code'] = null;
    
    /**
     * @member {String} service_name
     */
    this['service_name'] = null;
    
    /**
     * @member {String} service_ll_name
     */
    this['service_ll_name'] = null;
    
    /**
     * @member {String} output_name_code
     */
    this['output_name_code'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
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
        if(data.hasOwnProperty('service_rowid'))
            this['service_rowid'] = data['service_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('service_code'))
            this['service_code'] = data['service_code'];
        
        if(data.hasOwnProperty('service_name'))
            this['service_name'] = data['service_name'];
        
        if(data.hasOwnProperty('service_ll_name'))
            this['service_ll_name'] = data['service_ll_name'];
        
        if(data.hasOwnProperty('output_name_code'))
            this['output_name_code'] = data['output_name_code'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('hsn_description'))
            this['hsn_description'] = data['hsn_description'];
        
        if(data.hasOwnProperty('rate'))
            this['rate'] = data['rate'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveServiceMasterResponse(data, format)
{
    /**
     * @member {PAWHS_saveServiceMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveServiceMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveServiceMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveServiceMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveServiceMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveServiceMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveServiceMasterResponseApplicationException(data)
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

function PAWHS_saveServiceMasterResponsecontext(data)
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
     * @member {PAWHS_saveServiceMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveServiceMasterResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveServiceMasterResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveServiceMasterResponseHeader(data)
{
    /**
     * @member {Int32} service_rowid
     */
    this['service_rowid'] = null;
    
    /**
     * @member {String} service_code
     */
    this['service_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['service_rowid'] = data.getElementsByTagName("service_rowid")[0].lastChild.nodeValue;
            
            this['service_code'] = (data.getElementsByTagName("service_code")[0].lastChild != null) ? data.getElementsByTagName("service_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['service_rowid'] = data['service_rowid'];
            
            this['service_code'] = data['service_code'];
        }
    }
}

