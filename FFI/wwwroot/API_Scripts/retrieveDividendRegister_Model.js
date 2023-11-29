var responseDataFormat = "JSON";

function retrieveDividendRegisterRequest(data)
{
    /**
     * @member {retrieveDividendRegisterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveDividendRegisterRequestcontext(data['context']);
    }
}

function retrieveDividendRegisterRequestcontext(data)
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
     * @member {retrieveDividendRegisterRequestHeader} Header
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
            this['Header'] = new retrieveDividendRegisterRequestHeader(data['Header']);
    }
}

function retrieveDividendRegisterRequestHeader(data)
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

function retrieveDividendRegisterResponse(data, format)
{
    /**
     * @member {retrieveDividendRegisterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveDividendRegisterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveDividendRegisterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveDividendRegisterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveDividendRegisterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveDividendRegisterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveDividendRegisterResponseApplicationException(data)
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

function retrieveDividendRegisterResponsecontext(data)
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
     * @member {retrieveDividendRegisterResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveDividendRegisterResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveDividendRegisterResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveDividendRegisterResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveDividendRegisterResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveDividendRegisterResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveDividendRegisterResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['register_rowid'] = parseInt(data.getElementsByTagName("register_rowid")[0].lastChild.nodeValue);
            
            this['register_no'] = (data.getElementsByTagName("register_no")[0].lastChild != null) ? data.getElementsByTagName("register_no")[0].lastChild.nodeValue : "";
            
            this['register_name'] = (data.getElementsByTagName("register_name")[0].lastChild != null) ? data.getElementsByTagName("register_name")[0].lastChild.nodeValue : "";
            
            this['report_date'] = (data.getElementsByTagName("report_date")[0].lastChild != null) ? data.getElementsByTagName("report_date")[0].lastChild.nodeValue : "";
            
            this['declared_date'] = (data.getElementsByTagName("declared_date")[0].lastChild != null) ? data.getElementsByTagName("declared_date")[0].lastChild.nodeValue : "";
            
            this['dividendstru_rowid'] = parseInt(data.getElementsByTagName("dividendstru_rowid")[0].lastChild.nodeValue);
            
            this['payor_bank_code'] = (data.getElementsByTagName("payor_bank_code")[0].lastChild != null) ? data.getElementsByTagName("payor_bank_code")[0].lastChild.nodeValue : "";
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['register_rowid'] = data['register_rowid'];
            
            this['register_no'] = data['register_no'];
            
            this['register_name'] = data['register_name'];
            
            this['report_date'] = data['report_date'];
            
            this['declared_date'] = data['declared_date'];
            
            this['dividendstru_rowid'] = data['dividendstru_rowid'];
            
            this['payor_bank_code'] = data['payor_bank_code'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
        }
    }
}

function retrieveDividendRegisterResponseDetail(data)
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
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} member_name
     */
    this['member_name'] = null;
    
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
     * @member {String} bank_acc_type_desc
     */
    this['bank_acc_type_desc'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} branch_name
     */
    this['branch_name'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['dividend_rowid'] = parseInt(data.getElementsByTagName("dividend_rowid")[0].lastChild.nodeValue);
            
            this['fpomember_rowid'] = parseInt(data.getElementsByTagName("fpomember_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['member_name'] = (data.getElementsByTagName("member_name")[0].lastChild != null) ? data.getElementsByTagName("member_name")[0].lastChild.nodeValue : "";
            
            this['certificate_no'] = (data.getElementsByTagName("certificate_no")[0].lastChild != null) ? data.getElementsByTagName("certificate_no")[0].lastChild.nodeValue : "";
            
            this['dist_from'] = parseInt(data.getElementsByTagName("dist_from")[0].lastChild.nodeValue);
            
            this['dist_to'] = parseInt(data.getElementsByTagName("dist_to")[0].lastChild.nodeValue);
            
            this['dividend_due'] = (data.getElementsByTagName("dividend_due")[0].lastChild != null) ? data.getElementsByTagName("dividend_due")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['branch_name'] = (data.getElementsByTagName("branch_name")[0].lastChild != null) ? data.getElementsByTagName("branch_name")[0].lastChild.nodeValue : "";
            
            this['ifsc_code'] = (data.getElementsByTagName("ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("ifsc_code")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['dividend_rowid'] = data['dividend_rowid'];
            
            this['fpomember_rowid'] = data['fpomember_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['member_name'] = data['member_name'];
            
            this['certificate_no'] = data['certificate_no'];
            
            this['dist_from'] = data['dist_from'];
            
            this['dist_to'] = data['dist_to'];
            
            this['dividend_due'] = data['dividend_due'];
            
            this['bank_code'] = data['bank_code'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['branch_name'] = data['branch_name'];
            
            this['ifsc_code'] = data['ifsc_code'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

