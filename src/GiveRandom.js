export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function whereToGo(){

    let ex = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    let index = [getRandom(0, 11)];
    let where = [0, 0, 0, 0, 0, 0];

    for(let i=1; i<6; i++) {
        let pick = getRandom(0, 11);
        if(index.includes(pick)) {
            i--;
        }
        else {
            index = [...index, pick];
        }
    }

    for(let i=0; i<index.length; i++) {
        where[i] = ex[index[i]];
    }

    return where;
}

export function ppCount(where){

    let count = [0,0,0,0,0,0];
    //장소별 인원수
    //인덱스 : 체육관, 도서관, 교실, 미술실, 복도, 음악실 순서
    
    for(let index = 0; index < where.length; index++){
        count[where[index]]++;
    }

    return count;
}