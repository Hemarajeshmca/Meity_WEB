var responseDataFormat = "JSON";

function retrieveLocalizationDefinitionRequest(data)
{
    /**
     * @member {retrieveLocalizationDefinitionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveLocalizationDefinitionRequestcontext(data['context']);
    }
}

function retrieveLocalizationDefinitionRequestcontext(data)
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
     * @member {retrieveLocalizationDefinitionRequestHeader} Header
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
            this['Header'] = new retrieveLocalizationDefinitionRequestHeader(data['Header']);
    }
}

function retrieveLocalizationDefinitionRequestHeader(data)
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

function retrieveLocalizationDefinitionResponse(data, format)
{
    /**
     * @member {retrieveLocalizationDefinitionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveLocalizationDefinitionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveLocalizationDefinitionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveLocalizationDefinitionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveLocalizationDefinitionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveLocalizationDefinitionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveLocalizationDefinitionResponseApplicationException(data)
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

function retrieveLocalizationDefinitionResponsecontext(data)
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
     * @member {retrieveLocalizationDefinitionResponseScreen} Screen
     */
    this['Screen'] = null;
    
    /**
     * @member {retrieveLocalizationDefinitionResponseFE} FE
     */
    this['FE'] = null;
    
    /**
     * @member {retrieveLocalizationDefinitionResponseBE} BE
     */
    this['BE'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Screen = [];
            for(Screenchildi = 0; Screenchildi < data.getElementsByTagName("Screen").length; Screenchildi++)
            {
                Screen.push(new retrieveLocalizationDefinitionResponseScreen(data.getElementsByTagName("Screen")[Screenchildi]));
            }
            if(data.getElementsByTagName("Screen").length > 0)
                this['Screen'] = Screen;
            
            FE = [];
            for(FEchildi = 0; FEchildi < data.getElementsByTagName("FE").length; FEchildi++)
            {
                FE.push(new retrieveLocalizationDefinitionResponseFE(data.getElementsByTagName("FE")[FEchildi]));
            }
            if(data.getElementsByTagName("FE").length > 0)
                this['FE'] = FE;
            
            BE = [];
            for(BEchildi = 0; BEchildi < data.getElementsByTagName("BE").length; BEchildi++)
            {
                BE.push(new retrieveLocalizationDefinitionResponseBE(data.getElementsByTagName("BE")[BEchildi]));
            }
            if(data.getElementsByTagName("BE").length > 0)
                this['BE'] = BE;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Screen') && data['Screen'] != null)
            {
                Screen = [];
                for(Screenindex = 0; Screenindex < data['Screen'].length; Screenindex++)
                {
                    Screen.push(new retrieveLocalizationDefinitionResponseScreen(data['Screen'][Screenindex]));
                }
                this['Screen'] = Screen;
            }
            
            
            if(data.hasOwnProperty('FE') && data['FE'] != null)
            {
                FE = [];
                for(FEindex = 0; FEindex < data['FE'].length; FEindex++)
                {
                    FE.push(new retrieveLocalizationDefinitionResponseFE(data['FE'][FEindex]));
                }
                this['FE'] = FE;
            }
            
            
            if(data.hasOwnProperty('BE') && data['BE'] != null)
            {
                BE = [];
                for(BEindex = 0; BEindex < data['BE'].length; BEindex++)
                {
                    BE.push(new retrieveLocalizationDefinitionResponseBE(data['BE'][BEindex]));
                }
                this['BE'] = BE;
            }
        }
    }
}

function retrieveLocalizationDefinitionResponseScreen(data)
{
    /**
     * @member {Int32} localization_rowid
     */
    this['localization_rowid'] = null;
    
    /**
     * @member {String} control_type
     */
    this['control_type'] = null;
    
    /**
     * @member {String} control_type_desc
     */
    this['control_type_desc'] = null;
    
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
            this['localization_rowid'] = parseInt(data.getElementsByTagName("localization_rowid")[0].lastChild.nodeValue);
            
            this['control_type'] = (data.getElementsByTagName("control_type")[0].lastChild != null) ? data.getElementsByTagName("control_type")[0].lastChild.nodeValue : "";
            
            this['control_type_desc'] = (data.getElementsByTagName("control_type_desc")[0].lastChild != null) ? data.getElementsByTagName("control_type_desc")[0].lastChild.nodeValue : "";
            
            this['control_code'] = (data.getElementsByTagName("control_code")[0].lastChild != null) ? data.getElementsByTagName("control_code")[0].lastChild.nodeValue : "";
            
            this['data_field'] = (data.getElementsByTagName("data_field")[0].lastChild != null) ? data.getElementsByTagName("data_field")[0].lastChild.nodeValue : "";
            
            this['locale_desc'] = (data.getElementsByTagName("locale_desc")[0].lastChild != null) ? data.getElementsByTagName("locale_desc")[0].lastChild.nodeValue : "";
            
            this['locale_ll_desc'] = (data.getElementsByTagName("locale_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("locale_ll_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['localization_rowid'] = data['localization_rowid'];
            
            this['control_type'] = data['control_type'];
            
            this['control_type_desc'] = data['control_type_desc'];
            
            this['control_code'] = data['control_code'];
            
            this['data_field'] = data['data_field'];
            
            this['locale_desc'] = data['locale_desc'];
            
            this['locale_ll_desc'] = data['locale_ll_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveLocalizationDefinitionResponseFE(data)
{
    /**
     * @member {Int32} localization_rowid
     */
    this['localization_rowid'] = null;
    
    /**
     * @member {String} control_type
     */
    this['control_type'] = null;
    
    /**
     * @member {String} control_type_desc
     */
    this['control_type_desc'] = null;
    
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
            this['localization_rowid'] = parseInt(data.getElementsByTagName("localization_rowid")[0].lastChild.nodeValue);
            
            this['control_type'] = (data.getElementsByTagName("control_type")[0].lastChild != null) ? data.getElementsByTagName("control_type")[0].lastChild.nodeValue : "";
            
            this['control_type_desc'] = (data.getElementsByTagName("control_type_desc")[0].lastChild != null) ? data.getElementsByTagName("control_type_desc")[0].lastChild.nodeValue : "";
            
            this['control_code'] = (data.getElementsByTagName("control_code")[0].lastChild != null) ? data.getElementsByTagName("control_code")[0].lastChild.nodeValue : "";
            
            this['data_field'] = (data.getElementsByTagName("data_field")[0].lastChild != null) ? data.getElementsByTagName("data_field")[0].lastChild.nodeValue : "";
            
            this['locale_desc'] = (data.getElementsByTagName("locale_desc")[0].lastChild != null) ? data.getElementsByTagName("locale_desc")[0].lastChild.nodeValue : "";
            
            this['locale_ll_desc'] = (data.getElementsByTagName("locale_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("locale_ll_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['localization_rowid'] = data['localization_rowid'];
            
            this['control_type'] = data['control_type'];
            
            this['control_type_desc'] = data['control_type_desc'];
            
            this['control_code'] = data['control_code'];
            
            this['data_field'] = data['data_field'];
            
            this['locale_desc'] = data['locale_desc'];
            
            this['locale_ll_desc'] = data['locale_ll_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveLocalizationDefinitionResponseBE(data)
{
    /**
     * @member {Int32} localization_rowid
     */
    this['localization_rowid'] = null;
    
    /**
     * @member {String} control_type
     */
    this['control_type'] = null;
    
    /**
     * @member {String} control_type_desc
     */
    this['control_type_desc'] = null;
    
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
            this['localization_rowid'] = parseInt(data.getElementsByTagName("localization_rowid")[0].lastChild.nodeValue);
            
            this['control_type'] = (data.getElementsByTagName("control_type")[0].lastChild != null) ? data.getElementsByTagName("control_type")[0].lastChild.nodeValue : "";
            
            this['control_type_desc'] = (data.getElementsByTagName("control_type_desc")[0].lastChild != null) ? data.getElementsByTagName("control_type_desc")[0].lastChild.nodeValue : "";
            
            this['control_code'] = (data.getElementsByTagName("control_code")[0].lastChild != null) ? data.getElementsByTagName("control_code")[0].lastChild.nodeValue : "";
            
            this['data_field'] = (data.getElementsByTagName("data_field")[0].lastChild != null) ? data.getElementsByTagName("data_field")[0].lastChild.nodeValue : "";
            
            this['locale_desc'] = (data.getElementsByTagName("locale_desc")[0].lastChild != null) ? data.getElementsByTagName("locale_desc")[0].lastChild.nodeValue : "";
            
            this['locale_ll_desc'] = (data.getElementsByTagName("locale_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("locale_ll_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['localization_rowid'] = data['localization_rowid'];
            
            this['control_type'] = data['control_type'];
            
            this['control_type_desc'] = data['control_type_desc'];
            
            this['control_code'] = data['control_code'];
            
            this['data_field'] = data['data_field'];
            
            this['locale_desc'] = data['locale_desc'];
            
            this['locale_ll_desc'] = data['locale_ll_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

