var responseDataFormat = "JSON";

function savemilkreceiptRequest(data)
{
    /**
     * @member {savemilkreceiptRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new savemilkreceiptRequestcontext(data['context']);
    }
}

function savemilkreceiptRequestcontext(data)
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
     * @member {savemilkreceiptRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {savemilkreceiptRequestDetail} Detail
     */
    this['Detail'] = null;
    
    /**
     * @member {savemilkreceiptRequestsummary} summary
     */
    this['summary'] = null;
    
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
            this['Header'] = new savemilkreceiptRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new savemilkreceiptRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
        
        if(data.hasOwnProperty('summary') && data['summary'] != null)
        {
            summary = [];
            for(summaryindex = 0; summaryindex < data['summary'].length; summaryindex++)
            {
                summary.push(new savemilkreceiptRequestsummary(data['summary'][summaryindex]));
            }
            this['summary'] = summary;
        }
    }
}

function savemilkreceiptRequestHeader(data)
{
    /**
     * @member {Int32} cpsession_rowid
     */
    this['cpsession_rowid'] = null;
    
    /**
     * @member {String} cpsession_code
     */
    this['cpsession_code'] = null;
    
    /**
     * @member {String} session_date
     */
    this['session_date'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} received_all_cc
     */
    this['received_all_cc'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {Decimal} rejected_qty
     */
    this['rejected_qty'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('cpsession_rowid'))
            this['cpsession_rowid'] = data['cpsession_rowid'];
        
        if(data.hasOwnProperty('cpsession_code'))
            this['cpsession_code'] = data['cpsession_code'];
        
        if(data.hasOwnProperty('session_date'))
            this['session_date'] = data['session_date'];
        
        if(data.hasOwnProperty('cp_aggrloc_code'))
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
        
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
        if(data.hasOwnProperty('received_all_cc'))
            this['received_all_cc'] = data['received_all_cc'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('accepted_qty'))
            this['accepted_qty'] = data['accepted_qty'];
        
        if(data.hasOwnProperty('rejected_qty'))
            this['rejected_qty'] = data['rejected_qty'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function savemilkreceiptRequestDetail(data)
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
     * @member {String} session_date
     */
    this['session_date'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {Decimal} fat_percent
     */
    this['fat_percent'] = null;
    
    /**
     * @member {Decimal} snf_percent
     */
    this['snf_percent'] = null;
    
    /**
     * @member {Decimal} awm_percent
     */
    this['awm_percent'] = null;
    
    /**
     * @member {String} cpdespatch_no
     */
    this['cpdespatch_no'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {Int16} milksessiondtl_rowid
     */
    this['milksessiondtl_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('cpsessiondtl_rowid'))
            this['cpsessiondtl_rowid'] = data['cpsessiondtl_rowid'];
        
        if(data.hasOwnProperty('cpsession_code'))
            this['cpsession_code'] = data['cpsession_code'];
        
        if(data.hasOwnProperty('session_date'))
            this['session_date'] = data['session_date'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('fat_percent'))
            this['fat_percent'] = data['fat_percent'];
        
        if(data.hasOwnProperty('snf_percent'))
            this['snf_percent'] = data['snf_percent'];
        
        if(data.hasOwnProperty('awm_percent'))
            this['awm_percent'] = data['awm_percent'];
        
        if(data.hasOwnProperty('cpdespatch_no'))
            this['cpdespatch_no'] = data['cpdespatch_no'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('accepted_qty'))
            this['accepted_qty'] = data['accepted_qty'];
        
        if(data.hasOwnProperty('rejected_qty'))
            this['rejected_qty'] = data['rejected_qty'];
        
        if(data.hasOwnProperty('rejected_reason'))
            this['rejected_reason'] = data['rejected_reason'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
        if(data.hasOwnProperty('milksessiondtl_rowid'))
            this['milksessiondtl_rowid'] = data['milksessiondtl_rowid'];
        
    }
}

function savemilkreceiptRequestsummary(data)
{
    /**
     * @member {String} received_cc
     */
    this['received_cc'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {Decimal} milk_depatched_qty
     */
    this['milk_depatched_qty'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {String} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {String} rejected_qty
     */
    this['rejected_qty'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('received_cc'))
            this['received_cc'] = data['received_cc'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('milk_depatched_qty'))
            this['milk_depatched_qty'] = data['milk_depatched_qty'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('accepted_qty'))
            this['accepted_qty'] = data['accepted_qty'];
        
        if(data.hasOwnProperty('rejected_qty'))
            this['rejected_qty'] = data['rejected_qty'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function savemilkreceiptResponse(data, format)
{
    /**
     * @member {savemilkreceiptResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {savemilkreceiptResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new savemilkreceiptResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new savemilkreceiptResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new savemilkreceiptResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new savemilkreceiptResponseApplicationException(data['ApplicationException']);
        }
    }
}

function savemilkreceiptResponseApplicationException(data)
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

function savemilkreceiptResponsecontext(data)
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
     * @member {savemilkreceiptResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new savemilkreceiptResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new savemilkreceiptResponseHeader(data['Header']);
        }
    }
}

function savemilkreceiptResponseHeader(data)
{
    /**
     * @member {Int32} cpsession_rowid
     */
    this['cpsession_rowid'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cpsession_rowid'] = parseInt(data.getElementsByTagName("cpsession_rowid")[0].lastChild.nodeValue);
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['cpsession_rowid'] = data['cpsession_rowid'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        }
    }
}

