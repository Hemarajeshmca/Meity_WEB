var responseDataFormat = "JSON";

function PAWHS_getProductionStageSetupRequest(data)
{
    /**
     * @member {PAWHS_getProductionStageSetupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getProductionStageSetupRequestcontext(data['context']);
    }
}

function PAWHS_getProductionStageSetupRequestcontext(data)
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
     * @member {PAWHS_getProductionStageSetupRequestHeader} Header
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
            this['Header'] = new PAWHS_getProductionStageSetupRequestHeader(data['Header']);
    }
}

function PAWHS_getProductionStageSetupRequestHeader(data)
{
    /**
     * @member {Int32} production_rowid
     */
    this['production_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('production_rowid'))
            this['production_rowid'] = data['production_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
    }
}

function PAWHS_getProductionStageSetupResponse(data, format)
{
    /**
     * @member {PAWHS_getProductionStageSetupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getProductionStageSetupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getProductionStageSetupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getProductionStageSetupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getProductionStageSetupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getProductionStageSetupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getProductionStageSetupResponseApplicationException(data)
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

function PAWHS_getProductionStageSetupResponsecontext(data)
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
     * @member {PAWHS_getProductionStageSetupResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getProductionStageSetupResponseStage} Stage
     */
    this['Stage'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getProductionStageSetupResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Stage = [];
            for(Stagechildi = 0; Stagechildi < data.getElementsByTagName("Stage").length; Stagechildi++)
            {
                Stage.push(new PAWHS_getProductionStageSetupResponseStage(data.getElementsByTagName("Stage")[Stagechildi]));
            }
            if(data.getElementsByTagName("Stage").length > 0)
                this['Stage'] = Stage;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getProductionStageSetupResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Stage') && data['Stage'] != null)
            {
                Stage = [];
                for(Stageindex = 0; Stageindex < data['Stage'].length; Stageindex++)
                {
                    Stage.push(new PAWHS_getProductionStageSetupResponseStage(data['Stage'][Stageindex]));
                }
                this['Stage'] = Stage;
            }
        }
    }
}

function PAWHS_getProductionStageSetupResponseHeader(data)
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['production_rowid'] = parseInt(data.getElementsByTagName("production_rowid")[0].lastChild.nodeValue);
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['fg_code'] = (data.getElementsByTagName("fg_code")[0].lastChild != null) ? data.getElementsByTagName("fg_code")[0].lastChild.nodeValue : "";
            
            this['final_output_code'] = (data.getElementsByTagName("final_output_code")[0].lastChild != null) ? data.getElementsByTagName("final_output_code")[0].lastChild.nodeValue : "";
            
            this['final_output'] = (data.getElementsByTagName("final_output")[0].lastChild != null) ? data.getElementsByTagName("final_output")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['production_rowid'] = data['production_rowid'];
            
            this['agg_code'] = data['agg_code'];
            
            this['fg_code'] = data['fg_code'];
            
            this['final_output_code'] = data['final_output_code'];
            
            this['final_output'] = data['final_output'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getProductionStageSetupResponseStage(data)
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
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['stage_rowid'] = parseInt(data.getElementsByTagName("stage_rowid")[0].lastChild.nodeValue);
            
            this['stage_code'] = (data.getElementsByTagName("stage_code")[0].lastChild != null) ? data.getElementsByTagName("stage_code")[0].lastChild.nodeValue : "";
            
            this['stage_desc'] = (data.getElementsByTagName("stage_desc")[0].lastChild != null) ? data.getElementsByTagName("stage_desc")[0].lastChild.nodeValue : "";
            
            this['seq_no'] = parseInt(data.getElementsByTagName("seq_no")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['stage_rowid'] = data['stage_rowid'];
            
            this['stage_code'] = data['stage_code'];
            
            this['stage_desc'] = data['stage_desc'];
            
            this['seq_no'] = data['seq_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

