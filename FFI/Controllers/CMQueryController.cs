using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class CMQueryController : Controller
    {
        // GET: CMQuery
        public ActionResult CMQueryList()
        {
            return View();
        }

        public ActionResult CMQueryCopy()
        {
            return View();
        }
    }
}