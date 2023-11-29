#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DownloadableTemplate\DownloadableTemplateList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1e77dbae423186ce927ea46c891d032adf6557fe"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_DownloadableTemplate_DownloadableTemplateList), @"mvc.1.0.view", @"/Views/DownloadableTemplate/DownloadableTemplateList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1e77dbae423186ce927ea46c891d032adf6557fe", @"/Views/DownloadableTemplate/DownloadableTemplateList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_DownloadableTemplate_DownloadableTemplateList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/AdvanceFilter.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DownloadableTemplate\DownloadableTemplateList.cshtml"
  
    ViewBag.List = "Downloadable Templates";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<div class=""row"">
    <div class=""col-xs-12"">
        <div id=""temp_grid"">
            <div id=""Template_Grid""></div>
        </div>
    </div>
</div>
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        menuId = getlocalStorage(""MenuId"");
        $("".adv_filter"").attr(""hdrtitle"", ""Template List Record"");
        $("".adv_filter"").attr(""fltid"", ""TmplStp"");
        $("".Export"").attr(""hdrtitle"", ""Templates"");
        $("".Export"").attr(""SubTreeId"", ""DOWN_TMPL"");
        $(""#hide_div"").hide();
        Screen_Id = ""TEMPLATES"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);       
    });
    click_act_name = ""DownloadableTemplateForm"";
    click_ctrl_name = ""DownloadableTemplate"";
    form_list_url = '/' + click_ctrl_name + '/' + click_act_name;
</script>
<script>
    var gridRowID = -1;
    function sel_checkbox() {
        gridRowID++;
        return '<input id=""chk_sel_' + gridRowID + '"" cla");
            WriteLiteral(@"ss=""checkbox"" type=""checkbox"" />';
    }

    function listgrid(data) {
        try {
            gridRowID = -1;
            data = addRandomNum(data);
            $(""#Template_Grid"").kendoGrid({
                dataSource: {
                    data: data,
                    pageSize: 10,
                    schema: {
                        model: {
                            fields: {
                                menu_rowid: { type: ""string"" },
                                menu_name: { type: ""string"" },
                                tmpl_rowid: { type: ""string"" },
                                type_code: { type: ""string"" },
                                type_desc: { type: ""string"" },
                                seq_no: { type: ""string"" },
                                template_name: { type: ""string"" },
                                note: { type: ""string"" },
                                file_path: { type: ""string"" },
                            }
           ");
            WriteLiteral(@"             }
                    },
                   
                },
                dataBound: function (o) {
                    reset_Selected_GridRows(""Template_Grid"", o);
                },
                toolbar: ""<button type= 'button' id = 'Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                excelExport: function (e) {
                    var gd = $(""#Template_Grid"").data(""kendoGrid"");
                    var len = gd.dataSource._data.length;

                    var chkall = $('#chkall').is(':checked');
                    var chkfilter = $('#chkfilter').is(':checked');
                    var chktemp = $('#chktemp').is(':checked');
                    var twokendobox = true;
                    gd.dataSource.pageSize(len);
                    if (e.sender.dataSource._data.length == len) {
                        twokendobox = false;
              ");
            WriteLiteral(@"          exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                    }
                    else {
                        exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                    }
                    gd.dataSource.pageSize('10');
                    return false;
                },
                filterable: {
                    enabled: true,
                    delay: 1500,
                    mode: ""menu, row"",
                    height: 200,
                    click: function (e) {
                        var gd = $(""#Template_Grid"").data(""kendoGrid"");
                        filter_row(gd);
                    }
                },
                filterMenuInit: function (e) {
                    var gd = $(""#Template_Grid"").data(""kendoGrid"");
                    filter_row(gd);
                },
                height: 470,
                scrollable: true,
                selectable:true,
                sortable: {
   ");
            WriteLiteral(@"                 mode: ""multiple"",
                    dir: ""asc""
                },
                pageable: {
                    refresh: false,
                    pageSizes: true,
                    buttonCount: 5
                },
                change: selectRow,
                navigatable: true,
                groupable: false,
                columns: [
                     {
                         field: ""tmpl_rowid"",
                         title: ""Menu name"",
                         hidden: false,
                         width: 200,
                         hidden:true,
                     },
                    {
                        field: ""menu_name"",
                        title: ""Menu name"",
                        hidden: false,
                        width: 200,
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
          ");
            WriteLiteral(@"                  }
                        },
                    },
                {
                    field: ""type_desc"",
                    title: ""Type desc"",
                    hidden: false,
                    width: 100,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                },
                 {
                     field: ""template_name"",
                     title: ""Template name"",
                     hidden: false,
                     width: 200,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     },
                 },
                 {
                     field: ""note"",
                     title: ""Note"",
                     hidd");
            WriteLiteral(@"en: false,
                     width: 100,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     },
                 }]
            });

            $("".k-dropdown-operator"").css('display', 'none');

            $(""#Template_Grid .k-input"").attr('disabled', 'false');          

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


    $(""#btn_Edit"").bind(""click"", function (e) {
        getSerializedSelectedRows('edit');        
    });

    $(""#btn_View"").bind(""click"", function (e) {
        getSerializedSelectedRows('view');       
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../DownloadableTemplate/DownloadableTemplateForm"";
    });
   
    function selectRow() {
        var grid = $(""#Templa");
            WriteLiteral(@"te_Grid"").data(""kendoGrid"");
        var selectedItem = grid.dataItem(grid.select());
        setlocalStorage(""ls_pageList"", selectedItem);
    }

    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }
                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../DownloadableTemplate/DownloadableTemplateForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../DownloadableTemplate/DownloadableTemplateForm"";
                    }
                }
            }
        }
        catch (err) {
        }
    }

   

    function listpageloadfetch(");
            WriteLiteral(@"status_code) {
        try {
            var data = {};
            data.status = """";
            var Document_detail = ajaxcall_param_new(""/DownloadableTemplate/fetch_TemlateList"", data);
            if (Document_detail != undefined) {
                var Document_data = JSON.parse(Document_detail);
                var data = JSON.parse(Document_data.result);
                if (Document_data.success == true) {
                    $(""#temp_grid"").empty();
                    $(""#temp_grid"").append(""<div id='Template_Grid'></div>"");
                    if (data == null) {
                        listgrid([]);
                    }
                    else {
                        listgrid(data);
                    }
                }
                else {
                    var message = Document_data.msg;
                    kendoAlert(message);
                    listgrid([]);
                }
            }
            else {
                listgrid([]);
            }
     ");
            WriteLiteral(@"   }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


    function listRefresh() {
        try {
            listpageloadfetch();
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>

");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1e77dbae423186ce927ea46c891d032adf6557fe14160", async() => {
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