var responseDataFormat = "JSON";

function PAWHS_getWarehouseRegListRequest(data)
{
    /**
     * @member {PAWHS_getWarehouseRegListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getWarehouseRegListRequestcontext(data['context']);
    }
}

function PAWHS_getWarehouseRegListRequestcontext(data)
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
     * @member {PAWHS_getWarehouseRegListRequestFilter} Filter
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
            this['Filter'] = new PAWHS_getWarehouseRegListRequestFilter(data['Filter']);
    }
}

function PAWHS_getWarehouseRegListRequestFilter(data)
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

function PAWHS_getWarehouseRegListResponse(data, format)
{
    /**
     * @member {PAWHS_getWarehouseRegListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getWarehouseRegListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getWarehouseRegListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getWarehouseRegListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getWarehouseRegListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getWarehouseRegListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getWarehouseRegListResponseApplicationException(data)
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

function PAWHS_getWarehouseRegListResponsecontext(data)
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
     * @member {PAWHS_getWarehouseRegListResponseList} List
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
                List.push(new PAWHS_getWarehouseRegListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new PAWHS_getWarehouseRegListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getWarehouseRegListResponseList(data)
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
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['whs_rowid'] = parseInt(data.getElementsByTagName("whs_rowid")[0].lastChild.nodeValue);
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['whs_code'] = (data.getElementsByTagName("whs_code")[0].lastChild != null) ? data.getElementsByTagName("whs_code")[0].lastChild.nodeValue : "";
            
            this['whs_type'] = (data.getElementsByTagName("whs_type")[0].lastChild != null) ? data.getElementsByTagName("whs_type")[0].lastChild.nodeValue : "";
            
            this['whs_name'] = (data.getElementsByTagName("whs_name")[0].lastChild != null) ? data.getElementsByTagName("whs_name")[0].lastChild.nodeValue : "";
            
            this['whs_addr1'] = (data.getElementsByTagName("whs_addr1")[0].lastChild != null) ? data.getElementsByTagName("whs_addr1")[0].lastChild.nodeValue : "";
            
            this['whs_addr2'] = (data.getElementsByTagName("whs_addr2")[0].lastChild != null) ? data.getElementsByTagName("whs_addr2")[0].lastChild.nodeValue : "";
            
            this['whs_country'] = (data.getElementsByTagName("whs_country")[0].lastChild != null) ? data.getElementsByTagName("whs_country")[0].lastChild.nodeValue : "";
            
            this['whs_state'] = (data.getElementsByTagName("whs_state")[0].lastChild != null) ? data.getElementsByTagName("whs_state")[0].lastChild.nodeValue : "";
            
            this['whs_dist'] = (data.getElementsByTagName("whs_dist")[0].lastChild != null) ? data.getElementsByTagName("whs_dist")[0].lastChild.nodeValue : "";
            
            this['whs_taluk'] = (data.getElementsByTagName("whs_taluk")[0].lastChild != null) ? data.getElementsByTagName("whs_taluk")[0].lastChild.nodeValue : "";
            
            this['whs_panchayat'] = (data.getElementsByTagName("whs_panchayat")[0].lastChild != null) ? data.getElementsByTagName("whs_panchayat")[0].lastChild.nodeValue : "";
            
            this['whs_village'] = (data.getElementsByTagName("whs_village")[0].lastChild != null) ? data.getElementsByTagName("whs_village")[0].lastChild.nodeValue : "";
            
            this['whs_pincode'] = (data.getElementsByTagName("whs_pincode")[0].lastChild != null) ? data.getElementsByTagName("whs_pincode")[0].lastChild.nodeValue : "";
            
            this['sqrf_area'] = parseInt(data.getElementsByTagName("sqrf_area")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['whs_rowid'] = data['whs_rowid'];
            
            this['agg_code'] = data['agg_code'];
            
            this['whs_code'] = data['whs_code'];
            
            this['whs_type'] = data['whs_type'];
            
            this['whs_name'] = data['whs_name'];
            
            this['whs_addr1'] = data['whs_addr1'];
            
            this['whs_addr2'] = data['whs_addr2'];
            
            this['whs_country'] = data['whs_country'];
            
            this['whs_state'] = data['whs_state'];
            
            this['whs_dist'] = data['whs_dist'];
            
            this['whs_taluk'] = data['whs_taluk'];
            
            this['whs_panchayat'] = data['whs_panchayat'];
            
            this['whs_village'] = data['whs_village'];
            
            this['whs_pincode'] = data['whs_pincode'];
            
            this['sqrf_area'] = data['sqrf_area'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

