#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Paymentdetailsupdate\Paymentdetailsupdate.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3a7873fb973a3d7b3de010d0480f7f9bc39caa16"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Paymentdetailsupdate_Paymentdetailsupdate), @"mvc.1.0.view", @"/Views/Paymentdetailsupdate/Paymentdetailsupdate.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3a7873fb973a3d7b3de010d0480f7f9bc39caa16", @"/Views/Paymentdetailsupdate/Paymentdetailsupdate.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Paymentdetailsupdate_Paymentdetailsupdate : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_paymentdetails"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PaymentStatus_retrievePaymentUpdate_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PaymentStatus_savePaymentUpdate_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrievePaymentUpdate_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PaymentStatusUpdate.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/savePaymentUpdate_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Paymentdetailsupdate\Paymentdetailsupdate.cshtml"
  
    ViewBag.Form = "Payment Details Update";
    ViewBag.helpName = "Paymentdetailsupdate.html";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa167086", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-6"">
                    <div class=""form-group"">
                        <label for=""cmb_advice"" class=""col-sm-4 control-label required""> Payment Status</label>
                        <div class=""col-sm-6"">
                            <input id=""cmb_payment_status"" name=""payment_status"" data-role=""filtercombo"" style=""width:100%"" />
                        </div>

                    </div>
                </div>


                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""txtValidity"" class="" col-md-4 control-label"">Payment Date</label>
                        <div class="" col-sm-4"">
                            <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" onkeypress=""return date_validate(event)"" data-checkda");
                WriteLiteral(@"te-msg=""Enter Valid Date"" name=""valid_until"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>
                            <input type=""checkbox"" id=""apply_all"" style=""margin:10px 5px 0px 0px""> Apply to all
                        </div>
                        <button");
                BeginWriteAttribute("title", " title=\"", 1567, "\"", 1575, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button"" data-original-title=""Refresh"" onclick=""listLoad()""> <span class=""glyphicon glyphicon-refresh""></span></button>
                    </div>
                </div>

            </div>

            <div class=""col-xs-12"">
                <div id=""grid_Drop_list"">
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa1610516", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa1611556", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa1612596", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa1613636", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa1614676", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a7873fb973a3d7b3de010d0480f7f9bc39caa1615716", async() => {
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
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#frm_paymentdetails"");
        kendo.init(container);
        container.kendoValidator({
        });
        var org_id = getlocalStorage('org_id');
        $('#aggrorgn_code').val(org_id);
        Screen_Id = ""PAYSTAUPD"";
        master_userRoleNew2();
        load_master_code();

        var dtmap_paymentstatus = """";
        $(""#cmb_payment_status"").empty();
        dtmap_paymentstatus = grid_comboScreen_mastercodes(""QCD_STAT_PYMT"");
        filter_combobox(""cmb_payment_status"", dtmap_paymentstatus);

        $(""#txtValidity"").kendoDatePicker({
            max: new Date(),// sets max date to Jan 1st, 2013
            format: ""dd/MM/yyyy""
        });

        var data = [];
        gridFilter(data);
    });
</script>
<script>
    function load_master_code() {
        try {
            var data = {};
            data.screen_Id = ""PAYSTAUP");
            WriteLiteral(@"D"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    //var data = [];
    function gridFilter(data) {
        try {
            $(""#grid_Drop_list"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {

                                milkman_code: { type: ""string"", editable: false },
                                farmer_name: { type: ""string"", editable: false },
                                payment_amount: { type: ""string"", editable: false },
                                net_pay: { type: ""string"" },
                                payment_date: { type: ""date"" },
                                pay_method: { type: ""string"" },
                                bank_ref_no: { typ");
            WriteLiteral(@"e: ""string"" },
                                pay_status: { type: ""string"" },
                                remarks: { type: ""string"" },
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
                },
                selectable: true,
                navigatable: true,
                columns: [
                    {
                        field: ""paymentdtl_rowid"",
                        title: ""Row Id"",
                        width: 1,
                        hidden: true,
                    },
                      {
                          field: ""payment_no"",
                          title: ""Payment Advice ID"",
          ");
            WriteLiteral(@"                width: 100,
                      },

                 {
                     field: ""milkman_code"",
                     title: ""MilkMen ID"",
                     width: 100

                 },

    {
        field: ""farmer_name"",
        title: ""Farmer Name"",
        width: 100

    },
    {
        field: ""payment_amount"",
        title: ""Net Payable (Rs)"",
        width: 100

    },
    {
        field: ""payment_date"",
        title: ""Payment Date"",
        width: 100,
        format: ""{0:dd/MM/yyyy}""

    },


     {
         field: ""payment_mode"",
         title: ""payment_mode"",
         width: 1,
         hidden: true,
     },
    {
        field: ""payment_mode_desc"",
        title: ""Paymode Method"",
        editor: function (container, options) {
            combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""payment_mode"", ""grid_Drop_list"")
        },
        width: 100

    },
    {
       ");
            WriteLiteral(@" field: ""bank_ref_no"",
        title: ""Bank Reference No"",
        width: 100,


    },
     {
         field: ""payment_status"",
         title: ""payment_status"",
         width: 1,
         hidden: true,
     },
    {
        field: ""payment_status_desc"",
        title: ""Payment Status"",
        editor: function (container, options) {
            combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""payment_status"", ""grid_Drop_list"")
        },
        width: 200

    },
    {
        field: ""payment_remark"",
        title: ""Remarks"",
        width: 100,


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

    function check(acc, tf) {
        if (acc >= tf) {
            acc = """";
        }
    }

    load_master_code");
            WriteLiteral(@"();
    payment_mode_desc_list = grid_comboScreen_mastercodes(""QCD_PAYMENT_MODE"");
    payment_status_desc_list = grid_comboScreen_mastercodes(""QCD_STAT_PYMT"");

</script>

<script>

    function listLoad() {
       
        try {
           
            var formval = form_Serialize(""frm_paymentdetails"");
            var obj_val = JSON.parse(formval);
            var c = $('#cmb_payment_status');
            if (c.data('kendoComboBox').value() != """" && c.data('kendoComboBox').value() != undefined) {
                obj_val.payment_status = c.data('kendoComboBox').value();

            }
            else {
                obj_val.payment_status = ""0"";
            }
            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Header = obj_val;
            retrieve_PaymentStatusUpdate_details(data);
            return false;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
  ");
            WriteLiteral(@"  function generate_PaymentStatusUpdate_detail(res) {
        try {
            if ($(""#txtValidity"").val() != """") {
                var date = $(""#txtValidity"").val();
                var code = date.split(""/"");
                var applydate = code[1] + '/' + code[0] + '/' + code[2];
            }
            if (res != null) {
                if ($('#apply_all').is(':checked')) {
                    if (applydate != """" && applydate != undefined) {
                        var result = changedataType(res);
                        $.each(result, function (index, value) {

                            var date = kendo.parseDate(applydate);
                            value = kendo.toString(date, ""MM/dd/yyyy"");
                            result[index].payment_date = value;
                        });
                        if (result.length == 0) {
                            var data = changedataType(res);
                            gridFilter(data);
                        }
            ");
            WriteLiteral(@"            else {
                            gridFilter(result);
                        }
                    }

                    else {

                        var data = changedataType(res);
                        $.each(data, function (index, value) {

                            var d1 = value.payment_date;                        
                            var date = kendo.parseDate(d1);
                            value = kendo.toString(date, ""MM/dd/yyyy"");
                            data[index].payment_date = value;
                        });
                        gridFilter(data);
                    }

                }
                else {

                    var data = changedataType(res);
                    $.each(data, function (index, value) {
                        var d = value.payment_date;                       
                        var date = kendo.parseDate(d);
                        value = kendo.toString(date, ""MM/dd/yyyy"");
               ");
            WriteLiteral(@"         data[index].payment_date = value;
                    });
                    gridFilter(data);
                }
            }
            else {
                gridFilter([]);
            }
        } catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function save() {
        try {
            var grid_val = JSON.stringify($(""#grid_Drop_list"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
            $.each(result, function (index, value) {
                var d = value.payment_date;
                var date = kendo.parseDate(d);
                value = kendo.toString(date, ""MM/dd/yyyy"");
                result[index].payment_date = value;

                var paymentdtl_rowid = result[index].paymentdtl_rowid;
                if (paymentdtl_rowid == undefined || paymentdtl_rowid == """") {
                    result[index].paymentd");
            WriteLiteral(@"tl_rowid = ""0"";
                }
                var mmode = result[index].mode_flag;
                if (mmode == ""S"") {
                    result[index].mode_flag = ""U"";
                }
            });
            var obj_val = result;
            var data_save = {};
            data_save.context = WebAPIProxy.getContext();
            data_save.context.PaymentDtl = obj_val;
            save_PaymentStatusUpdate_details(data_save);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function get_PaymentStatusUpdate_details() {
        try {           
            var formval = form_Serialize(""frm_paymentdetails"");
            var obj_val = JSON.parse(formval);
            var c = $('#cmb_payment_status');
            obj_val.payment_status = c.data('kendoComboBox').value();
            var data_save = {};
            data_save.context = WebAPIProxy.getContext();
            data_save.context.Header = obj_val;
       ");
            WriteLiteral("     retrieve_PaymentStatusUpdate_details(data_save);\r\n        }\r\n        catch (err) {\r\n            javascript_log4j_root(arguments.callee.name, err);\r\n        }\r\n    }\r\n</script>\r\n");
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
