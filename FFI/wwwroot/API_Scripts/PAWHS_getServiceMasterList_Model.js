var responseDataFormat = "JSON";

function PAWHS_getServiceMasterListRequest(data)
{
    /**
     * @member {PAWHS_getServiceMasterListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getServiceMasterListRequestcontext(data['context']);
    }
}

function PAWHS_getServiceMasterListRequestcontext(data)
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
     * @member {PAWHS_getServiceMasterListRequestFilter} Filter
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
            this['Filter'] = new PAWHS_getServiceMasterListRequestFilter(data['Filter']);
    }
}

function PAWHS_getServiceMasterListRequestFilter(data)
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

function PAWHS_getServiceMasterListResponse(data, format)
{
    /**
     * @member {PAWHS_getServiceMasterListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getServiceMasterListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getServiceMasterListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getServiceMasterListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getServiceMasterListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getServiceMasterListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getServiceMasterListResponseApplicationException(data)
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

function PAWHS_getServiceMasterListResponsecontext(data)
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
     * @member {PAWHS_getServiceMasterListResponseList} List
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
                List.push(new PAWHS_getServiceMasterListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new PAWHS_getServiceMasterListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getServiceMasterListResponseList(data)
{
    /**
     * @member {Int32} service_rowid
     */
    this['service_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} service_code
     */
    this['service_code'] = null;
    
    /**
     * @member {String} service_name
     */
    this['service_name'] = null;
    
    /**
     * @member {String} service_ll_name
     */
    this['service_ll_name'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
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
            this['service_rowid'] = data.getElementsByTagName("service_rowid")[0].lastChild.nodeValue;
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['service_code'] = (data.getElementsByTagName("service_code")[0].lastChild != null) ? data.getElementsByTagName("service_code")[0].lastChild.nodeValue : "";
            
            this['service_name'] = (data.getElementsByTagName("service_name")[0].lastChild != null) ? data.getElementsByTagName("service_name")[0].lastChild.nodeValue : "";
            
            this['service_ll_name'] = (data.getElementsByTagName("service_ll_name")[0].lastChild != null) ? data.getElementsByTagName("service_ll_name")[0].lastChild.nodeValue : "";
            
            this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_description'] = (data.getElementsByTagName("hsn_description")[0].lastChild != null) ? data.getElementsByTagName("hsn_description")[0].lastChild.nodeValue : "";
            
            this['rate'] = data.getElementsByTagName("rate")[0].lastChild.nodeValue;
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['service_rowid'] = data['service_rowid'];
            
            this['agg_code'] = data['agg_code'];
            
            this['service_code'] = data['service_code'];
            
            this['service_name'] = data['service_name'];
            
            this['service_ll_name'] = data['service_ll_name'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['rate'] = data['rate'].toFixed(4);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

