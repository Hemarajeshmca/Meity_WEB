var responseDataFormat = "JSON";

function retrieveESPRegListRequest(data)
{
    /**
     * @member {retrieveESPRegListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveESPRegListRequestcontext(data['context']);
    }
}

function retrieveESPRegListRequestcontext(data)
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
     * @member {retrieveESPRegListRequestFilter} Filter
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
            this['Filter'] = new retrieveESPRegListRequestFilter(data['Filter']);
    }
}

function retrieveESPRegListRequestFilter(data)
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
     * @member {String} FilterBy_FromValue
     */
    this['FilterBy_FromValue'] = null;
    
    /**
     * @member {String} FilterBy_ToValue
     */
    this['FilterBy_ToValue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_FromValue'))
            this['FilterBy_FromValue'] = data['FilterBy_FromValue'];
        
        if(data.hasOwnProperty('FilterBy_ToValue'))
            this['FilterBy_ToValue'] = data['FilterBy_ToValue'];
        
    }
}

function retrieveESPRegListResponse(data, format)
{
    /**
     * @member {retrieveESPRegListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveESPRegListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveESPRegListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveESPRegListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveESPRegListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveESPRegListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveESPRegListResponseApplicationException(data)
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

function retrieveESPRegListResponsecontext(data)
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
     * @member {retrieveESPRegListResponseList} List
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
                List.push(new retrieveESPRegListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveESPRegListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveESPRegListResponseList(data)
{
    /**
     * @member {Int32} orgn_rowid
     */
    this['orgn_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {Int16} version_no
     */
    this['version_no'] = null;
    
    /**
     * @member {String} orgn_cin
     */
    this['orgn_cin'] = null;
    
    /**
     * @member {String} primary_lang_code
     */
    this['primary_lang_code'] = null;
    
    /**
     * @member {String} parent_code
     */
    this['parent_code'] = null;
    
    /**
     * @member {String} orgn_name
     */
    this['orgn_name'] = null;
    
    /**
     * @member {String} orgn_ll_name
     */
    this['orgn_ll_name'] = null;
    
    /**
     * @member {String} orgn_level
     */
    this['orgn_level'] = null;
    
    /**
     * @member {String} orgn_level_desc
     */
    this['orgn_level_desc'] = null;
    
    /**
     * @member {String} orgn_type
     */
    this['orgn_type'] = null;
    
    /**
     * @member {String} orgn_type_desc
     */
    this['orgn_type_desc'] = null;
    
    /**
     * @member {String} orgn_subtype
     */
    this['orgn_subtype'] = null;
    
    /**
     * @member {String} orgn_subtype_desc
     */
    this['orgn_subtype_desc'] = null;
    
    /**
     * @member {String} secondary_lang_code
     */
    this['secondary_lang_code'] = null;
    
    /**
     * @member {String} orgn_logo
     */
    this['orgn_logo'] = null;
    
    /**
     * @member {String} orgn_auth_sign
     */
    this['orgn_auth_sign'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgn_rowid'] = parseInt(data.getElementsByTagName("orgn_rowid")[0].lastChild.nodeValue);
            
            this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            this['version_no'] = parseInt(data.getElementsByTagName("version_no")[0].lastChild.nodeValue);
            
            this['orgn_cin'] = (data.getElementsByTagName("orgn_cin")[0].lastChild != null) ? data.getElementsByTagName("orgn_cin")[0].lastChild.nodeValue : "";
            
            this['primary_lang_code'] = (data.getElementsByTagName("primary_lang_code")[0].lastChild != null) ? data.getElementsByTagName("primary_lang_code")[0].lastChild.nodeValue : "";
            
            this['parent_code'] = (data.getElementsByTagName("parent_code")[0].lastChild != null) ? data.getElementsByTagName("parent_code")[0].lastChild.nodeValue : "";
            
            this['orgn_name'] = (data.getElementsByTagName("orgn_name")[0].lastChild != null) ? data.getElementsByTagName("orgn_name")[0].lastChild.nodeValue : "";
            
            this['orgn_ll_name'] = (data.getElementsByTagName("orgn_ll_name")[0].lastChild != null) ? data.getElementsByTagName("orgn_ll_name")[0].lastChild.nodeValue : "";
            
            this['orgn_level'] = (data.getElementsByTagName("orgn_level")[0].lastChild != null) ? data.getElementsByTagName("orgn_level")[0].lastChild.nodeValue : "";
            
            this['orgn_level_desc'] = (data.getElementsByTagName("orgn_level_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_level_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_type'] = (data.getElementsByTagName("orgn_type")[0].lastChild != null) ? data.getElementsByTagName("orgn_type")[0].lastChild.nodeValue : "";
            
            this['orgn_type_desc'] = (data.getElementsByTagName("orgn_type_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_type_desc")[0].lastChild.nodeValue : "";
            
            this['orgn_subtype'] = (data.getElementsByTagName("orgn_subtype")[0].lastChild != null) ? data.getElementsByTagName("orgn_subtype")[0].lastChild.nodeValue : "";
            
            this['orgn_subtype_desc'] = (data.getElementsByTagName("orgn_subtype_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_subtype_desc")[0].lastChild.nodeValue : "";
            
            this['secondary_lang_code'] = (data.getElementsByTagName("secondary_lang_code")[0].lastChild != null) ? data.getElementsByTagName("secondary_lang_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("orgn_logo")[0].attributes.length == 0) //Check NULL value
                this['orgn_logo'] = (data.getElementsByTagName("orgn_logo")[0].lastChild != null) ? data.getElementsByTagName("orgn_logo")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("orgn_auth_sign")[0].attributes.length == 0) //Check NULL value
                this['orgn_auth_sign'] = (data.getElementsByTagName("orgn_auth_sign")[0].lastChild != null) ? data.getElementsByTagName("orgn_auth_sign")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgn_rowid'] = data['orgn_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['version_no'] = data['version_no'];
            
            this['orgn_cin'] = data['orgn_cin'];
            
            this['primary_lang_code'] = data['primary_lang_code'];
            
            this['parent_code'] = data['parent_code'];
            
            this['orgn_name'] = data['orgn_name'];
            
            this['orgn_ll_name'] = data['orgn_ll_name'];
            
            this['orgn_level'] = data['orgn_level'];
            
            this['orgn_level_desc'] = data['orgn_level_desc'];
            
            this['orgn_type'] = data['orgn_type'];
            
            this['orgn_type_desc'] = data['orgn_type_desc'];
            
            this['orgn_subtype'] = data['orgn_subtype'];
            
            this['orgn_subtype_desc'] = data['orgn_subtype_desc'];
            
            this['secondary_lang_code'] = data['secondary_lang_code'];
            
            this['orgn_logo'] = data['orgn_logo'];
            
            this['orgn_auth_sign'] = data['orgn_auth_sign'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

