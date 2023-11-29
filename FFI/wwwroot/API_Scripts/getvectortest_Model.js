var responseDataFormat = "JSON";

function getvectortestRequest(data)
{
    /**
     * @member {getvectortestRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getvectortestRequestcontext(data['context']);
    }
}

function getvectortestRequestcontext(data)
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
     * @member {getvectortestRequestinput_data} input_data
     */
    this['input_data'] = null;
    
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
        
        if(data.hasOwnProperty('input_data') && data['input_data'] != null)
        {
            input_data = [];
            for(input_dataindex = 0; input_dataindex < data['input_data'].length; input_dataindex++)
            {
                input_data.push(new getvectortestRequestinput_data(data['input_data'][input_dataindex]));
            }
            this['input_data'] = input_data;
        }
    }
}

function getvectortestRequestinput_data(data)
{
    /**
     * @member {String} test_code
     */
    this['test_code'] = null;
    
    /**
     * @member {String} test_desc
     */
    this['test_desc'] = null;
    
    /**
     * @member {String} status
     */
    this['status'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('test_code'))
            this['test_code'] = data['test_code'];
        
        if(data.hasOwnProperty('test_desc'))
            this['test_desc'] = data['test_desc'];
        
        if(data.hasOwnProperty('status'))
            this['status'] = data['status'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function getvectortestResponse(data, format)
{
    /**
     * @member {getvectortestResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getvectortestResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getvectortestResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getvectortestResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getvectortestResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getvectortestResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getvectortestResponseApplicationException(data)
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

function getvectortestResponsecontext(data)
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
     * @member {getvectortestResponseoutput_data} output_data
     */
    this['output_data'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            output_data = [];
            for(output_datachildi = 0; output_datachildi < data.getElementsByTagName("output_data").length; output_datachildi++)
            {
                output_data.push(new getvectortestResponseoutput_data(data.getElementsByTagName("output_data")[output_datachildi]));
            }
            if(data.getElementsByTagName("output_data").length > 0)
                this['output_data'] = output_data;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('output_data') && data['output_data'] != null)
            {
                output_data = [];
                for(output_dataindex = 0; output_dataindex < data['output_data'].length; output_dataindex++)
                {
                    output_data.push(new getvectortestResponseoutput_data(data['output_data'][output_dataindex]));
                }
                this['output_data'] = output_data;
            }
        }
    }
}

function getvectortestResponseoutput_data(data)
{
    /**
     * @member {String} master_code
     */
    this['master_code'] = null;
    
    /**
     * @member {String} description
     */
    this['description'] = null;
    
    /**
     * @member {String} code_type_code
     */
    this['code_type_code'] = null;
    
    /**
     * @member {String} dependent_code
     */
    this['dependent_code'] = null;
    
    /**
     * @member {String} status
     */
    this['status'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['master_code'] = (data.getElementsByTagName("master_code")[0].lastChild != null) ? data.getElementsByTagName("master_code")[0].lastChild.nodeValue : "";
            
            this['description'] = (data.getElementsByTagName("description")[0].lastChild != null) ? data.getElementsByTagName("description")[0].lastChild.nodeValue : "";
            
            this['code_type_code'] = (data.getElementsByTagName("code_type_code")[0].lastChild != null) ? data.getElementsByTagName("code_type_code")[0].lastChild.nodeValue : "";
            
            this['dependent_code'] = (data.getElementsByTagName("dependent_code")[0].lastChild != null) ? data.getElementsByTagName("dependent_code")[0].lastChild.nodeValue : "";
            
            this['status'] = (data.getElementsByTagName("status")[0].lastChild != null) ? data.getElementsByTagName("status")[0].lastChild.nodeValue : "";
        }
        else {
            this['master_code'] = data['master_code'];
            
            this['description'] = data['description'];
            
            this['code_type_code'] = data['code_type_code'];
            
            this['dependent_code'] = data['dependent_code'];
            
            this['status'] = data['status'];
        }
    }
}

