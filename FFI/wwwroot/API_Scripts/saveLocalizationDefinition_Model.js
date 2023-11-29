var responseDataFormat = "JSON";

function saveLocalizationDefinitionRequest(data)
{
    /**
     * @member {saveLocalizationDefinitionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveLocalizationDefinitionRequestcontext(data['context']);
    }
}

function saveLocalizationDefinitionRequestcontext(data)
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
     * @member {saveLocalizationDefinitionRequestDetail} Detail
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
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveLocalizationDefinitionRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveLocalizationDefinitionRequestDetail(data)
{
    /**
     * @member {Int32} localization_rowid
     */
    this['localization_rowid'] = null;
    
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    /**
     * @member {String} control_type
     */
    this['control_type'] = null;
    
    /**
     * @member {String} control_code
     */
    this['control_code'] = null;
    
    /**
     * @member {String} data_field
     */
    this['data_field'] = null;
    
    /**
     * @member {String} locale_desc
     */
    this['locale_desc'] = null;
    
    /**
     * @member {String} locale_ll_desc
     */
    this['locale_ll_desc'] = null;
    
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
        if(data.hasOwnProperty('localization_rowid'))
            this['localization_rowid'] = data['localization_rowid'];
        
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
        if(data.hasOwnProperty('control_type'))
            this['control_type'] = data['control_type'];
        
        if(data.hasOwnProperty('control_code'))
            this['control_code'] = data['control_code'];
        
        if(data.hasOwnProperty('data_field'))
            this['data_field'] = data['data_field'];
        
        if(data.hasOwnProperty('locale_desc'))
            this['locale_desc'] = data['locale_desc'];
        
        if(data.hasOwnProperty('locale_ll_desc'))
            this['locale_ll_desc'] = data['locale_ll_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveLocalizationDefinitionResponse(data, format)
{
    /**
     * @member {saveLocalizationDefinitionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveLocalizationDefinitionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveLocalizationDefinitionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveLocalizationDefinitionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveLocalizationDefinitionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveLocalizationDefinitionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveLocalizationDefinitionResponseApplicationException(data)
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

function saveLocalizationDefinitionResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

