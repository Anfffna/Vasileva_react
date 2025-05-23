﻿using Microsoft.EntityFrameworkCore;
//using System.Configuration;
using MyNotes.Models;

namespace MyNotes.DataAccess;
public class NotesDbContext : DbContext
{
    private readonly IConfiguration _configuration;
    public NotesDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public DbSet<Note> Notes => Set<Note>();
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(_configuration.GetConnectionString("Database"));

    }
}
