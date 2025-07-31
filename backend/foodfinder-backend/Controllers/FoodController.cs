using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace foodfinder_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private readonly HttpClient _httpClient;

        public FoodController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("random")]
        public async Task<IActionResult> GetRandomMeal()
        {
            var response = await _httpClient.GetAsync("https://www.themealdb.com/api/json/v1/1/random.php");

            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine("Not getting response from MealDB API.");
                return NotFound();
            }
            var content = await response.Content.ReadAsStringAsync();
            return Ok(content);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMealById(string id)
        {
            var response = await _httpClient.GetAsync($"https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}");

            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine("Not getting response from MealDB API.");
                return NotFound();
            }
            var content = await response.Content.ReadAsStringAsync();
            return Ok(content);
        }
    }

}