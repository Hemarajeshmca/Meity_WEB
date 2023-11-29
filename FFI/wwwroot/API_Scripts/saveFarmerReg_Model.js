var responseDataFormat = "JSON";

function saveFarmerRegRequest(data)
{
    /**
     * @member {saveFarmerRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFarmerRegRequestcontext(data['context']);
    }
}

function saveFarmerRegRequestcontext(data)
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
     * @member {saveFarmerRegRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFarmerRegRequestKYC} KYC
     */
    this['KYC'] = null;
    
    /**
     * @member {saveFarmerRegRequestBank} Bank
     */
    this['Bank'] = null;
    
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
            this['Header'] = new saveFarmerRegRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('KYC') && data['KYC'] != null)
        {
            KYC = [];
            for(KYCindex = 0; KYCindex < data['KYC'].length; KYCindex++)
            {
                KYC.push(new saveFarmerRegRequestKYC(data['KYC'][KYCindex]));
            }
            this['KYC'] = KYC;
        }
        
        if(data.hasOwnProperty('Bank') && data['Bank'] != null)
        {
            Bank = [];
            for(Bankindex = 0; Bankindex < data['Bank'].length; Bankindex++)
            {
                Bank.push(new saveFarmerRegRequestBank(data['Bank'][Bankindex]));
            }
            this['Bank'] = Bank;
        }
    }
}

function saveFarmerRegRequestHeader(data)
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

function saveFarmerRegRequestKYC(data)
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
     * @member {String} proof_doc
     */
    this['proof_doc'] = null;
    
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
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('farmerkyc_rowid'))
            this['farmerkyc_rowid'] = data['farmerkyc_rowid'];
        
        if(data.hasOwnProperty('proof_type'))
            this['proof_type'] = data['proof_type'];
        
        if(data.hasOwnProperty('proof_doc'))
            this['proof_doc'] = data['proof_doc'];
        
        if(data.hasOwnProperty('proof_doc_no'))
            this['proof_doc_no'] = data['proof_doc_no'];
        
        if(data.hasOwnProperty('proof_doc_adharno'))
            this['proof_doc_adharno'] = data['proof_doc_adharno'];
        
        if(data.hasOwnProperty('proof_valid_till'))
            this['proof_valid_till'] = data['proof_valid_till'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFarmerRegRequestBank(data)
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
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} branch_code
     */
    this['branch_code'] = null;
    
    /**
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} dflt_dr_acc
     */
    this['dflt_dr_acc'] = null;
    
    /**
     * @member {String} dflt_cr_acc
     */
    this['dflt_cr_acc'] = null;
    
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
        if(data.hasOwnProperty('farmerbank_rowid'))
            this['farmerbank_rowid'] = data['farmerbank_rowid'];
        
        if(data.hasOwnProperty('bank_acc_no'))
            this['bank_acc_no'] = data['bank_acc_no'];
        
        if(data.hasOwnProperty('bank_acc_type'))
            this['bank_acc_type'] = data['bank_acc_type'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('branch_code'))
            this['branch_code'] = data['branch_code'];
        
        if(data.hasOwnProperty('ifsc_code'))
            this['ifsc_code'] = data['ifsc_code'];
        
        if(data.hasOwnProperty('dflt_dr_acc'))
            this['dflt_dr_acc'] = data['dflt_dr_acc'];
        
        if(data.hasOwnProperty('dflt_cr_acc'))
            this['dflt_cr_acc'] = data['dflt_cr_acc'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFarmerRegResponse(data, format)
{
    /**
     * @member {saveFarmerRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFarmerRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFarmerRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFarmerRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFarmerRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFarmerRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFarmerRegResponseApplicationException(data)
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

function saveFarmerRegResponsecontext(data)
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
     * @member {saveFarmerRegResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFarmerRegResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFarmerRegResponseHeader(data['Header']);
        }
    }
}

function saveFarmerRegResponseHeader(data)
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
            this['farmer_rowid'] = data.getElementsByTagName("farmer_rowid")[0].lastChild.nodeValue;
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['version_no'] = data.getElementsByTagName("version_no")[0].lastChild.nodeValue;
        }
        else {
            this['farmer_rowid'] = data['farmer_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['version_no'] = data['version_no'];
        }
    }
}

