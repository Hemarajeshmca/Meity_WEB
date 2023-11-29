var responseDataFormat = "JSON";

function PAWHS_saveProduceCalendarRequest(data)
{
    /**
     * @member {PAWHS_saveProduceCalendarRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveProduceCalendarRequestcontext(data['context']);
    }
}

function PAWHS_saveProduceCalendarRequestcontext(data)
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
     * @member {PAWHS_saveProduceCalendarRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveProduceCalendarRequestList} List
     */
    this['List'] = null;
    
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
            this['Header'] = new PAWHS_saveProduceCalendarRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('List') && data['List'] != null)
        {
            List = [];
            for(Listindex = 0; Listindex < data['List'].length; Listindex++)
            {
                List.push(new PAWHS_saveProduceCalendarRequestList(data['List'][Listindex]));
            }
            this['List'] = List;
        }
    }
}

function PAWHS_saveProduceCalendarRequestHeader(data)
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
     * @member {String} pac_date
     */
    this['pac_date'] = null;
    
    /**
     * @member {String} pac_year
     */
    this['pac_year'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
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
        if(data.hasOwnProperty('producecal_rowid'))
            this['producecal_rowid'] = data['producecal_rowid'];
        
        if(data.hasOwnProperty('pac_no'))
            this['pac_no'] = data['pac_no'];
        
        if(data.hasOwnProperty('pac_date'))
            this['pac_date'] = data['pac_date'];
        
        if(data.hasOwnProperty('pac_year'))
            this['pac_year'] = data['pac_year'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveProduceCalendarRequestList(data)
{
    /**
     * @member {Int32} item_rowid
     */
    this['item_rowid'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} item_desc
     */
    this['item_desc'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('item_rowid'))
            this['item_rowid'] = data['item_rowid'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('item_desc'))
            this['item_desc'] = data['item_desc'];
        
        if(data.hasOwnProperty('uom'))
            this['uom'] = data['uom'];
        
        if(data.hasOwnProperty('jan'))
            this['jan'] = data['jan'];
        
        if(data.hasOwnProperty('feb'))
            this['feb'] = data['feb'];
        
        if(data.hasOwnProperty('mar'))
            this['mar'] = data['mar'];
        
        if(data.hasOwnProperty('apr'))
            this['apr'] = data['apr'];
        
        if(data.hasOwnProperty('may'))
            this['may'] = data['may'];
        
        if(data.hasOwnProperty('jun'))
            this['jun'] = data['jun'];
        
        if(data.hasOwnProperty('jul'))
            this['jul'] = data['jul'];
        
        if(data.hasOwnProperty('aug'))
            this['aug'] = data['aug'];
        
        if(data.hasOwnProperty('sep'))
            this['sep'] = data['sep'];
        
        if(data.hasOwnProperty('oct'))
            this['oct'] = data['oct'];
        
        if(data.hasOwnProperty('nov'))
            this['nov'] = data['nov'];
        
        if(data.hasOwnProperty('dec'))
            this['dec'] = data['dec'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveProduceCalendarResponse(data, format)
{
    /**
     * @member {PAWHS_saveProduceCalendarResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveProduceCalendarResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveProduceCalendarResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveProduceCalendarResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveProduceCalendarResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveProduceCalendarResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveProduceCalendarResponseApplicationException(data)
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

function PAWHS_saveProduceCalendarResponsecontext(data)
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
     * @member {PAWHS_saveProduceCalendarResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveProduceCalendarResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveProduceCalendarResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveProduceCalendarResponseHeader(data)
{
    /**
     * @member {Int32} producecal_rowid
     */
    this['producecal_rowid'] = null;
    
    /**
     * @member {String} pac_no
     */
    this['pac_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['producecal_rowid'] = parseInt(data.getElementsByTagName("producecal_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("pac_no")[0].attributes.length == 0) //Check NULL value
                this['pac_no'] = (data.getElementsByTagName("pac_no")[0].lastChild != null) ? data.getElementsByTagName("pac_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['producecal_rowid'] = data['producecal_rowid'];
            
            this['pac_no'] = data['pac_no'];
        }
    }
}

