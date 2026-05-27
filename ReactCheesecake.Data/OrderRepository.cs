using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCheesecake.Data
{
    public class OrderRepository
    {
        private string _connectionString;
        public OrderRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Order> GetAll()
        {
            using var context = new ReactCheesecakeBackendDataContext(_connectionString);
            return context.Orders.ToList();
        }

        public Order Get(int id)
        {
            using var context = new ReactCheesecakeBackendDataContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }

        public void Add(Order order)
        {
            using var context = new ReactCheesecakeBackendDataContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }
    }
}

