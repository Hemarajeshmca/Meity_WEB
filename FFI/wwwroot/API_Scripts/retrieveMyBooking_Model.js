var responseDataFormat = "JSON";

function retrieveMyBookingRequest(data)
{
    /**
     * @member {retrieveMyBookingRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveMyBookingRequestcontext(data['context']);
    }
}

function retrieveMyBookingRequestcontext(data)
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
     * @member {retrieveMyBookingRequestHeader} Header
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
            this['Header'] = new retrieveMyBookingRequestHeader(data['Header']);
    }
}

function retrieveMyBookingRequestHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('booking_rowid'))
            this['booking_rowid'] = data['booking_rowid'];
        
    }
}

function retrieveMyBookingResponse(data, format)
{
    /**
     * @member {retrieveMyBookingResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveMyBookingResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveMyBookingResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveMyBookingResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveMyBookingResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveMyBookingResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveMyBookingResponseApplicationException(data)
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

function retrieveMyBookingResponsecontext(data)
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
     * @member {retrieveMyBookingResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveMyBookingResponseTerms_and_Conditions} Terms_and_Conditions
     */
    this['Terms_and_Conditions'] = null;
    
    /**
     * @member {retrieveMyBookingResponsebooking_History} booking_History
     */
    this['booking_History'] = null;
    
    /**
     * @member {retrieveMyBookingResponseterms_and_conditions_history} terms_and_conditions_history
     */
    this['terms_and_conditions_history'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveMyBookingResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Terms_and_Conditions = [];
            for(Terms_and_Conditionschildi = 0; Terms_and_Conditionschildi < data.getElementsByTagName("Terms_and_Conditions").length; Terms_and_Conditionschildi++)
            {
                Terms_and_Conditions.push(new retrieveMyBookingResponseTerms_and_Conditions(data.getElementsByTagName("Terms_and_Conditions")[Terms_and_Conditionschildi]));
            }
            if(data.getElementsByTagName("Terms_and_Conditions").length > 0)
                this['Terms_and_Conditions'] = Terms_and_Conditions;
            
            booking_History = [];
            for(booking_Historychildi = 0; booking_Historychildi < data.getElementsByTagName("booking_History").length; booking_Historychildi++)
            {
                booking_History.push(new retrieveMyBookingResponsebooking_History(data.getElementsByTagName("booking_History")[booking_Historychildi]));
            }
            if(data.getElementsByTagName("booking_History").length > 0)
                this['booking_History'] = booking_History;
            
            terms_and_conditions_history = [];
            for(terms_and_conditions_historychildi = 0; terms_and_conditions_historychildi < data.getElementsByTagName("terms_and_conditions_history").length; terms_and_conditions_historychildi++)
            {
                terms_and_conditions_history.push(new retrieveMyBookingResponseterms_and_conditions_history(data.getElementsByTagName("terms_and_conditions_history")[terms_and_conditions_historychildi]));
            }
            if(data.getElementsByTagName("terms_and_conditions_history").length > 0)
                this['terms_and_conditions_history'] = terms_and_conditions_history;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveMyBookingResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Terms_and_Conditions') && data['Terms_and_Conditions'] != null)
            {
                Terms_and_Conditions = [];
                for(Terms_and_Conditionsindex = 0; Terms_and_Conditionsindex < data['Terms_and_Conditions'].length; Terms_and_Conditionsindex++)
                {
                    Terms_and_Conditions.push(new retrieveMyBookingResponseTerms_and_Conditions(data['Terms_and_Conditions'][Terms_and_Conditionsindex]));
                }
                this['Terms_and_Conditions'] = Terms_and_Conditions;
            }
            
            
            if(data.hasOwnProperty('booking_History') && data['booking_History'] != null)
            {
                booking_History = [];
                for(booking_Historyindex = 0; booking_Historyindex < data['booking_History'].length; booking_Historyindex++)
                {
                    booking_History.push(new retrieveMyBookingResponsebooking_History(data['booking_History'][booking_Historyindex]));
                }
                this['booking_History'] = booking_History;
            }
            
            
            if(data.hasOwnProperty('terms_and_conditions_history') && data['terms_and_conditions_history'] != null)
            {
                terms_and_conditions_history = [];
                for(terms_and_conditions_historyindex = 0; terms_and_conditions_historyindex < data['terms_and_conditions_history'].length; terms_and_conditions_historyindex++)
                {
                    terms_and_conditions_history.push(new retrieveMyBookingResponseterms_and_conditions_history(data['terms_and_conditions_history'][terms_and_conditions_historyindex]));
                }
                this['terms_and_conditions_history'] = terms_and_conditions_history;
            }
        }
    }
}

function retrieveMyBookingResponseHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    /**
     * @member {String} equipment_no
     */
    this['equipment_no'] = null;
    
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
     * @member {String} uom_type
     */
    this['uom_type'] = null;
    
    /**
     * @member {String} uom_type_desc
     */
    this['uom_type_desc'] = null;
    
    /**
     * @member {Decimal} net_amount
     */
    this['net_amount'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
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
     * @member {String} Required_location_desc
     */
    this['Required_location_desc'] = null;
    
    /**
     * @member {String} manfaturer_name_code
     */
    this['manfaturer_name_code'] = null;
    
    /**
     * @member {String} manfaturer_name_desc
     */
    this['manfaturer_name_desc'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
    /**
     * @member {String} esp_name
     */
    this['esp_name'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} process_status_desc
     */
    this['process_status_desc'] = null;
    
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
            this['booking_rowid'] = parseInt(data.getElementsByTagName("booking_rowid")[0].lastChild.nodeValue);
            
            this['equipment_no'] = (data.getElementsByTagName("equipment_no")[0].lastChild != null) ? data.getElementsByTagName("equipment_no")[0].lastChild.nodeValue : "";
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['booking_date'] = (data.getElementsByTagName("booking_date")[0].lastChild != null) ? data.getElementsByTagName("booking_date")[0].lastChild.nodeValue : "";
            
            this['period_from'] = data.getElementsByTagName("period_from")[0].lastChild.nodeValue;
            
            this['period_to'] = data.getElementsByTagName("period_to")[0].lastChild.nodeValue;
            
            this['uom_type'] = (data.getElementsByTagName("uom_type")[0].lastChild != null) ? data.getElementsByTagName("uom_type")[0].lastChild.nodeValue : "";
            
            this['uom_type_desc'] = (data.getElementsByTagName("uom_type_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_type_desc")[0].lastChild.nodeValue : "";
            
            this['net_amount'] = parseFloat(data.getElementsByTagName("net_amount")[0].lastChild.nodeValue);
            
            this['rate'] = parseFloat(data.getElementsByTagName("rate")[0].lastChild.nodeValue);
            
            this['duration'] = (data.getElementsByTagName("duration")[0].lastChild != null) ? data.getElementsByTagName("duration")[0].lastChild.nodeValue : "";
            
            this['transportcost'] = parseFloat(data.getElementsByTagName("transportcost")[0].lastChild.nodeValue);
            
            this['othercost'] = parseFloat(data.getElementsByTagName("othercost")[0].lastChild.nodeValue);
            
            this['Required_location_code'] = (data.getElementsByTagName("Required_location_code")[0].lastChild != null) ? data.getElementsByTagName("Required_location_code")[0].lastChild.nodeValue : "";
            
            this['Required_location_desc'] = (data.getElementsByTagName("Required_location_desc")[0].lastChild != null) ? data.getElementsByTagName("Required_location_desc")[0].lastChild.nodeValue : "";
            
            this['manfaturer_name_code'] = (data.getElementsByTagName("manfaturer_name_code")[0].lastChild != null) ? data.getElementsByTagName("manfaturer_name_code")[0].lastChild.nodeValue : "";
            
            this['manfaturer_name_desc'] = (data.getElementsByTagName("manfaturer_name_desc")[0].lastChild != null) ? data.getElementsByTagName("manfaturer_name_desc")[0].lastChild.nodeValue : "";
            
            this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
            this['esp_name'] = (data.getElementsByTagName("esp_name")[0].lastChild != null) ? data.getElementsByTagName("esp_name")[0].lastChild.nodeValue : "";
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['booking_rowid'] = data['booking_rowid'];
            
            this['equipment_no'] = data['equipment_no'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['booking_no'] = data['booking_no'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['booking_date'] = data['booking_date'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['uom_type'] = data['uom_type'];
            
            this['uom_type_desc'] = data['uom_type_desc'];
            
            this['net_amount'] = data['net_amount'];
            
            this['rate'] = data['rate'];
            
            this['duration'] = data['duration'];
            
            this['transportcost'] = data['transportcost'];
            
            this['othercost'] = data['othercost'];
            
            this['Required_location_code'] = data['Required_location_code'];
            
            this['Required_location_desc'] = data['Required_location_desc'];
            
            this['manfaturer_name_code'] = data['manfaturer_name_code'];
            
            this['manfaturer_name_desc'] = data['manfaturer_name_desc'];
            
            this['remarks'] = data['remarks'];
            
            this['esp_name'] = data['esp_name'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveMyBookingResponseTerms_and_Conditions(data)
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
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} termsandconditions
     */
    this['termsandconditions'] = null;
    
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
            this['termsandconditions_rowid'] = parseInt(data.getElementsByTagName("termsandconditions_rowid")[0].lastChild.nodeValue);
            
            this['sl_no'] = parseInt(data.getElementsByTagName("sl_no")[0].lastChild.nodeValue);
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['termsandconditions'] = (data.getElementsByTagName("termsandconditions")[0].lastChild != null) ? data.getElementsByTagName("termsandconditions")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
            
            this['sl_no'] = data['sl_no'];
            
            this['booking_no'] = data['booking_no'];
            
            this['termsandconditions'] = data['termsandconditions'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveMyBookingResponsebooking_History(data)
{
    /**
     * @member {Int32} booking_history_rowid
     */
    this['booking_history_rowid'] = null;
    
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
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
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {String} booking_date
     */
    this['booking_date'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['booking_history_rowid'] = parseInt(data.getElementsByTagName("booking_history_rowid")[0].lastChild.nodeValue);
            
            this['booking_rowid'] = parseInt(data.getElementsByTagName("booking_rowid")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['booking_date'] = (data.getElementsByTagName("booking_date")[0].lastChild != null) ? data.getElementsByTagName("booking_date")[0].lastChild.nodeValue : "";
            
            this['rate'] = parseFloat(data.getElementsByTagName("rate")[0].lastChild.nodeValue);
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['booking_history_rowid'] = data['booking_history_rowid'];
            
            this['booking_rowid'] = data['booking_rowid'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['booking_no'] = data['booking_no'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['booking_date'] = data['booking_date'];
            
            this['rate'] = data['rate'];
            
            this['user_name'] = data['user_name'];
        }
    }
}

function retrieveMyBookingResponseterms_and_conditions_history(data)
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['termsandconditions_rowid'] = parseInt(data.getElementsByTagName("termsandconditions_rowid")[0].lastChild.nodeValue);
            
            this['sl_no'] = parseInt(data.getElementsByTagName("sl_no")[0].lastChild.nodeValue);
            
            this['termsandconditions'] = (data.getElementsByTagName("termsandconditions")[0].lastChild != null) ? data.getElementsByTagName("termsandconditions")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
            
            this['sl_no'] = data['sl_no'];
            
            this['termsandconditions'] = data['termsandconditions'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['user_name'] = data['user_name'];
        }
    }
}

