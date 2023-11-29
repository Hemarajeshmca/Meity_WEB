var responseDataFormat = "JSON";

function PAWHS_getReadyToPickupRequest(data)
{
    /**
     * @member {PAWHS_getReadyToPickupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getReadyToPickupRequestcontext(data['context']);
    }
}

function PAWHS_getReadyToPickupRequestcontext(data)
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
     * @member {PAWHS_getReadyToPickupRequestHeader} Header
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
            this['Header'] = new PAWHS_getReadyToPickupRequestHeader(data['Header']);
    }
}

function PAWHS_getReadyToPickupRequestHeader(data)
{
    /**
     * @member {Int32} pickup_rowid
     */
    this['pickup_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('pickup_rowid'))
            this['pickup_rowid'] = data['pickup_rowid'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
    }
}

function PAWHS_getReadyToPickupResponse(data, format)
{
    /**
     * @member {PAWHS_getReadyToPickupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getReadyToPickupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getReadyToPickupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getReadyToPickupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getReadyToPickupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getReadyToPickupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getReadyToPickupResponseApplicationException(data)
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

function PAWHS_getReadyToPickupResponsecontext(data)
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
     * @member {PAWHS_getReadyToPickupResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getReadyToPickupResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getReadyToPickupResponseHeader(data['Header']);
        }
    }
}

function PAWHS_getReadyToPickupResponseHeader(data)
{
    /**
     * @member {Int32} pickup_rowid
     */
    this['pickup_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} pickup_request_id
     */
    this['pickup_request_id'] = null;
    
    /**
     * @member {String} pickup_date
     */
    this['pickup_date'] = null;
    
    /**
     * @member {String} village
     */
    this['village'] = null;
    
    /**
     * @member {String} fig
     */
    this['fig'] = null;
    
    /**
     * @member {String} fig_contact_person
     */
    this['fig_contact_person'] = null;
    
    /**
     * @member {String} fig_contact_no
     */
    this['fig_contact_no'] = null;
    
    /**
     * @member {String} pickup_slot_code
     */
    this['pickup_slot_code'] = null;
    
    /**
     * @member {String} pickup_slot_desc
     */
    this['pickup_slot_desc'] = null;
    
    /**
     * @member {String} vehicle_code
     */
    this['vehicle_code'] = null;
    
    /**
     * @member {String} vehicle_desc
     */
    this['vehicle_desc'] = null;
    
    /**
     * @member {String} vehicle_reg_no
     */
    this['vehicle_reg_no'] = null;
    
    /**
     * @member {String} quantity
     */
    this['quantity'] = null;
    
    /**
     * @member {String} warehouse_code
     */
    this['warehouse_code'] = null;
    
    /**
     * @member {String} warehouse_name
     */
    this['warehouse_name'] = null;
    
    /**
     * @member {String} max_carry_weight
     */
    this['max_carry_weight'] = null;
    
    /**
     * @member {String} load_sapce_volume
     */
    this['load_sapce_volume'] = null;
    
    /**
     * @member {String} load_floor_length
     */
    this['load_floor_length'] = null;
    
    /**
     * @member {String} load_floor_width
     */
    this['load_floor_width'] = null;
    
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
            this['pickup_rowid'] = parseInt(data.getElementsByTagName("pickup_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['pickup_request_id'] = (data.getElementsByTagName("pickup_request_id")[0].lastChild != null) ? data.getElementsByTagName("pickup_request_id")[0].lastChild.nodeValue : "";
            
            this['pickup_date'] = (data.getElementsByTagName("pickup_date")[0].lastChild != null) ? data.getElementsByTagName("pickup_date")[0].lastChild.nodeValue : "";
            
            this['village'] = (data.getElementsByTagName("village")[0].lastChild != null) ? data.getElementsByTagName("village")[0].lastChild.nodeValue : "";
            
            this['fig'] = (data.getElementsByTagName("fig")[0].lastChild != null) ? data.getElementsByTagName("fig")[0].lastChild.nodeValue : "";
            
            this['fig_contact_person'] = (data.getElementsByTagName("fig_contact_person")[0].lastChild != null) ? data.getElementsByTagName("fig_contact_person")[0].lastChild.nodeValue : "";
            
            this['fig_contact_no'] = (data.getElementsByTagName("fig_contact_no")[0].lastChild != null) ? data.getElementsByTagName("fig_contact_no")[0].lastChild.nodeValue : "";
            
            this['pickup_slot_code'] = (data.getElementsByTagName("pickup_slot_code")[0].lastChild != null) ? data.getElementsByTagName("pickup_slot_code")[0].lastChild.nodeValue : "";
            
            this['pickup_slot_desc'] = (data.getElementsByTagName("pickup_slot_desc")[0].lastChild != null) ? data.getElementsByTagName("pickup_slot_desc")[0].lastChild.nodeValue : "";
            
            this['vehicle_code'] = (data.getElementsByTagName("vehicle_code")[0].lastChild != null) ? data.getElementsByTagName("vehicle_code")[0].lastChild.nodeValue : "";
            
            this['vehicle_desc'] = (data.getElementsByTagName("vehicle_desc")[0].lastChild != null) ? data.getElementsByTagName("vehicle_desc")[0].lastChild.nodeValue : "";
            
            this['vehicle_reg_no'] = (data.getElementsByTagName("vehicle_reg_no")[0].lastChild != null) ? data.getElementsByTagName("vehicle_reg_no")[0].lastChild.nodeValue : "";
            
            this['quantity'] = (data.getElementsByTagName("quantity")[0].lastChild != null) ? data.getElementsByTagName("quantity")[0].lastChild.nodeValue : "";
            
            this['warehouse_code'] = (data.getElementsByTagName("warehouse_code")[0].lastChild != null) ? data.getElementsByTagName("warehouse_code")[0].lastChild.nodeValue : "";
            
            this['warehouse_name'] = (data.getElementsByTagName("warehouse_name")[0].lastChild != null) ? data.getElementsByTagName("warehouse_name")[0].lastChild.nodeValue : "";
            
            this['max_carry_weight'] = (data.getElementsByTagName("max_carry_weight")[0].lastChild != null) ? data.getElementsByTagName("max_carry_weight")[0].lastChild.nodeValue : "";
            
            this['load_sapce_volume'] = (data.getElementsByTagName("load_sapce_volume")[0].lastChild != null) ? data.getElementsByTagName("load_sapce_volume")[0].lastChild.nodeValue : "";
            
            this['load_floor_length'] = (data.getElementsByTagName("load_floor_length")[0].lastChild != null) ? data.getElementsByTagName("load_floor_length")[0].lastChild.nodeValue : "";
            
            this['load_floor_width'] = (data.getElementsByTagName("load_floor_width")[0].lastChild != null) ? data.getElementsByTagName("load_floor_width")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['pickup_rowid'] = data['pickup_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['pickup_request_id'] = data['pickup_request_id'];
            
            this['pickup_date'] = data['pickup_date'];
            
            this['village'] = data['village'];
            
            this['fig'] = data['fig'];
            
            this['fig_contact_person'] = data['fig_contact_person'];
            
            this['fig_contact_no'] = data['fig_contact_no'];
            
            this['pickup_slot_code'] = data['pickup_slot_code'];
            
            this['pickup_slot_desc'] = data['pickup_slot_desc'];
            
            this['vehicle_code'] = data['vehicle_code'];
            
            this['vehicle_desc'] = data['vehicle_desc'];
            
            this['vehicle_reg_no'] = data['vehicle_reg_no'];
            
            this['quantity'] = data['quantity'];
            
            this['warehouse_code'] = data['warehouse_code'];
            
            this['warehouse_name'] = data['warehouse_name'];
            
            this['max_carry_weight'] = data['max_carry_weight'];
            
            this['load_sapce_volume'] = data['load_sapce_volume'];
            
            this['load_floor_length'] = data['load_floor_length'];
            
            this['load_floor_width'] = data['load_floor_width'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

