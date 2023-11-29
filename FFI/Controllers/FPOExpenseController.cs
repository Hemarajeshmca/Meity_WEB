using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class FPOExpenseController : Controller
    {
        // GET: FPOExpense
        public ActionResult FPOExpenseList()
        {
            return View();
        }
        public ActionResult FPOExpenseForm()
        {
            return View();
        }
        public ActionResult FPOExpenseReport()
        {
            return View();
        }
    }
}