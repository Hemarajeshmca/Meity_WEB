var responseDataFormat = "JSON";

function getGSTMasterListRequest(data)
{
    /**
     * @member {getGSTMasterListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getGSTMasterListRequestcontext(data['context']);
    }
}

function getGSTMasterListRequestcontext(data)
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
     * @member {getGSTMasterListRequestFilter} Filter
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
            this['Filter'] = new getGSTMasterListRequestFilter(data['Filter']);
    }
}

function getGSTMasterListRequestFilter(data)
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

function getGSTMasterListResponse(data, format)
{
    /**
     * @member {getGSTMasterListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getGSTMasterListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getGSTMasterListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getGSTMasterListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getGSTMasterListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getGSTMasterListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getGSTMasterListResponseApplicationException(data)
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

function getGSTMasterListResponsecontext(data)
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
     * @member {getGSTMasterListResponseList} List
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
                List.push(new getGSTMasterListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new getGSTMasterListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function getGSTMasterListResponseList(data)
{
    /**
     * @member {Int32} gstmaster_rowid
     */
    this['gstmaster_rowid'] = null;
    
    /**
     * @member {String} state_desc
     */
    this['state_desc'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_desc
     */
    this['hsn_desc'] = null;
    
    /**
     * @member {Decimal} cgst
     */
    this['cgst'] = null;
    
    /**
     * @member {Decimal} sgst
     */
    this['sgst'] = null;
    
    /**
     * @member {Decimal} igst
     */
    this['igst'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['gstmaster_rowid'] = parseInt(data.getElementsByTagName("gstmaster_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("state_desc")[0].attributes.length == 0) //Check NULL value
                this['state_desc'] = (data.getElementsByTagName("state_desc")[0].lastChild != null) ? data.getElementsByTagName("state_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_desc'] = (data.getElementsByTagName("hsn_desc")[0].lastChild != null) ? data.getElementsByTagName("hsn_desc")[0].lastChild.nodeValue : "";
            
            this['cgst'] = parseFloat(data.getElementsByTagName("cgst")[0].lastChild.nodeValue);
            
            this['sgst'] = parseFloat(data.getElementsByTagName("sgst")[0].lastChild.nodeValue);
            
            this['igst'] = parseFloat(data.getElementsByTagName("igst")[0].lastChild.nodeValue);
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['gstmaster_rowid'] = data['gstmaster_rowid'];
            
            this['state_desc'] = data['state_desc'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_desc'] = data['hsn_desc'];
            
            this['cgst'] = data['cgst'];
            
            this['sgst'] = data['sgst'];
            
            this['igst'] = data['igst'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

