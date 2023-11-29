using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class FPOSearchController : Controller
    {
        // GET: FPOSearch
        public ActionResult FPOFarmerSearch()
        {
            return View();
        }
        public ActionResult FPOFarmerSearchAdvanced()
        {
            return View();
        }
        public ActionResult print()
        {
            return View();
        }
    }
}