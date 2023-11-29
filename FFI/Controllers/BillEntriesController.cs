using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class BillEntriesController : Controller
    {
        // GET: BillEntries
        public ActionResult BillEntriesList()
        {
            return View();
        }
        public ActionResult BillEntrieForm()
        {
            return View();
        }
       
    }
}