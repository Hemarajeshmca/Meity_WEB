using System;
using System.Collections.Generic;
using System.Data;
using System.Web;
//using System.Web.UI;
//using System.Web.UI.WebControls;
using System.Xml;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public partial class MasterDefinition_APIClient
{
    #region API (retrievemastercode_list) INVOCATION 
    /// <summary>
    /// Function to execute API, this 
    /// <para>- receives input data for the API, in the form of objects</para>
    /// <para>- marshalls object values into API request</para>
    /// <para>- executes REST API at a specified url</para>
    /// <para>- binds API response values into designated output parameter objects</para>
    /// <para>
    /// <b>Note:</b>
    /// <para>
    ///     Function takes generic objects as input and output parameters. For binding API input/output data from/to the objects,
    ///     the function makes an assumption that the objects would contain properties whose names match the service signature elements,
    ///     viz., segments and data items; function throws exception for null object parameters and returns non-fatal warning messages,
    ///     if the parameter objects are not distinct i.e., the same objects are sent as values for more than one parameter
    /// </para>
    /// </para>
    /// </summary>
    /// <exception cref="System.Exception"></exception>

    /*
     * Resource: Master
     * Description: Retrieve  all the Master code Details
     * Http verb: GET
     * Request format: NOT APPLICABLE
     * Response format: JSON
     * Requires authorization: No
     */
    public List<string> invokeAPI_Master_retrievemastercode_list(dynamic contextrequest, dynamic Headerrequest, ref dynamic Detailresponse)
    {
        object responseJson = new object();
        List<string> messageCollection;
        try
        {
            if (contextrequest == null)
            {
                contextrequest = WebAPIProxy.getContext();
            }
            messageCollection = WebAPIProxy.validateParameters(Headerrequest, Detailresponse);
            
            dynamic param_localeid = null;
            dynamic param_locnid = null;
            dynamic param_orgnid = null;
            dynamic param_parent_code = null;
            dynamic param_userid = null;
            if(contextrequest != null && contextrequest.GetType().GetProperty("orgnId") != null)
                param_orgnid = contextrequest.orgnId.ToString(); // Unicode string(100)
            if(contextrequest != null && contextrequest.GetType().GetProperty("locnId") != null)
                param_locnid = contextrequest.locnId.ToString(); // Unicode string(100)
            if(contextrequest != null && contextrequest.GetType().GetProperty("userId") != null)
                param_userid = contextrequest.userId.ToString(); // Unicode string(128)
            if(contextrequest != null && contextrequest.GetType().GetProperty("localeId") != null)
                param_localeid = contextrequest.localeId.ToString(); // Unicode string(100)
            param_parent_code = Headerrequest.parent_code.ToString(); // Unicode string(50)
            
            string requestDataFormat = null;
            string responseDataFormat = "application/json";
            
            string targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/allmasterlist?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&parent_code=" + param_parent_code + "";
            
            //Here responseJson contains API response JSON string given by the targetURL
            responseJson = WebAPIProxy.invokeAPI("GET", targetURL, null, requestDataFormat, responseDataFormat, null);
            dynamic response = JObject.Parse(JsonConvert.DeserializeObject(responseJson.ToString()).ToString());
            
            if(response.ApplicationException == null)
            {
                try {
                    processAPIResponse_Master_retrievemastercode_list(response, ref Detailresponse);
                }
                catch (Exception exception) {
                    Master_retrievemastercode_listhandleException("Error encountered while processing API response. " + exception.Message);
                }
            }
            else
            {
                //Output contains error
                string errorNumber = "", errorDescription = "";
                errorNumber = response.ApplicationException.errorNumber;
                errorDescription = response.ApplicationException.errorDescription;
                if (errorNumber != "")
                    errorNumber += ": ";
                Master_retrievemastercode_listhandleException(errorNumber + errorDescription);
            }
        }
        catch (Exception exception)
        {
            throw exception;
        }
        return messageCollection;
    }
    
    protected void Master_retrievemastercode_listhandleException(string expMessage)
    {
        throw new Exception(expMessage);
    }
    #endregion
    
    #region PROCESSING API (retrievemastercode_list) RESPONSE 
    //Code for processing response data from the API 'retrievemastercode_list'
    private void processAPIResponse_Master_retrievemastercode_list(dynamic responseJSON, ref dynamic Detailresponse)
    {
        var outcontext = responseJSON.context;
        
        #region PROCESSING 'Detail' 
        var outDetail = outcontext.Detail;
        if(outDetail != null && outDetail.Count > 0)
        {
            Detailresponse = Activator.CreateInstance(Detailresponse.GetType(), new object[] { outDetail.Count });
            if(Detailresponse.GetType().IsArray)
            {
                for(int DetailChildi = 0; DetailChildi < outDetail.Count; DetailChildi++)
                {
                    dynamic Detail_arrayinst = Detailresponse[DetailChildi];
                    Detail_arrayinst = Activator.CreateInstance(Detailresponse.GetType().GetElementType());
                    Detail_arrayinst.master_rowid = Convert.ToInt32(outDetail[DetailChildi].master_rowid.Value);    // master_rowid
                    Detail_arrayinst.parent_code = outDetail[DetailChildi].parent_code.ToString();    // parent_code
                    Detail_arrayinst.parent_descripton = outDetail[DetailChildi].parent_descripton.ToString();    // parent_descripton
                    Detail_arrayinst.master_code = outDetail[DetailChildi].master_code.ToString();    // master_code
                    Detail_arrayinst.master_description = outDetail[DetailChildi].master_description.ToString();    // master_description
                    Detail_arrayinst.master_ll_description = outDetail[DetailChildi].master_ll_description.ToString();    // master_ll_description
                    Detail_arrayinst.depend_desc = outDetail[DetailChildi].depend_desc.ToString();    // depend_desc
                    Detail_arrayinst.status_desc = outDetail[DetailChildi].status_desc.ToString();    // status_desc
                    Detailresponse[DetailChildi] = Detail_arrayinst;
                }
            }
        }
        #endregion
    }
    #endregion
}
