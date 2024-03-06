var questions = [
    // Constructivism/Essentialism
    {
        question: '“المرأة لا تولد امرأة، بل تُصبح كذلك.”',
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
        question: 'التباينات في المعاملة بين الناس و نوعية الحياة في مجتمعاتنا تبيّن أن العنصرية لا تزال حاضرة.',
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
        question: 'كل العلوم، بما فيها الكيمياء و الفيزياء، ليست بلا ميل بل تتأثر بطبيعة المجتمع.',
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
        question: 'التصنيفان “نساء” و “رجال” بناءان اجتماعيان ينبغي التخلّص منهما.',
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
        question: 'لا أحد مُجرم بالسليقة.',
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
        question: 'الميل الجنسي بنية اجتماعية',
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
        question: 'الاختلافات الاجتماعية بين المجموعات العرقية لا يمكن تفسيرها بيولوجيًّا.',
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
        question: 'الأدوار الاجتماعية للنساء و الرجال يمكن عزوها جزئيًّا إلى الاختلافات البيولوجيًة.',
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
        question: 'الاختلافات الهرمونية تفسّر بعض الاختلافات في الخصال الشخصية بين النساء و الرجال.',
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
        question: 'النزعة الطبيعية دافع جزئيٌّ للاعتداءات الجنسية.',
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
        question: 'الأشخاص المتحوّلون جنسيا لا يمكن أن يصبحوا فعليًّا من الجنس الذي يعرّفون به أنفسهم.',
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
        question: 'الأفراد المنتمون إلى شعب أو ثقافة ما تجمعهم بعض الخصال المميزة التي لا يمكن تغييرها.',
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
        question: 'البشر من الناحية البيولوجيّة مغايري الجنس.',
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
        question: 'الأنانية هي الدافع الأقوى للجنس البشري أيًّا كان السياق.',
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
        question: 'الحدود ينبغي أن تُزال.',
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
        question: 'ينبغي أن يتمسك الناس بقيمهم حتّى إن أدّى ذلك إلى خيانة بلدهم.',
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
        question: 'يجب أن تدفع بلدي تعويضات عن الجرائم التي ارتكبتها في بلاد أخرى.',
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
        question: 'إن كانت لدولتين ظروف اقتصادية و اجتماعية و بيئية متقاربة فإنّ السوق الحرّة بينهما لن يكون لها أثر سلبي.',
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
        question: 'الشوفينية القومية أثناء المباريات الرياضية غير مقبولة.',
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
        question: 'أهتمُّ بأحوال سكّان البلاد الأخرى بقدر اهتمامي بأحوال أهل بلدي.',
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
        question: 'الأجانب المقيمون في بلدي ينبغي أن يُسمح لهم بالمشاركة السياسية بنفس القدر الذي لمن لديهم الجنسية.',
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
        question: 'المواطنون ينبغي أن تكون لهم الأولوية على الأجانب.',
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
        question: 'القيم المتمثّلة في بلدي أفضل مما في البلاد الأخرى.',
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
        question: 'التعدّديّة الثقافية تهدد مجتمعنا.',
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
        question: 'المواطن الصالح هو من يتّصف بالوطنية.',
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
        question: 'من المشروع تدخل الدول عسكريًّا للدفاع عن مصالحها الاقتصادية.',
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
        question: 'من الضروري تعليم التاريخ لأجل ترسيخ الانتماء إلى الأمّة.',
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
        question: 'البحث العلمي الحاصل في بلد ما ينبغي أن يُتاح للبلاد الأخرى.',
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
        question: 'لا يجوز لأحد أن يصبح غنيًّا نتيجة تملُّك عمل تجاري أو عقار أو أرض.',
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
        question: 'َالأجر عن العمل من ضروب سرقةِ الشركاتِ العمّال.',
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
        question: 'من المهم استبقاء الرعاية الصحية قطاعًا عموميًّا.',
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
        question: 'الطاقة و هيكل المواصلات ينبغي أن تكون قطاعات عمومية.',
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
        question: 'ينبغي ألا توجد براءات الاختراع.',
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
        question: 'من المهم إنشاء وحداتٍ تُكيّف الإنتاجَ وفق احتياجات المستهلكين.',
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
        question: 'سوق العمل استعباد للعمّال.',
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
        question: 'السعي وراء الربح الشخصي مفيد للاقتصاد.',
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
        question: 'الجدارة تفسّر التباين في الثروة بين الأفراد.',
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
        question: 'وجود بعض المدارس و الجامعات الخاصّة ليس مشكلة.',
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
        question: 'التعاقد الخارجي عبر الحدود شرّ لا بد منه لتحسين الإنتاج.',
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
        question: 'من المقبول وجود أغنياء و فقراء.',
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
        question: 'من المقبول وجود بعض القطاعات الصناعية الخاصّة.',
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
        question: 'البنوك ينبغي أن تبقى خاصّة.',
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
        question: 'ينبغي فرض الضرائب على الريوع و رؤوس المال لإعادة توزيع الثروة.',
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
        question: 'ينبغي تقليل سنّ القاعد.',
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
        question: 'الاستغناء عن الموظفين ينبغي أن يكون ممنوعًا إلا بوجود أسباب.',
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
        question: 'ينبغي ضمان حد أدنى للأجور لضمان قدرة العمّال على العيش من عملهم.',
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
        question: 'من الضروري تجنّب الاحتكارات الخاصّة.',
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
        question: 'ديون القطاعات العامّة (الدول و الأقاليم و المجتمعات) لا يلزم سدادها.',
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
        question: 'بعض قطاعات أو أنواع التوظيف ينبغي دعمها ماليًّا.',
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
        question: 'اقتصاد السوق يعمل كما ينبغي عندما لا يفرض عليه تننظيم.',
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
        question: 'في هذه الأيّام، للموظفين حريّة الاختيار عند إمضاء عقود التوظيف.',
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
        question: 'من الضروري إزالة القيود في قوانين العمل لتشجيع الشركات على التوظيف.',
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
        question: 'تنبغي زيادة الحدّ الأقصى القانوني لساعات العمل في الأسبوع.',
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
        question: 'المقبول بيئيًّا ينبغي أن يتحدّد بناء على الاستهلاء الجمعي لا من قِبَل السلطات.',
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
        question: 'الدعم الاجتماعي يُثْني الناس عن العمل.',
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
        question: 'الشركات التي تملكها الدولة ينبغي أن تُدار مثل الشركات الخاصّة و أن تتّبع منطق السوق (المنافسة و الربحية، …إلخ)',
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
        question: 'تنبغي مساءلة العادات المجتمعية.',
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
        question: 'لا أرى مشكلة في إضافة لغات رسمية في بلدي أو استبدال اللغات الرسمية الحاليّة.',
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
        question: 'ينبغي إبطال الزواج.',
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
        question: 'الأجانب يغنون ثقافتنا.',
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
        question: 'ينبغي تقليل أثر العقيدة الدينية.',
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
        question: 'الناس هم من يشكلّون اللغة لا اللغويون.',
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
        question: 'ينبغي التصريح بإنهاء الحياة الرحيم.',
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
        question: 'المثليون ينبغي ألا يعاملوا مثل مغايري الجنس فيما يتعلّق بالزواج و رعاية الأطفال و التبني و الإنجاب.',
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
        question: 'في بعض الحالات الخاصّة يكون الإعدام مقبولا.',
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
        question: 'التقدّم التقني يجب ألّا يغيّر المجتمعات بسرعة كبيرة.',
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
        question: 'ينبغي أن تُدرَّس في المدارس قيمنا و عاداتنا و العلوم الأساسية.',
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
        question: 'الإجهاض ينبغي أن يقتصر على حالات خاصّة.',
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
        question: 'الغرض الأساسي من العلاقة بين الزوجين إنجاب الأطفال.',
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
        question: 'التعفّف ينبغي أن يفضّل على موانع الحمل و ذلك للحفاظ على الطبيعة الحقّة للفعل الجنسي.',
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
        question: 'من غير المقبول أن تؤدّي أفعال الإنسان إلى انقراض الأنواع الحيّة.',
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
        question: 'الأصناف المعدّلة وراثيًّا ينبغي أن يقتصر وجودها على الأغراض البحثية و الطبيّة.',
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
        question: 'يجب أن نُناضل ضد التغيّر المناخي.',
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
        question: 'ينبغي أن نقبل التغيّر في أنماط استهلاكنا الغذاءَ لتقليل تخريب البيئة.',
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
        question: 'من المهم تشجيع نمط زراعي يحافظ على التنوع الأحيائي حتّى إن كانت إنتاجيته أقل.',
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
        question: 'الحفاظ على النظم البيئية غير المدنية أهم من زيادة فرص العمل.',
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
        question: 'تقليل النفاية ينبغي أن يكون بتقليل الإنتاج.',
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
        question: 'استعمار الفضاء حلّ جيّد لتوفير المواد الخام للأرض (الحديد و الفلزّات النادرة و الوقود، …إلخ)',
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
        question: 'من المشروع تغيير النظم البيئات على نحو غير عكوس بغرض تحسين نوعية حياة الإنسان.',
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
        question: 'من الضروري الاستثمار بكثافة في البحث العلمي لتحسين الإنتاجية.',
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
        question: 'مابعدالإنسانية (تعديل الإنسان) سيفيدنا لأنّه سيمكنّنا من تحسين قدراتنا.',
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
        question: 'الانشطار النووي، عند حسن إدارته، مصدر جيّد للطاقة.',
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
        question: 'استغلال الوقود الأحفوري ضروري.',
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
        question: 'الحفاظ على النمو الاقتصادي ينبغي أن يكون من أهداف الحكومة.',
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
        question: 'السجون ينبغي أن تزول.',
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
        question: 'ليس من العدل تقنين حدّ أدنى للعقوبة جرّاء جنحة أو جناية.',
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
        question: 'الأشخاص الخارجون من السجن تنبغي مساعدتهم على إعادة الاندماج في المجتمع.',
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
        question: 'ينبغي لمرفق العدالة دومًا أن يأخذ في الاعتبار السياق و تاريخ المحكوم عليه لتكييف العقوبة.',
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
        question: 'ظروف الحياة في السجون ينبغي أن تُحسّن كثيرًا.',
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
        question: 'حفظ البيانات الشخصية ينبغي تقييده بصرامة و الاستعلامات عابرة قواعد البيانات ينبغي منعه.',
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
        question: 'ينبغي ضمان الحق في المجهولية على الإنترنت.',
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
        question: 'ينبغي أن يكون الغرض من مرفق العدالة معاقبة من يخالفون القانون.',
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
        question: 'ينبغي تسليح الشرطة.',
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
        question: 'التضحية ببعض الحقوق المدنية ضروري للحماية من الأفعال الإرهابيّة.',
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
        question: 'النظام و السلطة ينبغي احترامهما في كل الظروف.',
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
        question: 'العقوبات القاسية فعّالة لأنها رادعة.',
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
        question: 'اعتقال بريء احتياطيًا أفضل من المخاطرة بقيامه بارتكاب جريمة.',
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
        question: 'الإضرابات الواسعة وسيلة جيّدة لنيل حقوق جديدة.',
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
        question: 'النضال المسلّح في البلد ضروري في بعض الأحيان.',
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
        question: 'التمرّد ضروري لإحداث تغييرات عميقة في المجتمع.',
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
        question: 'الناشطية في المؤسسات السياسية القائمة لا أثر لها في تغيير المجتمع.',
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
        question: 'الانتخابات التي تننظّمها الدولة لا تمكنها مساءلة القوى القائمة.',
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
        question: 'الهكر السبراني من الوسائل المشروعة في النضال السياسي.',
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
        question: 'التخريب مشروع في بعض الظروف.',
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
        question: 'يجب على الناشطين التصرف دومًا في حدود القانون.',
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
        question: 'من المحتوم أن تؤول الثورات مآلات سيّئة.',
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
        question: 'تغيير النظام جذريًا مضر بالإنتاج. من الأفضل تحويله تدريجيًا.',
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
        question: 'العنف ضد الأفراد ليس مفيدًا على الإطلاق.',
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
        question: 'ينبغي أن نبتعد عن المتظاهرين الذين يستخدمون العنف.',
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
        question: 'ينبغي تقديم تنازلات لمعارضينا لأجل تطبيق أفكارنا.',
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
        question: 'تغيير نمط الحياة الفردي يمكن أن يُحدث تغييرًا في المجتمع.',
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
        question: 'يجب أن تنتشر عقيدتي الدينية على أوسع نطاق.',
        answer: 0,
        valuesYes: [{
                axis: 'reli',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'العالم تتحّكم فيه من خلف ستار جماعة سريّة.',
        answer: 0,
        valuesYes: [{
                axis: 'comp',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'السياسة الجيّدة تتصّف بالعملانية بلا أيديولوجيات.',
        answer: 0,
        valuesYes: [{
                axis: 'prag',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'يلزمنا تأسيس مَلَكيّة لتوحيد الناس و الحفاظ على استقلاليتنا.',
        answer: 0,
        valuesYes: [{
                axis: 'mona',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'ينبغي على الناس ألا يستغلّوا الحيوانات و لا يأكلوها.',
        answer: 0,
        valuesYes: [{
                axis: 'vega',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'ينبغي إبطال الدولة.',
        answer: 0,
        valuesYes: [{
                axis: 'anar',
                value: 3
            }],
        valuesNo: []
    }
];
