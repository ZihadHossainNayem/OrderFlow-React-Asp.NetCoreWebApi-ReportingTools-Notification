﻿namespace Book_Order_Flow_API.Services
{
    public interface IKafkaProducerService
    {
        Task ProduceAsync(string topic, string message);
    }
}
