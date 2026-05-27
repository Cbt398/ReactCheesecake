using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCheesecake.Data;

namespace ReactCheesecake.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private string _connectionString;

        public OrderController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getorders")]
        public List<Order> GetOrders()
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpGet]
        [Route("getorder")]
        public Order GetOrder(int id)
        {
            var repo = new OrderRepository(_connectionString);
            return repo.Get(id);
        }

        [HttpPost]
        [Route("addorder")]
        public void AddOrder(Order order)
        {
            var repo = new OrderRepository(_connectionString);
            repo.Add(order);
        }
    }
}
