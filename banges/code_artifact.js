const csvData = `연도,제목,이야기,감정,사진파일명,명언
2010.0,As Baby,세상에 나를 선보이다,😊 설렘,baby.jpg,모든 시작은 설렘이었다.
2014.0,As Kid,모든 것이 새로왔다,❤️ 행복,airplane.jpg,모든 것이 마냥 좋기만 했다.
2017.0,As Child,학교라는 공간,😄 기대,enter.jpg,도전은 새로운 세상을 연다.
2023.0,As Adolescent,몸과 마음이 하루하루 달라진다,😅 긴장,sixth.jpg,경험은 최고의 스승이다.`;

const fallbackImg = "https://images.unsplash.com/photo-1516213958998-3df9bf4d1013?w=600";

function init() {
    const rows = csvData.split('\n').slice(1);
    const data = rows.map(row => {
        const [year, title, story, emotion, img, quote] = row.split(',');
        return { year: parseInt(year), title, story, emotion, img, quote };
    });

    const btnContainer = document.getElementById('year-buttons');
    const display = document.getElementById('card-display');

    data.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.className = 'year-btn' + (idx === 0 ? ' active' : '');
        btn.innerText = item.year;
        btn.onclick = () => {
            document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(item);
        };
        btnContainer.appendChild(btn);
    });

    function render(item) {
        display.innerHTML = `
            <div class="card">
                <img src="${item.img}" onerror="this.src='${fallbackImg}'" alt="추억 사진">
                <h2>${item.title} (${item.year}년)</h2>
                <p><strong>이야기:</strong> ${item.story}</p>
                <p><strong>감정:</strong> ${item.emotion}</p>
                <div class="quote">"${item.quote}"</div>
            </div>
        `;
    }
    render(data[0]);
}

init();