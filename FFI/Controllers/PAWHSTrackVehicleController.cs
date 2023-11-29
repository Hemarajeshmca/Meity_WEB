using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;

namespace FFI.Controllers
{
    public class PAWHSTrackVehicleController : Controller
    {
        // GET: PAWHSTrackVehicle
        public ActionResult trackvehicle()
        {
            return View();
        }

    }
}