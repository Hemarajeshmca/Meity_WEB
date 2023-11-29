var responseDataFormat = "JSON";

function PAWHS_getMappedFarmersListRequest(data)
{
    /**
     * @member {PAWHS_getMappedFarmersListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getMappedFarmersListRequestcontext(data['context']);
    }
}

function PAWHS_getMappedFarmersListRequestcontext(data)
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
     * @member {PAWHS_getMappedFarmersListRequestFilter} Filter
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
            this['Filter'] = new PAWHS_getMappedFarmersListRequestFilter(data['Filter']);
    }
}

function PAWHS_getMappedFarmersListRequestFilter(data)
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

function PAWHS_getMappedFarmersListResponse(data, format)
{
    /**
     * @member {PAWHS_getMappedFarmersListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getMappedFarmersListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getMappedFarmersListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getMappedFarmersListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getMappedFarmersListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getMappedFarmersListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getMappedFarmersListResponseApplicationException(data)
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

function PAWHS_getMappedFarmersListResponsecontext(data)
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
     * @member {PAWHS_getMappedFarmersListResponseList} List
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
                List.push(new PAWHS_getMappedFarmersListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new PAWHS_getMappedFarmersListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getMappedFarmersListResponseList(data)
{
    /**
     * @member {Int32} farmer_rowid
     */
    this['farmer_rowid'] = null;
    
    /**
     * @member {String} farmer_id
     */
    this['farmer_id'] = null;
    
    /**
     * @member {String} pa_id
     */
    this['pa_id'] = null;
    
    /**
     * @member {String} given_name
     */
    this['given_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} village_code
     */
    this['village_code'] = null;
    
    /**
     * @member {String} village_name
     */
    this['village_name'] = null;
    
    /**
     * @member {String} dob
     */
    this['dob'] = null;
    
    /**
     * @member {String} gender
     */
    this['gender'] = null;
    
    /**
     * @member {String} regd_mobile_no
     */
    this['regd_mobile_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_rowid'] = parseInt(data.getElementsByTagName("farmer_rowid")[0].lastChild.nodeValue);
            
            this['farmer_id'] = (data.getElementsByTagName("farmer_id")[0].lastChild != null) ? data.getElementsByTagName("farmer_id")[0].lastChild.nodeValue : "";
            
            this['pa_id'] = (data.getElementsByTagName("pa_id")[0].lastChild != null) ? data.getElementsByTagName("pa_id")[0].lastChild.nodeValue : "";
            
            this['given_name'] = (data.getElementsByTagName("given_name")[0].lastChild != null) ? data.getElementsByTagName("given_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['village_code'] = (data.getElementsByTagName("village_code")[0].lastChild != null) ? data.getElementsByTagName("village_code")[0].lastChild.nodeValue : "";
            
            this['village_name'] = (data.getElementsByTagName("village_name")[0].lastChild != null) ? data.getElementsByTagName("village_name")[0].lastChild.nodeValue : "";
            
            this['dob'] = (data.getElementsByTagName("dob")[0].lastChild != null) ? data.getElementsByTagName("dob")[0].lastChild.nodeValue : "";
            
            this['gender'] = (data.getElementsByTagName("gender")[0].lastChild != null) ? data.getElementsByTagName("gender")[0].lastChild.nodeValue : "";
            
            this['regd_mobile_no'] = (data.getElementsByTagName("regd_mobile_no")[0].lastChild != null) ? data.getElementsByTagName("regd_mobile_no")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_rowid'] = data['farmer_rowid'];
            
            this['farmer_id'] = data['farmer_id'];
            
            this['pa_id'] = data['pa_id'];
            
            this['given_name'] = data['given_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['village_code'] = data['village_code'];
            
            this['village_name'] = data['village_name'];
            
            this['dob'] = data['dob'];
            
            this['gender'] = data['gender'];
            
            this['regd_mobile_no'] = data['regd_mobile_no'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

