using Book_Order_Flow_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Book_Order_Flow_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookDbContext _bookDbContext;
        public BookController(BookDbContext bookDbContext)
        {
            _bookDbContext = bookDbContext;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookDb>>> GetBooks()
        {
            if(_bookDbContext.Books == null)
            {
                return NotFound();
            }
            return await _bookDbContext.Books.ToListAsync();
        }
    }
}
