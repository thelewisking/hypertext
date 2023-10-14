function boldThis(str) {
    var slicePart = str.length / 2;
    return "<b>" + str.slice(0, slicePart) + "</b>" + str.slice(slicePart);
}

function applyBoldToElement(element) {
    // Create a document fragment to store the modified content
    var fragment = document.createDocumentFragment();

    // Loop through child nodes
    for (var i = 0; i < element.childNodes.length; i++) {
        var child = element.childNodes[i];

        if (child.nodeType === 3) {
            // Text node found, apply bold formatting
            var text = child.textContent;
            var result = text.replace(/([a-zA-Z0-9]+)/g, boldThis);

            // Create a new span element to contain the modified text
            var span = document.createElement("span");

            // Update the HTML with the bolded text
            span.innerHTML = result;

            // Append the span to the fragment
            fragment.appendChild(span);
        } else {
            // Non-text node, just append it to the fragment
            fragment.appendChild(child.cloneNode(true));
        }
    }

    // Replace the content of the element with the modified fragment
    element.innerHTML = "";
    element.appendChild(fragment);
}

function hyperText() {
    var elements = document.querySelectorAll("p, li");
    elements.forEach(element => {
        applyBoldToElement(element);
    });
}

function init() {
    browser.runtime.sendMessage({
        requestState: true
    }, function(response) {
        if (response.enabled) {
            console.log("going fast...");

            hyperText();
            document.body.style.fontFamily = "'Roboto', sans-serif";
        } else {
            console.log("regular reading")
        }
    });
}

init();