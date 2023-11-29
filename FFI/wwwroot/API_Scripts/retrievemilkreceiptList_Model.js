var responseDataFormat = "JSON";

function retrievemilkreceiptListRequest(data)
{
    /**
     * @member {retrievemilkreceiptListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievemilkreceiptListRequestcontext(data['context']);
    }
}

function retrievemilkreceiptListRequestcontext(data)
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
     * @member {retrievemilkreceiptListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new retrievemilkreceiptListRequestFilter(data['Filter']);
    }
}

function retrievemilkreceiptListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrievemilkreceiptListResponse(data, format)
{
    /**
     * @member {retrievemilkreceiptListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievemilkreceiptListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievemilkreceiptListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievemilkreceiptListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievemilkreceiptListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievemilkreceiptListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievemilkreceiptListResponseApplicationException(data)
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

function retrievemilkreceiptListResponsecontext(data)
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
     * @member {retrievemilkreceiptListResponseRecipt} Recipt
     */
    this['Recipt'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Recipt = [];
            for(Reciptchildi = 0; Reciptchildi < data.getElementsByTagName("Recipt").length; Reciptchildi++)
            {
                Recipt.push(new retrievemilkreceiptListResponseRecipt(data.getElementsByTagName("Recipt")[Reciptchildi]));
            }
            if(data.getElementsByTagName("Recipt").length > 0)
                this['Recipt'] = Recipt;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Recipt') && data['Recipt'] != null)
            {
                Recipt = [];
                for(Reciptindex = 0; Reciptindex < data['Recipt'].length; Reciptindex++)
                {
                    Recipt.push(new retrievemilkreceiptListResponseRecipt(data['Recipt'][Reciptindex]));
                }
                this['Recipt'] = Recipt;
            }
        }
    }
}

function retrievemilkreceiptListResponseRecipt(data)
{
    /**
     * @member {Int32} cpsession_rowid
     */
    this['cpsession_rowid'] = null;
    
    /**
     * @member {String} session_date
     */
    this['session_date'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} cpsession_code
     */
    this['cpsession_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cpsession_rowid'] = parseInt(data.getElementsByTagName("cpsession_rowid")[0].lastChild.nodeValue);
            
            this['session_date'] = (data.getElementsByTagName("session_date")[0].lastChild != null) ? data.getElementsByTagName("session_date")[0].lastChild.nodeValue : "";
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['received_qty'] = parseFloat(data.getElementsByTagName("received_qty")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['cpsession_code'] = (data.getElementsByTagName("cpsession_code")[0].lastChild != null) ? data.getElementsByTagName("cpsession_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['cpsession_rowid'] = data['cpsession_rowid'];
            
            this['session_date'] = data['session_date'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['received_qty'] = data['received_qty'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['cpsession_code'] = data['cpsession_code'];
        }
    }
}

