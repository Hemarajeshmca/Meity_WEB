var responseDataFormat = "JSON";

function retrieveAttributeGroupRequest(data)
{
    /**
     * @member {retrieveAttributeGroupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveAttributeGroupRequestcontext(data['context']);
    }
}

function retrieveAttributeGroupRequestcontext(data)
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
     * @member {retrieveAttributeGroupRequestHeader} Header
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
            this['Header'] = new retrieveAttributeGroupRequestHeader(data['Header']);
    }
}

function retrieveAttributeGroupRequestHeader(data)
{
    /**
     * @member {Int32} entitygrp_rowid
     */
    this['entitygrp_rowid'] = null;
    
    /**
     * @member {String} entitygrp_code
     */
    this['entitygrp_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('entitygrp_rowid'))
            this['entitygrp_rowid'] = data['entitygrp_rowid'];
        
        if(data.hasOwnProperty('entitygrp_code'))
            this['entitygrp_code'] = data['entitygrp_code'];
        
    }
}

function retrieveAttributeGroupResponse(data, format)
{
    /**
     * @member {retrieveAttributeGroupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveAttributeGroupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveAttributeGroupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveAttributeGroupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveAttributeGroupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveAttributeGroupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveAttributeGroupResponseApplicationException(data)
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

function retrieveAttributeGroupResponsecontext(data)
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
     * @member {retrieveAttributeGroupResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveAttributeGroupResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveAttributeGroupResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveAttributeGroupResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveAttributeGroupResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveAttributeGroupResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveAttributeGroupResponseHeader(data)
{
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
            this['entitygrp_name'] = (data.getElementsByTagName("entitygrp_name")[0].lastChild != null) ? data.getElementsByTagName("entitygrp_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("entitygrp_ll_name")[0].attributes.length == 0) //Check NULL value
                this['entitygrp_ll_name'] = (data.getElementsByTagName("entitygrp_ll_name")[0].lastChild != null) ? data.getElementsByTagName("entitygrp_ll_name")[0].lastChild.nodeValue : "";
            
            this['multiline_flag'] = (data.getElementsByTagName("multiline_flag")[0].lastChild != null) ? data.getElementsByTagName("multiline_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['entitygrp_name'] = data['entitygrp_name'];
            
            this['entitygrp_ll_name'] = data['entitygrp_ll_name'];
            
            this['multiline_flag'] = data['multiline_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveAttributeGroupResponseDetail(data)
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
     * @member {String} entity_type_desc
     */
    this['entity_type_desc'] = null;
    
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
     * @member {String} depend_desc
     */
    this['depend_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['entity_rowid'] = parseInt(data.getElementsByTagName("entity_rowid")[0].lastChild.nodeValue);
            
            this['row_slno'] = parseInt(data.getElementsByTagName("row_slno")[0].lastChild.nodeValue);
            
            this['entity_code'] = (data.getElementsByTagName("entity_code")[0].lastChild != null) ? data.getElementsByTagName("entity_code")[0].lastChild.nodeValue : "";
            
            this['entity_name'] = (data.getElementsByTagName("entity_name")[0].lastChild != null) ? data.getElementsByTagName("entity_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("entity_ll_name")[0].attributes.length == 0) //Check NULL value
                this['entity_ll_name'] = (data.getElementsByTagName("entity_ll_name")[0].lastChild != null) ? data.getElementsByTagName("entity_ll_name")[0].lastChild.nodeValue : "";
            
            this['entity_type'] = (data.getElementsByTagName("entity_type")[0].lastChild != null) ? data.getElementsByTagName("entity_type")[0].lastChild.nodeValue : "";
            
            this['entity_type_desc'] = (data.getElementsByTagName("entity_type_desc")[0].lastChild != null) ? data.getElementsByTagName("entity_type_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("entity_length")[0].attributes.length == 0) //Check NULL value
                this['entity_length'] = (data.getElementsByTagName("entity_length")[0].lastChild != null) ? data.getElementsByTagName("entity_length")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("entity_width")[0].attributes.length == 0) //Check NULL value
                this['entity_width'] = parseInt(data.getElementsByTagName("entity_width")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("depend_code")[0].attributes.length == 0) //Check NULL value
                this['depend_code'] = (data.getElementsByTagName("depend_code")[0].lastChild != null) ? data.getElementsByTagName("depend_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("depend_desc")[0].attributes.length == 0) //Check NULL value
                this['depend_desc'] = (data.getElementsByTagName("depend_desc")[0].lastChild != null) ? data.getElementsByTagName("depend_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['entity_rowid'] = data['entity_rowid'];
            
            this['row_slno'] = data['row_slno'];
            
            this['entity_code'] = data['entity_code'];
            
            this['entity_name'] = data['entity_name'];
            
            this['entity_ll_name'] = data['entity_ll_name'];
            
            this['entity_type'] = data['entity_type'];
            
            this['entity_type_desc'] = data['entity_type_desc'];
            
            this['entity_length'] = data['entity_length'];
            
            this['entity_width'] = data['entity_width'];
            
            this['depend_code'] = data['depend_code'];
            
            this['depend_desc'] = data['depend_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

