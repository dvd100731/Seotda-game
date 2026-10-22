// 패 2장을 받아서 족보 이름과 점수를 돌려줌 (점수 높을수록 셈)
function getHand(a, b) {
    const m1 = Math.min(a.month, b.month);
    const m2 = Math.max(a.month, b.month);
    const bothGwang = a.gwang && b.gwang;

    // 광땡
    if (bothGwang && m1 === 3 && m2 === 8) return { name: "38광땡", score: 1000 };
    if (bothGwang && m1 === 1 && m2 === 8) return { name: "18광땡", score: 950 };
    if (bothGwang && m1 === 1 && m2 === 3) return { name: "13광땡", score: 900 };

    // 땡 (같은 월 2장)
    if (m1 === m2) {
        return { name: m1 === 10 ? "장땡" : `${m1}땡`, score: 800 + m1 };
    }

    // 특수 조합
    const specials = [
        [1, 2, "알리", 700],
        [1, 4, "독사", 690],
        [1, 9, "구삥", 680],
        [1, 10, "장삥", 670],
        [4, 10, "장사", 660],
        [4, 6, "세륙", 650],
    ];
    for (const [x, y, name, score] of specials) {
        if (m1 === x && m2 === y) return { name, score };
    }

    // 끗 (두 월 더한 값의 일의 자리)
    const kkeut = (m1 + m2) % 10;
    if (kkeut === 9) return { name: "갑오", score: 9 };
    if (kkeut === 0) return { name: "망통", score: 0 };
    return { name: `${kkeut}끗`, score: kkeut };
}