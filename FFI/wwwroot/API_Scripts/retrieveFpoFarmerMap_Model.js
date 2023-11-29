var responseDataFormat = "JSON";

function retrieveFpoFarmerMapRequest(data)
{
    /**
     * @member {retrieveFpoFarmerMapRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFpoFarmerMapRequestcontext(data['context']);
    }
}

function retrieveFpoFarmerMapRequestcontext(data)
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
     * @member {retrieveFpoFarmerMapRequestHeader} Header
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
            this['Header'] = new retrieveFpoFarmerMapRequestHeader(data['Header']);
    }
}

function retrieveFpoFarmerMapRequestHeader(data)
{
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveFpoFarmerMapResponse(data, format)
{
    /**
     * @member {retrieveFpoFarmerMapResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFpoFarmerMapResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFpoFarmerMapResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFpoFarmerMapResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFpoFarmerMapResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFpoFarmerMapResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFpoFarmerMapResponseApplicationException(data)
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

function retrieveFpoFarmerMapResponsecontext(data)
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
     * @member {retrieveFpoFarmerMapResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFpoFarmerMapResponseMap} Map
     */
    this['Map'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFpoFarmerMapResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Map = [];
            for(Mapchildi = 0; Mapchildi < data.getElementsByTagName("Map").length; Mapchildi++)
            {
                Map.push(new retrieveFpoFarmerMapResponseMap(data.getElementsByTagName("Map")[Mapchildi]));
            }
            if(data.getElementsByTagName("Map").length > 0)
                this['Map'] = Map;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFpoFarmerMapResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Map') && data['Map'] != null)
            {
                Map = [];
                for(Mapindex = 0; Mapindex < data['Map'].length; Mapindex++)
                {
                    Map.push(new retrieveFpoFarmerMapResponseMap(data['Map'][Mapindex]));
                }
                this['Map'] = Map;
            }
        }
    }
}

function retrieveFpoFarmerMapResponseHeader(data)
{
    /**
     * @member {String} fpoorgn_desc
     */
    this['fpoorgn_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['fpoorgn_desc'] = (data.getElementsByTagName("fpoorgn_desc")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpoorgn_desc'] = data['fpoorgn_desc'];
        }
    }
}

function retrieveFpoFarmerMapResponseMap(data)
{
    /**
     * @member {Int32} fpomember_rowid
     */
    this['fpomember_rowid'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {String} member_sur_name
     */
    this['member_sur_name'] = null;
    
    /**
     * @member {String} member_dob
     */
    this['member_dob'] = null;
    
    /**
     * @member {String} member_gender_flag
     */
    this['member_gender_flag'] = null;
    
    /**
     * @member {String} member_gender_flag_desc
     */
    this['member_gender_flag_desc'] = null;
    
    /**
     * @member {String} member_reg_mob_no
     */
    this['member_reg_mob_no'] = null;
    
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
            this['fpomember_rowid'] = parseInt(data.getElementsByTagName("fpomember_rowid")[0].lastChild.nodeValue);
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['member_sur_name'] = (data.getElementsByTagName("member_sur_name")[0].lastChild != null) ? data.getElementsByTagName("member_sur_name")[0].lastChild.nodeValue : "";
            
            this['member_dob'] = (data.getElementsByTagName("member_dob")[0].lastChild != null) ? data.getElementsByTagName("member_dob")[0].lastChild.nodeValue : "";
            
            this['member_gender_flag'] = (data.getElementsByTagName("member_gender_flag")[0].lastChild != null) ? data.getElementsByTagName("member_gender_flag")[0].lastChild.nodeValue : "";
            
            this['member_gender_flag_desc'] = (data.getElementsByTagName("member_gender_flag_desc")[0].lastChild != null) ? data.getElementsByTagName("member_gender_flag_desc")[0].lastChild.nodeValue : "";
            
            this['member_reg_mob_no'] = (data.getElementsByTagName("member_reg_mob_no")[0].lastChild != null) ? data.getElementsByTagName("member_reg_mob_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpomember_rowid'] = data['fpomember_rowid'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['member_name'] = data['member_name'];
            
            this['member_sur_name'] = data['member_sur_name'];
            
            this['member_dob'] = data['member_dob'];
            
            this['member_gender_flag'] = data['member_gender_flag'];
            
            this['member_gender_flag_desc'] = data['member_gender_flag_desc'];
            
            this['member_reg_mob_no'] = data['member_reg_mob_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

