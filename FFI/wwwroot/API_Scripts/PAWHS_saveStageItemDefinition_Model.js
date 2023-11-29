var responseDataFormat = "JSON";

function PAWHS_saveStageItemDefinitionRequest(data)
{
    /**
     * @member {PAWHS_saveStageItemDefinitionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveStageItemDefinitionRequestcontext(data['context']);
    }
}

function PAWHS_saveStageItemDefinitionRequestcontext(data)
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
     * @member {PAWHS_saveStageItemDefinitionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveStageItemDefinitionRequestStage} Stage
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
            this['Header'] = new PAWHS_saveStageItemDefinitionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Stage') && data['Stage'] != null)
        {
            Stage = [];
            for(Stageindex = 0; Stageindex < data['Stage'].length; Stageindex++)
            {
                Stage.push(new PAWHS_saveStageItemDefinitionRequestStage(data['Stage'][Stageindex]));
            }
            this['Stage'] = Stage;
        }
    }
}

function PAWHS_saveStageItemDefinitionRequestHeader(data)
{
    /**
     * @member {Int32} stage_rowid
     */
    this['stage_rowid'] = null;
    
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    /**
     * @member {String} production_stage_code
     */
    this['production_stage_code'] = null;
    
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
        if(data.hasOwnProperty('stage_rowid'))
            this['stage_rowid'] = data['stage_rowid'];
        
        if(data.hasOwnProperty('fg_code'))
            this['fg_code'] = data['fg_code'];
        
        if(data.hasOwnProperty('production_stage_code'))
            this['production_stage_code'] = data['production_stage_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveStageItemDefinitionRequestStage(data)
{
    /**
     * @member {Int32} stage_item_rowid
     */
    this['stage_item_rowid'] = null;
    
    /**
     * @member {String} input_output_code
     */
    this['input_output_code'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
    /**
     * @member {Decimal} quantity
     */
    this['quantity'] = null;
    
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
        if(data.hasOwnProperty('stage_item_rowid'))
            this['stage_item_rowid'] = data['stage_item_rowid'];
        
        if(data.hasOwnProperty('input_output_code'))
            this['input_output_code'] = data['input_output_code'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('uom'))
            this['uom'] = data['uom'];
        
        if(data.hasOwnProperty('quantity'))
            this['quantity'] = data['quantity'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveStageItemDefinitionResponse(data, format)
{
    /**
     * @member {PAWHS_saveStageItemDefinitionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveStageItemDefinitionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveStageItemDefinitionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveStageItemDefinitionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveStageItemDefinitionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveStageItemDefinitionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveStageItemDefinitionResponseApplicationException(data)
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

function PAWHS_saveStageItemDefinitionResponsecontext(data)
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
     * @member {PAWHS_saveStageItemDefinitionResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveStageItemDefinitionResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveStageItemDefinitionResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveStageItemDefinitionResponseHeader(data)
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

