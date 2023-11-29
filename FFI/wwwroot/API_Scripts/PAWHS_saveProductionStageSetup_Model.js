var responseDataFormat = "JSON";

function PAWHS_saveProductionStageSetupRequest(data)
{
    /**
     * @member {PAWHS_saveProductionStageSetupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveProductionStageSetupRequestcontext(data['context']);
    }
}

function PAWHS_saveProductionStageSetupRequestcontext(data)
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
     * @member {PAWHS_saveProductionStageSetupRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveProductionStageSetupRequestStage} Stage
     */
    this['Stage'] = null;
    
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
            this['Header'] = new PAWHS_saveProductionStageSetupRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Stage') && data['Stage'] != null)
        {
            Stage = [];
            for(Stageindex = 0; Stageindex < data['Stage'].length; Stageindex++)
            {
                Stage.push(new PAWHS_saveProductionStageSetupRequestStage(data['Stage'][Stageindex]));
            }
            this['Stage'] = Stage;
        }
    }
}

function PAWHS_saveProductionStageSetupRequestHeader(data)
{
    /**
     * @member {Int32} production_rowid
     */
    this['production_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    /**
     * @member {String} final_output_code
     */
    this['final_output_code'] = null;
    
    /**
     * @member {String} final_output
     */
    this['final_output'] = null;
    
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
        if(data.hasOwnProperty('production_rowid'))
            this['production_rowid'] = data['production_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('fg_code'))
            this['fg_code'] = data['fg_code'];
        
        if(data.hasOwnProperty('final_output_code'))
            this['final_output_code'] = data['final_output_code'];
        
        if(data.hasOwnProperty('final_output'))
            this['final_output'] = data['final_output'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveProductionStageSetupRequestStage(data)
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
     * @member {Int16} seq_no
     */
    this['seq_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('stage_rowid'))
            this['stage_rowid'] = data['stage_rowid'];
        
        if(data.hasOwnProperty('stage_code'))
            this['stage_code'] = data['stage_code'];
        
        if(data.hasOwnProperty('seq_no'))
            this['seq_no'] = data['seq_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveProductionStageSetupResponse(data, format)
{
    /**
     * @member {PAWHS_saveProductionStageSetupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveProductionStageSetupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveProductionStageSetupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveProductionStageSetupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveProductionStageSetupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveProductionStageSetupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveProductionStageSetupResponseApplicationException(data)
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

function PAWHS_saveProductionStageSetupResponsecontext(data)
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
     * @member {PAWHS_saveProductionStageSetupResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveProductionStageSetupResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveProductionStageSetupResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveProductionStageSetupResponseHeader(data)
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

