var responseDataFormat = "JSON";

function PAWHS_saveAggregatorVsFarMapRequest(data)
{
    /**
     * @member {PAWHS_saveAggregatorVsFarMapRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveAggregatorVsFarMapRequestcontext(data['context']);
    }
}

function PAWHS_saveAggregatorVsFarMapRequestcontext(data)
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
     * @member {PAWHS_saveAggregatorVsFarMapRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveAggregatorVsFarMapRequestFarmersMapped} FarmersMapped
     */
    this['FarmersMapped'] = null;
    
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
            this['Header'] = new PAWHS_saveAggregatorVsFarMapRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('FarmersMapped') && data['FarmersMapped'] != null)
        {
            FarmersMapped = [];
            for(FarmersMappedindex = 0; FarmersMappedindex < data['FarmersMapped'].length; FarmersMappedindex++)
            {
                FarmersMapped.push(new PAWHS_saveAggregatorVsFarMapRequestFarmersMapped(data['FarmersMapped'][FarmersMappedindex]));
            }
            this['FarmersMapped'] = FarmersMapped;
        }
    }
}

function PAWHS_saveAggregatorVsFarMapRequestHeader(data)
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
        if(data.hasOwnProperty('agg_farmer_rowid'))
            this['agg_farmer_rowid'] = data['agg_farmer_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('aggregator_name'))
            this['aggregator_name'] = data['aggregator_name'];
        
        if(data.hasOwnProperty('village_covered_code'))
            this['village_covered_code'] = data['village_covered_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveAggregatorVsFarMapRequestFarmersMapped(data)
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
     * @member {String} pa_id
     */
    this['pa_id'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('farmer_rowid'))
            this['farmer_rowid'] = data['farmer_rowid'];
        
        if(data.hasOwnProperty('farmer_id'))
            this['farmer_id'] = data['farmer_id'];
        
        if(data.hasOwnProperty('pa_id'))
            this['pa_id'] = data['pa_id'];
        
        if(data.hasOwnProperty('given_name'))
            this['given_name'] = data['given_name'];
        
        if(data.hasOwnProperty('sur_name'))
            this['sur_name'] = data['sur_name'];
        
        if(data.hasOwnProperty('village_name'))
            this['village_name'] = data['village_name'];
        
        if(data.hasOwnProperty('dob'))
            this['dob'] = data['dob'];
        
        if(data.hasOwnProperty('gender'))
            this['gender'] = data['gender'];
        
        if(data.hasOwnProperty('regd_mobile_no'))
            this['regd_mobile_no'] = data['regd_mobile_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveAggregatorVsFarMapResponse(data, format)
{
    /**
     * @member {PAWHS_saveAggregatorVsFarMapResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveAggregatorVsFarMapResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveAggregatorVsFarMapResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveAggregatorVsFarMapResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveAggregatorVsFarMapResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveAggregatorVsFarMapResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveAggregatorVsFarMapResponseApplicationException(data)
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

function PAWHS_saveAggregatorVsFarMapResponsecontext(data)
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
     * @member {PAWHS_saveAggregatorVsFarMapResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveAggregatorVsFarMapResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveAggregatorVsFarMapResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveAggregatorVsFarMapResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['agg_farmer_rowid'] = parseInt(data.getElementsByTagName("agg_farmer_rowid")[0].lastChild.nodeValue);
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['agg_farmer_rowid'] = data['agg_farmer_rowid'];
            
            this['agg_code'] = data['agg_code'];
        }
    }
}

