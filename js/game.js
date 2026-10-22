// HTML에서 필요한 요소 찾아오기
const dealBtn = document.getElementById("deal-btn");
const playerCardsEl = document.getElementById("player-cards");
const computerCardsEl = document.getElementById("computer-cards");

// 카드 한 장을 글자로 바꾸기 (예: "3월 광", "5월")
function cardText(card) {
    return card.gwang ? `${card.month}월 광` : `${card.month}월`;
}

// 패를 화면에 그리기
function showCards(el, hand) {
    el.innerHTML = "";
    hand.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = cardText(card);
        el.appendChild(div);
    });
}

// 버튼 누르면 실행
dealBtn.addEventListener("click", () => {
    const deck = shuffle(cards);
    const playerHand = deck.slice(0, 2);
    const computerHand = deck.slice(2, 4);

    showCards(playerCardsEl, playerHand);
    showCards(computerCardsEl, computerHand);
});