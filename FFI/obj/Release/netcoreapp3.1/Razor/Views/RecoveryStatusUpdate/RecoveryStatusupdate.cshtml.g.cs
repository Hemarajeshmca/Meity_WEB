#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\RecoveryStatusUpdate\RecoveryStatusupdate.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2664318ee7d5de2727a96e31d402c98d9e33c50b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_RecoveryStatusUpdate_RecoveryStatusupdate), @"mvc.1.0.view", @"/Views/RecoveryStatusUpdate/RecoveryStatusupdate.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2664318ee7d5de2727a96e31d402c98d9e33c50b", @"/Views/RecoveryStatusUpdate/RecoveryStatusupdate.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_RecoveryStatusUpdate_RecoveryStatusupdate : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("Recoverystatus_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/FLRecoveryStatusUpdate_retrieveFLRecovery_Status_Update_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/FLRecoveryStatusUpdate_saveFLRecovery_Status_Update_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveFLRecovery_Status_Update_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveFLRecovery_Status_Update_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/RecoveryStatusUpdate.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\RecoveryStatusUpdate\RecoveryStatusupdate.cshtml"
  
    ViewBag.Form = "Recovery Status Update";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.min.js\"></script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b7186", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">

                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""cmb_Paymode"" class=""col-sm-3 control-label required"">Paymode</label>
                        <div class=""col-sm-5"">
                            <input id=""cmb_Paymode"" name=""payment_mode"" data-role=""filtercombo"" style=""width:100%"" />
                        </div>
                    </div>
                </div>
                <div class=""col-sm-6"">
                    <div class=""form-group"">
                        <label for=""cmb_updatestatus"" class=""col-sm-3 control-label required"">Status</label>
                        <div class=""col-sm-6"">
                            <input id=""cmb_updatestatus"" name=""payment_status"" data-role=""filtercombo"" style=""width:100%"" />
                        </div>
");
                WriteLiteral("                        <button");
                BeginWriteAttribute("title", " title=\"", 1307, "\"", 1315, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button"" onclick=""listLoad()"" data-original-title=""Refresh""> <span class=""glyphicon glyphicon-refresh""></span></button>
                    </div>
                </div>

                <div class=""col-sm-2"">
                    <button type=""button"" id=""btnExport"" class=""Export btn btn-sm btn-info""><span class=""glyphicon glyphicon-export""></span></button>
                </div>
            </div>

            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-xs-12"">
                    <div id=""sub_grid"">
                    </div>
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
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b10635", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b11675", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b12715", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b13755", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b14795", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2664318ee7d5de2727a96e31d402c98d9e33c50b15835", async() => {
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
            WriteLiteral(@"
<script>
    $(document).ready(function () {     
        kendodate_format();
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#Recoverystatus_form"");
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
        $(""#btnExport"").kendoButton({
            click: function () {             
                $(""#sub_grid"").data(""kendoGrid"").saveAsExcel();
            }
        })
        master_userRoleNew2();
        load_master_code();

        $("".file_attach"").attr(""hdrtitle"", ""Recovery Status Update"");
        $("".notes"").attr(""hdrtitle""");
            WriteLiteral(@", ""Recovery Status Update"");
        $("".Export"").attr(""hdrtitle"", ""Recovery Status Update"");
        $("".Export"").attr(""SubTreeId"", ""RECOVERYSTATUS_UPDATE"");
        $(""#lblForm_menuid"").text(""FLRECSTS"");
        
        $("".txtValidity"").kendoDatePicker();
        var combo_paymode = """";
        $(""#cmb_Paymode"").empty();
        combo_paymode = grid_comboScreen_mastercodes(""QCD_FL_Repaymode"");
        filter_combobox(""cmb_Paymode"", combo_paymode);
        var combo_status = """";
        $(""#cmb_updatestatus"").empty();
        combo_status = grid_comboScreen_mastercodes(""QCD_FL_RECSTATUS"");
        filter_combobox(""cmb_updatestatus"", combo_status);
        var data = [];
        gridFilter(data);
        

    });
</script>
<script>
    $(function () {
        $(""#cmb_updatestatus"").change(function () {
            console.log(this.value);
            if (this.value == ""QCD_FL_UPDATED"") {
                $(""#divUserRole3 #btnnew"").prop('disabled', true);
            }
            ");
            WriteLiteral(@"else {
                $(""#divUserRole3 #btnnew"").prop('disabled', false);
            }
        });
    });
</script>
<script>
    function load_master_code() {
        var data = {};
        data.screen_Id = ""FLRECSTS"";
        var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
    }
    function excel() {
            $(""#sub_grid"").data(""kendoGrid"").saveAsExcel();
        } 
</script>
<script>
    function gridFilter(data) {
        try {
            $(""#sub_grid"").kendoGrid({
                excel: {
                    fileName: ""Recovery Status Update.xlsx"",
                    filterable: true,
                    allPages: false
                },
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {

                                fpomember_code: { type: ""string"", editable: false },
                                farmer_nam");
            WriteLiteral(@"e: { type: ""string"", editable: false },
                                loanscheme_desc: { type: ""string"", editable: false },
                                loan_no: { type: ""string"", editable: false },
                                instalment_no: { type: ""string"", editable: false },
                                instalment_amount: { type: ""string"", editable: false },
                                instalment_date: { type: ""string"", editable: false },
                                payment_due_date: { type: ""date"" },
                                bank_ref_no: { type: ""string"" },
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
                save: function (data) {
              ");
            WriteLiteral(@"  },                
                columns: [
                    {
                        field: ""fpomember_code"",
                        title: ""Member ID"",
                        width: 100,
                    },
                    {
                        field: ""farmer_name"",
                        title: ""Farmer Name"",
                        width: 100,
                    },
                      {
                          field: ""loanscheme_code"",
                          title: ""loanscheme_code"",
                          width: 1,
                          hidden: true,
                      },

                 {
                     field: ""loanscheme_desc"",
                     title: ""FL Sheme"",
                     width: 100
                 },

    {
        field: ""loan_no"",
        title: ""Loan No"",
        width: 100

    },
    {
        field: ""instalment_no"",
        title: ""Insallment No"",
        width: 100

    },
     {
         fiel");
            WriteLiteral(@"d: ""instalment_amount"",
         title: ""Installment Amount"",
         width: 100

     },
    {
        field: ""instalment_date"",
        title: ""Installment Date"",
        width: 100, 
    },
    {
        field: ""payment_due_date"",
        title: ""Payment Date"",
        width: 100,
        format: ""{0:dd/MM/yyyy}"",
    },
    
     {
         field: ""bank_ref_no"",
         title: ""Bank Ref.No"",
         width: 100
     },
     {
         field: ""payment_status"",
         title: ""payment_status"",
         width: 1,
         hidden: true,
     },
     {
         field: ""row_timestamp"",
         title: ""row_timestamp"",
         width: 1,
         hidden: true,
     },
      {
          field: ""mode_flag"",
          title: ""mode_flag"",
          hidden: true,
      },
    {
        field: ""payment_status_desc"",
        title: ""Payment Status"",
        editor: function (container, options) {
            combo_editor_man(container, ""cmb_"" + options.field, eval(options.f");
            WriteLiteral(@"ield + ""_list""), options.field, ""payment_status"", ""sub_grid"")
        },
        width: 100

    }],
                editable: true
            });
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    load_master_code();
    payment_status_desc_list = grid_comboScreen_mastercodes(""QCD_FL_RECEIPTSTS"");
</script>
<script>
    function listLoad() {
        try {         
            var formval = form_Serialize(""Recoverystatus_form"");
            var obj_val = JSON.parse(formval);
            var c = $('#cmb_Paymode');
            var s = $('#cmb_updatestatus');
            if ($('#cmb_Paymode').data(""kendoComboBox"").value() == """") {
                kendoAlert(""Alotment Status cannot be blank"");
            }

            if ($('#cmb_Paymode').data(""kendoComboBox"").value() == """") {
                kendoAlert(""Alotment Status cannot be blank"");
            }
            if (c.data('kendoComboBox').value() != """" && c.data('k");
            WriteLiteral(@"endoComboBox').value() != undefined) {
                obj_val.payment_mode = c.data('kendoComboBox').value();

            }
            else {
                obj_val.payment_mode = ""0"";
            }

            if (s.data('kendoComboBox').value() != """" && s.data('kendoComboBox').value() != undefined) {
                obj_val.payment_status = s.data('kendoComboBox').value();

            }
            else {
                obj_val.payment_status = ""0"";
            }
            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Header = obj_val;
            retrieve_FLRecoveryStatusUpdate_list(data);
            return false;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function generate_FLRecoveryStatusUpdate_Dtl(res) {
        try {
            gridFilter([]);
            if (res != null) {
                var data = changedataType(res);
  ");
            WriteLiteral(@"              $.each(data, function (index, value) {

                    var d = value.payment_due_date;
                    var date = kendo.parseDate(d);
                    value = kendo.toString(date, ""MM/dd/yyyy"");
                    data[index].payment_due_date = value;
                });
                gridFilter(data);
            }
            else {
                var data = changedataType(res);
                $.each(data, function (index, value) {
                    var d = value.payment_due_date;
                    var date = kendo.parseDate(d);
                    value = kendo.toString(date, ""MM/dd/yyyy"");
                    data[index].payment_due_date = value;
                });
                gridFilter([]);
            }

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function save() {
        try {
            var formval = form_Serialize(""Recoverystatus_form"");
  ");
            WriteLiteral(@"          var obj_val = JSON.parse(formval);
            var grid_val = JSON.stringify($(""#sub_grid"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
            $.each(result, function (index, value) {              
                var mmode = result[index].mode_flag;
                if (mmode == ""S"") {
                    result[index].mode_flag = ""U"";
                }
                if (result[index].payment_due_date == null) {
                    var d1 = new Date();
                    d1.setDate(d1.getDate() + 1)
                    var date1 = kendo.parseDate(d1);
                    value = kendo.toString(date1, ""MM/dd/yyyy"");
                    result[index].payment_due_date = value
                }
                else {
                    var d = value.payment_due_date;
                    var date = kendo.parseDate(d);
                    value = kendo.toString(date, ""MM/dd/yyyy"");
               ");
            WriteLiteral(@"     result[index].payment_due_date = value;
                }
            });
            var obj_val1 = result;
            var data_save = {};
            data_save.context = WebAPIProxy.getContext();
            data_save.context.Header = obj_val;
            data_save.context.Detail = obj_val1;
            save_FLRecoveryStatusUpdate_details(data_save);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function get_PaymentStatusUpdate_details() {
        try {           
            var formval = form_Serialize(""Recoverystatus_form"");
            var obj_val = JSON.parse(formval);
            var c = $('#cmb_Paymode');
            if (c.data('kendoComboBox').value() != """" && c.data('kendoComboBox').value() != undefined) {
                obj_val.payment_mode = c.data('kendoComboBox').value();

            }
            else {
                obj_val.payment_mode = ""0"";
            }
            var s = $('#cmb_upda");
            WriteLiteral(@"testatus');
            if (s.data('kendoComboBox').value() != """" && s.data('kendoComboBox').value() != undefined) {
                obj_val.payment_status = s.data('kendoComboBox').value();

            }
            else {
                obj_val.payment_status = ""0"";
            }
            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Header = obj_val;
            retrieve_FLRecoveryStatusUpdate_list(data);
            return false;
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
