function queryString () {
// recupero il valore dell'ID dell'URL
    var qs = window.location.search;
    return qs;
}

function title () {
// costruisco il titolo
    var qs = queryString ();
    var htmlfile = "../src/text/" + qs.slice(1, qs.length) + "/" + qs.slice(1, qs.length) + "_testo.html";
    document.getElementById("#t1") = html "../src/text/1/1_text.html";
    return htmlfile;    
}


var tl = title();
console.log(tl);

