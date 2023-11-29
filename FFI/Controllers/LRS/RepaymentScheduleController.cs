using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers.LRS
{
    public class RepaymentScheduleController : Controller
    {
        // GET: RepaymentSchedule
        public ActionResult RepaymentSchedule()
        {
            return View();
        }
    }
}