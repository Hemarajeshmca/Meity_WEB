var responseDataFormat = "JSON";

function uploadExcelVectorRequest(data)
{
    /**
     * @member {uploadExcelVectorRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new uploadExcelVectorRequestcontext(data['context']);
    }
}

function uploadExcelVectorRequestcontext(data)
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
     * @member {uploadExcelVectorRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {uploadExcelVectorRequestDetail} Detail
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
            this['Header'] = new uploadExcelVectorRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new uploadExcelVectorRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function uploadExcelVectorRequestHeader(data)
{
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {Int16} version_no
     */
    this['version_no'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('version_no'))
            this['version_no'] = data['version_no'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('sur_name'))
            this['sur_name'] = data['sur_name'];
        
    }
}

function uploadExcelVectorRequestDetail(data)
{
    /**
     * @member {String} entitygrp_code
     */
    this['entitygrp_code'] = null;
    
    /**
     * @member {String} entity_code
     */
    this['entity_code'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
    /**
     * @member {String} entity_value
     */
    this['entity_value'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('entitygrp_code'))
            this['entitygrp_code'] = data['entitygrp_code'];
        
        if(data.hasOwnProperty('entity_code'))
            this['entity_code'] = data['entity_code'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('entity_value'))
            this['entity_value'] = data['entity_value'];
        
    }
}

function uploadExcelVectorResponse(data, format)
{
    /**
     * @member {uploadExcelVectorResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {uploadExcelVectorResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new uploadExcelVectorResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new uploadExcelVectorResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new uploadExcelVectorResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new uploadExcelVectorResponseApplicationException(data['ApplicationException']);
        }
    }
}

function uploadExcelVectorResponseApplicationException(data)
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

function uploadExcelVectorResponsecontext(data)
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
     * @member {uploadExcelVectorResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new uploadExcelVectorResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new uploadExcelVectorResponseHeader(data['Header']);
        }
    }
}

function uploadExcelVectorResponseHeader(data)
{
    /**
     * @member {String} tran_status_desc
     */
    this['tran_status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['tran_status_desc'] = (data.getElementsByTagName("tran_status_desc")[0].lastChild != null) ? data.getElementsByTagName("tran_status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['tran_status_desc'] = data['tran_status_desc'];
        }
    }
}

