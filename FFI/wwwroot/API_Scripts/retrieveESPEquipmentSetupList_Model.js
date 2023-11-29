var responseDataFormat = "JSON";

function retrieveESPEquipmentSetupListRequest(data)
{
    /**
     * @member {retrieveESPEquipmentSetupListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveESPEquipmentSetupListRequestcontext(data['context']);
    }
}

function retrieveESPEquipmentSetupListRequestcontext(data)
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
     * @member {retrieveESPEquipmentSetupListRequestFilter} Filter
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
            this['Filter'] = new retrieveESPEquipmentSetupListRequestFilter(data['Filter']);
    }
}

function retrieveESPEquipmentSetupListRequestFilter(data)
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
     * @member {String} FilterBy_FromValue
     */
    this['FilterBy_FromValue'] = null;
    
    /**
     * @member {String} FilterBy_ToValue
     */
    this['FilterBy_ToValue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_FromValue'))
            this['FilterBy_FromValue'] = data['FilterBy_FromValue'];
        
        if(data.hasOwnProperty('FilterBy_ToValue'))
            this['FilterBy_ToValue'] = data['FilterBy_ToValue'];
        
    }
}

function retrieveESPEquipmentSetupListResponse(data, format)
{
    /**
     * @member {retrieveESPEquipmentSetupListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveESPEquipmentSetupListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveESPEquipmentSetupListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveESPEquipmentSetupListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveESPEquipmentSetupListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveESPEquipmentSetupListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveESPEquipmentSetupListResponseApplicationException(data)
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

function retrieveESPEquipmentSetupListResponsecontext(data)
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
     * @member {retrieveESPEquipmentSetupListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new retrieveESPEquipmentSetupListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new retrieveESPEquipmentSetupListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveESPEquipmentSetupListResponseList(data)
{
    /**
     * @member {Int32} espequipment_rowid
     */
    this['espequipment_rowid'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} equipment_code
     */
    this['equipment_code'] = null;
    
    /**
     * @member {String} equipment_name
     */
    this['equipment_name'] = null;
    
    /**
     * @member {String} booking_date
     */
    this['booking_date'] = null;
    
    /**
     * @member {String} effective_from
     */
    this['effective_from'] = null;
    
    /**
     * @member {String} effective_to
     */
    this['effective_to'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['espequipment_rowid'] = parseInt(data.getElementsByTagName("espequipment_rowid")[0].lastChild.nodeValue);
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
            
            this['equipment_code'] = (data.getElementsByTagName("equipment_code")[0].lastChild != null) ? data.getElementsByTagName("equipment_code")[0].lastChild.nodeValue : "";
            
            this['equipment_name'] = (data.getElementsByTagName("equipment_name")[0].lastChild != null) ? data.getElementsByTagName("equipment_name")[0].lastChild.nodeValue : "";
            
            this['booking_date'] = (data.getElementsByTagName("booking_date")[0].lastChild != null) ? data.getElementsByTagName("booking_date")[0].lastChild.nodeValue : "";
            
            this['effective_from'] = (data.getElementsByTagName("effective_from")[0].lastChild != null) ? data.getElementsByTagName("effective_from")[0].lastChild.nodeValue : "";
            
            this['effective_to'] = (data.getElementsByTagName("effective_to")[0].lastChild != null) ? data.getElementsByTagName("effective_to")[0].lastChild.nodeValue : "";
            
            this['manufacturer_name'] = (data.getElementsByTagName("manufacturer_name")[0].lastChild != null) ? data.getElementsByTagName("manufacturer_name")[0].lastChild.nodeValue : "";
            
            this['serial_no'] = (data.getElementsByTagName("serial_no")[0].lastChild != null) ? data.getElementsByTagName("serial_no")[0].lastChild.nodeValue : "";
            
            this['chasis_no'] = (data.getElementsByTagName("chasis_no")[0].lastChild != null) ? data.getElementsByTagName("chasis_no")[0].lastChild.nodeValue : "";
            
            this['imei_no'] = (data.getElementsByTagName("imei_no")[0].lastChild != null) ? data.getElementsByTagName("imei_no")[0].lastChild.nodeValue : "";
            
            this['sim_no'] = (data.getElementsByTagName("sim_no")[0].lastChild != null) ? data.getElementsByTagName("sim_no")[0].lastChild.nodeValue : "";
            
            this['gps_id'] = (data.getElementsByTagName("gps_id")[0].lastChild != null) ? data.getElementsByTagName("gps_id")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['espequipment_rowid'] = data['espequipment_rowid'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['booking_no'] = data['booking_no'];
            
            this['equipment_code'] = data['equipment_code'];
            
            this['equipment_name'] = data['equipment_name'];
            
            this['booking_date'] = data['booking_date'];
            
            this['effective_from'] = data['effective_from'];
            
            this['effective_to'] = data['effective_to'];
            
            this['manufacturer_name'] = data['manufacturer_name'];
            
            this['serial_no'] = data['serial_no'];
            
            this['chasis_no'] = data['chasis_no'];
            
            this['imei_no'] = data['imei_no'];
            
            this['sim_no'] = data['sim_no'];
            
            this['gps_id'] = data['gps_id'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

