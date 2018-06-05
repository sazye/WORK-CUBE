using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WORKCUBE.Models;


namespace WORKCUBE.Controllers
{
    public class LoginController : Controller
    {
        // GET: login
        public ActionResult login()
        {
            return View();
        }
        public ActionResult Logout()
        {
            Session.Clear();
            Session.Abandon();

            return RedirectToAction("login", "Login");
        }

        [HttpPost]
        public ActionResult Auterize(WORKCUBE.Models.Login userModel)
        {
            using (WorkcubeDBEntities2 db = new WorkcubeDBEntities2())
            {


                var userDetail = (from i in db.Login                                
                                  where i.username == userModel.username &&
                                  i.password == userModel.password
                                  select new
                                  {
                                      i.username,
                                      i.password,
                                      i.id,                                    
                                  }).FirstOrDefault();

                if (userDetail == null)
                {
                    return RedirectToAction("login", "Login");
                }
                else
                {
                   
                    Session["id"] = userDetail.id;
                    ViewBag.Success = true;
                    return RedirectToAction("Index", "Category");
                }
            }

        }

    }
}