#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSReports\ServiceStockMovement.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSReports_ServiceStockMovement), @"mvc.1.0.view", @"/Views/PAWHSReports/ServiceStockMovement.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd", @"/Views/PAWHSReports/ServiceStockMovement.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSReports_ServiceStockMovement : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-toggle", new global::Microsoft.AspNetCore.Html.HtmlString("modal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("Export btn btn-sm btn-info"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/ExportExcel/ExportExcel"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("hdrtitle", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-target", new global::Microsoft.AspNetCore.Html.HtmlString("#exportexcelModal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_stockmovement"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/HelpFile.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSReports\ServiceStockMovement.cshtml"
  
    ViewBag.Form = "Stock Movement Report";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd7573", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px;padding-top:12px;"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-3"">

                        <label for=""txt_fromdate"" class=""col-sm-4 control-label required"">Date From</label>
                        <div class=""col-sm-7"">
                            <input class=""cusDate"" data-role='datepicker' id=""txt_fromdate"" onkeypress=""return date_validate(event)"" data-checkdate-msg=""Enter Valid Date"" name=""From_date"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>

                        </div>
                    </div>
                    <div class=""col-sm-3"">
                        <label for=""txt_todate"" class=""col-sm-3 control-label required"">Date To</label>
                        <div class=""col-sm-7"">
                            <inpu");
                WriteLiteral(@"t class=""cusDate"" data-role='datepicker' id=""txt_todate"" onkeypress=""return date_validate(event)"" data-checkdate-msg=""Enter Valid Date"" name=""To_date"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>
                        </div>
                    </div>

                    <div class=""col-sm-3"">
                        <label for=""farmer_name"" class=""col-sm-3 control-label required"">Farmer Name</label>
                        <div class=""col-sm-6"">
                            <input id=""farmer_name"" name=""farmer_name"" data-role=""filtercombo"" data-bind=""source:votingStatusList"" style="" width:111%"" />
                        </div>
                        <a class=""HelpWindow fa fa-search fa-lg"" role=""button"" id=""pay_help2"" data-toggle=""modal"" href=""/HelpFilter/HelpFilter"" hdrtitle=""Farmer Details Search"" searchid=""S32"" data-target=""#HelpModal"" onclick=transfer(this,""form"","""",""form_control""); title=""Search"" style=""font-size: 19px; ""></a>
    ");
                WriteLiteral(@"                </div>

                    <div class=""col-sm-3"">
                        <label for=""farmer_code"" class=""col-sm-3 control-label required"">Farmer Code</label>
                        <div class=""col-sm-6"">
                            <input id=""farmer_code"" name=""farmer_code"" data-role=""filtercombo"" style=""width:111%"" disabled />
                        </div>
                        <button id=""refresh""");
                BeginWriteAttribute("title", " title=\"", 2641, "\"", 2649, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                data-original-title=""Refresh"" onclick=""listRefresh()"">
                            <span class=""glyphicon glyphicon-refresh""></span>
                        </button>

                        <div class=""pull-right"" style=""margin-top:18px"">
                            <button id=""clear""");
                BeginWriteAttribute("title", " title=\"", 3054, "\"", 3062, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                    data-original-title=""clear"" onclick=""listclear()"">
                                clear
                            </button>
                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd11513", async() => {
                    WriteLiteral("<span class=\" glyphicon glyphicon-export mr\"></span>");
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral(@"

                        </div>
                    </div>
                </div>
                <div class=""row"">
                    <div class=""col-xs-12"">
                        <div id=""gd_stockmoveregister"">
                            <div id=""stockmovement_grid""></div>
                        </div>
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
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd14615", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd15655", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b5d961ba7e6303eb4f9d472744cb43ee6e4dccd16695", async() => {
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
            WriteLiteral(@"

<script>
    click_act_name = ""home "";
    click_ctrl_name = ""home"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;

</script>
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {

        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#frm_stockmovement"");
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
        $('#btnExport').hide();
        $("".Export"").attr(""hdrtitle"", ""Service StockMovement List"");
        $("".Export"").attr(""SubTreeId"", ""PAWHSSERSTOCKMOVEMENTRPT"");

        Screen_Id = ""PAWHSS");
            WriteLiteral(@"ERSTOCKMOVEMENTRPT"";
        //filterhover();
        load_master_code();
        var org_id = getlocalStorage('org_id');
        //$('#agg').val(org_id);

        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        $(""#txt_fromdate"").kendoDatePicker({
            max: new Date(),// sets max date
            format: ""dd/MM/yyyy""
        });

        $(""#txt_todate"").kendoDatePicker({
            max: new Date(),// sets max date
            format: ""dd/MM/yyyy""
        });

        var combo_data1 = """";
        var combo_data2 = """";
        $(""#farmer_code"").empty();
        $(""#farmer_name"").empty();
        listgrid([]);
    });

    $(function () {
        $('#refresh').click(function () {
            if ($(""#farmer_code"").val() != """" || $(""#farmer_name"").val() != """" || $(""#txt_fromdate"").val() != """" || $(""#txt_todate"").val() != """") {
                var from_date1 = $(""#txt_fromdate"").val();");
            WriteLiteral(@"
                //from_date.format(""YYYY-MM-DD"");
                var to_date1 = $(""#txt_todate"").val();
                //to_date.format(""YYYY-MM-DD"");
                // var newDate = from_date.toString(""YYYY-MM-DD"");

                var parts = from_date1.split('/');
                var from_date = parts[2] + '-' + parts[1] + '-' + parts[0];

                var parts1 = to_date1.split('/');
                var to_date = parts1[2] + '-' + parts1[1] + '-' + parts1[0];

                var org_id = getlocalStorage('org_id');

                var farmer_code = $(""#farmer_code"").val();
                var farmer_name = $('#farmer_name').val();
                $.ajax({
                    type: ""POST"",
                    data: '{farmer_code: ""' + farmer_code + '"",farmer_name:""' + farmer_name + '"",fromdate:""' + from_date + '"",todate:""' + to_date + '"",orgid:""' + org_id + '""}',
                    url: ""/PAWHSReports/Stock_MovementService"",
                    dataType: ""json"",
             ");
            WriteLiteral(@"       contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        console.log(response)
                        listgrid(response);
                        //var pass = response.data;
                        //$(""#salesreport_grid"").data(""kendoGrid"").dataSource.data(pass)
                    },
                    error: function (er) {
                        alert(er)
                        console.log(er)
                    }

                });
            }
            else {

                kendoAlert(""Please Select Any One Field"");
            }
            return false;
        });
    });

</script>
<script>
    function load_master_code() {
        debugger;
        var data = {};
        var context = WebAPIProxy.getContext();
        data.userId = context.userId
        data.orgnId = context.orgnId
        data.locnId = context.locnId
        data.localeId = context.localeId
        data.screen_Id =");
            WriteLiteral(@" ""PAWHSSTOCKMOVEMENTRPT"";
        var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
    }
    function listpageloadfetch() {
        try {
            debugger;
            var formval = form_Serialize(""frm_stockmovement"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.FilterBy_Tovalue = ""."";
            if (obj_val.status_option == """" || obj_val.status_option == undefined) {
                obj_val.status_option = ""V"";
            }

            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
          ");
            WriteLiteral(@"  var colCount = $(""#stockmovement_grid"").find('.k-grid-header colgroup > col').length;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    var status_Priority = [];
    function listgrid(data) {
        $(""#stockmovement_grid"").kendoGrid({
            excel: {
                fileName: ""Stock Movement.xlsx"",
                filterable: true,
                allPages: false
            },
            dataSource: {
                data: data,
                schema: {
                    model: {
                        fields: {
                            item_code: { type: ""string"" },
                            item_name: { type: ""string"", required: true },
                            rec_invoice_no: { type: ""string"", required: true },
                            in_qty: { type: ""string"", required: true },
                            out_qty: { type: ""string"" },
                        }
                    }
       ");
            WriteLiteral(@"         },
                pageSize: 10
            },
            toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
            excelExport: function (e) {
                debugger;
                // var gd = $(""#Item_grid"").data(""kendoGrid"");
                //    var len = gd.dataSource._data.length;
                //    var chkall = $('#chkall').is(':checked');
                //    var chkfilter = $('#chkfilter').is(':checked');
                //    var chktemp = $('#chktemp').is(':checked');
                //    var twokendobox = true;
                //    gd.dataSource.pageSize(len);
                //    if (e.sender.dataSource._data.length == len) {
                //        twokendobox = false;
                //        exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                //    }
                //    else {");
            WriteLiteral(@"
                //        exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                //    }
                //    gd.dataSource.pageSize('10');
                //    return false;
                //},
                var gd = $(""#stockmovement_grid"").data(""kendoGrid"");
                var gd_fi = $(""#stockmovement_grid"").data(""kendoGrid"").dataSource;

                var filters = gd_fi.filter();
                var allData = gd_fi.data();
                var query = new kendo.data.Query(allData);
                var data = query.filter(filters).data;
                var data_tt = gd.dataSource.data();


                var sheet = e.workbook.sheets[0];
                var gridColumns = gd.columns;

                var columns = gridColumns.map(function (col) {
                    var hidden_vl = col.hidden;
                    if (typeof (hidden_vl) == ""undefined"") {
                        return {
                            value: col.title ? col.title : col.f");
            WriteLiteral(@"ield,
                            autoWidth: true,
                            background: ""#7a7a7a"",
                            color: ""#fff""
                        }
                    };

                });
                var rows = [{ cells: columns, type: ""header"" }];


                for (var i = 0; i < data.length; i++) {
                    var rowCells = [];
                    for (var j = 0; j < gridColumns.length; j++) {

                        var fieldName = gd.columns[j].hidden;
                        if (typeof (fieldName) === ""undefined"") {
                            var cellValue = data[i][gridColumns[j].field];
                            rowCells.push({ value: cellValue });
                        }
                    }
                    rows.push({ cells: rowCells, type: ""data"" });
                }


                sheet.rows = rows;

                return false;
            },
            height: 450,
            scrollable: true,
           ");
            WriteLiteral(@" sortable: true,
            pageable: {
                refresh: false,
                pageSizes: true,
                previousNext: false,
                buttonCount: 8
            },
            columns: [
                {
                    field: ""item_code"",
                    title: ""Product Code"",
                    width: 100
                },

                 {
                     field: ""item_name"",
                     title: ""Product Name"",
                     width: 100,

                 },
                 {
                     field: ""in_qty"",
                     title: ""In Quantity"",
                     width: 100,
                     attributes: { style: ""text-align:right;"" }
                 },
                  {
                      field: ""out_qty"",
                      title: ""Out Quantity"",
                      width: 100,
                      attributes: { style: ""text-align:right;"" }
                  }
            ],
        });
");
            WriteLiteral(@"    }
</script>

<script>

    function listRefresh() {
        try {
            setlocalStorage('flt_condition', """");
            listpageloadfetch();
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function listclear() {
        try {

            listgrid([]);

            $('#frm_stockmovement').find('input:text').val('');
            location.reload();

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function grid_control() {
        var control_Name = [

        ];
        return control_Name;
    }

    function form_control() {
        var control_Name = [

            { ""dataCol"": ""item_name"", ""controlId"": ""cmb_prdtname"", ""type"": ""Text"" },
            { ""dataCol"": ""item_code"", ""controlId"": ""cmb_prdtcode"", ""type"": ""Text"" },
            { ""dataCol"": ""farmer_code"", ""controlId"": ""farmer_code"", ""type"": ""Text"" },
            { ""da");
            WriteLiteral(@"taCol"": ""farmer_name"", ""controlId"": ""farmer_name"", ""type"": ""Text"" },
        ];
        return control_Name;
    }

    function trans_input_data() {
        var trans_coll = [
            { ""trasfer"": ""Yes"", ""dataCol"": ""item_name"", ""controlId"": ""cmb_prdtname"", ""grid_id"": """", ""grid_row_col"": ""farmer_code"" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""item_code"", ""controlId"": ""cmb_prdtcode"", ""grid_id"": """", ""grid_row_col"": ""farmer_name"" }
        ];
        return trans_coll;
    }

    function generate_Invoiceproduct_list(res) {
        var dataItem = $(""#stockmovement_grid"").data(""kendoGrid"").dataSource.data()[0];

        dataItem.set(""ProductName"", res[0].product_name);
        dataItem.set(""ProductCode"", res[0].product_code);

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
