using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class FLNotificationController : Controller
    {
        // GET: FLNotification
        public ActionResult NotificationList()
        {
            return View();
        }
    }
}