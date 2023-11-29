using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class AggregatorLocationsController : Controller
    {
        // GET: AggregatorLocations
        public ActionResult AggregatorLocationsList()
        {
            return View();
        }
        public ActionResult AggregatorLocationsCPForm()
        {
            return View();
        }
        public ActionResult AggregatorLocationsListCC()
        {
            return View();
        }

        public ActionResult AggregatorLocationsCCForm()
        {
            return View();
        }
      

    }
}