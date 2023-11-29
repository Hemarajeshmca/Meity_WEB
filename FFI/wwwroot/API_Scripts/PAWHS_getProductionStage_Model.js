var responseDataFormat = "JSON";

function PAWHS_getProductionStageRequest(data)
{
    /**
     * @member {PAWHS_getProductionStageRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getProductionStageRequestcontext(data['context']);
    }
}

function PAWHS_getProductionStageRequestcontext(data)
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
     * @member {PAWHS_getProductionStageRequestHeader} Header
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
            this['Header'] = new PAWHS_getProductionStageRequestHeader(data['Header']);
    }
}

function PAWHS_getProductionStageRequestHeader(data)
{
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fg_code'))
            this['fg_code'] = data['fg_code'];
        
    }
}

function PAWHS_getProductionStageResponse(data, format)
{
    /**
     * @member {PAWHS_getProductionStageResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getProductionStageResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getProductionStageResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getProductionStageResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getProductionStageResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getProductionStageResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getProductionStageResponseApplicationException(data)
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

function PAWHS_getProductionStageResponsecontext(data)
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
     * @member {PAWHS_getProductionStageResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getProductionStageResponseStage} Stage
     */
    this['Stage'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getProductionStageResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Stage = [];
            for(Stagechildi = 0; Stagechildi < data.getElementsByTagName("Stage").length; Stagechildi++)
            {
                Stage.push(new PAWHS_getProductionStageResponseStage(data.getElementsByTagName("Stage")[Stagechildi]));
            }
            if(data.getElementsByTagName("Stage").length > 0)
                this['Stage'] = Stage;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getProductionStageResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Stage') && data['Stage'] != null)
            {
                Stage = [];
                for(Stageindex = 0; Stageindex < data['Stage'].length; Stageindex++)
                {
                    Stage.push(new PAWHS_getProductionStageResponseStage(data['Stage'][Stageindex]));
                }
                this['Stage'] = Stage;
            }
        }
    }
}

function PAWHS_getProductionStageResponseHeader(data)
{
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['fg_code'] = (data.getElementsByTagName("fg_code")[0].lastChild != null) ? data.getElementsByTagName("fg_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['fg_code'] = data['fg_code'];
        }
    }
}

function PAWHS_getProductionStageResponseStage(data)
{
    /**
     * @member {Int32} stage_rowid
     */
    this['stage_rowid'] = null;
    
    /**
     * @member {String} stage_code
     */
    this['stage_code'] = null;
    
    /**
     * @member {String} stage_desc
     */
    this['stage_desc'] = null;
    
    /**
     * @member {Int16} seq_no
     */
    this['seq_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['stage_rowid'] = parseInt(data.getElementsByTagName("stage_rowid")[0].lastChild.nodeValue);
            
            this['stage_code'] = (data.getElementsByTagName("stage_code")[0].lastChild != null) ? data.getElementsByTagName("stage_code")[0].lastChild.nodeValue : "";
            
            this['stage_desc'] = (data.getElementsByTagName("stage_desc")[0].lastChild != null) ? data.getElementsByTagName("stage_desc")[0].lastChild.nodeValue : "";
            
            this['seq_no'] = parseInt(data.getElementsByTagName("seq_no")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['stage_rowid'] = data['stage_rowid'];
            
            this['stage_code'] = data['stage_code'];
            
            this['stage_desc'] = data['stage_desc'];
            
            this['seq_no'] = data['seq_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

