var responseDataFormat = "JSON";

function retrievedispatchRequest(data)
{
    /**
     * @member {retrievedispatchRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievedispatchRequestcontext(data['context']);
    }
}

function retrievedispatchRequestcontext(data)
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
     * @member {retrievedispatchRequestHeader} Header
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
            this['Header'] = new retrievedispatchRequestHeader(data['Header']);
    }
}

function retrievedispatchRequestHeader(data)
{
    /**
     * @member {Int32} cpdespatch_rowid
     */
    this['cpdespatch_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('cpdespatch_rowid'))
            this['cpdespatch_rowid'] = data['cpdespatch_rowid'];
        
    }
}

function retrievedispatchResponse(data, format)
{
    /**
     * @member {retrievedispatchResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievedispatchResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievedispatchResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievedispatchResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievedispatchResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievedispatchResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievedispatchResponseApplicationException(data)
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

function retrievedispatchResponsecontext(data)
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
     * @member {retrievedispatchResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrievedispatchResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrievedispatchResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrievedispatchResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrievedispatchResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrievedispatchResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrievedispatchResponseHeader(data)
{
    /**
     * @member {Int32} cpdespatch_rowid
     */
    this['cpdespatch_rowid'] = null;
    
    /**
     * @member {String} cpsession_code
     */
    this['cpsession_code'] = null;
    
    /**
     * @member {String} cpdespatch_no
     */
    this['cpdespatch_no'] = null;
    
    /**
     * @member {String} session_date
     */
    this['session_date'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} cp_aggrloc_desc
     */
    this['cp_aggrloc_desc'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {Decimal} rejected_qty
     */
    this['rejected_qty'] = null;
    
    /**
     * @member {String} despatch_date
     */
    this['despatch_date'] = null;
    
    /**
     * @member {String} despatch_vechicle
     */
    this['despatch_vechicle'] = null;
    
    /**
     * @member {String} despatch_remark
     */
    this['despatch_remark'] = null;
    
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
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cpdespatch_rowid'] = parseInt(data.getElementsByTagName("cpdespatch_rowid")[0].lastChild.nodeValue);
            
            this['cpsession_code'] = (data.getElementsByTagName("cpsession_code")[0].lastChild != null) ? data.getElementsByTagName("cpsession_code")[0].lastChild.nodeValue : "";
            
            this['cpdespatch_no'] = (data.getElementsByTagName("cpdespatch_no")[0].lastChild != null) ? data.getElementsByTagName("cpdespatch_no")[0].lastChild.nodeValue : "";
            
            this['session_date'] = (data.getElementsByTagName("session_date")[0].lastChild != null) ? data.getElementsByTagName("session_date")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['rejected_qty'] = parseFloat(data.getElementsByTagName("rejected_qty")[0].lastChild.nodeValue);
            
            this['despatch_date'] = (data.getElementsByTagName("despatch_date")[0].lastChild != null) ? data.getElementsByTagName("despatch_date")[0].lastChild.nodeValue : "";
            
            this['despatch_vechicle'] = (data.getElementsByTagName("despatch_vechicle")[0].lastChild != null) ? data.getElementsByTagName("despatch_vechicle")[0].lastChild.nodeValue : "";
            
            this['despatch_remark'] = (data.getElementsByTagName("despatch_remark")[0].lastChild != null) ? data.getElementsByTagName("despatch_remark")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
        }
        else {
            this['cpdespatch_rowid'] = data['cpdespatch_rowid'];
            
            this['cpsession_code'] = data['cpsession_code'];
            
            this['cpdespatch_no'] = data['cpdespatch_no'];
            
            this['session_date'] = data['session_date'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['rejected_qty'] = data['rejected_qty'];
            
            this['despatch_date'] = data['despatch_date'];
            
            this['despatch_vechicle'] = data['despatch_vechicle'];
            
            this['despatch_remark'] = data['despatch_remark'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['process_status'] = data['process_status'];
        }
    }
}

function retrievedispatchResponseDetail(data)
{
    /**
     * @member {Int32} cpsessiondtl_rowid
     */
    this['cpsessiondtl_rowid'] = null;
    
    /**
     * @member {String} cpsession_code
     */
    this['cpsession_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {Decimal} rejected_qty
     */
    this['rejected_qty'] = null;
    
    /**
     * @member {String} rejected_reason
     */
    this['rejected_reason'] = null;
    
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
            this['cpsessiondtl_rowid'] = parseInt(data.getElementsByTagName("cpsessiondtl_rowid")[0].lastChild.nodeValue);
            
            this['cpsession_code'] = (data.getElementsByTagName("cpsession_code")[0].lastChild != null) ? data.getElementsByTagName("cpsession_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['rejected_qty'] = parseFloat(data.getElementsByTagName("rejected_qty")[0].lastChild.nodeValue);
            
            this['rejected_reason'] = (data.getElementsByTagName("rejected_reason")[0].lastChild != null) ? data.getElementsByTagName("rejected_reason")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['cpsessiondtl_rowid'] = data['cpsessiondtl_rowid'];
            
            this['cpsession_code'] = data['cpsession_code'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['rejected_qty'] = data['rejected_qty'];
            
            this['rejected_reason'] = data['rejected_reason'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

