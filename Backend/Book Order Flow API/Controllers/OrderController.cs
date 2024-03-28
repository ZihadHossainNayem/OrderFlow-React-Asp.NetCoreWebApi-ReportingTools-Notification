using Book_Order_Flow_API.Models;
using Book_Order_Flow_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Book_Order_Flow_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly BookDbContext _context;

        private readonly IKafkaProducerService _kafkaProducerService;

        public OrderController(BookDbContext context, IKafkaProducerService kafkaProducerService)
        {
            _context = context;
            _kafkaProducerService = kafkaProducerService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            if (_context.Orders == null)
            {
                return NotFound("Orders not found.");
            }

            var orders = await _context.Orders.ToListAsync();

            return orders;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }


        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Serialize the order to JSON and send it to a Kafka topic
            var orderJson = JsonConvert.SerializeObject(order);
            Console.WriteLine($"Sending message to Kafka: {orderJson}");
            await _kafkaProducerService.ProduceAsync("orders", orderJson); // Use the service
            Console.WriteLine("Message sent successfully");

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }

       

    }
}
