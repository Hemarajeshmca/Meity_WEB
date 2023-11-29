var responseDataFormat = "JSON";

function saveReportsConfigRequest(data)
{
    /**
     * @member {saveReportsConfigRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveReportsConfigRequestcontext(data['context']);
    }
}

function saveReportsConfigRequestcontext(data)
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
     * @member {saveReportsConfigRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveReportsConfigRequestParam_detail} Param_detail
     */
    this['Param_detail'] = null;
    
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
            this['Header'] = new saveReportsConfigRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Param_detail') && data['Param_detail'] != null)
        {
            Param_detail = [];
            for(Param_detailindex = 0; Param_detailindex < data['Param_detail'].length; Param_detailindex++)
            {
                Param_detail.push(new saveReportsConfigRequestParam_detail(data['Param_detail'][Param_detailindex]));
            }
            this['Param_detail'] = Param_detail;
        }
    }
}

function saveReportsConfigRequestHeader(data)
{
    /**
     * @member {Int32} report_rowid
     */
    this['report_rowid'] = null;
    
    /**
     * @member {String} module_code
     */
    this['module_code'] = null;
    
    /**
     * @member {String} report_code
     */
    this['report_code'] = null;
    
    /**
     * @member {String} report_name
     */
    this['report_name'] = null;
    
    /**
     * @member {String} report_type
     */
    this['report_type'] = null;
    
    /**
     * @member {String} report_source
     */
    this['report_source'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('report_rowid'))
            this['report_rowid'] = data['report_rowid'];
        
        if(data.hasOwnProperty('module_code'))
            this['module_code'] = data['module_code'];
        
        if(data.hasOwnProperty('report_code'))
            this['report_code'] = data['report_code'];
        
        if(data.hasOwnProperty('report_name'))
            this['report_name'] = data['report_name'];
        
        if(data.hasOwnProperty('report_type'))
            this['report_type'] = data['report_type'];
        
        if(data.hasOwnProperty('report_source'))
            this['report_source'] = data['report_source'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveReportsConfigRequestParam_detail(data)
{
    /**
     * @member {Int32} reportparam_rowid
     */
    this['reportparam_rowid'] = null;
    
    /**
     * @member {Int16} param_slno
     */
    this['param_slno'] = null;
    
    /**
     * @member {String} param_name
     */
    this['param_name'] = null;
    
    /**
     * @member {String} param_desc
     */
    this['param_desc'] = null;
    
    /**
     * @member {String} param_type
     */
    this['param_type'] = null;
    
    /**
     * @member {String} param_value
     */
    this['param_value'] = null;
    
    /**
     * @member {String} mandatory_flag
     */
    this['mandatory_flag'] = null;
    
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
        if(data.hasOwnProperty('reportparam_rowid'))
            this['reportparam_rowid'] = data['reportparam_rowid'];
        
        if(data.hasOwnProperty('param_slno'))
            this['param_slno'] = data['param_slno'];
        
        if(data.hasOwnProperty('param_name'))
            this['param_name'] = data['param_name'];
        
        if(data.hasOwnProperty('param_desc'))
            this['param_desc'] = data['param_desc'];
        
        if(data.hasOwnProperty('param_type'))
            this['param_type'] = data['param_type'];
        
        if(data.hasOwnProperty('param_value'))
            this['param_value'] = data['param_value'];
        
        if(data.hasOwnProperty('mandatory_flag'))
            this['mandatory_flag'] = data['mandatory_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveReportsConfigResponse(data, format)
{
    /**
     * @member {saveReportsConfigResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveReportsConfigResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveReportsConfigResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveReportsConfigResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveReportsConfigResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveReportsConfigResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveReportsConfigResponseApplicationException(data)
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

function saveReportsConfigResponsecontext(data)
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
     * @member {saveReportsConfigResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveReportsConfigResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveReportsConfigResponseHeader(data['Header']);
        }
    }
}

function saveReportsConfigResponseHeader(data)
{
    /**
     * @member {Int32} report_rowid
     */
    this['report_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['report_rowid'] = parseInt(data.getElementsByTagName("report_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['report_rowid'] = data['report_rowid'];
        }
    }
}

