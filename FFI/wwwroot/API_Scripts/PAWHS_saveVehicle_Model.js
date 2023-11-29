var responseDataFormat = "JSON";

function PAWHS_saveVehicleRequest(data)
{
    /**
     * @member {PAWHS_saveVehicleRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveVehicleRequestcontext(data['context']);
    }
}

function PAWHS_saveVehicleRequestcontext(data)
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
     * @member {PAWHS_saveVehicleRequestHeader} Header
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
            this['Header'] = new PAWHS_saveVehicleRequestHeader(data['Header']);
    }
}

function PAWHS_saveVehicleRequestHeader(data)
{
    /**
     * @member {Int32} vehicle_rowid
     */
    this['vehicle_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} vehicle_code
     */
    this['vehicle_code'] = null;
    
    /**
     * @member {String} vehicle_regno
     */
    this['vehicle_regno'] = null;
    
    /**
     * @member {String} vehicle_manf_name
     */
    this['vehicle_manf_name'] = null;
    
    /**
     * @member {String} max_carrry_weight
     */
    this['max_carrry_weight'] = null;
    
    /**
     * @member {String} loadspace_height
     */
    this['loadspace_height'] = null;
    
    /**
     * @member {String} loadspace_width
     */
    this['loadspace_width'] = null;
    
    /**
     * @member {String} loadspace_length
     */
    this['loadspace_length'] = null;
    
    /**
     * @member {String} gps_id
     */
    this['gps_id'] = null;
    
    /**
     * @member {String} imei_no
     */
    this['imei_no'] = null;
    
    /**
     * @member {String} sim_no
     */
    this['sim_no'] = null;
    
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
        if(data.hasOwnProperty('vehicle_rowid'))
            this['vehicle_rowid'] = data['vehicle_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('vehicle_code'))
            this['vehicle_code'] = data['vehicle_code'];
        
        if(data.hasOwnProperty('vehicle_regno'))
            this['vehicle_regno'] = data['vehicle_regno'];
        
        if(data.hasOwnProperty('vehicle_manf_name'))
            this['vehicle_manf_name'] = data['vehicle_manf_name'];
        
        if(data.hasOwnProperty('max_carrry_weight'))
            this['max_carrry_weight'] = data['max_carrry_weight'];
        
        if(data.hasOwnProperty('loadspace_height'))
            this['loadspace_height'] = data['loadspace_height'];
        
        if(data.hasOwnProperty('loadspace_width'))
            this['loadspace_width'] = data['loadspace_width'];
        
        if(data.hasOwnProperty('loadspace_length'))
            this['loadspace_length'] = data['loadspace_length'];
        
        if(data.hasOwnProperty('gps_id'))
            this['gps_id'] = data['gps_id'];
        
        if(data.hasOwnProperty('imei_no'))
            this['imei_no'] = data['imei_no'];
        
        if(data.hasOwnProperty('sim_no'))
            this['sim_no'] = data['sim_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveVehicleResponse(data, format)
{
    /**
     * @member {PAWHS_saveVehicleResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveVehicleResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveVehicleResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveVehicleResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveVehicleResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveVehicleResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveVehicleResponseApplicationException(data)
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

function PAWHS_saveVehicleResponsecontext(data)
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
     * @member {PAWHS_saveVehicleResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveVehicleResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveVehicleResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveVehicleResponseHeader(data)
{
    /**
     * @member {Int32} vehicle_rowid
     */
    this['vehicle_rowid'] = null;
    
    /**
     * @member {String} vehicle_code
     */
    this['vehicle_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['vehicle_rowid'] = parseInt(data.getElementsByTagName("vehicle_rowid")[0].lastChild.nodeValue);
            
            this['vehicle_code'] = (data.getElementsByTagName("vehicle_code")[0].lastChild != null) ? data.getElementsByTagName("vehicle_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['vehicle_rowid'] = data['vehicle_rowid'];
            
            this['vehicle_code'] = data['vehicle_code'];
        }
    }
}

