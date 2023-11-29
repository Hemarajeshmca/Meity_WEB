var responseDataFormat = "JSON";

function PAWHS_saveWarehouseRegRequest(data)
{
    /**
     * @member {PAWHS_saveWarehouseRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveWarehouseRegRequestcontext(data['context']);
    }
}

function PAWHS_saveWarehouseRegRequestcontext(data)
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
     * @member {PAWHS_saveWarehouseRegRequestHeader} Header
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
            this['Header'] = new PAWHS_saveWarehouseRegRequestHeader(data['Header']);
    }
}

function PAWHS_saveWarehouseRegRequestHeader(data)
{
    /**
     * @member {Int32} whs_rowid
     */
    this['whs_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} whs_code
     */
    this['whs_code'] = null;
    
    /**
     * @member {String} whs_type
     */
    this['whs_type'] = null;
    
    /**
     * @member {String} whs_name
     */
    this['whs_name'] = null;
    
    /**
     * @member {String} whs_addr1
     */
    this['whs_addr1'] = null;
    
    /**
     * @member {String} whs_addr2
     */
    this['whs_addr2'] = null;
    
    /**
     * @member {String} whs_country
     */
    this['whs_country'] = null;
    
    /**
     * @member {String} whs_state
     */
    this['whs_state'] = null;
    
    /**
     * @member {String} whs_dist
     */
    this['whs_dist'] = null;
    
    /**
     * @member {String} whs_taluk
     */
    this['whs_taluk'] = null;
    
    /**
     * @member {String} whs_panchayat
     */
    this['whs_panchayat'] = null;
    
    /**
     * @member {String} whs_village
     */
    this['whs_village'] = null;
    
    /**
     * @member {String} whs_pincode
     */
    this['whs_pincode'] = null;
    
    /**
     * @member {Int64} sqrf_area
     */
    this['sqrf_area'] = null;
    
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
        if(data.hasOwnProperty('whs_rowid'))
            this['whs_rowid'] = data['whs_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('whs_code'))
            this['whs_code'] = data['whs_code'];
        
        if(data.hasOwnProperty('whs_type'))
            this['whs_type'] = data['whs_type'];
        
        if(data.hasOwnProperty('whs_name'))
            this['whs_name'] = data['whs_name'];
        
        if(data.hasOwnProperty('whs_addr1'))
            this['whs_addr1'] = data['whs_addr1'];
        
        if(data.hasOwnProperty('whs_addr2'))
            this['whs_addr2'] = data['whs_addr2'];
        
        if(data.hasOwnProperty('whs_country'))
            this['whs_country'] = data['whs_country'];
        
        if(data.hasOwnProperty('whs_state'))
            this['whs_state'] = data['whs_state'];
        
        if(data.hasOwnProperty('whs_dist'))
            this['whs_dist'] = data['whs_dist'];
        
        if(data.hasOwnProperty('whs_taluk'))
            this['whs_taluk'] = data['whs_taluk'];
        
        if(data.hasOwnProperty('whs_panchayat'))
            this['whs_panchayat'] = data['whs_panchayat'];
        
        if(data.hasOwnProperty('whs_village'))
            this['whs_village'] = data['whs_village'];
        
        if(data.hasOwnProperty('whs_pincode'))
            this['whs_pincode'] = data['whs_pincode'];
        
        if(data.hasOwnProperty('sqrf_area'))
            this['sqrf_area'] = data['sqrf_area'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveWarehouseRegResponse(data, format)
{
    /**
     * @member {PAWHS_saveWarehouseRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveWarehouseRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveWarehouseRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveWarehouseRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveWarehouseRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveWarehouseRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveWarehouseRegResponseApplicationException(data)
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

function PAWHS_saveWarehouseRegResponsecontext(data)
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
     * @member {PAWHS_saveWarehouseRegResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveWarehouseRegResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveWarehouseRegResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveWarehouseRegResponseHeader(data)
{
    /**
     * @member {Int32} whs_rowid
     */
    this['whs_rowid'] = null;
    
    /**
     * @member {String} whs_code
     */
    this['whs_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['whs_rowid'] = parseInt(data.getElementsByTagName("whs_rowid")[0].lastChild.nodeValue);
            
            this['whs_code'] = (data.getElementsByTagName("whs_code")[0].lastChild != null) ? data.getElementsByTagName("whs_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['whs_rowid'] = data['whs_rowid'];
            
            this['whs_code'] = data['whs_code'];
        }
    }
}

