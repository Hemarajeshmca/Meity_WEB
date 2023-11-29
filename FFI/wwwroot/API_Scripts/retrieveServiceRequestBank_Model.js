var responseDataFormat = "JSON";

function retrieveServiceRequestBankRequest(data)
{
    /**
     * @member {retrieveServiceRequestBankRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveServiceRequestBankRequestcontext(data['context']);
    }
}

function retrieveServiceRequestBankRequestcontext(data)
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
     * @member {retrieveServiceRequestBankRequestHeader} Header
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
            this['Header'] = new retrieveServiceRequestBankRequestHeader(data['Header']);
    }
}

function retrieveServiceRequestBankRequestHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('servicereq_rowid'))
            this['servicereq_rowid'] = data['servicereq_rowid'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('servicereq_no'))
            this['servicereq_no'] = data['servicereq_no'];
        
    }
}

function retrieveServiceRequestBankResponse(data, format)
{
    /**
     * @member {retrieveServiceRequestBankResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveServiceRequestBankResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveServiceRequestBankResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveServiceRequestBankResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveServiceRequestBankResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveServiceRequestBankResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveServiceRequestBankResponseApplicationException(data)
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

function retrieveServiceRequestBankResponsecontext(data)
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
     * @member {retrieveServiceRequestBankResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveServiceRequestBankResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveServiceRequestBankResponseHeader(data['Header']);
        }
    }
}

function retrieveServiceRequestBankResponseHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} current_bank_acc_no
     */
    this['current_bank_acc_no'] = null;
    
    /**
     * @member {String} current_bank_acc_type
     */
    this['current_bank_acc_type'] = null;
    
    /**
     * @member {String} current_bank_acc_type_desc
     */
    this['current_bank_acc_type_desc'] = null;
    
    /**
     * @member {String} current_bank_code
     */
    this['current_bank_code'] = null;
    
    /**
     * @member {String} current_bank_desc
     */
    this['current_bank_desc'] = null;
    
    /**
     * @member {String} current_branch_name
     */
    this['current_branch_name'] = null;
    
    /**
     * @member {String} current_ifsc_code
     */
    this['current_ifsc_code'] = null;
    
    /**
     * @member {String} change_bank_acc_no
     */
    this['change_bank_acc_no'] = null;
    
    /**
     * @member {String} change_bank_acc_type
     */
    this['change_bank_acc_type'] = null;
    
    /**
     * @member {String} change_bank_acc_type_desc
     */
    this['change_bank_acc_type_desc'] = null;
    
    /**
     * @member {String} change_bank_code
     */
    this['change_bank_code'] = null;
    
    /**
     * @member {String} change_bank_desc
     */
    this['change_bank_desc'] = null;
    
    /**
     * @member {String} change_branch_name
     */
    this['change_branch_name'] = null;
    
    /**
     * @member {String} change_ifsc_code
     */
    this['change_ifsc_code'] = null;
    
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
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['current_bank_acc_no'] = (data.getElementsByTagName("current_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("current_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['current_bank_acc_type'] = (data.getElementsByTagName("current_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("current_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['current_bank_acc_type_desc'] = (data.getElementsByTagName("current_bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("current_bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['current_bank_code'] = (data.getElementsByTagName("current_bank_code")[0].lastChild != null) ? data.getElementsByTagName("current_bank_code")[0].lastChild.nodeValue : "";
            
            this['current_bank_desc'] = (data.getElementsByTagName("current_bank_desc")[0].lastChild != null) ? data.getElementsByTagName("current_bank_desc")[0].lastChild.nodeValue : "";
            
            this['current_branch_name'] = (data.getElementsByTagName("current_branch_name")[0].lastChild != null) ? data.getElementsByTagName("current_branch_name")[0].lastChild.nodeValue : "";
            
            this['current_ifsc_code'] = (data.getElementsByTagName("current_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("current_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['change_bank_acc_no'] = (data.getElementsByTagName("change_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("change_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['change_bank_acc_type'] = (data.getElementsByTagName("change_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("change_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['change_bank_acc_type_desc'] = (data.getElementsByTagName("change_bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("change_bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['change_bank_code'] = (data.getElementsByTagName("change_bank_code")[0].lastChild != null) ? data.getElementsByTagName("change_bank_code")[0].lastChild.nodeValue : "";
            
            this['change_bank_desc'] = (data.getElementsByTagName("change_bank_desc")[0].lastChild != null) ? data.getElementsByTagName("change_bank_desc")[0].lastChild.nodeValue : "";
            
            this['change_branch_name'] = (data.getElementsByTagName("change_branch_name")[0].lastChild != null) ? data.getElementsByTagName("change_branch_name")[0].lastChild.nodeValue : "";
            
            this['change_ifsc_code'] = (data.getElementsByTagName("change_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("change_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['chklist_status_flag'] = (data.getElementsByTagName("chklist_status_flag")[0].lastChild != null) ? data.getElementsByTagName("chklist_status_flag")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("sr_comments")[0].attributes.length == 0) //Check NULL value
                this['sr_comments'] = (data.getElementsByTagName("sr_comments")[0].lastChild != null) ? data.getElementsByTagName("sr_comments")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['servicereq_no'] = data['servicereq_no'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['current_bank_acc_no'] = data['current_bank_acc_no'];
            
            this['current_bank_acc_type'] = data['current_bank_acc_type'];
            
            this['current_bank_acc_type_desc'] = data['current_bank_acc_type_desc'];
            
            this['current_bank_code'] = data['current_bank_code'];
            
            this['current_bank_desc'] = data['current_bank_desc'];
            
            this['current_branch_name'] = data['current_branch_name'];
            
            this['current_ifsc_code'] = data['current_ifsc_code'];
            
            this['change_bank_acc_no'] = data['change_bank_acc_no'];
            
            this['change_bank_acc_type'] = data['change_bank_acc_type'];
            
            this['change_bank_acc_type_desc'] = data['change_bank_acc_type_desc'];
            
            this['change_bank_code'] = data['change_bank_code'];
            
            this['change_bank_desc'] = data['change_bank_desc'];
            
            this['change_branch_name'] = data['change_branch_name'];
            
            this['change_ifsc_code'] = data['change_ifsc_code'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['chklist_status_flag'] = data['chklist_status_flag'];
            
            this['sr_comments'] = data['sr_comments'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

