const CSRF = document.getElementById("CSRF").children[0].value;



const ORIGIN = "http://127.0.0.1:8000"


var LINKS = {
    lexical:"client_app/"
}



function getLink(key) {
    return LINKS[key]
}

function initLinks() {
    for (var i in LINKS) {
        LINKS[i] = `${ORIGIN}/${getLink(i)}`
    }
}


async function postFunc(key, wut) {
    var toSend = {};

    const inject = {

    }




    for (var i in wut) {
        toSend[i] = wut[i]
    }
    for (var i in inject) {
        toSend[i] = inject[i]
    }


    return fetch(getLink(key),
        {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(toSend),
            headers: {
                "X-CSRFToken": CSRF
            }
        }
    );


}



initLinks()