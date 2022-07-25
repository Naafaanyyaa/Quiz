using quiz.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration) => Configuration = configuration;

        //ПОРЯДОК ВАЖЕН !!!!!!!!!!!!!!!!!!
        public void ConfigureServices(IServiceCollection services)
        {
            //подключаем конфиг из appsettings.json

            Configuration.Bind("Project", new Config());
            //поддержка контроллеров, моделей и представлений
            services.AddControllersWithViews()
                .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_3_0).AddSessionStateTempDataProvider();
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //подключаем роутинг
            app.UseRouting();

            //подключаем поддержку статических файлов (css, js, scss ...)
            app.UseStaticFiles();

            //регистрируем эндпоинты (точки маршртизации)
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
