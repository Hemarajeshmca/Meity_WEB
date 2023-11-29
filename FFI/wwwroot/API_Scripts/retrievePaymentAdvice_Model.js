var responseDataFormat = "JSON";

function retrievePaymentAdviceRequest(data)
{
    /**
     * @member {retrievePaymentAdviceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievePaymentAdviceRequestcontext(data['context']);
    }
}

function retrievePaymentAdviceRequestcontext(data)
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
     * @member {retrievePaymentAdviceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrievePaymentAdviceRequestOverAllBillEntry} OverAllBillEntry
     */
    this['OverAllBillEntry'] = null;
    
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
            this['Header'] = new retrievePaymentAdviceRequestHeader(data['Header']);
        if(data.hasOwnProperty('OverAllBillEntry') && data['OverAllBillEntry'] != null)
        {
            OverAllBillEntry = [];
            for(OverAllBillEntryindex = 0; OverAllBillEntryindex < data['OverAllBillEntry'].length; OverAllBillEntryindex++)
            {
                OverAllBillEntry.push(new retrievePaymentAdviceRequestOverAllBillEntry(data['OverAllBillEntry'][OverAllBillEntryindex]));
            }
            this['OverAllBillEntry'] = OverAllBillEntry;
        }
    }
}

function retrievePaymentAdviceRequestHeader(data)
{
    /**
     * @member {Int32} paymenthead_rowid
     */
    this['paymenthead_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('paymenthead_rowid'))
            this['paymenthead_rowid'] = data['paymenthead_rowid'];
        
        if(data.hasOwnProperty('payment_no'))
            this['payment_no'] = data['payment_no'];
        
    }
}

function retrievePaymentAdviceRequestOverAllBillEntry(data)
{
    /**
     * @member {String} Deduction_type
     */
    this['Deduction_type'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('Deduction_type'))
            this['Deduction_type'] = data['Deduction_type'];
        
    }
}

function retrievePaymentAdviceResponse(data, format)
{
    /**
     * @member {retrievePaymentAdviceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievePaymentAdviceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievePaymentAdviceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievePaymentAdviceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievePaymentAdviceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievePaymentAdviceResponseApplicationException(data)
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

function retrievePaymentAdviceResponsecontext(data)
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
     * @member {retrievePaymentAdviceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponseBillDetail} BillDetail
     */
    this['BillDetail'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponseRetailDetail} RetailDetail
     */
    this['RetailDetail'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponseOverAllBillEntry} OverAllBillEntry
     */
    this['OverAllBillEntry'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponsesummary} summary
     */
    this['summary'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponsePaymentAdv} PaymentAdv
     */
    this['PaymentAdv'] = null;
    
    /**
     * @member {retrievePaymentAdviceResponsePaymentSummary} PaymentSummary
     */
    this['PaymentSummary'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrievePaymentAdviceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            BillDetail = [];
            for(BillDetailchildi = 0; BillDetailchildi < data.getElementsByTagName("BillDetail").length; BillDetailchildi++)
            {
                BillDetail.push(new retrievePaymentAdviceResponseBillDetail(data.getElementsByTagName("BillDetail")[BillDetailchildi]));
            }
            if(data.getElementsByTagName("BillDetail").length > 0)
                this['BillDetail'] = BillDetail;
            
            RetailDetail = [];
            for(RetailDetailchildi = 0; RetailDetailchildi < data.getElementsByTagName("RetailDetail").length; RetailDetailchildi++)
            {
                RetailDetail.push(new retrievePaymentAdviceResponseRetailDetail(data.getElementsByTagName("RetailDetail")[RetailDetailchildi]));
            }
            if(data.getElementsByTagName("RetailDetail").length > 0)
                this['RetailDetail'] = RetailDetail;
            
            OverAllBillEntry = [];
            for(OverAllBillEntrychildi = 0; OverAllBillEntrychildi < data.getElementsByTagName("OverAllBillEntry").length; OverAllBillEntrychildi++)
            {
                OverAllBillEntry.push(new retrievePaymentAdviceResponseOverAllBillEntry(data.getElementsByTagName("OverAllBillEntry")[OverAllBillEntrychildi]));
            }
            if(data.getElementsByTagName("OverAllBillEntry").length > 0)
                this['OverAllBillEntry'] = OverAllBillEntry;
            
            this['summary'] = new retrievePaymentAdviceResponsesummary(data.getElementsByTagName("summary")[0]);
            
            PaymentAdv = [];
            for(PaymentAdvchildi = 0; PaymentAdvchildi < data.getElementsByTagName("PaymentAdv").length; PaymentAdvchildi++)
            {
                PaymentAdv.push(new retrievePaymentAdviceResponsePaymentAdv(data.getElementsByTagName("PaymentAdv")[PaymentAdvchildi]));
            }
            if(data.getElementsByTagName("PaymentAdv").length > 0)
                this['PaymentAdv'] = PaymentAdv;
            
            this['PaymentSummary'] = new retrievePaymentAdviceResponsePaymentSummary(data.getElementsByTagName("PaymentSummary")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrievePaymentAdviceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('BillDetail') && data['BillDetail'] != null)
            {
                BillDetail = [];
                for(BillDetailindex = 0; BillDetailindex < data['BillDetail'].length; BillDetailindex++)
                {
                    BillDetail.push(new retrievePaymentAdviceResponseBillDetail(data['BillDetail'][BillDetailindex]));
                }
                this['BillDetail'] = BillDetail;
            }
            
            
            if(data.hasOwnProperty('RetailDetail') && data['RetailDetail'] != null)
            {
                RetailDetail = [];
                for(RetailDetailindex = 0; RetailDetailindex < data['RetailDetail'].length; RetailDetailindex++)
                {
                    RetailDetail.push(new retrievePaymentAdviceResponseRetailDetail(data['RetailDetail'][RetailDetailindex]));
                }
                this['RetailDetail'] = RetailDetail;
            }
            
            
            if(data.hasOwnProperty('OverAllBillEntry') && data['OverAllBillEntry'] != null)
            {
                OverAllBillEntry = [];
                for(OverAllBillEntryindex = 0; OverAllBillEntryindex < data['OverAllBillEntry'].length; OverAllBillEntryindex++)
                {
                    OverAllBillEntry.push(new retrievePaymentAdviceResponseOverAllBillEntry(data['OverAllBillEntry'][OverAllBillEntryindex]));
                }
                this['OverAllBillEntry'] = OverAllBillEntry;
            }
            
            
            this['summary'] = new retrievePaymentAdviceResponsesummary(data['summary']);
            
            
            if(data.hasOwnProperty('PaymentAdv') && data['PaymentAdv'] != null)
            {
                PaymentAdv = [];
                for(PaymentAdvindex = 0; PaymentAdvindex < data['PaymentAdv'].length; PaymentAdvindex++)
                {
                    PaymentAdv.push(new retrievePaymentAdviceResponsePaymentAdv(data['PaymentAdv'][PaymentAdvindex]));
                }
                this['PaymentAdv'] = PaymentAdv;
            }
            
            
            this['PaymentSummary'] = new retrievePaymentAdviceResponsePaymentSummary(data['PaymentSummary']);
        }
    }
}

function retrievePaymentAdviceResponseHeader(data)
{
    /**
     * @member {Int32} paymenthead_rowid
     */
    this['paymenthead_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {String} ccbill_no
     */
    this['ccbill_no'] = null;
    
    /**
     * @member {String} milk_supply_period
     */
    this['milk_supply_period'] = null;
    
    /**
     * @member {String} process_payment
     */
    this['process_payment'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['paymenthead_rowid'] = parseInt(data.getElementsByTagName("paymenthead_rowid")[0].lastChild.nodeValue);
            
            this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            this['ccbill_no'] = (data.getElementsByTagName("ccbill_no")[0].lastChild != null) ? data.getElementsByTagName("ccbill_no")[0].lastChild.nodeValue : "";
            
            this['milk_supply_period'] = (data.getElementsByTagName("milk_supply_period")[0].lastChild != null) ? data.getElementsByTagName("milk_supply_period")[0].lastChild.nodeValue : "";
            
            this['process_payment'] = (data.getElementsByTagName("process_payment")[0].lastChild != null) ? data.getElementsByTagName("process_payment")[0].lastChild.nodeValue : "";
            
            this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymenthead_rowid'] = data['paymenthead_rowid'];
            
            this['payment_no'] = data['payment_no'];
            
            this['ccbill_no'] = data['ccbill_no'];
            
            this['milk_supply_period'] = data['milk_supply_period'];
            
            this['process_payment'] = data['process_payment'];
            
            this['payment_date'] = data['payment_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrievePaymentAdviceResponseBillDetail(data)
{
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} cp_aggrloc_desc
     */
    this['cp_aggrloc_desc'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {String} milk_supply_from
     */
    this['milk_supply_from'] = null;
    
    /**
     * @member {String} milk_supply_to
     */
    this['milk_supply_to'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['milk_supply_from'] = (data.getElementsByTagName("milk_supply_from")[0].lastChild != null) ? data.getElementsByTagName("milk_supply_from")[0].lastChild.nodeValue : "";
            
            this['milk_supply_to'] = (data.getElementsByTagName("milk_supply_to")[0].lastChild != null) ? data.getElementsByTagName("milk_supply_to")[0].lastChild.nodeValue : "";
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['milk_rate'] = parseFloat(data.getElementsByTagName("milk_rate")[0].lastChild.nodeValue);
            
            this['milk_amount'] = parseFloat(data.getElementsByTagName("milk_amount")[0].lastChild.nodeValue);
        }
        else {
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['milk_from'] = data['milk_from'];
            
            this['milk_supply_from'] = data['milk_supply_from'];
            
            this['milk_supply_to'] = data['milk_supply_to'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['milk_rate'] = data['milk_rate'];
            
            this['milk_amount'] = data['milk_amount'];
        }
    }
}

function retrievePaymentAdviceResponseRetailDetail(data)
{
    /**
     * @member {String} cust_name
     */
    this['cust_name'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {Decimal} retail_total_milk
     */
    this['retail_total_milk'] = null;
    
    /**
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {Decimal} retail_total_amount
     */
    this['retail_total_amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cust_name'] = (data.getElementsByTagName("cust_name")[0].lastChild != null) ? data.getElementsByTagName("cust_name")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['retail_total_milk'] = parseFloat(data.getElementsByTagName("retail_total_milk")[0].lastChild.nodeValue);
            
            this['milk_rate'] = parseFloat(data.getElementsByTagName("milk_rate")[0].lastChild.nodeValue);
            
            this['retail_total_amount'] = parseFloat(data.getElementsByTagName("retail_total_amount")[0].lastChild.nodeValue);
        }
        else {
            this['cust_name'] = data['cust_name'];
            
            this['milk_from'] = data['milk_from'];
            
            this['retail_total_milk'] = data['retail_total_milk'];
            
            this['milk_rate'] = data['milk_rate'];
            
            this['retail_total_amount'] = data['retail_total_amount'];
        }
    }
}

function retrievePaymentAdviceResponseOverAllBillEntry(data)
{
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} cp_aggrloc_desc
     */
    this['cp_aggrloc_desc'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {String} milk_supply_from
     */
    this['milk_supply_from'] = null;
    
    /**
     * @member {String} milk_supply_to
     */
    this['milk_supply_to'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {Decimal} milkrate
     */
    this['milkrate'] = null;
    
    /**
     * @member {Decimal} milk_amount
     */
    this['milk_amount'] = null;
    
    /**
     * @member {String} Deduction_type
     */
    this['Deduction_type'] = null;
    
    /**
     * @member {String} deduction
     */
    this['deduction'] = null;
    
    /**
     * @member {Decimal} revised_rate
     */
    this['revised_rate'] = null;
    
    /**
     * @member {Decimal} revised_amt
     */
    this['revised_amt'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['milk_supply_from'] = (data.getElementsByTagName("milk_supply_from")[0].lastChild != null) ? data.getElementsByTagName("milk_supply_from")[0].lastChild.nodeValue : "";
            
            this['milk_supply_to'] = (data.getElementsByTagName("milk_supply_to")[0].lastChild != null) ? data.getElementsByTagName("milk_supply_to")[0].lastChild.nodeValue : "";
            
            this['accepted_qty'] = parseFloat(data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue);
            
            this['milkrate'] = parseFloat(data.getElementsByTagName("milkrate")[0].lastChild.nodeValue);
            
            this['milk_amount'] = parseFloat(data.getElementsByTagName("milk_amount")[0].lastChild.nodeValue);
            
            this['Deduction_type'] = (data.getElementsByTagName("Deduction_type")[0].lastChild != null) ? data.getElementsByTagName("Deduction_type")[0].lastChild.nodeValue : "";
            
            this['deduction'] = (data.getElementsByTagName("deduction")[0].lastChild != null) ? data.getElementsByTagName("deduction")[0].lastChild.nodeValue : "";
            
            this['revised_rate'] = parseFloat(data.getElementsByTagName("revised_rate")[0].lastChild.nodeValue);
            
            this['revised_amt'] = parseFloat(data.getElementsByTagName("revised_amt")[0].lastChild.nodeValue);
        }
        else {
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['milk_from'] = data['milk_from'];
            
            this['milk_supply_from'] = data['milk_supply_from'];
            
            this['milk_supply_to'] = data['milk_supply_to'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['milkrate'] = data['milkrate'];
            
            this['milk_amount'] = data['milk_amount'];
            
            this['Deduction_type'] = data['Deduction_type'];
            
            this['deduction'] = data['deduction'];
            
            this['revised_rate'] = data['revised_rate'];
            
            this['revised_amt'] = data['revised_amt'];
        }
    }
}

function retrievePaymentAdviceResponsesummary(data)
{
    /**
     * @member {Decimal} retailsale_amount
     */
    this['retailsale_amount'] = null;
    
    /**
     * @member {Decimal} cp_bill_amount
     */
    this['cp_bill_amount'] = null;
    
    /**
     * @member {Decimal} gross_amount
     */
    this['gross_amount'] = null;
    
    /**
     * @member {Decimal} gross_qty
     */
    this['gross_qty'] = null;
    
    /**
     * @member {String} deduction_type
     */
    this['deduction_type'] = null;
    
    /**
     * @member {Decimal} deduction_per_ltr
     */
    this['deduction_per_ltr'] = null;
    
    /**
     * @member {Decimal} deduction_amount
     */
    this['deduction_amount'] = null;
    
    /**
     * @member {Decimal} deduction_total_amount
     */
    this['deduction_total_amount'] = null;
    
    /**
     * @member {Decimal} net_amount
     */
    this['net_amount'] = null;
    
    /**
     * @member {Decimal} calcrate_per_ltr
     */
    this['calcrate_per_ltr'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} process_status_desc
     */
    this['process_status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['retailsale_amount'] = parseFloat(data.getElementsByTagName("retailsale_amount")[0].lastChild.nodeValue);
            
            this['cp_bill_amount'] = parseFloat(data.getElementsByTagName("cp_bill_amount")[0].lastChild.nodeValue);
            
            this['gross_amount'] = parseFloat(data.getElementsByTagName("gross_amount")[0].lastChild.nodeValue);
            
            this['gross_qty'] = parseFloat(data.getElementsByTagName("gross_qty")[0].lastChild.nodeValue);
            
            this['deduction_type'] = (data.getElementsByTagName("deduction_type")[0].lastChild != null) ? data.getElementsByTagName("deduction_type")[0].lastChild.nodeValue : "";
            
            this['deduction_per_ltr'] = parseFloat(data.getElementsByTagName("deduction_per_ltr")[0].lastChild.nodeValue);
            
            this['deduction_amount'] = parseFloat(data.getElementsByTagName("deduction_amount")[0].lastChild.nodeValue);
            
            this['deduction_total_amount'] = parseFloat(data.getElementsByTagName("deduction_total_amount")[0].lastChild.nodeValue);
            
            this['net_amount'] = parseFloat(data.getElementsByTagName("net_amount")[0].lastChild.nodeValue);
            
            this['calcrate_per_ltr'] = parseFloat(data.getElementsByTagName("calcrate_per_ltr")[0].lastChild.nodeValue);
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['retailsale_amount'] = data['retailsale_amount'];
            
            this['cp_bill_amount'] = data['cp_bill_amount'];
            
            this['gross_amount'] = data['gross_amount'];
            
            this['gross_qty'] = data['gross_qty'];
            
            this['deduction_type'] = data['deduction_type'];
            
            this['deduction_per_ltr'] = data['deduction_per_ltr'];
            
            this['deduction_amount'] = data['deduction_amount'];
            
            this['deduction_total_amount'] = data['deduction_total_amount'];
            
            this['net_amount'] = data['net_amount'];
            
            this['calcrate_per_ltr'] = data['calcrate_per_ltr'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
        }
    }
}

function retrievePaymentAdviceResponsePaymentAdv(data)
{
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} milkman_code
     */
    this['milkman_code'] = null;
    
    /**
     * @member {Decimal} milk_qty
     */
    this['milk_qty'] = null;
    
    /**
     * @member {Decimal} calc_amount
     */
    this['calc_amount'] = null;
    
    /**
     * @member {Decimal} advance_amount
     */
    this['advance_amount'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {String} payment_status_desc
     */
    this['payment_status_desc'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} dr_bank_acc_no
     */
    this['dr_bank_acc_no'] = null;
    
    /**
     * @member {String} dr_bank_acc_type
     */
    this['dr_bank_acc_type'] = null;
    
    /**
     * @member {String} dr_bank_code
     */
    this['dr_bank_code'] = null;
    
    /**
     * @member {String} dr_bank_ifsc_code
     */
    this['dr_bank_ifsc_code'] = null;
    
    /**
     * @member {String} cr_bank_code
     */
    this['cr_bank_code'] = null;
    
    /**
     * @member {String} cr_bank_acc_type
     */
    this['cr_bank_acc_type'] = null;
    
    /**
     * @member {String} cr_bank_acc_no
     */
    this['cr_bank_acc_no'] = null;
    
    /**
     * @member {String} cr_bank_ifsc_code
     */
    this['cr_bank_ifsc_code'] = null;
    
    /**
     * @member {String} inter_aggrorgn_code
     */
    this['inter_aggrorgn_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['milkman_code'] = (data.getElementsByTagName("milkman_code")[0].lastChild != null) ? data.getElementsByTagName("milkman_code")[0].lastChild.nodeValue : "";
            
            this['milk_qty'] = parseFloat(data.getElementsByTagName("milk_qty")[0].lastChild.nodeValue);
            
            this['calc_amount'] = parseFloat(data.getElementsByTagName("calc_amount")[0].lastChild.nodeValue);
            
            this['advance_amount'] = parseFloat(data.getElementsByTagName("advance_amount")[0].lastChild.nodeValue);
            
            this['payment_amount'] = parseFloat(data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue);
            
            this['payment_status_desc'] = (data.getElementsByTagName("payment_status_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_status_desc")[0].lastChild.nodeValue : "";
            
            this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['dr_bank_acc_no'] = (data.getElementsByTagName("dr_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['dr_bank_acc_type'] = (data.getElementsByTagName("dr_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['dr_bank_code'] = (data.getElementsByTagName("dr_bank_code")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_code")[0].lastChild.nodeValue : "";
            
            this['dr_bank_ifsc_code'] = (data.getElementsByTagName("dr_bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("dr_bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['cr_bank_code'] = (data.getElementsByTagName("cr_bank_code")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_code")[0].lastChild.nodeValue : "";
            
            this['cr_bank_acc_type'] = (data.getElementsByTagName("cr_bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['cr_bank_acc_no'] = (data.getElementsByTagName("cr_bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['cr_bank_ifsc_code'] = (data.getElementsByTagName("cr_bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("cr_bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['inter_aggrorgn_code'] = (data.getElementsByTagName("inter_aggrorgn_code")[0].lastChild != null) ? data.getElementsByTagName("inter_aggrorgn_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['milkman_code'] = data['milkman_code'];
            
            this['milk_qty'] = data['milk_qty'];
            
            this['calc_amount'] = data['calc_amount'];
            
            this['advance_amount'] = data['advance_amount'];
            
            this['payment_amount'] = data['payment_amount'];
            
            this['payment_status_desc'] = data['payment_status_desc'];
            
            this['payment_no'] = data['payment_no'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['dr_bank_acc_no'] = data['dr_bank_acc_no'];
            
            this['dr_bank_acc_type'] = data['dr_bank_acc_type'];
            
            this['dr_bank_code'] = data['dr_bank_code'];
            
            this['dr_bank_ifsc_code'] = data['dr_bank_ifsc_code'];
            
            this['cr_bank_code'] = data['cr_bank_code'];
            
            this['cr_bank_acc_type'] = data['cr_bank_acc_type'];
            
            this['cr_bank_acc_no'] = data['cr_bank_acc_no'];
            
            this['cr_bank_ifsc_code'] = data['cr_bank_ifsc_code'];
            
            this['inter_aggrorgn_code'] = data['inter_aggrorgn_code'];
        }
    }
}

function retrievePaymentAdviceResponsePaymentSummary(data)
{
    /**
     * @member {Decimal} total_gross_amount
     */
    this['total_gross_amount'] = null;
    
    /**
     * @member {Decimal} total_advance_amount
     */
    this['total_advance_amount'] = null;
    
    /**
     * @member {Decimal} total_net_amount
     */
    this['total_net_amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['total_gross_amount'] = parseFloat(data.getElementsByTagName("total_gross_amount")[0].lastChild.nodeValue);
            
            this['total_advance_amount'] = parseFloat(data.getElementsByTagName("total_advance_amount")[0].lastChild.nodeValue);
            
            this['total_net_amount'] = parseFloat(data.getElementsByTagName("total_net_amount")[0].lastChild.nodeValue);
        }
        else {
            this['total_gross_amount'] = data['total_gross_amount'];
            
            this['total_advance_amount'] = data['total_advance_amount'];
            
            this['total_net_amount'] = data['total_net_amount'];
        }
    }
}

