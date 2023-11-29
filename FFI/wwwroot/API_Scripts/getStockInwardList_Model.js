var responseDataFormat = "JSON";

function getStockInwardListRequest(data)
{
    /**
     * @member {getStockInwardListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getStockInwardListRequestcontext(data['context']);
    }
}

function getStockInwardListRequestcontext(data)
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
     * @member {getStockInwardListRequestFilter} Filter
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
            this['Filter'] = new getStockInwardListRequestFilter(data['Filter']);
    }
}

function getStockInwardListRequestFilter(data)
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

function getStockInwardListResponse(data, format)
{
    /**
     * @member {getStockInwardListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getStockInwardListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getStockInwardListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getStockInwardListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getStockInwardListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getStockInwardListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getStockInwardListResponseApplicationException(data)
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

function getStockInwardListResponsecontext(data)
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
     * @member {getStockInwardListResponseList} List
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
                List.push(new getStockInwardListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new getStockInwardListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function getStockInwardListResponseList(data)
{
    /**
     * @member {Int32} inward_rowid
     */
    this['inward_rowid'] = null;
    
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {String} ic_name
     */
    this['ic_name'] = null;
    
    /**
     * @member {String} grn_no
     */
    this['grn_no'] = null;
    
    /**
     * @member {String} grn_date
     */
    this['grn_date'] = null;
    
    /**
     * @member {String} supplier_name
     */
    this['supplier_name'] = null;
    
    /**
     * @member {String} supplier_location
     */
    this['supplier_location'] = null;
    
    /**
     * @member {String} from_state
     */
    this['from_state'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['inward_rowid'] = data.getElementsByTagName("inward_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_name")[0].attributes.length == 0) //Check NULL value
                this['ic_name'] = (data.getElementsByTagName("ic_name")[0].lastChild != null) ? data.getElementsByTagName("ic_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("grn_no")[0].attributes.length == 0) //Check NULL value
                this['grn_no'] = (data.getElementsByTagName("grn_no")[0].lastChild != null) ? data.getElementsByTagName("grn_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("grn_date")[0].attributes.length == 0) //Check NULL value
                this['grn_date'] = (data.getElementsByTagName("grn_date")[0].lastChild != null) ? data.getElementsByTagName("grn_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("supplier_name")[0].attributes.length == 0) //Check NULL value
                this['supplier_name'] = (data.getElementsByTagName("supplier_name")[0].lastChild != null) ? data.getElementsByTagName("supplier_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("supplier_location")[0].attributes.length == 0) //Check NULL value
                this['supplier_location'] = (data.getElementsByTagName("supplier_location")[0].lastChild != null) ? data.getElementsByTagName("supplier_location")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("from_state")[0].attributes.length == 0) //Check NULL value
                this['from_state'] = (data.getElementsByTagName("from_state")[0].lastChild != null) ? data.getElementsByTagName("from_state")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['inward_rowid'] = data['inward_rowid'];
            
            this['ic_code'] = data['ic_code'];
            
            this['ic_name'] = data['ic_name'];
            
            this['grn_no'] = data['grn_no'];
            
            this['grn_date'] = data['grn_date'];
            
            this['supplier_name'] = data['supplier_name'];
            
            this['supplier_location'] = data['supplier_location'];
            
            this['from_state'] = data['from_state'];
            
            this['status_code'] = data['status_code'];
        }
    }
}

