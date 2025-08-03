namespace my_portfolio_backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        public User() { }

        public User(int id, string name, string email)
        {
            Id = id;
            Name = name;
            Email = email;
        }

        // Mock user example
        public static User Mock => new User
        {
            Id = 1,
            Name = "Ba",
            Email = "ba@example.com"
        };
    }
}