var responseDataFormat = "JSON";

function retrieveESPEquipmentSetupRequest(data)
{
    /**
     * @member {retrieveESPEquipmentSetupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveESPEquipmentSetupRequestcontext(data['context']);
    }
}

function retrieveESPEquipmentSetupRequestcontext(data)
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
     * @member {retrieveESPEquipmentSetupRequestHeader} Header
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
            this['Header'] = new retrieveESPEquipmentSetupRequestHeader(data['Header']);
    }
}

function retrieveESPEquipmentSetupRequestHeader(data)
{
    /**
     * @member {Int32} espequipment_rowid
     */
    this['espequipment_rowid'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('espequipment_rowid'))
            this['espequipment_rowid'] = data['espequipment_rowid'];
        
        if(data.hasOwnProperty('esp_code'))
            this['esp_code'] = data['esp_code'];
        
    }
}

function retrieveESPEquipmentSetupResponse(data, format)
{
    /**
     * @member {retrieveESPEquipmentSetupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveESPEquipmentSetupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveESPEquipmentSetupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveESPEquipmentSetupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveESPEquipmentSetupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveESPEquipmentSetupResponseApplicationException(data)
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

function retrieveESPEquipmentSetupResponsecontext(data)
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
     * @member {retrieveESPEquipmentSetupResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupResponseESPRate} ESPRate
     */
    this['ESPRate'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupResponseTerms_and_Condition} Terms_and_Condition
     */
    this['Terms_and_Condition'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupResponseEquipmentDetailsHistory} EquipmentDetailsHistory
     */
    this['EquipmentDetailsHistory'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupResponseRateHistory} RateHistory
     */
    this['RateHistory'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupResponseTermsAndConditionsHistory} TermsAndConditionsHistory
     */
    this['TermsAndConditionsHistory'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveESPEquipmentSetupResponseHeader(data.getElementsByTagName("Header")[0]);
            
            ESPRate = [];
            for(ESPRatechildi = 0; ESPRatechildi < data.getElementsByTagName("ESPRate").length; ESPRatechildi++)
            {
                ESPRate.push(new retrieveESPEquipmentSetupResponseESPRate(data.getElementsByTagName("ESPRate")[ESPRatechildi]));
            }
            if(data.getElementsByTagName("ESPRate").length > 0)
                this['ESPRate'] = ESPRate;
            
            Terms_and_Condition = [];
            for(Terms_and_Conditionchildi = 0; Terms_and_Conditionchildi < data.getElementsByTagName("Terms_and_Condition").length; Terms_and_Conditionchildi++)
            {
                Terms_and_Condition.push(new retrieveESPEquipmentSetupResponseTerms_and_Condition(data.getElementsByTagName("Terms_and_Condition")[Terms_and_Conditionchildi]));
            }
            if(data.getElementsByTagName("Terms_and_Condition").length > 0)
                this['Terms_and_Condition'] = Terms_and_Condition;
            
            EquipmentDetailsHistory = [];
            for(EquipmentDetailsHistorychildi = 0; EquipmentDetailsHistorychildi < data.getElementsByTagName("EquipmentDetailsHistory").length; EquipmentDetailsHistorychildi++)
            {
                EquipmentDetailsHistory.push(new retrieveESPEquipmentSetupResponseEquipmentDetailsHistory(data.getElementsByTagName("EquipmentDetailsHistory")[EquipmentDetailsHistorychildi]));
            }
            if(data.getElementsByTagName("EquipmentDetailsHistory").length > 0)
                this['EquipmentDetailsHistory'] = EquipmentDetailsHistory;
            
            RateHistory = [];
            for(RateHistorychildi = 0; RateHistorychildi < data.getElementsByTagName("RateHistory").length; RateHistorychildi++)
            {
                RateHistory.push(new retrieveESPEquipmentSetupResponseRateHistory(data.getElementsByTagName("RateHistory")[RateHistorychildi]));
            }
            if(data.getElementsByTagName("RateHistory").length > 0)
                this['RateHistory'] = RateHistory;
            
            TermsAndConditionsHistory = [];
            for(TermsAndConditionsHistorychildi = 0; TermsAndConditionsHistorychildi < data.getElementsByTagName("TermsAndConditionsHistory").length; TermsAndConditionsHistorychildi++)
            {
                TermsAndConditionsHistory.push(new retrieveESPEquipmentSetupResponseTermsAndConditionsHistory(data.getElementsByTagName("TermsAndConditionsHistory")[TermsAndConditionsHistorychildi]));
            }
            if(data.getElementsByTagName("TermsAndConditionsHistory").length > 0)
                this['TermsAndConditionsHistory'] = TermsAndConditionsHistory;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveESPEquipmentSetupResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('ESPRate') && data['ESPRate'] != null)
            {
                ESPRate = [];
                for(ESPRateindex = 0; ESPRateindex < data['ESPRate'].length; ESPRateindex++)
                {
                    ESPRate.push(new retrieveESPEquipmentSetupResponseESPRate(data['ESPRate'][ESPRateindex]));
                }
                this['ESPRate'] = ESPRate;
            }
            
            
            if(data.hasOwnProperty('Terms_and_Condition') && data['Terms_and_Condition'] != null)
            {
                Terms_and_Condition = [];
                for(Terms_and_Conditionindex = 0; Terms_and_Conditionindex < data['Terms_and_Condition'].length; Terms_and_Conditionindex++)
                {
                    Terms_and_Condition.push(new retrieveESPEquipmentSetupResponseTerms_and_Condition(data['Terms_and_Condition'][Terms_and_Conditionindex]));
                }
                this['Terms_and_Condition'] = Terms_and_Condition;
            }
            
            
            if(data.hasOwnProperty('EquipmentDetailsHistory') && data['EquipmentDetailsHistory'] != null)
            {
                EquipmentDetailsHistory = [];
                for(EquipmentDetailsHistoryindex = 0; EquipmentDetailsHistoryindex < data['EquipmentDetailsHistory'].length; EquipmentDetailsHistoryindex++)
                {
                    EquipmentDetailsHistory.push(new retrieveESPEquipmentSetupResponseEquipmentDetailsHistory(data['EquipmentDetailsHistory'][EquipmentDetailsHistoryindex]));
                }
                this['EquipmentDetailsHistory'] = EquipmentDetailsHistory;
            }
            
            
            if(data.hasOwnProperty('RateHistory') && data['RateHistory'] != null)
            {
                RateHistory = [];
                for(RateHistoryindex = 0; RateHistoryindex < data['RateHistory'].length; RateHistoryindex++)
                {
                    RateHistory.push(new retrieveESPEquipmentSetupResponseRateHistory(data['RateHistory'][RateHistoryindex]));
                }
                this['RateHistory'] = RateHistory;
            }
            
            
            if(data.hasOwnProperty('TermsAndConditionsHistory') && data['TermsAndConditionsHistory'] != null)
            {
                TermsAndConditionsHistory = [];
                for(TermsAndConditionsHistoryindex = 0; TermsAndConditionsHistoryindex < data['TermsAndConditionsHistory'].length; TermsAndConditionsHistoryindex++)
                {
                    TermsAndConditionsHistory.push(new retrieveESPEquipmentSetupResponseTermsAndConditionsHistory(data['TermsAndConditionsHistory'][TermsAndConditionsHistoryindex]));
                }
                this['TermsAndConditionsHistory'] = TermsAndConditionsHistory;
            }
        }
    }
}

function retrieveESPEquipmentSetupResponseHeader(data)
{
    /**
     * @member {Int32} espequipment_rowid
     */
    this['espequipment_rowid'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} equipment_no
     */
    this['equipment_no'] = null;
    
    /**
     * @member {String} esp_name
     */
    this['esp_name'] = null;
    
    /**
     * @member {String} equipment_code
     */
    this['equipment_code'] = null;
    
    /**
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
    /**
     * @member {String} equipment_image
     */
    this['equipment_image'] = null;
    
    /**
     * @member {String} equipment_image_date
     */
    this['equipment_image_date'] = null;
    
    /**
     * @member {String} chasis_no
     */
    this['chasis_no'] = null;
    
    /**
     * @member {String} manfaturer_name
     */
    this['manfaturer_name'] = null;
    
    /**
     * @member {String} serial_no
     */
    this['serial_no'] = null;
    
    /**
     * @member {String} imei_no
     */
    this['imei_no'] = null;
    
    /**
     * @member {String} sim_no
     */
    this['sim_no'] = null;
    
    /**
     * @member {String} gps_id
     */
    this['gps_id'] = null;
    
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
            this['espequipment_rowid'] = parseInt(data.getElementsByTagName("espequipment_rowid")[0].lastChild.nodeValue);
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['equipment_no'] = (data.getElementsByTagName("equipment_no")[0].lastChild != null) ? data.getElementsByTagName("equipment_no")[0].lastChild.nodeValue : "";
            
            this['esp_name'] = (data.getElementsByTagName("esp_name")[0].lastChild != null) ? data.getElementsByTagName("esp_name")[0].lastChild.nodeValue : "";
            
            this['equipment_code'] = (data.getElementsByTagName("equipment_code")[0].lastChild != null) ? data.getElementsByTagName("equipment_code")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("equipment_image")[0].attributes.length == 0) //Check NULL value
                this['equipment_image'] = (data.getElementsByTagName("equipment_image")[0].lastChild != null) ? data.getElementsByTagName("equipment_image")[0].lastChild.nodeValue : "";
            
            this['equipment_image_date'] = (data.getElementsByTagName("equipment_image_date")[0].lastChild != null) ? data.getElementsByTagName("equipment_image_date")[0].lastChild.nodeValue : "";
            
            this['chasis_no'] = (data.getElementsByTagName("chasis_no")[0].lastChild != null) ? data.getElementsByTagName("chasis_no")[0].lastChild.nodeValue : "";
            
            this['manfaturer_name'] = (data.getElementsByTagName("manfaturer_name")[0].lastChild != null) ? data.getElementsByTagName("manfaturer_name")[0].lastChild.nodeValue : "";
            
            this['serial_no'] = (data.getElementsByTagName("serial_no")[0].lastChild != null) ? data.getElementsByTagName("serial_no")[0].lastChild.nodeValue : "";
            
            this['imei_no'] = (data.getElementsByTagName("imei_no")[0].lastChild != null) ? data.getElementsByTagName("imei_no")[0].lastChild.nodeValue : "";
            
            this['sim_no'] = (data.getElementsByTagName("sim_no")[0].lastChild != null) ? data.getElementsByTagName("sim_no")[0].lastChild.nodeValue : "";
            
            this['gps_id'] = (data.getElementsByTagName("gps_id")[0].lastChild != null) ? data.getElementsByTagName("gps_id")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['espequipment_rowid'] = data['espequipment_rowid'];
            
            this['esp_code'] = data['esp_code'];
            
            this['equipment_no'] = data['equipment_no'];
            
            this['esp_name'] = data['esp_name'];
            
            this['equipment_code'] = data['equipment_code'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['equipment_image'] = data['equipment_image'];
            
            this['equipment_image_date'] = data['equipment_image_date'];
            
            this['chasis_no'] = data['chasis_no'];
            
            this['manfaturer_name'] = data['manfaturer_name'];
            
            this['serial_no'] = data['serial_no'];
            
            this['imei_no'] = data['imei_no'];
            
            this['sim_no'] = data['sim_no'];
            
            this['gps_id'] = data['gps_id'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveESPEquipmentSetupResponseESPRate(data)
{
    /**
     * @member {Int32} equipment_rowid
     */
    this['equipment_rowid'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
    /**
     * @member {String} uomtype_code
     */
    this['uomtype_code'] = null;
    
    /**
     * @member {String} uomtype_desc
     */
    this['uomtype_desc'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} equipment_code
     */
    this['equipment_code'] = null;
    
    /**
     * @member {String} effective_from
     */
    this['effective_from'] = null;
    
    /**
     * @member {String} effective_to
     */
    this['effective_to'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['equipment_rowid'] = parseInt(data.getElementsByTagName("equipment_rowid")[0].lastChild.nodeValue);
            
            this['rate'] = parseFloat(data.getElementsByTagName("rate")[0].lastChild.nodeValue);
            
            this['uomtype_code'] = (data.getElementsByTagName("uomtype_code")[0].lastChild != null) ? data.getElementsByTagName("uomtype_code")[0].lastChild.nodeValue : "";
            
            this['uomtype_desc'] = (data.getElementsByTagName("uomtype_desc")[0].lastChild != null) ? data.getElementsByTagName("uomtype_desc")[0].lastChild.nodeValue : "";
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['equipment_code'] = (data.getElementsByTagName("equipment_code")[0].lastChild != null) ? data.getElementsByTagName("equipment_code")[0].lastChild.nodeValue : "";
            
            this['effective_from'] = (data.getElementsByTagName("effective_from")[0].lastChild != null) ? data.getElementsByTagName("effective_from")[0].lastChild.nodeValue : "";
            
            this['effective_to'] = (data.getElementsByTagName("effective_to")[0].lastChild != null) ? data.getElementsByTagName("effective_to")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['equipment_rowid'] = data['equipment_rowid'];
            
            this['rate'] = data['rate'];
            
            this['uomtype_code'] = data['uomtype_code'];
            
            this['uomtype_desc'] = data['uomtype_desc'];
            
            this['esp_code'] = data['esp_code'];
            
            this['equipment_code'] = data['equipment_code'];
            
            this['effective_from'] = data['effective_from'];
            
            this['effective_to'] = data['effective_to'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveESPEquipmentSetupResponseTerms_and_Condition(data)
{
    /**
     * @member {Int32} termsandconditions_rowid
     */
    this['termsandconditions_rowid'] = null;
    
    /**
     * @member {Int32} equipment_rowid
     */
    this['equipment_rowid'] = null;
    
    /**
     * @member {Int16} sl_no
     */
    this['sl_no'] = null;
    
    /**
     * @member {String} esp_code
     */
    this['esp_code'] = null;
    
    /**
     * @member {String} equipment_code
     */
    this['equipment_code'] = null;
    
    /**
     * @member {String} termsandconditions
     */
    this['termsandconditions'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['termsandconditions_rowid'] = parseInt(data.getElementsByTagName("termsandconditions_rowid")[0].lastChild.nodeValue);
            
            this['equipment_rowid'] = parseInt(data.getElementsByTagName("equipment_rowid")[0].lastChild.nodeValue);
            
            this['sl_no'] = parseInt(data.getElementsByTagName("sl_no")[0].lastChild.nodeValue);
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
            
            this['equipment_code'] = (data.getElementsByTagName("equipment_code")[0].lastChild != null) ? data.getElementsByTagName("equipment_code")[0].lastChild.nodeValue : "";
            
            this['termsandconditions'] = (data.getElementsByTagName("termsandconditions")[0].lastChild != null) ? data.getElementsByTagName("termsandconditions")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
            
            this['equipment_rowid'] = data['equipment_rowid'];
            
            this['sl_no'] = data['sl_no'];
            
            this['esp_code'] = data['esp_code'];
            
            this['equipment_code'] = data['equipment_code'];
            
            this['termsandconditions'] = data['termsandconditions'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveESPEquipmentSetupResponseEquipmentDetailsHistory(data)
{
    /**
     * @member {Int32} hespequipment_rowid
     */
    this['hespequipment_rowid'] = null;
    
    /**
     * @member {Int32} espequipment_history_rowid
     */
    this['espequipment_history_rowid'] = null;
    
    /**
     * @member {String} equipment_code
     */
    this['equipment_code'] = null;
    
    /**
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
    /**
     * @member {String} manufacturer_name
     */
    this['manufacturer_name'] = null;
    
    /**
     * @member {String} serial_no
     */
    this['serial_no'] = null;
    
    /**
     * @member {String} chasis_no
     */
    this['chasis_no'] = null;
    
    /**
     * @member {String} gps_id
     */
    this['gps_id'] = null;
    
    /**
     * @member {String} imei_no
     */
    this['imei_no'] = null;
    
    /**
     * @member {String} sim_no
     */
    this['sim_no'] = null;
    
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['hespequipment_rowid'] = parseInt(data.getElementsByTagName("hespequipment_rowid")[0].lastChild.nodeValue);
            
            this['espequipment_history_rowid'] = parseInt(data.getElementsByTagName("espequipment_history_rowid")[0].lastChild.nodeValue);
            
            this['equipment_code'] = (data.getElementsByTagName("equipment_code")[0].lastChild != null) ? data.getElementsByTagName("equipment_code")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['manufacturer_name'] = (data.getElementsByTagName("manufacturer_name")[0].lastChild != null) ? data.getElementsByTagName("manufacturer_name")[0].lastChild.nodeValue : "";
            
            this['serial_no'] = (data.getElementsByTagName("serial_no")[0].lastChild != null) ? data.getElementsByTagName("serial_no")[0].lastChild.nodeValue : "";
            
            this['chasis_no'] = (data.getElementsByTagName("chasis_no")[0].lastChild != null) ? data.getElementsByTagName("chasis_no")[0].lastChild.nodeValue : "";
            
            this['gps_id'] = (data.getElementsByTagName("gps_id")[0].lastChild != null) ? data.getElementsByTagName("gps_id")[0].lastChild.nodeValue : "";
            
            this['imei_no'] = (data.getElementsByTagName("imei_no")[0].lastChild != null) ? data.getElementsByTagName("imei_no")[0].lastChild.nodeValue : "";
            
            this['sim_no'] = (data.getElementsByTagName("sim_no")[0].lastChild != null) ? data.getElementsByTagName("sim_no")[0].lastChild.nodeValue : "";
            
            this['user_code'] = (data.getElementsByTagName("user_code")[0].lastChild != null) ? data.getElementsByTagName("user_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['hespequipment_rowid'] = data['hespequipment_rowid'];
            
            this['espequipment_history_rowid'] = data['espequipment_history_rowid'];
            
            this['equipment_code'] = data['equipment_code'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['manufacturer_name'] = data['manufacturer_name'];
            
            this['serial_no'] = data['serial_no'];
            
            this['chasis_no'] = data['chasis_no'];
            
            this['gps_id'] = data['gps_id'];
            
            this['imei_no'] = data['imei_no'];
            
            this['sim_no'] = data['sim_no'];
            
            this['user_code'] = data['user_code'];
            
            this['user_name'] = data['user_name'];
        }
    }
}

function retrieveESPEquipmentSetupResponseRateHistory(data)
{
    /**
     * @member {Int32} rate_history_rowid
     */
    this['rate_history_rowid'] = null;
    
    /**
     * @member {Int32} rate_rowid
     */
    this['rate_rowid'] = null;
    
    /**
     * @member {String} uom_code
     */
    this['uom_code'] = null;
    
    /**
     * @member {String} uom_desc
     */
    this['uom_desc'] = null;
    
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['rate_history_rowid'] = parseInt(data.getElementsByTagName("rate_history_rowid")[0].lastChild.nodeValue);
            
            this['rate_rowid'] = parseInt(data.getElementsByTagName("rate_rowid")[0].lastChild.nodeValue);
            
            this['uom_code'] = (data.getElementsByTagName("uom_code")[0].lastChild != null) ? data.getElementsByTagName("uom_code")[0].lastChild.nodeValue : "";
            
            this['uom_desc'] = (data.getElementsByTagName("uom_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_desc")[0].lastChild.nodeValue : "";
            
            this['from_date'] = (data.getElementsByTagName("from_date")[0].lastChild != null) ? data.getElementsByTagName("from_date")[0].lastChild.nodeValue : "";
            
            this['to_date'] = (data.getElementsByTagName("to_date")[0].lastChild != null) ? data.getElementsByTagName("to_date")[0].lastChild.nodeValue : "";
            
            this['user_code'] = (data.getElementsByTagName("user_code")[0].lastChild != null) ? data.getElementsByTagName("user_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['rate_history_rowid'] = data['rate_history_rowid'];
            
            this['rate_rowid'] = data['rate_rowid'];
            
            this['uom_code'] = data['uom_code'];
            
            this['uom_desc'] = data['uom_desc'];
            
            this['from_date'] = data['from_date'];
            
            this['to_date'] = data['to_date'];
            
            this['user_code'] = data['user_code'];
            
            this['user_name'] = data['user_name'];
        }
    }
}

function retrieveESPEquipmentSetupResponseTermsAndConditionsHistory(data)
{
    /**
     * @member {Int32} termsandconditions_history_rowid
     */
    this['termsandconditions_history_rowid'] = null;
    
    /**
     * @member {Int32} termsandconditions_rowid
     */
    this['termsandconditions_rowid'] = null;
    
    /**
     * @member {String} serial_no
     */
    this['serial_no'] = null;
    
    /**
     * @member {String} terms_and_conditions
     */
    this['terms_and_conditions'] = null;
    
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['termsandconditions_history_rowid'] = parseInt(data.getElementsByTagName("termsandconditions_history_rowid")[0].lastChild.nodeValue);
            
            this['termsandconditions_rowid'] = parseInt(data.getElementsByTagName("termsandconditions_rowid")[0].lastChild.nodeValue);
            
            this['serial_no'] = (data.getElementsByTagName("serial_no")[0].lastChild != null) ? data.getElementsByTagName("serial_no")[0].lastChild.nodeValue : "";
            
            this['terms_and_conditions'] = (data.getElementsByTagName("terms_and_conditions")[0].lastChild != null) ? data.getElementsByTagName("terms_and_conditions")[0].lastChild.nodeValue : "";
            
            this['user_code'] = (data.getElementsByTagName("user_code")[0].lastChild != null) ? data.getElementsByTagName("user_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
        }
        else {
            this['termsandconditions_history_rowid'] = data['termsandconditions_history_rowid'];
            
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
            
            this['serial_no'] = data['serial_no'];
            
            this['terms_and_conditions'] = data['terms_and_conditions'];
            
            this['user_code'] = data['user_code'];
            
            this['user_name'] = data['user_name'];
        }
    }
}

