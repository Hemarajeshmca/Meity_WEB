var responseDataFormat = "JSON";

function retrievePaymentAdviceBillDetailRequest(data)
{
    /**
     * @member {retrievePaymentAdviceBillDetailRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievePaymentAdviceBillDetailRequestcontext(data['context']);
    }
}

function retrievePaymentAdviceBillDetailRequestcontext(data)
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
     * @member {retrievePaymentAdviceBillDetailRequestHeader} Header
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
            this['Header'] = new retrievePaymentAdviceBillDetailRequestHeader(data['Header']);
    }
}

function retrievePaymentAdviceBillDetailRequestHeader(data)
{
    /**
     * @member {String} ccbill_no
     */
    this['ccbill_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ccbill_no'))
            this['ccbill_no'] = data['ccbill_no'];
        
    }
}

function retrievePaymentAdviceBillDetailResponse(data, format)
{
    /**
     * @member {retrievePaymentAdviceBillDetailResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievePaymentAdviceBillDetailResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievePaymentAdviceBillDetailResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievePaymentAdviceBillDetailResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievePaymentAdviceBillDetailResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievePaymentAdviceBillDetailResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievePaymentAdviceBillDetailResponseApplicationException(data)
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

function retrievePaymentAdviceBillDetailResponsecontext(data)
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
     * @member {retrievePaymentAdviceBillDetailResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrievePaymentAdviceBillDetailResponseBillDetail} BillDetail
     */
    this['BillDetail'] = null;
    
    /**
     * @member {retrievePaymentAdviceBillDetailResponseRetailDetail} RetailDetail
     */
    this['RetailDetail'] = null;
    
    /**
     * @member {retrievePaymentAdviceBillDetailResponseOverAllBillEntry} OverAllBillEntry
     */
    this['OverAllBillEntry'] = null;
    
    /**
     * @member {retrievePaymentAdviceBillDetailResponsesummary} summary
     */
    this['summary'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrievePaymentAdviceBillDetailResponseHeader(data.getElementsByTagName("Header")[0]);
            
            BillDetail = [];
            for(BillDetailchildi = 0; BillDetailchildi < data.getElementsByTagName("BillDetail").length; BillDetailchildi++)
            {
                BillDetail.push(new retrievePaymentAdviceBillDetailResponseBillDetail(data.getElementsByTagName("BillDetail")[BillDetailchildi]));
            }
            if(data.getElementsByTagName("BillDetail").length > 0)
                this['BillDetail'] = BillDetail;
            
            RetailDetail = [];
            for(RetailDetailchildi = 0; RetailDetailchildi < data.getElementsByTagName("RetailDetail").length; RetailDetailchildi++)
            {
                RetailDetail.push(new retrievePaymentAdviceBillDetailResponseRetailDetail(data.getElementsByTagName("RetailDetail")[RetailDetailchildi]));
            }
            if(data.getElementsByTagName("RetailDetail").length > 0)
                this['RetailDetail'] = RetailDetail;
            
            OverAllBillEntry = [];
            for(OverAllBillEntrychildi = 0; OverAllBillEntrychildi < data.getElementsByTagName("OverAllBillEntry").length; OverAllBillEntrychildi++)
            {
                OverAllBillEntry.push(new retrievePaymentAdviceBillDetailResponseOverAllBillEntry(data.getElementsByTagName("OverAllBillEntry")[OverAllBillEntrychildi]));
            }
            if(data.getElementsByTagName("OverAllBillEntry").length > 0)
                this['OverAllBillEntry'] = OverAllBillEntry;
            
            this['summary'] = new retrievePaymentAdviceBillDetailResponsesummary(data.getElementsByTagName("summary")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrievePaymentAdviceBillDetailResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('BillDetail') && data['BillDetail'] != null)
            {
                BillDetail = [];
                for(BillDetailindex = 0; BillDetailindex < data['BillDetail'].length; BillDetailindex++)
                {
                    BillDetail.push(new retrievePaymentAdviceBillDetailResponseBillDetail(data['BillDetail'][BillDetailindex]));
                }
                this['BillDetail'] = BillDetail;
            }
            
            
            if(data.hasOwnProperty('RetailDetail') && data['RetailDetail'] != null)
            {
                RetailDetail = [];
                for(RetailDetailindex = 0; RetailDetailindex < data['RetailDetail'].length; RetailDetailindex++)
                {
                    RetailDetail.push(new retrievePaymentAdviceBillDetailResponseRetailDetail(data['RetailDetail'][RetailDetailindex]));
                }
                this['RetailDetail'] = RetailDetail;
            }
            
            
            if(data.hasOwnProperty('OverAllBillEntry') && data['OverAllBillEntry'] != null)
            {
                OverAllBillEntry = [];
                for(OverAllBillEntryindex = 0; OverAllBillEntryindex < data['OverAllBillEntry'].length; OverAllBillEntryindex++)
                {
                    OverAllBillEntry.push(new retrievePaymentAdviceBillDetailResponseOverAllBillEntry(data['OverAllBillEntry'][OverAllBillEntryindex]));
                }
                this['OverAllBillEntry'] = OverAllBillEntry;
            }
            
            
            this['summary'] = new retrievePaymentAdviceBillDetailResponsesummary(data['summary']);
        }
    }
}

function retrievePaymentAdviceBillDetailResponseHeader(data)
{
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['ccbill_no'] = (data.getElementsByTagName("ccbill_no")[0].lastChild != null) ? data.getElementsByTagName("ccbill_no")[0].lastChild.nodeValue : "";
            
            this['milk_supply_period'] = (data.getElementsByTagName("milk_supply_period")[0].lastChild != null) ? data.getElementsByTagName("milk_supply_period")[0].lastChild.nodeValue : "";
            
            this['process_payment'] = (data.getElementsByTagName("process_payment")[0].lastChild != null) ? data.getElementsByTagName("process_payment")[0].lastChild.nodeValue : "";
        }
        else {
            this['ccbill_no'] = data['ccbill_no'];
            
            this['milk_supply_period'] = data['milk_supply_period'];
            
            this['process_payment'] = data['process_payment'];
        }
    }
}

function retrievePaymentAdviceBillDetailResponseBillDetail(data)
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

function retrievePaymentAdviceBillDetailResponseRetailDetail(data)
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

function retrievePaymentAdviceBillDetailResponseOverAllBillEntry(data)
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

function retrievePaymentAdviceBillDetailResponsesummary(data)
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

