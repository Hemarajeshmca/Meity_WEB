var responseDataFormat = "JSON";

function PAWHS_getProduceCalendarListRequest(data)
{
    /**
     * @member {PAWHS_getProduceCalendarListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getProduceCalendarListRequestcontext(data['context']);
    }
}

function PAWHS_getProduceCalendarListRequestcontext(data)
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
     * @member {PAWHS_getProduceCalendarListRequestFilter} Filter
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
            this['Filter'] = new PAWHS_getProduceCalendarListRequestFilter(data['Filter']);
    }
}

function PAWHS_getProduceCalendarListRequestFilter(data)
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

function PAWHS_getProduceCalendarListResponse(data, format)
{
    /**
     * @member {PAWHS_getProduceCalendarListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getProduceCalendarListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getProduceCalendarListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getProduceCalendarListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getProduceCalendarListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getProduceCalendarListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getProduceCalendarListResponseApplicationException(data)
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

function PAWHS_getProduceCalendarListResponsecontext(data)
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
     * @member {PAWHS_getProduceCalendarListResponseList} List
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
                List.push(new PAWHS_getProduceCalendarListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new PAWHS_getProduceCalendarListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getProduceCalendarListResponseList(data)
{
    /**
     * @member {Int32} producecal_rowid
     */
    this['producecal_rowid'] = null;
    
    /**
     * @member {String} pac_no
     */
    this['pac_no'] = null;
    
    /**
     * @member {String} pac_year
     */
    this['pac_year'] = null;
    
    /**
     * @member {String} pac_date
     */
    this['pac_date'] = null;
    
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {Int16} jan
     */
    this['jan'] = null;
    
    /**
     * @member {Int16} feb
     */
    this['feb'] = null;
    
    /**
     * @member {Int16} mar
     */
    this['mar'] = null;
    
    /**
     * @member {Int16} apr
     */
    this['apr'] = null;
    
    /**
     * @member {Int16} may
     */
    this['may'] = null;
    
    /**
     * @member {Int16} jun
     */
    this['jun'] = null;
    
    /**
     * @member {Int16} jul
     */
    this['jul'] = null;
    
    /**
     * @member {Int16} aug
     */
    this['aug'] = null;
    
    /**
     * @member {Int16} sep
     */
    this['sep'] = null;
    
    /**
     * @member {Int16} oct
     */
    this['oct'] = null;
    
    /**
     * @member {Int16} nov
     */
    this['nov'] = null;
    
    /**
     * @member {Int16} dec
     */
    this['dec'] = null;
    
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
            this['producecal_rowid'] = parseInt(data.getElementsByTagName("producecal_rowid")[0].lastChild.nodeValue);
            
            this['pac_no'] = (data.getElementsByTagName("pac_no")[0].lastChild != null) ? data.getElementsByTagName("pac_no")[0].lastChild.nodeValue : "";
            
            this['pac_year'] = (data.getElementsByTagName("pac_year")[0].lastChild != null) ? data.getElementsByTagName("pac_year")[0].lastChild.nodeValue : "";
            
            this['pac_date'] = (data.getElementsByTagName("pac_date")[0].lastChild != null) ? data.getElementsByTagName("pac_date")[0].lastChild.nodeValue : "";
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['jan'] = parseInt(data.getElementsByTagName("jan")[0].lastChild.nodeValue);
            
            this['feb'] = parseInt(data.getElementsByTagName("feb")[0].lastChild.nodeValue);
            
            this['mar'] = parseInt(data.getElementsByTagName("mar")[0].lastChild.nodeValue);
            
            this['apr'] = parseInt(data.getElementsByTagName("apr")[0].lastChild.nodeValue);
            
            this['may'] = parseInt(data.getElementsByTagName("may")[0].lastChild.nodeValue);
            
            this['jun'] = parseInt(data.getElementsByTagName("jun")[0].lastChild.nodeValue);
            
            this['jul'] = parseInt(data.getElementsByTagName("jul")[0].lastChild.nodeValue);
            
            this['aug'] = parseInt(data.getElementsByTagName("aug")[0].lastChild.nodeValue);
            
            this['sep'] = parseInt(data.getElementsByTagName("sep")[0].lastChild.nodeValue);
            
            this['oct'] = parseInt(data.getElementsByTagName("oct")[0].lastChild.nodeValue);
            
            this['nov'] = parseInt(data.getElementsByTagName("nov")[0].lastChild.nodeValue);
            
            this['dec'] = parseInt(data.getElementsByTagName("dec")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['producecal_rowid'] = data['producecal_rowid'];
            
            this['pac_no'] = data['pac_no'];
            
            this['pac_year'] = data['pac_year'];
            
            this['pac_date'] = data['pac_date'];
            
            this['agg_code'] = data['agg_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['item_code'] = data['item_code'];
            
            this['jan'] = data['jan'];
            
            this['feb'] = data['feb'];
            
            this['mar'] = data['mar'];
            
            this['apr'] = data['apr'];
            
            this['may'] = data['may'];
            
            this['jun'] = data['jun'];
            
            this['jul'] = data['jul'];
            
            this['aug'] = data['aug'];
            
            this['sep'] = data['sep'];
            
            this['oct'] = data['oct'];
            
            this['nov'] = data['nov'];
            
            this['dec'] = data['dec'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

