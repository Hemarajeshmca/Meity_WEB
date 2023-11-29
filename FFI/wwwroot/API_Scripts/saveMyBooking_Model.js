var responseDataFormat = "JSON";

function saveMyBookingRequest(data)
{
    /**
     * @member {saveMyBookingRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveMyBookingRequestcontext(data['context']);
    }
}

function saveMyBookingRequestcontext(data)
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
     * @member {saveMyBookingRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveMyBookingRequestTerms_and_Conditions} Terms_and_Conditions
     */
    this['Terms_and_Conditions'] = null;
    
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
            this['Header'] = new saveMyBookingRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Terms_and_Conditions') && data['Terms_and_Conditions'] != null)
        {
            Terms_and_Conditions = [];
            for(Terms_and_Conditionsindex = 0; Terms_and_Conditionsindex < data['Terms_and_Conditions'].length; Terms_and_Conditionsindex++)
            {
                Terms_and_Conditions.push(new saveMyBookingRequestTerms_and_Conditions(data['Terms_and_Conditions'][Terms_and_Conditionsindex]));
            }
            this['Terms_and_Conditions'] = Terms_and_Conditions;
        }
    }
}

function saveMyBookingRequestHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
    /**
     * @member {String} booking_date
     */
    this['booking_date'] = null;
    
    /**
     * @member {DateTime} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {DateTime} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
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
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} uom_type
     */
    this['uom_type'] = null;
    
    /**
     * @member {Decimal} net_amount
     */
    this['net_amount'] = null;
    
    /**
     * @member {String} duration
     */
    this['duration'] = null;
    
    /**
     * @member {Decimal} transportcost
     */
    this['transportcost'] = null;
    
    /**
     * @member {Decimal} othercost
     */
    this['othercost'] = null;
    
    /**
     * @member {String} Required_location_code
     */
    this['Required_location_code'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('booking_rowid'))
            this['booking_rowid'] = data['booking_rowid'];
        
        if(data.hasOwnProperty('customer_code'))
            this['customer_code'] = data['customer_code'];
        
        if(data.hasOwnProperty('booking_no'))
            this['booking_no'] = data['booking_no'];
        
        if(data.hasOwnProperty('equipment_name'))
            this['equipment_name'] = data['equipment_name'];
        
        if(data.hasOwnProperty('booking_date'))
            this['booking_date'] = data['booking_date'];
        
        if(data.hasOwnProperty('period_from'))
            this['period_from'] = data['period_from'];
        
        if(data.hasOwnProperty('period_to'))
            this['period_to'] = data['period_to'];
        
        if(data.hasOwnProperty('rate'))
            this['rate'] = data['rate'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('uom_type'))
            this['uom_type'] = data['uom_type'];
        
        if(data.hasOwnProperty('net_amount'))
            this['net_amount'] = data['net_amount'];
        
        if(data.hasOwnProperty('duration'))
            this['duration'] = data['duration'];
        
        if(data.hasOwnProperty('transportcost'))
            this['transportcost'] = data['transportcost'];
        
        if(data.hasOwnProperty('othercost'))
            this['othercost'] = data['othercost'];
        
        if(data.hasOwnProperty('Required_location_code'))
            this['Required_location_code'] = data['Required_location_code'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
    }
}

function saveMyBookingRequestTerms_and_Conditions(data)
{
    /**
     * @member {Int32} termsandconditions_rowid
     */
    this['termsandconditions_rowid'] = null;
    
    /**
     * @member {Int16} sl_no
     */
    this['sl_no'] = null;
    
    /**
     * @member {String} termsandconditions
     */
    this['termsandconditions'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('termsandconditions_rowid'))
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
        
        if(data.hasOwnProperty('sl_no'))
            this['sl_no'] = data['sl_no'];
        
        if(data.hasOwnProperty('termsandconditions'))
            this['termsandconditions'] = data['termsandconditions'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('booking_no'))
            this['booking_no'] = data['booking_no'];
        
    }
}

function saveMyBookingResponse(data, format)
{
    /**
     * @member {saveMyBookingResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveMyBookingResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveMyBookingResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveMyBookingResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveMyBookingResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveMyBookingResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveMyBookingResponseApplicationException(data)
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

function saveMyBookingResponsecontext(data)
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
     * @member {saveMyBookingResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveMyBookingResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveMyBookingResponseHeader(data['Header']);
        }
    }
}

function saveMyBookingResponseHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['booking_rowid'] = parseInt(data.getElementsByTagName("booking_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['booking_rowid'] = data['booking_rowid'];
        }
    }
}

