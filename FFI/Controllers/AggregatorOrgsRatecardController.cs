using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class AggregatorOrgsRatecardController : Controller
    {
        // GET: AggregatorOrgsRatecard
        public ActionResult AggregatorOrgsRatecardList()
        {
            return View();
        }
        public ActionResult AggregatorOrgRatecardForm()
        {
            return View();
        }
      
    }
}