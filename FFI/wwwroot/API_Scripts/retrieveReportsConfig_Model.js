var responseDataFormat = "JSON";

function retrieveReportsConfigRequest(data)
{
    /**
     * @member {retrieveReportsConfigRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveReportsConfigRequestcontext(data['context']);
    }
}

function retrieveReportsConfigRequestcontext(data)
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
     * @member {retrieveReportsConfigRequestHeader} Header
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
            this['Header'] = new retrieveReportsConfigRequestHeader(data['Header']);
    }
}

function retrieveReportsConfigRequestHeader(data)
{
    /**
     * @member {Int32} report_rowid
     */
    this['report_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('report_rowid'))
            this['report_rowid'] = data['report_rowid'];
        
    }
}

function retrieveReportsConfigResponse(data, format)
{
    /**
     * @member {retrieveReportsConfigResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveReportsConfigResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveReportsConfigResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveReportsConfigResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveReportsConfigResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveReportsConfigResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveReportsConfigResponseApplicationException(data)
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

function retrieveReportsConfigResponsecontext(data)
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
     * @member {retrieveReportsConfigResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveReportsConfigResponseParam_detail} Param_detail
     */
    this['Param_detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveReportsConfigResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Param_detail = [];
            for(Param_detailchildi = 0; Param_detailchildi < data.getElementsByTagName("Param_detail").length; Param_detailchildi++)
            {
                Param_detail.push(new retrieveReportsConfigResponseParam_detail(data.getElementsByTagName("Param_detail")[Param_detailchildi]));
            }
            if(data.getElementsByTagName("Param_detail").length > 0)
                this['Param_detail'] = Param_detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveReportsConfigResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Param_detail') && data['Param_detail'] != null)
            {
                Param_detail = [];
                for(Param_detailindex = 0; Param_detailindex < data['Param_detail'].length; Param_detailindex++)
                {
                    Param_detail.push(new retrieveReportsConfigResponseParam_detail(data['Param_detail'][Param_detailindex]));
                }
                this['Param_detail'] = Param_detail;
            }
        }
    }
}

function retrieveReportsConfigResponseHeader(data)
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
     * @member {String} report_type_desc
     */
    this['report_type_desc'] = null;
    
    /**
     * @member {String} report_source
     */
    this['report_source'] = null;
    
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
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['report_rowid'] = parseInt(data.getElementsByTagName("report_rowid")[0].lastChild.nodeValue);
            
            this['module_code'] = (data.getElementsByTagName("module_code")[0].lastChild != null) ? data.getElementsByTagName("module_code")[0].lastChild.nodeValue : "";
            
            this['report_code'] = (data.getElementsByTagName("report_code")[0].lastChild != null) ? data.getElementsByTagName("report_code")[0].lastChild.nodeValue : "";
            
            this['report_name'] = (data.getElementsByTagName("report_name")[0].lastChild != null) ? data.getElementsByTagName("report_name")[0].lastChild.nodeValue : "";
            
            this['report_type'] = (data.getElementsByTagName("report_type")[0].lastChild != null) ? data.getElementsByTagName("report_type")[0].lastChild.nodeValue : "";
            
            this['report_type_desc'] = (data.getElementsByTagName("report_type_desc")[0].lastChild != null) ? data.getElementsByTagName("report_type_desc")[0].lastChild.nodeValue : "";
            
            this['report_source'] = (data.getElementsByTagName("report_source")[0].lastChild != null) ? data.getElementsByTagName("report_source")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['report_rowid'] = data['report_rowid'];
            
            this['module_code'] = data['module_code'];
            
            this['report_code'] = data['report_code'];
            
            this['report_name'] = data['report_name'];
            
            this['report_type'] = data['report_type'];
            
            this['report_type_desc'] = data['report_type_desc'];
            
            this['report_source'] = data['report_source'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveReportsConfigResponseParam_detail(data)
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
     * @member {String} param_type_desc
     */
    this['param_type_desc'] = null;
    
    /**
     * @member {String} param_value
     */
    this['param_value'] = null;
    
    /**
     * @member {String} param_value_desc
     */
    this['param_value_desc'] = null;
    
    /**
     * @member {String} mandatory_flag
     */
    this['mandatory_flag'] = null;
    
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
            this['reportparam_rowid'] = parseInt(data.getElementsByTagName("reportparam_rowid")[0].lastChild.nodeValue);
            
            this['param_slno'] = parseInt(data.getElementsByTagName("param_slno")[0].lastChild.nodeValue);
            
            this['param_name'] = (data.getElementsByTagName("param_name")[0].lastChild != null) ? data.getElementsByTagName("param_name")[0].lastChild.nodeValue : "";
            
            this['param_desc'] = (data.getElementsByTagName("param_desc")[0].lastChild != null) ? data.getElementsByTagName("param_desc")[0].lastChild.nodeValue : "";
            
            this['param_type'] = (data.getElementsByTagName("param_type")[0].lastChild != null) ? data.getElementsByTagName("param_type")[0].lastChild.nodeValue : "";
            
            this['param_type_desc'] = (data.getElementsByTagName("param_type_desc")[0].lastChild != null) ? data.getElementsByTagName("param_type_desc")[0].lastChild.nodeValue : "";
            
            this['param_value'] = (data.getElementsByTagName("param_value")[0].lastChild != null) ? data.getElementsByTagName("param_value")[0].lastChild.nodeValue : "";
            
            this['param_value_desc'] = (data.getElementsByTagName("param_value_desc")[0].lastChild != null) ? data.getElementsByTagName("param_value_desc")[0].lastChild.nodeValue : "";
            
            this['mandatory_flag'] = (data.getElementsByTagName("mandatory_flag")[0].lastChild != null) ? data.getElementsByTagName("mandatory_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['reportparam_rowid'] = data['reportparam_rowid'];
            
            this['param_slno'] = data['param_slno'];
            
            this['param_name'] = data['param_name'];
            
            this['param_desc'] = data['param_desc'];
            
            this['param_type'] = data['param_type'];
            
            this['param_type_desc'] = data['param_type_desc'];
            
            this['param_value'] = data['param_value'];
            
            this['param_value_desc'] = data['param_value_desc'];
            
            this['mandatory_flag'] = data['mandatory_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

