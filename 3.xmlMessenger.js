function xmlToHtml(input) {
    let pattern = /^<message(.+?)>(.+?)<\/message>$/g;
    let isValid = pattern.test(input);

    if(!isValid){
        console.log("Invalid message format");
    } else {
        console.log("Missing attributes");
        let messageMatch = input.match(pattern);
        let attributesPart = messageMatch.join().split(">")[0].trim();
        let attributeArr = attributesPart.split(" ");
        attributeArr.shift();

        let patternAttribute = /[a-z]+=\"[a-zA-Z\d\s\.]+\"/g;
        let isValid = true;
        let isMissingAttr = false;
        for(let i = 0; i < attributeArr.length; i++){
            isValid = patternAttribute.test(attributeArr[i]);

            let match = patternAttribute.exec(attributeArr[i]);
            let attrArr = attributeArr[i].trim().split("=");

        }


    }

}

xmlToHtml(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);