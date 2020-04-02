using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SearchableRecord.Model;
namespace SearchableRecord.Controllers
{
    public class SearchableRecordController : Controller
    {
        private readonly ApplicationDbContext _db;
        public SearchableRecordController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("api/getAll")]
        public IEnumerable<Record> getAll()
        {
            return _db.Record.ToList();
        }
    }
}