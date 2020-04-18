using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistance.Migrations
{
    public partial class DbInicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EstadoDenuncias",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstadoDenuncias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TipoDenuncias",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    Descripcion = table.Column<string>(nullable: true),
                    TiempoMaxTratamiento = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoDenuncias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Denuncias",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Fecha = table.Column<DateTime>(nullable: true),
                    Calle = table.Column<string>(nullable: true),
                    Numero = table.Column<int>(nullable: false),
                    EntreCalles1 = table.Column<string>(nullable: true),
                    EntreCalles2 = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    TipoDenunciaId = table.Column<int>(nullable: false),
                    EstadoDenunciaId = table.Column<int>(nullable: true),
                    Legajo = table.Column<string>(nullable: true),
                    IpDenunciante = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Denuncias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Denuncias_EstadoDenuncias_EstadoDenunciaId",
                        column: x => x.EstadoDenunciaId,
                        principalTable: "EstadoDenuncias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Denuncias_TipoDenuncias_TipoDenunciaId",
                        column: x => x.TipoDenunciaId,
                        principalTable: "TipoDenuncias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Denuncias_EstadoDenunciaId",
                table: "Denuncias",
                column: "EstadoDenunciaId");

            migrationBuilder.CreateIndex(
                name: "IX_Denuncias_TipoDenunciaId",
                table: "Denuncias",
                column: "TipoDenunciaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Denuncias");

            migrationBuilder.DropTable(
                name: "EstadoDenuncias");

            migrationBuilder.DropTable(
                name: "TipoDenuncias");
        }
    }
}
