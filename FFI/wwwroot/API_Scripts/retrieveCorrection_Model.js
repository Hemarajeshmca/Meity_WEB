var responseDataFormat = "JSON";

function retrieveCorrectionRequest(data)
{
    /**
     * @member {retrieveCorrectionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCorrectionRequestcontext(data['context']);
    }
}

function retrieveCorrectionRequestcontext(data)
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
     * @member {retrieveCorrectionRequestHeader} Header
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
            this['Header'] = new retrieveCorrectionRequestHeader(data['Header']);
    }
}

function retrieveCorrectionRequestHeader(data)
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
        if(data.hasOwnProperty('milkcorrection_rowid'))
            this['milkcorrection_rowid'] = data['milkcorrection_rowid'];
        
        if(data.hasOwnProperty('milkcorrection_code'))
            this['milkcorrection_code'] = data['milkcorrection_code'];
        
    }
}

function retrieveCorrectionResponse(data, format)
{
    /**
     * @member {retrieveCorrectionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCorrectionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCorrectionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCorrectionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCorrectionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCorrectionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCorrectionResponseApplicationException(data)
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

function retrieveCorrectionResponsecontext(data)
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
     * @member {retrieveCorrectionResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveCorrectionResponseCollection} Collection
     */
    this['Collection'] = null;
    
    /**
     * @member {retrieveCorrectionResponseTransfer} Transfer
     */
    this['Transfer'] = null;
    
    /**
     * @member {retrieveCorrectionResponseRetailSales} RetailSales
     */
    this['RetailSales'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCorrectionResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Collection = [];
            for(Collectionchildi = 0; Collectionchildi < data.getElementsByTagName("Collection").length; Collectionchildi++)
            {
                Collection.push(new retrieveCorrectionResponseCollection(data.getElementsByTagName("Collection")[Collectionchildi]));
            }
            if(data.getElementsByTagName("Collection").length > 0)
                this['Collection'] = Collection;
            
            Transfer = [];
            for(Transferchildi = 0; Transferchildi < data.getElementsByTagName("Transfer").length; Transferchildi++)
            {
                Transfer.push(new retrieveCorrectionResponseTransfer(data.getElementsByTagName("Transfer")[Transferchildi]));
            }
            if(data.getElementsByTagName("Transfer").length > 0)
                this['Transfer'] = Transfer;
            
            RetailSales = [];
            for(RetailSaleschildi = 0; RetailSaleschildi < data.getElementsByTagName("RetailSales").length; RetailSaleschildi++)
            {
                RetailSales.push(new retrieveCorrectionResponseRetailSales(data.getElementsByTagName("RetailSales")[RetailSaleschildi]));
            }
            if(data.getElementsByTagName("RetailSales").length > 0)
                this['RetailSales'] = RetailSales;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCorrectionResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Collection') && data['Collection'] != null)
            {
                Collection = [];
                for(Collectionindex = 0; Collectionindex < data['Collection'].length; Collectionindex++)
                {
                    Collection.push(new retrieveCorrectionResponseCollection(data['Collection'][Collectionindex]));
                }
                this['Collection'] = Collection;
            }
            
            
            if(data.hasOwnProperty('Transfer') && data['Transfer'] != null)
            {
                Transfer = [];
                for(Transferindex = 0; Transferindex < data['Transfer'].length; Transferindex++)
                {
                    Transfer.push(new retrieveCorrectionResponseTransfer(data['Transfer'][Transferindex]));
                }
                this['Transfer'] = Transfer;
            }
            
            
            if(data.hasOwnProperty('RetailSales') && data['RetailSales'] != null)
            {
                RetailSales = [];
                for(RetailSalesindex = 0; RetailSalesindex < data['RetailSales'].length; RetailSalesindex++)
                {
                    RetailSales.push(new retrieveCorrectionResponseRetailSales(data['RetailSales'][RetailSalesindex]));
                }
                this['RetailSales'] = RetailSales;
            }
        }
    }
}

function retrieveCorrectionResponseHeader(data)
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
     * @member {String} milkcorrection_desc
     */
    this['milkcorrection_desc'] = null;
    
    /**
     * @member {String} milksession_code
     */
    this['milksession_code'] = null;
    
    /**
     * @member {String} milksession_desc
     */
    this['milksession_desc'] = null;
    
    /**
     * @member {String} correction_date
     */
    this['correction_date'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_desc
     */
    this['cc_aggrloc_desc'] = null;
    
    /**
     * @member {String} correction_purpose_code
     */
    this['correction_purpose_code'] = null;
    
    /**
     * @member {String} process_status_code
     */
    this['process_status_code'] = null;
    
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
            this['milkcorrection_rowid'] = parseInt(data.getElementsByTagName("milkcorrection_rowid")[0].lastChild.nodeValue);
            
            this['milkcorrection_code'] = (data.getElementsByTagName("milkcorrection_code")[0].lastChild != null) ? data.getElementsByTagName("milkcorrection_code")[0].lastChild.nodeValue : "";
            
            this['milkcorrection_desc'] = (data.getElementsByTagName("milkcorrection_desc")[0].lastChild != null) ? data.getElementsByTagName("milkcorrection_desc")[0].lastChild.nodeValue : "";
            
            this['milksession_code'] = (data.getElementsByTagName("milksession_code")[0].lastChild != null) ? data.getElementsByTagName("milksession_code")[0].lastChild.nodeValue : "";
            
            this['milksession_desc'] = (data.getElementsByTagName("milksession_desc")[0].lastChild != null) ? data.getElementsByTagName("milksession_desc")[0].lastChild.nodeValue : "";
            
            this['correction_date'] = (data.getElementsByTagName("correction_date")[0].lastChild != null) ? data.getElementsByTagName("correction_date")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_code'] = (data.getElementsByTagName("cc_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cc_aggrloc_desc'] = (data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cc_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['correction_purpose_code'] = (data.getElementsByTagName("correction_purpose_code")[0].lastChild != null) ? data.getElementsByTagName("correction_purpose_code")[0].lastChild.nodeValue : "";
            
            this['process_status_code'] = (data.getElementsByTagName("process_status_code")[0].lastChild != null) ? data.getElementsByTagName("process_status_code")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['milkcorrection_rowid'] = data['milkcorrection_rowid'];
            
            this['milkcorrection_code'] = data['milkcorrection_code'];
            
            this['milkcorrection_desc'] = data['milkcorrection_desc'];
            
            this['milksession_code'] = data['milksession_code'];
            
            this['milksession_desc'] = data['milksession_desc'];
            
            this['correction_date'] = data['correction_date'];
            
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
            
            this['cc_aggrloc_desc'] = data['cc_aggrloc_desc'];
            
            this['correction_purpose_code'] = data['correction_purpose_code'];
            
            this['process_status_code'] = data['process_status_code'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveCorrectionResponseCollection(data)
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
     * @member {String} milksession_desc
     */
    this['milksession_desc'] = null;
    
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
     * @member {String} milkman_name
     */
    this['milkman_name'] = null;
    
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
            this['milkmansessiondtlold_rowid'] = parseInt(data.getElementsByTagName("milkmansessiondtlold_rowid")[0].lastChild.nodeValue);
            
            this['milksession_code'] = (data.getElementsByTagName("milksession_code")[0].lastChild != null) ? data.getElementsByTagName("milksession_code")[0].lastChild.nodeValue : "";
            
            this['milksession_desc'] = (data.getElementsByTagName("milksession_desc")[0].lastChild != null) ? data.getElementsByTagName("milksession_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['milkman_code'] = (data.getElementsByTagName("milkman_code")[0].lastChild != null) ? data.getElementsByTagName("milkman_code")[0].lastChild.nodeValue : "";
            
            this['milkman_name'] = (data.getElementsByTagName("milkman_name")[0].lastChild != null) ? data.getElementsByTagName("milkman_name")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['fat_percent'] = parseFloat(data.getElementsByTagName("fat_percent")[0].lastChild.nodeValue);
            
            this['snf_percent'] = parseFloat(data.getElementsByTagName("snf_percent")[0].lastChild.nodeValue);
            
            this['awm_percent'] = parseFloat(data.getElementsByTagName("awm_percent")[0].lastChild.nodeValue);
            
            this['received_qty'] = parseFloat(data.getElementsByTagName("received_qty")[0].lastChild.nodeValue);
            
            this['corrected_qty'] = parseFloat(data.getElementsByTagName("corrected_qty")[0].lastChild.nodeValue);
            
            this['mobile_app_ref_no'] = (data.getElementsByTagName("mobile_app_ref_no")[0].lastChild != null) ? data.getElementsByTagName("mobile_app_ref_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['milkmansessiondtlold_rowid'] = data['milkmansessiondtlold_rowid'];
            
            this['milksession_code'] = data['milksession_code'];
            
            this['milksession_desc'] = data['milksession_desc'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['milkman_code'] = data['milkman_code'];
            
            this['milkman_name'] = data['milkman_name'];
            
            this['milk_from'] = data['milk_from'];
            
            this['fat_percent'] = data['fat_percent'];
            
            this['snf_percent'] = data['snf_percent'];
            
            this['awm_percent'] = data['awm_percent'];
            
            this['received_qty'] = data['received_qty'];
            
            this['corrected_qty'] = data['corrected_qty'];
            
            this['mobile_app_ref_no'] = data['mobile_app_ref_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveCorrectionResponseTransfer(data)
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
     * @member {String} milksession_desc
     */
    this['milksession_desc'] = null;
    
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
     * @member {String} mobile_app_ref_no
     */
    this['mobile_app_ref_no'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['milksesssiondtlold_rowid'] = parseInt(data.getElementsByTagName("milksesssiondtlold_rowid")[0].lastChild.nodeValue);
            
            this['milksession_code'] = (data.getElementsByTagName("milksession_code")[0].lastChild != null) ? data.getElementsByTagName("milksession_code")[0].lastChild.nodeValue : "";
            
            this['milksession_desc'] = (data.getElementsByTagName("milksession_desc")[0].lastChild != null) ? data.getElementsByTagName("milksession_desc")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['fat_percent'] = parseFloat(data.getElementsByTagName("fat_percent")[0].lastChild.nodeValue);
            
            this['snf_percent'] = parseFloat(data.getElementsByTagName("snf_percent")[0].lastChild.nodeValue);
            
            this['awm_percent'] = parseFloat(data.getElementsByTagName("awm_percent")[0].lastChild.nodeValue);
            
            this['milk_rate'] = parseFloat(data.getElementsByTagName("milk_rate")[0].lastChild.nodeValue);
            
            this['cp_transferred_qty'] = parseFloat(data.getElementsByTagName("cp_transferred_qty")[0].lastChild.nodeValue);
            
            this['cp_received_qty'] = parseFloat(data.getElementsByTagName("cp_received_qty")[0].lastChild.nodeValue);
            
            this['cp_accepted_qty'] = (data.getElementsByTagName("cp_accepted_qty")[0].lastChild != null) ? data.getElementsByTagName("cp_accepted_qty")[0].lastChild.nodeValue : "";
            
            this['corrected_qty'] = parseFloat(data.getElementsByTagName("corrected_qty")[0].lastChild.nodeValue);
            
            this['milk_amount'] = parseFloat(data.getElementsByTagName("milk_amount")[0].lastChild.nodeValue);
            
            this['despatch_vehicle'] = (data.getElementsByTagName("despatch_vehicle")[0].lastChild != null) ? data.getElementsByTagName("despatch_vehicle")[0].lastChild.nodeValue : "";
            
            this['despatch_remark'] = (data.getElementsByTagName("despatch_remark")[0].lastChild != null) ? data.getElementsByTagName("despatch_remark")[0].lastChild.nodeValue : "";
            
            this['process_status_code'] = (data.getElementsByTagName("process_status_code")[0].lastChild != null) ? data.getElementsByTagName("process_status_code")[0].lastChild.nodeValue : "";
            
            this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mobile_app_ref_no'] = (data.getElementsByTagName("mobile_app_ref_no")[0].lastChild != null) ? data.getElementsByTagName("mobile_app_ref_no")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['milksesssiondtlold_rowid'] = data['milksesssiondtlold_rowid'];
            
            this['milksession_code'] = data['milksession_code'];
            
            this['milksession_desc'] = data['milksession_desc'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['milk_from'] = data['milk_from'];
            
            this['fat_percent'] = data['fat_percent'];
            
            this['snf_percent'] = data['snf_percent'];
            
            this['awm_percent'] = data['awm_percent'];
            
            this['milk_rate'] = data['milk_rate'];
            
            this['cp_transferred_qty'] = data['cp_transferred_qty'];
            
            this['cp_received_qty'] = data['cp_received_qty'];
            
            this['cp_accepted_qty'] = data['cp_accepted_qty'];
            
            this['corrected_qty'] = data['corrected_qty'];
            
            this['milk_amount'] = data['milk_amount'];
            
            this['despatch_vehicle'] = data['despatch_vehicle'];
            
            this['despatch_remark'] = data['despatch_remark'];
            
            this['process_status_code'] = data['process_status_code'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mobile_app_ref_no'] = data['mobile_app_ref_no'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveCorrectionResponseRetailSales(data)
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
     * @member {String} milksession_desc
     */
    this['milksession_desc'] = null;
    
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
     * @member {Decimal} retailsale_qty
     */
    this['retailsale_qty'] = null;
    
    /**
     * @member {Decimal} corrected_qty
     */
    this['corrected_qty'] = null;
    
    /**
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {Decimal} corrected_retail_rate
     */
    this['corrected_retail_rate'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['milkretailsaledtlold_rowid'] = parseInt(data.getElementsByTagName("milkretailsaledtlold_rowid")[0].lastChild.nodeValue);
            
            this['milksession_code'] = (data.getElementsByTagName("milksession_code")[0].lastChild != null) ? data.getElementsByTagName("milksession_code")[0].lastChild.nodeValue : "";
            
            this['milksession_desc'] = (data.getElementsByTagName("milksession_desc")[0].lastChild != null) ? data.getElementsByTagName("milksession_desc")[0].lastChild.nodeValue : "";
            
            this['cust_name'] = (data.getElementsByTagName("cust_name")[0].lastChild != null) ? data.getElementsByTagName("cust_name")[0].lastChild.nodeValue : "";
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['fat_percent'] = parseFloat(data.getElementsByTagName("fat_percent")[0].lastChild.nodeValue);
            
            this['snf_percent'] = parseFloat(data.getElementsByTagName("snf_percent")[0].lastChild.nodeValue);
            
            this['awm_percent'] = parseFloat(data.getElementsByTagName("awm_percent")[0].lastChild.nodeValue);
            
            this['retailsale_qty'] = parseFloat(data.getElementsByTagName("retailsale_qty")[0].lastChild.nodeValue);
            
            this['corrected_qty'] = parseFloat(data.getElementsByTagName("corrected_qty")[0].lastChild.nodeValue);
            
            this['milk_rate'] = parseFloat(data.getElementsByTagName("milk_rate")[0].lastChild.nodeValue);
            
            this['corrected_retail_rate'] = parseFloat(data.getElementsByTagName("corrected_retail_rate")[0].lastChild.nodeValue);
            
            this['milk_amount'] = parseFloat(data.getElementsByTagName("milk_amount")[0].lastChild.nodeValue);
            
            this['retailsale_remark'] = (data.getElementsByTagName("retailsale_remark")[0].lastChild != null) ? data.getElementsByTagName("retailsale_remark")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mobile_app_ref_no'] = (data.getElementsByTagName("mobile_app_ref_no")[0].lastChild != null) ? data.getElementsByTagName("mobile_app_ref_no")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['milkretailsaledtlold_rowid'] = data['milkretailsaledtlold_rowid'];
            
            this['milksession_code'] = data['milksession_code'];
            
            this['milksession_desc'] = data['milksession_desc'];
            
            this['cust_name'] = data['cust_name'];
            
            this['milk_from'] = data['milk_from'];
            
            this['fat_percent'] = data['fat_percent'];
            
            this['snf_percent'] = data['snf_percent'];
            
            this['awm_percent'] = data['awm_percent'];
            
            this['retailsale_qty'] = data['retailsale_qty'];
            
            this['corrected_qty'] = data['corrected_qty'];
            
            this['milk_rate'] = data['milk_rate'];
            
            this['corrected_retail_rate'] = data['corrected_retail_rate'];
            
            this['milk_amount'] = data['milk_amount'];
            
            this['retailsale_remark'] = data['retailsale_remark'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mobile_app_ref_no'] = data['mobile_app_ref_no'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

