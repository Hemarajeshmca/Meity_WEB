var responseDataFormat = "JSON";

function PAWHS_saveProduceAggregationRequest(data)
{
    /**
     * @member {PAWHS_saveProduceAggregationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveProduceAggregationRequestcontext(data['context']);
    }
}

function PAWHS_saveProduceAggregationRequestcontext(data)
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
     * @member {PAWHS_saveProduceAggregationRequestHeader} Header
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
            this['Header'] = new PAWHS_saveProduceAggregationRequestHeader(data['Header']);
    }
}

function PAWHS_saveProduceAggregationRequestHeader(data)
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
     * @member {String} produce_code
     */
    this['produce_code'] = null;
    
    /**
     * @member {String} uom_code
     */
    this['uom_code'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('produce_agg_rowid'))
            this['produce_agg_rowid'] = data['produce_agg_rowid'];
        
        if(data.hasOwnProperty('request_id'))
            this['request_id'] = data['request_id'];
        
        if(data.hasOwnProperty('pickup_date'))
            this['pickup_date'] = data['pickup_date'];
        
        if(data.hasOwnProperty('delivery_slot_code'))
            this['delivery_slot_code'] = data['delivery_slot_code'];
        
        if(data.hasOwnProperty('produce_code'))
            this['produce_code'] = data['produce_code'];
        
        if(data.hasOwnProperty('uom_code'))
            this['uom_code'] = data['uom_code'];
        
        if(data.hasOwnProperty('quantity'))
            this['quantity'] = data['quantity'];
        
        if(data.hasOwnProperty('rate'))
            this['rate'] = data['rate'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('aggregation_type_code'))
            this['aggregation_type_code'] = data['aggregation_type_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('address1'))
            this['address1'] = data['address1'];
        
        if(data.hasOwnProperty('address2'))
            this['address2'] = data['address2'];
        
        if(data.hasOwnProperty('village'))
            this['village'] = data['village'];
        
        if(data.hasOwnProperty('pin_code'))
            this['pin_code'] = data['pin_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveProduceAggregationResponse(data, format)
{
    /**
     * @member {PAWHS_saveProduceAggregationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveProduceAggregationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveProduceAggregationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveProduceAggregationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveProduceAggregationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveProduceAggregationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveProduceAggregationResponseApplicationException(data)
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

function PAWHS_saveProduceAggregationResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

