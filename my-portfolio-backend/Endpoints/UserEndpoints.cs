using my_portfolio_backend.Models;

namespace my_portfolio_backend.Endpoints
{
    public static class UserEndpoints
    {
        public static void MapUserEndpoints(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/users", () =>
            {
                var users = new[]
                {
                    new User(1, "Ba", "ba@example.com"),
                    new User(2, "Luong", "long@example.com"),
                    new User(3, "Dev", "dev@example.com"),
                    new User(4, "hobbies", "Study, Coding, Reading"),
                    new User(5, "Skills", "C#, ASP.NET Core, Docker, React")
                };
                return users;
            })
            .WithName("GetUsers")
            .WithOpenApi();
        }
    }
}