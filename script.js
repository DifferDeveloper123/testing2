var database = firebase.database();
var worksheetUrl;
var division;

var id_of_the_exam = null;

var questionNumber = 1,
    correctOptionValue = "";


swipedetect(document.querySelector('#clas-list'), function(swipedir) {
    if (swipedir == "down") {
        document.getElementById('clas-list').classList.add("hide");
        setTimeout(() => {
            document.getElementById('clas-list').style.visibility = 'hidden';
        }, 900);
    }
});

document.getElementById('select-clas').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("show");
    document.getElementById('clas-list').classList.remove("ds");
});

document.getElementById('select-sub').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("show");
    document.getElementById('sub-list').classList.remove("ds");
});

document.getElementById('sub-english').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'English';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Science').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Science';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-SSt').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Social Studies';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Physical').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Physical Education';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Computer').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Computer Basics';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Art').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Arts (Drawing)';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-fineArt').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Fine arts';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Chemistry').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Chemistry';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Physics').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Physics';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Biology').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Biology';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Statistics').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Statistics';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('sub-Business').addEventListener("click", () => {
    document.getElementById('sub-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('sub-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-sub').textContent = 'Business Studies';
    division = '1';
    document.getElementById('select-sub').style.cursor = 'default';
});

document.getElementById('clas-1').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '1';
    division = '1';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-2').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '2';
    division = '2';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-3').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '3';
    division = '3';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-4').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    division = '4';
    document.getElementById('select-clas').textContent = '4';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-5').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    division = '5';
    document.getElementById('select-clas').textContent = '5';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-6').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '6';
    division = '6';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-7').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '7';
    division = '7';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-8').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '8';
    division = '8';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-9').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '9';
    division = '9';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-10').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '10';
    division = '10';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-11').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '11';
    division = '11';
    document.getElementById('select-clas').style.cursor = 'default';
});

document.getElementById('clas-12').addEventListener("click", () => {
    document.getElementById('clas-list').classList.add("hide");
    setTimeout(() => {
        document.getElementById('clas-list').style.visibility = 'hidden';
    }, 900);
    document.getElementById('select-clas').textContent = '12';
    division = '12';
    document.getElementById('select-clas').style.cursor = 'default';
});

function load() {
    makeid(100);
    worksheetUrl = 'https://educatart.netlify.app/student/Worksheet/?id=' + id_of_the_exam;
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    id_of_the_exam = result;
}

var workSheet = {
    finish() {
        firebase.database().ref('/exams/' + id_of_the_exam + '/').update({
            totalQuestions: questionNumber
        });
    },

    update(subject, division, institute, totalQuestions) {
        firebase.database().ref('/exams/' + id_of_the_exam + '/').set({
            subject: subject,
            class: division,
            institute: institute,
            totalQuestions: totalQuestions,
            owner: window.localStorage.getItem('email')
        });
        firebase.database().ref('/' + window.localStorage.getItem('accessToken') + '/Exams/').push({
            subject: subject,
            class: division,
            institute: institute,
            totalQuestions: totalQuestions,
            owner: window.localStorage.getItem('email'),
            link: worksheetUrl
        });
    },

    Optional(question, option1, option2, option3, correct_option, questionNo) {
        firebase.database().ref('/exams/' + id_of_the_exam + '/' + questionNo + '/').set({
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            correctOption: correct_option
        });
    }
}

function set_Class_Subject() {
    if (document.getElementById('Institute').value !== "") {
        document.getElementById('class subject selector').style.display = 'none';
        document.getElementById('Optional').style.display = 'block';
    } else {
        document.getElementById("Institute").style.borderBottom = "1px solid #FF0000";
        document.getElementById("Institute").placeholder = "Fill it";
    }
    if (document.getElementById('subject').value !== "") {
        document.getElementById('subject').style.display = 'none';
        document.getElementById('Optional').style.display = 'block';
    } else {
        document.getElementById("subject").style.borderBottom = "1px solid #FF0000";
        document.getElementById("subject").placeholder = "Fill it";
    }
    if (document.getElementById('select-clas').textContent !== "Class") {} else {
        document.getElementById("select-clas").style.background = '#ff00001a';
    }
    if (document.getElementById('select-clas').textContent !== "Class" && document.getElementById('Institute').value !== "" && document.getElementById('subject').value !== "") {
        workSheet.update(document.getElementById('subject').value, division, document.getElementById('Institute').value, questionNumber);
    }
}

$('#Question_Optional').keyup(function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById('Question_Optional').value !== "") {
            document.getElementById("Option1_Optional").focus();
            document.getElementById('Question_Optional').style.borderBottom = "1px solid black";
            document.getElementById('Question_Optional').placeholder = "Question";
        } else {
            document.getElementById("Question_Optional").style.borderBottom = "1px solid #FF0000";
            document.getElementById("Question_Optional").placeholder = "Fill it";
            setTimeout(() => {
                document.getElementById('Question_Optional').style.borderBottom = "1px solid black";
                document.getElementById('Question_Optional').placeholder = "Question";
            }, 3000);
        }
    }
});

$('#Option1_Optional').keyup(function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById('Option1_Optional').value !== "") {
            document.getElementById("Option2_Optional").focus();
            document.getElementById('Option1_Optional').style.borderBottom = "1px solid black";
            document.getElementById('Option1_Optional').placeholder = "Option 1";
        } else {
            document.getElementById("Option1_Optional").style.borderBottom = "1px solid #FF0000";
            document.getElementById("Option1_Optional").placeholder = "Fill it";
            setTimeout(() => {
                document.getElementById('Option1_Optional').style.borderBottom = "1px solid black";
                document.getElementById('Option1_Optional').placeholder = "Option 1";
            }, 3000);
        }
    }
});

$('#Option2_Optional').keyup(function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById('Option2_Optional').value !== "") {
            document.getElementById("Option3_Optional").focus();
            document.getElementById('Option2_Optional').style.borderBottom = "1px solid black";
            document.getElementById('Option2_Optional').placeholder = "Option 2";
        } else {
            document.getElementById("Option2_Optional").style.borderBottom = "1px solid #FF0000";
            document.getElementById("Option2_Optional").placeholder = "Fill it";
            setTimeout(() => {
                document.getElementById('Option2_Optional').style.borderBottom = "1px solid black";
                document.getElementById('Option2_Optional').placeholder = "Option 2";
            }, 3000);
        }
    }
});

$('#Correct Option Optional').keyup(function(e) {
    if (e.keyCode == 13) {
        send_Question();
    }
});

$('#Option3_Optional').keyup(function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById('Option3_Optional').value !== "") {
            document.getElementById("Correct Option Optional").focus();
            document.getElementById('Option3_Optional').style.borderBottom = "1px solid black";
            document.getElementById('Option3_Optional').placeholder = "Option 3";
        } else {
            document.getElementById("Option3_Optional").style.borderBottom = "1px solid #FF0000";
            document.getElementById("Option3_Optional").placeholder = "Fill it";
            setTimeout(() => {
                document.getElementById('Option3_Optional').style.borderBottom = "1px solid black";
                document.getElementById('Option3_Optional').placeholder = "Option 3";
            }, 3000);
        }
    }
});

function send_Question() {
    if (document.getElementById("Correct Option Optional").value == document.getElementById("Option3_Optional").value || document.getElementById("Correct Option Optional").value == document.getElementById("Option2_Optional").value || document.getElementById("Correct Option Optional").value == document.getElementById("Option1_Optional").value && document.getElementById('Option3_Optional').value == "" && document.getElementById('Option2_Optional').value !== "" && document.getElementById('Option1_Optional').value !== "" && document.getElementById('Question_Optional').value !== "") {
        send_Question_Optional();
    }

    if (document.getElementById('Correct Option Optional').value !== "") {
        document.getElementById('Correct Option Optional').style.borderBottom = "1px solid black";
        document.getElementById('Correct Option Optional').placeholder = "Correct Option";
    } else {
        document.getElementById("Correct Option Optional").style.borderBottom = "1px solid #FF0000";
        document.getElementById("Correct Option Optional").placeholder = "Fill it";
        setTimeout(() => {
            document.getElementById('Correct Option Optional').style.borderBottom = "1px solid black";
            document.getElementById('Correct Option Optional').placeholder = "Correct Option";
        }, 3000);
    }

    if (document.getElementById("Correct Option Optional").value !== document.getElementById("Option3_Optional").value && document.getElementById("Correct Option Optional").value !== document.getElementById("Option2_Optional").value && document.getElementById("Correct Option Optional").value !== document.getElementById("Option1_Optional").value) {
        document.getElementById('error-messge-label').textContent = "Correct Option Input must match with option 1, option 2 or option 3 input values";
        document.getElementById('error-messge-label').style.color = "#FF0000";
        document.getElementById("error-messge-label").style.display = "block";
        setTimeout(() => {
            document.getElementById('error-messge-label').style.color = "black";
            document.getElementById("error-messge-label").style.display = "none";
            document.getElementById('error-messge-label').textContent = "";
        }, 3000);
    }
}

$('#Institute').keyup(function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById('Institute').value !== "") {
            document.getElementById("subject").focus();
            document.getElementById('Institute').style.borderBottom = "1px solid black";
            document.getElementById('Institute').placeholder = "Fill it";
        } else {
            document.getElementById("Institute").style.borderBottom = "1px solid #FF0000";
            document.getElementById("Institute").placeholder = "Fill it";
        }
    }
});

$('#subject').keyup(function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById('select-clas').textContent !== "Class") {
            set_Class_Subject();
        } else {
            document.getElementById('clas-list').classList.add("show");
            document.getElementById('clas-list').classList.remove("ds");
        }
    }
});

function checkValueDoRed(id, placeholder) {
    if (document.getElementById(id).value == "") {
        document.getElementById(id).style.borderBottom = "1px solid #FF0000";
        document.getElementById(id).placeholder = "Fill it";
    } else {
        document.getElementById(id).style.borderBottom = "1px solid black";
        document.getElementById(id).placeholder = placeholder;
    }
}

function send_Question_Optional() {

    correctOptionValue = document.getElementById("Correct Option Optional").value;

    workSheet.Optional(document.getElementById("Question_Optional").value, document.getElementById("Option1_Optional").value, document.getElementById("Option2_Optional").value, document.getElementById("Option3_Optional").value, correctOptionValue, questionNumber);
    document.getElementById("Question_Optional").value = "";
    document.getElementById("Correct Option Optional").value = "";
    document.getElementById("Option3_Optional").value = "";
    document.getElementById("Option2_Optional").value = "";
    document.getElementById("Option1_Optional").value = "";
    questionNumber = questionNumber + 1;
}

function finish() {
    if (questionNumber > 4) {
        workSheet.finish();
        Email.send({
            SecureToken: "71cd6de4-a026-4610-b408-aef7236a1b97",
            To: window.localStorage.getItem('email'),
            From: 'Educatart <educatart@gmail.com>',
            Subject: 'Worksheet',
            Body: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_text_15 .v-container-padding-padding { padding: 10px 10px 10px 20px !important; } }
    @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 600px !important;
      }
    
    }
    
    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    </style>
      
      
    
    <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
    
    </head>
    
    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
        
    
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #eccafa;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #eccafa;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="https://i.ibb.co/qjkTnhF/Educatart.png" alt="Educatart Logo" title="Educatart Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 150px;" width="150"/>
          
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 4px solid #3598db;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
    </div>
    
    
    
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 30px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="color: #333333; line-height: 130%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 130%; text-align: center;"><strong><span style="font-size: 16px; line-height: 20.8px;"><span style="color: #236fa1; font-size: 16px; line-height: 20.8px; font-family: 'trebuchet ms', geneva;">Dear ` + window.localStorage.getItem('username') + `</span>,</span></strong></p>
    <p style="font-size: 14px; line-height: 130%;">&nbsp;</p>
    <p style="font-size: 14px; line-height: 130%; text-align: center;"><span style="font-size: 16px; line-height: 20.8px; font-family: Lato, sans-serif;">Thank you for creating a worksheet with educatart</span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
    </div>
    
    
    
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table id="u_content_text_15" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 15px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="color: #333333; line-height: 160%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 160%; font-size: 14px; text-align: center;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 22.4px;"><span style="font-size: 16px; line-height: 25.6px;">Click this button or link to find your worksheet</span></span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:'Open Sans',sans-serif;" align="left">
            
    <div align="center">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td style="font-family:'Open Sans',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:43px; v-text-anchor:middle; width:112px;" arcsize="4.5%" stroke="f" fillcolor="#e6a501"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
        <a href=` + worksheetUrl + ` target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Open Sans',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e6a501; border-radius: 2px; -webkit-border-radius: 2px; -moz-border-radius: 2px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
          <span style="display:block;padding:12px 35px;line-height:120%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 16.8px;"><strong><span style="font-size: 16px; line-height: 19.2px;">Select</span></strong></span></span>
        </a>
      <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
    </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="text-decoration: underline; font-size: 14px; line-height: 19.6px;"><span style="color: #3598db; font-size: 14px; line-height: 19.6px; text-decoration: underline;">` + worksheetUrl + `</span></span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #843fa1;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
            
      <div style="color: #828080; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;">If you have any query feel free to contact me</p>
    <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="color: #843fa1; font-size: 14px; line-height: 19.6px;"><a style="color: #843fa1;" href="mailto:educatart@gmail.com?subject=&body=" target="_blank" rel="noopener">educatart@gmail.com</a></span></strong></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="76%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 4px solid #f1c40f;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:14px;font-family:'Open Sans',sans-serif;" align="left">
            
    <div align="center">
      <div style="display: table; max-width:123px;">
      <!--[if (mso)|(IE)]><table width="123" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:123px;"><tr><![endif]-->
      
        
        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 30px;" valign="top"><![endif]-->
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 30px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://www.youtube.com/channel/UCgJSqtbM0B1wxif2MczbhqA" title="YouTube" target="_blank">
              <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YouTube" title="YouTube" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <!--[if (mso)|(IE)]></td><![endif]-->
        
        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://discord.gg/wQf9EW2c" title="Discord" target="_blank">
              <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="Discord" title="Discord" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <!--[if (mso)|(IE)]></td><![endif]-->
        
        
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
    </div>
    
    
        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>
    `
        })

        document.getElementById('sharePage').style.display = 'block';
        document.getElementById('finish').style.display = 'none';
        document.getElementById('Optional').style.display = 'none';

    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Please write minimum 5 questions'
        })
    }
}

function back() {
    window.open("/Teacher/Dashboard/", "_self");
}

const share = e => {
    if (navigator.share) {
        navigator
            .share({
                title: "Worksheet",
                text: "Dear Student, \n\ it is your today's Homework, go through and complete it \n\ " + worksheetUrl,
                url: worksheetUrl
            })
            .then(() => console.log("thanks for share"))
            .catch(error => console.log("error", error));
    }
};
if (!navigator.share) {
    document.getElementById('tip').className = 'show'
}
document.getElementById("share").addEventListener("click", share);
document.getElementById("share").addEventListener("click", share);
document.getElementById("share").addEventListener("click", share);