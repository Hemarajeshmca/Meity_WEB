var responseDataFormat = "JSON";

function retrieveICDGENListRequest(data)
{
    /**
     * @member {retrieveICDGENListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveICDGENListRequestcontext(data['context']);
    }
}

function retrieveICDGENListRequestcontext(data)
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
     * @member {retrieveICDGENListRequestFilter} Filter
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
            this['Filter'] = new retrieveICDGENListRequestFilter(data['Filter']);
    }
}

function retrieveICDGENListRequestFilter(data)
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
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrieveICDGENListResponse(data, format)
{
    /**
     * @member {retrieveICDGENListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveICDGENListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveICDGENListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveICDGENListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveICDGENListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveICDGENListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveICDGENListResponseApplicationException(data)
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

function retrieveICDGENListResponsecontext(data)
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
     * @member {retrieveICDGENListResponseICDGenDtl} ICDGenDtl
     */
    this['ICDGenDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            ICDGenDtl = [];
            for(ICDGenDtlchildi = 0; ICDGenDtlchildi < data.getElementsByTagName("ICDGenDtl").length; ICDGenDtlchildi++)
            {
                ICDGenDtl.push(new retrieveICDGENListResponseICDGenDtl(data.getElementsByTagName("ICDGenDtl")[ICDGenDtlchildi]));
            }
            if(data.getElementsByTagName("ICDGenDtl").length > 0)
                this['ICDGenDtl'] = ICDGenDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('ICDGenDtl') && data['ICDGenDtl'] != null)
            {
                ICDGenDtl = [];
                for(ICDGenDtlindex = 0; ICDGenDtlindex < data['ICDGenDtl'].length; ICDGenDtlindex++)
                {
                    ICDGenDtl.push(new retrieveICDGENListResponseICDGenDtl(data['ICDGenDtl'][ICDGenDtlindex]));
                }
                this['ICDGenDtl'] = ICDGenDtl;
            }
        }
    }
}

function retrieveICDGENListResponseICDGenDtl(data)
{
    /**
     * @member {Int32} icdemand_rowid
     */
    this['icdemand_rowid'] = null;
    
    /**
     * @member {String} icdemand_code
     */
    this['icdemand_code'] = null;
    
    /**
     * @member {String} icdemand_desc
     */
    this['icdemand_desc'] = null;
    
    /**
     * @member {String} icdemand_date
     */
    this['icdemand_date'] = null;
    
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
            this['icdemand_rowid'] = parseInt(data.getElementsByTagName("icdemand_rowid")[0].lastChild.nodeValue);
            
            this['icdemand_code'] = (data.getElementsByTagName("icdemand_code")[0].lastChild != null) ? data.getElementsByTagName("icdemand_code")[0].lastChild.nodeValue : "";
            
            this['icdemand_desc'] = (data.getElementsByTagName("icdemand_desc")[0].lastChild != null) ? data.getElementsByTagName("icdemand_desc")[0].lastChild.nodeValue : "";
            
            this['icdemand_date'] = (data.getElementsByTagName("icdemand_date")[0].lastChild != null) ? data.getElementsByTagName("icdemand_date")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['icdemand_rowid'] = data['icdemand_rowid'];
            
            this['icdemand_code'] = data['icdemand_code'];
            
            this['icdemand_desc'] = data['icdemand_desc'];
            
            this['icdemand_date'] = data['icdemand_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

