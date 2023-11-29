var responseDataFormat = "JSON";

function retrievemilkreceiptRequest(data)
{
    /**
     * @member {retrievemilkreceiptRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievemilkreceiptRequestcontext(data['context']);
    }
}

function retrievemilkreceiptRequestcontext(data)
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
     * @member {retrievemilkreceiptRequestHeader} Header
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
            this['Header'] = new retrievemilkreceiptRequestHeader(data['Header']);
    }
}

function retrievemilkreceiptRequestHeader(data)
{
    /**
     * @member {Int32} cpsession_rowid
     */
    this['cpsession_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('cpsession_rowid'))
            this['cpsession_rowid'] = data['cpsession_rowid'];
        
    }
}

function retrievemilkreceiptResponse(data, format)
{
    /**
     * @member {retrievemilkreceiptResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievemilkreceiptResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievemilkreceiptResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievemilkreceiptResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievemilkreceiptResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievemilkreceiptResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievemilkreceiptResponseApplicationException(data)
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

function retrievemilkreceiptResponsecontext(data)
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
     * @member {retrievemilkreceiptResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrievemilkreceiptResponseDetail} Detail
     */
    this['Detail'] = null;
    
    /**
     * @member {retrievemilkreceiptResponsesummary} summary
     */
    this['summary'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrievemilkreceiptResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrievemilkreceiptResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
            
            summary = [];
            for(summarychildi = 0; summarychildi < data.getElementsByTagName("summary").length; summarychildi++)
            {
                summary.push(new retrievemilkreceiptResponsesummary(data.getElementsByTagName("summary")[summarychildi]));
            }
            if(data.getElementsByTagName("summary").length > 0)
                this['summary'] = summary;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrievemilkreceiptResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrievemilkreceiptResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
            
            
            if(data.hasOwnProperty('summary') && data['summary'] != null)
            {
                summary = [];
                for(summaryindex = 0; summaryindex < data['summary'].length; summaryindex++)
                {
                    summary.push(new retrievemilkreceiptResponsesummary(data['summary'][summaryindex]));
                }
                this['summary'] = summary;
            }
        }
    }
}

function retrievemilkreceiptResponseHeader(data)
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
            this['cpsession_rowid'] = parseInt(data.getElementsByTagName("cpsession_rowid")[0].lastChild.nodeValue);
            
            this['cpsession_code'] = (data.getElementsByTagName("cpsession_code")[0].lastChild != null) ? data.getElementsByTagName("cpsession_code")[0].lastChild.nodeValue : "";
            
            this['session_date'] = (data.getElementsByTagName("session_date")[0].lastChild != null) ? data.getElementsByTagName("session_date")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['received_all_cc'] = (data.getElementsByTagName("received_all_cc")[0].lastChild != null) ? data.getElementsByTagName("received_all_cc")[0].lastChild.nodeValue : "";
            
            this['received_qty'] = parseFloat(data.getElementsByTagName("received_qty")[0].lastChild.nodeValue);
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['rejected_qty'] = parseFloat(data.getElementsByTagName("rejected_qty")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['cpsession_rowid'] = data['cpsession_rowid'];
            
            this['cpsession_code'] = data['cpsession_code'];
            
            this['session_date'] = data['session_date'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['received_all_cc'] = data['received_all_cc'];
            
            this['received_qty'] = data['received_qty'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['rejected_qty'] = data['rejected_qty'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrievemilkreceiptResponseDetail(data)
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
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {Int16} milksessiondtl_rowid
     */
    this['milksessiondtl_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cpsessiondtl_rowid'] = parseInt(data.getElementsByTagName("cpsessiondtl_rowid")[0].lastChild.nodeValue);
            
            this['cpsession_code'] = (data.getElementsByTagName("cpsession_code")[0].lastChild != null) ? data.getElementsByTagName("cpsession_code")[0].lastChild.nodeValue : "";
            
            this['session_date'] = (data.getElementsByTagName("session_date")[0].lastChild != null) ? data.getElementsByTagName("session_date")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['fat_percent'] = parseFloat(data.getElementsByTagName("fat_percent")[0].lastChild.nodeValue);
            
            this['snf_percent'] = parseFloat(data.getElementsByTagName("snf_percent")[0].lastChild.nodeValue);
            
            this['awm_percent'] = parseFloat(data.getElementsByTagName("awm_percent")[0].lastChild.nodeValue);
            
            this['cpdespatch_no'] = (data.getElementsByTagName("cpdespatch_no")[0].lastChild != null) ? data.getElementsByTagName("cpdespatch_no")[0].lastChild.nodeValue : "";
            
            this['received_qty'] = parseFloat(data.getElementsByTagName("received_qty")[0].lastChild.nodeValue);
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['rejected_qty'] = parseFloat(data.getElementsByTagName("rejected_qty")[0].lastChild.nodeValue);
            
            this['rejected_reason'] = (data.getElementsByTagName("rejected_reason")[0].lastChild != null) ? data.getElementsByTagName("rejected_reason")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['milksessiondtl_rowid'] = parseInt(data.getElementsByTagName("milksessiondtl_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['cpsessiondtl_rowid'] = data['cpsessiondtl_rowid'];
            
            this['cpsession_code'] = data['cpsession_code'];
            
            this['session_date'] = data['session_date'];
            
            this['milk_from'] = data['milk_from'];
            
            this['fat_percent'] = data['fat_percent'];
            
            this['snf_percent'] = data['snf_percent'];
            
            this['awm_percent'] = data['awm_percent'];
            
            this['cpdespatch_no'] = data['cpdespatch_no'];
            
            this['received_qty'] = data['received_qty'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['rejected_qty'] = data['rejected_qty'];
            
            this['rejected_reason'] = data['rejected_reason'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['milksessiondtl_rowid'] = data['milksessiondtl_rowid'];
        }
    }
}

function retrievemilkreceiptResponsesummary(data)
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
     * @member {Decimal} milk_despatched_qty
     */
    this['milk_despatched_qty'] = null;
    
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
            this['received_cc'] = (data.getElementsByTagName("received_cc")[0].lastChild != null) ? data.getElementsByTagName("received_cc")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['milk_despatched_qty'] = parseFloat(data.getElementsByTagName("milk_despatched_qty")[0].lastChild.nodeValue);
            
            this['received_qty'] = parseFloat(data.getElementsByTagName("received_qty")[0].lastChild.nodeValue);
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['rejected_qty'] = parseFloat(data.getElementsByTagName("rejected_qty")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['received_cc'] = data['received_cc'];
            
            this['milk_from'] = data['milk_from'];
            
            this['milk_despatched_qty'] = data['milk_despatched_qty'];
            
            this['received_qty'] = data['received_qty'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['rejected_qty'] = data['rejected_qty'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

