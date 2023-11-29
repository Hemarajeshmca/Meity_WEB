var responseDataFormat = "JSON";

function getGSTListRequest(data)
{
    /**
     * @member {getGSTListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getGSTListRequestcontext(data['context']);
    }
}

function getGSTListRequestcontext(data)
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
     * @member {getGSTListRequestFilter} Filter
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
            this['Filter'] = new getGSTListRequestFilter(data['Filter']);
    }
}

function getGSTListRequestFilter(data)
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

function getGSTListResponse(data, format)
{
    /**
     * @member {getGSTListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getGSTListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getGSTListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getGSTListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getGSTListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getGSTListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getGSTListResponseApplicationException(data)
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

function getGSTListResponsecontext(data)
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
     * @member {getGSTListResponseList} List
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
                List.push(new getGSTListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new getGSTListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function getGSTListResponseList(data)
{
    /**
     * @member {Int32} taxrate_rowid
     */
    this['taxrate_rowid'] = null;
    
    /**
     * @member {String} provider_location
     */
    this['provider_location'] = null;
    
    /**
     * @member {String} provider_location_desc
     */
    this['provider_location_desc'] = null;
    
    /**
     * @member {String} reciver_location
     */
    this['reciver_location'] = null;
    
    /**
     * @member {String} reciver_location_desc
     */
    this['reciver_location_desc'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_category_code
     */
    this['hsn_category_code'] = null;
    
    /**
     * @member {String} hsn_category
     */
    this['hsn_category'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['taxrate_rowid'] = parseInt(data.getElementsByTagName("taxrate_rowid")[0].lastChild.nodeValue);
            
            this['provider_location'] = (data.getElementsByTagName("provider_location")[0].lastChild != null) ? data.getElementsByTagName("provider_location")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("provider_location_desc")[0].attributes.length == 0) //Check NULL value
                this['provider_location_desc'] = (data.getElementsByTagName("provider_location_desc")[0].lastChild != null) ? data.getElementsByTagName("provider_location_desc")[0].lastChild.nodeValue : "";
            
            this['reciver_location'] = (data.getElementsByTagName("reciver_location")[0].lastChild != null) ? data.getElementsByTagName("reciver_location")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("reciver_location_desc")[0].attributes.length == 0) //Check NULL value
                this['reciver_location_desc'] = (data.getElementsByTagName("reciver_location_desc")[0].lastChild != null) ? data.getElementsByTagName("reciver_location_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_category_code'] = (data.getElementsByTagName("hsn_category_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_category_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_category")[0].attributes.length == 0) //Check NULL value
                this['hsn_category'] = (data.getElementsByTagName("hsn_category")[0].lastChild != null) ? data.getElementsByTagName("hsn_category")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_description")[0].attributes.length == 0) //Check NULL value
                this['hsn_description'] = (data.getElementsByTagName("hsn_description")[0].lastChild != null) ? data.getElementsByTagName("hsn_description")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['taxrate_rowid'] = data['taxrate_rowid'];
            
            this['provider_location'] = data['provider_location'];
            
            this['provider_location_desc'] = data['provider_location_desc'];
            
            this['reciver_location'] = data['reciver_location'];
            
            this['reciver_location_desc'] = data['reciver_location_desc'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_category_code'] = data['hsn_category_code'];
            
            this['hsn_category'] = data['hsn_category'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

