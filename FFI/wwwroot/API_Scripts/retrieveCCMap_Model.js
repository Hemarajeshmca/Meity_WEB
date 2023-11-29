var responseDataFormat = "JSON";

function retrieveCCMapRequest(data)
{
    /**
     * @member {retrieveCCMapRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCCMapRequestcontext(data['context']);
    }
}

function retrieveCCMapRequestcontext(data)
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
     * @member {retrieveCCMapRequestHeader} Header
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
            this['Header'] = new retrieveCCMapRequestHeader(data['Header']);
    }
}

function retrieveCCMapRequestHeader(data)
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

function retrieveCCMapResponse(data, format)
{
    /**
     * @member {retrieveCCMapResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCCMapResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCCMapResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCCMapResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCCMapResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCCMapResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCCMapResponseApplicationException(data)
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

function retrieveCCMapResponsecontext(data)
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
     * @member {retrieveCCMapResponseCCVillage} CCVillage
     */
    this['CCVillage'] = null;
    
    /**
     * @member {retrieveCCMapResponseCCCP} CCCP
     */
    this['CCCP'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            CCVillage = [];
            for(CCVillagechildi = 0; CCVillagechildi < data.getElementsByTagName("CCVillage").length; CCVillagechildi++)
            {
                CCVillage.push(new retrieveCCMapResponseCCVillage(data.getElementsByTagName("CCVillage")[CCVillagechildi]));
            }
            if(data.getElementsByTagName("CCVillage").length > 0)
                this['CCVillage'] = CCVillage;
            
            CCCP = [];
            for(CCCPchildi = 0; CCCPchildi < data.getElementsByTagName("CCCP").length; CCCPchildi++)
            {
                CCCP.push(new retrieveCCMapResponseCCCP(data.getElementsByTagName("CCCP")[CCCPchildi]));
            }
            if(data.getElementsByTagName("CCCP").length > 0)
                this['CCCP'] = CCCP;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('CCVillage') && data['CCVillage'] != null)
            {
                CCVillage = [];
                for(CCVillageindex = 0; CCVillageindex < data['CCVillage'].length; CCVillageindex++)
                {
                    CCVillage.push(new retrieveCCMapResponseCCVillage(data['CCVillage'][CCVillageindex]));
                }
                this['CCVillage'] = CCVillage;
            }
            
            
            if(data.hasOwnProperty('CCCP') && data['CCCP'] != null)
            {
                CCCP = [];
                for(CCCPindex = 0; CCCPindex < data['CCCP'].length; CCCPindex++)
                {
                    CCCP.push(new retrieveCCMapResponseCCCP(data['CCCP'][CCCPindex]));
                }
                this['CCCP'] = CCCP;
            }
        }
    }
}

function retrieveCCMapResponseCCVillage(data)
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
     * @member {String} village_desc
     */
    this['village_desc'] = null;
    
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
            this['ccvillage_rowid'] = parseInt(data.getElementsByTagName("ccvillage_rowid")[0].lastChild.nodeValue);
            
            this['village_code'] = (data.getElementsByTagName("village_code")[0].lastChild != null) ? data.getElementsByTagName("village_code")[0].lastChild.nodeValue : "";
            
            this['village_desc'] = (data.getElementsByTagName("village_desc")[0].lastChild != null) ? data.getElementsByTagName("village_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['ccvillage_rowid'] = data['ccvillage_rowid'];
            
            this['village_code'] = data['village_code'];
            
            this['village_desc'] = data['village_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveCCMapResponseCCCP(data)
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
     * @member {String} cp_aggrloc_desc
     */
    this['cp_aggrloc_desc'] = null;
    
    /**
     * @member {String} final_aggr_code
     */
    this['final_aggr_code'] = null;
    
    /**
     * @member {String} final_aggr_desc
     */
    this['final_aggr_desc'] = null;
    
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
            this['cccp_rowid'] = parseInt(data.getElementsByTagName("cccp_rowid")[0].lastChild.nodeValue);
            
            this['cp_aggrloc_code'] = (data.getElementsByTagName("cp_aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['cp_aggrloc_desc'] = (data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild != null) ? data.getElementsByTagName("cp_aggrloc_desc")[0].lastChild.nodeValue : "";
            
            this['final_aggr_code'] = (data.getElementsByTagName("final_aggr_code")[0].lastChild != null) ? data.getElementsByTagName("final_aggr_code")[0].lastChild.nodeValue : "";
            
            this['final_aggr_desc'] = (data.getElementsByTagName("final_aggr_desc")[0].lastChild != null) ? data.getElementsByTagName("final_aggr_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['cccp_rowid'] = data['cccp_rowid'];
            
            this['cp_aggrloc_code'] = data['cp_aggrloc_code'];
            
            this['cp_aggrloc_desc'] = data['cp_aggrloc_desc'];
            
            this['final_aggr_code'] = data['final_aggr_code'];
            
            this['final_aggr_desc'] = data['final_aggr_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

