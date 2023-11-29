var responseDataFormat = "JSON";

function retrieveICDGENRequest(data)
{
    /**
     * @member {retrieveICDGENRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveICDGENRequestcontext(data['context']);
    }
}

function retrieveICDGENRequestcontext(data)
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
     * @member {retrieveICDGENRequestHeader} Header
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
            this['Header'] = new retrieveICDGENRequestHeader(data['Header']);
    }
}

function retrieveICDGENRequestHeader(data)
{
    /**
     * @member {Int32} icdemand_rowid
     */
    this['icdemand_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('icdemand_rowid'))
            this['icdemand_rowid'] = data['icdemand_rowid'];
        
    }
}

function retrieveICDGENResponse(data, format)
{
    /**
     * @member {retrieveICDGENResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveICDGENResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveICDGENResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveICDGENResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveICDGENResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveICDGENResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveICDGENResponseApplicationException(data)
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

function retrieveICDGENResponsecontext(data)
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
     * @member {retrieveICDGENResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveICDGENResponseICDGenDtl} ICDGenDtl
     */
    this['ICDGenDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveICDGENResponseHeader(data.getElementsByTagName("Header")[0]);
            
            ICDGenDtl = [];
            for(ICDGenDtlchildi = 0; ICDGenDtlchildi < data.getElementsByTagName("ICDGenDtl").length; ICDGenDtlchildi++)
            {
                ICDGenDtl.push(new retrieveICDGENResponseICDGenDtl(data.getElementsByTagName("ICDGenDtl")[ICDGenDtlchildi]));
            }
            if(data.getElementsByTagName("ICDGenDtl").length > 0)
                this['ICDGenDtl'] = ICDGenDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveICDGENResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('ICDGenDtl') && data['ICDGenDtl'] != null)
            {
                ICDGenDtl = [];
                for(ICDGenDtlindex = 0; ICDGenDtlindex < data['ICDGenDtl'].length; ICDGenDtlindex++)
                {
                    ICDGenDtl.push(new retrieveICDGENResponseICDGenDtl(data['ICDGenDtl'][ICDGenDtlindex]));
                }
                this['ICDGenDtl'] = ICDGenDtl;
            }
        }
    }
}

function retrieveICDGENResponseHeader(data)
{
    /**
     * @member {Int32} icdemand_rowid
     */
    this['icdemand_rowid'] = null;
    
    /**
     * @member {String} icdemand_code
     */
    this['icdemand_code'] = null;
    
    /**
     * @member {String} icdemand_date
     */
    this['icdemand_date'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
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
            this['icdemand_rowid'] = parseInt(data.getElementsByTagName("icdemand_rowid")[0].lastChild.nodeValue);
            
            this['icdemand_code'] = (data.getElementsByTagName("icdemand_code")[0].lastChild != null) ? data.getElementsByTagName("icdemand_code")[0].lastChild.nodeValue : "";
            
            this['icdemand_date'] = (data.getElementsByTagName("icdemand_date")[0].lastChild != null) ? data.getElementsByTagName("icdemand_date")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['icdemand_rowid'] = data['icdemand_rowid'];
            
            this['icdemand_code'] = data['icdemand_code'];
            
            this['icdemand_date'] = data['icdemand_date'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveICDGENResponseICDGenDtl(data)
{
    /**
     * @member {Int32} icdemanddtl_rowid
     */
    this['icdemanddtl_rowid'] = null;
    
    /**
     * @member {String} icdemand_code
     */
    this['icdemand_code'] = null;
    
    /**
     * @member {String} icdemand_desc
     */
    this['icdemand_desc'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_desc
     */
    this['farmer_desc'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_desc
     */
    this['product_desc'] = null;
    
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_catg_desc
     */
    this['product_catg_desc'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} product_subcatg_desc
     */
    this['product_subcatg_desc'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} month
     */
    this['month'] = null;
    
    /**
     * @member {String} year
     */
    this['year'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
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
            this['icdemanddtl_rowid'] = parseInt(data.getElementsByTagName("icdemanddtl_rowid")[0].lastChild.nodeValue);
            
            this['icdemand_code'] = (data.getElementsByTagName("icdemand_code")[0].lastChild != null) ? data.getElementsByTagName("icdemand_code")[0].lastChild.nodeValue : "";
            
            this['icdemand_desc'] = (data.getElementsByTagName("icdemand_desc")[0].lastChild != null) ? data.getElementsByTagName("icdemand_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_desc'] = (data.getElementsByTagName("farmer_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_desc")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_desc'] = (data.getElementsByTagName("product_desc")[0].lastChild != null) ? data.getElementsByTagName("product_desc")[0].lastChild.nodeValue : "";
            
            this['product_catg_code'] = (data.getElementsByTagName("product_catg_code")[0].lastChild != null) ? data.getElementsByTagName("product_catg_code")[0].lastChild.nodeValue : "";
            
            this['product_catg_desc'] = (data.getElementsByTagName("product_catg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_catg_desc")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_code'] = (data.getElementsByTagName("product_subcatg_code")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_code")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_desc'] = (data.getElementsByTagName("product_subcatg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_desc")[0].lastChild.nodeValue : "";
            
            this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['qty'] = parseFloat(data.getElementsByTagName("qty")[0].lastChild.nodeValue);
            
            this['month'] = (data.getElementsByTagName("month")[0].lastChild != null) ? data.getElementsByTagName("month")[0].lastChild.nodeValue : "";
            
            this['year'] = (data.getElementsByTagName("year")[0].lastChild != null) ? data.getElementsByTagName("year")[0].lastChild.nodeValue : "";
            
            this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['icdemanddtl_rowid'] = data['icdemanddtl_rowid'];
            
            this['icdemand_code'] = data['icdemand_code'];
            
            this['icdemand_desc'] = data['icdemand_desc'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_desc'] = data['farmer_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_desc'] = data['product_desc'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['qty'] = data['qty'];
            
            this['month'] = data['month'];
            
            this['year'] = data['year'];
            
            this['remarks'] = data['remarks'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

