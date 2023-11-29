var responseDataFormat = "JSON";

function PAWHS_getVehicleListRequest(data)
{
    /**
     * @member {PAWHS_getVehicleListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getVehicleListRequestcontext(data['context']);
    }
}

function PAWHS_getVehicleListRequestcontext(data)
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
     * @member {PAWHS_getVehicleListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new PAWHS_getVehicleListRequestFilter(data['Filter']);
    }
}

function PAWHS_getVehicleListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_FromValue
     */
    this['FilterBy_FromValue'] = null;
    
    /**
     * @member {String} FilterBy_ToValue
     */
    this['FilterBy_ToValue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_FromValue'))
            this['FilterBy_FromValue'] = data['FilterBy_FromValue'];
        
        if(data.hasOwnProperty('FilterBy_ToValue'))
            this['FilterBy_ToValue'] = data['FilterBy_ToValue'];
        
    }
}

function PAWHS_getVehicleListResponse(data, format)
{
    /**
     * @member {PAWHS_getVehicleListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getVehicleListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getVehicleListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getVehicleListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getVehicleListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getVehicleListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getVehicleListResponseApplicationException(data)
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

function PAWHS_getVehicleListResponsecontext(data)
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
     * @member {PAWHS_getVehicleListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new PAWHS_getVehicleListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new PAWHS_getVehicleListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getVehicleListResponseList(data)
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['vehicle_rowid'] = parseInt(data.getElementsByTagName("vehicle_rowid")[0].lastChild.nodeValue);
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['vehicle_code'] = (data.getElementsByTagName("vehicle_code")[0].lastChild != null) ? data.getElementsByTagName("vehicle_code")[0].lastChild.nodeValue : "";
            
            this['vehicle_regno'] = (data.getElementsByTagName("vehicle_regno")[0].lastChild != null) ? data.getElementsByTagName("vehicle_regno")[0].lastChild.nodeValue : "";
            
            this['vehicle_manf_name'] = (data.getElementsByTagName("vehicle_manf_name")[0].lastChild != null) ? data.getElementsByTagName("vehicle_manf_name")[0].lastChild.nodeValue : "";
            
            this['max_carrry_weight'] = (data.getElementsByTagName("max_carrry_weight")[0].lastChild != null) ? data.getElementsByTagName("max_carrry_weight")[0].lastChild.nodeValue : "";
            
            this['loadspace_height'] = (data.getElementsByTagName("loadspace_height")[0].lastChild != null) ? data.getElementsByTagName("loadspace_height")[0].lastChild.nodeValue : "";
            
            this['loadspace_width'] = (data.getElementsByTagName("loadspace_width")[0].lastChild != null) ? data.getElementsByTagName("loadspace_width")[0].lastChild.nodeValue : "";
            
            this['loadspace_length'] = (data.getElementsByTagName("loadspace_length")[0].lastChild != null) ? data.getElementsByTagName("loadspace_length")[0].lastChild.nodeValue : "";
            
            this['gps_id'] = (data.getElementsByTagName("gps_id")[0].lastChild != null) ? data.getElementsByTagName("gps_id")[0].lastChild.nodeValue : "";
            
            this['imei_no'] = (data.getElementsByTagName("imei_no")[0].lastChild != null) ? data.getElementsByTagName("imei_no")[0].lastChild.nodeValue : "";
            
            this['sim_no'] = (data.getElementsByTagName("sim_no")[0].lastChild != null) ? data.getElementsByTagName("sim_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['vehicle_rowid'] = data['vehicle_rowid'];
            
            this['agg_code'] = data['agg_code'];
            
            this['vehicle_code'] = data['vehicle_code'];
            
            this['vehicle_regno'] = data['vehicle_regno'];
            
            this['vehicle_manf_name'] = data['vehicle_manf_name'];
            
            this['max_carrry_weight'] = data['max_carrry_weight'];
            
            this['loadspace_height'] = data['loadspace_height'];
            
            this['loadspace_width'] = data['loadspace_width'];
            
            this['loadspace_length'] = data['loadspace_length'];
            
            this['gps_id'] = data['gps_id'];
            
            this['imei_no'] = data['imei_no'];
            
            this['sim_no'] = data['sim_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

