using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Configuration;
using System.Xml;
using System.Xml.Linq;
using System.Data;

namespace FFI.Controllers
{
    public class TrackEqupController : Controller
    {
        // GET: TrackEqup
        public ActionResult TrackEqup()
        {
           
            return View();
        }

        public JsonResult gpstrack(String imeino)
        {

            var res = HttpClientRequest<Vehicle>(new HttpClient(), imeino);
            var dd = new Vehicle().latitude;

            if (res == null)
            {
                return Json(data: "This value is empty");
            }
            else
            {
                dd = res.latitude;
                return Json(res);
            }
            
        }

       

        private T HttpClientRequest<T>(HttpClient client,string imeino)
        {
            using (client)
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", "YWRtaW46YWRtaW4=");
                HttpResponseMessage responseMessage = null;
                //string db = string.Format(
                //        "http://54.255.188.44/fleettracking/api/history/json/flexicodeindia/assets/flexicodeindia{0}/{1}",imeino,
                //        DateTime.Now.ToString("yyyy-MM-dd"));
                string db = ConfigurationManager.AppSettings["gpspath"].ToString();
                var request = new HttpRequestMessage(HttpMethod.Get, db);
                DataTable dt_set1 = new DataTable();
                var dtr1 = "";
                var task = client.SendAsync(request)
                 .ContinueWith(responseTask =>
                 {
                     responseMessage = responseTask.Result;
                 });
                Task.WaitAll(task);
                if (responseMessage == null)
                    throw new Exception("No response from server");

                var readStringContent = responseMessage.Content.ReadAsStringAsync();
                if (!responseMessage.IsSuccessStatusCode)
                    CustomException(responseMessage.StatusCode, new Exception(readStringContent.Result));
                var xml = readStringContent.Result;
                string result2 = xml.Replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", "");
                string result3 = result2.Replace("<vehicles>", "");
                string result4 = result3.Replace("</vehicles>", "");
                XDocument doc = new XDocument();
                string obj = "<root>" + result2 + "</root>";
                doc = XDocument.Parse(obj);
                var set1rec = (from set1 in doc.Descendants("vehicles") select set1);
                if (set1rec.Count() > 0)
                {
                    var set2_first = set1rec.Descendants("vehicle").First();
                    foreach (XElement xe in set2_first.Descendants())
                        dt_set1.Columns.Add(xe.Name.ToString(), typeof(string));

                    XElement setup1 = (from set1 in doc.Descendants("vehicles") select set1).First();
                    foreach (XElement xe2 in setup1.Descendants("vehicle"))
                    {
                        DataRow dr = dt_set1.NewRow();
                        int i = 0;
                        foreach (XElement xe in xe2.Descendants())
                        {
                            dr[i] = xe.Value.ToString();
                            i = i + 1;
                        }
                        dt_set1.Rows.Add(dr);
                    }

                }
               
                dtr1 = JsonConvert.SerializeObject(dt_set1);
               var dtr2= dtr1.Replace("[", "");
               var dtr3 = dtr2.Replace("]", "");              
               return JsonConvert.DeserializeObject<T>(dtr3);              
                
            }
        }

        /// <summary>
        /// Custom Exception handled.
        /// </summary>
        /// <param name="statusCode">HttpStatusCode</param>
        /// <param name="exception">Exception</param>
        private void CustomException(HttpStatusCode statusCode, Exception exception)
        {
            switch (statusCode)
            {
                case HttpStatusCode.BadRequest:
                    throw new Exception("Bad parameters sent.", exception);
                case HttpStatusCode.Unauthorized:
                    throw new Exception("Unauthorized. The username/password is not authorized to access the service.", exception);
                case HttpStatusCode.Forbidden:
                    throw new Exception("Forbidden.", exception);
                case HttpStatusCode.NotFound:
                    throw new Exception("Devices specified do not exist.", exception);
                case HttpStatusCode.MethodNotAllowed:
                    throw new Exception("Request Method not expected", exception);
                case HttpStatusCode.InternalServerError:
                    throw new Exception("Internal Server Error.", exception);
            }
        }
    }

    //public class RouteGeometry
    //{
    //    public string direction { get; set; }
    //    public string engine { get; set; }
    //    public string latitude { get; set; }
    //    public string longitude { get; set; }
    //    public string overSpeed { get; set; }
    //    public string speed { get; set; }
    //    public string timeStamp { get; set; }
    //    public string vehicleStatus { get; set; }
    //    public string vin { get; set; }
    //}

    //public class MainRoute
    //{
    //    public List<RouteGeometry> routeGeometry { get; set; }
    //}
    public class Vehicle
{
    public string companyId { get; set; }
    public string currentLocation { get; set; }
    public string eventTimeStamp { get; set; }
    public List<object> geoAlertType { get; set; }
    public List<object> geoLatLng { get; set; }
    public List<object> geoLocation { get; set; }
    public List<object> geozoneTimeStamp { get; set; }
    public List<object> geozoneType { get; set; }
    public string imeiNo { get; set; }
    public string latitude { get; set; }
    public string longitude { get; set; }
    public string odometer { get; set; }
    public string plateNumber { get; set; }
    public string speed { get; set; }
    public string status { get; set; }
    public string vin { get; set; }
}

    public class MainRoute
{
        public List<Vehicle> Vehicle { get; set; }
        //public Vehicle vehicle { get; set; }
}
}