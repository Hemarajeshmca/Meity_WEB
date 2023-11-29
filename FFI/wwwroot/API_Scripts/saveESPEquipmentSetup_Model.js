var responseDataFormat = "JSON";

function saveESPEquipmentSetupRequest(data)
{
    /**
     * @member {saveESPEquipmentSetupRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveESPEquipmentSetupRequestcontext(data['context']);
    }
}

function saveESPEquipmentSetupRequestcontext(data)
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
     * @member {saveESPEquipmentSetupRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveESPEquipmentSetupRequestESPRate} ESPRate
     */
    this['ESPRate'] = null;
    
    /**
     * @member {saveESPEquipmentSetupRequestTerms_and_Condition} Terms_and_Condition
     */
    this['Terms_and_Condition'] = null;
    
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
            this['Header'] = new saveESPEquipmentSetupRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('ESPRate') && data['ESPRate'] != null)
        {
            ESPRate = [];
            for(ESPRateindex = 0; ESPRateindex < data['ESPRate'].length; ESPRateindex++)
            {
                ESPRate.push(new saveESPEquipmentSetupRequestESPRate(data['ESPRate'][ESPRateindex]));
            }
            this['ESPRate'] = ESPRate;
        }
        
        if(data.hasOwnProperty('Terms_and_Condition') && data['Terms_and_Condition'] != null)
        {
            Terms_and_Condition = [];
            for(Terms_and_Conditionindex = 0; Terms_and_Conditionindex < data['Terms_and_Condition'].length; Terms_and_Conditionindex++)
            {
                Terms_and_Condition.push(new saveESPEquipmentSetupRequestTerms_and_Condition(data['Terms_and_Condition'][Terms_and_Conditionindex]));
            }
            this['Terms_and_Condition'] = Terms_and_Condition;
        }
    }
}

function saveESPEquipmentSetupRequestHeader(data)
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
     * @member {String} manfaturer_name
     */
    this['manfaturer_name'] = null;
    
    /**
     * @member {String} serial_no
     */
    this['serial_no'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('espequipment_rowid'))
            this['espequipment_rowid'] = data['espequipment_rowid'];
        
        if(data.hasOwnProperty('esp_code'))
            this['esp_code'] = data['esp_code'];
        
        if(data.hasOwnProperty('equipment_no'))
            this['equipment_no'] = data['equipment_no'];
        
        if(data.hasOwnProperty('esp_name'))
            this['esp_name'] = data['esp_name'];
        
        if(data.hasOwnProperty('equipment_code'))
            this['equipment_code'] = data['equipment_code'];
        
        if(data.hasOwnProperty('manfaturer_name'))
            this['manfaturer_name'] = data['manfaturer_name'];
        
        if(data.hasOwnProperty('serial_no'))
            this['serial_no'] = data['serial_no'];
        
        if(data.hasOwnProperty('equipment_image'))
            this['equipment_image'] = data['equipment_image'];
        
        if(data.hasOwnProperty('equipment_image_date'))
            this['equipment_image_date'] = data['equipment_image_date'];
        
        if(data.hasOwnProperty('chasis_no'))
            this['chasis_no'] = data['chasis_no'];
        
        if(data.hasOwnProperty('imei_no'))
            this['imei_no'] = data['imei_no'];
        
        if(data.hasOwnProperty('sim_no'))
            this['sim_no'] = data['sim_no'];
        
        if(data.hasOwnProperty('gps_id'))
            this['gps_id'] = data['gps_id'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveESPEquipmentSetupRequestESPRate(data)
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('equipment_rowid'))
            this['equipment_rowid'] = data['equipment_rowid'];
        
        if(data.hasOwnProperty('rate'))
            this['rate'] = data['rate'];
        
        if(data.hasOwnProperty('uomtype_code'))
            this['uomtype_code'] = data['uomtype_code'];
        
        if(data.hasOwnProperty('esp_code'))
            this['esp_code'] = data['esp_code'];
        
        if(data.hasOwnProperty('equipment_code'))
            this['equipment_code'] = data['equipment_code'];
        
        if(data.hasOwnProperty('effective_from'))
            this['effective_from'] = data['effective_from'];
        
        if(data.hasOwnProperty('effective_to'))
            this['effective_to'] = data['effective_to'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveESPEquipmentSetupRequestTerms_and_Condition(data)
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('termsandconditions_rowid'))
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
        
        if(data.hasOwnProperty('equipment_rowid'))
            this['equipment_rowid'] = data['equipment_rowid'];
        
        if(data.hasOwnProperty('sl_no'))
            this['sl_no'] = data['sl_no'];
        
        if(data.hasOwnProperty('esp_code'))
            this['esp_code'] = data['esp_code'];
        
        if(data.hasOwnProperty('equipment_code'))
            this['equipment_code'] = data['equipment_code'];
        
        if(data.hasOwnProperty('termsandconditions'))
            this['termsandconditions'] = data['termsandconditions'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveESPEquipmentSetupResponse(data, format)
{
    /**
     * @member {saveESPEquipmentSetupResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveESPEquipmentSetupResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveESPEquipmentSetupResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveESPEquipmentSetupResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveESPEquipmentSetupResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveESPEquipmentSetupResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveESPEquipmentSetupResponseApplicationException(data)
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

function saveESPEquipmentSetupResponsecontext(data)
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
     * @member {saveESPEquipmentSetupResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveESPEquipmentSetupResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveESPEquipmentSetupResponseHeader(data['Header']);
        }
    }
}

function saveESPEquipmentSetupResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['espequipment_rowid'] = parseInt(data.getElementsByTagName("espequipment_rowid")[0].lastChild.nodeValue);
            
            this['esp_code'] = (data.getElementsByTagName("esp_code")[0].lastChild != null) ? data.getElementsByTagName("esp_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['espequipment_rowid'] = data['espequipment_rowid'];
            
            this['esp_code'] = data['esp_code'];
        }
    }
}

