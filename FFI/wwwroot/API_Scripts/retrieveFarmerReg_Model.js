var responseDataFormat = "JSON";

function retrieveFarmerRegRequest(data)
{
    /**
     * @member {retrieveFarmerRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFarmerRegRequestcontext(data['context']);
    }
}

function retrieveFarmerRegRequestcontext(data)
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
     * @member {retrieveFarmerRegRequestHeader} Header
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
            this['Header'] = new retrieveFarmerRegRequestHeader(data['Header']);
    }
}

function retrieveFarmerRegRequestHeader(data)
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
        if(data.hasOwnProperty('farmer_rowid'))
            this['farmer_rowid'] = data['farmer_rowid'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('version_no'))
            this['version_no'] = data['version_no'];
        
    }
}

function retrieveFarmerRegResponse(data, format)
{
    /**
     * @member {retrieveFarmerRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFarmerRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFarmerRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFarmerRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFarmerRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFarmerRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFarmerRegResponseApplicationException(data)
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

function retrieveFarmerRegResponsecontext(data)
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
     * @member {retrieveFarmerRegResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFarmerRegResponseKYC} KYC
     */
    this['KYC'] = null;
    
    /**
     * @member {retrieveFarmerRegResponseBank} Bank
     */
    this['Bank'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFarmerRegResponseHeader(data.getElementsByTagName("Header")[0]);
            
            KYC = [];
            for(KYCchildi = 0; KYCchildi < data.getElementsByTagName("KYC").length; KYCchildi++)
            {
                KYC.push(new retrieveFarmerRegResponseKYC(data.getElementsByTagName("KYC")[KYCchildi]));
            }
            if(data.getElementsByTagName("KYC").length > 0)
                this['KYC'] = KYC;
            
            Bank = [];
            for(Bankchildi = 0; Bankchildi < data.getElementsByTagName("Bank").length; Bankchildi++)
            {
                Bank.push(new retrieveFarmerRegResponseBank(data.getElementsByTagName("Bank")[Bankchildi]));
            }
            if(data.getElementsByTagName("Bank").length > 0)
                this['Bank'] = Bank;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFarmerRegResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('KYC') && data['KYC'] != null)
            {
                KYC = [];
                for(KYCindex = 0; KYCindex < data['KYC'].length; KYCindex++)
                {
                    KYC.push(new retrieveFarmerRegResponseKYC(data['KYC'][KYCindex]));
                }
                this['KYC'] = KYC;
            }
            
            
            if(data.hasOwnProperty('Bank') && data['Bank'] != null)
            {
                Bank = [];
                for(Bankindex = 0; Bankindex < data['Bank'].length; Bankindex++)
                {
                    Bank.push(new retrieveFarmerRegResponseBank(data['Bank'][Bankindex]));
                }
                this['Bank'] = Bank;
            }
        }
    }
}

function retrieveFarmerRegResponseHeader(data)
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
     * @member {String} farmer_country_desc
     */
    this['farmer_country_desc'] = null;
    
    /**
     * @member {String} farmer_country_ll_desc
     */
    this['farmer_country_ll_desc'] = null;
    
    /**
     * @member {String} farmer_state
     */
    this['farmer_state'] = null;
    
    /**
     * @member {String} farmer_state_desc
     */
    this['farmer_state_desc'] = null;
    
    /**
     * @member {String} farmer_state_ll_desc
     */
    this['farmer_state_ll_desc'] = null;
    
    /**
     * @member {String} farmer_dist
     */
    this['farmer_dist'] = null;
    
    /**
     * @member {String} farmer_dist_desc
     */
    this['farmer_dist_desc'] = null;
    
    /**
     * @member {String} farmer_dist_ll_desc
     */
    this['farmer_dist_ll_desc'] = null;
    
    /**
     * @member {String} farmer_taluk
     */
    this['farmer_taluk'] = null;
    
    /**
     * @member {String} farmer_taluk_desc
     */
    this['farmer_taluk_desc'] = null;
    
    /**
     * @member {String} farmer_taluk_ll_desc
     */
    this['farmer_taluk_ll_desc'] = null;
    
    /**
     * @member {String} farmer_panchayat
     */
    this['farmer_panchayat'] = null;
    
    /**
     * @member {String} farmer_panchayat_desc
     */
    this['farmer_panchayat_desc'] = null;
    
    /**
     * @member {String} farmer_panchayat_ll_desc
     */
    this['farmer_panchayat_ll_desc'] = null;
    
    /**
     * @member {String} farmer_village
     */
    this['farmer_village'] = null;
    
    /**
     * @member {String} farmer_village_desc
     */
    this['farmer_village_desc'] = null;
    
    /**
     * @member {String} farmer_village_ll_desc
     */
    this['farmer_village_ll_desc'] = null;
    
    /**
     * @member {String} farmer_pincode
     */
    this['farmer_pincode'] = null;
    
    /**
     * @member {String} farmer_pincode_desc
     */
    this['farmer_pincode_desc'] = null;
    
    /**
     * @member {String} marital_status
     */
    this['marital_status'] = null;
    
    /**
     * @member {String} marital_status_desc
     */
    this['marital_status_desc'] = null;
    
    /**
     * @member {String} gender_flag
     */
    this['gender_flag'] = null;
    
    /**
     * @member {String} gender_flag_desc
     */
    this['gender_flag_desc'] = null;
    
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
            this['farmer_rowid'] = data.getElementsByTagName("farmer_rowid")[0].lastChild.nodeValue;
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['version_no'] = data.getElementsByTagName("version_no")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("photo_farmer")[0].attributes.length == 0) //Check NULL value
                this['photo_farmer'] = (data.getElementsByTagName("photo_farmer")[0].lastChild != null) ? data.getElementsByTagName("photo_farmer")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['fhw_name'] = (data.getElementsByTagName("fhw_name")[0].lastChild != null) ? data.getElementsByTagName("fhw_name")[0].lastChild.nodeValue : "";
            
            this['farmer_dob'] = (data.getElementsByTagName("farmer_dob")[0].lastChild != null) ? data.getElementsByTagName("farmer_dob")[0].lastChild.nodeValue : "";
            
            this['farmer_addr1'] = (data.getElementsByTagName("farmer_addr1")[0].lastChild != null) ? data.getElementsByTagName("farmer_addr1")[0].lastChild.nodeValue : "";
            
            this['farmer_addr2'] = (data.getElementsByTagName("farmer_addr2")[0].lastChild != null) ? data.getElementsByTagName("farmer_addr2")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_ll_name")[0].attributes.length == 0) //Check NULL value
                this['farmer_ll_name'] = (data.getElementsByTagName("farmer_ll_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_ll_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("sur_ll_name")[0].attributes.length == 0) //Check NULL value
                this['sur_ll_name'] = (data.getElementsByTagName("sur_ll_name")[0].lastChild != null) ? data.getElementsByTagName("sur_ll_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("fhw_ll_name")[0].attributes.length == 0) //Check NULL value
                this['fhw_ll_name'] = (data.getElementsByTagName("fhw_ll_name")[0].lastChild != null) ? data.getElementsByTagName("fhw_ll_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_ll_addr1")[0].attributes.length == 0) //Check NULL value
                this['farmer_ll_addr1'] = (data.getElementsByTagName("farmer_ll_addr1")[0].lastChild != null) ? data.getElementsByTagName("farmer_ll_addr1")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_ll_addr2")[0].attributes.length == 0) //Check NULL value
                this['farmer_ll_addr2'] = (data.getElementsByTagName("farmer_ll_addr2")[0].lastChild != null) ? data.getElementsByTagName("farmer_ll_addr2")[0].lastChild.nodeValue : "";
            
            this['farmer_country'] = (data.getElementsByTagName("farmer_country")[0].lastChild != null) ? data.getElementsByTagName("farmer_country")[0].lastChild.nodeValue : "";
            
            this['farmer_country_desc'] = (data.getElementsByTagName("farmer_country_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_country_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_country_ll_desc'] = (data.getElementsByTagName("farmer_country_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_country_ll_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_state'] = (data.getElementsByTagName("farmer_state")[0].lastChild != null) ? data.getElementsByTagName("farmer_state")[0].lastChild.nodeValue : "";
            
            this['farmer_state_desc'] = (data.getElementsByTagName("farmer_state_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_state_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_state_ll_desc'] = (data.getElementsByTagName("farmer_state_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_state_ll_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_dist'] = (data.getElementsByTagName("farmer_dist")[0].lastChild != null) ? data.getElementsByTagName("farmer_dist")[0].lastChild.nodeValue : "";
            
            this['farmer_dist_desc'] = (data.getElementsByTagName("farmer_dist_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_dist_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_dist_ll_desc'] = (data.getElementsByTagName("farmer_dist_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_dist_ll_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_taluk'] = (data.getElementsByTagName("farmer_taluk")[0].lastChild != null) ? data.getElementsByTagName("farmer_taluk")[0].lastChild.nodeValue : "";
            
            this['farmer_taluk_desc'] = (data.getElementsByTagName("farmer_taluk_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_taluk_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_taluk_ll_desc'] = (data.getElementsByTagName("farmer_taluk_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_taluk_ll_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_panchayat'] = (data.getElementsByTagName("farmer_panchayat")[0].lastChild != null) ? data.getElementsByTagName("farmer_panchayat")[0].lastChild.nodeValue : "";
            
            this['farmer_panchayat_desc'] = (data.getElementsByTagName("farmer_panchayat_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_panchayat_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_panchayat_ll_desc'] = (data.getElementsByTagName("farmer_panchayat_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_panchayat_ll_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_village'] = (data.getElementsByTagName("farmer_village")[0].lastChild != null) ? data.getElementsByTagName("farmer_village")[0].lastChild.nodeValue : "";
            
            this['farmer_village_desc'] = (data.getElementsByTagName("farmer_village_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_village_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_village_ll_desc'] = (data.getElementsByTagName("farmer_village_ll_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_village_ll_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_pincode'] = (data.getElementsByTagName("farmer_pincode")[0].lastChild != null) ? data.getElementsByTagName("farmer_pincode")[0].lastChild.nodeValue : "";
            
            this['farmer_pincode_desc'] = (data.getElementsByTagName("farmer_pincode_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_pincode_desc")[0].lastChild.nodeValue : "";
            
            this['marital_status'] = (data.getElementsByTagName("marital_status")[0].lastChild != null) ? data.getElementsByTagName("marital_status")[0].lastChild.nodeValue : "";
            
            this['marital_status_desc'] = (data.getElementsByTagName("marital_status_desc")[0].lastChild != null) ? data.getElementsByTagName("marital_status_desc")[0].lastChild.nodeValue : "";
            
            this['gender_flag'] = (data.getElementsByTagName("gender_flag")[0].lastChild != null) ? data.getElementsByTagName("gender_flag")[0].lastChild.nodeValue : "";
            
            this['gender_flag_desc'] = (data.getElementsByTagName("gender_flag_desc")[0].lastChild != null) ? data.getElementsByTagName("gender_flag_desc")[0].lastChild.nodeValue : "";
            
            this['reg_mobile_no'] = (data.getElementsByTagName("reg_mobile_no")[0].lastChild != null) ? data.getElementsByTagName("reg_mobile_no")[0].lastChild.nodeValue : "";
            
            this['reg_note'] = (data.getElementsByTagName("reg_note")[0].lastChild != null) ? data.getElementsByTagName("reg_note")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_rowid'] = data['farmer_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['version_no'] = data['version_no'];
            
            this['photo_farmer'] = data['photo_farmer'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['fhw_name'] = data['fhw_name'];
            
            this['farmer_dob'] = data['farmer_dob'];
            
            this['farmer_addr1'] = data['farmer_addr1'];
            
            this['farmer_addr2'] = data['farmer_addr2'];
            
            this['farmer_ll_name'] = data['farmer_ll_name'];
            
            this['sur_ll_name'] = data['sur_ll_name'];
            
            this['fhw_ll_name'] = data['fhw_ll_name'];
            
            this['farmer_ll_addr1'] = data['farmer_ll_addr1'];
            
            this['farmer_ll_addr2'] = data['farmer_ll_addr2'];
            
            this['farmer_country'] = data['farmer_country'];
            
            this['farmer_country_desc'] = data['farmer_country_desc'];
            
            this['farmer_country_ll_desc'] = data['farmer_country_ll_desc'];
            
            this['farmer_state'] = data['farmer_state'];
            
            this['farmer_state_desc'] = data['farmer_state_desc'];
            
            this['farmer_state_ll_desc'] = data['farmer_state_ll_desc'];
            
            this['farmer_dist'] = data['farmer_dist'];
            
            this['farmer_dist_desc'] = data['farmer_dist_desc'];
            
            this['farmer_dist_ll_desc'] = data['farmer_dist_ll_desc'];
            
            this['farmer_taluk'] = data['farmer_taluk'];
            
            this['farmer_taluk_desc'] = data['farmer_taluk_desc'];
            
            this['farmer_taluk_ll_desc'] = data['farmer_taluk_ll_desc'];
            
            this['farmer_panchayat'] = data['farmer_panchayat'];
            
            this['farmer_panchayat_desc'] = data['farmer_panchayat_desc'];
            
            this['farmer_panchayat_ll_desc'] = data['farmer_panchayat_ll_desc'];
            
            this['farmer_village'] = data['farmer_village'];
            
            this['farmer_village_desc'] = data['farmer_village_desc'];
            
            this['farmer_village_ll_desc'] = data['farmer_village_ll_desc'];
            
            this['farmer_pincode'] = data['farmer_pincode'];
            
            this['farmer_pincode_desc'] = data['farmer_pincode_desc'];
            
            this['marital_status'] = data['marital_status'];
            
            this['marital_status_desc'] = data['marital_status_desc'];
            
            this['gender_flag'] = data['gender_flag'];
            
            this['gender_flag_desc'] = data['gender_flag_desc'];
            
            this['reg_mobile_no'] = data['reg_mobile_no'];
            
            this['reg_note'] = data['reg_note'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveFarmerRegResponseKYC(data)
{
    /**
     * @member {Int32} farmerkyc_rowid
     */
    this['farmerkyc_rowid'] = null;
    
    /**
     * @member {String} proof_type
     */
    this['proof_type'] = null;
    
    /**
     * @member {String} proof_type_desc
     */
    this['proof_type_desc'] = null;
    
    /**
     * @member {String} proof_doc
     */
    this['proof_doc'] = null;
    
    /**
     * @member {String} proof_doc_desc
     */
    this['proof_doc_desc'] = null;
    
    /**
     * @member {String} proof_doc_no
     */
    this['proof_doc_no'] = null;
    
    /**
     * @member {String} proof_doc_adharno
     */
    this['proof_doc_adharno'] = null;
    
    /**
     * @member {String} proof_valid_till
     */
    this['proof_valid_till'] = null;
    
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
            this['farmerkyc_rowid'] = data.getElementsByTagName("farmerkyc_rowid")[0].lastChild.nodeValue;
            
            this['proof_type'] = (data.getElementsByTagName("proof_type")[0].lastChild != null) ? data.getElementsByTagName("proof_type")[0].lastChild.nodeValue : "";
            
            this['proof_type_desc'] = (data.getElementsByTagName("proof_type_desc")[0].lastChild != null) ? data.getElementsByTagName("proof_type_desc")[0].lastChild.nodeValue : "";
            
            this['proof_doc'] = (data.getElementsByTagName("proof_doc")[0].lastChild != null) ? data.getElementsByTagName("proof_doc")[0].lastChild.nodeValue : "";
            
            this['proof_doc_desc'] = (data.getElementsByTagName("proof_doc_desc")[0].lastChild != null) ? data.getElementsByTagName("proof_doc_desc")[0].lastChild.nodeValue : "";
            
            this['proof_doc_no'] = (data.getElementsByTagName("proof_doc_no")[0].lastChild != null) ? data.getElementsByTagName("proof_doc_no")[0].lastChild.nodeValue : "";
            
            this['proof_doc_adharno'] = (data.getElementsByTagName("proof_doc_adharno")[0].lastChild != null) ? data.getElementsByTagName("proof_doc_adharno")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("proof_valid_till")[0].attributes.length == 0) //Check NULL value
                this['proof_valid_till'] = (data.getElementsByTagName("proof_valid_till")[0].lastChild != null) ? data.getElementsByTagName("proof_valid_till")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmerkyc_rowid'] = data['farmerkyc_rowid'];
            
            this['proof_type'] = data['proof_type'];
            
            this['proof_type_desc'] = data['proof_type_desc'];
            
            this['proof_doc'] = data['proof_doc'];
            
            this['proof_doc_desc'] = data['proof_doc_desc'];
            
            this['proof_doc_no'] = data['proof_doc_no'];
            
            this['proof_doc_adharno'] = data['proof_doc_adharno'];
            
            this['proof_valid_till'] = data['proof_valid_till'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveFarmerRegResponseBank(data)
{
    /**
     * @member {Int32} farmerbank_rowid
     */
    this['farmerbank_rowid'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_acc_type_desc
     */
    this['bank_acc_type_desc'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_desc
     */
    this['bank_desc'] = null;
    
    /**
     * @member {String} branch_code
     */
    this['branch_code'] = null;
    
    /**
     * @member {String} branch_desc
     */
    this['branch_desc'] = null;
    
    /**
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} dflt_dr_acc
     */
    this['dflt_dr_acc'] = null;
    
    /**
     * @member {String} dflt_dr_acc_desc
     */
    this['dflt_dr_acc_desc'] = null;
    
    /**
     * @member {String} dflt_cr_acc
     */
    this['dflt_cr_acc'] = null;
    
    /**
     * @member {String} dflt_cr_acc_desc
     */
    this['dflt_cr_acc_desc'] = null;
    
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
            this['farmerbank_rowid'] = data.getElementsByTagName("farmerbank_rowid")[0].lastChild.nodeValue;
            
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['bank_desc'] = (data.getElementsByTagName("bank_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_desc")[0].lastChild.nodeValue : "";
            
            this['branch_code'] = (data.getElementsByTagName("branch_code")[0].lastChild != null) ? data.getElementsByTagName("branch_code")[0].lastChild.nodeValue : "";
            
            this['branch_desc'] = (data.getElementsByTagName("branch_desc")[0].lastChild != null) ? data.getElementsByTagName("branch_desc")[0].lastChild.nodeValue : "";
            
            this['ifsc_code'] = (data.getElementsByTagName("ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("ifsc_code")[0].lastChild.nodeValue : "";
            
            this['dflt_dr_acc'] = (data.getElementsByTagName("dflt_dr_acc")[0].lastChild != null) ? data.getElementsByTagName("dflt_dr_acc")[0].lastChild.nodeValue : "";
            
            this['dflt_dr_acc_desc'] = (data.getElementsByTagName("dflt_dr_acc_desc")[0].lastChild != null) ? data.getElementsByTagName("dflt_dr_acc_desc")[0].lastChild.nodeValue : "";
            
            this['dflt_cr_acc'] = (data.getElementsByTagName("dflt_cr_acc")[0].lastChild != null) ? data.getElementsByTagName("dflt_cr_acc")[0].lastChild.nodeValue : "";
            
            this['dflt_cr_acc_desc'] = (data.getElementsByTagName("dflt_cr_acc_desc")[0].lastChild != null) ? data.getElementsByTagName("dflt_cr_acc_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmerbank_rowid'] = data['farmerbank_rowid'];
            
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_code'] = data['bank_code'];
            
            this['bank_desc'] = data['bank_desc'];
            
            this['branch_code'] = data['branch_code'];
            
            this['branch_desc'] = data['branch_desc'];
            
            this['ifsc_code'] = data['ifsc_code'];
            
            this['dflt_dr_acc'] = data['dflt_dr_acc'];
            
            this['dflt_dr_acc_desc'] = data['dflt_dr_acc_desc'];
            
            this['dflt_cr_acc'] = data['dflt_cr_acc'];
            
            this['dflt_cr_acc_desc'] = data['dflt_cr_acc_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

