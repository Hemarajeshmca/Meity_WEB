#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\AttributesGroupMap\AttributesGroupMaplist.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "48a4e45da1569a8748c4395c5006bdc0f41d9e8c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_AttributesGroupMap_AttributesGroupMaplist), @"mvc.1.0.view", @"/Views/AttributesGroupMap/AttributesGroupMaplist.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"48a4e45da1569a8748c4395c5006bdc0f41d9e8c", @"/Views/AttributesGroupMap/AttributesGroupMaplist.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_AttributesGroupMap_AttributesGroupMaplist : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_attr_group_map"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\AttributesGroupMap\AttributesGroupMaplist.cshtml"
  
    ViewBag.List = "Attributes Group Mapping";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "48a4e45da1569a8748c4395c5006bdc0f41d9e8c5847", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_attribute_list\">\r\n                <div id=\"Attributelist_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral("\r\n    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "48a4e45da1569a8748c4395c5006bdc0f41d9e8c7635", async() => {
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
     var menuId = """";
     var permission = """";
        $(document).ready(function () {
            $("".adv_filter"").attr(""hdrtitle"", ""Attributes Group Mapping List Record"");
            $("".adv_filter"").attr(""fltid"", ""AttrGmap"");
            $("".Export"").attr(""hdrtitle"", ""Attributes Group Mapping List"");            
            $("".Export"").attr(""SubTreeId"", ""ATTR_GRP_ACT"");
            list_grid_id = ""Attributelist_grid"";

            Screen_Id = ""ATTR_GRP_MAP"";
            permission = sec_Permission(Screen_Id);
            page_load_list_permission(permission);
            setlocalStorage(""ls_pageList"", """");
            filterhover();
            listpageloadfetch();
        });

    </script>

   <script>
       function listpageloadfetch() {
           debugger;
        try{
        var formval = form_Serialize(""frm_attr_group_map"");
        var obj_val = JSON.parse(formval);
        obj_val.FilterBy_Option = ""ALL"";
        obj_val.FilterBy_Code = ""."";
        i");
            WriteLiteral(@"f (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
            obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
        }
        else {
            obj_val.FilterBy_FromValue = ""."";
        }
        obj_val.FilterBy_ToValue = ""."";

        var data = {};
        data.context = WebAPIProxy.getContext();;
        data.context.Filter = obj_val;
            var Context = data.context;

             var data = { user: Context.userId, org: Context.orgnId, locn: Context.locnId, lang: Context.localeId, filterby_option: Context.Filter.FilterBy_Option, filterby_code: Context.Filter.FilterBy_Code, filterby_fromvalue: Context.Filter.FilterBy_FromValue, filterby_tovalue: Context.Filter.FilterBy_ToValue };

          $.ajax({
          url: '");
#nullable restore
#line 61 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\AttributesGroupMap\AttributesGroupMaplist.cshtml"
           Write(Url.Action("AttributeGroupList", "AttributesGroupMap"));

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
                    generate_AttrGroupactivity_list(response1.context.List);
                }
                else {
                    listgrid([]);
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }
        });



            // HTTP Get Api Purpose Commented by Venkat 10-9-2020 Start
            //$.ajax({
            //    type: ""POST"",
            //    url: '/AttributesGroupMap/AttributeGroupList',
            //    dataType: 'json',
            //    data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_");
            WriteLiteral(@"Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
            //    contentType: 'application/json; charset=utf-8',
            //    success: function (response) {
            //        //var list = JSON.parse(response);
            //        if (response.context.List != null) {
            //            generate_AttrGroupactivity_list(response.context.List);
            //        }
            //        else {
            //            listgrid([]);
            //        }
            //    },
            //    error: function (er) {
            //        alert(er)
            //        console.log(er)
            //    }

            //});
            // HTTP Get Api Purpose Commented by Venkat 10-9-2020 End

        //setlocalStorage('flt_condition', """");
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    var status_Priority = [];
    function listgrid(data) {
    ");
            WriteLiteral(@"    try{
        $.each(data, function (index, value) {
            var flag = false;
            $.each(status_Priority, function (sindex, svalue) {
                if (svalue == value.status_desc) {
                    flag = true;
                }
            });
            if (flag == false) {
                status_Priority.push(value.status_desc);
            }
        });

        $(""#Attributelist_grid"").kendoGrid(
            {
                dataSource: {
                    data: data,
                    pageSize: 20,
                    change: function (e) {
                        setTimeout(function () {
                            var gd = $(""#Attributelist_grid"").data(""kendoGrid"");
                            filter_row(gd);
                            $('.k-i-close').css('display', 'none');
                            $('button.k-button-icon').css('display', 'none');
                            $('#Attributelist_grid .k-input').prop('disabled', false);
          ");
            WriteLiteral(@"                  $('#Attributelist_grid .k-input').prop('readonly', true);
                        }, 1);
                    },
                },
                toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                excelExport: function (e) {
                    var gd = $(""#Attributelist_grid"").data(""kendoGrid"");
                    var len = gd.dataSource._data.length;
                    var chkall = $('#chkall').is(':checked');
                    var chkfilter = $('#chkfilter').is(':checked');
                    var chktemp = $('#chktemp').is(':checked');
                    var twokendobox = true;
                    gd.dataSource.pageSize(len);
                    if (e.sender.dataSource._data.length == len) {
                        twokendobox = false;
                        exportfunction(e, chkall, chkfilter, chktemp, twoke");
            WriteLiteral(@"ndobox, gd);
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
                        var gd = $(""#Attributelist_grid"").data(""kendoGrid"");
                        filter_row(gd);
                    }
                },
                filterMenuInit: function (e) {
                    var gd = $(""#Attributelist_grid"").data(""kendoGrid"");
                    filter_row(gd);
                },
                change: selectRow,
                height: 450,
                sortable: true,
                selectable: true,
                selectable: ""singl"",   //  Grid ");
            WriteLiteral(@"Row Selection
                pageable: {
                    refresh: false,
                    pageSizes: true,
                    buttonCount: 5
                },
                navigatable: true,
                groupable: false,
                columns: [
                            {
                        field: ""Out_entitygrpactivity_rowid"",
                                title: ""row Id"",
                                hidden: true, width: 1,
                            },
                         {
                             field: ""Out_activity_desc"",
                             title: ""Activity/Screen Name"",
                             filterable: {
                                 cell: {
                                     operator: ""contains"",
                                     inputwidth: 1500
                                 }
                             }
                         },
                         {
                             field: ""Out_act");
            WriteLiteral(@"ivity_code"",
                             title: ""activity_desc"",
                             hidden: true, width: 1,
                         },
                         {
                             field: ""Out_entitygrp_code"",
                             title: ""entitygrp_code"",
                             hidden: true, width: 1,
                         },
                          {
                              field: ""Out_entitygrp_name"",
                              title: ""Mapped Attribute Group(s)"",
                              filterable: {
                                  cell: {
                                      operator: ""contains"",
                                      inputwidth: 1500
                                  }
                              }
                          },
                          {
                              field: ""Out_row_slno"",
                              title: ""row_slno"",
                              hidden: true, width: 1,
            WriteLiteral(@"
                          },
                           {
                               field: ""Out_mode_flag"",
                               title: ""mode_flag"",
                               hidden: true, width: 1,
                           },
                            {
                                field: ""Out_status_code"",
                                title: ""status_code"",
                                hidden: true,
                                width: 1,
                            },
                            {
                                field: ""Out_status_desc"",
                                title: ""status_desc"",
                                hidden: true,
                                width: 1,
                            },
                ]
            });

        $("".k-dropdown-operator"").css('display', 'none');
        $(""#Attributelist_grid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root");
            WriteLiteral(@"(arguments.callee.name, err);
        }
    }

    function statusFilter(element) {    // Dropdown list functionality
        element.kendoDropDownList({
            dataSource: status_Priority,
            optionLabel: ""--Select Value--""
        });
    }
    function selectRow() {
        try {
        var grid = $(""#Attributelist_grid"").data(""kendoGrid"");
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
        getSerializedSelectedRows('edit');
    });

    $(""#btn_View"").bind(""click"", function () {
        getSerializedSelectedRows('view');
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../AttributesGroupMap/AttributeGroupMapForm"";
    });

    function getSerializedSelectedRows(mode");
            WriteLiteral(@") {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }
                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../AttributesGroupMap/AttributeGroupMapForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../AttributesGroupMap/AttributeGroupMapForm"";
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
    function generate_AttrGroupactivity_list(res) {
        try{
        if (res != null) {
            var data = changedataType(res);
            $(""#");
            WriteLiteral(@"gd_attribute_list"").empty();
            $(""#gd_attribute_list"").append(""<div id='Attributelist_grid'></div>"");
            listgrid(data);
        }
        else {
            listgrid([]);
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