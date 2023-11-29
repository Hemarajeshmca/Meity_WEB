var responseDataFormat = "JSON";

function retrieveCCMilkmanMapRequest(data)
{
    /**
     * @member {retrieveCCMilkmanMapRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCCMilkmanMapRequestcontext(data['context']);
    }
}

function retrieveCCMilkmanMapRequestcontext(data)
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
     * @member {retrieveCCMilkmanMapRequestHeader} Header
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
            this['Header'] = new retrieveCCMilkmanMapRequestHeader(data['Header']);
    }
}

function retrieveCCMilkmanMapRequestHeader(data)
{
    /**
     * @member {String} aggrorgn_type
     */
    this['aggrorgn_type'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('aggrorgn_type'))
            this['aggrorgn_type'] = data['aggrorgn_type'];
        
        if(data.hasOwnProperty('aggrorgn_code'))
            this['aggrorgn_code'] = data['aggrorgn_code'];
        
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
    }
}

function retrieveCCMilkmanMapResponse(data, format)
{
    /**
     * @member {retrieveCCMilkmanMapResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCCMilkmanMapResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCCMilkmanMapResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCCMilkmanMapResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCCMilkmanMapResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCCMilkmanMapResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCCMilkmanMapResponseApplicationException(data)
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

function retrieveCCMilkmanMapResponsecontext(data)
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
     * @member {retrieveCCMilkmanMapResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveCCMilkmanMapResponseMap} Map
     */
    this['Map'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCCMilkmanMapResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Map = [];
            for(Mapchildi = 0; Mapchildi < data.getElementsByTagName("Map").length; Mapchildi++)
            {
                Map.push(new retrieveCCMilkmanMapResponseMap(data.getElementsByTagName("Map")[Mapchildi]));
            }
            if(data.getElementsByTagName("Map").length > 0)
                this['Map'] = Map;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCCMilkmanMapResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Map') && data['Map'] != null)
            {
                Map = [];
                for(Mapindex = 0; Mapindex < data['Map'].length; Mapindex++)
                {
                    Map.push(new retrieveCCMilkmanMapResponseMap(data['Map'][Mapindex]));
                }
                this['Map'] = Map;
            }
        }
    }
}

function retrieveCCMilkmanMapResponseHeader(data)
{
    /**
     * @member {String} village_covered
     */
    this['village_covered'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['village_covered'] = (data.getElementsByTagName("village_covered")[0].lastChild != null) ? data.getElementsByTagName("village_covered")[0].lastChild.nodeValue : "";
        }
        else {
            this['village_covered'] = data['village_covered'];
        }
    }
}

function retrieveCCMilkmanMapResponseMap(data)
{
    /**
     * @member {Int32} milkman_rowid
     */
    this['milkman_rowid'] = null;
    
    /**
     * @member {String} milkman_code
     */
    this['milkman_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} farmer_dob
     */
    this['farmer_dob'] = null;
    
    /**
     * @member {String} gender_flag
     */
    this['gender_flag'] = null;
    
    /**
     * @member {String} gender_flag_desc
     */
    this['gender_flag_desc'] = null;
    
    /**
     * @member {String} reg_mobile_no
     */
    this['reg_mobile_no'] = null;
    
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
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['milkman_rowid'] = parseInt(data.getElementsByTagName("milkman_rowid")[0].lastChild.nodeValue);
            
            this['milkman_code'] = (data.getElementsByTagName("milkman_code")[0].lastChild != null) ? data.getElementsByTagName("milkman_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['farmer_dob'] = (data.getElementsByTagName("farmer_dob")[0].lastChild != null) ? data.getElementsByTagName("farmer_dob")[0].lastChild.nodeValue : "";
            
            this['gender_flag'] = (data.getElementsByTagName("gender_flag")[0].lastChild != null) ? data.getElementsByTagName("gender_flag")[0].lastChild.nodeValue : "";
            
            this['gender_flag_desc'] = (data.getElementsByTagName("gender_flag_desc")[0].lastChild != null) ? data.getElementsByTagName("gender_flag_desc")[0].lastChild.nodeValue : "";
            
            this['reg_mobile_no'] = (data.getElementsByTagName("reg_mobile_no")[0].lastChild != null) ? data.getElementsByTagName("reg_mobile_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['milkman_rowid'] = data['milkman_rowid'];
            
            this['milkman_code'] = data['milkman_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['farmer_dob'] = data['farmer_dob'];
            
            this['gender_flag'] = data['gender_flag'];
            
            this['gender_flag_desc'] = data['gender_flag_desc'];
            
            this['reg_mobile_no'] = data['reg_mobile_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

