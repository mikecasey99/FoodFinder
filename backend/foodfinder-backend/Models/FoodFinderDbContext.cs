using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace foodfinder_backend.Models
{
    public class FoodFinderDbContext : DbContext
    {
        public FoodFinderDbContext(DbContextOptions<FoodFinderDbContext> options) : base(options){}   
        public DbSet<Meal> Meals { get; set; }
        public DbSet<User_Meals> User_Meals { get; set; }
        public DbSet<User> Users { get; set; }
    }
}