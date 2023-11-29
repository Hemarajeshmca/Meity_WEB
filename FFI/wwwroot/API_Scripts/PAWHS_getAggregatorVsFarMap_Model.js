var responseDataFormat = "JSON";

function PAWHS_getAggregatorVsFarMapRequest(data)
{
    /**
     * @member {PAWHS_getAggregatorVsFarMapRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getAggregatorVsFarMapRequestcontext(data['context']);
    }
}

function PAWHS_getAggregatorVsFarMapRequestcontext(data)
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
     * @member {PAWHS_getAggregatorVsFarMapRequestHeader} Header
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
            this['Header'] = new PAWHS_getAggregatorVsFarMapRequestHeader(data['Header']);
    }
}

function PAWHS_getAggregatorVsFarMapRequestHeader(data)
{
    /**
     * @member {Int32} agg_farmer_rowid
     */
    this['agg_farmer_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('agg_farmer_rowid'))
            this['agg_farmer_rowid'] = data['agg_farmer_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
    }
}

function PAWHS_getAggregatorVsFarMapResponse(data, format)
{
    /**
     * @member {PAWHS_getAggregatorVsFarMapResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getAggregatorVsFarMapResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getAggregatorVsFarMapResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getAggregatorVsFarMapResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getAggregatorVsFarMapResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getAggregatorVsFarMapResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getAggregatorVsFarMapResponseApplicationException(data)
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

function PAWHS_getAggregatorVsFarMapResponsecontext(data)
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
     * @member {PAWHS_getAggregatorVsFarMapResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getAggregatorVsFarMapResponseFarmersNotMapped} FarmersNotMapped
     */
    this['FarmersNotMapped'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getAggregatorVsFarMapResponseHeader(data.getElementsByTagName("Header")[0]);
            
            FarmersNotMapped = [];
            for(FarmersNotMappedchildi = 0; FarmersNotMappedchildi < data.getElementsByTagName("FarmersNotMapped").length; FarmersNotMappedchildi++)
            {
                FarmersNotMapped.push(new PAWHS_getAggregatorVsFarMapResponseFarmersNotMapped(data.getElementsByTagName("FarmersNotMapped")[FarmersNotMappedchildi]));
            }
            if(data.getElementsByTagName("FarmersNotMapped").length > 0)
                this['FarmersNotMapped'] = FarmersNotMapped;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getAggregatorVsFarMapResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('FarmersNotMapped') && data['FarmersNotMapped'] != null)
            {
                FarmersNotMapped = [];
                for(FarmersNotMappedindex = 0; FarmersNotMappedindex < data['FarmersNotMapped'].length; FarmersNotMappedindex++)
                {
                    FarmersNotMapped.push(new PAWHS_getAggregatorVsFarMapResponseFarmersNotMapped(data['FarmersNotMapped'][FarmersNotMappedindex]));
                }
                this['FarmersNotMapped'] = FarmersNotMapped;
            }
        }
    }
}

function PAWHS_getAggregatorVsFarMapResponseHeader(data)
{
    /**
     * @member {Int32} agg_farmer_rowid
     */
    this['agg_farmer_rowid'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} aggregator_name
     */
    this['aggregator_name'] = null;
    
    /**
     * @member {String} village_covered_code
     */
    this['village_covered_code'] = null;
    
    /**
     * @member {String} village_covered_name
     */
    this['village_covered_name'] = null;
    
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
            this['agg_farmer_rowid'] = parseInt(data.getElementsByTagName("agg_farmer_rowid")[0].lastChild.nodeValue);
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['aggregator_name'] = (data.getElementsByTagName("aggregator_name")[0].lastChild != null) ? data.getElementsByTagName("aggregator_name")[0].lastChild.nodeValue : "";
            
            this['village_covered_code'] = (data.getElementsByTagName("village_covered_code")[0].lastChild != null) ? data.getElementsByTagName("village_covered_code")[0].lastChild.nodeValue : "";
            
            this['village_covered_name'] = (data.getElementsByTagName("village_covered_name")[0].lastChild != null) ? data.getElementsByTagName("village_covered_name")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['agg_farmer_rowid'] = data['agg_farmer_rowid'];
            
            this['agg_code'] = data['agg_code'];
            
            this['aggregator_name'] = data['aggregator_name'];
            
            this['village_covered_code'] = data['village_covered_code'];
            
            this['village_covered_name'] = data['village_covered_name'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getAggregatorVsFarMapResponseFarmersNotMapped(data)
{
    /**
     * @member {Int32} farmer_rowid
     */
    this['farmer_rowid'] = null;
    
    /**
     * @member {String} farmer_id
     */
    this['farmer_id'] = null;
    
    /**
     * @member {String} given_name
     */
    this['given_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} village_name
     */
    this['village_name'] = null;
    
    /**
     * @member {String} dob
     */
    this['dob'] = null;
    
    /**
     * @member {String} gender
     */
    this['gender'] = null;
    
    /**
     * @member {String} regd_mobile_no
     */
    this['regd_mobile_no'] = null;
    
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
            this['farmer_rowid'] = parseInt(data.getElementsByTagName("farmer_rowid")[0].lastChild.nodeValue);
            
            this['farmer_id'] = (data.getElementsByTagName("farmer_id")[0].lastChild != null) ? data.getElementsByTagName("farmer_id")[0].lastChild.nodeValue : "";
            
            this['given_name'] = (data.getElementsByTagName("given_name")[0].lastChild != null) ? data.getElementsByTagName("given_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['village_name'] = (data.getElementsByTagName("village_name")[0].lastChild != null) ? data.getElementsByTagName("village_name")[0].lastChild.nodeValue : "";
            
            this['dob'] = (data.getElementsByTagName("dob")[0].lastChild != null) ? data.getElementsByTagName("dob")[0].lastChild.nodeValue : "";
            
            this['gender'] = (data.getElementsByTagName("gender")[0].lastChild != null) ? data.getElementsByTagName("gender")[0].lastChild.nodeValue : "";
            
            this['regd_mobile_no'] = (data.getElementsByTagName("regd_mobile_no")[0].lastChild != null) ? data.getElementsByTagName("regd_mobile_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_rowid'] = data['farmer_rowid'];
            
            this['farmer_id'] = data['farmer_id'];
            
            this['given_name'] = data['given_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['village_name'] = data['village_name'];
            
            this['dob'] = data['dob'];
            
            this['gender'] = data['gender'];
            
            this['regd_mobile_no'] = data['regd_mobile_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

