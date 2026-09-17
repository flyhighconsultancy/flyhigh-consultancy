const countries=[
["ca","Canada","CA","https://www.canada.ca/"],
["gb","United Kingdom","GB","https://www.gov.uk/"],
["us","United States","US","https://travel.state.gov/"],
["au","Australia","AU","https://immi.homeaffairs.gov.au/"],
["nz","New Zealand","NZ","https://www.immigration.govt.nz/"],
["kr","South Korea","KR","https://www.visa.go.kr/"],
["jp","Japan","JP","https://www.mofa.go.jp/"],
["fr","France","FR","https://france-visas.gouv.fr/"],
["de","Germany","DE","https://www.auswaertiges-amt.de/"],
["it","Italy","IT","https://vistoperitalia.esteri.it/"],
["ie","Ireland","IE","https://www.irishimmigration.ie/"],
["sg","Singapore","SG","https://www.ica.gov.sg/"],
["my","Malaysia","MY","https://malaysiavisa.imi.gov.my/"],
["th","Thailand","TH","https://www.thaievisa.go.th/"],
["ae","UAE","AE","https://u.ae/en/information-and-services/visa-and-emirates-id"],
["eu","Schengen / Europe","EU","https://home-affairs.ec.europa.eu/"]
];
const card=(c)=>`<article class="country-card" data-code="${c[2]}"><div class="country-top"><img class="flag-img" src="assets/flags/${c[0]}.png" alt="${c[1]} flag"><span class="arrow">→</span></div><h3>${c[1]}</h3><p>Tourist + Study</p></article>`;
document.getElementById("countryGrid").innerHTML=countries.slice(0,6).map(card).join("");
document.getElementById("allGrid").innerHTML=countries.map(card).join("");

const modal=document.getElementById("countryModal"), content=document.getElementById("modalContent");
function openCountry(code){
 const c=countries.find(x=>x[2]===code); if(!c)return;
 content.innerHTML=`<img class="modal-flag" src="assets/flags/${c[0]}.png" alt="${c[1]} flag"><h2>${c[1]}</h2>
 <h3>Tourist Visa</h3><p>Requirements vary by nationality, purpose, financial situation and travel circumstances. We can help you review the documents you have and identify supporting documents that may be relevant.</p>
 <h3>Common document categories</h3><ul><li>Valid passport and photographs</li><li>Financial proof / bank statements</li><li>Employment, business or study proof</li><li>Travel purpose and itinerary</li><li>Accommodation / invitation evidence where applicable</li><li>Previous travel or visa history where relevant</li></ul>
 <h3>Study Visa / Student Route</h3><p>Study requirements depend on the institution, course, admission and immigration rules. Our team can guide you on document preparation and language/interview preparation.</p>
 <h3>Biometric Guidance</h3><p>If you are unsure about biometrics or appointment-related steps, contact our office for guidance.</p>
 <h3>Official Information</h3><p>For the latest requirements, always verify details on the country's official website.</p>
 <a class="official-link" href="${c[3]}" target="_blank" rel="noopener">Visit Official Website →</a>`;
 modal.classList.add("show"); modal.setAttribute("aria-hidden","false");
}
document.addEventListener("click",e=>{const card=e.target.closest(".country-card"); if(card)openCountry(card.dataset.code);});
document.getElementById("closeModal").onclick=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")};
modal.addEventListener("click",e=>{if(e.target===modal)document.getElementById("closeModal").click()});

const menu=document.querySelector(".menu-btn"), nav=document.getElementById("mainNav");
menu.onclick=()=>nav.classList.toggle("open");
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

document.getElementById("consultForm").addEventListener("submit",e=>{
 e.preventDefault();
 document.getElementById("formMsg").textContent="Thank you. Your details are ready for counsellor follow-up.";
 e.target.reset();
});
