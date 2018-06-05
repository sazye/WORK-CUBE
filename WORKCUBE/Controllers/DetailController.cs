using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WORKCUBE.Controllers
{
    public class DetailController : Controller
    {
        // GET: Detail
        [Route("Detail/index")]
        public ActionResult Detay()
        {
            return View();
        }
    }
}