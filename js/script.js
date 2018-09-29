// TEST ONE
const jobRoleSelectList = document.getElementById('title');
const otherInput = document.getElementById('other-title');
const shirtColorList = document.getElementById('color');

// Gives the focus to the first input field when the page is loaded
document.getElementById('name').focus();
// Hides the "other" input feild  
otherInput.style.display = 'none';

// Function to show/hide the "other job role" input field-only show when selected
function showHideOtherInput() {
    const selectedValue = jobRoleSelectList.value;
    if(selectedValue === 'other') {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
    }
}


// Function by Redmond
function shirtThemeAndColor() {
    let e = document.getElementById('design');
    let selectedValue = e.options[e.selectedIndex].value;
    let pleaseSelectTshirt = document.getElementById('pleaseSelectTshirt');
    let jsPuns = document.getElementsByClassName('jsPuns');
    let iHeartJs = document.getElementsByClassName('iHeartJs');

    if ( selectedValue === 'js puns') {
      toggleDisable(jsPuns, false);
      toggleDisable(iHeartJs, true);
      pleaseSelectTshirt.setAttribute('disabled', true);
    } else if ( selectedValue === 'heart js') {
      toggleDisable(jsPuns, true);
      toggleDisable(iHeartJs, false);
      pleaseSelectTshirt.setAttribute('disabled', true);
    } else {
      toggleDisable(jsPuns, false);
      toggleDisable(iHeartJs, false);
    }
  }

  function toggleDisable(element, value) {
    // console.log(element);
    for (var i = 0; i < element.length; i++) {
      element[i].disabled = value;
    }
  }



// Hides the "color" select menu(the div in this case) 
const colorMenu = document.getElementById('colors-js-puns');
const designSelect = document.getElementById('design');

colorMenu.style.display = 'none';

// Function to show/hide the color menu only show when a T-shirt design is selected
function showHideColorMenu() {
    const heart = document.getElementById('heart');
    const puns = document.getElementById('puns');
    const selectTheme = document.getElementById('selectTheme');
    const selectedValue = designSelect.value;
    if(selectedValue === puns, heart) {
        colorMenu.style.display = 'block';
        selectTheme.setAttribute('disabled', true);
    } else {
        colorMenu.style.display = 'none';
    }
}

designSelect.addEventListener('change', () => {
  showHideColorMenu();
});


// Register for Activities. 
// JSFW stands for Javascript Frameworks workshop and EW for Express workshop
// Disables EW if JSFW is checked and vice versa...because they are at the same time.
const JSFW = document.getElementById('JSFW');
const EW = document.getElementById('EW');

JSFW.addEventListener('change', () => {
if(JSFW.checked){
    EW.setAttribute('disabled', true);
} else {
    EW.removeAttribute('disabled');
}
});

EW.addEventListener('change', () => {
if(EW.checked){
  JSFW.setAttribute('disabled', true);
} else {
  JSFW.removeAttribute('disabled');
}
});


// Running total for activities section
const checkbox = document.querySelectorAll('checkbox');
const activities = document.getElementsByClassName('activities');
const costLabel = document.createElement('label');
// Append costLabel to activities
const cost = ''; 

activities.addEventListener('change', () => {
  console.log('test');
});



