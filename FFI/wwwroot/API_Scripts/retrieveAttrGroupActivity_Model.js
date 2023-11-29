var responseDataFormat = "JSON";

function retrieveAttrGroupActivityRequest(data)
{
    /**
     * @member {retrieveAttrGroupActivityRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveAttrGroupActivityRequestcontext(data['context']);
    }
}

function retrieveAttrGroupActivityRequestcontext(data)
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
     * @member {retrieveAttrGroupActivityRequestHeader} Header
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
            this['Header'] = new retrieveAttrGroupActivityRequestHeader(data['Header']);
    }
}

function retrieveAttrGroupActivityRequestHeader(data)
{
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
    }
}

function retrieveAttrGroupActivityResponse(data, format)
{
    /**
     * @member {retrieveAttrGroupActivityResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveAttrGroupActivityResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveAttrGroupActivityResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveAttrGroupActivityResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveAttrGroupActivityResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveAttrGroupActivityResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveAttrGroupActivityResponseApplicationException(data)
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

function retrieveAttrGroupActivityResponsecontext(data)
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
     * @member {retrieveAttrGroupActivityResponseDetail} Detail
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
                Detail.push(new retrieveAttrGroupActivityResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
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
                    Detail.push(new retrieveAttrGroupActivityResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveAttrGroupActivityResponseDetail(data)
{
    /**
     * @member {Int32} entitygrpacitivity_rowid
     */
    this['entitygrpacitivity_rowid'] = null;
    
    /**
     * @member {String} entitygrp_code
     */
    this['entitygrp_code'] = null;
    
    /**
     * @member {String} entitygrp_name
     */
    this['entitygrp_name'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['entitygrpacitivity_rowid'] = parseInt(data.getElementsByTagName("entitygrpacitivity_rowid")[0].lastChild.nodeValue);
            
            this['entitygrp_code'] = (data.getElementsByTagName("entitygrp_code")[0].lastChild != null) ? data.getElementsByTagName("entitygrp_code")[0].lastChild.nodeValue : "";
            
            this['entitygrp_name'] = (data.getElementsByTagName("entitygrp_name")[0].lastChild != null) ? data.getElementsByTagName("entitygrp_name")[0].lastChild.nodeValue : "";
            
            this['row_slno'] = parseInt(data.getElementsByTagName("row_slno")[0].lastChild.nodeValue);
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['entitygrpacitivity_rowid'] = data['entitygrpacitivity_rowid'];
            
            this['entitygrp_code'] = data['entitygrp_code'];
            
            this['entitygrp_name'] = data['entitygrp_name'];
            
            this['row_slno'] = data['row_slno'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

