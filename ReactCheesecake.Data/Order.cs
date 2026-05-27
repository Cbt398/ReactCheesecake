using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCheesecake.Data
{
    public class Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Base { get; set; }
        public string Toppings { get; set; }
        public string Special { get; set; }
        public int Quantity { get; set; }
        public string DeliveryDate { get; set; }
        public double Total { get; set; }
    }
}
