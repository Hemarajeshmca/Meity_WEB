var responseDataFormat = "JSON";

function retrieveUpdateShareAllotmentRequest(data)
{
    /**
     * @member {retrieveUpdateShareAllotmentRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveUpdateShareAllotmentRequestcontext(data['context']);
    }
}

function retrieveUpdateShareAllotmentRequestcontext(data)
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
     * @member {retrieveUpdateShareAllotmentRequestHeader} Header
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
            this['Header'] = new retrieveUpdateShareAllotmentRequestHeader(data['Header']);
    }
}

function retrieveUpdateShareAllotmentRequestHeader(data)
{
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} alloc_status_code
     */
    this['alloc_status_code'] = null;
    
    /**
     * @member {String} board_approval_date
     */
    this['board_approval_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('alloc_status_code'))
            this['alloc_status_code'] = data['alloc_status_code'];
        
        if(data.hasOwnProperty('board_approval_date'))
            this['board_approval_date'] = data['board_approval_date'];
        
    }
}

function retrieveUpdateShareAllotmentResponse(data, format)
{
    /**
     * @member {retrieveUpdateShareAllotmentResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveUpdateShareAllotmentResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveUpdateShareAllotmentResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveUpdateShareAllotmentResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveUpdateShareAllotmentResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveUpdateShareAllotmentResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveUpdateShareAllotmentResponseApplicationException(data)
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

function retrieveUpdateShareAllotmentResponsecontext(data)
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
     * @member {retrieveUpdateShareAllotmentResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveUpdateShareAllotmentResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveUpdateShareAllotmentResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveUpdateShareAllotmentResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveUpdateShareAllotmentResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveUpdateShareAllotmentResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveUpdateShareAllotmentResponseHeader(data)
{
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} alloc_status_code
     */
    this['alloc_status_code'] = null;
    
    /**
     * @member {String} board_approval_date
     */
    this['board_approval_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['alloc_status_code'] = (data.getElementsByTagName("alloc_status_code")[0].lastChild != null) ? data.getElementsByTagName("alloc_status_code")[0].lastChild.nodeValue : "";
            
            this['board_approval_date'] = (data.getElementsByTagName("board_approval_date")[0].lastChild != null) ? data.getElementsByTagName("board_approval_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['alloc_status_code'] = data['alloc_status_code'];
            
            this['board_approval_date'] = data['board_approval_date'];
        }
    }
}

function retrieveUpdateShareAllotmentResponseDetail(data)
{
    /**
     * @member {Int32} shareapp_rowid
     */
    this['shareapp_rowid'] = null;
    
    /**
     * @member {String} shareapp_no
     */
    this['shareapp_no'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
    /**
     * @member {Int16} applied_shares
     */
    this['applied_shares'] = null;
    
    /**
     * @member {Int16} approved_shares
     */
    this['approved_shares'] = null;
    
    /**
     * @member {Int16} rejected_shares
     */
    this['rejected_shares'] = null;
    
    /**
     * @member {String} rejected_comment
     */
    this['rejected_comment'] = null;
    
    /**
     * @member {String} approved_date
     */
    this['approved_date'] = null;
    
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
            this['shareapp_rowid'] = parseInt(data.getElementsByTagName("shareapp_rowid")[0].lastChild.nodeValue);
            
            this['shareapp_no'] = (data.getElementsByTagName("shareapp_no")[0].lastChild != null) ? data.getElementsByTagName("shareapp_no")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['applied_shares'] = parseInt(data.getElementsByTagName("applied_shares")[0].lastChild.nodeValue);
            
            this['approved_shares'] = parseInt(data.getElementsByTagName("approved_shares")[0].lastChild.nodeValue);
            
            this['rejected_shares'] = parseInt(data.getElementsByTagName("rejected_shares")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("rejected_comment")[0].attributes.length == 0) //Check NULL value
                this['rejected_comment'] = (data.getElementsByTagName("rejected_comment")[0].lastChild != null) ? data.getElementsByTagName("rejected_comment")[0].lastChild.nodeValue : "";
            
            this['approved_date'] = (data.getElementsByTagName("approved_date")[0].lastChild != null) ? data.getElementsByTagName("approved_date")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['shareapp_rowid'] = data['shareapp_rowid'];
            
            this['shareapp_no'] = data['shareapp_no'];
            
            this['member_name'] = data['member_name'];
            
            this['applied_shares'] = data['applied_shares'];
            
            this['approved_shares'] = data['approved_shares'];
            
            this['rejected_shares'] = data['rejected_shares'];
            
            this['rejected_comment'] = data['rejected_comment'];
            
            this['approved_date'] = data['approved_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

