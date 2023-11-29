var responseDataFormat = "JSON";

function retrieveDuplicateRegisterRequest(data)
{
    /**
     * @member {retrieveDuplicateRegisterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveDuplicateRegisterRequestcontext(data['context']);
    }
}

function retrieveDuplicateRegisterRequestcontext(data)
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
     * @member {retrieveDuplicateRegisterRequestHeader} Header
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
            this['Header'] = new retrieveDuplicateRegisterRequestHeader(data['Header']);
    }
}

function retrieveDuplicateRegisterRequestHeader(data)
{
    /**
     * @member {Int16} register_rowid
     */
    this['register_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('register_rowid'))
            this['register_rowid'] = data['register_rowid'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveDuplicateRegisterResponse(data, format)
{
    /**
     * @member {retrieveDuplicateRegisterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveDuplicateRegisterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveDuplicateRegisterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveDuplicateRegisterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveDuplicateRegisterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveDuplicateRegisterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveDuplicateRegisterResponseApplicationException(data)
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

function retrieveDuplicateRegisterResponsecontext(data)
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
     * @member {retrieveDuplicateRegisterResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveDuplicateRegisterResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveDuplicateRegisterResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveDuplicateRegisterResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveDuplicateRegisterResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveDuplicateRegisterResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveDuplicateRegisterResponseHeader(data)
{
    /**
     * @member {String} register_type
     */
    this['register_type'] = null;
    
    /**
     * @member {String} register_type_desc
     */
    this['register_type_desc'] = null;
    
    /**
     * @member {String} register_no
     */
    this['register_no'] = null;
    
    /**
     * @member {String} register_date
     */
    this['register_date'] = null;
    
    /**
     * @member {Int16} record_count
     */
    this['record_count'] = null;
    
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
            this['register_type'] = (data.getElementsByTagName("register_type")[0].lastChild != null) ? data.getElementsByTagName("register_type")[0].lastChild.nodeValue : "";
            
            this['register_type_desc'] = (data.getElementsByTagName("register_type_desc")[0].lastChild != null) ? data.getElementsByTagName("register_type_desc")[0].lastChild.nodeValue : "";
            
            this['register_no'] = (data.getElementsByTagName("register_no")[0].lastChild != null) ? data.getElementsByTagName("register_no")[0].lastChild.nodeValue : "";
            
            this['register_date'] = (data.getElementsByTagName("register_date")[0].lastChild != null) ? data.getElementsByTagName("register_date")[0].lastChild.nodeValue : "";
            
            this['record_count'] = parseInt(data.getElementsByTagName("record_count")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['register_type'] = data['register_type'];
            
            this['register_type_desc'] = data['register_type_desc'];
            
            this['register_no'] = data['register_no'];
            
            this['register_date'] = data['register_date'];
            
            this['record_count'] = data['record_count'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveDuplicateRegisterResponseDetail(data)
{
    /**
     * @member {Int16} servicereq_rowid
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
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} member_sur_name
     */
    this['member_sur_name'] = null;
    
    /**
     * @member {String} certificate_sno
     */
    this['certificate_sno'] = null;
    
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
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} chklist_status_flag
     */
    this['chklist_status_flag'] = null;
    
    /**
     * @member {String} sr_comments
     */
    this['sr_comments'] = null;
    
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
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['member_sur_name'] = (data.getElementsByTagName("member_sur_name")[0].lastChild != null) ? data.getElementsByTagName("member_sur_name")[0].lastChild.nodeValue : "";
            
            this['certificate_sno'] = (data.getElementsByTagName("certificate_sno")[0].lastChild != null) ? data.getElementsByTagName("certificate_sno")[0].lastChild.nodeValue : "";
            
            this['issued_date'] = (data.getElementsByTagName("issued_date")[0].lastChild != null) ? data.getElementsByTagName("issued_date")[0].lastChild.nodeValue : "";
            
            this['dist_from'] = (data.getElementsByTagName("dist_from")[0].lastChild != null) ? data.getElementsByTagName("dist_from")[0].lastChild.nodeValue : "";
            
            this['dist_to'] = (data.getElementsByTagName("dist_to")[0].lastChild != null) ? data.getElementsByTagName("dist_to")[0].lastChild.nodeValue : "";
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
            
            this['request_date'] = (data.getElementsByTagName("request_date")[0].lastChild != null) ? data.getElementsByTagName("request_date")[0].lastChild.nodeValue : "";
            
            this['request_type'] = (data.getElementsByTagName("request_type")[0].lastChild != null) ? data.getElementsByTagName("request_type")[0].lastChild.nodeValue : "";
            
            this['request_type_desc'] = (data.getElementsByTagName("request_type_desc")[0].lastChild != null) ? data.getElementsByTagName("request_type_desc")[0].lastChild.nodeValue : "";
            
            this['requestsub_type'] = (data.getElementsByTagName("requestsub_type")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type")[0].lastChild.nodeValue : "";
            
            this['requestsub_type_desc'] = (data.getElementsByTagName("requestsub_type_desc")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['chklist_status_flag'] = (data.getElementsByTagName("chklist_status_flag")[0].lastChild != null) ? data.getElementsByTagName("chklist_status_flag")[0].lastChild.nodeValue : "";
            
            this['sr_comments'] = (data.getElementsByTagName("sr_comments")[0].lastChild != null) ? data.getElementsByTagName("sr_comments")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['member_name'] = data['member_name'];
            
            this['member_sur_name'] = data['member_sur_name'];
            
            this['certificate_sno'] = data['certificate_sno'];
            
            this['issued_date'] = data['issued_date'];
            
            this['dist_from'] = data['dist_from'];
            
            this['dist_to'] = data['dist_to'];
            
            this['servicereq_no'] = data['servicereq_no'];
            
            this['request_date'] = data['request_date'];
            
            this['request_type'] = data['request_type'];
            
            this['request_type_desc'] = data['request_type_desc'];
            
            this['requestsub_type'] = data['requestsub_type'];
            
            this['requestsub_type_desc'] = data['requestsub_type_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
            
            this['sr_comments'] = data['sr_comments'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

