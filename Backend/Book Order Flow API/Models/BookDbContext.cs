using Microsoft.EntityFrameworkCore;

namespace Book_Order_Flow_API.Models
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions<BookDbContext>options) : base(options)
        {

        }
        public DbSet<BookDb> Books { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
