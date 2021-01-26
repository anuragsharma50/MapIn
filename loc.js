//location

var selectedValue = ''
function addLoc()
    {
        event.preventDefault;
        var select = document.getElementById("locations");
        selectedValue = select.options[select.selectedIndex].value;
        console.log(selectedValue);
        sessionStorage.setItem("location",selectedValue);
    }
  
