//using CCA.Util;
using FFI.ViewModel;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class PaymentUpdationController : Controller
    {
        string AccessCode = ConfigurationManager.AppSettings["CcAvenueAccessCode"];
        string CheckoutUrl = ConfigurationManager.AppSettings["CcAvenueCheckoutUrl"];
        string WorkingKey = ConfigurationManager.AppSettings["CcAvenueWorkingKey"];
        string MerchantId = ConfigurationManager.AppSettings["CcAvenueMerchantId"];

        // GET: PaymentUpdation
        public ActionResult PaymentUpdationlist()
        {
            return View();
        }
        public ActionResult PaymentUpdationform()
        {
            return View();
        }
        public ActionResult CcPayment()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CcPayment(string booking_no, string payment_amount, string customer_name, string billing_address, string billing_city, string billing_state, string billing_zip, string billing_country, string billing_tel, string billing_email)
        {
            //var bkngno = "00089";
            //var queryParameter = new CCACrypto();

            //CCACrypto is the dll you get when you download the ASP.NET 3.5 integration kit from //ccavenue account.

            return View();
          //      "CcAvenuePayment", new CcAvenueViewModel(queryParameter.Encrypt
          //(BuildCcAvenueRequestParameters(booking_no, payment_amount, customer_name, billing_address, billing_city, billing_state, billing_zip, billing_country, billing_tel, billing_email), WorkingKey), AccessCode, CheckoutUrl));
        }

        private string BuildCcAvenueRequestParameters(string invoiceNumber, string amount, string customername, string billingaddress, string billingcity, string billingstate, string billingzip, string billingcountry, string billingtel, string billingemail)
        {

            var queryParameters = new Dictionary<string, string>
             {
             {"order_id", invoiceNumber},
             {"merchant_id", MerchantId},
             {"amount", amount},
             {"currency","INR" },
             //132
             //{"redirect_url","http://169.38.82.132/PaymentUpdation/PaymentSuccessful" },
             //{"cancel_url","http://169.38.82.132/PaymentUpdation/PaymentCancelled"},
             //131
               {"redirect_url","http://169.38.82.131:90/PaymentUpdation/PaymentSuccessful" },
             {"cancel_url","http://169.38.82.131:90/PaymentUpdation/PaymentCancelled"},
             {"billing_name", customername},
             {"billing_address", billingaddress},
             {"billing_city", billingcity},
             {"billing_state",billingstate},
             {"billing_zip",billingzip},
             {"billing_country",billingcountry},
             {"billing_tel",billingtel},
             {"billing_email",billingemail},
             {"request_type","JSON" },
             {"response_type","JSON" },
             {"version","1.1" }
        }.Select(item => string.Format("{0}={1}", item.Key, item.Value));
            return string.Join("&", queryParameters);
        }

        [HttpPost]
        public ActionResult PaymentSuccessful(string encResp)
        {
            ////var decryption = new CCACrypto();
            //var decryptedParameters = decryption.Decrypt(encResp, WorkingKey);

            //var keyValuePairs = decryptedParameters.Split('&');
            var splittedKeyValuePairs = new Dictionary<string, string>();

            //foreach (var value in keyValuePairs)
            //{
            //    var keyValuePair = value.Split('=');
            //    splittedKeyValuePairs.Add(keyValuePair[0], keyValuePair[1]);
            //}

            //Here you can check the consistency of data i.e what you send is what you get back,
            //Make sure its not corrupted....
            //After that Save the details of the transaction into a db if you want to...
            //I am just returning the data I got back...

            return View(splittedKeyValuePairs);
        }

        [HttpPost]
        public ActionResult PaymentCancelled()
        {
            return View();
        }
    }
}