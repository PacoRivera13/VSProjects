using CODE.Framework.Wpf.Mvvm;
using Project.Client.Wpf.Models.Home;

namespace Project.Client.Wpf.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Start()
        {
            return Shell(new StartViewModel(), "Business Application");
        }
    }
}
