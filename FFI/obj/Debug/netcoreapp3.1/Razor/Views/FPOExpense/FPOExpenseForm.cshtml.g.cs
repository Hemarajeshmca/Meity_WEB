#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FPOExpense\FPOExpenseForm.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "44b2fe117384169fa4e40e6eaa7ede1c987185dc"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_FPOExpense_FPOExpenseForm), @"mvc.1.0.view", @"/Views/FPOExpense/FPOExpenseForm.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"44b2fe117384169fa4e40e6eaa7ede1c987185dc", @"/Views/FPOExpense/FPOExpenseForm.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_FPOExpense_FPOExpenseForm : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("FPOExpenses_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Fpo_expense_retrieveFPOExpense_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Fpo_expense_retrieveFPOExpenseList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Fpo_expense_saveFPOExpense_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/FpoExpence.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveFPOExpense_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveFPOExpenseList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveFPOExpense_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_11 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FPOExpense\FPOExpenseForm.cshtml"
  
    ViewBag.Form = "FPO Expenses";
    Layout = "~/Views/Shared/FormViewLayout1.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc8357", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">

                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""txtexpenseid"" class=""col-sm-4 control-label required"">Expense ID:</label>
                        <div class=""col-sm-6"">
                            <input type=""text"" id=""txtexpenseid"" name=""expense_code"" class=""form-control"" maxlength=""30"" disabled >
                        </div>
                    </div>
                </div>
                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""cmb_finyear"" class=""col-sm-5 control-label required"">Financial Year:</label>
                        <div class=""col-sm-6"">
                            <input id=""cmb_finyear"" name=""finyear_code"" style=""width: 100%"">
                        </div>
         ");
                WriteLiteral(@"           </div>
                </div>
                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""txttotalexpence"" class=""col-sm-4 control-label required"">Total Expense</label>
                        <div class=""col-sm-6"">
                            <input type=""text"" id=""txttotalexpence"" name=""totalexpense_Amt"" class=""form-control"" style=""text-align:right"" maxlength=""10"" disabled >
                        </div>
                    </div>
                </div>
                <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
                        <label for=""status_code"" class=""col-sm-5 control-label"">Status_code</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" value=""A"" id=""txt_status_code"" name=""status_code"" class=""form-control"" maxlength=""10"">
                        </div>
                    </div>
                </div>

    ");
                WriteLiteral(@"            <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
                        <label for=""txtMode"" class=""col-sm-5 control-label"">Mode</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" id=""txtMode"" name=""mode_flag"" class=""form-control"" maxlength=""10"">
                        </div>
                    </div>
                </div>
                <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
                        <label for=""row_timestamp"" class=""col-sm-5 control-label"">Timestamp:</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" id=""txt_row_timestamp"" name=""row_timestamp"" class=""form-control"" maxlength=""10"">
                        </div>
                    </div>
                </div>
                <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
    ");
                WriteLiteral(@"                    <label for=""txt_exp_rowid"" class=""col-sm-5 control-label "">Exp row id:</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" id=""txt_exp_rowid"" name=""expense_rowid"" class=""form-control"" maxlength=""10"">
                        </div>
                    </div>
                </div>
            </div>


            <div class=""col-xs-12"">
                <div id=""FPOExpenses_grid"">
                </div>

            </div>
        </div>
    </div>
");
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
            WriteLiteral("\r\n\r\n<script>\r\n    click_act_name = \"FPOExpenseList\";\r\n    click_ctrl_name = \"FPOExpense\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n</script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc13985", async() => {
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc15025", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc16065", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc17105", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc18145", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_8);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc19185", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_9);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc20225", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_10);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44b2fe117384169fa4e40e6eaa7ede1c987185dc21266", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_11);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"

<script>
    $(document).ready(function () {
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#FPOExpenses_form"");
        kendo.init(container);
        container.kendoValidator({
        });
        //button enable disable
        $(""#divEdit"").hide();
        $(""#hide_div"").hide();
        $(""#divCreate"").hide();
        $(""#bottom_menus"").hide();
        $(""#divUserRole8"").show();

        $("".file_attach"").attr(""hdrtitle"", ""FPO Expenses"");
        $("".notes"").attr(""hdrtitle"", ""FPO Expenses"");
        $(""#lblForm_menuid"").text(""FPOEXPENSE"");

        Screen_Id = ""FPOEXPENSE"";
        permission = sec_Permission(Screen_Id);
        load_master_code();
        //fin year
        var fin_year = """";
        $(""#cmb_finyear"").empty();
        fin_year = grid_comboScreen_mastercodes(""FY"");
        filter_combobox(""cmb_finyear"", fin_year);

        Expenses_grid([]);
        if (getlocalStorage('btn_clk_val') == ""Create"") {
           ");
            WriteLiteral(@" $('#divCreate #review').hide();
            $(""#txtMode"").val(""I"");
            $(""#bottom_menus"").hide();
            $(""#DocStat"").val(""New"");
        }
        else if (getlocalStorage('btn_clk_val') == ""View"" || getlocalStorage('btn_clk_val') == ""Edit"") {
            $('#divEdit #reviewEd').hide();
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var data = getlocalStorage(""ls_pageList"");
                var formval = form_Serialize(""FPOExpenses_form"");
                var obj_val = JSON.parse(formval);               
                obj_val.expense_rowid = data.expense_rowid;
                obj_val.expense_code = data.expense_code;

                var data = {};
                data.context = WebAPIProxy.getContext();
                data.context.Header = obj_val;
                retrieve_fpoexpence_details(data);
                $(""#txtMode"").val(""U"");
            }
        }
    });


</script>
<script>
    function load_master_code() {
      ");
            WriteLiteral(@"  try {
            debugger;
            var data = {};
            var context = WebAPIProxy.getContext();
            data.userId = context.userId
            data.orgnId = context.orgnId
            data.locnId = context.locnId
            data.localeId = context.localeId
            data.screen_Id = ""FPOEXPENSE"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


</script>


<script>
    //var data = [];
    function Expenses_grid(data) {
        try {
            $(""#FPOExpenses_grid"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                sl_no: { type: ""string"" },
                                attribute_group: { type: ""string"" },
                              ");
            WriteLiteral(@"  expense_date: { type: ""date"" },
                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },
                toolbar: ""<a class='k-grid-add' id='btnSave' href=''><span class='fa fa-plus' style='color:Black'></span></a>"",
                height: 400,
                groupable: false,
                dataBinding: setDefaultValues,

                dataBound: function (e) {
                    resultData = e.sender._data;
                    var rows = $('#FPOExpenses_grid').data('kendoGrid').tbody.children();
                    setColor(rows, resultData);
                },
                edit: OnEdit,
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [{
                    command: [
            {
                name: ""Delete"",
                id: ""Delete"",
                imageClass: ""fa fa");
            WriteLiteral(@"-close"",
                click: function (e) {
                    // e.preventDefault();
                    var grid = $(""#FPOExpenses_grid"").data(""kendoGrid"");
                    var dataItem = $(""#FPOExpenses_grid"").data(""kendoGrid"").dataItem($(e.target).closest(""tr""));
                    DeleteWindowEvent(e, dataItem, grid);
                    e.stopImmediatePropagation()
                }
            },
                    ], title: ""&nbsp;"", width: ""25px"",
                },
                  {
                      field: ""expensedtl_rowid"",
                      title: ""expensedtl_rowid"",
                      width: 1,
                      hidden: true,
                  },
                  {
                      field: ""businessactivity_code"",
                      title: ""businessactivity_code"",
                      width: 1,
                      hidden: true,
                  },

                 {
                     field: ""businessactivity_desc"",
           ");
            WriteLiteral(@"          title: ""Business Activity"",
                     editor: function (container, options) {
                         combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""businessactivity_code"", ""FPOExpenses_grid"")
                     },
                     width: 100,

                 },
                 {
                     field: ""expensehead_code"",
                     title: ""expensehead_code"",
                     width: 1,
                     hidden: true,
                 },
                 {
                     field: ""expense_code"",
                     title: ""expense_code"",
                     width: 1,
                     hidden: true,
                 },
                {
                    field: ""expensehead_desc"",
                    title: ""Expense Head"",
                    editor: function (container, options) {
                        combo_editor_man(container, ""cmb_"" + options.field, eval(options.field");
            WriteLiteral(@" + ""_list""), options.field, ""expensehead_code"", ""FPOExpenses_grid"")
                    },
                    width: 100,
                },
                {
                    field: ""expense_desc"",
                    title: ""Description"",
                    width: 100,
                },
                {
                    field: ""expense_date"",
                    title: ""Incurred On"",
                    width: 100,
                    format: ""{0:dd/MM/yyyy}""
                },
                {
                    field: ""expense_amount"",
                    title: ""Amount"",
                    width: 100,
                    attributes: { style: ""text-align:right;"" },
                    editor: function (container, options) {
                        item_rate(container, options.field, '9', '2');
                    },
                },
                 {
                      field: ""status_code"",
                      title: ""status_code"",
                      hidd");
            WriteLiteral(@"en: true,
                      width: 100,
               },
            {
                field: ""status_desc"",
                title: ""Status"",
                editor: function (container, options) {
                    combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""status_code"", ""FPOExpenses_grid"")
                },
                hidden: true,
                width: 100,
            },
            {
                field: ""row_timestamp"",
                title: ""row_timestamp"",
                hidden: true
            },
                {
                    field: ""mode_flag"",
                    title: ""Mode"",
                    hidden: true
                }],
                editable: true



            });
        }
        catch (err) {
            alert(err);
        }
    }
    load_master_code();
    businessactivity_desc_list = grid_comboScreen_mastercodes(""QCD_FPO_BUSSACTY"");
    expensehead_desc_list = g");
            WriteLiteral(@"rid_comboScreen_mastercodes(""QCD_FPO_EXPHEAD"");
    status_desc_list = grid_comboScreen_mastercodes(""STATUS"");
    function OnEdit(e) {
        setDefaultValues(e);
    e.container.find(""input[name='expense_amount']"").focusout(function () {
        
        var grid = $(""#FPOExpenses_grid"").data(""kendoGrid"");
            var gridData = grid.dataSource.view();
            var EXP_rate = 0;
            for (var i = 0; i < gridData.length; i++) {
                if (gridData[i].rating != '') {
                    EXP_rate += gridData[i].expense_amount != undefined ? parseFloat(gridData[i].expense_amount) : parseFloat(0);
                }
            }
            $('#txttotalexpence').val(EXP_rate).toFixed(2);
  
    });
    }
</script>
<script>
    function save() {
        try {
            if ($(""#txt_exp_rowid"").val() == """") {
                $(""#txt_exp_rowid"").val('0');
            }
            if ($(""#txtexpenseid"").val() == """") {
                $(""#txtexpenseid"").val('0');
 ");
            WriteLiteral(@"           }
            if ($(""#txttotalexpence"").val() == """") {
                $(""#txttotalexpence"").val('0');
            }
            if ($(""#txt_row_timestamp"").val() == """") {
                $(""#txt_row_timestamp"").val('0');
            }
            if ($(""#txtMode"").val() == """") {
                $(""#txtMode"").val('I');
            }
            if ($(""#DocStat"").val() == ""Active"") {
                $(""#txtMode"").val('U');
            }          
            $(""#txtexpenseid"").removeAttr(""disabled"");
            $(""#txttotalexpence"").removeAttr(""disabled"");
            var formval = form_Serialize(""FPOExpenses_form"");
            var obj_val = JSON.parse(formval);
            $(""#txtexpenseid"").attr(""disabled"", ""disabled"");
            $(""#txttotalexpence"").attr(""disabled"", ""disabled"");
            var grid_val = JSON.stringify($(""#FPOExpenses_grid"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
    ");
            WriteLiteral(@"        $.each(result, function (index, value) {
                var row_id = value.expensedtl_rowid;
                if (row_id == undefined || row_id == """") {
                    result[index].expensedtl_rowid = ""0"";
                }
                var row_id1 = value.row_timestamp;
                if (row_id1 == undefined || row_id1 == """") {
                    result[index].row_timestamp = ""0"";
                }
                var row_id2 = value.expense_code;
                if (row_id2 == undefined || row_id2 == """") {
                    result[index].expense_code = ""0"";
                }
                var row_id3 = value.status_code;
                if (row_id3 == undefined || row_id3 == """") {
                    result[index].status_code = ""A"";
                }
                if ((result[index].expense_date == null) || (result[index].expense_date == """")) {
                    var d1 = new Date();
                    var date1 = kendo.parseDate(d1);
                    value ");
            WriteLiteral(@"= kendo.toString(date1, ""MM/dd/yyyy"");
                    result[index].expense_date = value
                }
                else {
                    var d = value.expense_date;
                    var date = kendo.parseDate(d);
                    value = kendo.toString(date, ""MM/dd/yyyy"");
                    result[index].expense_date = value;
                }

                var mode = value.mode_flag;
                if (mode == ""S"") {
                    result[index].mode_flag = ""U"";
                }

            });
            var obj_grid_val = result;


            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Header = obj_val;
            data.context.FpoExpenseDtl = obj_grid_val;
            save_fpoexpence_details(data);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
  function generate_fpoexpence_header(res) {
        try {
  ");
            WriteLiteral(@"          $(""#txt_exp_rowid"").val(res.expense_rowid);

            $(""#txtexpenseid"").val(res.expense_code);

            $('#cmb_finyear').data(""kendoComboBox"").value(res.finyear_code);
            $(""#txtexpenseid"").val(res.expense_code);

            $(""#txttotalexpence"").val(res.totalexpense_Amt);
            $(""#DocStat"").val(res.status_desc);

            $(""#txtMode"").val(res.mode_flag);

            $(""#txt_row_timestamp"").val(res.row_timestamp);

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


  function generate_fpoexpence_detail(res) {
        try {
            if (res != null) {
                var data = changedataType(res);

                Expenses_grid(data);
            }
            else {
                Expenses_grid([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

  function get_fpoexpence_details(res) {
  ");
            WriteLiteral(@"    try {
          $(""#txtexpenseid"").removeAttr(""disabled"");
          $(""#txtexpenseid"").val(res.expense_code);
          var formval = form_Serialize(""FPOExpenses_form"");
          var obj_val = JSON.parse(formval);         
          obj_val.expense_rowid = res.expense_rowid;
          obj_val.expense_code = res.expense_code;
          $(""#txtexpenseid"").val(res.expense_code);
          retrieve_fpoexpence_details(obj_val);
          $(""#txt_exp_rowid"").val(res.expense_rowid);
          $(""#txtexpenseid"").removeAttr(""disabled"");
          $(""#txtMode"").val(""U"");
         
      }
      catch (err) {
          javascript_log4j_root(arguments.callee.name, err);
      }
  }
</script>
");
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