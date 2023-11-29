var responseDataFormat = "JSON";

function retrieveServiceRequestUpdateRequest(data)
{
    /**
     * @member {retrieveServiceRequestUpdateRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveServiceRequestUpdateRequestcontext(data['context']);
    }
}

function retrieveServiceRequestUpdateRequestcontext(data)
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
     * @member {retrieveServiceRequestUpdateRequestHeader} Header
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
            this['Header'] = new retrieveServiceRequestUpdateRequestHeader(data['Header']);
    }
}

function retrieveServiceRequestUpdateRequestHeader(data)
{
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} Approval_date
     */
    this['Approval_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('Approval_date'))
            this['Approval_date'] = data['Approval_date'];
        
    }
}

function retrieveServiceRequestUpdateResponse(data, format)
{
    /**
     * @member {retrieveServiceRequestUpdateResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveServiceRequestUpdateResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveServiceRequestUpdateResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveServiceRequestUpdateResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveServiceRequestUpdateResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveServiceRequestUpdateResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveServiceRequestUpdateResponseApplicationException(data)
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

function retrieveServiceRequestUpdateResponsecontext(data)
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
     * @member {retrieveServiceRequestUpdateResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveServiceRequestUpdateResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveServiceRequestUpdateResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveServiceRequestUpdateResponseDetail(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
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
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {Int16} certificate_sno
     */
    this['certificate_sno'] = null;
    
    /**
     * @member {String} Approvaldate
     */
    this['Approvaldate'] = null;
    
    /**
     * @member {String} processstatus
     */
    this['processstatus'] = null;
    
    /**
     * @member {String} process_status_desc
     */
    this['process_status_desc'] = null;
    
    /**
     * @member {String} reject_comments
     */
    this['reject_comments'] = null;
    
    /**
     * @member {String} sr_comments
     */
    this['sr_comments'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} certificate_desc
     */
    this['certificate_desc'] = null;
    
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
    
    /**
     * @member {String} chklist_status_flag
     */
    this['chklist_status_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
            
            this['request_type'] = (data.getElementsByTagName("request_type")[0].lastChild != null) ? data.getElementsByTagName("request_type")[0].lastChild.nodeValue : "";
            
            this['request_type_desc'] = (data.getElementsByTagName("request_type_desc")[0].lastChild != null) ? data.getElementsByTagName("request_type_desc")[0].lastChild.nodeValue : "";
            
            this['requestsub_type'] = (data.getElementsByTagName("requestsub_type")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type")[0].lastChild.nodeValue : "";
            
            this['requestsub_type_desc'] = (data.getElementsByTagName("requestsub_type_desc")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['certificate_sno'] = parseInt(data.getElementsByTagName("certificate_sno")[0].lastChild.nodeValue);
            
            this['Approvaldate'] = (data.getElementsByTagName("Approvaldate")[0].lastChild != null) ? data.getElementsByTagName("Approvaldate")[0].lastChild.nodeValue : "";
            
            this['processstatus'] = (data.getElementsByTagName("processstatus")[0].lastChild != null) ? data.getElementsByTagName("processstatus")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['reject_comments'] = (data.getElementsByTagName("reject_comments")[0].lastChild != null) ? data.getElementsByTagName("reject_comments")[0].lastChild.nodeValue : "";
            
            this['sr_comments'] = (data.getElementsByTagName("sr_comments")[0].lastChild != null) ? data.getElementsByTagName("sr_comments")[0].lastChild.nodeValue : "";
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['certificate_desc'] = (data.getElementsByTagName("certificate_desc")[0].lastChild != null) ? data.getElementsByTagName("certificate_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['chklist_status_flag'] = (data.getElementsByTagName("chklist_status_flag")[0].lastChild != null) ? data.getElementsByTagName("chklist_status_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['servicereq_no'] = data['servicereq_no'];
            
            this['request_type'] = data['request_type'];
            
            this['request_type_desc'] = data['request_type_desc'];
            
            this['requestsub_type'] = data['requestsub_type'];
            
            this['requestsub_type_desc'] = data['requestsub_type_desc'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['certificate_sno'] = data['certificate_sno'];
            
            this['Approvaldate'] = data['Approvaldate'];
            
            this['processstatus'] = data['processstatus'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['reject_comments'] = data['reject_comments'];
            
            this['sr_comments'] = data['sr_comments'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['certificate_desc'] = data['certificate_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
        }
    }
}

