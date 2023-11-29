<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportViewerWebForm.aspx.cs" Inherits="ReportViewerForMvc.ReportViewerWebForm" %>


<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        #btnPrint {
            height: 26px;
            position: fixed;
            top: 6px;
            left: 465px;
        }

        #btnbill {
            height: 4%;
            width: 3%;
            position: fixed;
            top: 2%;
            left: 57%;
        }

        .destination-settings-change-button {
            visibility: hidden;
        }
    </style>
    <style type="text/css" media="print">
        * {
            display: none;
        }
    </style>
    <script src="CommonScripts/Print.js"></script>
    <script src="Scripts/jQuery-2.1.4.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
    <link href="~/CSS/bootstrap.min.css" rel="stylesheet" />
    <link href="~/CSS/AdminLTE.min.css" rel="stylesheet" />
    <link href="~/CSS/_all-skins.css" rel="stylesheet" />
    <link href="~/CSS/converse.css" rel="stylesheet" />
    <link href="~/CSS/myStyle.css" rel="stylesheet" />
    <link href="~/CSS/kendo.common.min.css" rel="stylesheet" />
    <link href="~/CSS/kendo.default.min.css" rel="stylesheet" />
    <%--    <script src="Print.js-1.0.18/src/js/print.js"></script>
    <script src="Print.js-1.0.18/dist/print.min.js"></script>
    <link href="Print.js-1.0.18/src/css/print.css" rel="stylesheet" />--%>
    <script>
        $(document).ready(function () {
            debugger;
            if (localStorage.Certificatetype == "" || localStorage.Certificatetype == null) {
                $('#btnPrint').hide();
                $('#btnbill').hide();
            }

            else {
                $('#btnPrint').show();
                $('#btnbill').show();

            }
            if (localStorage.Printstatus == "" || localStorage.Printstatus == null) {
                //$('#btnPrint').hide();
                $('#btnbill').hide();
            }
            else {
                //$('#btnPrint').show();
                $('#btnbill').show();
            }


            if (typeof (Storage) !== "undefined") {
                if (localStorage.Report_Name) {
                    if (localStorage.Report_Name == "CycleWiseCollection") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        //$("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "CollectionReport") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "MonetaryTransactions") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "RptYearWiseReport") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "RptCycleWise") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "RptMonthWiseMonetary") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "SessionWise") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "IncomeVsExpenditure") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "MilkmanMap") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ReceivableVsPayable") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "PA_CoveringLetter") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        //$("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ShareCertificate") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ClosureLetterNDC") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "SanctionLetter") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ForeclosureLetter") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ForeclosureLetter") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "DepositSlipGen") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "Disbursement") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "FarmerRegistration") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "FarmerProfile") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "MonthWiseFarmer") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "AllotmentRegister") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "CertificateRegister") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "IndexToMembers") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ANNUAL_RETURNS_MEMBERS") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ANNUAL_RETURNS_TRANSFERS") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "ANNUAL_DIVIDEND_REGISTER") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "TransferRegister") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();
                    }
                    else if (localStorage.Report_Name == "Rpt_invoice") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                        $('#btnbill').show();

                    }
                    else if (localStorage.Report_Name == "Rpt_InvoiceTax") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                        $("a[title='PDF']").parent().show();
                        $('#btnbill').show();

                    }
                    else if (localStorage.Report_Name == "Rpt_CreditIssue") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='Excel']").parent().hide();
                        $('#btnPrint').show();
                        $('#btnbill').show();

                    }
                    else if (localStorage.Report_Name == "RPT_IMAPREPORT") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();

                    }
                    else if (localStorage.Report_Name == "LRSPayment") {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                        $("a[title='PDF']").parent().hide();

                    }

                    else {
                        $("a[title='Word']").parent().hide();
                        $("a[title='PowerPoint']").parent().hide();
                        $("a[title='Data Feed']").parent().hide();
                    }

                }

                else {
                    $("a[title='Word']").parent().hide();
                    $("a[title='PowerPoint']").parent().hide();
                    $("a[title='Data Feed']").parent().hide();
                }


            }



        });



    </script>


</head>

<body style="margin: 0px; padding: 0px;">

    <form id="form1" runat="server">
        <div>
            <button type="button" id="btnPrint" class="btn btn-primary small" onclick="javascript:PrintBill();"><span class="btn-label"><i class="glyphicon glyphicon-upload"></i></span></button>
            <%-- <input type="button" id="btnPrint" class="btn btn-info fa fa-upload" onclick="javascript: PrintReport()" />--%>
            <img id="btnbill" alt="Print" src="images/docprt.jpg" style="margin-left:10%;" onclick="javascript:PrintReport();" />
            <%--<img id="btnbill" alt="Print" src="images/Print.jpg" onclick="javascript:PrintBill();" />--%>
            <asp:ScriptManager ID="ScriptManager1" runat="server">
                <Scripts>
                    <asp:ScriptReference Assembly="ReportViewerForMvc" Name="ReportViewerForMvc.Scripts.PostMessage.js" />
                </Scripts>
            </asp:ScriptManager>
            <rsweb:ReportViewer ID="ReportViewer1" runat="server" Style="width: 770px"></rsweb:ReportViewer>

        </div>
        <div id="printcontent" style="visibility: hidden">
        </div>
    </form>
    <script>
        // $(document).ready(function () {

        //var content = document.getElementById("VisibleReportContentReportViewer1_ctl09").innerHTML;
        //    //var stylecontent = document.getElementById("ReportViewer1_ctl09_ReportControl_styles").innerHTML;
        //    $("#printcontent").append('<html><head><title>' + document.title + '</title>');
        //    $("#printcontent").append('<html><head><style>' + stylecontent + '</style>');
        //    $("#printcontent").append('</head><body>');          
        //    $("#printcontent").append(content);
        //    $("#printcontent").append('</body></html>');
        //    console.log($("#printcontent").val());
        //});
        function PrintReport() {
            watermarking();


            var content = document.getElementById("VisibleReportContentReportViewer1_ctl09").innerHTML;
            var stylecontent = document.getElementById("ReportViewer1_ctl09_ReportControl_styles").innerHTML;
            var sOption = "toolbar=no,location=no,directories=no,menubar=no,scrollbars=0,width=120,height=120";
            //var head = document.getElementById("#r61bc541d-b1dd-4612-89b4-2b25a464af94 head").innerHTML;
            // Print the window            
            var objWindow = window.open("", "", sOption);
            // Write the div element to the window 
            objWindow.document.write('<html><head><title>' + document.title + '</title>');
            objWindow.document.write('<style>' + stylecontent + '</style>');
            objWindow.document.write('');

            objWindow.document.write('</head><body onload="Sys.Application.add_init()">');
            objWindow.document.write(content);
            objWindow.document.write('</body>');
            objWindow.document.write('</html>');
            var mycontent = "";
            mycontent += "<html><head><title>" + document.title + "</title>";
            //console.log(head);
            mycontent += "<html><head><style>" + stylecontent + "</style>";
            mycontent += "</head><body>";
            mycontent += "<div style='border:1px solid;margin-left:20px;margin-right:20px;margin-top:20px'>";
            mycontent += content + "</div></body></html>";

            console.log(mycontent);
            objWindow.document.close(); // Print the window  
            objWindow.focus();
            objWindow.print();
            objWindow.close();

        }
        function PrintBill() {

            //watermarking();


            //var content = document.getElementById("VisibleReportContentReportViewer1_ctl09").innerHTML;
            //var stylecontent = document.getElementById("ReportViewer1_ctl09_ReportControl_styles").innerHTML;
            //var sOption = "toolbar=no,location=no,directories=no,menubar=no,scrollbars=0,width=120,height=120";
            ////var head = document.getElementById("#r61bc541d-b1dd-4612-89b4-2b25a464af94 head").innerHTML;
            //// Print the window            
            //var objWindow = window.open("", "", sOption);
            //// Write the div element to the window 
            //objWindow.document.write('<html><head><title>' + document.title + '</title>');
            //objWindow.document.write('<style>' + stylecontent + '</style>');
            //objWindow.document.write('');

            //objWindow.document.write('</head><body onload="Sys.Application.add_init()">');
            //objWindow.document.write(content);
            //objWindow.document.write('</body>');
            //objWindow.document.write('</html>');
            //var mycontent = "";
            //mycontent += "<html><head><title>" + document.title + "</title>";
            ////console.log(head);
            //mycontent += "<html><head><style>" + stylecontent + "</style>";
            //mycontent += "</head><body>";
            //mycontent += "<div style='border:1px solid;margin-left:20px;margin-right:20px;margin-top:20px'>";
            //mycontent += content + "</div></body></html>";

            //console.log(mycontent);
            //objWindow.document.close(); // Print the window  
            //objWindow.focus();
            //objWindow.print();
            //objWindow.close();

            localStorage.print_status = true;
            var url = "Print/Print";
            window.parent.location.href = url;
        }

    </script>
    <script>

        function watermarking() {
            var elements = $("#P3cf3d8d2d546405fab1c72f7ff9668b2_1_oReportDiv").find("table");
            console.log(elements);

            var div = document.createElement("div");
            div.innerHTML = "Office Use Only";
            div.style.color = "#bbb";
            div.style.fontSize = "100px";
            div.style.position = "absolute";
            div.style.left = "0px";
            div.style.zIndex = "-1";
            div.style.marginTop = "-364px";
            div.style.paddingBottom = "101px";
            div.style.transform = "rotate(45deg)"; //standard
            div.style.msTransform = "rotate(45deg)"; //IE
            div.style.mozTransform = "rotate(45deg)"; //Firefox
            div.style.webkitTransform = "rotate(45deg)"; //Chrome
            div.style.oTransform = "rotate(45deg)"; //Opera


            var div2 = document.createElement("div");
            div2.innerHTML = "Office Use Only";
            div2.style.color = "#bbb";
            div2.style.fontSize = "100px";
            div2.style.position = "absolute";
            div2.style.left = "0px";
            div2.style.zIndex = "-1";
            div2.style.marginTop = "-1500px";
            div2.style.paddingBottom = "101px";
            div2.style.transform = "rotate(45deg)"; //standard
            div2.style.msTransform = "rotate(45deg)"; //IE
            div2.style.mozTransform = "rotate(45deg)"; //Firefox
            div2.style.webkitTransform = "rotate(45deg)"; //Chrome
            div2.style.oTransform = "rotate(45deg)"; //Opera

            $("#P3cf3d8d2d546405fab1c72f7ff9668b2_1_oReportDiv").find('table').eq(2).append(div2);
            $("#P3cf3d8d2d546405fab1c72f7ff9668b2_1_oReportDiv").find('table').eq(5).append(div);

        }

    </script>
</body>
</html>
