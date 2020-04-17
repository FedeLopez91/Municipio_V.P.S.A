using Domain;
using Microsoft.EntityFrameworkCore;
using System;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Denuncia> Denuncias { get; set; }
        public DbSet<TipoDenuncia> TipoDenuncias { get; set; }
        public DbSet<EstadoDenuncia> EstadoDenuncias { get; set; }
    }
}

