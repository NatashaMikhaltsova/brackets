module.exports = function check(str, bracketsConfig) {
    let openingBrackets = [];
    let closingBrackets = [];
    let brackets = [];
    let current_bracket;
    let openingSymbol;

    bracketsConfig.forEach((el) => {
        el.forEach((e, index) => {
            return index === 0
                ? openingBrackets.push(e)
                : closingBrackets.push(e);
        });
    });

    for (let i = 0; i < str.length; i++) {
        //check that symbol is opening tag
        if (openingBrackets.includes(str[i])) {
            //Check that symbol is special or not.
            //If it's special, it will be opening, if the symbol is not in brackets array
            openingSymbol =
                openingBrackets.indexOf(str[i]) !==
                closingBrackets.indexOf(str[i])
                    ? true
                    : !brackets.includes(str[i]);
        } else {
            openingSymbol = false;
        }

        if (openingSymbol) {
            brackets.push(str[i]);
        } else {
            if (brackets.length === 0) {
                return false;
            }

            current_bracket = brackets.pop();
            if (
                openingBrackets.indexOf(current_bracket) !==
                closingBrackets.indexOf(str[i])
            ) {
                return false;
            }
        }
    }
    return brackets.length > 0 ? false : true;
};
