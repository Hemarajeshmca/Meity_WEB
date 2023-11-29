var responseDataFormat = "JSON";

function retrieveSRMemberDetailRequest(data)
{
    /**
     * @member {retrieveSRMemberDetailRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveSRMemberDetailRequestcontext(data['context']);
    }
}

function retrieveSRMemberDetailRequestcontext(data)
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
     * @member {retrieveSRMemberDetailRequestHeader} Header
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
            this['Header'] = new retrieveSRMemberDetailRequestHeader(data['Header']);
    }
}

function retrieveSRMemberDetailRequestHeader(data)
{
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} request_type
     */
    this['request_type'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('request_type'))
            this['request_type'] = data['request_type'];
        
    }
}

function retrieveSRMemberDetailResponse(data, format)
{
    /**
     * @member {retrieveSRMemberDetailResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveSRMemberDetailResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveSRMemberDetailResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveSRMemberDetailResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveSRMemberDetailResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveSRMemberDetailResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveSRMemberDetailResponseApplicationException(data)
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

function retrieveSRMemberDetailResponsecontext(data)
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
     * @member {retrieveSRMemberDetailResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveSRMemberDetailResponseshare_certificate} share_certificate
     */
    this['share_certificate'] = null;
    
    /**
     * @member {retrieveSRMemberDetailResponserequest_history} request_history
     */
    this['request_history'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveSRMemberDetailResponseHeader(data.getElementsByTagName("Header")[0]);
            
            share_certificate = [];
            for(share_certificatechildi = 0; share_certificatechildi < data.getElementsByTagName("share_certificate").length; share_certificatechildi++)
            {
                share_certificate.push(new retrieveSRMemberDetailResponseshare_certificate(data.getElementsByTagName("share_certificate")[share_certificatechildi]));
            }
            if(data.getElementsByTagName("share_certificate").length > 0)
                this['share_certificate'] = share_certificate;
            
            request_history = [];
            for(request_historychildi = 0; request_historychildi < data.getElementsByTagName("request_history").length; request_historychildi++)
            {
                request_history.push(new retrieveSRMemberDetailResponserequest_history(data.getElementsByTagName("request_history")[request_historychildi]));
            }
            if(data.getElementsByTagName("request_history").length > 0)
                this['request_history'] = request_history;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveSRMemberDetailResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('share_certificate') && data['share_certificate'] != null)
            {
                share_certificate = [];
                for(share_certificateindex = 0; share_certificateindex < data['share_certificate'].length; share_certificateindex++)
                {
                    share_certificate.push(new retrieveSRMemberDetailResponseshare_certificate(data['share_certificate'][share_certificateindex]));
                }
                this['share_certificate'] = share_certificate;
            }
            
            
            if(data.hasOwnProperty('request_history') && data['request_history'] != null)
            {
                request_history = [];
                for(request_historyindex = 0; request_historyindex < data['request_history'].length; request_historyindex++)
                {
                    request_history.push(new retrieveSRMemberDetailResponserequest_history(data['request_history'][request_historyindex]));
                }
                this['request_history'] = request_history;
            }
        }
    }
}

function retrieveSRMemberDetailResponseHeader(data)
{
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
        }
    }
}

function retrieveSRMemberDetailResponseshare_certificate(data)
{
    /**
     * @member {Int32} certificatedist_rowid
     */
    this['certificatedist_rowid'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} dist_from
     */
    this['dist_from'] = null;
    
    /**
     * @member {String} dist_to
     */
    this['dist_to'] = null;
    
    /**
     * @member {String} issued_date
     */
    this['issued_date'] = null;
    
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
            this['certificatedist_rowid'] = parseInt(data.getElementsByTagName("certificatedist_rowid")[0].lastChild.nodeValue);
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['dist_from'] = (data.getElementsByTagName("dist_from")[0].lastChild != null) ? data.getElementsByTagName("dist_from")[0].lastChild.nodeValue : "";
            
            this['dist_to'] = (data.getElementsByTagName("dist_to")[0].lastChild != null) ? data.getElementsByTagName("dist_to")[0].lastChild.nodeValue : "";
            
            this['issued_date'] = (data.getElementsByTagName("issued_date")[0].lastChild != null) ? data.getElementsByTagName("issued_date")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['certificatedist_rowid'] = data['certificatedist_rowid'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['dist_from'] = data['dist_from'];
            
            this['dist_to'] = data['dist_to'];
            
            this['issued_date'] = data['issued_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

function retrieveSRMemberDetailResponserequest_history(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} issued_date
     */
    this['issued_date'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['issued_date'] = (data.getElementsByTagName("issued_date")[0].lastChild != null) ? data.getElementsByTagName("issued_date")[0].lastChild.nodeValue : "";
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
            
            this['request_date'] = (data.getElementsByTagName("request_date")[0].lastChild != null) ? data.getElementsByTagName("request_date")[0].lastChild.nodeValue : "";
            
            this['request_type'] = (data.getElementsByTagName("request_type")[0].lastChild != null) ? data.getElementsByTagName("request_type")[0].lastChild.nodeValue : "";
            
            this['request_type_desc'] = (data.getElementsByTagName("request_type_desc")[0].lastChild != null) ? data.getElementsByTagName("request_type_desc")[0].lastChild.nodeValue : "";
            
            this['requestsub_type'] = (data.getElementsByTagName("requestsub_type")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type")[0].lastChild.nodeValue : "";
            
            this['requestsub_type_desc'] = (data.getElementsByTagName("requestsub_type_desc")[0].lastChild != null) ? data.getElementsByTagName("requestsub_type_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['issued_date'] = data['issued_date'];
            
            this['servicereq_no'] = data['servicereq_no'];
            
            this['request_date'] = data['request_date'];
            
            this['request_type'] = data['request_type'];
            
            this['request_type_desc'] = data['request_type_desc'];
            
            this['requestsub_type'] = data['requestsub_type'];
            
            this['requestsub_type_desc'] = data['requestsub_type_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

