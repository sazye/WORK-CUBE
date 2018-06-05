using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using WORKCUBE.Models;

namespace WORKCUBE.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        WorkcubeDBEntities2 dcx = new WorkcubeDBEntities2();
        public ActionResult Anasayfa()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Anasayfa(IletisimModel model)
        {
            if (ModelState.IsValid)
            {
                var body = new StringBuilder();
                body.AppendLine("İSİM:    " + model.NickName);
                body.AppendLine("SOYİSİM: " + model.SurName);
                body.AppendLine("TELEFON: " + model.Phone);
                body.AppendLine("EPOSTA:  " + model.Email);
                body.AppendLine("KONU:    " + model.Message);
                Gmail.SendMail(body.ToString());
                ViewBag.Success = true;
            }
            return View();
        }
      
    }
}