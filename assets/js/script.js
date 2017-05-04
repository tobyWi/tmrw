window.onload = function() {
    document.getElementById("defaultopen").click();


}


function openTab(evt, tabName) {

    var i, 
    tabcontent, 
    tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

   function myFunction() {
    var x = document.getElementById("myTopnav");
        if (x.className === "responsive-menu") {
            x.className += " show";
        } else {
            x.className = "responsive-menu";
        }

}

