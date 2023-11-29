var responseDataFormat = "JSON";

function PAWHS_FarmerloginRequest(data)
{
    /**
     * @member {PAWHS_FarmerloginRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_FarmerloginRequestcontext(data['context']);
    }
}

function PAWHS_FarmerloginRequestcontext(data)
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
     * @member {PAWHS_FarmerloginRequestHeader} Header
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
            this['Header'] = new PAWHS_FarmerloginRequestHeader(data['Header']);
    }
}

function PAWHS_FarmerloginRequestHeader(data)
{
    /**
     * @member {String} login_id
     */
    this['login_id'] = null;
    
    /**
     * @member {String} user_pwd
     */
    this['user_pwd'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('login_id'))
            this['login_id'] = data['login_id'];
        
        if(data.hasOwnProperty('user_pwd'))
            this['user_pwd'] = data['user_pwd'];
        
    }
}

function PAWHS_FarmerloginResponse(data, format)
{
    /**
     * @member {PAWHS_FarmerloginResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_FarmerloginResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_FarmerloginResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_FarmerloginResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_FarmerloginResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_FarmerloginResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_FarmerloginResponseApplicationException(data)
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

function PAWHS_FarmerloginResponsecontext(data)
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
     * @member {PAWHS_FarmerloginResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_FarmerloginResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_FarmerloginResponseHeader(data['Header']);
        }
    }
}

function PAWHS_FarmerloginResponseHeader(data)
{
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} aggregator_name
     */
    this['aggregator_name'] = null;
    
    /**
     * @member {String} farmer_addr1
     */
    this['farmer_addr1'] = null;
    
    /**
     * @member {String} farmer_addr2
     */
    this['farmer_addr2'] = null;
    
    /**
     * @member {String} village_code
     */
    this['village_code'] = null;
    
    /**
     * @member {String} village_desc
     */
    this['village_desc'] = null;
    
    /**
     * @member {String} pincode
     */
    this['pincode'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['aggregator_name'] = (data.getElementsByTagName("aggregator_name")[0].lastChild != null) ? data.getElementsByTagName("aggregator_name")[0].lastChild.nodeValue : "";
            
            this['farmer_addr1'] = (data.getElementsByTagName("farmer_addr1")[0].lastChild != null) ? data.getElementsByTagName("farmer_addr1")[0].lastChild.nodeValue : "";
            
            this['farmer_addr2'] = (data.getElementsByTagName("farmer_addr2")[0].lastChild != null) ? data.getElementsByTagName("farmer_addr2")[0].lastChild.nodeValue : "";
            
            this['village_code'] = (data.getElementsByTagName("village_code")[0].lastChild != null) ? data.getElementsByTagName("village_code")[0].lastChild.nodeValue : "";
            
            this['village_desc'] = (data.getElementsByTagName("village_desc")[0].lastChild != null) ? data.getElementsByTagName("village_desc")[0].lastChild.nodeValue : "";
            
            this['pincode'] = (data.getElementsByTagName("pincode")[0].lastChild != null) ? data.getElementsByTagName("pincode")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['aggregator_name'] = data['aggregator_name'];
            
            this['farmer_addr1'] = data['farmer_addr1'];
            
            this['farmer_addr2'] = data['farmer_addr2'];
            
            this['village_code'] = data['village_code'];
            
            this['village_desc'] = data['village_desc'];
            
            this['pincode'] = data['pincode'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

