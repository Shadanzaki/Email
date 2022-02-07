let NotChecked = ["gamer5@mail.ru", "genshin@list.com", "game", "1012412", "kunit@rambler.ru", "swen@yandex.com", "game3", "sao"];
let BlackList = ["ninja", "sao", "2151713123", "kawasaki"];
let WhiteList = [];
let BlacklistIndex = [];

WhiteList = filter(NotChecked, BlackList);

function filter(NotChecked, BlackList) {
    let index2 = 0;

    for (let index in BlackList) {
        BlacklistIndex.push(NotChecked.indexOf(BlackList[index]))
    }
    for (index = 0; index < NotChecked.length; index++) {
        if (BlacklistIndex.includes(index)) {
            continue;
        }
        else {
            WhiteList[index2] = NotChecked[index];
            index2++;
        }
    }
    return WhiteList;
}
console.log(WhiteList)
