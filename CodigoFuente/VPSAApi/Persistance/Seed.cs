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
                    Nombre = "Test 1"
                },
                new TipoDenuncia
                {
                    Nombre = "Test 2"
                },
                new TipoDenuncia
                {
                    Nombre = "Test 3"
                }
                };

                context.TipoDenuncias.AddRange(tipoDenuncias);
                context.SaveChanges();
            }
        }
    }
}
