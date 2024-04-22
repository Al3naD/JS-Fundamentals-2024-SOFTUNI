function extractFile(text) {
    let textInParts = text.split('\\');

    let neededText = textInParts[textInParts.length - 1];
    let index = neededText.lastIndexOf('.');
    let name = neededText.substring(0, index);
    let extention = neededText.substring(index + 1)

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`);

}
// extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');