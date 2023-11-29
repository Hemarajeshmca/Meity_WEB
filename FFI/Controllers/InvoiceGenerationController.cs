using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class InvoiceGenerationController : Controller
    {
        // GET: InvoiceGeneration
        public ActionResult InvoiceGenerationList()
        {
            return View();
        }
        public ActionResult InvoiceGenerationForm()
        {
            return View();
        }
    }
}