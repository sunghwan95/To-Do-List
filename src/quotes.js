const quotes = [
  {
    quote: "9시 1분은 9시가 아니다.",
    number: '"송파구에서 일 잘하는 방법 1번째"',
  },
  {
    quote: "업무는 수직적, 인간적인 관계는 수평적.",
    number: '"송파구에서 일 잘하는 방법 2번째"',
  },
  {
    quote: "간단한 보고는 상급자가 하급자 자리로 가서 이야기 나눈다.",
    number: '"송파구에서 일 잘하는 방법 3번째"',
  },
  {
    quote: "잡담을 많이 나누는 것은 경쟁력이다.",
    number: '"송파구에서 일 잘하는 방법 4번째"',
  },
  {
    quote: "개발자가 개발만 잘하고, 디자이너가 디자인만 잘하면 회사는 망한다.",
    number: '"송파구에서 일 잘하는 방법 5번째"',
  },
  {
    quote: "휴가 가거나 퇴근시 눈치 주는 농담을 하지 않는다.",
    number: '"송파구에서 일 잘하는 방법 6번째"',
  },
  {
    quote: "팩트에 기반한 보고만 한다.",
    number: '"송파구에서 일 잘하는 방법 7번째"',
  },
  {
    quote:
      "일을 시작할 때는 목적, 기간, 예상산출물, 예상결과, 공유대상자를 생각한다.",
    number: '"송파구에서 일 잘하는 방법 8번째"',
  },
  {
    quote: "나는 일의 마지막이 아닌 중간에 있다.",
    number: '"송파구에서 일 잘하는 방법 9번째"',
  },
  {
    quote: "책임은 실행한 사람이 아닌 결정한 사람이 진다.",
    number: '"송파구에서 일 잘하는 방법 10번째"',
  },
  {
    quote: "솔루션 없는 불만만 갖게 되는 때가 회사를 떠날 때다.",
    number: '"송파구에서 일 잘하는 방법 11번째"',
  },
];

const quote = document.querySelector(".quote");
const quoteNumber = document.querySelector(".quote-number");
const randomQuoteText = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuoteText.quote;
quoteNumber.innerText = randomQuoteText.number;
