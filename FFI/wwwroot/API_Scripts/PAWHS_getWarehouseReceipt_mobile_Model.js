var responseDataFormat = "JSON";

function PAWHS_getWarehouseReceipt_mobileRequest(data)
{
    /**
     * @member {PAWHS_getWarehouseReceipt_mobileRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getWarehouseReceipt_mobileRequestcontext(data['context']);
    }
}

function PAWHS_getWarehouseReceipt_mobileRequestcontext(data)
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
     * @member {PAWHS_getWarehouseReceipt_mobileRequestHeader} Header
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
            this['Header'] = new PAWHS_getWarehouseReceipt_mobileRequestHeader(data['Header']);
    }
}

function PAWHS_getWarehouseReceipt_mobileRequestHeader(data)
{
    /**
     * @member {String} pickup_request_id
     */
    this['pickup_request_id'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('pickup_request_id'))
            this['pickup_request_id'] = data['pickup_request_id'];
        
    }
}

function PAWHS_getWarehouseReceipt_mobileResponse(data, format)
{
    /**
     * @member {PAWHS_getWarehouseReceipt_mobileResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getWarehouseReceipt_mobileResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getWarehouseReceipt_mobileResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getWarehouseReceipt_mobileResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getWarehouseReceipt_mobileResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getWarehouseReceipt_mobileResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getWarehouseReceipt_mobileResponseApplicationException(data)
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

function PAWHS_getWarehouseReceipt_mobileResponsecontext(data)
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
     * @member {PAWHS_getWarehouseReceipt_mobileResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getWarehouseReceipt_mobileResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getWarehouseReceipt_mobileResponseHeader(data['Header']);
        }
    }
}

function PAWHS_getWarehouseReceipt_mobileResponseHeader(data)
{
    /**
     * @member {String} pickup_request_id
     */
    this['pickup_request_id'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} item_name
     */
    this['item_name'] = null;
    
    /**
     * @member {String} quantity
     */
    this['quantity'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} farmer_address
     */
    this['farmer_address'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} agg_name
     */
    this['agg_name'] = null;
    
    /**
     * @member {String} agg_address
     */
    this['agg_address'] = null;
    
    /**
     * @member {String} whs_receipting_no
     */
    this['whs_receipting_no'] = null;
    
    /**
     * @member {String} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {String} bill_date
     */
    this['bill_date'] = null;
    
    /**
     * @member {String} tran_type_code
     */
    this['tran_type_code'] = null;
    
    /**
     * @member {String} tran_type_desc
     */
    this['tran_type_desc'] = null;
    
    /**
     * @member {String} pickup_location
     */
    this['pickup_location'] = null;
    
    /**
     * @member {String} pickup_type_code
     */
    this['pickup_type_code'] = null;
    
    /**
     * @member {String} pickup_type_desc
     */
    this['pickup_type_desc'] = null;
    
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
            this['pickup_request_id'] = (data.getElementsByTagName("pickup_request_id")[0].lastChild != null) ? data.getElementsByTagName("pickup_request_id")[0].lastChild.nodeValue : "";
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            this['quantity'] = (data.getElementsByTagName("quantity")[0].lastChild != null) ? data.getElementsByTagName("quantity")[0].lastChild.nodeValue : "";
            
            this['rate'] = data.getElementsByTagName("rate")[0].lastChild.nodeValue;
            
            this['amount'] = data.getElementsByTagName("amount")[0].lastChild.nodeValue;
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['farmer_address'] = (data.getElementsByTagName("farmer_address")[0].lastChild != null) ? data.getElementsByTagName("farmer_address")[0].lastChild.nodeValue : "";
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['agg_name'] = (data.getElementsByTagName("agg_name")[0].lastChild != null) ? data.getElementsByTagName("agg_name")[0].lastChild.nodeValue : "";
            
            this['agg_address'] = (data.getElementsByTagName("agg_address")[0].lastChild != null) ? data.getElementsByTagName("agg_address")[0].lastChild.nodeValue : "";
            
            this['whs_receipting_no'] = (data.getElementsByTagName("whs_receipting_no")[0].lastChild != null) ? data.getElementsByTagName("whs_receipting_no")[0].lastChild.nodeValue : "";
            
            this['accepted_qty'] = (data.getElementsByTagName("accepted_qty")[0].lastChild != null) ? data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue : "";
            
            this['bill_date'] = (data.getElementsByTagName("bill_date")[0].lastChild != null) ? data.getElementsByTagName("bill_date")[0].lastChild.nodeValue : "";
            
            this['tran_type_code'] = (data.getElementsByTagName("tran_type_code")[0].lastChild != null) ? data.getElementsByTagName("tran_type_code")[0].lastChild.nodeValue : "";
            
            this['tran_type_desc'] = (data.getElementsByTagName("tran_type_desc")[0].lastChild != null) ? data.getElementsByTagName("tran_type_desc")[0].lastChild.nodeValue : "";
            
            this['pickup_location'] = (data.getElementsByTagName("pickup_location")[0].lastChild != null) ? data.getElementsByTagName("pickup_location")[0].lastChild.nodeValue : "";
            
            this['pickup_type_code'] = (data.getElementsByTagName("pickup_type_code")[0].lastChild != null) ? data.getElementsByTagName("pickup_type_code")[0].lastChild.nodeValue : "";
            
            this['pickup_type_desc'] = (data.getElementsByTagName("pickup_type_desc")[0].lastChild != null) ? data.getElementsByTagName("pickup_type_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['pickup_request_id'] = data['pickup_request_id'];
            
            this['item_code'] = data['item_code'];
            
            this['item_name'] = data['item_name'];
            
            this['quantity'] = data['quantity'];
            
            this['rate'] = data['rate'].toFixed(4);
            
            this['amount'] = data['amount'].toFixed(2);
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['farmer_address'] = data['farmer_address'];
            
            this['agg_code'] = data['agg_code'];
            
            this['agg_name'] = data['agg_name'];
            
            this['agg_address'] = data['agg_address'];
            
            this['whs_receipting_no'] = data['whs_receipting_no'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['bill_date'] = data['bill_date'];
            
            this['tran_type_code'] = data['tran_type_code'];
            
            this['tran_type_desc'] = data['tran_type_desc'];
            
            this['pickup_location'] = data['pickup_location'];
            
            this['pickup_type_code'] = data['pickup_type_code'];
            
            this['pickup_type_desc'] = data['pickup_type_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

