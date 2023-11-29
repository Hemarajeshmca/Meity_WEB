var responseDataFormat = "JSON";

function PAWHS_saveItemMasterRequest(data)
{
    /**
     * @member {PAWHS_saveItemMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveItemMasterRequestcontext(data['context']);
    }
}

function PAWHS_saveItemMasterRequestcontext(data)
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
     * @member {PAWHS_saveItemMasterRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveItemMasterRequestDetail} Detail
     */
    this['Detail'] = null;
    
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
            this['Header'] = new PAWHS_saveItemMasterRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new PAWHS_saveItemMasterRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function PAWHS_saveItemMasterRequestHeader(data)
{
    /**
     * @member {Int32} item_rowid
     */
    this['item_rowid'] = null;
    
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
     * @member {String} item_ll_name
     */
    this['item_ll_name'] = null;
    
    /**
     * @member {String} item_type
     */
    this['item_type'] = null;
    
    /**
     * @member {String} fg_category
     */
    this['fg_category'] = null;
    
    /**
     * @member {String} fg_subcategory
     */
    this['fg_subcategory'] = null;
    
    /**
     * @member {String} uom_code
     */
    this['uom_code'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
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
        if(data.hasOwnProperty('item_rowid'))
            this['item_rowid'] = data['item_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('item_name'))
            this['item_name'] = data['item_name'];
        
        if(data.hasOwnProperty('item_ll_name'))
            this['item_ll_name'] = data['item_ll_name'];
        
        if(data.hasOwnProperty('item_type'))
            this['item_type'] = data['item_type'];
        
        if(data.hasOwnProperty('fg_category'))
            this['fg_category'] = data['fg_category'];
        
        if(data.hasOwnProperty('fg_subcategory'))
            this['fg_subcategory'] = data['fg_subcategory'];
        
        if(data.hasOwnProperty('uom_code'))
            this['uom_code'] = data['uom_code'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('hsn_description'))
            this['hsn_description'] = data['hsn_description'];
        
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

function PAWHS_saveItemMasterRequestDetail(data)
{
    /**
     * @member {Int32} item_dtl_rowid
     */
    this['item_dtl_rowid'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} quality
     */
    this['quality'] = null;
    
    /**
     * @member {Decimal} base_price
     */
    this['base_price'] = null;
    
    /**
     * @member {String} range_1
     */
    this['range_1'] = null;
    
    /**
     * @member {String} range_2
     */
    this['range_2'] = null;
    
    /**
     * @member {String} range_3
     */
    this['range_3'] = null;
    
    /**
     * @member {String} range_4
     */
    this['range_4'] = null;
    
    /**
     * @member {String} range_5
     */
    this['range_5'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('item_dtl_rowid'))
            this['item_dtl_rowid'] = data['item_dtl_rowid'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('quality'))
            this['quality'] = data['quality'];
        
        if(data.hasOwnProperty('base_price'))
            this['base_price'] = data['base_price'];
        
        if(data.hasOwnProperty('range_1'))
            this['range_1'] = data['range_1'];
        
        if(data.hasOwnProperty('range_2'))
            this['range_2'] = data['range_2'];
        
        if(data.hasOwnProperty('range_3'))
            this['range_3'] = data['range_3'];
        
        if(data.hasOwnProperty('range_4'))
            this['range_4'] = data['range_4'];
        
        if(data.hasOwnProperty('range_5'))
            this['range_5'] = data['range_5'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveItemMasterResponse(data, format)
{
    /**
     * @member {PAWHS_saveItemMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveItemMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveItemMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveItemMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveItemMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveItemMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveItemMasterResponseApplicationException(data)
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

function PAWHS_saveItemMasterResponsecontext(data)
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
     * @member {PAWHS_saveItemMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveItemMasterResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveItemMasterResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveItemMasterResponseHeader(data)
{
    /**
     * @member {Int32} item_rowid
     */
    this['item_rowid'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['item_rowid'] = data.getElementsByTagName("item_rowid")[0].lastChild.nodeValue;
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['item_rowid'] = data['item_rowid'];
            
            this['item_code'] = data['item_code'];
        }
    }
}

