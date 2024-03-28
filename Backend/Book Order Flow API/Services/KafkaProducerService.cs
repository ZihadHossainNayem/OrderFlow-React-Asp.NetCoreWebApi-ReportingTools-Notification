using Confluent.Kafka;
using System;
using System.Threading.Tasks;

namespace Book_Order_Flow_API.Services
{
    public class KafkaProducerService : IKafkaProducerService
    {
        private readonly ProducerConfig _config;

        public KafkaProducerService(ProducerConfig config)
        {
            _config = config;
        }

        public async Task ProduceAsync(string topic, string message)
        {
            using (var producer = new ProducerBuilder<Null, string>(_config).Build())
            {
                try
                {
                    // Attempt to produce the message to the specified topic
                    var deliveryResult = await producer.ProduceAsync(topic, new Message<Null, string> { Value = message });

                    Console.WriteLine($"Message delivered to {deliveryResult.TopicPartitionOffset}");
                }
                catch (ProduceException<Null, string> e)
                {
                    Console.WriteLine($"Delivery failed: {e.Error.Reason}");
                }
                catch (Exception e)
                {
                    Console.WriteLine($"An error occurred: {e.Message}");
                }
            }
        }
    }
}
