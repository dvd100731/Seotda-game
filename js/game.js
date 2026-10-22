// ===== 패 섞기 =====
function shuffle(deck) {
    const copy = [...deck];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// ===== HTML 요소 찾아오기 =====
const dealBtn = document.getElementById("deal-btn");
const playerCardsEl = document.getElementById("player-cards");
const computerCardsEl = document.getElementById("computer-cards");
const resultEl = document.getElementById("result");

// ===== 카드 한 장을 글자로 =====
function cardText(card) {
    return card.gwang ? `${card.month}월 광` : `${card.month}월`;
}

// ===== 패를 화면에 그리기 =====
function showCards(el, hand) {
    el.innerHTML = "";
    hand.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = cardText(card);
        el.appendChild(div);
    });
}

// ===== 버튼 누르면 게임 진행 =====
dealBtn.addEventListener("click", () => {
    const deck = shuffle(cards);
    const playerHand = deck.slice(0, 2);
    const computerHand = deck.slice(2, 4);

    showCards(playerCardsEl, playerHand);
    showCards(computerCardsEl, computerHand);

    const p = getHand(playerHand[0], playerHand[1]);
    const c = getHand(computerHand[0], computerHand[1]);

    let winner;
    if (p.score > c.score) winner = "플레이어 승리! 🎉";
    else if (p.score < c.score) winner = "컴퓨터 승리 😢";
    else winner = "무승부";

    resultEl.textContent = `플레이어: ${p.name} vs 컴퓨터: ${c.name} → ${winner}`;
});