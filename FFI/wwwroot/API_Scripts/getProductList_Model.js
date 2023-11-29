var responseDataFormat = "JSON";

function getProductListRequest(data)
{
    /**
     * @member {getProductListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getProductListRequestcontext(data['context']);
    }
}

function getProductListRequestcontext(data)
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
     * @member {getProductListRequestFilter} Filter
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
            this['Filter'] = new getProductListRequestFilter(data['Filter']);
    }
}

function getProductListRequestFilter(data)
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

function getProductListResponse(data, format)
{
    /**
     * @member {getProductListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getProductListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getProductListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getProductListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getProductListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getProductListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getProductListResponseApplicationException(data)
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

function getProductListResponsecontext(data)
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
     * @member {getProductListResponseList} List
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
                List.push(new getProductListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new getProductListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function getProductListResponseList(data)
{
    /**
     * @member {Int32} product_rowid
     */
    this['product_rowid'] = null;
    
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_catg_desc
     */
    this['product_catg_desc'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} product_subcatg_desc
     */
    this['product_subcatg_desc'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_name
     */
    this['product_name'] = null;
    
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
            this['product_rowid'] = data.getElementsByTagName("product_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("product_catg_code")[0].attributes.length == 0) //Check NULL value
                this['product_catg_code'] = (data.getElementsByTagName("product_catg_code")[0].lastChild != null) ? data.getElementsByTagName("product_catg_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_catg_desc")[0].attributes.length == 0) //Check NULL value
                this['product_catg_desc'] = (data.getElementsByTagName("product_catg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_catg_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_subcatg_code")[0].attributes.length == 0) //Check NULL value
                this['product_subcatg_code'] = (data.getElementsByTagName("product_subcatg_code")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_subcatg_desc")[0].attributes.length == 0) //Check NULL value
                this['product_subcatg_desc'] = (data.getElementsByTagName("product_subcatg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_code")[0].attributes.length == 0) //Check NULL value
                this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_name")[0].attributes.length == 0) //Check NULL value
                this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['product_rowid'] = data['product_rowid'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_name'] = data['product_name'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

