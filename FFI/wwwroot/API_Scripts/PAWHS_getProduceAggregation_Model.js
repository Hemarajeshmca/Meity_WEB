var responseDataFormat = "JSON";

function PAWHS_getProduceAggregationRequest(data)
{
    /**
     * @member {PAWHS_getProduceAggregationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getProduceAggregationRequestcontext(data['context']);
    }
}

function PAWHS_getProduceAggregationRequestcontext(data)
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
     * @member {PAWHS_getProduceAggregationRequestHeader} Header
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
            this['Header'] = new PAWHS_getProduceAggregationRequestHeader(data['Header']);
    }
}

function PAWHS_getProduceAggregationRequestHeader(data)
{
    /**
     * @member {Int32} produce_agg_rowid
     */
    this['produce_agg_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('produce_agg_rowid'))
            this['produce_agg_rowid'] = data['produce_agg_rowid'];
        
    }
}

function PAWHS_getProduceAggregationResponse(data, format)
{
    /**
     * @member {PAWHS_getProduceAggregationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getProduceAggregationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getProduceAggregationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getProduceAggregationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getProduceAggregationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getProduceAggregationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getProduceAggregationResponseApplicationException(data)
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

function PAWHS_getProduceAggregationResponsecontext(data)
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
     * @member {PAWHS_getProduceAggregationResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getProduceAggregationResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getProduceAggregationResponseHeader(data['Header']);
        }
    }
}

function PAWHS_getProduceAggregationResponseHeader(data)
{
    /**
     * @member {Int32} produce_agg_rowid
     */
    this['produce_agg_rowid'] = null;
    
    /**
     * @member {String} request_id
     */
    this['request_id'] = null;
    
    /**
     * @member {String} pickup_date
     */
    this['pickup_date'] = null;
    
    /**
     * @member {String} delivery_slot_code
     */
    this['delivery_slot_code'] = null;
    
    /**
     * @member {String} delivery_slot_desc
     */
    this['delivery_slot_desc'] = null;
    
    /**
     * @member {String} produce_code
     */
    this['produce_code'] = null;
    
    /**
     * @member {String} produce_desc
     */
    this['produce_desc'] = null;
    
    /**
     * @member {String} uom_code
     */
    this['uom_code'] = null;
    
    /**
     * @member {String} uom_desc
     */
    this['uom_desc'] = null;
    
    /**
     * @member {Int16} quantity
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
     * @member {String} aggregation_type_code
     */
    this['aggregation_type_code'] = null;
    
    /**
     * @member {String} aggregation_type_desc
     */
    this['aggregation_type_desc'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} address1
     */
    this['address1'] = null;
    
    /**
     * @member {String} address2
     */
    this['address2'] = null;
    
    /**
     * @member {String} village
     */
    this['village'] = null;
    
    /**
     * @member {String} pin_code
     */
    this['pin_code'] = null;
    
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
            this['produce_agg_rowid'] = parseInt(data.getElementsByTagName("produce_agg_rowid")[0].lastChild.nodeValue);
            
            this['request_id'] = (data.getElementsByTagName("request_id")[0].lastChild != null) ? data.getElementsByTagName("request_id")[0].lastChild.nodeValue : "";
            
            this['pickup_date'] = (data.getElementsByTagName("pickup_date")[0].lastChild != null) ? data.getElementsByTagName("pickup_date")[0].lastChild.nodeValue : "";
            
            this['delivery_slot_code'] = (data.getElementsByTagName("delivery_slot_code")[0].lastChild != null) ? data.getElementsByTagName("delivery_slot_code")[0].lastChild.nodeValue : "";
            
            this['delivery_slot_desc'] = (data.getElementsByTagName("delivery_slot_desc")[0].lastChild != null) ? data.getElementsByTagName("delivery_slot_desc")[0].lastChild.nodeValue : "";
            
            this['produce_code'] = (data.getElementsByTagName("produce_code")[0].lastChild != null) ? data.getElementsByTagName("produce_code")[0].lastChild.nodeValue : "";
            
            this['produce_desc'] = (data.getElementsByTagName("produce_desc")[0].lastChild != null) ? data.getElementsByTagName("produce_desc")[0].lastChild.nodeValue : "";
            
            this['uom_code'] = (data.getElementsByTagName("uom_code")[0].lastChild != null) ? data.getElementsByTagName("uom_code")[0].lastChild.nodeValue : "";
            
            this['uom_desc'] = (data.getElementsByTagName("uom_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_desc")[0].lastChild.nodeValue : "";
            
            this['quantity'] = parseInt(data.getElementsByTagName("quantity")[0].lastChild.nodeValue);
            
            this['rate'] = parseFloat(data.getElementsByTagName("rate")[0].lastChild.nodeValue);
            
            this['amount'] = parseFloat(data.getElementsByTagName("amount")[0].lastChild.nodeValue);
            
            this['aggregation_type_code'] = (data.getElementsByTagName("aggregation_type_code")[0].lastChild != null) ? data.getElementsByTagName("aggregation_type_code")[0].lastChild.nodeValue : "";
            
            this['aggregation_type_desc'] = (data.getElementsByTagName("aggregation_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggregation_type_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['address1'] = (data.getElementsByTagName("address1")[0].lastChild != null) ? data.getElementsByTagName("address1")[0].lastChild.nodeValue : "";
            
            this['address2'] = (data.getElementsByTagName("address2")[0].lastChild != null) ? data.getElementsByTagName("address2")[0].lastChild.nodeValue : "";
            
            this['village'] = (data.getElementsByTagName("village")[0].lastChild != null) ? data.getElementsByTagName("village")[0].lastChild.nodeValue : "";
            
            this['pin_code'] = (data.getElementsByTagName("pin_code")[0].lastChild != null) ? data.getElementsByTagName("pin_code")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['produce_agg_rowid'] = data['produce_agg_rowid'];
            
            this['request_id'] = data['request_id'];
            
            this['pickup_date'] = data['pickup_date'];
            
            this['delivery_slot_code'] = data['delivery_slot_code'];
            
            this['delivery_slot_desc'] = data['delivery_slot_desc'];
            
            this['produce_code'] = data['produce_code'];
            
            this['produce_desc'] = data['produce_desc'];
            
            this['uom_code'] = data['uom_code'];
            
            this['uom_desc'] = data['uom_desc'];
            
            this['quantity'] = data['quantity'];
            
            this['rate'] = data['rate'];
            
            this['amount'] = data['amount'];
            
            this['aggregation_type_code'] = data['aggregation_type_code'];
            
            this['aggregation_type_desc'] = data['aggregation_type_desc'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['address1'] = data['address1'];
            
            this['address2'] = data['address2'];
            
            this['village'] = data['village'];
            
            this['pin_code'] = data['pin_code'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

