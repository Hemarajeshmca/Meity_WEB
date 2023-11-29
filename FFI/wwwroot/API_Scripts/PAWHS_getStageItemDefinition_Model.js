var responseDataFormat = "JSON";

function PAWHS_getStageItemDefinitionRequest(data)
{
    /**
     * @member {PAWHS_getStageItemDefinitionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getStageItemDefinitionRequestcontext(data['context']);
    }
}

function PAWHS_getStageItemDefinitionRequestcontext(data)
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
     * @member {PAWHS_getStageItemDefinitionRequestHeader} Header
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
            this['Header'] = new PAWHS_getStageItemDefinitionRequestHeader(data['Header']);
    }
}

function PAWHS_getStageItemDefinitionRequestHeader(data)
{
    /**
     * @member {Int32} stage_rowid
     */
    this['stage_rowid'] = null;
    
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('stage_rowid'))
            this['stage_rowid'] = data['stage_rowid'];
        
        if(data.hasOwnProperty('fg_code'))
            this['fg_code'] = data['fg_code'];
        
    }
}

function PAWHS_getStageItemDefinitionResponse(data, format)
{
    /**
     * @member {PAWHS_getStageItemDefinitionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getStageItemDefinitionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getStageItemDefinitionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getStageItemDefinitionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getStageItemDefinitionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getStageItemDefinitionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getStageItemDefinitionResponseApplicationException(data)
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

function PAWHS_getStageItemDefinitionResponsecontext(data)
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
     * @member {PAWHS_getStageItemDefinitionResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getStageItemDefinitionResponseStage} Stage
     */
    this['Stage'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getStageItemDefinitionResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Stage = [];
            for(Stagechildi = 0; Stagechildi < data.getElementsByTagName("Stage").length; Stagechildi++)
            {
                Stage.push(new PAWHS_getStageItemDefinitionResponseStage(data.getElementsByTagName("Stage")[Stagechildi]));
            }
            if(data.getElementsByTagName("Stage").length > 0)
                this['Stage'] = Stage;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getStageItemDefinitionResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Stage') && data['Stage'] != null)
            {
                Stage = [];
                for(Stageindex = 0; Stageindex < data['Stage'].length; Stageindex++)
                {
                    Stage.push(new PAWHS_getStageItemDefinitionResponseStage(data['Stage'][Stageindex]));
                }
                this['Stage'] = Stage;
            }
        }
    }
}

function PAWHS_getStageItemDefinitionResponseHeader(data)
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
     * @member {String} production_stage_desc
     */
    this['production_stage_desc'] = null;
    
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
            this['stage_rowid'] = parseInt(data.getElementsByTagName("stage_rowid")[0].lastChild.nodeValue);
            
            this['fg_code'] = (data.getElementsByTagName("fg_code")[0].lastChild != null) ? data.getElementsByTagName("fg_code")[0].lastChild.nodeValue : "";
            
            this['production_stage_code'] = (data.getElementsByTagName("production_stage_code")[0].lastChild != null) ? data.getElementsByTagName("production_stage_code")[0].lastChild.nodeValue : "";
            
            this['production_stage_desc'] = (data.getElementsByTagName("production_stage_desc")[0].lastChild != null) ? data.getElementsByTagName("production_stage_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['stage_rowid'] = data['stage_rowid'];
            
            this['fg_code'] = data['fg_code'];
            
            this['production_stage_code'] = data['production_stage_code'];
            
            this['production_stage_desc'] = data['production_stage_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getStageItemDefinitionResponseStage(data)
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
     * @member {String} input_output_desc
     */
    this['input_output_desc'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} item_desc
     */
    this['item_desc'] = null;
    
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
            this['stage_item_rowid'] = parseInt(data.getElementsByTagName("stage_item_rowid")[0].lastChild.nodeValue);
            
            this['input_output_code'] = (data.getElementsByTagName("input_output_code")[0].lastChild != null) ? data.getElementsByTagName("input_output_code")[0].lastChild.nodeValue : "";
            
            this['input_output_desc'] = (data.getElementsByTagName("input_output_desc")[0].lastChild != null) ? data.getElementsByTagName("input_output_desc")[0].lastChild.nodeValue : "";
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_desc'] = (data.getElementsByTagName("item_desc")[0].lastChild != null) ? data.getElementsByTagName("item_desc")[0].lastChild.nodeValue : "";
            
            this['uom'] = (data.getElementsByTagName("uom")[0].lastChild != null) ? data.getElementsByTagName("uom")[0].lastChild.nodeValue : "";
            
            this['quantity'] = parseFloat(data.getElementsByTagName("quantity")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['stage_item_rowid'] = data['stage_item_rowid'];
            
            this['input_output_code'] = data['input_output_code'];
            
            this['input_output_desc'] = data['input_output_desc'];
            
            this['item_code'] = data['item_code'];
            
            this['item_desc'] = data['item_desc'];
            
            this['uom'] = data['uom'];
            
            this['quantity'] = data['quantity'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

