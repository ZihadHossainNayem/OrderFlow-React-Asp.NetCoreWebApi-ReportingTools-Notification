namespace Book_Order_Flow_API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string Address { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
    }
}
