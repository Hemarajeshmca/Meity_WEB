var responseDataFormat = "JSON";

function retrieveShareCertificatePrintRequest(data)
{
    /**
     * @member {retrieveShareCertificatePrintRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveShareCertificatePrintRequestcontext(data['context']);
    }
}

function retrieveShareCertificatePrintRequestcontext(data)
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
     * @member {retrieveShareCertificatePrintRequestHeader} Header
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
            this['Header'] = new retrieveShareCertificatePrintRequestHeader(data['Header']);
    }
}

function retrieveShareCertificatePrintRequestHeader(data)
{
    /**
     * @member {String} share_certificate
     */
    this['share_certificate'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('share_certificate'))
            this['share_certificate'] = data['share_certificate'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveShareCertificatePrintResponse(data, format)
{
    /**
     * @member {retrieveShareCertificatePrintResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveShareCertificatePrintResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveShareCertificatePrintResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveShareCertificatePrintResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveShareCertificatePrintResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveShareCertificatePrintResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveShareCertificatePrintResponseApplicationException(data)
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

function retrieveShareCertificatePrintResponsecontext(data)
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
     * @member {retrieveShareCertificatePrintResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveShareCertificatePrintResponseDetail} Detail
     */
    this['Detail'] = null;
    
    /**
     * @member {retrieveShareCertificatePrintResponseRegister_History} Register_History
     */
    this['Register_History'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveShareCertificatePrintResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveShareCertificatePrintResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
            
            Register_History = [];
            for(Register_Historychildi = 0; Register_Historychildi < data.getElementsByTagName("Register_History").length; Register_Historychildi++)
            {
                Register_History.push(new retrieveShareCertificatePrintResponseRegister_History(data.getElementsByTagName("Register_History")[Register_Historychildi]));
            }
            if(data.getElementsByTagName("Register_History").length > 0)
                this['Register_History'] = Register_History;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveShareCertificatePrintResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveShareCertificatePrintResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
            
            
            if(data.hasOwnProperty('Register_History') && data['Register_History'] != null)
            {
                Register_History = [];
                for(Register_Historyindex = 0; Register_Historyindex < data['Register_History'].length; Register_Historyindex++)
                {
                    Register_History.push(new retrieveShareCertificatePrintResponseRegister_History(data['Register_History'][Register_Historyindex]));
                }
                this['Register_History'] = Register_History;
            }
        }
    }
}

function retrieveShareCertificatePrintResponseHeader(data)
{
    /**
     * @member {String} printeddate
     */
    this['printeddate'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['printeddate'] = (data.getElementsByTagName("printeddate")[0].lastChild != null) ? data.getElementsByTagName("printeddate")[0].lastChild.nodeValue : "";
        }
        else {
            this['printeddate'] = data['printeddate'];
        }
    }
}

function retrieveShareCertificatePrintResponseDetail(data)
{
    /**
     * @member {Int16} register_rowid
     */
    this['register_rowid'] = null;
    
    /**
     * @member {String} register_no
     */
    this['register_no'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {Int16} applied_shares
     */
    this['applied_shares'] = null;
    
    /**
     * @member {Int16} approved_shares
     */
    this['approved_shares'] = null;
    
    /**
     * @member {Int16} rejected_shares
     */
    this['rejected_shares'] = null;
    
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
            this['register_rowid'] = parseInt(data.getElementsByTagName("register_rowid")[0].lastChild.nodeValue);
            
            this['register_no'] = (data.getElementsByTagName("register_no")[0].lastChild != null) ? data.getElementsByTagName("register_no")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['applied_shares'] = parseInt(data.getElementsByTagName("applied_shares")[0].lastChild.nodeValue);
            
            this['approved_shares'] = parseInt(data.getElementsByTagName("approved_shares")[0].lastChild.nodeValue);
            
            this['rejected_shares'] = parseInt(data.getElementsByTagName("rejected_shares")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['register_rowid'] = data['register_rowid'];
            
            this['register_no'] = data['register_no'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['member_name'] = data['member_name'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['applied_shares'] = data['applied_shares'];
            
            this['approved_shares'] = data['approved_shares'];
            
            this['rejected_shares'] = data['rejected_shares'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveShareCertificatePrintResponseRegister_History(data)
{
    /**
     * @member {Int16} register_rowid
     */
    this['register_rowid'] = null;
    
    /**
     * @member {String} register_no
     */
    this['register_no'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} printed_date
     */
    this['printed_date'] = null;
    
    /**
     * @member {String} register_date
     */
    this['register_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['register_rowid'] = parseInt(data.getElementsByTagName("register_rowid")[0].lastChild.nodeValue);
            
            this['register_no'] = (data.getElementsByTagName("register_no")[0].lastChild != null) ? data.getElementsByTagName("register_no")[0].lastChild.nodeValue : "";
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['printed_date'] = (data.getElementsByTagName("printed_date")[0].lastChild != null) ? data.getElementsByTagName("printed_date")[0].lastChild.nodeValue : "";
            
            this['register_date'] = (data.getElementsByTagName("register_date")[0].lastChild != null) ? data.getElementsByTagName("register_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['register_rowid'] = data['register_rowid'];
            
            this['register_no'] = data['register_no'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['printed_date'] = data['printed_date'];
            
            this['register_date'] = data['register_date'];
        }
    }
}

