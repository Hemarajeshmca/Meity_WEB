#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\FormViewLayout2.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "abfc146967d162fb0248faa26db8ec9f44e1b28d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_FormViewLayout2), @"mvc.1.0.view", @"/Views/Shared/FormViewLayout2.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"abfc146967d162fb0248faa26db8ec9f44e1b28d", @"/Views/Shared/FormViewLayout2.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_FormViewLayout2 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\FormViewLayout2.cshtml"
  
    ViewBag.Title = "FormViewLayout2";
    Layout = "~/Views/Shared/MainLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<html>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "abfc146967d162fb0248faa26db8ec9f44e1b28d3780", async() => {
                WriteLiteral(@"
    <title></title>
    <style>
        .content {
            padding-top: 7px;
            padding-left: 7px;
            padding-right: 7px;
            padding-bottom: 7px;
        }

        .breadcrumb > li + li:before {
            color: #ecf0f5;
        }

        .breadcrumb {
            margin-bottom: 0px;
        }

        .box {
            margin-bottom: 1px;
        }


        #mode::-webkit-input-placeholder {
            color: black;
        }

        #mode::-moz-placeholder {
            color: black;
        }

        #DocStat::-webkit-input-placeholder {
            color: black;
        }

        #DocStat::-moz-placeholder {
            color: black;
        }

        #ProcStage::-webkit-input-placeholder {
            color: black;
        }

        #ProcStage::-moz-placeholder {
            color: black;
        }

        #colorstrip {
            height: 0px;
            border-bottom: solid 20px #255774;
            color: w");
                WriteLiteral(@"hite;
        }

        #colorstrip1 {
            height: 0px;
            border-bottom: solid 33px #8c8c8c;
            color: white;
        }

        .control-label.required:after {
            content: ""*"";
            color: red;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            line-height: 23px;
        }

        .breadcrumb > li + li:before {
            color: #E6E6E6;
        }
    </style>
");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "abfc146967d162fb0248faa26db8ec9f44e1b28d6303", async() => {
                WriteLiteral("\r\n    <div class=\"box box-info\" id=\"form_design\" style=\"height: 100%; border-top: #ffffff;padding-top:56px\">\r\n        <div class=\"box-body\" style=\"padding-top:0px\">\r\n            ");
#nullable restore
#line 84 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Shared\FormViewLayout2.cshtml"
       Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral(@"

            <div class=""modal fade"" id=""HelpModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""myModalLabel"" aria-hidden=""true"" data-backdrop=""static"" data-keyboard=""false"">
                <div class=""modal-dialog"" style=""width:65%;height:500px;"">
                    <div class=""modal-content"">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {   
            //filter_combobox(""cmb_RIBelong"", getlocalStorage(""rilist""));
            //filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            //filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            //filter_combobox(""cmb_FPOBelong"", getlocalStorage(""fpolist""));
            $(""#menu_sidebar"").css(""z-index"", ""1030"");    
            //$(""#RI"").hide();
            //$(""#FPO"").hide();
            //$(""#RIform"").hide();
            //$(""#FPOform"").hide();
        });

        $(""#inact"").click(function (");
                WriteLiteral(@"e) {
            e.preventDefault();
            var kendoWindow = $(""<div />"").kendoWindow({
                title: ""Confirm"",
                width: ""350px"",
                height: ""130px"",
                resizable: false,
                modal: true
            });
            kendoWindow.data(""kendoWindow"")
        .content($(""#delete-confirmation"").html())
        .center().open();
            kendoWindow
                .find("".delete-confirm,.delete-cancel"")
                    .click(function () {
                        if ($(this).hasClass(""delete-confirm"")) {
                            master_InActdraft();
                        }
                        else {
                            kendoWindow.data(""kendoWindow"").close();
                        }
                        kendoWindow.data(""kendoWindow"").close();
                    })
                    .end()
        });
    </script>
    <script>
        $(""#dropdown_download"").kendoComboBox({
            da");
                WriteLiteral(@"taSource: [{ TemplId: 21, TemplName: ""CostSheet"", FileName: ""CostSheet.xlsx"" }, { TemplId: 2, TemplName: ""UmoldIT_Training"", FileName: ""UmoldIT_Training.docx"" }, { TemplId: 30, TemplName: ""Offering"", FileName: ""Offering.xlsx"" }],
            template: downloadView,
            optionLabel: {
                ScreenName: ""Download"",
                ScreenId: ""Download"",
            },
            dataTextField: ""TemplName"",
            dataValueField: ""TemplId""
        });

        function downloadView(content) {
            return ""<div><div class='pull-left'>"" + content.TemplName + ""</div><div class='pull-right'><span class='badge'><i class='fa fa-download' onclick=downloadComboFile(this,'"" + content.FileName + ""')></i></span> <span class='badge'></div>"";
        }

        function downloadComboFile(evt, fileName) {
            window.location.href = '../Download/Task/' + fileName;
        }


        $(""#dropdown_info"").kendoComboBox({
            dataSource: [{ TemplId: 1, TemplName: """);
                WriteLiteral("ViewReferenceInfo\" }, { TemplId: 2, TemplName: \"ViewMails\" }, { TemplId: 3, TemplName: \"ViewWorkflowInfo\" }],\r\n            dataTextField: \"TemplName\",\r\n            dataValueField: \"TemplId\"\r\n        });\r\n    </script>\r\n");
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
            WriteLiteral("\r\n\r\n</html>\r\n\r\n\r\n\r\n\r\n");
        }
        #pragma warning restore 1998
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