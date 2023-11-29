var responseDataFormat = "JSON";

function retrieveRevenueReportRequest(data)
{
    /**
     * @member {retrieveRevenueReportRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveRevenueReportRequestcontext(data['context']);
    }
}

function retrieveRevenueReportRequestcontext(data)
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
     * @member {retrieveRevenueReportRequestHeader} Header
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
            this['Header'] = new retrieveRevenueReportRequestHeader(data['Header']);
    }
}

function retrieveRevenueReportRequestHeader(data)
{
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('from_date'))
            this['from_date'] = data['from_date'];
        
        if(data.hasOwnProperty('to_date'))
            this['to_date'] = data['to_date'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
    }
}

function retrieveRevenueReportResponse(data, format)
{
    /**
     * @member {retrieveRevenueReportResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveRevenueReportResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveRevenueReportResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveRevenueReportResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveRevenueReportResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveRevenueReportResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveRevenueReportResponseApplicationException(data)
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

function retrieveRevenueReportResponsecontext(data)
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
     * @member {retrieveRevenueReportResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveRevenueReportResponseESPDetails} ESPDetails
     */
    this['ESPDetails'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveRevenueReportResponseHeader(data.getElementsByTagName("Header")[0]);
            
            ESPDetails = [];
            for(ESPDetailschildi = 0; ESPDetailschildi < data.getElementsByTagName("ESPDetails").length; ESPDetailschildi++)
            {
                ESPDetails.push(new retrieveRevenueReportResponseESPDetails(data.getElementsByTagName("ESPDetails")[ESPDetailschildi]));
            }
            if(data.getElementsByTagName("ESPDetails").length > 0)
                this['ESPDetails'] = ESPDetails;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveRevenueReportResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('ESPDetails') && data['ESPDetails'] != null)
            {
                ESPDetails = [];
                for(ESPDetailsindex = 0; ESPDetailsindex < data['ESPDetails'].length; ESPDetailsindex++)
                {
                    ESPDetails.push(new retrieveRevenueReportResponseESPDetails(data['ESPDetails'][ESPDetailsindex]));
                }
                this['ESPDetails'] = ESPDetails;
            }
        }
    }
}

function retrieveRevenueReportResponseHeader(data)
{
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['from_date'] = (data.getElementsByTagName("from_date")[0].lastChild != null) ? data.getElementsByTagName("from_date")[0].lastChild.nodeValue : "";
            
            this['to_date'] = (data.getElementsByTagName("to_date")[0].lastChild != null) ? data.getElementsByTagName("to_date")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['from_date'] = data['from_date'];
            
            this['to_date'] = data['to_date'];
            
            this['status_code'] = data['status_code'];
        }
    }
}

function retrieveRevenueReportResponseESPDetails(data)
{
    /**
     * @member {Int32} esp_details_rowid
     */
    this['esp_details_rowid'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} esp_name
     */
    this['esp_name'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
    /**
     * @member {String} booking_id
     */
    this['booking_id'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
    /**
     * @member {String} uom_desc
     */
    this['uom_desc'] = null;
    
    /**
     * @member {String} fromdate
     */
    this['fromdate'] = null;
    
    /**
     * @member {String} todate
     */
    this['todate'] = null;
    
    /**
     * @member {Decimal} duration
     */
    this['duration'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['esp_details_rowid'] = parseInt(data.getElementsByTagName("esp_details_rowid")[0].lastChild.nodeValue);
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['esp_name'] = (data.getElementsByTagName("esp_name")[0].lastChild != null) ? data.getElementsByTagName("esp_name")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['booking_id'] = (data.getElementsByTagName("booking_id")[0].lastChild != null) ? data.getElementsByTagName("booking_id")[0].lastChild.nodeValue : "";
            
            this['uom'] = (data.getElementsByTagName("uom")[0].lastChild != null) ? data.getElementsByTagName("uom")[0].lastChild.nodeValue : "";
            
            this['uom_desc'] = (data.getElementsByTagName("uom_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_desc")[0].lastChild.nodeValue : "";
            
            this['fromdate'] = (data.getElementsByTagName("fromdate")[0].lastChild != null) ? data.getElementsByTagName("fromdate")[0].lastChild.nodeValue : "";
            
            this['todate'] = (data.getElementsByTagName("todate")[0].lastChild != null) ? data.getElementsByTagName("todate")[0].lastChild.nodeValue : "";
            
            this['duration'] = parseFloat(data.getElementsByTagName("duration")[0].lastChild.nodeValue);
            
            this['amount'] = parseFloat(data.getElementsByTagName("amount")[0].lastChild.nodeValue);
        }
        else {
            this['esp_details_rowid'] = data['esp_details_rowid'];
            
            this['esp_code'] = data['esp_code'];
            
            this['esp_name'] = data['esp_name'];
            
            this['customer_name'] = data['customer_name'];
            
            this['booking_id'] = data['booking_id'];
            
            this['uom'] = data['uom'];
            
            this['uom_desc'] = data['uom_desc'];
            
            this['fromdate'] = data['fromdate'];
            
            this['todate'] = data['todate'];
            
            this['duration'] = data['duration'];
            
            this['amount'] = data['amount'];
        }
    }
}

