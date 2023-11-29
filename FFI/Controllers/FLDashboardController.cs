using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class FLDashboardController : Controller
    {
        // GET: FLDashboard
        public ActionResult FLDashboard()
        {
            return View();
        }
        public ActionResult FLDBLease()
        {
            return View();
        }

        public ActionResult FLDBEsp()
        {
            return View();
        }

        public ActionResult FLDBEquipment()
        {
            return View();
        }
    }
}