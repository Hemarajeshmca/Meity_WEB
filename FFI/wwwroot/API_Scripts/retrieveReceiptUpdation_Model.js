var responseDataFormat = "JSON";

function retrieveReceiptUpdationRequest(data)
{
    /**
     * @member {retrieveReceiptUpdationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveReceiptUpdationRequestcontext(data['context']);
    }
}

function retrieveReceiptUpdationRequestcontext(data)
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
     * @member {retrieveReceiptUpdationRequestHeader} Header
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
            this['Header'] = new retrieveReceiptUpdationRequestHeader(data['Header']);
    }
}

function retrieveReceiptUpdationRequestHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('booking_rowid'))
            this['booking_rowid'] = data['booking_rowid'];
        
        if(data.hasOwnProperty('booking_no'))
            this['booking_no'] = data['booking_no'];
        
    }
}

function retrieveReceiptUpdationResponse(data, format)
{
    /**
     * @member {retrieveReceiptUpdationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveReceiptUpdationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveReceiptUpdationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveReceiptUpdationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveReceiptUpdationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveReceiptUpdationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveReceiptUpdationResponseApplicationException(data)
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

function retrieveReceiptUpdationResponsecontext(data)
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
     * @member {retrieveReceiptUpdationResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveReceiptUpdationResponseReceipt_Updation} Receipt_Updation
     */
    this['Receipt_Updation'] = null;
    
    /**
     * @member {retrieveReceiptUpdationResponseTerms_and_Conditions} Terms_and_Conditions
     */
    this['Terms_and_Conditions'] = null;
    
    /**
     * @member {retrieveReceiptUpdationResponseHistory} History
     */
    this['History'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveReceiptUpdationResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Receipt_Updation = [];
            for(Receipt_Updationchildi = 0; Receipt_Updationchildi < data.getElementsByTagName("Receipt_Updation").length; Receipt_Updationchildi++)
            {
                Receipt_Updation.push(new retrieveReceiptUpdationResponseReceipt_Updation(data.getElementsByTagName("Receipt_Updation")[Receipt_Updationchildi]));
            }
            if(data.getElementsByTagName("Receipt_Updation").length > 0)
                this['Receipt_Updation'] = Receipt_Updation;
            
            Terms_and_Conditions = [];
            for(Terms_and_Conditionschildi = 0; Terms_and_Conditionschildi < data.getElementsByTagName("Terms_and_Conditions").length; Terms_and_Conditionschildi++)
            {
                Terms_and_Conditions.push(new retrieveReceiptUpdationResponseTerms_and_Conditions(data.getElementsByTagName("Terms_and_Conditions")[Terms_and_Conditionschildi]));
            }
            if(data.getElementsByTagName("Terms_and_Conditions").length > 0)
                this['Terms_and_Conditions'] = Terms_and_Conditions;
            
            History = [];
            for(Historychildi = 0; Historychildi < data.getElementsByTagName("History").length; Historychildi++)
            {
                History.push(new retrieveReceiptUpdationResponseHistory(data.getElementsByTagName("History")[Historychildi]));
            }
            if(data.getElementsByTagName("History").length > 0)
                this['History'] = History;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveReceiptUpdationResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Receipt_Updation') && data['Receipt_Updation'] != null)
            {
                Receipt_Updation = [];
                for(Receipt_Updationindex = 0; Receipt_Updationindex < data['Receipt_Updation'].length; Receipt_Updationindex++)
                {
                    Receipt_Updation.push(new retrieveReceiptUpdationResponseReceipt_Updation(data['Receipt_Updation'][Receipt_Updationindex]));
                }
                this['Receipt_Updation'] = Receipt_Updation;
            }
            
            
            if(data.hasOwnProperty('Terms_and_Conditions') && data['Terms_and_Conditions'] != null)
            {
                Terms_and_Conditions = [];
                for(Terms_and_Conditionsindex = 0; Terms_and_Conditionsindex < data['Terms_and_Conditions'].length; Terms_and_Conditionsindex++)
                {
                    Terms_and_Conditions.push(new retrieveReceiptUpdationResponseTerms_and_Conditions(data['Terms_and_Conditions'][Terms_and_Conditionsindex]));
                }
                this['Terms_and_Conditions'] = Terms_and_Conditions;
            }
            
            
            if(data.hasOwnProperty('History') && data['History'] != null)
            {
                History = [];
                for(Historyindex = 0; Historyindex < data['History'].length; Historyindex++)
                {
                    History.push(new retrieveReceiptUpdationResponseHistory(data['History'][Historyindex]));
                }
                this['History'] = History;
            }
        }
    }
}

function retrieveReceiptUpdationResponseHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['booking_rowid'] = parseInt(data.getElementsByTagName("booking_rowid")[0].lastChild.nodeValue);
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['booking_date'] = (data.getElementsByTagName("booking_date")[0].lastChild != null) ? data.getElementsByTagName("booking_date")[0].lastChild.nodeValue : "";
            
            this['period_from'] = data.getElementsByTagName("period_from")[0].lastChild.nodeValue;
            
            this['period_to'] = data.getElementsByTagName("period_to")[0].lastChild.nodeValue;
            
            this['rate'] = parseFloat(data.getElementsByTagName("rate")[0].lastChild.nodeValue);
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['uom_type'] = (data.getElementsByTagName("uom_type")[0].lastChild != null) ? data.getElementsByTagName("uom_type")[0].lastChild.nodeValue : "";
            
            this['uom_type_desc'] = (data.getElementsByTagName("uom_type_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_type_desc")[0].lastChild.nodeValue : "";
            
            this['net_amount'] = parseFloat(data.getElementsByTagName("net_amount")[0].lastChild.nodeValue);
        }
        else {
            this['booking_rowid'] = data['booking_rowid'];
            
            this['booking_no'] = data['booking_no'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['booking_date'] = data['booking_date'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['rate'] = data['rate'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['uom_type'] = data['uom_type'];
            
            this['uom_type_desc'] = data['uom_type_desc'];
            
            this['net_amount'] = data['net_amount'];
        }
    }
}

function retrieveReceiptUpdationResponseReceipt_Updation(data)
{
    /**
     * @member {Int32} paymentcollection_rowid
     */
    this['paymentcollection_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {Decimal} invoice_amount
     */
    this['invoice_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} ref_no
     */
    this['ref_no'] = null;
    
    /**
     * @member {String} receipt_date
     */
    this['receipt_date'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['paymentcollection_rowid'] = parseInt(data.getElementsByTagName("paymentcollection_rowid")[0].lastChild.nodeValue);
            
            this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            this['invoice_amount'] = parseFloat(data.getElementsByTagName("invoice_amount")[0].lastChild.nodeValue);
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['ref_no'] = (data.getElementsByTagName("ref_no")[0].lastChild != null) ? data.getElementsByTagName("ref_no")[0].lastChild.nodeValue : "";
            
            this['receipt_date'] = (data.getElementsByTagName("receipt_date")[0].lastChild != null) ? data.getElementsByTagName("receipt_date")[0].lastChild.nodeValue : "";
            
            this['payment_amount'] = parseFloat(data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue);
            
            this['balance_amount'] = parseFloat(data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue);
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
            
            this['payment_no'] = data['payment_no'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['invoice_amount'] = data['invoice_amount'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['ref_no'] = data['ref_no'];
            
            this['receipt_date'] = data['receipt_date'];
            
            this['payment_amount'] = data['payment_amount'];
            
            this['balance_amount'] = data['balance_amount'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['booking_no'] = data['booking_no'];
            
            this['process_status'] = data['process_status'];
        }
    }
}

function retrieveReceiptUpdationResponseTerms_and_Conditions(data)
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

function retrieveReceiptUpdationResponseHistory(data)
{
    /**
     * @member {Int32} receiptupdationhistory_rowid
     */
    this['receiptupdationhistory_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {Decimal} invoice_amount
     */
    this['invoice_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} ref_no
     */
    this['ref_no'] = null;
    
    /**
     * @member {String} receipt_date
     */
    this['receipt_date'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['receiptupdationhistory_rowid'] = parseInt(data.getElementsByTagName("receiptupdationhistory_rowid")[0].lastChild.nodeValue);
            
            this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            this['invoice_amount'] = parseFloat(data.getElementsByTagName("invoice_amount")[0].lastChild.nodeValue);
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['ref_no'] = (data.getElementsByTagName("ref_no")[0].lastChild != null) ? data.getElementsByTagName("ref_no")[0].lastChild.nodeValue : "";
            
            this['receipt_date'] = (data.getElementsByTagName("receipt_date")[0].lastChild != null) ? data.getElementsByTagName("receipt_date")[0].lastChild.nodeValue : "";
            
            this['payment_amount'] = parseFloat(data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue);
        }
        else {
            this['receiptupdationhistory_rowid'] = data['receiptupdationhistory_rowid'];
            
            this['payment_no'] = data['payment_no'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['invoice_amount'] = data['invoice_amount'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['ref_no'] = data['ref_no'];
            
            this['receipt_date'] = data['receipt_date'];
            
            this['payment_amount'] = data['payment_amount'];
        }
    }
}

