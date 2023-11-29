function uploadExcelScalerRequest(data)
{
    /**
     * @member {uploadExcelScalerRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new uploadExcelScalerRequestcontext(data['context']);
    }
}

function uploadExcelScalerRequestcontext(data)
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
     * @member {uploadExcelScalerRequestheader} header
     */
    this['header'] = null;
    
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
        
        if(data.hasOwnProperty('header') && data['header'] != null)
            this['header'] = new uploadExcelScalerRequestheader(data['header']);
    }
}

function uploadExcelScalerRequestheader(data)
{
    /**
     * @member {String} option_type
     */
    this['option_type'] = null;
    
    /**
     * @member {String} parameters
     */
    this['parameters'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('option_type'))
            this['option_type'] = data['option_type'];
        
        if(data.hasOwnProperty('parameters'))
            this['parameters'] = data['parameters'];
        
    }
}

