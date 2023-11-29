var responseDataFormat = "JSON";

function PAWHS_ItemFetchRequest(data)
{
    /**
     * @member {PAWHS_ItemFetchRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_ItemFetchRequestcontext(data['context']);
    }
}

function PAWHS_ItemFetchRequestcontext(data)
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
     * @member {PAWHS_ItemFetchRequestHeader} Header
     */
    this['Header'] = null;
    
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
            this['Header'] = new PAWHS_ItemFetchRequestHeader(data['Header']);
    }
}

function PAWHS_ItemFetchRequestHeader(data)
{
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
    }
}

function PAWHS_ItemFetchResponse(data, format)
{
    /**
     * @member {PAWHS_ItemFetchResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_ItemFetchResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_ItemFetchResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_ItemFetchResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_ItemFetchResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_ItemFetchResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_ItemFetchResponseApplicationException(data)
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

function PAWHS_ItemFetchResponsecontext(data)
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
     * @member {PAWHS_ItemFetchResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_ItemFetchResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_ItemFetchResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_ItemFetchResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_ItemFetchResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_ItemFetchResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_ItemFetchResponseHeader(data)
{
    /**
     * @member {String} agg_code
     */
    this['agg_code'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} item_name
     */
    this['item_name'] = null;
    
    /**
     * @member {String} uom_code
     */
    this['uom_code'] = null;
    
    /**
     * @member {String} uom_desc
     */
    this['uom_desc'] = null;
    
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
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            this['uom_code'] = (data.getElementsByTagName("uom_code")[0].lastChild != null) ? data.getElementsByTagName("uom_code")[0].lastChild.nodeValue : "";
            
            this['uom_desc'] = (data.getElementsByTagName("uom_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['agg_code'] = data['agg_code'];
            
            this['item_code'] = data['item_code'];
            
            this['item_name'] = data['item_name'];
            
            this['uom_code'] = data['uom_code'];
            
            this['uom_desc'] = data['uom_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_ItemFetchResponseDetail(data)
{
    /**
     * @member {String} quality_code
     */
    this['quality_code'] = null;
    
    /**
     * @member {String} quality_desc
     */
    this['quality_desc'] = null;
    
    /**
     * @member {String} range1
     */
    this['range1'] = null;
    
    /**
     * @member {String} range2
     */
    this['range2'] = null;
    
    /**
     * @member {String} range3
     */
    this['range3'] = null;
    
    /**
     * @member {String} range4
     */
    this['range4'] = null;
    
    /**
     * @member {String} range5
     */
    this['range5'] = null;
    
    /**
     * @member {String} product_range
     */
    this['product_range'] = null;
    
    /**
     * @member {String} product_range_desc
     */
    this['product_range_desc'] = null;
    
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
            this['quality_code'] = (data.getElementsByTagName("quality_code")[0].lastChild != null) ? data.getElementsByTagName("quality_code")[0].lastChild.nodeValue : "";
            
            this['quality_desc'] = (data.getElementsByTagName("quality_desc")[0].lastChild != null) ? data.getElementsByTagName("quality_desc")[0].lastChild.nodeValue : "";
            
            this['range1'] = (data.getElementsByTagName("range1")[0].lastChild != null) ? data.getElementsByTagName("range1")[0].lastChild.nodeValue : "";
            
            this['range2'] = (data.getElementsByTagName("range2")[0].lastChild != null) ? data.getElementsByTagName("range2")[0].lastChild.nodeValue : "";
            
            this['range3'] = (data.getElementsByTagName("range3")[0].lastChild != null) ? data.getElementsByTagName("range3")[0].lastChild.nodeValue : "";
            
            this['range4'] = (data.getElementsByTagName("range4")[0].lastChild != null) ? data.getElementsByTagName("range4")[0].lastChild.nodeValue : "";
            
            this['range5'] = (data.getElementsByTagName("range5")[0].lastChild != null) ? data.getElementsByTagName("range5")[0].lastChild.nodeValue : "";
            
            this['product_range'] = (data.getElementsByTagName("product_range")[0].lastChild != null) ? data.getElementsByTagName("product_range")[0].lastChild.nodeValue : "";
            
            this['product_range_desc'] = (data.getElementsByTagName("product_range_desc")[0].lastChild != null) ? data.getElementsByTagName("product_range_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['quality_code'] = data['quality_code'];
            
            this['quality_desc'] = data['quality_desc'];
            
            this['range1'] = data['range1'];
            
            this['range2'] = data['range2'];
            
            this['range3'] = data['range3'];
            
            this['range4'] = data['range4'];
            
            this['range5'] = data['range5'];
            
            this['product_range'] = data['product_range'];
            
            this['product_range_desc'] = data['product_range_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

