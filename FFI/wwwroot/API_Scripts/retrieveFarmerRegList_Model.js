var responseDataFormat = "JSON";

function retrieveFarmerRegListRequest(data)
{
    /**
     * @member {retrieveFarmerRegListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFarmerRegListRequestcontext(data['context']);
    }
}

function retrieveFarmerRegListRequestcontext(data)
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
     * @member {retrieveFarmerRegListRequestFilter} Filter
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
            this['Filter'] = new retrieveFarmerRegListRequestFilter(data['Filter']);
    }
}

function retrieveFarmerRegListRequestFilter(data)
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
    
    /**
     * @member {Int16} from_index
     */
    this['from_index'] = null;
    
    /**
     * @member {Int16} to_index
     */
    this['to_index'] = null;
    
    /**
     * @member {Int16} record_count
     */
    this['record_count'] = null;
    
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
        
        if(data.hasOwnProperty('from_index'))
            this['from_index'] = data['from_index'];
        
        if(data.hasOwnProperty('to_index'))
            this['to_index'] = data['to_index'];
        
        if(data.hasOwnProperty('record_count'))
            this['record_count'] = data['record_count'];
        
    }
}

function retrieveFarmerRegListResponse(data, format)
{
    /**
     * @member {retrieveFarmerRegListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFarmerRegListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFarmerRegListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFarmerRegListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFarmerRegListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFarmerRegListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFarmerRegListResponseApplicationException(data)
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

function retrieveFarmerRegListResponsecontext(data)
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
     * @member {retrieveFarmerRegListResponseFilter} Filter
     */
    this['Filter'] = null;
    
    /**
     * @member {retrieveFarmerRegListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Filter'] = new retrieveFarmerRegListResponseFilter(data.getElementsByTagName("Filter")[0]);
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new retrieveFarmerRegListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Filter'] = new retrieveFarmerRegListResponseFilter(data['Filter']);
            
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new retrieveFarmerRegListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveFarmerRegListResponseFilter(data)
{
    /**
     * @member {Int16} record_count
     */
    this['record_count'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("record_count")[0].attributes.length == 0) //Check NULL value
                this['record_count'] = data.getElementsByTagName("record_count")[0].lastChild.nodeValue;
        }
        else {
            this['record_count'] = data['record_count'];
        }
    }
}

function retrieveFarmerRegListResponseList(data)
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
     * @member {String} farmer_state
     */
    this['farmer_state'] = null;
    
    /**
     * @member {String} farmer_state_desc
     */
    this['farmer_state_desc'] = null;
    
    /**
     * @member {String} farmer_dist
     */
    this['farmer_dist'] = null;
    
    /**
     * @member {String} farmer_dist_desc
     */
    this['farmer_dist_desc'] = null;
    
    /**
     * @member {String} farmer_taluk
     */
    this['farmer_taluk'] = null;
    
    /**
     * @member {String} farmer_taluk_desc
     */
    this['farmer_taluk_desc'] = null;
    
    /**
     * @member {String} farmer_panchayat
     */
    this['farmer_panchayat'] = null;
    
    /**
     * @member {String} farmer_panchayat_desc
     */
    this['farmer_panchayat_desc'] = null;
    
    /**
     * @member {String} farmer_village
     */
    this['farmer_village'] = null;
    
    /**
     * @member {String} farmer_village_desc
     */
    this['farmer_village_desc'] = null;
    
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
            
            if(data.getElementsByTagName("fhw_name")[0].attributes.length == 0) //Check NULL value
                this['fhw_name'] = (data.getElementsByTagName("fhw_name")[0].lastChild != null) ? data.getElementsByTagName("fhw_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_dob")[0].attributes.length == 0) //Check NULL value
                this['farmer_dob'] = (data.getElementsByTagName("farmer_dob")[0].lastChild != null) ? data.getElementsByTagName("farmer_dob")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_addr1")[0].attributes.length == 0) //Check NULL value
                this['farmer_addr1'] = (data.getElementsByTagName("farmer_addr1")[0].lastChild != null) ? data.getElementsByTagName("farmer_addr1")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_addr2")[0].attributes.length == 0) //Check NULL value
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
            
            if(data.getElementsByTagName("farmer_country")[0].attributes.length == 0) //Check NULL value
                this['farmer_country'] = (data.getElementsByTagName("farmer_country")[0].lastChild != null) ? data.getElementsByTagName("farmer_country")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_country_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_country_desc'] = (data.getElementsByTagName("farmer_country_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_country_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_state")[0].attributes.length == 0) //Check NULL value
                this['farmer_state'] = (data.getElementsByTagName("farmer_state")[0].lastChild != null) ? data.getElementsByTagName("farmer_state")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_state_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_state_desc'] = (data.getElementsByTagName("farmer_state_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_state_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_dist")[0].attributes.length == 0) //Check NULL value
                this['farmer_dist'] = (data.getElementsByTagName("farmer_dist")[0].lastChild != null) ? data.getElementsByTagName("farmer_dist")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_dist_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_dist_desc'] = (data.getElementsByTagName("farmer_dist_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_dist_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_taluk")[0].attributes.length == 0) //Check NULL value
                this['farmer_taluk'] = (data.getElementsByTagName("farmer_taluk")[0].lastChild != null) ? data.getElementsByTagName("farmer_taluk")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_taluk_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_taluk_desc'] = (data.getElementsByTagName("farmer_taluk_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_taluk_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_panchayat")[0].attributes.length == 0) //Check NULL value
                this['farmer_panchayat'] = (data.getElementsByTagName("farmer_panchayat")[0].lastChild != null) ? data.getElementsByTagName("farmer_panchayat")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_panchayat_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_panchayat_desc'] = (data.getElementsByTagName("farmer_panchayat_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_panchayat_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_village")[0].attributes.length == 0) //Check NULL value
                this['farmer_village'] = (data.getElementsByTagName("farmer_village")[0].lastChild != null) ? data.getElementsByTagName("farmer_village")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_village_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_village_desc'] = (data.getElementsByTagName("farmer_village_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_village_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_pincode")[0].attributes.length == 0) //Check NULL value
                this['farmer_pincode'] = (data.getElementsByTagName("farmer_pincode")[0].lastChild != null) ? data.getElementsByTagName("farmer_pincode")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_pincode_desc")[0].attributes.length == 0) //Check NULL value
                this['farmer_pincode_desc'] = (data.getElementsByTagName("farmer_pincode_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_pincode_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("marital_status")[0].attributes.length == 0) //Check NULL value
                this['marital_status'] = (data.getElementsByTagName("marital_status")[0].lastChild != null) ? data.getElementsByTagName("marital_status")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("marital_status_desc")[0].attributes.length == 0) //Check NULL value
                this['marital_status_desc'] = (data.getElementsByTagName("marital_status_desc")[0].lastChild != null) ? data.getElementsByTagName("marital_status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("gender_flag")[0].attributes.length == 0) //Check NULL value
                this['gender_flag'] = (data.getElementsByTagName("gender_flag")[0].lastChild != null) ? data.getElementsByTagName("gender_flag")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("gender_flag_desc")[0].attributes.length == 0) //Check NULL value
                this['gender_flag_desc'] = (data.getElementsByTagName("gender_flag_desc")[0].lastChild != null) ? data.getElementsByTagName("gender_flag_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("reg_mobile_no")[0].attributes.length == 0) //Check NULL value
                this['reg_mobile_no'] = (data.getElementsByTagName("reg_mobile_no")[0].lastChild != null) ? data.getElementsByTagName("reg_mobile_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("reg_note")[0].attributes.length == 0) //Check NULL value
                this['reg_note'] = (data.getElementsByTagName("reg_note")[0].lastChild != null) ? data.getElementsByTagName("reg_note")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("row_timestamp")[0].attributes.length == 0) //Check NULL value
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
            
            this['farmer_state'] = data['farmer_state'];
            
            this['farmer_state_desc'] = data['farmer_state_desc'];
            
            this['farmer_dist'] = data['farmer_dist'];
            
            this['farmer_dist_desc'] = data['farmer_dist_desc'];
            
            this['farmer_taluk'] = data['farmer_taluk'];
            
            this['farmer_taluk_desc'] = data['farmer_taluk_desc'];
            
            this['farmer_panchayat'] = data['farmer_panchayat'];
            
            this['farmer_panchayat_desc'] = data['farmer_panchayat_desc'];
            
            this['farmer_village'] = data['farmer_village'];
            
            this['farmer_village_desc'] = data['farmer_village_desc'];
            
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
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

