// 1. Change Background
document.querySelector("#bgButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// 2. Toggle Theme
document.querySelector("#modeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// 3. Hide Element
const hideBtn = document.querySelector("#hideBtn");
const hideMe = document.querySelector("#hideMe");
hideBtn.addEventListener("click", () => hideMe.style.display="none");

// 4. Counter
let count = 0;
const countBox = document.querySelector("#count");
document.querySelector("#inc").addEventListener("click", () => { count++; countBox.textContent = count; });
document.querySelector("#dec").addEventListener("click", () => { count--; countBox.textContent = count; });

// 5. Disable Button
document.querySelector("#disableBtn").addEventListener("click", function(){ this.disabled=true; });

// 6. Live Character Count
const charArea = document.querySelector("#charArea");
charArea.addEventListener("input", () => document.querySelector("#charCount").textContent = charArea.value.length);

// 7. Password Strength
const passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("input", () => document.querySelector("#strength").textContent = passwordInput.value.length<6?"Weak":"Strong");

// 8. Enter to Submit
document.querySelector("#enterInput").addEventListener("keydown", e => { if(e.key==="Enter") alert("Submitted!"); });

// 9. Auto Uppercase
document.querySelector("#upperInput").addEventListener("input", e => e.target.value = e.target.value.toUpperCase());

// 10. Forbidden Words
document.querySelector("#forbiddenBtn").addEventListener("click", function(){
    const text = document.querySelector("#forbiddenInput").value.toLowerCase();
    document.querySelector("#forbiddenMsg").textContent = (text.includes("spam")||text.includes("test"))?"Forbidden word found!":"Submitted!";
});

// 11. Dynamic Cities
document.querySelector("#country").addEventListener("change", function(){
    const city = document.querySelector("#city");
    city.innerHTML = "";
    if(this.value==="pak") city.innerHTML="<option>Lahore</option><option>Karachi</option>";
    if(this.value==="usa") city.innerHTML="<option>New York</option><option>Chicago</option>";
});

// 12. Form Validation
document.querySelector("#validateBtn").addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    document.querySelector("#formMsg").textContent = (name===""||email==="")?"Fields cannot be empty!":"Form submitted!";
});

// 13. Show/Hide Password
const passField = document.querySelector("#passField");
const togglePass = document.querySelector("#togglePass");
togglePass.addEventListener("click", function(){
    if(passField.type==="password"){ passField.type="text"; togglePass.textContent="Hide"; }
    else{ passField.type="password"; togglePass.textContent="Show"; }
});

// 14. Color Picker Preview
document.querySelector("#colorPicker").addEventListener("input", function(){
    document.querySelector("#previewBox").style.backgroundColor = this.value;
});

// 15. Checkbox Agreement
document.querySelector("#agreeChk").addEventListener("change", function(){
    document.querySelector("#agreeBtn").disabled = !this.checked;
});

// 16. Hover Image Preview
const thumb = document.querySelector("#thumb");
const largePreview = document.querySelector("#largePreview");
thumb.addEventListener("mouseover", ()=> largePreview.style.display="block");
thumb.addEventListener("mouseout", ()=> largePreview.style.display="none");

// 17. Back to Top
const topBtn = document.querySelector("#topBtn");
window.addEventListener("scroll", ()=> topBtn.style.display = window.scrollY>300?"block":"none");
topBtn.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

// 18. Auto Save Form
const autoSave = document.querySelector("#autoSave");
autoSave.value = localStorage.getItem("savedText")||"";
autoSave.addEventListener("input", ()=> localStorage.setItem("savedText", autoSave.value));

// 19. Click Outside Modal
const openModal = document.querySelector("#openModal");
const modal = document.querySelector("#modal");
openModal.addEventListener("click", ()=> modal.style.display="block");
window.addEventListener("click", e => { if(e.target===modal) modal.style.display="none"; });

// 20. Key Logger
const keyLog = document.querySelector("#keyLog");
document.addEventListener("keydown", e=> { if(e.key.length===1) keyLog.textContent+=e.key+" "; });
