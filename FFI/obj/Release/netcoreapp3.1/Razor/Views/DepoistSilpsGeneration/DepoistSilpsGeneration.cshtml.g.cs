#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DepoistSilpsGeneration\DepoistSilpsGeneration.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2c8268bd086041b731fc94987c65e6b7937eb862"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_DepoistSilpsGeneration_DepoistSilpsGeneration), @"mvc.1.0.view", @"/Views/DepoistSilpsGeneration/DepoistSilpsGeneration.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2c8268bd086041b731fc94987c65e6b7937eb862", @"/Views/DepoistSilpsGeneration/DepoistSilpsGeneration.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_DepoistSilpsGeneration_DepoistSilpsGeneration : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("DepositGeneration_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/FLDepositSlipGeneration_retrieveFLDeposit_Slip_Generation_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/FLDepositSlipGeneration_saveFLDeposit_Slip_Generation_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveFLDeposit_Slip_Generation_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveFLDeposit_Slip_Generation_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/DepositSlipGeneration.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/report.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DepoistSilpsGeneration\DepoistSilpsGeneration.cshtml"
  
    ViewBag.Form = "Deposit Slips Generation";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb8628205", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""cmb_Deposit"" class=""col-sm-4 control-label required"">Receipts</label>
                            <div class=""col-sm-6"">
                                <input id=""cmb_Deposit"" name=""select_option"" data-role=""filtercombo"" style=""width:100%"" />
                            </div>
                            <button id=""btnReferesh""");
                BeginWriteAttribute("title", " title=\"", 903, "\"", 911, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""submit"" data-original-title=""Refresh"" onclick=""return  listLoad()""> <span class=""glyphicon glyphicon-refresh""></span></button>
                        </div>
                    </div>
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""txtrun_date"" class=""col-sm-5 control-label"">Run Date</label>
                            <div class=""col-sm-7"">
                                <input class=""cusDate"" data-role='datepicker' id=""txtrun_date"" data-checkdate-msg=""Enter Valid Date"" name=""run_date"" style=""width:100%"" onkeypress=""return date_validate(event)"" />
                                <span data-for='valid' class='k-invalid-msg'></span>

                            </div>
                        </div>
                    </div>
                    <div class=""row"">
                        <div class=""col-xs-12"">
                            <div");
                WriteLiteral(" id=\"grid_deposit_generation\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral("\r\n<script>\r\n    click_act_name = \"home \";\r\n    click_ctrl_name = \"home\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n\r\n</script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86212096", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86213136", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86214176", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86215216", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86216256", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86217296", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c8268bd086041b731fc94987c65e6b7937eb86218336", async() => {
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
            WriteLiteral(@"
<script>
    $(document).ready(function () {

        master_applysubvention();
        kendodate_format();

        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#DepositGeneration_form"");
        kendo.init(container);
        container.kendoValidator({
        });

        Screen_Id = ""FLCOLUPD"";
        load_master_code();

        var data = [];
        gridFLLoan();

        $(""#divUserRole16 #btnnew"").hide();
        $(""#divUserRole16 #btnReport"").hide();
        $(""#divUserRole16 #btnview"").hide();

        var combo_data = """";
        $(""#cmb_Deposit"").empty();
        combo_data = grid_comboScreen_mastercodes(""QCD_FL_DepGen"");
        filter_combobox(""cmb_Deposit"", combo_data);

        $(""#cmb_Deposit"").change(function () {
            var c = $('#cmb_Deposit');
            ddl = c.data('kendoComboBox').value();
            if (ddl != """" && ddl != undefined && ddl == 'QCD_FL_TobeGen') {
                $(""#divUserRole16 #btnne");
            WriteLiteral(@"w"").show();
                $(""#divUserRole16 #btnReport"").hide();
                $(""#divUserRole16 #btnview"").hide();
            }
            if (ddl != """" && ddl != undefined && ddl == 'QCD_FL_AllGen') {
                $(""#divUserRole16 #btnnew"").hide();
                $(""#divUserRole16 #btnReport"").show();
                $(""#divUserRole16 #btnview"").hide();
            }
        });

        var container = $(""#txtrun_date"");
        kendo.init(container);
        container.kendoValidator({
            rules: {
                checkdate: function (input) {
                    if (input.attr(""data-role"") == ""datepicker"") {
                        var res = isDate(input.val());
                        return res;
                    }
                    else {
                        return true;
                    }
                }
            }
        });
    });
</script>
<script>
    function load_master_code() {
        debugger;
        var data = {};
        ");
            WriteLiteral(@"var context = WebAPIProxy.getContext();
        data.userId = context.userId
        data.orgnId = context.orgnId
        data.locnId = context.locnId
        data.localeId = context.localeId
        data.screen_Id = ""FLCOLUPD"";
        var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
    }
</script>
<script>
    function gridFLLoan(data) {
        try {
            $(""#grid_deposit_generation"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                bank_name: { type: ""string"" },
                                bank_acc_type: { type: ""string"" },
                                bank_acc_type_desc: { type: ""string"" },
                                bank_acc_no: { type: ""string"" },
                                bank_code: { type: ""string"" },
                                bank_ifsc_code: { type: ""s");
            WriteLiteral(@"tring"" },
                                amount: { type: ""string"" },
                                deposit_date: { type: ""date"" },
                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },

                height: 400,
                groupable: false,
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [
                    {
                        field: ""bank_name"",
                        title: ""Bank Name"",
                        width: 100
                    },
                    {
                        field: ""bank_acc_type"",
                        title: ""bank_acc_type"",
                        hidden: true
                    },
                    {
                        field: ""bank_acc_type_desc"",
                        title: ""bank_acc_type_desc"",
                  ");
            WriteLiteral(@"      hidden: true
                    },
                    {
                        field: ""bank_code"",
                        title: ""bank_code"",
                        hidden: true
                    },
                    {
                        field: ""bank_ifsc_code"",
                        title: ""bank_ifsc_code"",
                        hidden: true
                    },
                    {
                        field: ""branch_name"",
                        title: ""branch_name"",
                        hidden: true
                    },
                    {
                        field: ""bank_acc_no"",
                        title: ""Bank Account No"",
                        width: 100
                    },
                {
                    field: ""amount"",
                    title: ""Amount"",
                    width: 100
                },

                  {
                      field: ""deposit_date"",
                      title: ""Date Of Deposi");
            WriteLiteral(@"t"",
                      width: 100,
                      format: ""{0:dd/MM/yyyy}""
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
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

</script>
<script>
 function listLoad() {
        try {
            var mandatory_check = true;

            var grid_validate_msg = """";

            if ($('#cmb_Deposit').data(""kendoComboBox"").value() == """") {
                grid_validate_msg += ""Select List cannot be blank <br>"";
                mandatory_check = false;
            }

            if (mandatory_check == false) {
                kendoAlert(grid_validate_msg);
                return false;
            }
            var formval = form_Serialize(""DepositGeneration_form"");
            var obj_val = JSON.pa");
            WriteLiteral(@"rse(formval);           
            var depst_sts = $('#cmb_Deposit').data(""kendoComboBox"").value();
            if (obj_val != undefined) {
                obj_val.select_option = depst_sts;
                obj_val.run_date = getFormated_StringDate($(""#txtrun_date"").val());
                var data = {};
                data.context = WebAPIProxy.getContext();
                data.context.Header = obj_val;
                retrieve_DepositSlipGeneration_details(data);
            }

            var colCount = $(""#grid_deposit_generation"").find('.k-grid-header colgroup > col').length;

            //If There are no results place an indicator row
            if ($(""#grid_deposit_generation"").data(""kendoGrid"").dataSource._view.length == 0) {
                $(""#grid_deposit_generation"").find('.k-grid-content tbody')
                     .append('<tr class=""kendo-data-row""><td colspan=""' +
                         colCount +
                    '"" style=""text-align:center; padding-top:10px;back");
            WriteLiteral(@"ground-color:#AFE4FA""><b>No Records To Be Generated</b></td></tr>');
            }
           
            return false;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function save() {
        try {
            if ($(""#txtMode"").val() == ""S"") {
                $(""#txtMode"").val('U');
            }
            var formval = form_Serialize(""DepositGeneration_form"");
            var obj_val = JSON.parse(formval);
            if (obj_val.hasOwnProperty('run_date')) {
                if (obj_val.run_date != '' && obj_val.run_date != undefined)
                    obj_val.run_date = getFormated_StringDate(obj_val.run_date);
            }

            var grid_val = JSON.stringify($(""#grid_deposit_generation"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
            //result.version_no = ""0"";
            $.each(result, funct");
            WriteLiteral(@"ion (index, value) {
                var dpst_date = value.deposit_date;
                var date = kendo.parseDate(dpst_date);
                value = kendo.toString(date, ""MM/dd/yyyy"");
                result[index].deposit_date = value;

                var row_id = value.bank_acc_type;
                if (row_id == undefined) {
                    result[index].bank_acc_type = ""0"";
                }
                var mode = result[index].mode_flag;
                if (mode == ""S"") {
                    result[index].mode_flag = ""U"";
                }
            });
            var obj_grid_val = result;

            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Header = obj_val;
            data.context.Detail = obj_grid_val;
            save_DepositSlipGeneration_details(data);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>

    function genera");
            WriteLiteral(@"te_DepositSlipGeneration_Header(res)
    {
        if (res != null) {
            var rundate = res.run_date.split('/').reverse().join('/');
            $(""#txtrun_date"").val(rundate);
        }
    }

    function generate_DepositSlipGeneration_Detail(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                gridFLLoan(data);
            }
            else {
                gridFLLoan([]);
            }
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