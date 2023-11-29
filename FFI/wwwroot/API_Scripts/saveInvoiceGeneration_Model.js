var responseDataFormat = "JSON";

function saveInvoiceGenerationRequest(data)
{
    /**
     * @member {saveInvoiceGenerationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveInvoiceGenerationRequestcontext(data['context']);
    }
}

function saveInvoiceGenerationRequestcontext(data)
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
     * @member {saveInvoiceGenerationRequestGenerate} Generate
     */
    this['Generate'] = null;
    
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
        
        if(data.hasOwnProperty('Generate') && data['Generate'] != null)
        {
            Generate = [];
            for(Generateindex = 0; Generateindex < data['Generate'].length; Generateindex++)
            {
                Generate.push(new saveInvoiceGenerationRequestGenerate(data['Generate'][Generateindex]));
            }
            this['Generate'] = Generate;
        }
    }
}

function saveInvoiceGenerationRequestGenerate(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} espequipment_code
     */
    this['espequipment_code'] = null;
    
    /**
     * @member {String} date_of_booking
     */
    this['date_of_booking'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
        if(data.hasOwnProperty('customer_code'))
            this['customer_code'] = data['customer_code'];
        
        if(data.hasOwnProperty('booking_no'))
            this['booking_no'] = data['booking_no'];
        
        if(data.hasOwnProperty('espequipment_code'))
            this['espequipment_code'] = data['espequipment_code'];
        
        if(data.hasOwnProperty('date_of_booking'))
            this['date_of_booking'] = data['date_of_booking'];
        
        if(data.hasOwnProperty('period_from'))
            this['period_from'] = data['period_from'];
        
        if(data.hasOwnProperty('period_to'))
            this['period_to'] = data['period_to'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
    }
}

function saveInvoiceGenerationResponse(data, format)
{
    /**
     * @member {saveInvoiceGenerationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveInvoiceGenerationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveInvoiceGenerationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveInvoiceGenerationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveInvoiceGenerationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveInvoiceGenerationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveInvoiceGenerationResponseApplicationException(data)
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

function saveInvoiceGenerationResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

