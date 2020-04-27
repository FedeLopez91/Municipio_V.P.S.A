using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.TipoDenuncias.Any())
            {
                var tipoDenuncias = new List<TipoDenuncia>{
                    new TipoDenuncia
                {
                    Nombre = "Ruidos Molestos"
                },
                new TipoDenuncia
                {
                    Nombre = "Baldio sin Mantenimiento"
                },
                new TipoDenuncia
                {
                    Nombre = "Basura en la vía Publica"
                },
                new TipoDenuncia
                {
                    Nombre = "Perros Sueltos"
                },
                new TipoDenuncia
                {
                    Nombre = "Destrucción de luminarias y/otros.."
                }
                };

                context.TipoDenuncias.AddRange(tipoDenuncias);
                context.SaveChanges();
            }
        }
    }
}
