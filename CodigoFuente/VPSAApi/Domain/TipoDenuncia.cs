using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class TipoDenuncia
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal TiempoMaxTratamiento { get; set; }

        public IEnumerable<Denuncia> Denuncias { get; set; }
    }
}
