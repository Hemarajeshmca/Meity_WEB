#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\PAWHSNEWSlnoRpt\PAWHSNEWSlnoRpt.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4e69ff19873f658b8908f6e0c8a9307b7a632e91"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSNEWSlnoRpt_PAWHSNEWSlnoRpt), @"mvc.1.0.view", @"/Views/PAWHSNEWSlnoRpt/PAWHSNEWSlnoRpt.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4e69ff19873f658b8908f6e0c8a9307b7a632e91", @"/Views/PAWHSNEWSlnoRpt/PAWHSNEWSlnoRpt.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0f808a1843a3e01ed807d8e48267df3333a21a91", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSNEWSlnoRpt_PAWHSNEWSlnoRpt : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_slnoRpt"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/common.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/tamil.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/HelpFile.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\PAWHSNEWSlnoRpt\PAWHSNEWSlnoRpt.cshtml"
  
    ViewBag.Form = "Serial No Report";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.min.js\"></script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e69ff19873f658b8908f6e0c8a9307b7a632e916476", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px;padding-top:12px;"">
                <div class=""col-xs-4"" style=""display:none"">
                    <div class="" form-group"">
                        <label for=""ic_code"" class="" col-sm-5 control-label"">Input Centre Name</label>
                        <div class="" col-sm-6"">
                            <input type=""text"" id=""ic_code"" name=""ic_code"" class=""form-control"" maxlength=""50"" disabled>
                        </div>
                    </div>
                </div>
                <div class=""col-sm-12"">
                    <div class=""col-sm-3"">
                        <label for=""txt_fromdate"" class=""col-sm-4 control-label required"">Serial No</label>
                        <div class="" col-sm-6"">
                            <input type=""text"" id=""txt_Slno"" name=""In_slno"" class=""form-control"" maxlength=""50"">
     ");
                WriteLiteral("                   </div>\r\n                    </div>\r\n\r\n                    <button id=\"refresh\"");
                BeginWriteAttribute("title", " title=\"", 1363, "\"", 1371, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                            data-original-title=""Refresh"" onclick=""listRefresh()"">
                        <span class=""glyphicon glyphicon-refresh""></span>
                    </button>

                    <div class=""pull-right"" style=""margin-top:18px"">
                        <button id=""clear""");
                BeginWriteAttribute("title", " title=\"", 1756, "\"", 1764, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                data-original-title=""clear"" onclick=""listclear()"">
                            clear
                        </button>
                        <button type=""button"" id=""btnExport"" style=""background-color:skyblue"" class=""Export btn btn-sm btn-info""><span class=""glyphicon glyphicon-export""></span></button>
");
                WriteLiteral(@"
                    </div>
                </div>
            </div>
            <div class=""row"">
                <div class=""col-xs-12"">
                    <div id=""gd_productmoveregister"">
                        <div id=""Slno_grid""></div>
                    </div>
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e69ff19873f658b8908f6e0c8a9307b7a632e9110665", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e69ff19873f658b8908f6e0c8a9307b7a632e9111705", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e69ff19873f658b8908f6e0c8a9307b7a632e9112745", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e69ff19873f658b8908f6e0c8a9307b7a632e9113785", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4e69ff19873f658b8908f6e0c8a9307b7a632e9114825", async() => {
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
        var container = $(""#frm_slnoRpt"");
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
        //$('#btnExport').hide();
        $("".Export"").attr(""hdrtitle"", ""Serial No List"");
        $("".Export"").attr(""SubTreeId"", ""ICDSMRRPT"");

        Screen_Id = ""ICDSMRRPT"";
        // load_master_cod");
            WriteLiteral(@"e();
        var org_id = getlocalStorage('org_id');
        $('#ic_code').val(org_id);

        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        listgrid([]);
        $(""#btnExport"").kendoButton({
            click: function () {
                debugger;
                //$(""#salesreport_grid"").data(""kendoGrid"").saveAsExcel();
                ExportButtonClick();
            }
        })
    });

    $(function () {
        debugger;
        $('#refresh').click(function () {
            debugger;
            if ($(""#txt_Slno"").val() != """") {
                var formval = form_Serialize(""frm_slnoRpt"");
                var obj_val = JSON.parse(formval);
                var data = {};
                data.context = WebAPIProxy.getContext();
                data.context.Header = obj_val;
                //Item Master Edit Binding  start 18-05-2020
                var Context = data.context;
   ");
            WriteLiteral(@"             $.ajax({
                    type: ""POST"",
                    data: JSON.stringify({
                        userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId,
                        In_slno: Context.Header.In_slno,
                    }),
                    url: ""/PAWHSNEWSlnoRpt/ActualProcurementslnofetch"",
                    dataType: ""json"",
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        listgrid(response.context.SlnoLotDetail);
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

                kendoAlert(""Please Select An");
            WriteLiteral(@"y One Field"");
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
        data.screen_Id = ""ICDSMRRPT"";
        var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
    }
</script>

<script>
    function listpageloadfetch() {
        try {

            var formval = form_Serialize(""frm_slnoRpt"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
            }
            else");
            WriteLiteral(@" {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.FilterBy_Tovalue = ""."";
            if (obj_val.status_option == """" || obj_val.status_option == undefined) {
                obj_val.status_option = ""V"";
            }

            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            var colCount = $(""#Slno_grid"").find('.k-grid-header colgroup > col').length;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


    function ExportButtonClick() {
        debugger
        var grid = $(""#Slno_grid"").data(""kendoGrid"");
        if (grid.dataSource.total() == 0) {
            kendoAlert('No records available in the Grid to Export!!!');
        }
        else {
            grid.bind(""excelExport"", function (e) {
                debugger;
                e.workbook.fileName = ""Serial No Report.xlsx"";
                var rows1");
            WriteLiteral(@" = e.workbook.sheets[0];
                var sheet = e.workbook.sheets[0];
                var grid = $(""#Slno_grid"").data(""kendoGrid"");
                var data = grid.dataSource.data();
                var gridColumns = grid.columns;
                var columns = gridColumns.map(function (col) {
                    return {
                        value: col.title ? col.title : col.field,
                        autoWidth: true,
                        background: ""#7a7a7a"",
                        color: ""#fff""
                    };
                });
                var rows = [{ cells: columns, type: ""header"" }];

                for (var i = 0; i < data.length; i++) {
                    var rowCells = [];
                    for (var j = 0; j < gridColumns.length; j++) {
                        var cellValue = data[i][gridColumns[j].field];
                        rowCells.push({ value: cellValue });
                    }
                    rows.push({ cells: rowCells, type: ""da");
            WriteLiteral(@"ta"" });
                }
                sheet.rows = rows;
            });

            grid.saveAsExcel();
            kendoAlert('Exported Sucessfully');
        }
    }


    var status_Priority = [];
    function listgrid(data) {
        $(""#Slno_grid"").kendoGrid({
            dataSource: {
                data: data,
                schema: {
                    model: {
                        fields: {
                            Out_act_rowid: { type: ""int"", editable: false },
                            Out_lotno: { type: ""string"", editable: false },
                            Out_farmer_code: { type: ""string"", editable: false },
                            Out_farmer_name: { type: ""string"", editable: false },
                            Out_item_code: { type: ""string"", editable: false },
                            Out_item_name: { type: ""string"", editable: false },
                            Out_actual_qty: { type: ""string"", editable: false },
                         ");
            WriteLiteral(@"   Out_actual_price: { type: ""string"", editable: false },
                            Out_actual_value: { type: ""string"", editable: false },
                            Out_no_of_bags: { type: ""string"", editable: false },
                        }
                    }
                },
                pageSize: 20
            },

            height: 450,
            scrollable: true,
            sortable: true,
            pageable: {
                refresh: false,
                pageSizes: true,
                previousNext: false,
                buttonCount: 8
            },
            columns: [
                {
                    field: ""Out_act_rowid"",
                    title: ""rowid"",
                    width: 100,
                    hidden: true
                },
                {
                    field: ""Out_lotno"",
                    title: ""Lot No"",
                    width: 100
                },

                {
                    field: ""Out_fa");
            WriteLiteral(@"rmer_code"",
                    title: ""Farmer Code"",
                    width: 100,

                },
                {
                    field: ""Out_farmer_name"",
                    title: ""Farmer Name"",
                    width: 100

                },

                {
                    field: ""Out_item_code"",
                    title: ""Product Code"",
                    width: 100,
                    hidden: true,

                },

                {
                    field: ""Out_item_name"",
                    title: ""Product Name"",
                    width: 100                


                },

                {
                    field: ""Out_actual_qty"",
                    title: ""Actual Qty"",
                    width: 90,
                    attributes: { style: ""text-align:right;"" }

                },
                {
                    field: ""Out_actual_price"",
                    title: ""Actual Price"",
                    width: 90,");
            WriteLiteral(@"
                    attributes: { style: ""text-align:right;"" }

                },
                {
                    field: ""Out_actual_value"",
                    title: ""Actual Value"",
                    width: 90,
                    attributes: { style: ""text-align:right;"" }

                },
                {
                    field: ""Out_no_of_bags"",
                    title: ""No of Bags"",
                    width: 90,
                    attributes: { style: ""text-align:right;"" }

                },

            ],


        });

    }

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

            $('#frm_slnoRpt').find('input:text').val('');
            //location.reload();");
            WriteLiteral(@"
            var org_id = getlocalStorage('org_id');
            $('#ic_code').val(org_id);

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

            { ""dataCol"": ""ProductName"", ""controlId"": ""cmb_prdtname"", ""type"": ""Text"" },
            { ""dataCol"": ""ProductCode"", ""controlId"": ""cmb_prdtcode"", ""type"": ""Text"" }


        ];
        return control_Name;
    }
    function trans_input_data() {
        var trans_coll = [
            { ""trasfer"": ""Yes"", ""dataCol"": ""ic_code"", ""controlId"": ""ic_code"", ""grid_id"": """", ""grid_row_col"": """" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""ProductName"", ""controlId"": ""cmb_prdtname"", ""grid_id"": """", ""grid_row_col"": ""farmer_code"" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""ProductCode"", ""controlId"": ""cmb_prdtcode"", ");
            WriteLiteral(@"""grid_id"": """", ""grid_row_col"": ""farmer_name"" }
        ];
        return trans_coll;
    }
    function generate_Invoiceproduct_list(res) {
        var dataItem = $(""#Slno_grid"").data(""kendoGrid"").dataSource.data()[0];

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
