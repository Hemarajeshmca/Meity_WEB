using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class BonusPaymentAdviceController : Controller
    {
        // GET: BonusPaymentAdvice
        public ActionResult BonusPaymentAdvice()
        {
            return View();
        }
        public ActionResult BonusPaymentAdviceForm()
        {
            return View();
        }
    }
}