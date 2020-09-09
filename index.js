const parseCST = require('yaml/parse-cst');

var cst = parseCST(`
TopLevel:
    SecondLevel1:
        ThirdLevel1: Value1
    SecondLevel2:
        ThirdLevel2: Value2
`)

var secondLevelItems = cst[0].contents[1].items[1].node.items.splice(2, 2);

cst[0].contents[1].items[1].node.items = secondLevelItems.concat(cst[0].contents[1].items[1].node.items);

console.log(String(cst));

/*

expected:
TopLevel:
    SecondLevel2:
        ThirdLevel2: Value2
    SecondLevel1:
        ThirdLevel1: Value1


actual:
TopLevel:
    SecondLevel1:
        ThirdLevel1: Value1
    SecondLevel2:
        ThirdLevel2: Value2
SecondLevel1:
        ThirdLevel1: Value1
*/
