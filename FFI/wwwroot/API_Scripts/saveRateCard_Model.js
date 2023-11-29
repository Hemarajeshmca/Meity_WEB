var responseDataFormat = "JSON";

function saveRateCardRequest(data)
{
    /**
     * @member {saveRateCardRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveRateCardRequestcontext(data['context']);
    }
}

function saveRateCardRequestcontext(data)
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
     * @member {saveRateCardRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveRateCardRequestDetail} Detail
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
            this['Header'] = new saveRateCardRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveRateCardRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveRateCardRequestHeader(data)
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ratecard_rowid'))
            this['ratecard_rowid'] = data['ratecard_rowid'];
        
        if(data.hasOwnProperty('ratecard_code'))
            this['ratecard_code'] = data['ratecard_code'];
        
        if(data.hasOwnProperty('aggrorgn_type'))
            this['aggrorgn_type'] = data['aggrorgn_type'];
        
        if(data.hasOwnProperty('aggrorgn_code'))
            this['aggrorgn_code'] = data['aggrorgn_code'];
        
        if(data.hasOwnProperty('buy_sell_flag'))
            this['buy_sell_flag'] = data['buy_sell_flag'];
        
        if(data.hasOwnProperty('buy_from'))
            this['buy_from'] = data['buy_from'];
        
        if(data.hasOwnProperty('buy_orgn_code'))
            this['buy_orgn_code'] = data['buy_orgn_code'];
        
        if(data.hasOwnProperty('sell_to'))
            this['sell_to'] = data['sell_to'];
        
        if(data.hasOwnProperty('sell_orgn_code'))
            this['sell_orgn_code'] = data['sell_orgn_code'];
        
        if(data.hasOwnProperty('sell_to_desc'))
            this['sell_to_desc'] = data['sell_to_desc'];
        
        if(data.hasOwnProperty('period_from'))
            this['period_from'] = data['period_from'];
        
        if(data.hasOwnProperty('period_to'))
            this['period_to'] = data['period_to'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveRateCardRequestDetail(data)
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('ratecarddtl_rowid'))
            this['ratecarddtl_rowid'] = data['ratecarddtl_rowid'];
        
        if(data.hasOwnProperty('milk_rate'))
            this['milk_rate'] = data['milk_rate'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('fat_percent'))
            this['fat_percent'] = data['fat_percent'];
        
        if(data.hasOwnProperty('snf_percent'))
            this['snf_percent'] = data['snf_percent'];
        
        if(data.hasOwnProperty('awm_percent'))
            this['awm_percent'] = data['awm_percent'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveRateCardResponse(data, format)
{
    /**
     * @member {saveRateCardResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveRateCardResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveRateCardResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveRateCardResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveRateCardResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveRateCardResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveRateCardResponseApplicationException(data)
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

function saveRateCardResponsecontext(data)
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
     * @member {saveRateCardResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveRateCardResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveRateCardResponseHeader(data['Header']);
        }
    }
}

function saveRateCardResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['ratecard_rowid'] = parseInt(data.getElementsByTagName("ratecard_rowid")[0].lastChild.nodeValue);
            
            this['ratecard_code'] = (data.getElementsByTagName("ratecard_code")[0].lastChild != null) ? data.getElementsByTagName("ratecard_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['ratecard_rowid'] = data['ratecard_rowid'];
            
            this['ratecard_code'] = data['ratecard_code'];
        }
    }
}

