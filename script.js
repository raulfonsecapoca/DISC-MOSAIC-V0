/* script.js */
function toggleCategory(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function showDetails(id) {
    var details = {
        "c1": "Justification for Using Simulation and CAD. Proofs: MATLAB code, CAD models.",
        "c2": "Justification for Implementing a Phase Mask in Zemax. Proofs: C++ code, Zemax simulation.",
        "c3": "Justification for Mechanical Support Design in SolidWorks. Proofs: CAD files, documentation.",
        "c4": "Answering a technical problem based on given constraints.",
        "t1": "Working in a diverse team. Proofs: Team collaboration logs, project updates.",
        "t2": "Collaborating in large teams. Proofs: Meeting minutes, project reports.",
        "t3": "Communication and project organization. Proofs: GitHub commits, planning documents.",
        "t4": "Adapting to different working environments."
    };
    
    document.getElementById("details-content").innerHTML = "<p>" + details[id] + "</p>";
}
