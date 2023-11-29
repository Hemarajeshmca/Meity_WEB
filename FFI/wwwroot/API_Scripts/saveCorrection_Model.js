var responseDataFormat = "JSON";

function saveCorrectionRequest(data)
{
    /**
     * @member {saveCorrectionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveCorrectionRequestcontext(data['context']);
    }
}

function saveCorrectionRequestcontext(data)
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
     * @member {saveCorrectionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveCorrectionRequestCollection} Collection
     */
    this['Collection'] = null;
    
    /**
     * @member {saveCorrectionRequestTransfer} Transfer
     */
    this['Transfer'] = null;
    
    /**
     * @member {saveCorrectionRequestRetailSales} RetailSales
     */
    this['RetailSales'] = null;
    
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
            this['Header'] = new saveCorrectionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Collection') && data['Collection'] != null)
        {
            Collection = [];
            for(Collectionindex = 0; Collectionindex < data['Collection'].length; Collectionindex++)
            {
                Collection.push(new saveCorrectionRequestCollection(data['Collection'][Collectionindex]));
            }
            this['Collection'] = Collection;
        }
        
        if(data.hasOwnProperty('Transfer') && data['Transfer'] != null)
        {
            Transfer = [];
            for(Transferindex = 0; Transferindex < data['Transfer'].length; Transferindex++)
            {
                Transfer.push(new saveCorrectionRequestTransfer(data['Transfer'][Transferindex]));
            }
            this['Transfer'] = Transfer;
        }
        
        if(data.hasOwnProperty('RetailSales') && data['RetailSales'] != null)
        {
            RetailSales = [];
            for(RetailSalesindex = 0; RetailSalesindex < data['RetailSales'].length; RetailSalesindex++)
            {
                RetailSales.push(new saveCorrectionRequestRetailSales(data['RetailSales'][RetailSalesindex]));
            }
            this['RetailSales'] = RetailSales;
        }
    }
}

function saveCorrectionRequestHeader(data)
{
    /**
     * @member {Int32} milkcorrection_rowid
     */
    this['milkcorrection_rowid'] = null;
    
    /**
     * @member {String} milkcorrection_code
     */
    this['milkcorrection_code'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} correction_date
     */
    this['correction_date'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} correction_purpose_code
     */
    this['correction_purpose_code'] = null;
    
    /**
     * @member {String} process_status_code
     */
    this['process_status_code'] = null;
    
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
    
    if(data)
    {
        if(data.hasOwnProperty('milkcorrection_rowid'))
            this['milkcorrection_rowid'] = data['milkcorrection_rowid'];
        
        if(data.hasOwnProperty('milkcorrection_code'))
            this['milkcorrection_code'] = data['milkcorrection_code'];
        
        if(data.hasOwnProperty('milksession_code'))
            this['milksession_code'] = data['milksession_code'];
        
        if(data.hasOwnProperty('correction_date'))
            this['correction_date'] = data['correction_date'];
        
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
        if(data.hasOwnProperty('correction_purpose_code'))
            this['correction_purpose_code'] = data['correction_purpose_code'];
        
        if(data.hasOwnProperty('process_status_code'))
            this['process_status_code'] = data['process_status_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveCorrectionRequestCollection(data)
{
    /**
     * @member {Int32} milkmansessiondtlold_rowid
     */
    this['milkmansessiondtlold_rowid'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} milkman_code
     */
    this['milkman_code'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {Decimal} fat_percent
     */
    this['fat_percent'] = null;
    
    /**
     * @member {Decimal} snf_percent
     */
    this['snf_percent'] = null;
    
    /**
     * @member {Decimal} awm_percent
     */
    this['awm_percent'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {Decimal} corrected_qty
     */
    this['corrected_qty'] = null;
    
    /**
     * @member {String} mobile_app_ref_no
     */
    this['mobile_app_ref_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('milkmansessiondtlold_rowid'))
            this['milkmansessiondtlold_rowid'] = data['milkmansessiondtlold_rowid'];
        
        if(data.hasOwnProperty('milksession_code'))
            this['milksession_code'] = data['milksession_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('milkman_code'))
            this['milkman_code'] = data['milkman_code'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('fat_percent'))
            this['fat_percent'] = data['fat_percent'];
        
        if(data.hasOwnProperty('snf_percent'))
            this['snf_percent'] = data['snf_percent'];
        
        if(data.hasOwnProperty('awm_percent'))
            this['awm_percent'] = data['awm_percent'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('corrected_qty'))
            this['corrected_qty'] = data['corrected_qty'];
        
        if(data.hasOwnProperty('mobile_app_ref_no'))
            this['mobile_app_ref_no'] = data['mobile_app_ref_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCorrectionRequestTransfer(data)
{
    /**
     * @member {Int32} milksesssiondtlold_rowid
     */
    this['milksesssiondtlold_rowid'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {Decimal} fat_percent
     */
    this['fat_percent'] = null;
    
    /**
     * @member {Decimal} snf_percent
     */
    this['snf_percent'] = null;
    
    /**
     * @member {Decimal} awm_percent
     */
    this['awm_percent'] = null;
    
    /**
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {Decimal} cp_transferred_qty
     */
    this['cp_transferred_qty'] = null;
    
    /**
     * @member {Decimal} cp_received_qty
     */
    this['cp_received_qty'] = null;
    
    /**
     * @member {String} cp_accepted_qty
     */
    this['cp_accepted_qty'] = null;
    
    /**
     * @member {Decimal} corrected_qty
     */
    this['corrected_qty'] = null;
    
    /**
     * @member {Decimal} milk_amount
     */
    this['milk_amount'] = null;
    
    /**
     * @member {String} despatch_vehicle
     */
    this['despatch_vehicle'] = null;
    
    /**
     * @member {String} despatch_remark
     */
    this['despatch_remark'] = null;
    
    /**
     * @member {String} process_status_code
     */
    this['process_status_code'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mobile_app_ref_no
     */
    this['mobile_app_ref_no'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('milksesssiondtlold_rowid'))
            this['milksesssiondtlold_rowid'] = data['milksesssiondtlold_rowid'];
        
        if(data.hasOwnProperty('milksession_code'))
            this['milksession_code'] = data['milksession_code'];
        
        if(data.hasOwnProperty('cp_aggrloc_code'))
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('fat_percent'))
            this['fat_percent'] = data['fat_percent'];
        
        if(data.hasOwnProperty('snf_percent'))
            this['snf_percent'] = data['snf_percent'];
        
        if(data.hasOwnProperty('awm_percent'))
            this['awm_percent'] = data['awm_percent'];
        
        if(data.hasOwnProperty('milk_rate'))
            this['milk_rate'] = data['milk_rate'];
        
        if(data.hasOwnProperty('cp_transferred_qty'))
            this['cp_transferred_qty'] = data['cp_transferred_qty'];
        
        if(data.hasOwnProperty('cp_received_qty'))
            this['cp_received_qty'] = data['cp_received_qty'];
        
        if(data.hasOwnProperty('cp_accepted_qty'))
            this['cp_accepted_qty'] = data['cp_accepted_qty'];
        
        if(data.hasOwnProperty('corrected_qty'))
            this['corrected_qty'] = data['corrected_qty'];
        
        if(data.hasOwnProperty('milk_amount'))
            this['milk_amount'] = data['milk_amount'];
        
        if(data.hasOwnProperty('despatch_vehicle'))
            this['despatch_vehicle'] = data['despatch_vehicle'];
        
        if(data.hasOwnProperty('despatch_remark'))
            this['despatch_remark'] = data['despatch_remark'];
        
        if(data.hasOwnProperty('process_status_code'))
            this['process_status_code'] = data['process_status_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mobile_app_ref_no'))
            this['mobile_app_ref_no'] = data['mobile_app_ref_no'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCorrectionRequestRetailSales(data)
{
    /**
     * @member {Int32} milkretailsaledtlold_rowid
     */
    this['milkretailsaledtlold_rowid'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} cust_name
     */
    this['cust_name'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {Decimal} fat_percent
     */
    this['fat_percent'] = null;
    
    /**
     * @member {Decimal} snf_percent
     */
    this['snf_percent'] = null;
    
    /**
     * @member {Decimal} awm_percent
     */
    this['awm_percent'] = null;
    
    /**
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {Decimal} corrected_retail_rate
     */
    this['corrected_retail_rate'] = null;
    
    /**
     * @member {Decimal} retailsale_qty
     */
    this['retailsale_qty'] = null;
    
    /**
     * @member {Decimal} corrected_qty
     */
    this['corrected_qty'] = null;
    
    /**
     * @member {Decimal} milk_amount
     */
    this['milk_amount'] = null;
    
    /**
     * @member {String} retailsale_remark
     */
    this['retailsale_remark'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mobile_app_ref_no
     */
    this['mobile_app_ref_no'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('milkretailsaledtlold_rowid'))
            this['milkretailsaledtlold_rowid'] = data['milkretailsaledtlold_rowid'];
        
        if(data.hasOwnProperty('milksession_code'))
            this['milksession_code'] = data['milksession_code'];
        
        if(data.hasOwnProperty('cust_name'))
            this['cust_name'] = data['cust_name'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('fat_percent'))
            this['fat_percent'] = data['fat_percent'];
        
        if(data.hasOwnProperty('snf_percent'))
            this['snf_percent'] = data['snf_percent'];
        
        if(data.hasOwnProperty('awm_percent'))
            this['awm_percent'] = data['awm_percent'];
        
        if(data.hasOwnProperty('milk_rate'))
            this['milk_rate'] = data['milk_rate'];
        
        if(data.hasOwnProperty('corrected_retail_rate'))
            this['corrected_retail_rate'] = data['corrected_retail_rate'];
        
        if(data.hasOwnProperty('retailsale_qty'))
            this['retailsale_qty'] = data['retailsale_qty'];
        
        if(data.hasOwnProperty('corrected_qty'))
            this['corrected_qty'] = data['corrected_qty'];
        
        if(data.hasOwnProperty('milk_amount'))
            this['milk_amount'] = data['milk_amount'];
        
        if(data.hasOwnProperty('retailsale_remark'))
            this['retailsale_remark'] = data['retailsale_remark'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mobile_app_ref_no'))
            this['mobile_app_ref_no'] = data['mobile_app_ref_no'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCorrectionResponse(data, format)
{
    /**
     * @member {saveCorrectionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveCorrectionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveCorrectionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveCorrectionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveCorrectionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveCorrectionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveCorrectionResponseApplicationException(data)
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

function saveCorrectionResponsecontext(data)
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
     * @member {saveCorrectionResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveCorrectionResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveCorrectionResponseHeader(data['Header']);
        }
    }
}

function saveCorrectionResponseHeader(data)
{
    /**
     * @member {Int32} milkcorrection_rowid
     */
    this['milkcorrection_rowid'] = null;
    
    /**
     * @member {String} milkcorrection_code
     */
    this['milkcorrection_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['milkcorrection_rowid'] = parseInt(data.getElementsByTagName("milkcorrection_rowid")[0].lastChild.nodeValue);
            
            this['milkcorrection_code'] = (data.getElementsByTagName("milkcorrection_code")[0].lastChild != null) ? data.getElementsByTagName("milkcorrection_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['milkcorrection_rowid'] = data['milkcorrection_rowid'];
            
            this['milkcorrection_code'] = data['milkcorrection_code'];
        }
    }
}

