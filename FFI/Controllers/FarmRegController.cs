using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class FarmRegController : Controller
    {
        // GET: FarmReg
        public ActionResult FarmRegList()
        {
            return View();
        }
        public ActionResult FarmRegForm()
        {
            return View();
        }
    }
}