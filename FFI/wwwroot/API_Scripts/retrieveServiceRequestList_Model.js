var responseDataFormat = "JSON";

function retrieveServiceRequestListRequest(data)
{
    /**
     * @member {retrieveServiceRequestListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveServiceRequestListRequestcontext(data['context']);
    }
}

function retrieveServiceRequestListRequestcontext(data)
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
     * @member {retrieveServiceRequestListRequestFilter} Filter
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
            this['Filter'] = new retrieveServiceRequestListRequestFilter(data['Filter']);
    }
}

function retrieveServiceRequestListRequestFilter(data)
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

function retrieveServiceRequestListResponse(data, format)
{
    /**
     * @member {retrieveServiceRequestListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveServiceRequestListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveServiceRequestListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveServiceRequestListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveServiceRequestListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveServiceRequestListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveServiceRequestListResponseApplicationException(data)
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

function retrieveServiceRequestListResponsecontext(data)
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
     * @member {retrieveServiceRequestListResponseList} List
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
                List.push(new retrieveServiceRequestListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveServiceRequestListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveServiceRequestListResponseList(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} issued_date
     */
    this['issued_date'] = null;
    
    /**
     * @member {String} dist_from
     */
    this['dist_from'] = null;
    
    /**
     * @member {String} dist_to
     */
    this['dist_to'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    /**
     * @member {String} request_date
     */
    this['request_date'] = null;
    
    /**
     * @member {String} request_type
     */
    this['request_type'] = null;
    
    /**
     * @member {String} request_type_desc
     */
    this['request_type_desc'] = null;
    
    /**
     * @member {String} requestsub_type
     */
    this['requestsub_type'] = null;
    
    /**
     * @member {String} requestsub_type_desc
     */
    this['requestsub_type_desc'] = null;
    
    /**
     * @member {String} chklist_status_flag
     */
    this['chklist_status_flag'] = null;
    
    /**
     * @member {String} sr_comments
     */
    this['sr_comments'] = null;
    
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
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['issued_date'] = (data.getElementsByTagName("issued_date")[0].lastChild != null) ? data.getElementsByTagName("issued_date")[0].lastChild.nodeValue : "";
            
            this['dist_from'] = (data.getElementsByTagName("dist_from")[0].lastChild != null) ? data.getElementsByTagName("dist_from")[0].lastChild.nodeValue : "";
            
            this['dist_to'] = (data.getElementsByTagName("dist_to")[0].lastChild != null) ? data.getElementsByTagName("dist_to")[0].lastChild.nodeValue : "";
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
            
            this['request_date'] = (data.getElementsByTagName("request_date")[0].lastChild != null) ? data.getElementsByTagName("request_date")[0].lastChild.nodeValue : "";
            
            this['request_type'] = (data.getElementsByTagName("request_type")[0].lastChild != null) ? data.getElementsByTagName("request_type")[0].lastChild.nodeValue : "";
            
            this['request_type_desc'] = (data.getElementsByTagName("request_type_desc")[0].lastChild != null) ? data.getElementsByTagName("request_type_desc")[0].lastChild.nodeValue : "";
            
            this['requestsub_type'] = (data.getElementsByTagName("requestsub_type")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type")[0].lastChild.nodeValue : "";
            
            this['requestsub_type_desc'] = (data.getElementsByTagName("requestsub_type_desc")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type_desc")[0].lastChild.nodeValue : "";
            
            this['chklist_status_flag'] = (data.getElementsByTagName("chklist_status_flag")[0].lastChild != null) ? data.getElementsByTagName("chklist_status_flag")[0].lastChild.nodeValue : "";
            
            this['sr_comments'] = (data.getElementsByTagName("sr_comments")[0].lastChild != null) ? data.getElementsByTagName("sr_comments")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['issued_date'] = data['issued_date'];
            
            this['dist_from'] = data['dist_from'];
            
            this['dist_to'] = data['dist_to'];
            
            this['servicereq_no'] = data['servicereq_no'];
            
            this['request_date'] = data['request_date'];
            
            this['request_type'] = data['request_type'];
            
            this['request_type_desc'] = data['request_type_desc'];
            
            this['requestsub_type'] = data['requestsub_type'];
            
            this['requestsub_type_desc'] = data['requestsub_type_desc'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
            
            this['sr_comments'] = data['sr_comments'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

