function calculateWordFrequency() {
    var text = document.getElementById("textInput").value;
    console.log(text);
    var oneline = text.replace('\n','');
    var alphabetonly = oneline.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var words = alphabetonly.toLowerCase().split(' ');
    if (!text) {
        alert("Text box must not be empty!");
        return;
    }
    
    const obj = {};

    for (let i = 0; i < words.length; i++) {
        word = words[i];
        console.log(word);
        if (word in obj) {
            console.log("Word already found: " + JSON.stringify(obj[word]));
            console.log(JSON.stringify(obj));
            obj[word] = obj[word] + 1
        } else {
            obj[word] = 1;
        }
    }    
    
    let sortedArray = Object.entries(obj);
    sortedArray.sort((a,b) => a[1]- b[1]);
    let sortedObject = Object.fromEntries(sortedArray);

    var table = document.getElementById("frequencyTable");
    for (let i = 0; i < Object.keys(sortedObject).length; i++) {
        var word = JSON.stringify(Object.keys(sortedObject)[i]);
        var num = JSON.stringify(sortedObject[Object.keys(sortedObject)[i]]);
        var row = table.insertRow(1);
        var wordCell = row.insertCell(0);
        var freqCell = row.insertCell(1);
        wordCell.innerHTML = word;
        freqCell.innerHTML = num;
    }
    return;
}