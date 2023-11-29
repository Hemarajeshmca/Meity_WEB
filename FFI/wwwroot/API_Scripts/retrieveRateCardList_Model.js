var responseDataFormat = "JSON";

function retrieveRateCardListRequest(data)
{
    /**
     * @member {retrieveRateCardListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveRateCardListRequestcontext(data['context']);
    }
}

function retrieveRateCardListRequestcontext(data)
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
     * @member {retrieveRateCardListRequestFilter} Filter
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
            this['Filter'] = new retrieveRateCardListRequestFilter(data['Filter']);
    }
}

function retrieveRateCardListRequestFilter(data)
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

function retrieveRateCardListResponse(data, format)
{
    /**
     * @member {retrieveRateCardListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveRateCardListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveRateCardListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveRateCardListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveRateCardListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveRateCardListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveRateCardListResponseApplicationException(data)
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

function retrieveRateCardListResponsecontext(data)
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
     * @member {retrieveRateCardListResponseList} List
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
                List.push(new retrieveRateCardListResponseList(data.getElementsByTagName("List")[Listchildi]));
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
                    List.push(new retrieveRateCardListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveRateCardListResponseList(data)
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

