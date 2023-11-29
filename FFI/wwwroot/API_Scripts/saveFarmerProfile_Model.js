var responseDataFormat = "JSON";

function saveFarmerProfileRequest(data)
{
    /**
     * @member {saveFarmerProfileRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFarmerProfileRequestcontext(data['context']);
    }
}

function saveFarmerProfileRequestcontext(data)
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
     * @member {saveFarmerProfileRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFarmerProfileRequestDetail} Detail
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
            this['Header'] = new saveFarmerProfileRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveFarmerProfileRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveFarmerProfileRequestHeader(data)
{
    /**
     * @member {Int32} farmer_rowid
     */
    this['farmer_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {Int16} version_no
     */
    this['version_no'] = null;
    
    /**
     * @member {String} photo_farmer
     */
    this['photo_farmer'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} fhw_name
     */
    this['fhw_name'] = null;
    
    /**
     * @member {String} farmer_dob
     */
    this['farmer_dob'] = null;
    
    /**
     * @member {String} farmer_addr1
     */
    this['farmer_addr1'] = null;
    
    /**
     * @member {String} farmer_addr2
     */
    this['farmer_addr2'] = null;
    
    /**
     * @member {String} farmer_ll_name
     */
    this['farmer_ll_name'] = null;
    
    /**
     * @member {String} sur_ll_name
     */
    this['sur_ll_name'] = null;
    
    /**
     * @member {String} fhw_ll_name
     */
    this['fhw_ll_name'] = null;
    
    /**
     * @member {String} farmer_ll_addr1
     */
    this['farmer_ll_addr1'] = null;
    
    /**
     * @member {String} farmer_ll_addr2
     */
    this['farmer_ll_addr2'] = null;
    
    /**
     * @member {String} farmer_country
     */
    this['farmer_country'] = null;
    
    /**
     * @member {String} farmer_state
     */
    this['farmer_state'] = null;
    
    /**
     * @member {String} farmer_dist
     */
    this['farmer_dist'] = null;
    
    /**
     * @member {String} farmer_taluk
     */
    this['farmer_taluk'] = null;
    
    /**
     * @member {String} farmer_panchayat
     */
    this['farmer_panchayat'] = null;
    
    /**
     * @member {String} farmer_village
     */
    this['farmer_village'] = null;
    
    /**
     * @member {String} farmer_pincode
     */
    this['farmer_pincode'] = null;
    
    /**
     * @member {String} marital_status
     */
    this['marital_status'] = null;
    
    /**
     * @member {String} gender_flag
     */
    this['gender_flag'] = null;
    
    /**
     * @member {String} reg_mobile_no
     */
    this['reg_mobile_no'] = null;
    
    /**
     * @member {String} reg_note
     */
    this['reg_note'] = null;
    
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
        if(data.hasOwnProperty('farmer_rowid'))
            this['farmer_rowid'] = data['farmer_rowid'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('version_no'))
            this['version_no'] = data['version_no'];
        
        if(data.hasOwnProperty('photo_farmer'))
            this['photo_farmer'] = data['photo_farmer'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('sur_name'))
            this['sur_name'] = data['sur_name'];
        
        if(data.hasOwnProperty('fhw_name'))
            this['fhw_name'] = data['fhw_name'];
        
        if(data.hasOwnProperty('farmer_dob'))
            this['farmer_dob'] = data['farmer_dob'];
        
        if(data.hasOwnProperty('farmer_addr1'))
            this['farmer_addr1'] = data['farmer_addr1'];
        
        if(data.hasOwnProperty('farmer_addr2'))
            this['farmer_addr2'] = data['farmer_addr2'];
        
        if(data.hasOwnProperty('farmer_ll_name'))
            this['farmer_ll_name'] = data['farmer_ll_name'];
        
        if(data.hasOwnProperty('sur_ll_name'))
            this['sur_ll_name'] = data['sur_ll_name'];
        
        if(data.hasOwnProperty('fhw_ll_name'))
            this['fhw_ll_name'] = data['fhw_ll_name'];
        
        if(data.hasOwnProperty('farmer_ll_addr1'))
            this['farmer_ll_addr1'] = data['farmer_ll_addr1'];
        
        if(data.hasOwnProperty('farmer_ll_addr2'))
            this['farmer_ll_addr2'] = data['farmer_ll_addr2'];
        
        if(data.hasOwnProperty('farmer_country'))
            this['farmer_country'] = data['farmer_country'];
        
        if(data.hasOwnProperty('farmer_state'))
            this['farmer_state'] = data['farmer_state'];
        
        if(data.hasOwnProperty('farmer_dist'))
            this['farmer_dist'] = data['farmer_dist'];
        
        if(data.hasOwnProperty('farmer_taluk'))
            this['farmer_taluk'] = data['farmer_taluk'];
        
        if(data.hasOwnProperty('farmer_panchayat'))
            this['farmer_panchayat'] = data['farmer_panchayat'];
        
        if(data.hasOwnProperty('farmer_village'))
            this['farmer_village'] = data['farmer_village'];
        
        if(data.hasOwnProperty('farmer_pincode'))
            this['farmer_pincode'] = data['farmer_pincode'];
        
        if(data.hasOwnProperty('marital_status'))
            this['marital_status'] = data['marital_status'];
        
        if(data.hasOwnProperty('gender_flag'))
            this['gender_flag'] = data['gender_flag'];
        
        if(data.hasOwnProperty('reg_mobile_no'))
            this['reg_mobile_no'] = data['reg_mobile_no'];
        
        if(data.hasOwnProperty('reg_note'))
            this['reg_note'] = data['reg_note'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFarmerProfileRequestDetail(data)
{
    /**
     * @member {Int32} farmerdetail_rowid
     */
    this['farmerdetail_rowid'] = null;
    
    /**
     * @member {String} entitygrp_code
     */
    this['entitygrp_code'] = null;
    
    /**
     * @member {String} entity_code
     */
    this['entity_code'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
    /**
     * @member {String} entity_value
     */
    this['entity_value'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('farmerdetail_rowid'))
            this['farmerdetail_rowid'] = data['farmerdetail_rowid'];
        
        if(data.hasOwnProperty('entitygrp_code'))
            this['entitygrp_code'] = data['entitygrp_code'];
        
        if(data.hasOwnProperty('entity_code'))
            this['entity_code'] = data['entity_code'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('entity_value'))
            this['entity_value'] = data['entity_value'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFarmerProfileResponse(data, format)
{
    /**
     * @member {saveFarmerProfileResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFarmerProfileResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFarmerProfileResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFarmerProfileResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFarmerProfileResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFarmerProfileResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFarmerProfileResponseApplicationException(data)
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

function saveFarmerProfileResponsecontext(data)
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
     * @member {saveFarmerProfileResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFarmerProfileResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFarmerProfileResponseHeader(data['Header']);
        }
    }
}

function saveFarmerProfileResponseHeader(data)
{
    /**
     * @member {Int32} farmer_rowid
     */
    this['farmer_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {Int16} version_no
     */
    this['version_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_rowid'] = parseInt(data.getElementsByTagName("farmer_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['version_no'] = parseInt(data.getElementsByTagName("version_no")[0].lastChild.nodeValue);
        }
        else {
            this['farmer_rowid'] = data['farmer_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['version_no'] = data['version_no'];
        }
    }
}

