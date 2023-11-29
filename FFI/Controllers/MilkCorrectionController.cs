using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class MilkCorrectionController : Controller
    {
        // GET: MilkCorrection
        public ActionResult MilkCorrectionList()
        {
            return View();
        }
        public ActionResult MilkCorrectionForm()
        {
            return View();
        }
    }
}