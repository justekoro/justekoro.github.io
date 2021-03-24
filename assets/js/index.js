/*
    ------------
    | Index.js |
    ------------
*/


new fullpage('.k-m', {
    navigation: true,
    responsiveWidth: 600,
    anchors: ['k-m', 'k-i', 'k-pj', 'k-sk', 'k-contact'],
    licenseKey: 'KGl8O!P%k0',
})

if (localStorage.getItem("hasClosedDomainBanner") && localStorage.getItem("hasClosedDomainBanner") == "true") {
    document.getElementsByClassName("k-header")[0].classList.add("hidden-full");
}

document.getElementById("close-btn").onclick = () => {
    localStorage.setItem("hasClosedDomainBanner", "true");
    document.getElementsByClassName("k-header")[0].classList.add("hidden");
}