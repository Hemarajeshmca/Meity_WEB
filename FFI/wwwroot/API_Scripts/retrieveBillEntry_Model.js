var responseDataFormat = "JSON";

function retrieveBillEntryRequest(data)
{
    /**
     * @member {retrieveBillEntryRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveBillEntryRequestcontext(data['context']);
    }
}

function retrieveBillEntryRequestcontext(data)
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
     * @member {retrieveBillEntryRequestHeader} Header
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
            this['Header'] = new retrieveBillEntryRequestHeader(data['Header']);
    }
}

function retrieveBillEntryRequestHeader(data)
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
        
    }
}

function retrieveBillEntryResponse(data, format)
{
    /**
     * @member {retrieveBillEntryResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveBillEntryResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveBillEntryResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveBillEntryResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveBillEntryResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveBillEntryResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveBillEntryResponseApplicationException(data)
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

function retrieveBillEntryResponsecontext(data)
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
     * @member {retrieveBillEntryResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveBillEntryResponseBillDtl} BillDtl
     */
    this['BillDtl'] = null;
    
    /**
     * @member {retrieveBillEntryResponseRetailSales} RetailSales
     */
    this['RetailSales'] = null;
    
    /**
     * @member {retrieveBillEntryResponseTransferredMilk} TransferredMilk
     */
    this['TransferredMilk'] = null;
    
    /**
     * @member {retrieveBillEntryResponseRetailedMilk} RetailedMilk
     */
    this['RetailedMilk'] = null;
    
    /**
     * @member {retrieveBillEntryResponseSummary} Summary
     */
    this['Summary'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveBillEntryResponseHeader(data.getElementsByTagName("Header")[0]);
            
            BillDtl = [];
            for(BillDtlchildi = 0; BillDtlchildi < data.getElementsByTagName("BillDtl").length; BillDtlchildi++)
            {
                BillDtl.push(new retrieveBillEntryResponseBillDtl(data.getElementsByTagName("BillDtl")[BillDtlchildi]));
            }
            if(data.getElementsByTagName("BillDtl").length > 0)
                this['BillDtl'] = BillDtl;
            
            RetailSales = [];
            for(RetailSaleschildi = 0; RetailSaleschildi < data.getElementsByTagName("RetailSales").length; RetailSaleschildi++)
            {
                RetailSales.push(new retrieveBillEntryResponseRetailSales(data.getElementsByTagName("RetailSales")[RetailSaleschildi]));
            }
            if(data.getElementsByTagName("RetailSales").length > 0)
                this['RetailSales'] = RetailSales;
            
            TransferredMilk = [];
            for(TransferredMilkchildi = 0; TransferredMilkchildi < data.getElementsByTagName("TransferredMilk").length; TransferredMilkchildi++)
            {
                TransferredMilk.push(new retrieveBillEntryResponseTransferredMilk(data.getElementsByTagName("TransferredMilk")[TransferredMilkchildi]));
            }
            if(data.getElementsByTagName("TransferredMilk").length > 0)
                this['TransferredMilk'] = TransferredMilk;
            
            RetailedMilk = [];
            for(RetailedMilkchildi = 0; RetailedMilkchildi < data.getElementsByTagName("RetailedMilk").length; RetailedMilkchildi++)
            {
                RetailedMilk.push(new retrieveBillEntryResponseRetailedMilk(data.getElementsByTagName("RetailedMilk")[RetailedMilkchildi]));
            }
            if(data.getElementsByTagName("RetailedMilk").length > 0)
                this['RetailedMilk'] = RetailedMilk;
            
            this['Summary'] = new retrieveBillEntryResponseSummary(data.getElementsByTagName("Summary")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveBillEntryResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('BillDtl') && data['BillDtl'] != null)
            {
                BillDtl = [];
                for(BillDtlindex = 0; BillDtlindex < data['BillDtl'].length; BillDtlindex++)
                {
                    BillDtl.push(new retrieveBillEntryResponseBillDtl(data['BillDtl'][BillDtlindex]));
                }
                this['BillDtl'] = BillDtl;
            }
            
            
            if(data.hasOwnProperty('RetailSales') && data['RetailSales'] != null)
            {
                RetailSales = [];
                for(RetailSalesindex = 0; RetailSalesindex < data['RetailSales'].length; RetailSalesindex++)
                {
                    RetailSales.push(new retrieveBillEntryResponseRetailSales(data['RetailSales'][RetailSalesindex]));
                }
                this['RetailSales'] = RetailSales;
            }
            
            
            if(data.hasOwnProperty('TransferredMilk') && data['TransferredMilk'] != null)
            {
                TransferredMilk = [];
                for(TransferredMilkindex = 0; TransferredMilkindex < data['TransferredMilk'].length; TransferredMilkindex++)
                {
                    TransferredMilk.push(new retrieveBillEntryResponseTransferredMilk(data['TransferredMilk'][TransferredMilkindex]));
                }
                this['TransferredMilk'] = TransferredMilk;
            }
            
            
            if(data.hasOwnProperty('RetailedMilk') && data['RetailedMilk'] != null)
            {
                RetailedMilk = [];
                for(RetailedMilkindex = 0; RetailedMilkindex < data['RetailedMilk'].length; RetailedMilkindex++)
                {
                    RetailedMilk.push(new retrieveBillEntryResponseRetailedMilk(data['RetailedMilk'][RetailedMilkindex]));
                }
                this['RetailedMilk'] = RetailedMilk;
            }
            
            
            this['Summary'] = new retrieveBillEntryResponseSummary(data['Summary']);
        }
    }
}

function retrieveBillEntryResponseHeader(data)
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
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['ccbill_rowid'] = parseInt(data.getElementsByTagName("ccbill_rowid")[0].lastChild.nodeValue);
            
            this['ccbill_no'] = (data.getElementsByTagName("ccbill_no")[0].lastChild != null) ? data.getElementsByTagName("ccbill_no")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['ccbill_rowid'] = data['ccbill_rowid'];
            
            this['ccbill_no'] = data['ccbill_no'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveBillEntryResponseBillDtl(data)
{
    /**
     * @member {Int32} ccbilldtl_rowid
     */
    this['ccbilldtl_rowid'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} cp_aggrloc_desc
     */
    this['cp_aggrloc_desc'] = null;
    
    /**
     * @member {String} route_code
     */
    this['route_code'] = null;
    
    /**
     * @member {String} route_desc
     */
    this['route_desc'] = null;
    
    /**
     * @member {String} cpbill_no
     */
    this['cpbill_no'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['ccbilldtl_rowid'] = parseInt(data.getElementsByTagName("ccbilldtl_rowid")[0].lastChild.nodeValue);
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['route_code'] = (data.getElementsByTagName("route_code")[0].lastChild != null) ? data.getElementsByTagName("route_code")[0].lastChild.nodeValue : "";
            
            this['route_desc'] = (data.getElementsByTagName("route_desc")[0].lastChild != null) ? data.getElementsByTagName("route_desc")[0].lastChild.nodeValue : "";
            
            this['cpbill_no'] = (data.getElementsByTagName("cpbill_no")[0].lastChild != null) ? data.getElementsByTagName("cpbill_no")[0].lastChild.nodeValue : "";
            
            this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['ccbilldtl_rowid'] = data['ccbilldtl_rowid'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['route_code'] = data['route_code'];
            
            this['route_desc'] = data['route_desc'];
            
            this['cpbill_no'] = data['cpbill_no'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveBillEntryResponseRetailSales(data)
{
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} milk_date
     */
    this['milk_date'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {String} milk_from_desc
     */
    this['milk_from_desc'] = null;
    
    /**
     * @member {Decimal} milk_retailed_qty
     */
    this['milk_retailed_qty'] = null;
    
    /**
     * @member {String} retailed_to
     */
    this['retailed_to'] = null;
    
    /**
     * @member {Decimal} retail_rate
     */
    this['retail_rate'] = null;
    
    /**
     * @member {Decimal} retail_amount
     */
    this['retail_amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['milksession_code'] = (data.getElementsByTagName("milksession_code")[0].lastChild != null) ? data.getElementsByTagName("milksession_code")[0].lastChild.nodeValue : "";
            
            this['milk_date'] = (data.getElementsByTagName("milk_date")[0].lastChild != null) ? data.getElementsByTagName("milk_date")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['milk_from_desc'] = (data.getElementsByTagName("milk_from_desc")[0].lastChild != null) ? data.getElementsByTagName("milk_from_desc")[0].lastChild.nodeValue : "";
            
            this['milk_retailed_qty'] = parseFloat(data.getElementsByTagName("milk_retailed_qty")[0].lastChild.nodeValue);
            
            this['retailed_to'] = (data.getElementsByTagName("retailed_to")[0].lastChild != null) ? data.getElementsByTagName("retailed_to")[0].lastChild.nodeValue : "";
            
            this['retail_rate'] = parseFloat(data.getElementsByTagName("retail_rate")[0].lastChild.nodeValue);
            
            this['retail_amount'] = parseFloat(data.getElementsByTagName("retail_amount")[0].lastChild.nodeValue);
        }
        else {
            this['milksession_code'] = data['milksession_code'];
            
            this['milk_date'] = data['milk_date'];
            
            this['milk_from'] = data['milk_from'];
            
            this['milk_from_desc'] = data['milk_from_desc'];
            
            this['milk_retailed_qty'] = data['milk_retailed_qty'];
            
            this['retailed_to'] = data['retailed_to'];
            
            this['retail_rate'] = data['retail_rate'];
            
            this['retail_amount'] = data['retail_amount'];
        }
    }
}

function retrieveBillEntryResponseTransferredMilk(data)
{
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {String} milk_from_desc
     */
    this['milk_from_desc'] = null;
    
    /**
     * @member {Decimal} total_milk_accept
     */
    this['total_milk_accept'] = null;
    
    /**
     * @member {Decimal} total_amount_accept
     */
    this['total_amount_accept'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['milk_from_desc'] = (data.getElementsByTagName("milk_from_desc")[0].lastChild != null) ? data.getElementsByTagName("milk_from_desc")[0].lastChild.nodeValue : "";
            
            this['total_milk_accept'] = parseFloat(data.getElementsByTagName("total_milk_accept")[0].lastChild.nodeValue);
            
            this['total_amount_accept'] = parseFloat(data.getElementsByTagName("total_amount_accept")[0].lastChild.nodeValue);
        }
        else {
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['milk_from_desc'] = data['milk_from_desc'];
            
            this['total_milk_accept'] = data['total_milk_accept'];
            
            this['total_amount_accept'] = data['total_amount_accept'];
        }
    }
}

function retrieveBillEntryResponseRetailedMilk(data)
{
    /**
     * @member {String} retailed_to
     */
    this['retailed_to'] = null;
    
    /**
     * @member {String} milk_from_desc
     */
    this['milk_from_desc'] = null;
    
    /**
     * @member {Decimal} total_milk_retail
     */
    this['total_milk_retail'] = null;
    
    /**
     * @member {Decimal} total_amount_retail
     */
    this['total_amount_retail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['retailed_to'] = (data.getElementsByTagName("retailed_to")[0].lastChild != null) ? data.getElementsByTagName("retailed_to")[0].lastChild.nodeValue : "";
            
            this['milk_from_desc'] = (data.getElementsByTagName("milk_from_desc")[0].lastChild != null) ? data.getElementsByTagName("milk_from_desc")[0].lastChild.nodeValue : "";
            
            this['total_milk_retail'] = parseFloat(data.getElementsByTagName("total_milk_retail")[0].lastChild.nodeValue);
            
            this['total_amount_retail'] = parseFloat(data.getElementsByTagName("total_amount_retail")[0].lastChild.nodeValue);
        }
        else {
            this['retailed_to'] = data['retailed_to'];
            
            this['milk_from_desc'] = data['milk_from_desc'];
            
            this['total_milk_retail'] = data['total_milk_retail'];
            
            this['total_amount_retail'] = data['total_amount_retail'];
        }
    }
}

function retrieveBillEntryResponseSummary(data)
{
    /**
     * @member {Decimal} sum_milk_accept
     */
    this['sum_milk_accept'] = null;
    
    /**
     * @member {Decimal} sum_amount_accept
     */
    this['sum_amount_accept'] = null;
    
    /**
     * @member {Decimal} sum_milk_retail
     */
    this['sum_milk_retail'] = null;
    
    /**
     * @member {Decimal} sum_amount_retail
     */
    this['sum_amount_retail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['sum_milk_accept'] = parseFloat(data.getElementsByTagName("sum_milk_accept")[0].lastChild.nodeValue);
            
            this['sum_amount_accept'] = parseFloat(data.getElementsByTagName("sum_amount_accept")[0].lastChild.nodeValue);
            
            this['sum_milk_retail'] = parseFloat(data.getElementsByTagName("sum_milk_retail")[0].lastChild.nodeValue);
            
            this['sum_amount_retail'] = parseFloat(data.getElementsByTagName("sum_amount_retail")[0].lastChild.nodeValue);
        }
        else {
            this['sum_milk_accept'] = data['sum_milk_accept'];
            
            this['sum_amount_accept'] = data['sum_amount_accept'];
            
            this['sum_milk_retail'] = data['sum_milk_retail'];
            
            this['sum_amount_retail'] = data['sum_amount_retail'];
        }
    }
}

