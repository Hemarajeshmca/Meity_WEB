using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class ICDGenerationController : Controller
    {
        // GET: ICDGeneration
        public ActionResult ICDGenerationList()
        {
            return View();
        }
        public ActionResult ICDGenerationForm()
        {
            return View();
        }
    }
}