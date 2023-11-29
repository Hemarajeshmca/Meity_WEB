using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class MilkCollectionController : Controller
    {
        // GET: MilkCollection
        public ActionResult MilkCollectionForm()
        {
            return View();
        }
        public ActionResult MilkCollectionList()
        {
            return View();
        }
    }
}