const spots = [
    {
        lat: 35.419904,
        lng: 137.095815,
        title: "ぎふワールド・ローズガーデン",

        image: "images/ぎふワールド・ローズガーデン.jpg",

        description:
            "バラを中心とした花々を楽しめる広大な庭園です。四季を通してさまざまな植物を見ることができます。",

        time: "約1～2時間",

        official:
            "https://gifu-wrg.jp/",

        quiz: {
            question:
                "ぎふワールド・ローズガーデンで特に有名な花は何でしょう？",

            choices: [
                "バラ",
                "ヒマワリ",
                "チューリップ",
                "コスモス"
            ],

            answer: 0,

            explanation:
                "ぎふワールド・ローズガーデンは、バラを中心とした庭園です。"
        }
    },

    {
        lat: 35.457459,
        lng: 137.093064,
        title: "戦国山城ミュージアム",

        image: "images/戦国山城ミュージアム.jpg",

        description:
            "可児市周辺の山城や戦国時代に関する資料を展示している博物館です。地域の歴史を詳しく学ぶことができます。",

        time: "約30～60分",

        official:
            "https://www.city.kani.lg.jp/10017.htm",

        quiz: {
            question:
                "戦国山城ミュージアムでは、主にどの時代について学ぶことができるでしょう？",

            choices: [
                "戦国時代",
                "縄文時代",
                "明治時代",
                "昭和時代"
            ],

            answer: 0,

            explanation:
                "戦国山城ミュージアムでは、地域の山城や戦国時代に関する資料を見ることができます。"
        }
    },

    {
        lat: 35.456605,
        lng: 137.097270,
        title: "美濃金山城跡",

        image: "images/美濃金山城跡.jpg",

        description:
            "戦国時代の山城跡で、森蘭丸ゆかりの城として知られています。山城の歴史を感じることができます。",

        time: "約1～1.5時間",

        official:
            "https://www.city.kani.lg.jp/5580.htm",

        quiz: {
            question:
                "美濃金山城跡にゆかりの深い人物は誰でしょう？",

            choices: [
                "森蘭丸",
                "坂本龍馬",
                "徳川家康",
                "伊達政宗"
            ],

            answer: 0,

            explanation:
                "美濃金山城は森蘭丸ゆかりの山城として知られています。"
        }
    },

    {
        lat: 35.453470,
        lng: 137.094218,
        title: "蘭丸ふる里の森",

        image: "images/蘭丸ふる里の森.jpg",

        description:
            "森蘭丸ゆかりの地にある自然豊かな場所です。散策しながら歴史と自然を楽しむことができます。",

        time: "約30～60分",

        official:
            "https://www.city.kani.lg.jp/9836.htm",

        quiz: {
            question:
                "蘭丸ふる里の森の「蘭丸」とは誰のことでしょう？",

            choices: [
                "森蘭丸",
                "明智光秀",
                "徳川家康",
                "豊臣秀吉"
            ],

            answer: 0,

            explanation:
                "蘭丸ふる里の森は、森蘭丸にゆかりのある場所です。"
        }
    },

    {
        lat: 35.422500,
        lng: 137.005472,
        title: "可児川下流域自然公園",

        image: "images/可児川下流域自然公園.jpg",

        description:
            "可児川の下流域に広がる自然豊かな公園です。季節の自然や景色を楽しみながら散策できます。",

        time: "約30～60分",

        official:
            "https://www.city.kani.lg.jp/",

        quiz: {
            question:
                "可児川下流域自然公園の名前に入っている川はどれでしょう？",

            choices: [
                "可児川",
                "木曽川",
                "長良川",
                "揖斐川"
            ],

            answer: 0,

            explanation:
                "この公園は可児川の下流域に位置しています。"
        }
    },

    {
        lat: 35.434444,
        lng: 137.023333,
        title: "木曽川渡し場遊歩道",

        image: "images/木曽川渡し場遊歩道.jpg",

        description:
            "木曽川沿いを歩きながら、川の景色や周辺の自然を楽しめる遊歩道です。",

        time: "約30～60分",

        official:
            "https://www.kankou-gifu.jp/spot/detail_7557.html",

        quiz: {
            question:
                "木曽川渡し場遊歩道は、どの川沿いにあるでしょう？",

            choices: [
                "木曽川",
                "可児川",
                "長良川",
                "庄内川"
            ],

            answer: 0,

            explanation:
                "木曽川渡し場遊歩道は、木曽川沿いにある遊歩道です。"
        }
    },

    {
        lat: 35.420958,
        lng: 137.085027,
        title: "明智城跡",

        image: "images/明智城跡.jpg",

        description:
            "明智光秀ゆかりの地として知られる城跡です。自然の中を歩きながら歴史を感じることができます。",

        time: "約1時間",

        official:
            "https://www.kankou-gifu.jp/spot/detail_3392.html",

        quiz: {
            question:
                "明智城跡にゆかりのある人物として知られているのは誰でしょう？",

            choices: [
                "明智光秀",
                "森蘭丸",
                "織田信長",
                "豊臣秀吉"
            ],

            answer: 0,

            explanation:
                "明智城跡は明智光秀ゆかりの地として知られています。"
        }
    },

    {
        lat: 35.403523,
        lng: 137.110960,
        title: "可児郷土歴史館",

        image: "images/可児郷土歴史館.jpg",

        description:
            "可児市の歴史や文化に関する資料を展示している施設です。地域の歴史を知ることができます。",

        time: "約30～60分",

        official:
            "https://www.kankou-gifu.jp/spot/detail_6679.html",

        quiz: {
            question:
                "可児郷土歴史館で学べるのは主に何についてでしょう？",

            choices: [
                "可児市の歴史や文化",
                "宇宙の歴史",
                "世界の自動車",
                "海洋生物"
            ],

            answer: 0,

            explanation:
                "可児郷土歴史館では、可児市の歴史や文化に関する資料を見ることができます。"
        }
    },

    {
        lat: 35.399713,
        lng: 137.136799,
        title: "荒川豊蔵資料館",

        image: "images/荒川豊蔵資料館.jpg",

        description:
            "陶芸家・荒川豊蔵に関する資料を展示している施設です。陶芸や美濃焼の文化に触れることができます。",

        time: "約1時間",

        official:
            "https://www.kankou-gifu.jp/spot/detail_8074.html",

        quiz: {
            question:
                "荒川豊蔵資料館と特に関係が深いものは何でしょう？",

            choices: [
                "陶芸",
                "鉄道",
                "天文学",
                "水泳"
            ],

            answer: 0,

            explanation:
                "荒川豊蔵資料館は、陶芸家・荒川豊蔵に関する資料を展示しています。"
        }
    }
];


const routes = [
    {
        name: "戦国歴史ルート",
        color: "#FF0000",
        spots: [1, 2, 3]
    },

    {
        name: "自然・花めぐりルート",
        color: "#0000FF",
        spots: [4, 5, 0]
    },

    {
        name: "歴史・文化ルート",
        color: "#00AA00",
        spots: [6, 7, 8]
    }
];


function addQuizStyle() {
    const style = document.createElement("style");

    style.innerHTML = `
        #quizPanel {
            position: fixed;
            left: 0;
            top: 0;
            width: 360px;
            height: 100vh;
            background: white;
            box-shadow: 3px 0 12px rgba(0,0,0,0.25);
            z-index: 10000;
            padding: 20px;
            box-sizing: border-box;
            overflow-y: auto;
            display: none;
            font-family:
                Arial,
                "Noto Sans JP",
                sans-serif;
        }

        #quizPanel h2 {
            margin-top: 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #333;
            font-size: 20px;
        }

        #quizPanel h3 {
            margin-top: 18px;
            margin-bottom: 8px;
        }

        #quizPanel p {
            line-height: 1.7;
        }

        .closeQuizButton {
            position: absolute;
            right: 12px;
            top: 8px;
            border: none;
            background: none;
            font-size: 28px;
            cursor: pointer;
            color: #555;
        }

        #quizPanel a {
            color: #0000EE;
            text-decoration: underline;
            word-break: break-all;
        }

        .quizQuestion {
            font-weight: bold;
            line-height: 1.7;
            margin-bottom: 15px;
        }

        .quizButton {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 12px;
            border: 1px solid #aaa;
            border-radius: 8px;
            background: #f5f5f5;
            cursor: pointer;
            text-align: left;
            font-size: 15px;
        }

        .quizCorrect {
            margin-top: 15px;
            padding: 15px;
            border-radius: 10px;
            background: #e8f5e9;
            border: 2px solid #4caf50;
        }

        .quizCorrect h3 {
            color: #2e7d32;
            margin-top: 0;
        }

        .quizWrong {
            margin-top: 15px;
            padding: 15px;
            border-radius: 10px;
            background: #ffebee;
            border: 2px solid #f44336;
        }

        .quizWrong h3 {
            color: #c62828;
            margin-top: 0;
        }

        .retryButton {
            margin-top: 10px;
            padding: 10px 18px;
            border: none;
            border-radius: 7px;
            background: #555;
            color: white;
            cursor: pointer;
        }
    `;

    document.head.appendChild(style);
}


function createQuizPanel() {
    const panel = document.createElement("div");

    panel.id = "quizPanel";

    document.body.appendChild(panel);
}


function showQuiz(index) {
    const spot = spots[index];

    const quiz = spot.quiz;

    const panel =
        document.getElementById("quizPanel");

    if (!panel) {
        return;
    }

    let html = `
        <button
            class="closeQuizButton"
            onclick="closeQuiz()">
            閉じる
        </button>

        <h2>
            ${spot.title}
        </h2>

        <h3>
            回る所要時間
        </h3>

        <p>
            ${spot.time}
        </p>

        <h3>
            観光名所のホームページ
        </h3>

        <p>
            <a
                href="${spot.official}"
                target="_blank"
                rel="noopener noreferrer">
                ${spot.official}
            </a>
        </p>

        <hr>

        <h3>
            観光クイズ
        </h3>

        <p class="quizQuestion">
            ${quiz.question}
        </p>
    `;

    quiz.choices.forEach((choice, choiceIndex) => {
        html += `
            <button
                class="quizButton"
                onclick="answerQuiz(${index}, ${choiceIndex})">

                ${choiceIndex + 1}.
                ${choice}

            </button>
        `;
    });

    html += `
        <div id="quizResult"></div>
    `;

    panel.innerHTML = html;

    panel.style.display = "block";
}


function answerQuiz(spotIndex, selectedAnswer) {
    const spot = spots[spotIndex];

    const quiz = spot.quiz;

    const result =
        document.getElementById("quizResult");

    if (!result) {
        return;
    }

    if (selectedAnswer === quiz.answer) {
        result.innerHTML = `
            <div class="quizCorrect">
                <h3>
                    正解！
                </h3>

                <p>
                    正解は

                    <strong>
                        「${quiz.choices[quiz.answer]}」
                    </strong>

                    です。
                </p>

                <p>
                    ${quiz.explanation}
                </p>
            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="quizWrong">
                <h3>
                    残念！
                </h3>

                <p>
                    正解は

                    <strong>
                        「${quiz.choices[quiz.answer]}」
                    </strong>

                    です。
                </p>

                <p>
                    ${quiz.explanation}
                </p>

                <button
                    class="retryButton"
                    onclick="showQuiz(${spotIndex})">

                    もう一度挑戦

                </button>
            </div>
        `;
    }
}


function closeQuiz() {
    const panel =
        document.getElementById("quizPanel");

    if (panel) {
        panel.style.display = "none";
    }
}


function createInfoWindow(index) {
    const spot = spots[index];

    return new google.maps.InfoWindow({
        content: `
            <div style="
                width:250px;
                font-family:sans-serif;
            ">

                <h3 style="
                    margin-top:0;
                    margin-bottom:10px;
                ">
                    ${spot.title}
                </h3>

                <img
                    src="${spot.image}"
                    alt="${spot.title}"
                    style="
                        width:100%;
                        border-radius:6px;
                    "
                >

                <p style="
                    line-height:1.6;
                ">
                    ${spot.description}
                </p>

            </div>
        `
    });
}


function drawRoute() {
    addQuizStyle();

    createQuizPanel();

    spots.forEach((spot, index) => {
        const marker =
            new google.maps.Marker({
                position: {
                    lat: spot.lat,
                    lng: spot.lng
                },

                map: map,

                title: spot.title
            });

        const infoWindow =
            createInfoWindow(index);

        marker.addListener("click", function() {
            infoWindow.open({
                anchor: marker,
                map: map
            });

            showQuiz(index);
        });
    });

    routes.forEach(route => {
        const path =
            route.spots.map(index => {
                return {
                    lat: spots[index].lat,
                    lng: spots[index].lng
                };
            });

        new google.maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: route.color,
            strokeOpacity: 0.8,
            strokeWeight: 5,
            map: map
        });
    });
}