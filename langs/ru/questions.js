var questions = [
    // Constructivism/Essentialism
    {
        question: '“Женщиной становятся, а не рождаются.”',
        answer: 0,
        valuesYes: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Различия в обращении и качестве жизни между людьми разных рас в нашем обществе показывают, что расизм все еще вездесущ.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Все науки, даже химия и биология не являются бескомпромиссными и обусловлены нашим обществом.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Категории "женщина" и "мужчина" - социальные конструкты, от которых мы должны отказаться.',
        answer: 0,
        valuesYes: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Никто по своей природе не предрасположен к преступным деяниям.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Сексуальная ориентация - это социальный конструкт',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Социальные различия между этническими группами не могут быть объяснены биологически.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Социальные роли женщин и мужчин частично могут быть объяснены биологическими различиями.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Гормональные различия могут объяснить некоторые расхождения в личных характеристиках женщин и мужчин.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Причины изнасилований отчасти кроются в естественных позывах мужчин.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Трансгендеры никогда не станут людьми желаемого ими пола.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    {
        question: 'Представители любой нации или культуры обладают некоторыми неизменными характеристиками, которые их определяют.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    {
        question: 'С биологической точки зрения, человек создан для гетеросексуальности.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    {
        question: 'В любой ситуации люди в первую очередь движимы собственной выгодой.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    // Internationalism/Nationalism
    {
        question: 'Рано или поздно границы должны быть упразднены.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Люди должны придерживаться своих идеалов, даже если это будет означать предательство своей страны.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Моя страна должна выплатить компенсацию за преступления, которые она совершила в отношении других государств.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Если две страны имеют схожие экономики, социальные системы и экологические нормы, то свободная торговля между ними не имеет отрицательного воздействия.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Национальный шовинизм во время спортивных соревнований неприемлем.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Я в равной степени беспокоюсь о жизни и благосостоянии жителей как моей, так и других стран.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Иностранцы, проживающие в моей стране, должны иметь те же политические права, что и её граждане.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Граждане государства должны иметь приоритет перед иностранцами.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Ценности моей страны превосходят ценности остальных стран.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Мультикультурализм - это угроза нашему обществу.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Хороший гражданин должен быть патриотом.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Страна имеет право на военное вмешательство в целях защиты своих экономических интересов.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Необходимо преподавать историю для создания чувства принадлежности к нации.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Исследования, проведённые моей страной, не должны быть доступны другим странам.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    // Communism/Capitalism
    {
        question: 'Никто не должен иметь права разбогатеть от владения бизнесом, жильём или землёй.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Наёмных работников, получающих заработную плату от частных фирм, эти же компании по сути обворовывают.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Важно, чтобы здравоохранение оставалось в руках государства.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Энергетика и транспортные структуры должны быть государственной собственностью.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Патенты не должны существовать.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Необходимо распределять блага между потребителями, исходя из их потребностей.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Рынок труда ставит рабочих в положение рабов.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Поиск собственной прибыли - здоровое явление для экономики.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Различия в уровне богатства между двумя людьми происходят от их личных заслуг и достоинств.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Тот факт, что некоторые школы и университеты являются частными, не является проблемой.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Делокализация — необходимое зло для улучшения производства.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Вполне допустимо, что есть как богатые, так и бедные люди.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Вполне допустимо, что некоторые отрасли промышленности являются частными.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Банки должны оставаться частными.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    // Regulation/Laissez-faire
    {
        question: 'Доходы и капитал должны облагаться налогом, чтобы перераспределять богатство.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Возраст выхода на пенсию должен быть снижен.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Увольнения сотрудников должны быть запрещены, за исключением случаев, когда это оправдано.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Существование минимальной заработной платы необходимо, чтобы работники могли прожить на плоды своего труда.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Необходимо избегать частных монополий.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Займы, взятые вне частной сферы (у государства, регионов, коллективов и т.д.), должны быть необязательны к возврату.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Некоторым секторам или типам занятости следует оказывать финансовую поддержку.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Рыночная экономика оптимальна тогда, когда не регулируется.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'В настоящее время сотрудники вольны выбирать, подписывая контракт со своим будущим работодателем',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Необходимо устранить ограничения в трудовом законодательстве, дабы поощрять фирмы к найму.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Максимально разрешённое рабочее время по закону должно быть увеличено.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Экологические нормы должны определяться массовым потреблением, а не властями.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Социальная помощь отбивает у людей охоту работать.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Государственные компании должны управляться как частные и следовать логике рынка (конкуренция, рентабельность...).',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    // Progressive/Conservative
    {
        question: 'Традиции должны быть поставлены под сомнение.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Если в моей стране введут другие государственные языки или заменят существующий на новый, я не буду иметь ничего против.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Как таковой брак должен быть отменен.',
        answer: 0,
        valuesYes: [
            {
                axis: 's0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Иностранцы обогащают нашу культуру.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Необходимо ограничить влияние религии.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Язык определяется его пользователями, а не учеными.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Эвтаназия должна быть разрешена.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'В отношении брака, усыновления или продолжения рода гомосексуалы не должны иметь тех же прав, что и гетеросексуалы.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'Смертная казнь оправдана при определённых условиях.',
        answer: 0,
        valuesYes: [
            {
                axis: 's1',
                value: 3
            },
            {
                axis: 'j1',
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: 's0',
                value: 3
            },
            {
                axis: 'j0',
                value: 3
            }
        ]
    },
    {
        question: 'Технический прогресс не должен изменять общество слишком быстро.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'Школа главным образом должна учить нашим ценностям, традициям и фундаментальным знаниям.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'Доступ к абортам следует ограничить за исключением некоторых случаев.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 's0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Главное предназначение пары — обзавестись хотя бы одним ребёнком.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'Дабы сохранить естество полового акта, следует отдавать приоритет воздержанию над контрацепцией.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    // Ecology/Production
    {
        question: 'Недопустимо, чтобы действия людей приводили к исчезновению видов животных.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'ГМО должны быть запрещены вне исследований и медицинских целей.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Мы должны бороться с глобальным потеплением.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Нам следует принять перемены в наших пищевых привычках, чтобы обуздать эксплуатацию природы.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Важно поощрять сельское хозяйство, которое поддерживает биологическое разнообразие продуктов питания, даже если от этого пострадает качество или количество.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Сохранение экосистем вне городов важнее, чем создание рабочих мест.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Сокращение отходов должно осуществляться за счет сокращения производства.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Колонизация космоса — хорошее решение проблемы нехватки сырьевых ресурсов на Земле (железо, редкие металлы, топливо и т. д.)',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Преобразование экосистем для повышения качества жизни людей — это разумно и приемлемо.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Для повышения производительности необходимо активно инвестировать в исследования.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Трансгуманизм будет выгоден тем, что позволит нам улучшить наши возможности.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'При должном обращении, атомная энергетика — благо.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Использование ископаемого топлива (нефть, природный газ, уголь и др.) — насущная необходимость.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Поддержание сильного экономического роста должно быть целью для правительства.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    // Rehabilitative Justice/Punitive Justice
    {
        question: 'Тюрьмы нужно упразднить.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Несправедливо устанавливать минимальное наказание за правонарушение или преступление.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Людей, отбывших тюремный срок, следует реинтегрировать в общество.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Правосудие должно всегда учитывать контекст и прошлое осужденных и соответствующим образом адаптировать свои наказания.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Условия жизни в тюрьме должны быть значительно улучшены.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Регистрация и хранение личных записей должны быть строго ограничены, и перекрестная проверка баз данных должна быть запрещена.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Анонимность в Интернете — неотъемлемое право.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Цель судебной системы должна заключаться в наказании тех, кто пошел против закона.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Полиция должна быть вооружена.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Нам необходимо пожертвовать некоторыми гражданскими свободами для защиты от терроризма.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Порядок и субординация должны уважаться и соблюдаться при любых обстоятельствах.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Тяжёлые наказания эффективны как превентивная мера.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Потенционально опасное лицо лучше превентивно арестовать, чем допускать риск совершения им преступлений.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    // Revolution/Reform
    {
        question: 'Массовая забастовка — хороший способ получить новые права.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Вооруженная борьба в стране иногда необходима.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Для существенных изменений в обществе необходимо восстание.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Активизм существующих политических организаций не имеет отношения к изменению общества.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Организованные государством выборы не могут изменить действующий баланс сил.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Взлом имеет законное место в политической борьбе.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Саботаж оправдан при определенных условиях.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Активисты всегда должны действовать строго в рамках закона.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Революции всегда дурно заканчиваются.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Радикально менять систему попросту непродуктивно. Нам скорее стоит преображать её постепенно.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Насилие над личностью никогда не бывает продуктивным.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Мы всегда должны порывать с теми из протестующих, кто использует насилие.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Нам следует идти на компромиссы с оппозицией, чтобы претворить наши идеи в жизнь.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Изменения в образе жизни отдельного человека могут вызвать изменения в обществе.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    // Bonus Badges
    {
        question: 'Мои религиозные ценности должны быть распостранены как можно шире.',
        answer: 0,
        valuesYes: [{
                axis: 'reli',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Существует небольшая группа, которая сознательно и тайно контролирует мир.',
        answer: 0,
        valuesYes: [{
                axis: 'comp',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Хорошая политика — это прагматичная политика без идеологии.',
        answer: 0,
        valuesYes: [{
                axis: 'prag',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Нам необходимо установить монархию для объединения народа и сохранения нашего суверенитета.',
        answer: 0,
        valuesYes: [{
                axis: 'mona',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Люди не должны ни есть, ни эксплуатировать животных.',
        answer: 0,
        valuesYes: [{
                axis: 'vega',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Государство как таковое следует упразднить.',
        answer: 0,
        valuesYes: [{
                axis: 'anar',
                value: 3
            }],
        valuesNo: []
    }
];