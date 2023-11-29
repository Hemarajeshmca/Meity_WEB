var responseDataFormat = "JSON";

function retrieveCP_CCRequest(data)
{
    /**
     * @member {retrieveCP_CCRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCP_CCRequestcontext(data['context']);
    }
}

function retrieveCP_CCRequestcontext(data)
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
     * @member {retrieveCP_CCRequestHeader} Header
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
            this['Header'] = new retrieveCP_CCRequestHeader(data['Header']);
    }
}

function retrieveCP_CCRequestHeader(data)
{
    /**
     * @member {String} aggrorgn_type
     */
    this['aggrorgn_type'] = null;
    
    /**
     * @member {String} aggrorgn_code
     */
    this['aggrorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('aggrorgn_type'))
            this['aggrorgn_type'] = data['aggrorgn_type'];
        
        if(data.hasOwnProperty('aggrorgn_code'))
            this['aggrorgn_code'] = data['aggrorgn_code'];
        
    }
}

function retrieveCP_CCResponse(data, format)
{
    /**
     * @member {retrieveCP_CCResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCP_CCResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCP_CCResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCP_CCResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCP_CCResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCP_CCResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCP_CCResponseApplicationException(data)
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

function retrieveCP_CCResponsecontext(data)
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
     * @member {retrieveCP_CCResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveCP_CCResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCP_CCResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveCP_CCResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCP_CCResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveCP_CCResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveCP_CCResponseHeader(data)
{
    /**
     * @member {String} aggrorgn_type_desc
     */
    this['aggrorgn_type_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['aggrorgn_type_desc'] = (data.getElementsByTagName("aggrorgn_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggrorgn_type_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['aggrorgn_type_desc'] = data['aggrorgn_type_desc'];
        }
    }
}

function retrieveCP_CCResponseDetail(data)
{
    /**
     * @member {Int32} aggrloc_rowid
     */
    this['aggrloc_rowid'] = null;
    
    /**
     * @member {String} aggrloc_type
     */
    this['aggrloc_type'] = null;
    
    /**
     * @member {String} aggrloc_type_desc
     */
    this['aggrloc_type_desc'] = null;
    
    /**
     * @member {String} aggrloc_code
     */
    this['aggrloc_code'] = null;
    
    /**
     * @member {String} aggrloc_shortdesc
     */
    this['aggrloc_shortdesc'] = null;
    
    /**
     * @member {String} aggrloc_name
     */
    this['aggrloc_name'] = null;
    
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
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['aggrloc_rowid'] = parseInt(data.getElementsByTagName("aggrloc_rowid")[0].lastChild.nodeValue);
            
            this['aggrloc_type'] = (data.getElementsByTagName("aggrloc_type")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_type")[0].lastChild.nodeValue : "";
            
            this['aggrloc_type_desc'] = (data.getElementsByTagName("aggrloc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_type_desc")[0].lastChild.nodeValue : "";
            
            this['aggrloc_code'] = (data.getElementsByTagName("aggrloc_code")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_code")[0].lastChild.nodeValue : "";
            
            this['aggrloc_shortdesc'] = (data.getElementsByTagName("aggrloc_shortdesc")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_shortdesc")[0].lastChild.nodeValue : "";
            
            this['aggrloc_name'] = (data.getElementsByTagName("aggrloc_name")[0].lastChild != null) ? data.getElementsByTagName("aggrloc_name")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['aggrloc_rowid'] = data['aggrloc_rowid'];
            
            this['aggrloc_type'] = data['aggrloc_type'];
            
            this['aggrloc_type_desc'] = data['aggrloc_type_desc'];
            
            this['aggrloc_code'] = data['aggrloc_code'];
            
            this['aggrloc_shortdesc'] = data['aggrloc_shortdesc'];
            
            this['aggrloc_name'] = data['aggrloc_name'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

