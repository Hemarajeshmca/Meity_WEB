#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\Reportlist\RptStockAdjustment.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "717f1bb59540a6fcb573a05c612673bf7a1320c7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Reportlist_RptStockAdjustment), @"mvc.1.0.view", @"/Views/Reportlist/RptStockAdjustment.cshtml")]
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\_ViewImports.cshtml"
using FFI_Reports;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\_ViewImports.cshtml"
using FFI_Reports.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"717f1bb59540a6fcb573a05c612673bf7a1320c7", @"/Views/Reportlist/RptStockAdjustment.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0f808a1843a3e01ed807d8e48267df3333a21a91", @"/Views/_ViewImports.cshtml")]
    public class Views_Reportlist_RptStockAdjustment : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_Reportslist"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\Reportlist\RptStockAdjustment.cshtml"
  
    ViewBag.Form = "Stock Adjustment Report";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "717f1bb59540a6fcb573a05c612673bf7a1320c75597", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:5px"">
               
                <div class=""col-sm-4"">
                    <div class=""form-group"">

");
                WriteLiteral("                        <input id=\"test\" type=\"button\" value=\"Generate Report\" onclick=\"return GetReportName()\" />\r\n                        <a id=\"downloadpath\" download");
                BeginWriteAttribute("href", " href=\"", 1173, "\"", 1180, 0);
                EndWriteAttribute();
                WriteLiteral("></a>\r\n                        <input type=\"hidden\" id=\"hdn_inputstring\">\r\n");
                WriteLiteral("\r\n");
                WriteLiteral("\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "717f1bb59540a6fcb573a05c612673bf7a1320c78099", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
<script>
    click_act_name = ""ReportForm"";
    click_ctrl_name = ""Reportlist"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;



    function GetReportName() {
        debugger;
        var selected_value = ""STOCKADJ"";
        var param_value = """";
        var parent_code = $(""#cmb_RIBelongform"").data(""kendoComboBox"").value();
        var user_code = getlocalStorage(""User_Id_Value"");
        //console.log(selected_value);
        var data = {};
        data.context = WebAPIProxy.getContext();
        var Context = data.context;
        Context.orgnId = $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value();
        if (selected_value != """") {
            var ABC = ""Input"";
            var InputString = ABC.concat("" "", ""{"", selected_value, "","", Context.userId, "","", Context.orgnId, "","", Context.locnId, "","", Context.localeId, "","", param_value, "","", parent_code, "","", user_code, ""}"");
            console.log(InputString);
            $(""#hdn_inputstring"").val(InputStrin");
            WriteLiteral(@"g);
            //window.location = ""/FarmerRegRpt/FarmerRegRpt?id="" + selected_value;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ cmbrptname: selected_value, userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, cmbparam: param_value, parent_code: parent_code, User: user_code }),
                url: ""/Reportlist/GetReport"",
                dataType: ""json"",
                contentType: 'application/json; charset-utf-8;',
                success: function (response) {
                    debugger;
                    if (response != null) {
                        debugger;
                         var InputString = $(""#hdn_inputstring"").val();
            var data = {};
            data.userId = getlocalStorage(""User_Id_Value"");
            var user_code = data.userId;
            var Report_Name = ""Stock Adjustment Report"";
            var flag = 1;
            var data = { report_name: Report_Name");
            WriteLiteral(", input_string: InputString, flag: flag, userid: user_code };\r\n         $.ajax({\r\n            url: \'");
#nullable restore
#line 78 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\Reportlist\RptStockAdjustment.cshtml"
             Write(Url.Action("ExportExcelDownload", "Reportlist"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data,
            success: function (response1) {
            debugger;
            if (response1 != null) {
                debugger;

            }

          },
         error: function (er) {
         alert(er)
        console.log(er)
        }
         });
                        var url_path = (response);
                        $(""#downloadpath"").attr(""href"", url_path.path);
                        document.getElementById(""downloadpath"").click();
                    }
                },
                error: function (er) {
                    alert(er);
                    console.log(er);
                }
            });
        }
        else {
            kendoAlert(""Please select Report Name"");
        }

        //Introduced by Venkat Reportlist page  Download Excel  End
    }
</script>
<script>
    var menuId = """";
    var permission = """";
    $(doc");
            WriteLiteral(@"ument).ready(function () {
        debugger;
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#frm_Reportslist"");
        kendo.init(container);
        container.kendoValidator({
        });
        $(""#Topsubheader"").show();
        $(""#bottomFooter"").show();
        $(""#bottom_menus"").hide();
        $(""#btndiv"").show();
        $(""#frmlayerdiv"").hide();
        $(""#divCreate"").hide();
        $(""#divEdit"").hide();
        $(""#divView"").show();
        $(""#DocStat"").show();
        $("".edtviw_item"").show();
        $("".create_item"").hide();

        filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
        filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));

        $(""#trackeup"").hide();
        var formval = form_Serialize(""frm_Reportslist"");
        var obj_val = JSON.parse(formval);
        obj_val.FilterBy_Option = getlocalStorage('ModuleId');
        obj_val.FilterBy_Code = ""."";
        if (getlocalSto");
            WriteLiteral(@"rage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
            obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
        }
        else {
            obj_val.FilterBy_FromValue = ""."";
        }
        obj_val.FilterBy_ToValue = ""."";
        /*  Prema added for fpo based abd ri user base loading*/
        var role = getlocalStorage(""orgn_level"");
        if (role == ""ORG_FO"") {
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            var cmb_riform3 = $(""#cmb_RIBelongform"").data(""kendoComboBox"");
            cmb_riform3.value(getlocalStorage(""org_id""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(false);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""ALL"");
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(true);
           ");
            WriteLiteral(@" fpoload();
        }
        if (role == ""ORG_PF"") {
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").value(""ALL"");
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""ALL"");
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(true);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(true);          
            fpoload();
        }
        if (role == ""ORG_FPO"") {
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            var cmb_riform3 = $(""#cmb_RIBelongform"").data(""kendoComboBox"");
            cmb_riform3.value(getlocalStorage(""parent_code""));
       ");
            WriteLiteral(@"     $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(false);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(false);
            var cmap_inselform = $(""#cmb_FPOBelongform"").data(""kendoComboBox"");
            cmap_inselform.value(getlocalStorage(""org_code""));
        }
        /*  prema ended*/
             $(""#cmb_RIBelongform"").change(function () {
                 debugger;
                 $(""#cmb_FPOBelongform"").val("""");
             var selected_value = $(this).val();
             var data1 = { RI_Code: selected_value}
            $.ajax({
            url: '");
#nullable restore
#line 194 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\Reportlist\RptStockAdjustment.cshtml"
             Write(Url.Action("GetFPOlistRIBASE", "Login"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data1,
            success: function (response1) {
            debugger;
                var url_path = JSON.parse(response1);
                var itemArrFPO = [];
                for (var i = 0; i < url_path.Table.length; i++) {
                    var list = {};
                    list.id = url_path.Table[i].serial_number;
                    list.code = url_path.Table[i].dist_code;
                    list.desc = url_path.Table[i].Member_district_name;
                    itemArrFPO.push(list);
                }
                filter_combobox(""cmb_FPOBelongform"", itemArrFPO);
            },
                error: function (er)
                {
                alert(er)
                console.log(er)
                }
            });

    });
        /*  prema ended*/

    });
    function fpoload() {
        var data = {};
            data.userId = getlocalStorage(""");
            WriteLiteral("User_Id_Value\");\r\n        var orgnid = $(\"#cmb_RIBelongform\").data(\"kendoComboBox\").value();\r\n            var user_code = data.userId;\r\n            var data1 = {User_code: user_code, orgn_code: orgnid}\r\n            $.ajax({\r\n            url: \'");
#nullable restore
#line 229 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\Reportlist\RptStockAdjustment.cshtml"
             Write(Url.Action("GetFPOlist", "Login"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data1,
            success: function (response1) {
            debugger;
                var url_path = JSON.parse(response1);
                var itemArrFPO = [];
                for (var i = 0; i < url_path.Table.length; i++) {
                    var list = {};
                    list.id = url_path.Table[i].serial_number;
                    list.code = url_path.Table[i].dist_code;
                    list.desc = url_path.Table[i].Member_district_name;
                    itemArrFPO.push(list);
                }
                filter_combobox(""cmb_FPOBelongform"", itemArrFPO);
            },
                error: function (er)
                {
                alert(er)
                console.log(er)
                }
            });
    }

</script>");
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
