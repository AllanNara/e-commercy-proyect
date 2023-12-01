export function numberToPriceString(number) {
	if(!number) return `$0`
	const str = number.toString()

    const [entirePart, decimalPart] = str.split(".");
    const reversedEntirePart = entirePart.split("").reverse();

    let formattedNumber = "";
    for (let i = 0; i < reversedEntirePart.length; i++) {
        if (i > 0 && i % 3 === 0) formattedNumber += ".";
        formattedNumber += reversedEntirePart[i];
    }

    formattedNumber = formattedNumber.split("").reverse().join("");
		if(formattedNumber[0] === "-" && formattedNumber[1] === ".") {
			formattedNumber = formattedNumber.slice(0, 1) + formattedNumber.slice(2)
		}

    return `$${formattedNumber}${decimalPart ? "," + decimalPart : ""}`;
}
