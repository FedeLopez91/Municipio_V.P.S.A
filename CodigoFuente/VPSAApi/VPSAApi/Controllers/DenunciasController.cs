using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistance;

namespace VPSAApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DenunciasController : ControllerBase
    {
        private readonly DataContext _context;

        public DenunciasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Denuncias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Denuncia>>> GetDenuncias()
        {
            return await _context.Denuncias.Include(m=>m.TipoDenuncia).Include(m=>m.EstadoDenuncia).OrderByDescending(x=>x.Fecha).ToListAsync();
        }

        // GET: api/Denuncias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Denuncia>> GetDenuncia(int id)
        {
            var denuncia = await _context.Denuncias.Include(m=>m.TipoDenuncia).FirstOrDefaultAsync(x => x.Id == id);

            if (denuncia == null)
            {
                return NotFound();
            }

            return denuncia;
        }

        // PUT: api/Denuncias/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDenuncia(int id, Denuncia denuncia)
        {
            if (id != denuncia.Id)
            {
                return BadRequest();
            }

            _context.Entry(denuncia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DenunciaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Denuncias
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Denuncia>> PostDenuncia(Denuncia denuncia)
        {
            denuncia.Fecha = DateTime.Now;
            _context.Denuncias.Add(denuncia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDenuncia", new { id = denuncia.Id }, denuncia);
        }

        // DELETE: api/Denuncias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Denuncia>> DeleteDenuncia(int id)
        {
            var denuncia = await _context.Denuncias.FindAsync(id);
            if (denuncia == null)
            {
                return NotFound();
            }

            _context.Denuncias.Remove(denuncia);
            await _context.SaveChangesAsync();

            return denuncia;
        }

        private bool DenunciaExists(int id)
        {
            return _context.Denuncias.Any(e => e.Id == id);
        }
    }
}
