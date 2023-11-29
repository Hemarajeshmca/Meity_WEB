var responseDataFormat = "JSON";

function retrieveReportsConfigListRequest(data)
{
    /**
     * @member {retrieveReportsConfigListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveReportsConfigListRequestcontext(data['context']);
    }
}

function retrieveReportsConfigListRequestcontext(data)
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
     * @member {retrieveReportsConfigListRequestFilter} Filter
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
            this['Filter'] = new retrieveReportsConfigListRequestFilter(data['Filter']);
    }
}

function retrieveReportsConfigListRequestFilter(data)
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
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrieveReportsConfigListResponse(data, format)
{
    /**
     * @member {retrieveReportsConfigListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveReportsConfigListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveReportsConfigListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveReportsConfigListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveReportsConfigListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveReportsConfigListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveReportsConfigListResponseApplicationException(data)
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

function retrieveReportsConfigListResponsecontext(data)
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
     * @member {retrieveReportsConfigListResponseList} List
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
                List.push(new retrieveReportsConfigListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveReportsConfigListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveReportsConfigListResponseList(data)
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
     * @member {String} module_name
     */
    this['module_name'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['report_rowid'] = parseInt(data.getElementsByTagName("report_rowid")[0].lastChild.nodeValue);
            
            this['module_code'] = (data.getElementsByTagName("module_code")[0].lastChild != null) ? data.getElementsByTagName("module_code")[0].lastChild.nodeValue : "";
            
            this['module_name'] = (data.getElementsByTagName("module_name")[0].lastChild != null) ? data.getElementsByTagName("module_name")[0].lastChild.nodeValue : "";
            
            this['report_code'] = (data.getElementsByTagName("report_code")[0].lastChild != null) ? data.getElementsByTagName("report_code")[0].lastChild.nodeValue : "";
            
            this['report_name'] = (data.getElementsByTagName("report_name")[0].lastChild != null) ? data.getElementsByTagName("report_name")[0].lastChild.nodeValue : "";
            
            this['report_type'] = (data.getElementsByTagName("report_type")[0].lastChild != null) ? data.getElementsByTagName("report_type")[0].lastChild.nodeValue : "";
            
            this['report_type_desc'] = (data.getElementsByTagName("report_type_desc")[0].lastChild != null) ? data.getElementsByTagName("report_type_desc")[0].lastChild.nodeValue : "";
            
            this['report_source'] = (data.getElementsByTagName("report_source")[0].lastChild != null) ? data.getElementsByTagName("report_source")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['report_rowid'] = data['report_rowid'];
            
            this['module_code'] = data['module_code'];
            
            this['module_name'] = data['module_name'];
            
            this['report_code'] = data['report_code'];
            
            this['report_name'] = data['report_name'];
            
            this['report_type'] = data['report_type'];
            
            this['report_type_desc'] = data['report_type_desc'];
            
            this['report_source'] = data['report_source'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

