var responseDataFormat = "JSON";

function retrieveDividendUpdateStatusRequest(data)
{
    /**
     * @member {retrieveDividendUpdateStatusRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveDividendUpdateStatusRequestcontext(data['context']);
    }
}

function retrieveDividendUpdateStatusRequestcontext(data)
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
     * @member {retrieveDividendUpdateStatusRequestHeader} Header
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
            this['Header'] = new retrieveDividendUpdateStatusRequestHeader(data['Header']);
    }
}

function retrieveDividendUpdateStatusRequestHeader(data)
{
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} despatch_status
     */
    this['despatch_status'] = null;
    
    /**
     * @member {String} despatch_date
     */
    this['despatch_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('despatch_status'))
            this['despatch_status'] = data['despatch_status'];
        
        if(data.hasOwnProperty('despatch_date'))
            this['despatch_date'] = data['despatch_date'];
        
    }
}

function retrieveDividendUpdateStatusResponse(data, format)
{
    /**
     * @member {retrieveDividendUpdateStatusResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveDividendUpdateStatusResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveDividendUpdateStatusResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveDividendUpdateStatusResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveDividendUpdateStatusResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveDividendUpdateStatusResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveDividendUpdateStatusResponseApplicationException(data)
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

function retrieveDividendUpdateStatusResponsecontext(data)
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
     * @member {retrieveDividendUpdateStatusResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveDividendUpdateStatusResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveDividendUpdateStatusResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveDividendUpdateStatusResponseDetail(data)
{
    /**
     * @member {Int32} dividend_rowid
     */
    this['dividend_rowid'] = null;
    
    /**
     * @member {String} share_holder_name
     */
    this['share_holder_name'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {String} ditinct_from_to
     */
    this['ditinct_from_to'] = null;
    
    /**
     * @member {Decimal} dividend_amount
     */
    this['dividend_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} despatch_date
     */
    this['despatch_date'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} despatch_status
     */
    this['despatch_status'] = null;
    
    /**
     * @member {String} despatch_status_desc
     */
    this['despatch_status_desc'] = null;
    
    /**
     * @member {String} despatch_remark
     */
    this['despatch_remark'] = null;
    
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
            this['dividend_rowid'] = parseInt(data.getElementsByTagName("dividend_rowid")[0].lastChild.nodeValue);
            
            this['share_holder_name'] = (data.getElementsByTagName("share_holder_name")[0].lastChild != null) ? data.getElementsByTagName("share_holder_name")[0].lastChild.nodeValue : "";
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['ditinct_from_to'] = (data.getElementsByTagName("ditinct_from_to")[0].lastChild != null) ? data.getElementsByTagName("ditinct_from_to")[0].lastChild.nodeValue : "";
            
            this['dividend_amount'] = parseFloat(data.getElementsByTagName("dividend_amount")[0].lastChild.nodeValue);
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['despatch_date'] = (data.getElementsByTagName("despatch_date")[0].lastChild != null) ? data.getElementsByTagName("despatch_date")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['despatch_status'] = (data.getElementsByTagName("despatch_status")[0].lastChild != null) ? data.getElementsByTagName("despatch_status")[0].lastChild.nodeValue : "";
            
            this['despatch_status_desc'] = (data.getElementsByTagName("despatch_status_desc")[0].lastChild != null) ? data.getElementsByTagName("despatch_status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("despatch_remark")[0].attributes.length == 0) //Check NULL value
                this['despatch_remark'] = (data.getElementsByTagName("despatch_remark")[0].lastChild != null) ? data.getElementsByTagName("despatch_remark")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['dividend_rowid'] = data['dividend_rowid'];
            
            this['share_holder_name'] = data['share_holder_name'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['ditinct_from_to'] = data['ditinct_from_to'];
            
            this['dividend_amount'] = data['dividend_amount'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['despatch_date'] = data['despatch_date'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['despatch_status'] = data['despatch_status'];
            
            this['despatch_status_desc'] = data['despatch_status_desc'];
            
            this['despatch_remark'] = data['despatch_remark'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

