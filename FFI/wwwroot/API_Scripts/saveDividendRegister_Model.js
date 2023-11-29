var responseDataFormat = "JSON";

function saveDividendRegisterRequest(data)
{
    /**
     * @member {saveDividendRegisterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveDividendRegisterRequestcontext(data['context']);
    }
}

function saveDividendRegisterRequestcontext(data)
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
     * @member {saveDividendRegisterRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveDividendRegisterRequestDetail} Detail
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
            this['Header'] = new saveDividendRegisterRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveDividendRegisterRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveDividendRegisterRequestHeader(data)
{
    /**
     * @member {Int16} register_rowid
     */
    this['register_rowid'] = null;
    
    /**
     * @member {String} register_no
     */
    this['register_no'] = null;
    
    /**
     * @member {String} register_name
     */
    this['register_name'] = null;
    
    /**
     * @member {String} report_date
     */
    this['report_date'] = null;
    
    /**
     * @member {String} declared_date
     */
    this['declared_date'] = null;
    
    /**
     * @member {Int32} dividendstru_rowid
     */
    this['dividendstru_rowid'] = null;
    
    /**
     * @member {String} payor_bank_code
     */
    this['payor_bank_code'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('register_rowid'))
            this['register_rowid'] = data['register_rowid'];
        
        if(data.hasOwnProperty('register_no'))
            this['register_no'] = data['register_no'];
        
        if(data.hasOwnProperty('register_name'))
            this['register_name'] = data['register_name'];
        
        if(data.hasOwnProperty('report_date'))
            this['report_date'] = data['report_date'];
        
        if(data.hasOwnProperty('declared_date'))
            this['declared_date'] = data['declared_date'];
        
        if(data.hasOwnProperty('dividendstru_rowid'))
            this['dividendstru_rowid'] = data['dividendstru_rowid'];
        
        if(data.hasOwnProperty('payor_bank_code'))
            this['payor_bank_code'] = data['payor_bank_code'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function saveDividendRegisterRequestDetail(data)
{
    /**
     * @member {Int32} dividend_rowid
     */
    this['dividend_rowid'] = null;
    
    /**
     * @member {Int32} fpomember_rowid
     */
    this['fpomember_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} certificate_no
     */
    this['certificate_no'] = null;
    
    /**
     * @member {Int16} dist_from
     */
    this['dist_from'] = null;
    
    /**
     * @member {Int16} dist_to
     */
    this['dist_to'] = null;
    
    /**
     * @member {String} dividend_due
     */
    this['dividend_due'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
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
        if(data.hasOwnProperty('dividend_rowid'))
            this['dividend_rowid'] = data['dividend_rowid'];
        
        if(data.hasOwnProperty('fpomember_rowid'))
            this['fpomember_rowid'] = data['fpomember_rowid'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('certificate_no'))
            this['certificate_no'] = data['certificate_no'];
        
        if(data.hasOwnProperty('dist_from'))
            this['dist_from'] = data['dist_from'];
        
        if(data.hasOwnProperty('dist_to'))
            this['dist_to'] = data['dist_to'];
        
        if(data.hasOwnProperty('dividend_due'))
            this['dividend_due'] = data['dividend_due'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('bank_acc_type'))
            this['bank_acc_type'] = data['bank_acc_type'];
        
        if(data.hasOwnProperty('bank_acc_no'))
            this['bank_acc_no'] = data['bank_acc_no'];
        
        if(data.hasOwnProperty('ifsc_code'))
            this['ifsc_code'] = data['ifsc_code'];
        
        if(data.hasOwnProperty('bank_ref_no'))
            this['bank_ref_no'] = data['bank_ref_no'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveDividendRegisterResponse(data, format)
{
    /**
     * @member {saveDividendRegisterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveDividendRegisterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveDividendRegisterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveDividendRegisterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveDividendRegisterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveDividendRegisterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveDividendRegisterResponseApplicationException(data)
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

function saveDividendRegisterResponsecontext(data)
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
     * @member {saveDividendRegisterResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveDividendRegisterResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveDividendRegisterResponseHeader(data['Header']);
        }
    }
}

function saveDividendRegisterResponseHeader(data)
{
    /**
     * @member {Int16} register_rowid
     */
    this['register_rowid'] = null;
    
    /**
     * @member {String} register_no
     */
    this['register_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['register_rowid'] = parseInt(data.getElementsByTagName("register_rowid")[0].lastChild.nodeValue);
            
            this['register_no'] = (data.getElementsByTagName("register_no")[0].lastChild != null) ? data.getElementsByTagName("register_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['register_rowid'] = data['register_rowid'];
            
            this['register_no'] = data['register_no'];
        }
    }
}

