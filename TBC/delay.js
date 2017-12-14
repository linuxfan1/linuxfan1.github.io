
var currentversion = "v3.5"
var redirectlocation = ""
var windowlocation = ""
var pdurl1 = "https://classroom.google.com/u/0/c/" + getCookie('period1');
var pdurl2 = "https://classroom.google.com/u/0/c/" + getCookie('period2');
var pdurl3 = "https://classroom.google.com/u/0/c/" + getCookie('period3');
var pdurl4 = "https://classroom.google.com/u/0/c/" + getCookie('period4');
var pdurl5 = "https://classroom.google.com/u/0/c/" + getCookie('period5');
var pdurl6 = "https://classroom.google.com/u/0/c/" + getCookie('period6');
var pdurl7 = "https://classroom.google.com/u/0/c/" + getCookie('period7');
var pdurl8 = "https://classroom.google.com/u/0/c/" + getCookie('period8');
var pdurl9 = "https://classroom.google.com/u/0/c/" + getCookie('period9');
var pdurl10 = "https://classroom.google.com/u/0/c/" + getCookie('period10');
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function firstrunFunction() {
    document.getElementById('Pdls').className = "firstrun";
}
function pageLoad() {
    if (getCookie('firstrun') == "") {
        return firstrunFunction();
    } else if (getCookie('firstrun') != "") {
        if (getCookie('firstrun') != currentversion) {
            document.getElementById('Status').innerHTML = "TBC " + getCookie('firstrun') + " detected. The current version is " + currentversion + ". Please complete the firstrun form <a href='/TBC'>here</a>."
            return firstrunFunction();
        } else {
            return classroomLoad();
        }
    }
}
function period1() {
    if (getCookie('period1type') == 'math' || getCookie('period1type') == 'science' || getCookie('period1type') == 'other') {
        redirectlocation = pdurl1
        if (getCookie('period1type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period1type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period1type')
    }
}
function period2() {
    if (getCookie('period2type') == 'math' || getCookie('period2type') == 'science' || getCookie('period2type') == 'other') {
        redirectlocation = pdurl2
        if (getCookie('period2type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period2type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period2type')
    }
}   
function period3() {
    if (getCookie('period3type') == 'math' || getCookie('period3type') == 'science' || getCookie('period3type') == 'other') {
        redirectlocation = pdurl3
        if (getCookie('period3type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period3type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period3type')
    }
}
function period4() {
    if (getCookie('period4type') == 'math' || getCookie('period4type') == 'science' || getCookie('period4type') == 'other') {
        redirectlocation = pdurl4
        if (getCookie('period4type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period4type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period4type')
    }
}
function period5() {
    if (getCookie('period5type') == 'math' || getCookie('period5type') == 'science' || getCookie('period5type') == 'other') {
        redirectlocation = pdurl5
        if (getCookie('period5type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period5type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period5type')
    }
}
function period6() {
    if (getCookie('period6type') == 'math' || getCookie('period6type') == 'science' || getCookie('period6type') == 'other') {
        redirectlocation = pdurl6
        if (getCookie('period6type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period6type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period6type')
    }
}
function period7() {
    if (getCookie('period7type') == 'math' || getCookie('period7type') == 'science' || getCookie('period7type') == 'other') {
        redirectlocation = pdurl7
        if (getCookie('period7type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period7type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period7type')
    }
}
function period8() {
    if (getCookie('period8type') == 'math' || getCookie('period8type') == 'science' || getCookie('period8type') == 'other') {
        redirectlocation = pdurl8
        if (getCookie('period8type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period8type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period8type')
    }
}
function period9() {
    if (getCookie('period9type') == 'math' || getCookie('period9type') == 'science' || getCookie('period9type') == 'other') {
        redirectlocation = pdurl9
        if (getCookie('period9type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period9type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period9type')
    }
}
function period10() {
    if (getCookie('period10type') == 'math' || getCookie('period10type') == 'science' || getCookie('period10type') == 'other') {
        redirectlocation = pdurl10
        if (getCookie('period10type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period10type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else {
            return visibility();
        }
    } else {
        windowlocation = ""
        redirectlocation = getCookie('period10type')
    }
}
function visibility() {
        document.getElementById('confirmation').style.visibility = "visible";
    if (redirectlocation == "https://classroom.google.com/u/0/c/" || redirectlocation == "") {
        document.getElementById('confirmation').style.visibility = "visible";
        document.getElementById("confirmationbutton").style.visibility = "hidden";
        document.getElementById("confirmationtext").innerHTML = "No code was specified for this period. If this is incorrect, rewrite it <a href='/TBC/cookiewriter'>here</a>.";
    } else {
        document.getElementById('confirmation').style.visibility = "visible";
    }
}
function confirmRedirect() {
    if (windowlocation != "") {
        window.open(windowlocation);
        window.location.assign(redirectlocation);
    } else {
        window.location.assign(redirectlocation);
    }
}
function pageDebug() {
    document.getElementById('btnd').innerHTML = windowlocation
}
function classroomLoad() {
    document.getElementById('Status').innerHTML = ""
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == "9") {
        if (m >= 30) {
           return period1();
        }
    } else if (h == 9) {
        if (m <= 50) {
            return period1();
        } else if (m >= 50) {
            return period2();
        }
    } else if (h == 10) {
        if (m <= 14) {
            return period2();
        } else if (m >= 15) {
          if (m <= 38) {
            return period3();
        } else if (m >= 39) {
           return period4();
        }
    } else if (h == 11) {
        if (m <= 22) {
            return period4();
        } else {
            return period5();
        }
    } else if (h == 11) {
        if (m <= 22) {
            return period5();
        } else if (m >= 23) {
            if (m <= 46) {
                return period6();
            } else if (m >= 47) {
                return period7();
            }
        }
    } else if (h == 12) {
        if (m <= 31) {
            return period7();
        } else if (m >= 32) {
        }
    } else if (h == 13) {
        if (m <= 14) {
            return period8();
        } else if (m >= 15) {
            return period9();
        }
    } else if (h == 14) {
        if (m <= 34) {
            return period10();
        } else {
            alert("Classes are done for the day. Please try again tomorrow.");
            document.getElementById('Status').innerHTML = "";
        }
    } else {
        alert("Classes are done for the day. Please try again tomorrow.");
        document.getElementById('Status').innerHTML = "";
    }
}

function scriptSuccess() {
    return pageTime();
    document.getElementById('Status').innerHTML = "";
}