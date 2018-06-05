using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

namespace WORKCUBE.Models
{
    public static class Gmail
    {

        public static void SendMail(string body)
        {
            var fromAddress = new MailAddress("gonderen@outlook.com", "İLETİŞİM"); //mail değişecek

            var toAddress = new MailAddress("alici@outlook.com"); //mail değişecek
            const string subject = "İLETİŞİM";
            using (var smtp = new SmtpClient
            {
                Host = "smtp-mail.outlook.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, "sifre")

                // e-posta adresinin şifresi , denemek için uygun mail ve şifresi ile değiştirebilirsiniz 
            })
           
            {
                using (var message = new MailMessage(fromAddress, toAddress) { Subject = subject, Body = body })
                {
                    smtp.Send(message);
                }
            }
        }
    }
}