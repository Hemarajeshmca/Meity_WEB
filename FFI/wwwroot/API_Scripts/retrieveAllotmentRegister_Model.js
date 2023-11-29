var responseDataFormat = "JSON";

function retrieveAllotmentRegisterRequest(data)
{
    /**
     * @member {retrieveAllotmentRegisterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveAllotmentRegisterRequestcontext(data['context']);
    }
}

function retrieveAllotmentRegisterRequestcontext(data)
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
     * @member {retrieveAllotmentRegisterRequestHeader} Header
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
            this['Header'] = new retrieveAllotmentRegisterRequestHeader(data['Header']);
    }
}

function retrieveAllotmentRegisterRequestHeader(data)
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

function retrieveAllotmentRegisterResponse(data, format)
{
    /**
     * @member {retrieveAllotmentRegisterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveAllotmentRegisterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveAllotmentRegisterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveAllotmentRegisterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveAllotmentRegisterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveAllotmentRegisterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveAllotmentRegisterResponseApplicationException(data)
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

function retrieveAllotmentRegisterResponsecontext(data)
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
     * @member {retrieveAllotmentRegisterResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveAllotmentRegisterResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveAllotmentRegisterResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveAllotmentRegisterResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveAllotmentRegisterResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveAllotmentRegisterResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveAllotmentRegisterResponseHeader(data)
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

function retrieveAllotmentRegisterResponseDetail(data)
{
    /**
     * @member {Int16} shareapp_rowid
     */
    this['shareapp_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} shareapp_no
     */
    this['shareapp_no'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} member_sur_name
     */
    this['member_sur_name'] = null;
    
    /**
     * @member {Int16} applied_shares
     */
    this['applied_shares'] = null;
    
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
     * @member {String} shareapp_remark
     */
    this['shareapp_remark'] = null;
    
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
            this['shareapp_rowid'] = parseInt(data.getElementsByTagName("shareapp_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['shareapp_no'] = (data.getElementsByTagName("shareapp_no")[0].lastChild != null) ? data.getElementsByTagName("shareapp_no")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['member_sur_name'] = (data.getElementsByTagName("member_sur_name")[0].lastChild != null) ? data.getElementsByTagName("member_sur_name")[0].lastChild.nodeValue : "";
            
            this['applied_shares'] = parseInt(data.getElementsByTagName("applied_shares")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['chklist_status_flag'] = (data.getElementsByTagName("chklist_status_flag")[0].lastChild != null) ? data.getElementsByTagName("chklist_status_flag")[0].lastChild.nodeValue : "";
            
            this['shareapp_remark'] = (data.getElementsByTagName("shareapp_remark")[0].lastChild != null) ? data.getElementsByTagName("shareapp_remark")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['shareapp_rowid'] = data['shareapp_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['shareapp_no'] = data['shareapp_no'];
            
            this['member_name'] = data['member_name'];
            
            this['member_sur_name'] = data['member_sur_name'];
            
            this['applied_shares'] = data['applied_shares'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
            
            this['shareapp_remark'] = data['shareapp_remark'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

