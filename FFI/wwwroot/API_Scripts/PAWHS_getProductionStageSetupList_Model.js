var responseDataFormat = "JSON";

function PAWHS_getProductionStageSetupListRequest(data)
{
    /**
     * @member {PAWHS_getProductionStageSetupListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getProductionStageSetupListRequestcontext(data['context']);
    }
}

function PAWHS_getProductionStageSetupListRequestcontext(data)
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
     * @member {PAWHS_getProductionStageSetupListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new PAWHS_getProductionStageSetupListRequestFilter(data['Filter']);
    }
}

function PAWHS_getProductionStageSetupListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_FromValue
     */
    this['FilterBy_FromValue'] = null;
    
    /**
     * @member {String} FilterBy_ToValue
     */
    this['FilterBy_ToValue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_FromValue'))
            this['FilterBy_FromValue'] = data['FilterBy_FromValue'];
        
        if(data.hasOwnProperty('FilterBy_ToValue'))
            this['FilterBy_ToValue'] = data['FilterBy_ToValue'];
        
    }
}

function PAWHS_getProductionStageSetupListResponse(data, format)
{
    /**
     * @member {PAWHS_getProductionStageSetupListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getProductionStageSetupListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getProductionStageSetupListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getProductionStageSetupListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getProductionStageSetupListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getProductionStageSetupListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getProductionStageSetupListResponseApplicationException(data)
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

function PAWHS_getProductionStageSetupListResponsecontext(data)
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
     * @member {PAWHS_getProductionStageSetupListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new PAWHS_getProductionStageSetupListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new PAWHS_getProductionStageSetupListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getProductionStageSetupListResponseList(data)
{
    /**
     * @member {Int32} production_rowid
     */
    this['production_rowid'] = null;
    
    /**
     * @member {String} aggregator_code
     */
    this['aggregator_code'] = null;
    
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    /**
     * @member {Int16} no_of_stage
     */
    this['no_of_stage'] = null;
    
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
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['production_rowid'] = parseInt(data.getElementsByTagName("production_rowid")[0].lastChild.nodeValue);
            
            this['aggregator_code'] = (data.getElementsByTagName("aggregator_code")[0].lastChild != null) ? data.getElementsByTagName("aggregator_code")[0].lastChild.nodeValue : "";
            
            this['fg_code'] = (data.getElementsByTagName("fg_code")[0].lastChild != null) ? data.getElementsByTagName("fg_code")[0].lastChild.nodeValue : "";
            
            this['no_of_stage'] = parseInt(data.getElementsByTagName("no_of_stage")[0].lastChild.nodeValue);
            
            this['final_output'] = (data.getElementsByTagName("final_output")[0].lastChild != null) ? data.getElementsByTagName("final_output")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['production_rowid'] = data['production_rowid'];
            
            this['aggregator_code'] = data['aggregator_code'];
            
            this['fg_code'] = data['fg_code'];
            
            this['no_of_stage'] = data['no_of_stage'];
            
            this['final_output'] = data['final_output'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

