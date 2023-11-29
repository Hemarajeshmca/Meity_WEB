var responseDataFormat = "JSON";

function retrieveBonusUpdateRequest(data)
{
    /**
     * @member {retrieveBonusUpdateRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveBonusUpdateRequestcontext(data['context']);
    }
}

function retrieveBonusUpdateRequestcontext(data)
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
     * @member {retrieveBonusUpdateRequestHeader} Header
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
            this['Header'] = new retrieveBonusUpdateRequestHeader(data['Header']);
    }
}

function retrieveBonusUpdateRequestHeader(data)
{
    /**
     * @member {String} bonus_status
     */
    this['bonus_status'] = null;
    
    /**
     * @member {String} bonus_for
     */
    this['bonus_for'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('bonus_status'))
            this['bonus_status'] = data['bonus_status'];
        
        if(data.hasOwnProperty('bonus_for'))
            this['bonus_for'] = data['bonus_for'];
        
    }
}

function retrieveBonusUpdateResponse(data, format)
{
    /**
     * @member {retrieveBonusUpdateResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveBonusUpdateResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveBonusUpdateResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveBonusUpdateResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveBonusUpdateResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveBonusUpdateResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveBonusUpdateResponseApplicationException(data)
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

function retrieveBonusUpdateResponsecontext(data)
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
     * @member {retrieveBonusUpdateResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveBonusUpdateResponsebonusDtl} bonusDtl
     */
    this['bonusDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveBonusUpdateResponseHeader(data.getElementsByTagName("Header")[0]);
            
            bonusDtl = [];
            for(bonusDtlchildi = 0; bonusDtlchildi < data.getElementsByTagName("bonusDtl").length; bonusDtlchildi++)
            {
                bonusDtl.push(new retrieveBonusUpdateResponsebonusDtl(data.getElementsByTagName("bonusDtl")[bonusDtlchildi]));
            }
            if(data.getElementsByTagName("bonusDtl").length > 0)
                this['bonusDtl'] = bonusDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveBonusUpdateResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('bonusDtl') && data['bonusDtl'] != null)
            {
                bonusDtl = [];
                for(bonusDtlindex = 0; bonusDtlindex < data['bonusDtl'].length; bonusDtlindex++)
                {
                    bonusDtl.push(new retrieveBonusUpdateResponsebonusDtl(data['bonusDtl'][bonusDtlindex]));
                }
                this['bonusDtl'] = bonusDtl;
            }
        }
    }
}

function retrieveBonusUpdateResponseHeader(data)
{
    /**
     * @member {String} bonus_date
     */
    this['bonus_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['bonus_date'] = (data.getElementsByTagName("bonus_date")[0].lastChild != null) ? data.getElementsByTagName("bonus_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['bonus_date'] = data['bonus_date'];
        }
    }
}

function retrieveBonusUpdateResponsebonusDtl(data)
{
    /**
     * @member {Int32} bonusdtl_rowid
     */
    this['bonusdtl_rowid'] = null;
    
    /**
     * @member {String} bonus_no
     */
    this['bonus_no'] = null;
    
    /**
     * @member {String} milkman_code
     */
    this['milkman_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {Decimal} bonus_amount
     */
    this['bonus_amount'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} payment_remark
     */
    this['payment_remark'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    /**
     * @member {String} payment_status_desc
     */
    this['payment_status_desc'] = null;
    
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
            this['bonusdtl_rowid'] = parseInt(data.getElementsByTagName("bonusdtl_rowid")[0].lastChild.nodeValue);
            
            this['bonus_no'] = (data.getElementsByTagName("bonus_no")[0].lastChild != null) ? data.getElementsByTagName("bonus_no")[0].lastChild.nodeValue : "";
            
            this['milkman_code'] = (data.getElementsByTagName("milkman_code")[0].lastChild != null) ? data.getElementsByTagName("milkman_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['bonus_amount'] = parseFloat(data.getElementsByTagName("bonus_amount")[0].lastChild.nodeValue);
            
            this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['payment_remark'] = (data.getElementsByTagName("payment_remark")[0].lastChild != null) ? data.getElementsByTagName("payment_remark")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['payment_status'] = (data.getElementsByTagName("payment_status")[0].lastChild != null) ? data.getElementsByTagName("payment_status")[0].lastChild.nodeValue : "";
            
            this['payment_status_desc'] = (data.getElementsByTagName("payment_status_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['bonusdtl_rowid'] = data['bonusdtl_rowid'];
            
            this['bonus_no'] = data['bonus_no'];
            
            this['milkman_code'] = data['milkman_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['bonus_amount'] = data['bonus_amount'];
            
            this['payment_date'] = data['payment_date'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['payment_remark'] = data['payment_remark'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['payment_status'] = data['payment_status'];
            
            this['payment_status_desc'] = data['payment_status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

