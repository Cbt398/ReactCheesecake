using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCheesecake.Data;

public class ReactCheesecakeBackendDataContextFactory : IDesignTimeDbContextFactory<ReactCheesecakeBackendDataContext>
{
    public ReactCheesecakeBackendDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), 
           $"..{Path.DirectorySeparatorChar}ReactCheesecake.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new ReactCheesecakeBackendDataContext(config.GetConnectionString("ConStr"));
    }
}