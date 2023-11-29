var responseDataFormat = "JSON";

function saveAttrGroupActivityRequest(data)
{
    /**
     * @member {saveAttrGroupActivityRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveAttrGroupActivityRequestcontext(data['context']);
    }
}

function saveAttrGroupActivityRequestcontext(data)
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
     * @member {saveAttrGroupActivityRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveAttrGroupActivityRequestDetail} Detail
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
            this['Header'] = new saveAttrGroupActivityRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveAttrGroupActivityRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveAttrGroupActivityRequestHeader(data)
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

function saveAttrGroupActivityRequestDetail(data)
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
    
    if(data)
    {
        if(data.hasOwnProperty('entitygrpacitivity_rowid'))
            this['entitygrpacitivity_rowid'] = data['entitygrpacitivity_rowid'];
        
        if(data.hasOwnProperty('entitygrp_code'))
            this['entitygrp_code'] = data['entitygrp_code'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
    }
}

function saveAttrGroupActivityResponse(data, format)
{
    /**
     * @member {saveAttrGroupActivityResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveAttrGroupActivityResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveAttrGroupActivityResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveAttrGroupActivityResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveAttrGroupActivityResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveAttrGroupActivityResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveAttrGroupActivityResponseApplicationException(data)
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

function saveAttrGroupActivityResponsecontext(data)
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
     * @member {saveAttrGroupActivityResponseDetail} Detail
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
                Detail.push(new saveAttrGroupActivityResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
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
                    Detail.push(new saveAttrGroupActivityResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function saveAttrGroupActivityResponseDetail(data)
{
    /**
     * @member {Int32} entitygrpacitivity_rowid
     */
    this['entitygrpacitivity_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['entitygrpacitivity_rowid'] = parseInt(data.getElementsByTagName("entitygrpacitivity_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['entitygrpacitivity_rowid'] = data['entitygrpacitivity_rowid'];
        }
    }
}

