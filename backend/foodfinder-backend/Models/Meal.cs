using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodfinder_backend.Models
{
    public class Meal
    {
        public string Id { get; set; }  // this will match the strMealid from database
        public string Name { get; set; }
        public string Category { get; set; }
        public string Area { get; set; }
        public string Instructions { get; set; }
        public string ThumbnailUrl { get; set; }
        public string Ingredients { get; set; } // this will be combined into a string because there can be anywhere from 1-20 items
        public string Measuring { get; set; }   // this will be combined into a string because there can be anywhere from 1-20 items
        public DateTime CreatedAt { get; set; }
    }
}