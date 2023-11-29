using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using log4net;
using log4net.Config;
using System.Reflection;


[assembly: log4net.Config.XmlConfigurator(ConfigFile = "Web.config", Watch = true)]
namespace FFI.Common
{
    public class LogTest
    {

        //private static readonly ILog Log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        //static void Main(string[] args)
        //{
        //    //XmlConfigurator.Configure();

        //    Log.Debug("Application is starting");
        //    Console.WriteLine("Test Line");
        //    var testClass = new TestClass();
        //    testClass.LogSomething();

        //    Log.Debug("Application is ending");
        //    Console.Read();
        //}

        public class TestClass
        {
        //    private static readonly ILog Log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        //    public void LogSomething()
        //    {
        //        for (int i = 0; i < 100; i++)
        //        {
        //            Log.InfoFormat("CurrentTime is [{0}]", DateTime.Now.ToString("yyyy.MM.dd-hh.mm.ss~fff"));
        //        }
        //    }

        //    public static string getLogError(string controllerName, string methodName, string errmsg)
        //    {
        //        try
        //        {
        //            if (Log.IsDebugEnabled == true)
        //            {
        //                Log.Error("The Error Generated root is ->" + controllerName + "->" + methodName + "->" + errmsg);
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            Log.Error(ex);
        //            //Log.Error("The Error Generated root is ->" + controllerName + "->" + methodName + "->" + ex.ToString());
        //        }
        //        return "";
        //    }

        //    public static string getJavascriptLogerror(string formName, string filename, string methodName, string errmsg)
        //    {
        //        try
        //        {
        //            if (Log.IsDebugEnabled == true)
        //            {
        //                Log.Error("The Javascript Error Generated root is ->" + formName + "->" + filename + "->" + methodName + "->" + errmsg);
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            Log.Error(ex);
        //        }
        //        return "";
        //    }

        }        

    }
}