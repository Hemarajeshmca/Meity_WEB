var responseDataFormat = "JSON";

function retrieveCustomerListRequest(data)
{
    /**
     * @member {retrieveCustomerListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCustomerListRequestcontext(data['context']);
    }
}

function retrieveCustomerListRequestcontext(data)
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
     * @member {retrieveCustomerListRequestFilter} Filter
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
            this['Filter'] = new retrieveCustomerListRequestFilter(data['Filter']);
    }
}

function retrieveCustomerListRequestFilter(data)
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
    
    /**
     * @member {Int16} from_index
     */
    this['from_index'] = null;
    
    /**
     * @member {Int16} to_index
     */
    this['to_index'] = null;
    
    /**
     * @member {Int16} record_count
     */
    this['record_count'] = null;
    
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
        
        if(data.hasOwnProperty('from_index'))
            this['from_index'] = data['from_index'];
        
        if(data.hasOwnProperty('to_index'))
            this['to_index'] = data['to_index'];
        
        if(data.hasOwnProperty('record_count'))
            this['record_count'] = data['record_count'];
        
    }
}

function retrieveCustomerListResponse(data, format)
{
    /**
     * @member {retrieveCustomerListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCustomerListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCustomerListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCustomerListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCustomerListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCustomerListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCustomerListResponseApplicationException(data)
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

function retrieveCustomerListResponsecontext(data)
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
     * @member {retrieveCustomerListResponseFilter} Filter
     */
    this['Filter'] = null;
    
    /**
     * @member {retrieveCustomerListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Filter'] = new retrieveCustomerListResponseFilter(data.getElementsByTagName("Filter")[0]);
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new retrieveCustomerListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Filter'] = new retrieveCustomerListResponseFilter(data['Filter']);
            
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new retrieveCustomerListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveCustomerListResponseFilter(data)
{
    /**
     * @member {Int16} record_count
     */
    this['record_count'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['record_count'] = parseInt(data.getElementsByTagName("record_count")[0].lastChild.nodeValue);
        }
        else {
            this['record_count'] = data['record_count'];
        }
    }
}

function retrieveCustomerListResponseList(data)
{
    /**
     * @member {String} user_type_code
     */
    this['user_type_code'] = null;
    
    /**
     * @member {String} user_type
     */
    this['user_type'] = null;
    
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} user_pwd
     */
    this['user_pwd'] = null;
    
    /**
     * @member {String} valid_till
     */
    this['valid_till'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} role_desc
     */
    this['role_desc'] = null;
    
    /**
     * @member {String} facilitator_orgn_code
     */
    this['facilitator_orgn_code'] = null;
    
    /**
     * @member {String} facilitator_orgn
     */
    this['facilitator_orgn'] = null;
    
    /**
     * @member {String} contact_no
     */
    this['contact_no'] = null;
    
    /**
     * @member {String} email_id
     */
    this['email_id'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['user_type_code'] = (data.getElementsByTagName("user_type_code")[0].lastChild != null) ? data.getElementsByTagName("user_type_code")[0].lastChild.nodeValue : "";
            
            this['user_type'] = (data.getElementsByTagName("user_type")[0].lastChild != null) ? data.getElementsByTagName("user_type")[0].lastChild.nodeValue : "";
            
            this['user_code'] = (data.getElementsByTagName("user_code")[0].lastChild != null) ? data.getElementsByTagName("user_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
            
            this['user_pwd'] = (data.getElementsByTagName("user_pwd")[0].lastChild != null) ? data.getElementsByTagName("user_pwd")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("valid_till")[0].attributes.length == 0) //Check NULL value
                this['valid_till'] = (data.getElementsByTagName("valid_till")[0].lastChild != null) ? data.getElementsByTagName("valid_till")[0].lastChild.nodeValue : "";
            
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['role_desc'] = (data.getElementsByTagName("role_desc")[0].lastChild != null) ? data.getElementsByTagName("role_desc")[0].lastChild.nodeValue : "";
            
            this['facilitator_orgn_code'] = (data.getElementsByTagName("facilitator_orgn_code")[0].lastChild != null) ? data.getElementsByTagName("facilitator_orgn_code")[0].lastChild.nodeValue : "";
            
            this['facilitator_orgn'] = (data.getElementsByTagName("facilitator_orgn")[0].lastChild != null) ? data.getElementsByTagName("facilitator_orgn")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("contact_no")[0].attributes.length == 0) //Check NULL value
                this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("email_id")[0].attributes.length == 0) //Check NULL value
                this['email_id'] = (data.getElementsByTagName("email_id")[0].lastChild != null) ? data.getElementsByTagName("email_id")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['user_type_code'] = data['user_type_code'];
            
            this['user_type'] = data['user_type'];
            
            this['user_code'] = data['user_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['user_name'] = data['user_name'];
            
            this['user_pwd'] = data['user_pwd'];
            
            this['valid_till'] = data['valid_till'];
            
            this['role_code'] = data['role_code'];
            
            this['role_desc'] = data['role_desc'];
            
            this['facilitator_orgn_code'] = data['facilitator_orgn_code'];
            
            this['facilitator_orgn'] = data['facilitator_orgn'];
            
            this['contact_no'] = data['contact_no'];
            
            this['email_id'] = data['email_id'];
            
            this['status_code'] = data['status_code'];
        }
    }
}

