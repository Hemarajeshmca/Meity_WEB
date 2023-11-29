var responseDataFormat = "JSON";

function retrieveBillSessionDtlRequest(data)
{
    /**
     * @member {retrieveBillSessionDtlRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveBillSessionDtlRequestcontext(data['context']);
    }
}

function retrieveBillSessionDtlRequestcontext(data)
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
     * @member {retrieveBillSessionDtlRequestHeader} Header
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
            this['Header'] = new retrieveBillSessionDtlRequestHeader(data['Header']);
    }
}

function retrieveBillSessionDtlRequestHeader(data)
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
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
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
        
        if(data.hasOwnProperty('cp_aggrloc_code'))
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
        
    }
}

function retrieveBillSessionDtlResponse(data, format)
{
    /**
     * @member {retrieveBillSessionDtlResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveBillSessionDtlResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveBillSessionDtlResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveBillSessionDtlResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveBillSessionDtlResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveBillSessionDtlResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveBillSessionDtlResponseApplicationException(data)
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

function retrieveBillSessionDtlResponsecontext(data)
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
     * @member {retrieveBillSessionDtlResponseSessionDtl} SessionDtl
     */
    this['SessionDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            SessionDtl = [];
            for(SessionDtlchildi = 0; SessionDtlchildi < data.getElementsByTagName("SessionDtl").length; SessionDtlchildi++)
            {
                SessionDtl.push(new retrieveBillSessionDtlResponseSessionDtl(data.getElementsByTagName("SessionDtl")[SessionDtlchildi]));
            }
            if(data.getElementsByTagName("SessionDtl").length > 0)
                this['SessionDtl'] = SessionDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('SessionDtl') && data['SessionDtl'] != null)
            {
                SessionDtl = [];
                for(SessionDtlindex = 0; SessionDtlindex < data['SessionDtl'].length; SessionDtlindex++)
                {
                    SessionDtl.push(new retrieveBillSessionDtlResponseSessionDtl(data['SessionDtl'][SessionDtlindex]));
                }
                this['SessionDtl'] = SessionDtl;
            }
        }
    }
}

function retrieveBillSessionDtlResponseSessionDtl(data)
{
    /**
     * @member {Int32} ccbillsessiondtl_rowid
     */
    this['ccbillsessiondtl_rowid'] = null;
    
    /**
     * @member {String} ccbill_no
     */
    this['ccbill_no'] = null;
    
    /**
     * @member {String} transferred_to_cp
     */
    this['transferred_to_cp'] = null;
    
    /**
     * @member {String} transferred_to_cp_desc
     */
    this['transferred_to_cp_desc'] = null;
    
    /**
     * @member {String} milk_date
     */
    this['milk_date'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {String} milk_from_desc
     */
    this['milk_from_desc'] = null;
    
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
     * @member {Decimal} transferred_qty
     */
    this['transferred_qty'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {Decimal} milk_amount
     */
    this['milk_amount'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['ccbillsessiondtl_rowid'] = parseInt(data.getElementsByTagName("ccbillsessiondtl_rowid")[0].lastChild.nodeValue);
            
            this['ccbill_no'] = (data.getElementsByTagName("ccbill_no")[0].lastChild != null) ? data.getElementsByTagName("ccbill_no")[0].lastChild.nodeValue : "";
            
            this['transferred_to_cp'] = (data.getElementsByTagName("transferred_to_cp")[0].lastChild != null) ? data.getElementsByTagName("transferred_to_cp")[0].lastChild.nodeValue : "";
            
            this['transferred_to_cp_desc'] = (data.getElementsByTagName("transferred_to_cp_desc")[0].lastChild != null) ? data.getElementsByTagName("transferred_to_cp_desc")[0].lastChild.nodeValue : "";
            
            this['milk_date'] = (data.getElementsByTagName("milk_date")[0].lastChild != null) ? data.getElementsByTagName("milk_date")[0].lastChild.nodeValue : "";
            
            this['milksession_code'] = (data.getElementsByTagName("milksession_code")[0].lastChild != null) ? data.getElementsByTagName("milksession_code")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['milk_from_desc'] = (data.getElementsByTagName("milk_from_desc")[0].lastChild != null) ? data.getElementsByTagName("milk_from_desc")[0].lastChild.nodeValue : "";
            
            this['fat_percent'] = parseFloat(data.getElementsByTagName("fat_percent")[0].lastChild.nodeValue);
            
            this['snf_percent'] = parseFloat(data.getElementsByTagName("snf_percent")[0].lastChild.nodeValue);
            
            this['awm_percent'] = parseFloat(data.getElementsByTagName("awm_percent")[0].lastChild.nodeValue);
            
            this['transferred_qty'] = parseFloat(data.getElementsByTagName("transferred_qty")[0].lastChild.nodeValue);
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['milk_rate'] = parseFloat(data.getElementsByTagName("milk_rate")[0].lastChild.nodeValue);
            
            this['milk_amount'] = parseFloat(data.getElementsByTagName("milk_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['ccbillsessiondtl_rowid'] = data['ccbillsessiondtl_rowid'];
            
            this['ccbill_no'] = data['ccbill_no'];
            
            this['transferred_to_cp'] = data['transferred_to_cp'];
            
            this['transferred_to_cp_desc'] = data['transferred_to_cp_desc'];
            
            this['milk_date'] = data['milk_date'];
            
            this['milksession_code'] = data['milksession_code'];
            
            this['milk_from'] = data['milk_from'];
            
            this['milk_from_desc'] = data['milk_from_desc'];
            
            this['fat_percent'] = data['fat_percent'];
            
            this['snf_percent'] = data['snf_percent'];
            
            this['awm_percent'] = data['awm_percent'];
            
            this['transferred_qty'] = data['transferred_qty'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['milk_rate'] = data['milk_rate'];
            
            this['milk_amount'] = data['milk_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

