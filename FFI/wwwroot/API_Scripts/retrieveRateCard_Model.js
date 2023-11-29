var responseDataFormat = "JSON";

function retrieveRateCardRequest(data)
{
    /**
     * @member {retrieveRateCardRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveRateCardRequestcontext(data['context']);
    }
}

function retrieveRateCardRequestcontext(data)
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
     * @member {retrieveRateCardRequestHeader} Header
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
            this['Header'] = new retrieveRateCardRequestHeader(data['Header']);
    }
}

function retrieveRateCardRequestHeader(data)
{
    /**
     * @member {Int32} ratecard_rowid
     */
    this['ratecard_rowid'] = null;
    
    /**
     * @member {String} ratecard_code
     */
    this['ratecard_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ratecard_rowid'))
            this['ratecard_rowid'] = data['ratecard_rowid'];
        
        if(data.hasOwnProperty('ratecard_code'))
            this['ratecard_code'] = data['ratecard_code'];
        
    }
}

function retrieveRateCardResponse(data, format)
{
    /**
     * @member {retrieveRateCardResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveRateCardResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveRateCardResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveRateCardResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveRateCardResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveRateCardResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveRateCardResponseApplicationException(data)
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

function retrieveRateCardResponsecontext(data)
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
     * @member {retrieveRateCardResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveRateCardResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveRateCardResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveRateCardResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveRateCardResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveRateCardResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveRateCardResponseHeader(data)
{
    /**
     * @member {Int32} ratecard_rowid
     */
    this['ratecard_rowid'] = null;
    
    /**
     * @member {String} ratecard_code
     */
    this['ratecard_code'] = null;
    
    /**
     * @member {String} aggrorgn_type
     */
    this['aggrorgn_type'] = null;
    
    /**
     * @member {String} aggrorgn_type_desc
     */
    this['aggrorgn_type_desc'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    /**
     * @member {String} buy_sell_flag
     */
    this['buy_sell_flag'] = null;
    
    /**
     * @member {String} buy_from
     */
    this['buy_from'] = null;
    
    /**
     * @member {String} buy_from_desc
     */
    this['buy_from_desc'] = null;
    
    /**
     * @member {String} buy_orgn_code
     */
    this['buy_orgn_code'] = null;
    
    /**
     * @member {String} sell_to
     */
    this['sell_to'] = null;
    
    /**
     * @member {String} sell_orgn_code
     */
    this['sell_orgn_code'] = null;
    
    /**
     * @member {String} sell_to_desc
     */
    this['sell_to_desc'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
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
            this['ratecard_rowid'] = parseInt(data.getElementsByTagName("ratecard_rowid")[0].lastChild.nodeValue);
            
            this['ratecard_code'] = (data.getElementsByTagName("ratecard_code")[0].lastChild != null) ? data.getElementsByTagName("ratecard_code")[0].lastChild.nodeValue : "";
            
            this['aggrorgn_type'] = (data.getElementsByTagName("aggrorgn_type")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_type")[0].lastChild.nodeValue : "";
            
            this['aggrorgn_type_desc'] = (data.getElementsByTagName("aggrorgn_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_type_desc")[0].lastChild.nodeValue : "";
            
            this['aggrorgn_code'] = (data.getElementsByTagName("aggrorgn_code")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_code")[0].lastChild.nodeValue : "";
            
            this['buy_sell_flag'] = (data.getElementsByTagName("buy_sell_flag")[0].lastChild != null) ? data.getElementsByTagName("buy_sell_flag")[0].lastChild.nodeValue : "";
            
            this['buy_from'] = (data.getElementsByTagName("buy_from")[0].lastChild != null) ? data.getElementsByTagName("buy_from")[0].lastChild.nodeValue : "";
            
            this['buy_from_desc'] = (data.getElementsByTagName("buy_from_desc")[0].lastChild != null) ? data.getElementsByTagName("buy_from_desc")[0].lastChild.nodeValue : "";
            
            this['buy_orgn_code'] = (data.getElementsByTagName("buy_orgn_code")[0].lastChild != null) ? data.getElementsByTagName("buy_orgn_code")[0].lastChild.nodeValue : "";
            
            this['sell_to'] = (data.getElementsByTagName("sell_to")[0].lastChild != null) ? data.getElementsByTagName("sell_to")[0].lastChild.nodeValue : "";
            
            this['sell_orgn_code'] = (data.getElementsByTagName("sell_orgn_code")[0].lastChild != null) ? data.getElementsByTagName("sell_orgn_code")[0].lastChild.nodeValue : "";
            
            this['sell_to_desc'] = (data.getElementsByTagName("sell_to_desc")[0].lastChild != null) ? data.getElementsByTagName("sell_to_desc")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['ratecard_rowid'] = data['ratecard_rowid'];
            
            this['ratecard_code'] = data['ratecard_code'];
            
            this['aggrorgn_type'] = data['aggrorgn_type'];
            
            this['aggrorgn_type_desc'] = data['aggrorgn_type_desc'];
            
            this['aggrorgn_code'] = data['aggrorgn_code'];
            
            this['buy_sell_flag'] = data['buy_sell_flag'];
            
            this['buy_from'] = data['buy_from'];
            
            this['buy_from_desc'] = data['buy_from_desc'];
            
            this['buy_orgn_code'] = data['buy_orgn_code'];
            
            this['sell_to'] = data['sell_to'];
            
            this['sell_orgn_code'] = data['sell_orgn_code'];
            
            this['sell_to_desc'] = data['sell_to_desc'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveRateCardResponseDetail(data)
{
    /**
     * @member {Int32} ratecarddtl_rowid
     */
    this['ratecarddtl_rowid'] = null;
    
    /**
     * @member {Decimal} milk_rate
     */
    this['milk_rate'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {String} milk_from_desc
     */
    this['milk_from_desc'] = null;
    
    /**
     * @member {Decimal} fat_percent
     */
    this['fat_percent'] = null;
    
    /**
     * @member {Decimal} snf_percent
     */
    this['snf_percent'] = null;
    
    /**
     * @member {Decimal} awm_percent
     */
    this['awm_percent'] = null;
    
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
            this['ratecarddtl_rowid'] = parseInt(data.getElementsByTagName("ratecarddtl_rowid")[0].lastChild.nodeValue);
            
            this['milk_rate'] = parseFloat(data.getElementsByTagName("milk_rate")[0].lastChild.nodeValue);
            
            this['milk_from'] = (data.getElementsByTagName("milk_from")[0].lastChild != null) ? data.getElementsByTagName("milk_from")[0].lastChild.nodeValue : "";
            
            this['milk_from_desc'] = (data.getElementsByTagName("milk_from_desc")[0].lastChild != null) ? data.getElementsByTagName("milk_from_desc")[0].lastChild.nodeValue : "";
            
            this['fat_percent'] = parseFloat(data.getElementsByTagName("fat_percent")[0].lastChild.nodeValue);
            
            this['snf_percent'] = parseFloat(data.getElementsByTagName("snf_percent")[0].lastChild.nodeValue);
            
            this['awm_percent'] = parseFloat(data.getElementsByTagName("awm_percent")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['ratecarddtl_rowid'] = data['ratecarddtl_rowid'];
            
            this['milk_rate'] = data['milk_rate'];
            
            this['milk_from'] = data['milk_from'];
            
            this['milk_from_desc'] = data['milk_from_desc'];
            
            this['fat_percent'] = data['fat_percent'];
            
            this['snf_percent'] = data['snf_percent'];
            
            this['awm_percent'] = data['awm_percent'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

