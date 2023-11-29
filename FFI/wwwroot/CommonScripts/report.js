function btn_RPTVIEW() {
    var mandatory_check = true;
    var validate_msg = "";
    var report_param1 = [];
    var report_result = {};
    var validate = true;
    if (mandatory_check == true) {
        var report_param = JSON.stringify($("#grid_Drop_list").data("kendoGrid").dataSource.data());
        report_param = JSON.parse(report_param);
        $.each(report_param, function (key, val) {
            if (report_param[key].param_type == "ET_DATE") {
                var date_val = report_param[key].param_value_desc;
                var localDate = new Date(date_val);
                var select_date = convert(localDate);
                var param_value = getFormated_Date(select_date)
                if (param_value !== 'undefined' && param_value !== null && param_value != "aN/aN/NaN") {
                    report_param1.push({ datafield: report_param[key].param_name, value: param_value });
                }
                else {
                    validate = false;
                }
            }
            else if (report_param[key].param_type == "ET_TXT") {

            }
            else {
                if (report_param[key].param_value_desc !== 'undefined' && report_param[key].param_value_desc !== null && report_param[key].param_value_desc !== "aN/aN/NaN") {
                    report_param1.push({ datafield: report_param[key].param_name, value: report_param[key].param_value_desc });
                }
                else {
                    validate = false;
                }
            }
            if (report_param[key].param_type == "ET_QCD") {
                if (report_param[key].param_name == "session" && report_param[key].param_value_desc == "") {
                    report_param1[key].value = "ALL";
                }
                if (report_param[key].param_name == "months" && report_param[key].param_value_desc == "") {
                    validate = false;
                }
            }
            if (report_param[key].param_type == "ET_NUM") {
                if (report_param[key].param_value_desc == "") {
                    if (report_param[key].param_name == "Milk_Rate_Cow" && report_param[key].param_value_desc == "") {
                        report_param1[key].value = 0;
                    }
                    if (report_param[key].param_name == "Milk_Rate_Buffalo" && report_param[key].param_value_desc == "") {
                        report_param1[key].value = 0;
                    }
                }
            }
        });
        if (validate) {
            var context = WebAPIProxy.getContext();

            report_param1.push({ datafield: "orgnId", value: context.orgnId });
            report_param1.push({ datafield: "locnId", value: context.locnId });
            report_param1.push({ datafield: "userId", value: context.userId });
            report_param1.push({ datafield: "localeId", value: context.localeId });
            report_result.report_param = JSON.stringify(report_param1);
            report_result.report_file = $("#txtreportsource").val();
            localStorage.Report_Name = $("#txtreportsource").val();
            localStorage.Report_Name = $("#txtreportsource").val()
            var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
            $("#report").empty();
            $("#rpt").append("<div id='report'></div>");
            $("#rpt_div").load(a);
        }
        else {
            kendoAlert("Provide All Report Parameter");
        }
    }
}



function convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}

function getFormated_Date(date) {   //get DD/MM/YYYY or MM/DD/YYYYY
    if (date != "" || date != undefined) {
        var d = date.split("-");
        //return d[1] + "/" + d[0] + "/" + d[2];

        return d[1] + "/" + d[2] + "/" + d[0];
    }

}


function btn_MLK_Advice() {
    var context = WebAPIProxy.getContext();
    if (context.orgnId != "AG009") {
        var mandatory_check = true;

        var report_param = [];
        var report_result = {};

        // var context = WebAPIProxy.getContext();
        report_param.push({ datafield: "payment_no", value: $("#txtcommon_id").val() });
        report_param.push({ datafield: "orgnId", value: context.orgnId });
        report_param.push({ datafield: "locnId", value: context.locnId });
        report_param.push({ datafield: "userId", value: context.userId });
        report_param.push({ datafield: "localeId", value: context.localeId });

        report_result.report_param = JSON.stringify(report_param);
        report_result.report_file = "PA_CoveringLetter";
        localStorage.Report_Name = "PA_CoveringLetter"
        var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);
    }

    else {
        var mandatory_check = true;

        var report_param = [];
        var report_result = {};

        //var context = WebAPIProxy.getContext();
        report_param.push({ datafield: "payment_no", value: $("#txtcommon_id").val() });
        report_param.push({ datafield: "orgnId", value: context.orgnId });
        report_param.push({ datafield: "locnId", value: context.locnId });
        report_param.push({ datafield: "userId", value: context.userId });
        report_param.push({ datafield: "localeId", value: context.localeId });

        report_result.report_param = JSON.stringify(report_param);
        report_result.report_file = "NCCUPA_CoveringLetter";
        localStorage.Report_Name = "NCCUPA_CoveringLetter"
        var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);
    }
}
function btn_Sharecert_Print() {
    var mandatory_check = true;
    var context = WebAPIProxy.getContext();
    var report_param1 = [];
    var report_result = {};
    var report_param = JSON.stringify($("#grid_Drop_list").data("kendoGrid").dataSource.data());
    report_param = JSON.parse(report_param);
    if (report_param.length == 0) {

        kendoAlert("Atleast One Record Needs To Be Present");

    }
    else {
        localStorage.Certificatetype = $('#cmb_update').data("kendoComboBox").value();
        report_param1.push({ datafield: "certificate_type", value: $('#cmb_update').data("kendoComboBox").value() });
        report_param1.push({ datafield: "orgnId", value: context.orgnId });
        report_param1.push({ datafield: "locnId", value: context.locnId });
        report_param1.push({ datafield: "userId", value: context.userId });
        report_param1.push({ datafield: "localeId", value: context.localeId });
        report_result.report_param = JSON.stringify(report_param1);
        report_result.report_file = "ShareCertificate";
        localStorage.Report_Name = "ShareCertificate";
        var a = "/Reportlist/PrintView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);


        //try {
        //    $("#txtMode").val('U');
        //    save();
        //}
        //catch (err) {
        //    javascript_log4j_root(arguments.callee.name, err);
        //}
    }
}
function ClosureLetterNDC() {
    var mandatory_check = true;
    var context = WebAPIProxy.getContext();
    var report_param1 = [];
    var report_result = {};


    report_param1.push({ datafield: "orgnId", value: context.orgnId });
    report_param1.push({ datafield: "locnId", value: context.locnId });
    report_param1.push({ datafield: "userId", value: context.userId });
    report_param1.push({ datafield: "localeId", value: context.localeId });
    report_result.report_param = JSON.stringify(report_param1);
    report_result.report_file = "ClosureLetterNDC";
    localStorage.Report_Name = "ClosureLetterNDC";
    var a = "/Reportlist/PrintView?receiveData=" + JSON.stringify(report_result);
    $("#report").empty();
    $("#rpt").append("<div id='report'></div>");
    $("#rpt_div").load(a);


    //try {
    //    $("#txtMode").val('U');
    //    save();
    //}
    //catch (err) {
    //    javascript_log4j_root(arguments.callee.name, err);
    //}
}


function btn_SanctionLet_Print() {
    var mandatory_check = true;
    var context = WebAPIProxy.getContext();
    var report_param1 = [];
    var report_result = {};
    var report_param = JSON.stringify($("#SanctionList_grid").data("kendoGrid").dataSource.data());
    report_param = JSON.parse(report_param);

    if (report_param.length == 0) {

        kendoAlert("Atleast One Record Needs To Be Present");

    }
    else {
        report_param1.push({ datafield: "orgnId", value: context.orgnId });
        report_param1.push({ datafield: "locnId", value: context.locnId });
        report_param1.push({ datafield: "userId", value: context.userId });
        report_param1.push({ datafield: "localeId", value: context.localeId });
        report_result.report_param = JSON.stringify(report_param1);
        report_result.report_file = "SanctionLetter";
        localStorage.Report_Name = "SanctionLetter";
        var a = "/Reportlist/PrintView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);
    }



}

function Foreclosure() {

    var mandatory_check = true;
    var report_param = [];
    var report_result = {};
    var context = WebAPIProxy.getContext();
    report_param.push({ datafield: "principle_due", value: localStorage.principle_due });
    report_param.push({ datafield: "valid_until", value: localStorage.valid_until });
    report_param.push({ datafield: "waive_amount", value: localStorage.waive_amount });
    report_param.push({ datafield: "other_charges", value: localStorage.other_charges });
    report_param.push({ datafield: "txtPrinc_out", value: localStorage.txtPrinc_out });
    report_param.push({ datafield: "loan_no", value: localStorage.loan_no });

    report_param.push({ datafield: "orgnId", value: context.orgnId });
    report_param.push({ datafield: "locnId", value: context.locnId });
    report_param.push({ datafield: "userId", value: context.userId });
    report_param.push({ datafield: "localeId", value: context.localeId });

    report_result.report_param = JSON.stringify(report_param);
    report_result.report_file = "ForeclosureLetter";
    localStorage.Report_Name = "ForeclosureLetter"
    var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
    $("#report").empty();
    $("#rpt").append("<div id='report'></div>");
    $("#rpt_div").load(a);

}

function DepoistSlipsGen() {

    var mandatory_check = true;

    var report_param = [];
    var report_result = {};

    var context = WebAPIProxy.getContext();
    report_param.push({ datafield: "orgnId", value: context.orgnId });
    report_param.push({ datafield: "locnId", value: context.locnId });
    report_param.push({ datafield: "userId", value: context.userId });
    report_param.push({ datafield: "localeId", value: context.localeId });

    report_result.report_param = JSON.stringify(report_param);
    report_result.report_file = "DepositSlipGen";
    localStorage.Report_Name = "DepositSlipGen"
    var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
    $("#report").empty();
    $("#rpt").append("<div id='report'></div>");
    $("#rpt_div").load(a);
}
function Disbursement() {

    var mandatory_check = true;
    var report_param = [];
    var report_result = {};
    var context = WebAPIProxy.getContext();
    report_param.push({ datafield: "loan_no", value: 1 });
    report_param.push({ datafield: "orgnId", value: context.orgnId });
    report_param.push({ datafield: "locnId", value: context.locnId });
    report_param.push({ datafield: "userId", value: context.userId });
    report_param.push({ datafield: "localeId", value: context.localeId });

    report_result.report_param = JSON.stringify(report_param);
    report_result.report_file = "Disbursement";
    localStorage.Report_Name = "Disbursement";
    var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
    $("#report").empty();
    $("#rpt").append("<div id='report'></div>");
    $("#rpt_div").load(a);

}

function RecoveryofInstalments() {

    var mandatory_check = true;
    var report_param = [];
    var report_result = {};
    var context = WebAPIProxy.getContext();
    report_param.push({ datafield: "fig_short_name", value: "FARMER_CLUB1" });
    report_param.push({ datafield: "orgnId", value: context.orgnId });
    report_param.push({ datafield: "locnId", value: context.locnId });
    report_param.push({ datafield: "userId", value: context.userId });
    report_param.push({ datafield: "localeId", value: context.localeId });

    report_result.report_param = JSON.stringify(report_param);
    report_result.report_file = $("#cmbselec_rep").val();
    localStorage.Report_Name = $("#cmbselec_rep").val();
    var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
    $("#report").empty();
    $("#rpt").append("<div id='report'></div>");
    $("#rpt_div").load(a);

}
function btn_invoice_Print() {

    var mandatory_check = true;

    var report_param = [];
    var report_result = {};
    if ($("#txtic_invoiceno").val() != "") {
        var context = WebAPIProxy.getContext();
        report_param.push({ datafield: "orgnId", value: context.orgnId });
        report_param.push({ datafield: "locnId", value: context.locnId });
        report_param.push({ datafield: "userId", value: context.userId });
        report_param.push({ datafield: "localeId", value: context.localeId });
        report_param.push({ datafield: "invoice_no", value: $("#txtic_invoiceno").val() });
        console.log(report_param)
        report_result.report_param = JSON.stringify(report_param);
        console.log(report_result)
        localStorage.Printstatus = "Y";
        console.log($("#Reporttype").val());
        if ($("#Reporttype").val() == "A4") {
            report_result.report_file = "Rpt_InvoiceTax";
            localStorage.Report_Name = "Rpt_InvoiceTax";
            $("#Reporttype").val("");
        }
        else {
            report_result.report_file = "Rpt_invoice";
            localStorage.Report_Name = "Rpt_invoice";
        }
        var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);
    }

}
function btn_creditissue_Print() {

    var mandatory_check = true;

    var report_param = [];
    var report_result = {};
    if ($("#txtic_name").val() != "") {
        var context = WebAPIProxy.getContext();
        report_param.push({ datafield: "orgnId", value: context.orgnId });
        report_param.push({ datafield: "locnId", value: context.locnId });
        report_param.push({ datafield: "userId", value: context.userId });
        report_param.push({ datafield: "localeId", value: context.localeId });
        report_param.push({ datafield: "invoice_no", value: $("#txtic_name").val() });
        console.log(report_param)
        report_result.report_param = JSON.stringify(report_param);
        console.log(report_result)
        report_result.report_file = "Rpt_CreditIssue";
        localStorage.Report_Name = "Rpt_CreditIssue"
        localStorage.Printstatus = "Y";
        var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);
    }

}
function PAWHS_Paymentadvice() {
    var mandatory_check = true;
    var report_param = [];
    var report_result = {};
    if ($("#txt_pay").val() != "") {
        var paymentID = $("#txt_pay").val();
        var context = WebAPIProxy.getContext();
        report_param.push({ datafield: "orgnId", value: context.orgnId });
        report_param.push({ datafield: "locnId", value: context.locnId });
        report_param.push({ datafield: "userId", value: context.userId });
        report_param.push({ datafield: "localeId", value: context.localeId });
        report_param.push({ datafield: "payment_no", value: $("#txt_pay").val() });
        console.log(report_param)
        report_result.report_param = JSON.stringify(report_param);
        console.log(report_result)
        report_result.report_file = "PAWHS_CoveringLetter";
        localStorage.Report_Name = "PAWHS_CoveringLetter"
        localStorage.Printstatus = "Y";
        var a = "/Reportlist/ReportView?receiveData=" + JSON.stringify(report_result);
        $("#report").empty();
        $("#rpt").append("<div id='report'></div>");
        $("#rpt_div").load(a);
    }

}