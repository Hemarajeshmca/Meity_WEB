using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class EquipmentDetailsController : Controller
    {
        // GET: EquipmentDetails
        public ActionResult EquipmentDetailsList()
        {
            return View();
        }
        public ActionResult EquipmentDetailsForm()
        {
            return View();
        }
    }
}