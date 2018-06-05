using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WORKCUBE.Models;

namespace WORKCUBE.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Category
        WorkcubeDBEntities2 dcx = new WorkcubeDBEntities2();
        public ActionResult Index()
        {
            var id = Convert.ToInt32(Session["id"]);
            if (id != 1)
            {
                return RedirectToAction("login", "Login");
            }

            var Query = (from i in dcx.Project
                         select new
                         {
                             i.kategoriID,
                             i.city,
                             i.picture,
                             i.kategoriName,
                             i.location,
                             i.prices
                         }).ToList();
            var returner = Query.Select(x => new Project
            {
                kategoriID = Convert.ToInt32(x.kategoriID),
                picture = x.picture,
                city = x.city,
                kategoriName = x.kategoriName,
                location = x.location,
                prices = x.prices
            }).ToList();
            return View(returner);
        }

        public ActionResult Kategori()
        {
            var Query = (from i in dcx.Project
                         select new
                         {
                             i.kategoriID,
                             i.city,
                             i.picture,
                             i.kategoriName,
                             i.location,
                             i.prices
                         }).ToList();

            var returner = Query.Select(x => new Project
            {
                kategoriID = Convert.ToInt32(x.kategoriID),
                picture = x.picture,
                city = x.city,
                kategoriName = x.kategoriName,
                location = x.location,
                prices = x.prices
            }).ToList();
            return View(returner);
        }

        public ActionResult projects()
        {
            return View();
        }

        public ActionResult Create()
        {
            var id = Convert.ToInt32(Session["id"]);
            if (id != 1)
            {
                return RedirectToAction("login", "Login");
            }
            ViewBag.kategoriID = new SelectList(dcx.Project, "kategoriID", "kategoriName");
            return View();
        }

        [HttpPost]
        public ActionResult Create(Project proje, FormCollection form, HttpPostedFileBase picture)
        {
            try
            {
                if (picture != null)
                {
                    var uzanti = Path.GetExtension(picture.FileName).ToLower();
                    FileInfo file = new FileInfo(picture.FileName);
                    string newfile = proje.kategoriID + proje.kategoriName + uzanti;//Guid.NewGuid().ToString("N") + file.Extension; RASGELE DEĞER ATAR*/
                    picture.SaveAs(Server.MapPath("~/Content/images/" + newfile));
                    proje.picture = newfile;
                }

                proje.kategoriName = form["kategoriName"];
                proje.city = form["city"];
                proje.location = form["location"];
                proje.prices = form["prices"];
                dcx.Project.Add(proje);
                dcx.SaveChanges();
                return RedirectToAction("Index", "Category");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public JsonResult Delete(int? id)
        {
            if (id == null)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
            Project pro = dcx.Project.Find(id);
            if (pro == null)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
            dcx.Project.Remove(pro);
            dcx.SaveChanges();
            return Json(true, JsonRequestBehavior.AllowGet);          
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dcx.Dispose();
            }
            base.Dispose(disposing);
        }


    }
}