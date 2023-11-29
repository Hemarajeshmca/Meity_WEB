var responseDataFormat = "JSON";

function saveCCMapRequest(data)
{
    /**
     * @member {saveCCMapRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveCCMapRequestcontext(data['context']);
    }
}

function saveCCMapRequestcontext(data)
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
     * @member {saveCCMapRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveCCMapRequestCCVillage} CCVillage
     */
    this['CCVillage'] = null;
    
    /**
     * @member {saveCCMapRequestCCCP} CCCP
     */
    this['CCCP'] = null;
    
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
            this['Header'] = new saveCCMapRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('CCVillage') && data['CCVillage'] != null)
        {
            CCVillage = [];
            for(CCVillageindex = 0; CCVillageindex < data['CCVillage'].length; CCVillageindex++)
            {
                CCVillage.push(new saveCCMapRequestCCVillage(data['CCVillage'][CCVillageindex]));
            }
            this['CCVillage'] = CCVillage;
        }
        
        if(data.hasOwnProperty('CCCP') && data['CCCP'] != null)
        {
            CCCP = [];
            for(CCCPindex = 0; CCCPindex < data['CCCP'].length; CCCPindex++)
            {
                CCCP.push(new saveCCMapRequestCCCP(data['CCCP'][CCCPindex]));
            }
            this['CCCP'] = CCCP;
        }
    }
}

function saveCCMapRequestHeader(data)
{
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
    }
}

function saveCCMapRequestCCVillage(data)
{
    /**
     * @member {Int32} ccvillage_rowid
     */
    this['ccvillage_rowid'] = null;
    
    /**
     * @member {String} village_code
     */
    this['village_code'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('ccvillage_rowid'))
            this['ccvillage_rowid'] = data['ccvillage_rowid'];
        
        if(data.hasOwnProperty('village_code'))
            this['village_code'] = data['village_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCCMapRequestCCCP(data)
{
    /**
     * @member {Int32} cccp_rowid
     */
    this['cccp_rowid'] = null;
    
    /**
     * @member {String} cp_aggrloc_code
     */
    this['cp_aggrloc_code'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('cccp_rowid'))
            this['cccp_rowid'] = data['cccp_rowid'];
        
        if(data.hasOwnProperty('cp_aggrloc_code'))
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveCCMapResponse(data, format)
{
    /**
     * @member {saveCCMapResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveCCMapResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveCCMapResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveCCMapResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveCCMapResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveCCMapResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveCCMapResponseApplicationException(data)
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

function saveCCMapResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

