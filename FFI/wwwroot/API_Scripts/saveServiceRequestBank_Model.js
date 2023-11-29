var responseDataFormat = "JSON";

function saveServiceRequestBankRequest(data)
{
    /**
     * @member {saveServiceRequestBankRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveServiceRequestBankRequestcontext(data['context']);
    }
}

function saveServiceRequestBankRequestcontext(data)
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
     * @member {saveServiceRequestBankRequestHeader} Header
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
            this['Header'] = new saveServiceRequestBankRequestHeader(data['Header']);
    }
}

function saveServiceRequestBankRequestHeader(data)
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
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
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
     * @member {String} current_bank_code
     */
    this['current_bank_code'] = null;
    
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
     * @member {String} change_bank_code
     */
    this['change_bank_code'] = null;
    
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
        if(data.hasOwnProperty('servicereq_rowid'))
            this['servicereq_rowid'] = data['servicereq_rowid'];
        
        if(data.hasOwnProperty('servicereq_no'))
            this['servicereq_no'] = data['servicereq_no'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('current_bank_acc_no'))
            this['current_bank_acc_no'] = data['current_bank_acc_no'];
        
        if(data.hasOwnProperty('current_bank_acc_type'))
            this['current_bank_acc_type'] = data['current_bank_acc_type'];
        
        if(data.hasOwnProperty('current_bank_code'))
            this['current_bank_code'] = data['current_bank_code'];
        
        if(data.hasOwnProperty('current_branch_name'))
            this['current_branch_name'] = data['current_branch_name'];
        
        if(data.hasOwnProperty('current_ifsc_code'))
            this['current_ifsc_code'] = data['current_ifsc_code'];
        
        if(data.hasOwnProperty('change_bank_acc_no'))
            this['change_bank_acc_no'] = data['change_bank_acc_no'];
        
        if(data.hasOwnProperty('change_bank_acc_type'))
            this['change_bank_acc_type'] = data['change_bank_acc_type'];
        
        if(data.hasOwnProperty('change_bank_code'))
            this['change_bank_code'] = data['change_bank_code'];
        
        if(data.hasOwnProperty('change_branch_name'))
            this['change_branch_name'] = data['change_branch_name'];
        
        if(data.hasOwnProperty('change_ifsc_code'))
            this['change_ifsc_code'] = data['change_ifsc_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('chklist_status_flag'))
            this['chklist_status_flag'] = data['chklist_status_flag'];
        
        if(data.hasOwnProperty('sr_comments'))
            this['sr_comments'] = data['sr_comments'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveServiceRequestBankResponse(data, format)
{
    /**
     * @member {saveServiceRequestBankResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveServiceRequestBankResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveServiceRequestBankResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveServiceRequestBankResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveServiceRequestBankResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveServiceRequestBankResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveServiceRequestBankResponseApplicationException(data)
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

function saveServiceRequestBankResponsecontext(data)
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
     * @member {saveServiceRequestBankResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveServiceRequestBankResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveServiceRequestBankResponseHeader(data['Header']);
        }
    }
}

function saveServiceRequestBankResponseHeader(data)
{
    /**
     * @member {Int32} servicereq_rowid
     */
    this['servicereq_rowid'] = null;
    
    /**
     * @member {String} servicereq_no
     */
    this['servicereq_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['servicereq_rowid'] = parseInt(data.getElementsByTagName("servicereq_rowid")[0].lastChild.nodeValue);
            
            this['servicereq_no'] = (data.getElementsByTagName("servicereq_no")[0].lastChild != null) ? data.getElementsByTagName("servicereq_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['servicereq_rowid'] = data['servicereq_rowid'];
            
            this['servicereq_no'] = data['servicereq_no'];
        }
    }
}

