using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SearchableRecord.Model
{
    public class Record
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string first_name { get; set; }
        [Required]
        public string last_name { get; set; }
        public string email { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public string phone { get; set; }
    }
}
