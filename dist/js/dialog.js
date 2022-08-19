// TOKEN AND JPDB API URL

var conn_token = "90938692|-31949287340685910|90939628";
var db = "Employee";
var rel = "emp-rel";
var baseUrl = "http://api.login2explore.com:5577";
var iml_url = "/api/iml";
var irl_url = "/api/irl";


$("#empid").focus();


//FORM VALIDATION
function validateAndGetFormData() {

            var empid = $("#empid").val();
            var name = $("#name").val();
            var salary = $("#salary").val();
            var hra = $("#hra").val();
            var da = $("#da").val();
            var deduct = $("#deduct").val();

            if (empid === "") {
                alert("Employee ID Required Value");
                $("#empid").focus();
                return "";
            }

            if (name === "") {
                alert("Employee Name Required Value");
                $("#name").focus();
                return "";
            }

            if (salary === "") {
                alert("Employee Salary Required Value");
                $("#salary").focus();
                return "";
            }

            if (hra === "") {
                alert("Employee HRA Required Value");
                $("#hra").focus();
                return "";
            }

            if (da === "") {
                alert("Employee DA Required Value");
                $("#da").focus();
                return "";
            }

            if (deduct === "") {
                alert("Employee Deduction Required Value");
                $("#deduct").focus();
                return "";
            }


            var jsonObj = {
                empid: empid,
                name: name,
                salary: salary,
                hra: hra,
                da: da,
                deduct: deduct,

                };

            return JSON.stringify(jsonObj);
}


function saveInLS(res){

        var data = JSON.parse(res.data).rec_no;
        localStorage.setItem("rec_no", data);
        return ""
}

function changeData(){

    var jsonStrObj = validateAndGetFormData();
    var req = createUPDATERecordRequest(conn_token, jsonStrObj, db, rel, localStorage.getItem("rec_no"));
    
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(req, baseUrl, iml_url);
    jQuery.ajaxSetup({async: true});    

    resetForm();

}

function getJsonEmpId(){

    var empid = $("#empid").val();
    if (empid === "")
    {
        return ""
    }
    jsonObj = {empid:empid}

    return JSON.stringify(jsonObj);
}

function filldata(res)
{
    var data = JSON.parse(res.data).record;
    saveInLS(res);

    $("#empid").val(data.empid);    
    $("#name").val(data.name);
    $("#salary").val(data.salary);
    $("#hra").val(data.hra);
    $("#da").val(data.da);
    $("#deduct").val(data.deduct);
    $("#empname").focus();
}

function getemp(){

    var jsonStrObj = getJsonEmpId();
    if (jsonStrObj === ""){
        return ;
    }

   
    var putReqStr = createGET_BY_KEYRequest(conn_token,db, rel, jsonStrObj);
    
   
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, baseUrl, irl_url);
    jQuery.ajaxSetup({async: true});

    if (JSON.stringify(resultObj.status) == "400")
    {
        $("#save").prop('disabled', false);
        $("#reset").prop('disabled', false);
        $("#name").focus();
        return ""
    }
    if (JSON.stringify(resultObj.status) == "200")
    {
        $("#save").prop('disabled', true);
        filldata(resultObj);

        $("#empid").prop('disabled', true);

        $("#change").prop('disabled', false);           
        $("#reset").prop('disabled', false);
        
        $("#name").focus();
    }


    


}

function saveData(){

    var jsonStrObj = validateAndGetFormData();
    if (jsonStrObj === ""){
        return "";
    }

    var putReqStr = createPUTRequest(conn_token, jsonStrObj, db, rel);
    
    

    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, baseUrl, iml_url);
    jQuery.ajaxSetup({async: true});

    resetForm();
    
}

function resetForm(){

    $("#empid").val("");
        $("#name").val("");
        $("#salary").val("");
        $("#hra").val("");
        $("#da").val("");
        $("#deduct").val("");

        $("#save").prop('disabled', true);
        $("#empid").prop('disabled', false);
        $("#change").prop('disabled', true);           
        $("#reset").prop('disabled', true);

        $("#empid").focus();
}




