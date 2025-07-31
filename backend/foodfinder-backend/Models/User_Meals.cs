using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodfinder_backend.Models
{
    public class User_Meals
    {
        public int Id { get; set; }
        public int User_Id { get; set; }  
        public string Meal_Id { get; set; }  
    }
}