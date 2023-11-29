var responseDataFormat = "JSON";

function saveShareDespatchRequest(data)
{
    /**
     * @member {saveShareDespatchRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveShareDespatchRequestcontext(data['context']);
    }
}

function saveShareDespatchRequestcontext(data)
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
     * @member {saveShareDespatchRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveShareDespatchRequestDetail} Detail
     */
    this['Detail'] = null;
    
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
            this['Header'] = new saveShareDespatchRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveShareDespatchRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveShareDespatchRequestHeader(data)
{
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} despatch_status
     */
    this['despatch_status'] = null;
    
    /**
     * @member {String} despatch_date
     */
    this['despatch_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('despatch_status'))
            this['despatch_status'] = data['despatch_status'];
        
        if(data.hasOwnProperty('despatch_date'))
            this['despatch_date'] = data['despatch_date'];
        
    }
}

function saveShareDespatchRequestDetail(data)
{
    /**
     * @member {Int32} shareapp_rowid
     */
    this['shareapp_rowid'] = null;
    
    /**
     * @member {String} shareapp_no
     */
    this['shareapp_no'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} despatch_date
     */
    this['despatch_date'] = null;
    
    /**
     * @member {String} despatch_awb_no
     */
    this['despatch_awb_no'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} despatch_remark
     */
    this['despatch_remark'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('shareapp_rowid'))
            this['shareapp_rowid'] = data['shareapp_rowid'];
        
        if(data.hasOwnProperty('shareapp_no'))
            this['shareapp_no'] = data['shareapp_no'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('certificate_no'))
            this['certificate_no'] = data['certificate_no'];
        
        if(data.hasOwnProperty('despatch_date'))
            this['despatch_date'] = data['despatch_date'];
        
        if(data.hasOwnProperty('despatch_awb_no'))
            this['despatch_awb_no'] = data['despatch_awb_no'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('despatch_remark'))
            this['despatch_remark'] = data['despatch_remark'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveShareDespatchResponse(data, format)
{
    /**
     * @member {saveShareDespatchResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveShareDespatchResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveShareDespatchResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveShareDespatchResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveShareDespatchResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveShareDespatchResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveShareDespatchResponseApplicationException(data)
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

function saveShareDespatchResponsecontext(data)
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

