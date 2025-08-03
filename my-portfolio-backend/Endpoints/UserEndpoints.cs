using my_portfolio_backend.Models;
using my_portfolio_backend.Data;
using Microsoft.EntityFrameworkCore;

namespace my_portfolio_backend.Endpoints
{
    public static class UserEndpoints
    {
        public static void MapUserEndpoints(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/users", async (AppDbContext db) =>
            {
                var users = await db.Users.ToListAsync();
                return Results.Ok(users);
            })
            .WithName("GetUsers")
            .WithOpenApi();
        }
    }
}