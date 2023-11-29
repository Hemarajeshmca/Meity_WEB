var responseDataFormat = "JSON";

function getInvoiceToCMListRequest(data)
{
    /**
     * @member {getInvoiceToCMListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getInvoiceToCMListRequestcontext(data['context']);
    }
}

function getInvoiceToCMListRequestcontext(data)
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
     * @member {getInvoiceToCMListRequestFilter} Filter
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
            this['Filter'] = new getInvoiceToCMListRequestFilter(data['Filter']);
    }
}

function getInvoiceToCMListRequestFilter(data)
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

function getInvoiceToCMListResponse(data, format)
{
    /**
     * @member {getInvoiceToCMListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getInvoiceToCMListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getInvoiceToCMListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getInvoiceToCMListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getInvoiceToCMListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getInvoiceToCMListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getInvoiceToCMListResponseApplicationException(data)
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

function getInvoiceToCMListResponsecontext(data)
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
     * @member {getInvoiceToCMListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new getInvoiceToCMListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new getInvoiceToCMListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function getInvoiceToCMListResponseList(data)
{
    /**
     * @member {Int32} invoicetocm_rowid
     */
    this['invoicetocm_rowid'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} espequipment_code
     */
    this['espequipment_code'] = null;
    
    /**
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
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
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['invoicetocm_rowid'] = parseInt(data.getElementsByTagName("invoicetocm_rowid")[0].lastChild.nodeValue);
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['espequipment_code'] = (data.getElementsByTagName("espequipment_code")[0].lastChild != null) ? data.getElementsByTagName("espequipment_code")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['date_of_booking'] = (data.getElementsByTagName("date_of_booking")[0].lastChild != null) ? data.getElementsByTagName("date_of_booking")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoicetocm_rowid'] = data['invoicetocm_rowid'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['booking_no'] = data['booking_no'];
            
            this['espequipment_code'] = data['espequipment_code'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['date_of_booking'] = data['date_of_booking'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

