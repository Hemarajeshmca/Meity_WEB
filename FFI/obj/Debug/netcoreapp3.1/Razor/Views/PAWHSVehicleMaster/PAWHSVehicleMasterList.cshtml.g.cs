#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSVehicleMaster\PAWHSVehicleMasterList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9de4a4a204d20705fe74a8bfae26cdb7f18e8168"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSVehicleMaster_PAWHSVehicleMasterList), @"mvc.1.0.view", @"/Views/PAWHSVehicleMaster/PAWHSVehicleMasterList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9de4a4a204d20705fe74a8bfae26cdb7f18e8168", @"/Views/PAWHSVehicleMaster/PAWHSVehicleMasterList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSVehicleMaster_PAWHSVehicleMasterList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Vehicle_Master_PAWHS_getVehicle_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Vehicle_Master_PAWHS_getVehicleList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Vehicle_Master_PAWHS_saveVehicle_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getVehicle_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getVehicleList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_saveVehicle_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/ExportExcel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHSVehicleMaster.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSVehicleMaster\PAWHSVehicleMasterList.cshtml"
  
    ViewBag.List = "Vehicle Master";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            WriteLiteral("    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"VehicleMaster\"></div>\r\n        </div>\r\n    </div>\r\n");
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e81687754", async() => {
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e81688793", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e81689832", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816810871", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816811911", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816812951", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816813991", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816815031", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816816071", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9de4a4a204d20705fe74a8bfae26cdb7f18e816817111", async() => {
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
    var data = [];
    //    action: """", vehicle_code: """", manufacturer_name: """", vehicle_reg_no: """", max_carry_weight: """",
    //    loadspce_volume: """", loadfloor_length: """", loadfloor_width: """",
    //    gps_tracking_id: """", imei_no: """", sim_no: """",
    //    status: """",
    //}];
    function VehicleList(data) {
        try {
            $(""#VehicleMaster"").kendoGrid({
                excel: {
                    fileName: ""Vehicle Master.xlsx"",
                    filterable: true,
                    allPages: false
                },
                dataSource: {
                    data: data,

                    schema: {
                        model: {
                            fields: {
                                Out_vehicle_code: { type: ""string"" },
                                Out_vehicle_regno: { type: ""string""},
                                Out_vehicle_manf_name: { type: ""string"" },
                                Out_max_carrry_weight: { type:");
            WriteLiteral(@" ""string"" },
                                Out_loadspace_height: { type: ""string"" },
                                Out_loadspace_width: { type: ""string"" },
                                Out_loadspace_length: { type: ""string"" },
                                Out_gps_id: { type: ""string"" },
                                Out_imei_no: {type:""string""},
                                Out_sim_no: {type:""string""},


                            }
                        }
                    },

                    pageSize: 20,
                    change: function (e) {
                        setTimeout(function () {
                            var gd = $(""#VehicleMaster"").data(""kendoGrid"");
                            filter_row(gd);
                            $('.k-i-close').css('display', 'none');
                            $('button.k-button-icon').css('display', 'none');
                            $('#VehicleMaster .k-input').prop('disabled', false);
                          ");
            WriteLiteral(@"  $('#VehicleMaster .k-input').prop('readonly', true);

                        }, 1);
                    },
                },
                toolbar: ""<button type= 'button' id ='Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                excelExport: function (e) {
                    debugger;                 
                    
                 
                    var gd = $(""#VehicleMaster"").data(""kendoGrid"");
                    var gd_fi = $(""#VehicleMaster"").data(""kendoGrid"").dataSource;

                    var filters = gd_fi.filter();
                    var allData = gd_fi.data();
                    var query = new kendo.data.Query(allData);
                    var data = query.filter(filters).data;
                    var data_tt = gd.dataSource.data();
                    //var data = gd.dataSource.data();
                    //if (data.length > 0) {
");
            WriteLiteral(@"
                        var sheet = e.workbook.sheets[0];
                    var gridColumns = gd.columns;

                    var columns = gridColumns.map(function (col) {                      
                        var hidden_vl = col.hidden;
                        if (typeof(hidden_vl) == ""undefined"") {
                            return {
                                value: col.title ? col.title : col.field,
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

   ");
            WriteLiteral(@"                             var fieldName = gd.columns[j].hidden;
                                if (typeof (fieldName) === ""undefined"") {
                                    var cellValue = data[i][gridColumns[j].field];
                                    rowCells.push({ value: cellValue });
                                }
                            }
                            rows.push({ cells: rowCells, type: ""data"" });
                        }


                        //var sdata = {};
                        //sdata.griddata = JSON.stringify(rows);                   

                        sheet.rows = rows;
                    //}
                    //else {
                    //    kendoAlert(""No data Found"");
                    //    return false;
                    //}


                    //gd.dataSource.pageSize('10');
                    //e.preventDefault();
                    return false;
                },
                filterable: {
              ");
            WriteLiteral(@"      enabled: true,
                    delay: 1500,
                    mode: ""menu, row"",
                    height: 200,
                    click: function (e) {
                        var gd = $(""#VehicleMaster"").data(""kendoGrid"");
                        filter_row(gd);
                    }
                },
                filterMenuInit: function (e) {
                    var gd = $(""#VehicleMaster"").data(""kendoGrid"");
                    filter_row(gd);
                },
                dataBound: function (o) {
                    //var gd = $(""#VehicleMaster"").data(""kendoGrid"");
                    //for (var i = 0; i < gd.columns.length; i++) {
                    //    gd.showColumn(i);
                    //}
                    //$(""div.k-group-indicator"").each(function (i, v) {
                    //    gd.hideColumn($(v).data(""field""));
                    //})

                    //resultData = e.sender._data;
                    //var rows = $('#VehicleMaster')");
            WriteLiteral(@".data('kendoGrid').tbody.children();
                    //setColor(rows, resultData);
                },
                height: 450,
                sortable: true,
                selectable: true,
                //change: onChangeSelection,
                selectable: ""singl"",   //  Grid Row Selection
                pageable: {
                    refresh: false,
                    pageSizes: true,
                    buttonCount: 5
                },
                navigatable: true,
                groupable: false,
                change: selectRow,
                columns: [

                {
                        field: ""Out_vehicle_code"",
                    title: ""Vehicle Code"",
                    width: 120,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                },
                {
        ");
            WriteLiteral(@"            field: ""Out_vehicle_regno"",
                    title: ""Vehicle Regn. No."",
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                    width: 140
                },
            {
                field: ""Out_vehicle_manf_name"",
                title: ""Manufacturer Name"",
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 140
            },

            {
                field: ""Out_max_carrry_weight"",
                title: ""Max. Carry Weight(in Kgs)"",
                attributes: { style: ""text-align:right;"" },
                editor: function (container, options) {
                    numeric_editor(container, options.field, '50', '0');
          ");
            WriteLiteral(@"      },
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    },
                   
                },
                width: 200
            },
            //{
            //    field: ""loadspce_volume"",
            //    title: ""LoadSpace Volume"",
            //    filterable: {
            //        cell: {
            //            operator: ""contains"",
            //            inputWidth: 1500
            //        }
            //    },
            //    width: 200
            //},
             {
                 field: ""Out_loadspace_height"",
                 title: ""Load Floor Height(in m^3)"",
                 attributes: { style: ""text-align:right;"" },
                 editor: function (container, options) {
                     numeric_editor(container, options.field, '50', '0');
                 },
                 filterable: {
                     cell: {");
            WriteLiteral(@"
                         operator: ""contains"",
                         inputWidth: 1500
                     },
                    
                 },
                 width: 200
             },
            {
                field: ""Out_loadspace_length"",
                title: ""Load Floor Length(in mtrs)"",
                attributes: { style: ""text-align:right;"" },
                editor: function (container, options) {
                    numeric_editor(container, options.field, '50', '0');
                },
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    },
                    
                },
                width: 200
            },
            {
                field: ""Out_loadspace_width"",
                title: ""Load Floor Width (in mtrs)"",
                attributes: { style: ""text-align:right;"" },
                editor: function (container, options)");
            WriteLiteral(@" {
                    numeric_editor(container, options.field, '50', '0');
                },
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 200
            },
            {
                field: ""Out_gps_id"",
                title: ""GPS Tracking ID"",
                width: 140,
                attributes: { style: ""text-align:right;"" },
                editor: function (container, options) {
                    numeric_editor(container, options.field, '50', '0');
                },
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    },
                    
                },
            },
            {
                field: ""Out_imei_no"",
                title: ""IMEI No."",
                filterable: {
 ");
            WriteLiteral(@"                   cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 100
            },
            {
                field: ""Out_sim_no"",
                title: ""SIM No."",
                attributes: { style: ""text-align:right;"" },
                editor: function (container, options) {
                    numeric_editor(container, options.field, '50', '0');
                },
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 100
            },
                    {
                        field: ""Out_vehicle_rowid"",
                        title: ""Status"",
                        hidden: true,
                        filterable: {
                            cell: {
                                operator: ""contains");
            WriteLiteral(@""",
                                inputWidth: 1500
                            }
                        },
                        width: 100
                    },
             {
                 field: ""Out_status_code"",
                 title: ""Status"",
                 hidden:true,
                 filterable: {
                     cell: {
                         operator: ""contains"",
                         inputWidth: 1500
                     }
                 },
                 width: 100
             }
                ],
            });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#VehicleMaster .k-input"").attr('disabled', 'false');

            var gridRowID = 1;
            function sel_checkbox() {
                gridRowID++;
                return '<input id=""chk_sel_' + gridRowID + '"" class=""checkbox"" type=""checkbox"" />';
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err");
            WriteLiteral(@");
        }
    }
    function selectRow() {
        try {
            var grid = $(""#VehicleMaster"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    $(""#btn_Edit"").bind(""click"", function () {
        btn_onClick('Edit');
        getSerializedSelectedRows('edit');
    });

    $(""#btn_View"").bind(""click"", function () {
        btn_onClick('View');
        getSerializedSelectedRows('View');
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../PAWHSVehicleMaster/PAWHSVehicleMasterForm"";
    });

    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (i");
            WriteLiteral(@"tems.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../PAWHSVehicleMaster/PAWHSVehicleMasterForm"";
                    }
                    else if (mode == ""View"") {
                        btn_onClick('View');
                        location.href = ""../PAWHSVehicleMaster/PAWHSVehicleMasterForm"";
                    }
                }
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>

<script>
    $(document).ready(function () {
        //$(""#btn_new"").hide();
      //  VehicleList();
        $("".adv_filter"").attr(""hdrtitle"", ""Vehicle Master Record"");
        $("".adv_filter"").attr(""fltid"", ""VEHMAS"");
        $("".Export"").attr(""hdrtitle"", ""Vehicle Master List"");
        $("".Export"").attr(""hdrtitle"", ""Ve");
            WriteLiteral(@"hicle Master List"");
        $("".Export"").attr(""SubTreeId"", ""PWVEHIMAS"");
        list_grid_id = ""VehicleMaster"";
        listpageloadfetch();
        Screen_Id = ""PWVEHIMAS"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });


    function listpageloadfetch() {
        debugger;
        try {
            var formval = form_Serialize(""VehicleMaster"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_FromValue = ""."";
            }
            obj_val.FilterBy_ToValue = ""."";

            var data = {};
            data.context = WebAPIP");
            WriteLiteral(@"roxy.getContext();;
            data.context.Filter = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                url: '/PAWHSVehicleMaster/PAWHSVehicleMasterListfetch',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    //var list = JSON.parse(response);
                    if (response.context.List != null) {
                        generate_Vehicle_list(response.context.List);
                    }
                    else {
                        VehicleList([]);
                    }
");
            WriteLiteral(@"                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

</script>

<script>
    function generate_Vehicle_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#VehicleMaster"").empty();
                VehicleList(data);
            }
            else {
                VehicleList([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function listRefresh() {
        try {
            setlocalStorage('flt_condition', """");
            listpageloadfetch();
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
