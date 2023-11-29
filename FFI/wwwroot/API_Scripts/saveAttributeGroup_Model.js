var responseDataFormat = "JSON";

function saveAttributeGroupRequest(data)
{
    /**
     * @member {saveAttributeGroupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveAttributeGroupRequestcontext(data['context']);
    }
}

function saveAttributeGroupRequestcontext(data)
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
     * @member {saveAttributeGroupRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveAttributeGroupRequestDetail} Detail
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
            this['Header'] = new saveAttributeGroupRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveAttributeGroupRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveAttributeGroupRequestHeader(data)
{
    /**
     * @member {Int32} entitygrp_rowid
     */
    this['entitygrp_rowid'] = null;
    
    /**
     * @member {String} entitygrp_code
     */
    this['entitygrp_code'] = null;
    
    /**
     * @member {String} entitygrp_name
     */
    this['entitygrp_name'] = null;
    
    /**
     * @member {String} entitygrp_ll_name
     */
    this['entitygrp_ll_name'] = null;
    
    /**
     * @member {String} multiline_flag
     */
    this['multiline_flag'] = null;
    
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
        if(data.hasOwnProperty('entitygrp_rowid'))
            this['entitygrp_rowid'] = data['entitygrp_rowid'];
        
        if(data.hasOwnProperty('entitygrp_code'))
            this['entitygrp_code'] = data['entitygrp_code'];
        
        if(data.hasOwnProperty('entitygrp_name'))
            this['entitygrp_name'] = data['entitygrp_name'];
        
        if(data.hasOwnProperty('entitygrp_ll_name'))
            this['entitygrp_ll_name'] = data['entitygrp_ll_name'];
        
        if(data.hasOwnProperty('multiline_flag'))
            this['multiline_flag'] = data['multiline_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveAttributeGroupRequestDetail(data)
{
    /**
     * @member {Int32} entity_rowid
     */
    this['entity_rowid'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
    /**
     * @member {String} entity_code
     */
    this['entity_code'] = null;
    
    /**
     * @member {String} entity_name
     */
    this['entity_name'] = null;
    
    /**
     * @member {String} entity_ll_name
     */
    this['entity_ll_name'] = null;
    
    /**
     * @member {String} entity_type
     */
    this['entity_type'] = null;
    
    /**
     * @member {String} entity_length
     */
    this['entity_length'] = null;
    
    /**
     * @member {Int16} entity_width
     */
    this['entity_width'] = null;
    
    /**
     * @member {String} depend_code
     */
    this['depend_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('entity_rowid'))
            this['entity_rowid'] = data['entity_rowid'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('entity_code'))
            this['entity_code'] = data['entity_code'];
        
        if(data.hasOwnProperty('entity_name'))
            this['entity_name'] = data['entity_name'];
        
        if(data.hasOwnProperty('entity_ll_name'))
            this['entity_ll_name'] = data['entity_ll_name'];
        
        if(data.hasOwnProperty('entity_type'))
            this['entity_type'] = data['entity_type'];
        
        if(data.hasOwnProperty('entity_length'))
            this['entity_length'] = data['entity_length'];
        
        if(data.hasOwnProperty('entity_width'))
            this['entity_width'] = data['entity_width'];
        
        if(data.hasOwnProperty('depend_code'))
            this['depend_code'] = data['depend_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveAttributeGroupResponse(data, format)
{
    /**
     * @member {saveAttributeGroupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveAttributeGroupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveAttributeGroupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveAttributeGroupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveAttributeGroupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveAttributeGroupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveAttributeGroupResponseApplicationException(data)
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

function saveAttributeGroupResponsecontext(data)
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
     * @member {saveAttributeGroupResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveAttributeGroupResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveAttributeGroupResponseHeader(data['Header']);
        }
    }
}

function saveAttributeGroupResponseHeader(data)
{
    /**
     * @member {Int32} entitygrp_rowid
     */
    this['entitygrp_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['entitygrp_rowid'] = parseInt(data.getElementsByTagName("entitygrp_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['entitygrp_rowid'] = data['entitygrp_rowid'];
        }
    }
}

