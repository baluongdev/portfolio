using Microsoft.EntityFrameworkCore;
using my_portfolio_backend.Models;

namespace my_portfolio_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users => Set<User>();
    }
}