var responseDataFormat = "JSON";

function PAWHS_saveReadyToPickupRequest(data)
{
    /**
     * @member {PAWHS_saveReadyToPickupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveReadyToPickupRequestcontext(data['context']);
    }
}

function PAWHS_saveReadyToPickupRequestcontext(data)
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
     * @member {PAWHS_saveReadyToPickupRequestHeader} Header
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
            this['Header'] = new PAWHS_saveReadyToPickupRequestHeader(data['Header']);
    }
}

function PAWHS_saveReadyToPickupRequestHeader(data)
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
     * @member {String} vehicle_code
     */
    this['vehicle_code'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('pickup_rowid'))
            this['pickup_rowid'] = data['pickup_rowid'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('pickup_request_id'))
            this['pickup_request_id'] = data['pickup_request_id'];
        
        if(data.hasOwnProperty('pickup_date'))
            this['pickup_date'] = data['pickup_date'];
        
        if(data.hasOwnProperty('village'))
            this['village'] = data['village'];
        
        if(data.hasOwnProperty('fig'))
            this['fig'] = data['fig'];
        
        if(data.hasOwnProperty('fig_contact_person'))
            this['fig_contact_person'] = data['fig_contact_person'];
        
        if(data.hasOwnProperty('fig_contact_no'))
            this['fig_contact_no'] = data['fig_contact_no'];
        
        if(data.hasOwnProperty('pickup_slot_code'))
            this['pickup_slot_code'] = data['pickup_slot_code'];
        
        if(data.hasOwnProperty('vehicle_code'))
            this['vehicle_code'] = data['vehicle_code'];
        
        if(data.hasOwnProperty('vehicle_reg_no'))
            this['vehicle_reg_no'] = data['vehicle_reg_no'];
        
        if(data.hasOwnProperty('quantity'))
            this['quantity'] = data['quantity'];
        
        if(data.hasOwnProperty('warehouse_code'))
            this['warehouse_code'] = data['warehouse_code'];
        
        if(data.hasOwnProperty('max_carry_weight'))
            this['max_carry_weight'] = data['max_carry_weight'];
        
        if(data.hasOwnProperty('load_sapce_volume'))
            this['load_sapce_volume'] = data['load_sapce_volume'];
        
        if(data.hasOwnProperty('load_floor_length'))
            this['load_floor_length'] = data['load_floor_length'];
        
        if(data.hasOwnProperty('load_floor_width'))
            this['load_floor_width'] = data['load_floor_width'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveReadyToPickupResponse(data, format)
{
    /**
     * @member {PAWHS_saveReadyToPickupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveReadyToPickupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveReadyToPickupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveReadyToPickupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveReadyToPickupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveReadyToPickupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveReadyToPickupResponseApplicationException(data)
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

function PAWHS_saveReadyToPickupResponsecontext(data)
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
     * @member {PAWHS_saveReadyToPickupResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveReadyToPickupResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveReadyToPickupResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveReadyToPickupResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['pickup_rowid'] = parseInt(data.getElementsByTagName("pickup_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['pickup_rowid'] = data['pickup_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
        }
    }
}

