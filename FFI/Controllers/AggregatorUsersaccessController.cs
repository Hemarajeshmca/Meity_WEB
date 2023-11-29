using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class AggregatorUsersaccessController : Controller
    {
        // GET: AggregatorUsersaccess
        public ActionResult AggregatorUsersaccessList()
        {
            return View();
        }
        public ActionResult AggregatorUseraccessForm()
        {
            return View();
        }
        //public ActionResult AggregatorUsersaccessView()
        //{
        //    return View();
        //}
    }
}