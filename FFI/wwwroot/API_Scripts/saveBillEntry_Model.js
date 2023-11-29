var responseDataFormat = "JSON";

function saveBillEntryRequest(data)
{
    /**
     * @member {saveBillEntryRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveBillEntryRequestcontext(data['context']);
    }
}

function saveBillEntryRequestcontext(data)
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
     * @member {saveBillEntryRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveBillEntryRequestBillDtl} BillDtl
     */
    this['BillDtl'] = null;
    
    /**
     * @member {saveBillEntryRequestBillSession} BillSession
     */
    this['BillSession'] = null;
    
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
            this['Header'] = new saveBillEntryRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('BillDtl') && data['BillDtl'] != null)
        {
            BillDtl = [];
            for(BillDtlindex = 0; BillDtlindex < data['BillDtl'].length; BillDtlindex++)
            {
                BillDtl.push(new saveBillEntryRequestBillDtl(data['BillDtl'][BillDtlindex]));
            }
            this['BillDtl'] = BillDtl;
        }
        
        if(data.hasOwnProperty('BillSession') && data['BillSession'] != null)
        {
            BillSession = [];
            for(BillSessionindex = 0; BillSessionindex < data['BillSession'].length; BillSessionindex++)
            {
                BillSession.push(new saveBillEntryRequestBillSession(data['BillSession'][BillSessionindex]));
            }
            this['BillSession'] = BillSession;
        }
    }
}

function saveBillEntryRequestHeader(data)
{
    /**
     * @member {Int32} ccbill_rowid
     */
    this['ccbill_rowid'] = null;
    
    /**
     * @member {String} ccbill_no
     */
    this['ccbill_no'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ccbill_rowid'))
            this['ccbill_rowid'] = data['ccbill_rowid'];
        
        if(data.hasOwnProperty('ccbill_no'))
            this['ccbill_no'] = data['ccbill_no'];
        
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
        if(data.hasOwnProperty('period_from'))
            this['period_from'] = data['period_from'];
        
        if(data.hasOwnProperty('period_to'))
            this['period_to'] = data['period_to'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveBillEntryRequestBillDtl(data)
{
    /**
     * @member {Int32} ccbilldtl_rowid
     */
    this['ccbilldtl_rowid'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} route_code
     */
    this['route_code'] = null;
    
    /**
     * @member {String} route_desc
     */
    this['route_desc'] = null;
    
    /**
     * @member {String} cpbill_no
     */
    this['cpbill_no'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ccbilldtl_rowid'))
            this['ccbilldtl_rowid'] = data['ccbilldtl_rowid'];
        
        if(data.hasOwnProperty('cp_aggrloc_code'))
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
        
        if(data.hasOwnProperty('route_code'))
            this['route_code'] = data['route_code'];
        
        if(data.hasOwnProperty('route_desc'))
            this['route_desc'] = data['route_desc'];
        
        if(data.hasOwnProperty('cpbill_no'))
            this['cpbill_no'] = data['cpbill_no'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveBillEntryRequestBillSession(data)
{
    /**
     * @member {Int32} ccbillsessiondtl_rowid
     */
    this['ccbillsessiondtl_rowid'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
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
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {Decimal} transferred_qty
     */
    this['transferred_qty'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ccbillsessiondtl_rowid'))
            this['ccbillsessiondtl_rowid'] = data['ccbillsessiondtl_rowid'];
        
        if(data.hasOwnProperty('cp_aggrloc_code'))
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
        
        if(data.hasOwnProperty('milksession_code'))
            this['milksession_code'] = data['milksession_code'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('fat_percent'))
            this['fat_percent'] = data['fat_percent'];
        
        if(data.hasOwnProperty('snf_percent'))
            this['snf_percent'] = data['snf_percent'];
        
        if(data.hasOwnProperty('awm_percent'))
            this['awm_percent'] = data['awm_percent'];
        
        if(data.hasOwnProperty('milk_rate'))
            this['milk_rate'] = data['milk_rate'];
        
        if(data.hasOwnProperty('transferred_qty'))
            this['transferred_qty'] = data['transferred_qty'];
        
        if(data.hasOwnProperty('accepted_qty'))
            this['accepted_qty'] = data['accepted_qty'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveBillEntryResponse(data, format)
{
    /**
     * @member {saveBillEntryResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveBillEntryResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveBillEntryResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveBillEntryResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveBillEntryResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveBillEntryResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveBillEntryResponseApplicationException(data)
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

function saveBillEntryResponsecontext(data)
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
     * @member {saveBillEntryResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveBillEntryResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveBillEntryResponseHeader(data['Header']);
        }
    }
}

function saveBillEntryResponseHeader(data)
{
    /**
     * @member {Int32} ccbill_rowid
     */
    this['ccbill_rowid'] = null;
    
    /**
     * @member {String} ccbill_no
     */
    this['ccbill_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['ccbill_rowid'] = parseInt(data.getElementsByTagName("ccbill_rowid")[0].lastChild.nodeValue);
            
            this['ccbill_no'] = (data.getElementsByTagName("ccbill_no")[0].lastChild != null) ? data.getElementsByTagName("ccbill_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['ccbill_rowid'] = data['ccbill_rowid'];
            
            this['ccbill_no'] = data['ccbill_no'];
        }
    }
}

