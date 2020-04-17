using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class EstadoDenuncia
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
    }
}