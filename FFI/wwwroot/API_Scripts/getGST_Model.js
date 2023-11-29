var responseDataFormat = "JSON";

function getGSTRequest(data)
{
    /**
     * @member {getGSTRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getGSTRequestcontext(data['context']);
    }
}

function getGSTRequestcontext(data)
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
     * @member {getGSTRequestHeader} Header
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
            this['Header'] = new getGSTRequestHeader(data['Header']);
    }
}

function getGSTRequestHeader(data)
{
    /**
     * @member {Int32} taxrate_rowid
     */
    this['taxrate_rowid'] = null;
    
    /**
     * @member {String} provider_location
     */
    this['provider_location'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('taxrate_rowid'))
            this['taxrate_rowid'] = data['taxrate_rowid'];
        
        if(data.hasOwnProperty('provider_location'))
            this['provider_location'] = data['provider_location'];
        
    }
}

function getGSTResponse(data, format)
{
    /**
     * @member {getGSTResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getGSTResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getGSTResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getGSTResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getGSTResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getGSTResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getGSTResponseApplicationException(data)
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

function getGSTResponsecontext(data)
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
     * @member {getGSTResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getGSTResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getGSTResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new getGSTResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getGSTResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new getGSTResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function getGSTResponseHeader(data)
{
    /**
     * @member {Int32} taxrate_rowid
     */
    this['taxrate_rowid'] = null;
    
    /**
     * @member {String} provider_location
     */
    this['provider_location'] = null;
    
    /**
     * @member {String} provider_location_desc
     */
    this['provider_location_desc'] = null;
    
    /**
     * @member {String} reciver_location
     */
    this['reciver_location'] = null;
    
    /**
     * @member {String} reciver_location_desc
     */
    this['reciver_location_desc'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {DateTime} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['taxrate_rowid'] = parseInt(data.getElementsByTagName("taxrate_rowid")[0].lastChild.nodeValue);
            
            this['provider_location'] = (data.getElementsByTagName("provider_location")[0].lastChild != null) ? data.getElementsByTagName("provider_location")[0].lastChild.nodeValue : "";
            
            this['provider_location_desc'] = (data.getElementsByTagName("provider_location_desc")[0].lastChild != null) ? data.getElementsByTagName("provider_location_desc")[0].lastChild.nodeValue : "";
            
            this['reciver_location'] = (data.getElementsByTagName("reciver_location")[0].lastChild != null) ? data.getElementsByTagName("reciver_location")[0].lastChild.nodeValue : "";
            
            this['reciver_location_desc'] = (data.getElementsByTagName("reciver_location_desc")[0].lastChild != null) ? data.getElementsByTagName("reciver_location_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['taxrate_rowid'] = data['taxrate_rowid'];
            
            this['provider_location'] = data['provider_location'];
            
            this['provider_location_desc'] = data['provider_location_desc'];
            
            this['reciver_location'] = data['reciver_location'];
            
            this['reciver_location_desc'] = data['reciver_location_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function getGSTResponseDetail(data)
{
    /**
     * @member {Int32} taxratedtl_rowid
     */
    this['taxratedtl_rowid'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_category_code
     */
    this['hsn_category_code'] = null;
    
    /**
     * @member {String} hsn_category
     */
    this['hsn_category'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
    /**
     * @member {Decimal} cgst_rate
     */
    this['cgst_rate'] = null;
    
    /**
     * @member {Decimal} sgst_rate
     */
    this['sgst_rate'] = null;
    
    /**
     * @member {Decimal} igst_rate
     */
    this['igst_rate'] = null;
    
    /**
     * @member {Decimal} ugst_rate
     */
    this['ugst_rate'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['taxratedtl_rowid'] = parseInt(data.getElementsByTagName("taxratedtl_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_category_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_category_code'] = (data.getElementsByTagName("hsn_category_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_category_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_category")[0].attributes.length == 0) //Check NULL value
                this['hsn_category'] = (data.getElementsByTagName("hsn_category")[0].lastChild != null) ? data.getElementsByTagName("hsn_category")[0].lastChild.nodeValue : "";
            
            this['hsn_description'] = (data.getElementsByTagName("hsn_description")[0].lastChild != null) ? data.getElementsByTagName("hsn_description")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("cgst_rate")[0].attributes.length == 0) //Check NULL value
                this['cgst_rate'] = parseFloat(data.getElementsByTagName("cgst_rate")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("sgst_rate")[0].attributes.length == 0) //Check NULL value
                this['sgst_rate'] = parseFloat(data.getElementsByTagName("sgst_rate")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("igst_rate")[0].attributes.length == 0) //Check NULL value
                this['igst_rate'] = parseFloat(data.getElementsByTagName("igst_rate")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("ugst_rate")[0].attributes.length == 0) //Check NULL value
                this['ugst_rate'] = parseFloat(data.getElementsByTagName("ugst_rate")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['taxratedtl_rowid'] = data['taxratedtl_rowid'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_category_code'] = data['hsn_category_code'];
            
            this['hsn_category'] = data['hsn_category'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['cgst_rate'] = data['cgst_rate'];
            
            this['sgst_rate'] = data['sgst_rate'];
            
            this['igst_rate'] = data['igst_rate'];
            
            this['ugst_rate'] = data['ugst_rate'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

