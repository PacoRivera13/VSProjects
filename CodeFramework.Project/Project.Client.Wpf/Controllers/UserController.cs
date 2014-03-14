using CODE.Framework.Wpf.Mvvm;
using Project.Client.Wpf.Models.User;

namespace Project.Client.Wpf.Controllers
{
    public class UserController : Controller
    {
        public ActionResult Login()
        {
            return ViewModal(new LoginViewModel(), ViewLevel.Popup);
        }
    }
}
