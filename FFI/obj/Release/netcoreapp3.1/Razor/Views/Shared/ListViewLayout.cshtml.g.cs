#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\ListViewLayout.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_ListViewLayout), @"mvc.1.0.view", @"/Views/Shared/ListViewLayout.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\_ViewImports.cshtml"
using FFI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\_ViewImports.cshtml"
using FFI.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\_ViewImports.cshtml"
using Kendo.Mvc.UI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\ListViewLayout.cshtml"
using Microsoft.Extensions.Configuration;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca", @"/Views/Shared/ListViewLayout.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_ListViewLayout : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/jszip.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/ExportExcel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-toggle", new global::Microsoft.AspNetCore.Html.HtmlString("modal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("adv_filter"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/AdvancedFilter/AdvancedFilter"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("hdrtitle", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("fltid", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-target", new global::Microsoft.AspNetCore.Html.HtmlString("#advfilterModal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("text-decoration:underline"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\ListViewLayout.cshtml"
  
    ViewBag.Title = "ListViewLayout";
    Layout = "~/Views/Shared/MainLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("<html>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca7319", async() => {
                WriteLiteral(@"
    <title></title>
    <style>
        .content {
            padding-top: 7px;
            padding-left: 7px;
            padding-right: 7px;
            padding-bottom: 7px;
        }

        .navbar {
            margin-bottom: 1px;
        }

        .box {
            margin-bottom: 1px;
        }

        .k-filter-row th {
            padding: 0.0em 0.0em 0.1em;
            font-size: 12px;
        }

        .k-datepicker .k-input {
            height: 18px;
        }

        .k-autocomplete .k-input {
            height: 18px;
        }

        .k-autocomplete.k-state-default, .k-picker-wrap.k-state-default, .k-numeric-wrap.k-state-default {
            height: 18px;
        }

        .breadcrumb > li + li:before {
            color: #E6E6E6;
        }
    </style>
    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca8408", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral(@"
    <script>
        function btn_onClick(event) {
            click_btn_val = """";
            if (event != """") {
                if (event == ""Create"") {
                    click_btn_val = ""Create"";
                }
                else if (event == ""Edit"") {
                    click_btn_val = ""Edit"";
                }
                else if (event == ""View"") {
                    click_btn_val = ""View"";
                }
                else
                    click_btn_val = """";
                setlocalStorage('btn_clk_val', click_btn_val);
                document.location = form_list_url;
            }
        }
    </script>
    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca10188", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca11992", async() => {
                WriteLiteral(@"
    <div class=""box box-info"" style=""height: 582px; border-top: #ffffff;"">
        <div class=""box-header"" style=""padding-bottom:0px"">
            <div class=""row"" style=""margin-top: -9px; margin-bottom:5px"">
                <div class=""col-sm-12"" style=""padding-left:6px;padding-right:6px"">
                    <ol class=""breadcrumb"" style=""background-color: #E6E6E6"">
                        <li class=""pull-right""><h2 style=""font-size:23px;margin-bottom: 5px;margin-top: 5px;"">");
#nullable restore
#line 76 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\ListViewLayout.cshtml"
                                                                                                         Write(ViewBag.list);

#line default
#line hidden
#nullable disable
                WriteLiteral(@"</h2></li>
                        <li><button id=""btn_new"" class=""btn btn-info"" data-toggle=""tooltip"" data-placement=""bottom"" title=""नया बनाओ""> <span class=""glyphicon glyphicon-plus-sign""></span> Create New </button></li>
                        <li><button id=""btn_Edit"" class=""btn btn-info"" data-toggle=""tooltip"" data-placement=""bottom"" title=""संपादित करें""> <span class=""glyphicon glyphicon-pencil""></span> Edit </button></li>
                        <li><button id=""btn_View"" class=""btn btn-info"" data-toggle=""tooltip"" data-placement=""bottom"" title=""राय""> <span class=""glyphicon glyphicon-info-sign""></span> View </button></li>
");
                WriteLiteral("                        <li id=\"RI\"> FO:  <input id=\"cmb_RIBelong\" data-role=\"filtercombo\" /> </li>\r\n");
                WriteLiteral("                        <li id=\"FPO\"> FPO: <input id=\"cmb_FPOBelong\" name=\"In_orgn_code\" style=\"width: 327px;\" data-role=\"filtercombo\" /> </li>\r\n");
                WriteLiteral("\r\n                    </ol>\r\n                 \r\n                </div>\r\n");
                WriteLiteral(@"                <div class=""col-sm-12"" style=""padding-left: 6px; padding-right: 6px;margin-top: -50px"">
                    <nav class=""navbar navbar-inverse"" style=""background-color: #f5f5f5; border-color: #f5f5f5; min-height: 42px; "">
                        <div class=""row"" style=""padding-top:7px"">
                            <div class=""col-sm-4"" style=""padding-left:20px;"" id=""divAdvanceFilter"">
                                ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824d67bf6e7ad5f0c3a7cab46250485d1d5cb0ca14716", async() => {
                    WriteLiteral("Advanced Filter");
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_8);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("&nbsp;&nbsp;\r\n                            </div>\r\n                            <div class=\"col-sm-4\"></div>\r\n                            <div class=\"col-sm-4 pull-right\">\r\n                                &nbsp;&nbsp;\r\n");
                WriteLiteral("\r\n                                <button type=\"button\" id=\"btnExport\" style=\"background-color:skyblue\" class=\"Export btn btn-sm btn-info\" onclick=\"export_fuc()\">\r\n");
                WriteLiteral("                                    Export to Excel\r\n                                </button>\r\n                                <button id=\"list_refresh\" type=\"submit\" class=\"btn btn-sm btn-info\" data-toggle=\"tooltip\" data-placement=\"top\"");
                BeginWriteAttribute("title", " title=\"", 5164, "\"", 5172, 0);
                EndWriteAttribute();
                WriteLiteral(@" onclick=""master_list_refresh()""><span class=""glyphicon glyphicon-refresh""></span></button>
                                &nbsp;&nbsp;
                            </div>
                        </div>

                    </nav>
                </div>
");
                WriteLiteral("\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"box-body\" style=\"padding-top:0px\">\r\n            ");
#nullable restore
#line 134 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\ListViewLayout.cshtml"
       Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral(@"
        </div>
    </div>
    <script>
        $(document).ready(function () {
            debugger;           
            removelocalStorage('btn_clk_val');
            $(""#Topsubheader"").hide();
            $(""#bottomFooter"").hide();
            // document.getElementById(""lblTitle"").innerHTML = getlocalStorage(""header_title"");

            $('#list_refresh').on('mouseenter', function (e) {
                var list_tooltip = $('#textserarch').val();
                $('#list_refresh').prop('title', list_tooltip);
            });
             $(""#divAdvanceFilter"").hide();
            if (");
#nullable restore
#line 150 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\ListViewLayout.cshtml"
           Write(Configuration.GetSection("AppSettings")["HideAdvanceFilter"].ToString());

#line default
#line hidden
#nullable disable
                WriteLiteral("!= true) {\r\n                $(\"#divAdvanceFilter\").show();\r\n            }            \r\n        });\r\n    </script>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n</html>\r\n\r\n\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public IConfiguration Configuration { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591