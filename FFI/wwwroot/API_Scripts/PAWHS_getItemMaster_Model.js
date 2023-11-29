var responseDataFormat = "JSON";

function PAWHS_getItemMasterRequest(data)
{
    /**
     * @member {PAWHS_getItemMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getItemMasterRequestcontext(data['context']);
    }
}

function PAWHS_getItemMasterRequestcontext(data)
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
     * @member {PAWHS_getItemMasterRequestHeader} Header
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
            this['Header'] = new PAWHS_getItemMasterRequestHeader(data['Header']);
    }
}

function PAWHS_getItemMasterRequestHeader(data)
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
    
    if(data)
    {
        if(data.hasOwnProperty('item_rowid'))
            this['item_rowid'] = data['item_rowid'];
        
        if(data.hasOwnProperty('agg_code'))
            this['agg_code'] = data['agg_code'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
    }
}

function PAWHS_getItemMasterResponse(data, format)
{
    /**
     * @member {PAWHS_getItemMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getItemMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getItemMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getItemMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getItemMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getItemMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getItemMasterResponseApplicationException(data)
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

function PAWHS_getItemMasterResponsecontext(data)
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
     * @member {PAWHS_getItemMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getItemMasterResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getItemMasterResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_getItemMasterResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getItemMasterResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_getItemMasterResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_getItemMasterResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['item_rowid'] = data.getElementsByTagName("item_rowid")[0].lastChild.nodeValue;
            
            this['agg_code'] = (data.getElementsByTagName("agg_code")[0].lastChild != null) ? data.getElementsByTagName("agg_code")[0].lastChild.nodeValue : "";
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            this['item_ll_name'] = (data.getElementsByTagName("item_ll_name")[0].lastChild != null) ? data.getElementsByTagName("item_ll_name")[0].lastChild.nodeValue : "";
            
            this['item_type'] = (data.getElementsByTagName("item_type")[0].lastChild != null) ? data.getElementsByTagName("item_type")[0].lastChild.nodeValue : "";
            
            this['fg_category'] = (data.getElementsByTagName("fg_category")[0].lastChild != null) ? data.getElementsByTagName("fg_category")[0].lastChild.nodeValue : "";
            
            this['fg_subcategory'] = (data.getElementsByTagName("fg_subcategory")[0].lastChild != null) ? data.getElementsByTagName("fg_subcategory")[0].lastChild.nodeValue : "";
            
            this['uom_code'] = (data.getElementsByTagName("uom_code")[0].lastChild != null) ? data.getElementsByTagName("uom_code")[0].lastChild.nodeValue : "";
            
            this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_description'] = (data.getElementsByTagName("hsn_description")[0].lastChild != null) ? data.getElementsByTagName("hsn_description")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['item_rowid'] = data['item_rowid'];
            
            this['agg_code'] = data['agg_code'];
            
            this['item_code'] = data['item_code'];
            
            this['item_name'] = data['item_name'];
            
            this['item_ll_name'] = data['item_ll_name'];
            
            this['item_type'] = data['item_type'];
            
            this['fg_category'] = data['fg_category'];
            
            this['fg_subcategory'] = data['fg_subcategory'];
            
            this['uom_code'] = data['uom_code'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getItemMasterResponseDetail(data)
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
     * @member {String} quality_desc
     */
    this['quality_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['item_dtl_rowid'] = data.getElementsByTagName("item_dtl_rowid")[0].lastChild.nodeValue;
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['quality'] = (data.getElementsByTagName("quality")[0].lastChild != null) ? data.getElementsByTagName("quality")[0].lastChild.nodeValue : "";
            
            this['quality_desc'] = (data.getElementsByTagName("quality_desc")[0].lastChild != null) ? data.getElementsByTagName("quality_desc")[0].lastChild.nodeValue : "";
            
            this['base_price'] = data.getElementsByTagName("base_price")[0].lastChild.nodeValue;
            
            this['range_1'] = (data.getElementsByTagName("range_1")[0].lastChild != null) ? data.getElementsByTagName("range_1")[0].lastChild.nodeValue : "";
            
            this['range_2'] = (data.getElementsByTagName("range_2")[0].lastChild != null) ? data.getElementsByTagName("range_2")[0].lastChild.nodeValue : "";
            
            this['range_3'] = (data.getElementsByTagName("range_3")[0].lastChild != null) ? data.getElementsByTagName("range_3")[0].lastChild.nodeValue : "";
            
            this['range_4'] = (data.getElementsByTagName("range_4")[0].lastChild != null) ? data.getElementsByTagName("range_4")[0].lastChild.nodeValue : "";
            
            this['range_5'] = (data.getElementsByTagName("range_5")[0].lastChild != null) ? data.getElementsByTagName("range_5")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['item_dtl_rowid'] = data['item_dtl_rowid'];
            
            this['item_code'] = data['item_code'];
            
            this['quality'] = data['quality'];
            
            this['quality_desc'] = data['quality_desc'];
            
            this['base_price'] = data['base_price'].toFixed(2);
            
            this['range_1'] = data['range_1'];
            
            this['range_2'] = data['range_2'];
            
            this['range_3'] = data['range_3'];
            
            this['range_4'] = data['range_4'];
            
            this['range_5'] = data['range_5'];
            
            this['status_code'] = data['status_code'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

