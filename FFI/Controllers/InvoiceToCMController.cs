using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class InvoiceToCMController : Controller
    {
        // GET: InvoiceToCM
        public ActionResult InvoiceToCMList()
        {
            return View();
        }
    }
}