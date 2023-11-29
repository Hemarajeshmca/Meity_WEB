using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class EmployeeController : Controller
    {
        //
        // GET: /Employee/
        public ActionResult Employee()
        {
            return View();
        }
        public ActionResult Employee_Form()
        {
            return View();
        }
	}
}