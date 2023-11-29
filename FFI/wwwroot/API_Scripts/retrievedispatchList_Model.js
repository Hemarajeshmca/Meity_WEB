var responseDataFormat = "JSON";

function retrievedispatchListRequest(data)
{
    /**
     * @member {retrievedispatchListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievedispatchListRequestcontext(data['context']);
    }
}

function retrievedispatchListRequestcontext(data)
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
     * @member {retrievedispatchListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new retrievedispatchListRequestFilter(data['Filter']);
    }
}

function retrievedispatchListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrievedispatchListResponse(data, format)
{
    /**
     * @member {retrievedispatchListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievedispatchListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievedispatchListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievedispatchListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievedispatchListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievedispatchListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievedispatchListResponseApplicationException(data)
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

function retrievedispatchListResponsecontext(data)
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
     * @member {retrievedispatchListResponseRecipt} Recipt
     */
    this['Recipt'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Recipt = [];
            for(Reciptchildi = 0; Reciptchildi < data.getElementsByTagName("Recipt").length; Reciptchildi++)
            {
                Recipt.push(new retrievedispatchListResponseRecipt(data.getElementsByTagName("Recipt")[Reciptchildi]));
            }
            if(data.getElementsByTagName("Recipt").length > 0)
                this['Recipt'] = Recipt;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Recipt') && data['Recipt'] != null)
            {
                Recipt = [];
                for(Reciptindex = 0; Reciptindex < data['Recipt'].length; Reciptindex++)
                {
                    Recipt.push(new retrievedispatchListResponseRecipt(data['Recipt'][Reciptindex]));
                }
                this['Recipt'] = Recipt;
            }
        }
    }
}

function retrievedispatchListResponseRecipt(data)
{
    /**
     * @member {Int32} cpdespatch_rowid
     */
    this['cpdespatch_rowid'] = null;
    
    /**
     * @member {String} cpsession_code
     */
    this['cpsession_code'] = null;
    
    /**
     * @member {String} despatch_date
     */
    this['despatch_date'] = null;
    
    /**
     * @member {String} despatch_vechicle
     */
    this['despatch_vechicle'] = null;
    
    /**
     * @member {String} despatch_remark
     */
    this['despatch_remark'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} cp_despatch_no
     */
    this['cp_despatch_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['cpdespatch_rowid'] = parseInt(data.getElementsByTagName("cpdespatch_rowid")[0].lastChild.nodeValue);
            
            this['cpsession_code'] = (data.getElementsByTagName("cpsession_code")[0].lastChild != null) ? data.getElementsByTagName("cpsession_code")[0].lastChild.nodeValue : "";
            
            this['despatch_date'] = (data.getElementsByTagName("despatch_date")[0].lastChild != null) ? data.getElementsByTagName("despatch_date")[0].lastChild.nodeValue : "";
            
            this['despatch_vechicle'] = (data.getElementsByTagName("despatch_vechicle")[0].lastChild != null) ? data.getElementsByTagName("despatch_vechicle")[0].lastChild.nodeValue : "";
            
            this['despatch_remark'] = (data.getElementsByTagName("despatch_remark")[0].lastChild != null) ? data.getElementsByTagName("despatch_remark")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['cp_despatch_no'] = (data.getElementsByTagName("cp_despatch_no")[0].lastChild != null) ? data.getElementsByTagName("cp_despatch_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['cpdespatch_rowid'] = data['cpdespatch_rowid'];
            
            this['cpsession_code'] = data['cpsession_code'];
            
            this['despatch_date'] = data['despatch_date'];
            
            this['despatch_vechicle'] = data['despatch_vechicle'];
            
            this['despatch_remark'] = data['despatch_remark'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['cp_despatch_no'] = data['cp_despatch_no'];
        }
    }
}

