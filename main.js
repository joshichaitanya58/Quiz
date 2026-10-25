// ==========================================
// DOM ELEMENTS
// ==========================================
const screenLogo = document.getElementById('screen-logo');
const screenRules = document.getElementById('screen-rules');
const screenWelcome = document.getElementById('screen-welcome');
const screenGame = document.getElementById('screen-game');
const screenGameOver = document.getElementById('screen-gameover');

const logoTrigger = document.getElementById('logo-trigger');
const continueBtn = document.getElementById('continue-btn');
const rulesNextBtn = document.getElementById('rules-next-btn');
const startBtn = document.getElementById('startButton');
const playAgainBtn = document.getElementById('play-again-btn');
const muteBtn = document.getElementById('mute-btn');

const questionCountEl = document.getElementById('question-count');
const scoreDisplayEl = document.getElementById('score-display');
const timerBox = document.getElementById('timer-box');
const runTimeEl = document.getElementById('run-time');
const questionTextEl = document.getElementById('question-text');
const feedbackBanner = document.getElementById('feedback-banner');

const optionButtons = [
    document.getElementById('option1'),
    document.getElementById('option2'),
    document.getElementById('option3'),
    document.getElementById('option4')
];

const fiftyFiftyBtn = document.getElementById('fifty-fifty');
const audienceBtn = document.getElementById('ask-the-audience');
const pollModal = document.getElementById('poll-modal');
const closePollBtn = document.getElementById('close-poll');
const skipBtn = document.getElementById('skip-btn');
const skipCountEl = document.getElementById('skip-count');

const finalCorrectEl = document.getElementById('final-correct');
const finalScoreEl = document.getElementById('final-score');
const gameoverTitleEl = document.getElementById('gameover-title');
const gameoverReasonEl = document.getElementById('gameover-reason');

// ==========================================
// QUESTION BANK (Cleaned & Standardized)
// ==========================================
const easyQuestions = [
    { question: "भारत की राजधानी क्या है?", options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], correctAnswer: 1 },
    { question: "भारत का राष्ट्रीय पक्षी कौन है?", options: ["तोता", "कबूतर", "मोर", "कौवा"], correctAnswer: 2 },
    { question: "2 + 2 = ?", options: ["3", "4", "5", "6"], correctAnswer: 1 },
    { question: "सूरज किस दिशा से उगता है?", options: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"], correctAnswer: 2 },
    { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "फुटबॉल", "हॉकी", "कबड्डी"], correctAnswer: 2 },
    { question: "सात दिनों में से तीसरा दिन कौन सा होता है?", options: ["सोमवार", "मंगलवार", "बुधवार", "गुरुवार"], correctAnswer: 2 },
    { question: "'जन गण मन' किसने लिखा?", options: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "महात्मा गांधी", "जवाहरलाल नेहरू"], correctAnswer: 0 },
    { question: "कंप्यूटर का दिमाग किसे कहते हैं?", options: ["CPU", "RAM", "Monitor", "Mouse"], correctAnswer: 0 },
    { question: "भारत के प्रधानमंत्री कौन हैं?", options: ["नरेंद्र मोदी", "राहुल गांधी", "अरविंद केजरीवाल", "योगी आदित्यनाथ"], correctAnswer: 0 },
    { question: "ताजमहल कहाँ स्थित है?", options: ["दिल्ली", "जयपुर", "आगरा", "भोपाल"], correctAnswer: 2 },
    { question: "पानी का रासायनिक सूत्र क्या है?", options: ["O2", "CO2", "H2O", "HO2"], correctAnswer: 2 },
    { question: "भारत में कुल कितने राज्य हैं?", options: ["28", "29", "27", "26"], correctAnswer: 0 },
    { question: "भारत की सबसे लंबी नदी कौन सी है?", options: ["यमुना", "गंगा", "नर्मदा", "गोदावरी"], correctAnswer: 1 },
    { question: "गांधी जयंती कब मनाई जाती है?", options: ["15 अगस्त", "2 अक्टूबर", "26 जनवरी", "14 नवंबर"], correctAnswer: 1 },
    { question: "भारत की मुद्रा क्या है?", options: ["डॉलर", "रुपया", "येन", "दिरहम"], correctAnswer: 1 },
    { question: "महात्मा गांधी को क्या कहा जाता है?", options: ["राष्ट्रपिता", "प्रधानमंत्री", "गुरुजी", "संस्थापक"], correctAnswer: 0 },
    { question: "स्वतंत्रता दिवस कब मनाते हैं?", options: ["26 जनवरी", "15 अगस्त", "1 मई", "2 अक्टूबर"], correctAnswer: 1 },
    { question: "तिरंगे में सफेद रंग किसे दर्शाता है?", options: ["बलिदान", "शांति", "हरियाली", "प्रगति"], correctAnswer: 1 },
    { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "हाथी", "चीता", "बाघ"], correctAnswer: 3 },
    { question: "इंटरनेट का जनक किसे माना जाता है?", options: ["टिम बर्नर्स ली", "चार्ल्स बैबेज", "विंटन सर्फ", "स्टीव जॉब्स"], correctAnswer: 2 },
    { question: "रामायण के लेखक कौन हैं?", options: ["तुलसीदास", "वाल्मीकि", "वेद व्यास", "कालिदास"], correctAnswer: 1 },
    { question: "ताजमहल किसने बनवाया?", options: ["अकबर", "शाहजहाँ", "औरंगजेब", "हुमायूं"], correctAnswer: 1 },
    { question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", options: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"], correctAnswer: 2 },
    { question: "भारत के पहले प्रधानमंत्री कौन थे?", options: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"], correctAnswer: 1 },
    { question: "ईमेल का आविष्कार किसने किया?", options: ["बिल गेट्स", "रॉय टॉमलिंसन", "स्टीव जॉब्स", "मार्क जुकरबर्ग"], correctAnswer: 1 },
    { question: "ताजमहल किस नदी के किनारे स्थित है?", options: ["गंगा", "यमुना", "सरस्वती", "गोदावरी"], correctAnswer: 1 },
    { question: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?", options: ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"], correctAnswer: 2 },
    { question: "मनुष्य के शरीर का सामान्य तापमान क्या होता है?", options: ["98.6°F", "100°F", "96.4°F", "99°F"], correctAnswer: 0 },
    { question: "सबसे तेज दौड़ने वाला जानवर कौन है?", options: ["घोड़ा", "बाघ", "चीता", "सिंह"], correctAnswer: 2 },
    { question: "हवा में सबसे अधिक कौन सी गैस होती है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"], correctAnswer: 3 },
    { question: "गुरुत्वाकर्षण का सिद्धांत किसने दिया?", options: ["आइंस्टीन", "गैलीलियो", "न्यूटन", "रामानुजन"], correctAnswer: 2 },
    { question: "कंप्यूटर का जनक किसे कहा जाता है?", options: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "लिनस टॉर्वाल्ड्स"], correctAnswer: 0 },
    { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक", "आर्कटिक", "हिंद महासागर", "प्रशांत महासागर"], correctAnswer: 3 },
    { question: "राष्ट्रीय विज्ञान दिवस कब मनाया जाता है?", options: ["28 फरवरी", "15 मार्च", "5 जून", "1 मई"], correctAnswer: 0 },
    { question: "अशोक स्तंभ कहाँ स्थित है?", options: ["दिल्ली", "सांची", "सारनाथ", "कोलकाता"], correctAnswer: 2 },
    { question: "भारत में पहला मोबाइल नेटवर्क कब शुरू हुआ?", options: ["1995", "2000", "1990", "1985"], correctAnswer: 0 },
    { question: "मंगल ग्रह को किस रंग का ग्रह कहते हैं?", options: ["नीला", "लाल", "पीला", "सफेद"], correctAnswer: 1 },
    { question: "भारतीय संविधान कब लागू हुआ?", options: ["26 जनवरी 1950", "15 अगस्त 1947", "2 अक्टूबर 1952", "26 नवंबर 1949"], correctAnswer: 0 },
    { question: "राजा राम मोहन राय ने किसकी शुरुआत की?", options: ["ब्राह्म समाज", "आर्य समाज", "रामकृष्ण मिशन", "जैन समाज"], correctAnswer: 0 },
    { question: "भारत का राष्ट्रीय फल कौन सा है?", options: ["सेब", "केला", "आम", "संतरा"], correctAnswer: 2 },
    { question: "तिरंगे में सबसे ऊपर कौन सा रंग होता है?", options: ["हरा", "नीला", "केसरिया", "सफेद"], correctAnswer: 2 },
    { question: "महात्मा गांधी को 'महात्मा' सबसे पहले किसने कहा?", options: ["नेहरू", "रवींद्रनाथ टैगोर", "सरदार पटेल", "सुभाष चंद्र बोस"], correctAnswer: 1 },
    { question: "संयुक्त राष्ट्र (UN) का मुख्यालय कहाँ है?", options: ["लंदन", "न्यूयॉर्क", "पेरिस", "जिनेवा"], correctAnswer: 1 },
    { question: "भारत की पहली महिला राष्ट्रपति कौन थीं?", options: ["सुषमा स्वराज", "प्रतिभा पाटिल", "इंदिरा गांधी", "सरोजिनी नायडू"], correctAnswer: 1 },
    { question: "ATM का फुल फॉर्म क्या है?", options: ["Any Time Money", "Automated Teller Machine", "Auto Transfer Machine", "All Time Money"], correctAnswer: 1 },
    { question: "चंद्रयान-1 किस देश का मिशन था?", options: ["चीन", "अमेरिका", "रूस", "भारत"], correctAnswer: 3 },
    { question: "ISRO की स्थापना कब हुई?", options: ["1965", "1969", "1972", "1980"], correctAnswer: 1 },
    { question: "भारत का पहला उपग्रह कौन सा था?", options: ["INSAT", "Bhaskar", "Aryabhata", "Rohini"], correctAnswer: 2 },
    { question: "कौन सा ग्रह पृथ्वी के सबसे नजदीक है?", options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"], correctAnswer: 0 },
    { question: "नालंदा विश्वविद्यालय किस राज्य में स्थित है?", options: ["उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल", "मध्य प्रदेश"], correctAnswer: 1 },
    { question: "भारत के पहले राष्ट्रपति कौन थे?", options: ["डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "महात्मा गांधी", "डॉ. जाकिर हुसैन"], correctAnswer: 0 },
    { question: "Google की स्थापना किसने की?", options: ["बिल गेट्स", "लैरी पेज और सर्गेई ब्रिन", "स्टीव जॉब्स", "मार्क जुकरबर्ग"], correctAnswer: 1 },
    { question: "HTML का पूरा नाम क्या है?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Tool Multi Language", "Hyperlink Text Marking Language"], correctAnswer: 1 },
    { question: "CPU का पूरा नाम क्या है?", options: ["Central Processing Unit", "Computer Power Unit", "Central Performance Unit", "Control Processing Unit"], correctAnswer: 0 },
    { question: "पृथ्वी को नीला ग्रह क्यों कहा जाता है?", options: ["हरियाली के कारण", "जल की उपस्थिति के कारण", "पर्वतों के कारण", "आकाश के कारण"], correctAnswer: 1 },
    { question: "हवा महल कहाँ स्थित है?", options: ["जयपुर", "दिल्ली", "लखनऊ", "भोपाल"], correctAnswer: 0 },
    { question: "ओलंपिक खेल कितने वर्षों के अंतराल पर होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
    { question: "सूर्यग्रहण कब होता है?", options: ["सूर्य-पृथ्वी-चंद्रमा", "चंद्रमा-पृथ्वी-सूर्य", "पृथ्वी-सूर्य-चंद्रमा", "चंद्रमा जब सूर्य और पृथ्वी के बीच आता है"], correctAnswer: 3 },
    { question: "कंप्यूटर में 'RAM' का पूर्ण रूप क्या है?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Right Access Memory"], correctAnswer: 0 },
    { question: "कुतुब मीनार कहाँ स्थित है?", options: ["दिल्ली", "जयपुर", "लखनऊ", "हैदराबाद"], correctAnswer: 0 },
    { question: "क्षेत्रफल की दृष्टि से विश्व का सबसे बड़ा देश कौन सा है?", options: ["अमेरिका", "कनाडा", "रूस", "चीन"], correctAnswer: 2 },
    { question: "भारत में सबसे पहली ट्रेन कहाँ से कहाँ तक चली थी?", options: ["दिल्ली से आगरा", "मुंबई से ठाणे", "कोलकाता से हावड़ा", "चेन्नई से मदुरै"], correctAnswer: 1 },
    { question: "सौरमंडल में कुल कितने ग्रह हैं?", options: ["7", "8", "9", "10"], correctAnswer: 1 },
    { question: "सांप-सीढ़ी के खेल की उत्पत्ति किस देश में हुई?", options: ["अमेरिका", "भारत", "चीन", "मिस्र"], correctAnswer: 1 },
    { question: "भारत में जनगणना कितने वर्षों में होती है?", options: ["5 साल", "10 साल", "15 साल", "हर साल"], correctAnswer: 1 },
    { question: "पानीपत की पहली लड़ाई कब हुई थी?", options: ["1526", "1556", "1761", "1947"], correctAnswer: 0 },
    { question: "रेड क्रॉस की स्थापना किसने की?", options: ["हेनरी डूनैंट", "फ्लोरेंस नाइटिंगेल", "लुई पाश्चर", "मार्को पोलो"], correctAnswer: 0 },
    { question: "शतरंज का आविष्कार किस देश में हुआ था?", options: ["भारत", "चीन", "पाकिस्तान", "ईरान"], correctAnswer: 0 },
    { question: "भारत की पहली महिला प्रधानमंत्री कौन थीं?", options: ["प्रतिभा पाटिल", "सोनिया गांधी", "इंदिरा गांधी", "सुषमा स्वराज"], correctAnswer: 2 },
    { question: "दुनिया की सबसे ऊँची इमारत कौन सी है?", options: ["बुर्ज खलीफा", "एंपायर स्टेट बिल्डिंग", "लोटस टॉवर", "पेट्रोनास टॉवर"], correctAnswer: 0 },
    { question: "मिल्खा सिंह किस खेल से जुड़े थे?", options: ["क्रिकेट", "हॉकी", "एथलेटिक्स", "कुश्ती"], correctAnswer: 2 },
    { question: "महात्मा गांधी को 'राष्ट्रपिता' किसने कहा था?", options: ["नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस", "भगत सिंह"], correctAnswer: 2 },
    { question: "किस दिन को 'बाल दिवस' के रूप में मनाया जाता है?", options: ["2 अक्टूबर", "15 अगस्त", "5 सितंबर", "14 नवंबर"], correctAnswer: 3 },
    { question: "कंप्यूटर में प्रयुक्त 'WWW' का पूरा नाम क्या है?", options: ["World Wide Web", "Wide Web World", "Web World Wide", "Wide World Web"], correctAnswer: 0 },
    { question: "सोने (Gold) का रासायनिक प्रतीक क्या है?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: 2 },
    { question: "Microsoft के संस्थापक कौन हैं?", options: ["स्टीव जॉब्स", "बिल गेट्स", "एलन मस्क", "लैरी पेज"], correctAnswer: 1 },
    { question: "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?", options: ["डल झील", "चिल्का झील", "पिछोला झील", "वुलर झील"], correctAnswer: 1 },
    { question: "महाभारत के रचयिता कौन हैं?", options: ["वाल्मीकि", "महर्षि वेद व्यास", "कबीर", "तुलसीदास"], correctAnswer: 1 },
    { question: "CPU में कौन सा हिस्सा नियंत्रण (Control) करता है?", options: ["ALU", "CU", "RAM", "ROM"], correctAnswer: 1 },
    { question: "लाल किला कहाँ स्थित है?", options: ["दिल्ली", "आगरा", "जयपुर", "लखनऊ"], correctAnswer: 0 },
    { question: "भारतीय संसद के कितने सदन होते हैं?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
    { question: "DNA का पूर्ण रूप क्या है?", options: ["Deoxyribonucleic Acid", "Digital Network Area", "Data Numeric Access", "None"], correctAnswer: 0 },
    { question: "विटामिन D का मुख्य प्राकृतिक स्रोत क्या है?", options: ["सूरज की रोशनी", "दूध", "चावल", "आलू"], correctAnswer: 0 },
    { question: "USB का फुल फॉर्म क्या है?", options: ["Universal Serial Bus", "Universal Service Band", "United System Board", "None"], correctAnswer: 0 },
    { question: "Bluetooth किस नेटवर्क का उदाहरण है?", options: ["LAN", "MAN", "PAN", "WAN"], correctAnswer: 2 },
    { question: "हाइड्रोजन का रासायनिक प्रतीक क्या है?", options: ["Hy", "H", "Hd", "Hg"], correctAnswer: 1 },
    { question: "महात्मा गांधी का जन्म किस वर्ष हुआ था?", options: ["1869", "1872", "1859", "1881"], correctAnswer: 0 },
    { question: "HTML में पेज हेडर के लिए कौन सा टैग प्रयोग होता है?", options: ["<head>", "<header>", "<h1>", "<title>"], correctAnswer: 1 },
    { question: "Binary संख्या प्रणाली में कितने अंक होते हैं?", options: ["2", "8", "10", "16"], correctAnswer: 0 },
    { question: "PDF का पूरा नाम क्या है?", options: ["Public Document File", "Portable Document Format", "Printed Document Format", "Private Data File"], correctAnswer: 1 },
    { question: "चर्नोबिल परमाणु हादसा किस वर्ष हुआ था?", options: ["1984", "1985", "1986", "1987"], correctAnswer: 2 },
    { question: "सापेक्षता का सिद्धांत (Theory of Relativity) किसने दिया?", options: ["न्यूटन", "बोहर", "अल्बर्ट आइंस्टीन", "स्टीफन हॉकिंग"], correctAnswer: 2 },
    { question: "DNS का फुल फॉर्म क्या है?", options: ["Domain Name System", "Data Network Service", "Digital Name Source", "Domain Net System"], correctAnswer: 0 },
    { question: "AI का पूर्ण रूप क्या है?", options: ["Artificial Interface", "Artificial Intelligence", "Automatic Integration", "Applied Intelligence"], correctAnswer: 1 },
    { question: "GPS का फुल फॉर्म क्या है?", options: ["Global Pointing System", "Global Positioning System", "Geo Positioning Set", "Google Position System"], correctAnswer: 1 },
    { question: "World Wide Web (WWW) का आविष्कार किसने किया?", options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], correctAnswer: 1 },
    { question: "Bitcoin किस तकनीक पर आधारित है?", options: ["Cryptography", "Blockchain", "AI", "Cloud"], correctAnswer: 1 },
    { question: "LED का पूर्ण रूप क्या होता है?", options: ["Light Emitting Diode", "Low Energy Device", "Line Edit Display", "Light Energy Diode"], correctAnswer: 0 },
    { question: "रामकृष्ण मिशन की स्थापना किसने की थी?", options: ["स्वामी विवेकानंद", "स्वामी दयानंद", "रामकृष्ण परमहंस", "केशव चंद्र सेन"], correctAnswer: 0 },
    { question: "CUDA किस कंपनी की टेक्नोलॉजी है?", options: ["AMD", "Intel", "NVIDIA", "Qualcomm"], correctAnswer: 2 },
    { question: "Higgs Boson कण को किस नाम से जाना जाता है?", options: ["आइंस्टीन पार्टिकल", "गॉड पार्टिकल", "ग्रेविटी बिंदु", "मास पॉइंट"], correctAnswer: 1 },
    { question: "न्यायपालिका में PIL का पूर्ण रूप क्या है?", options: ["Public Integration Law", "Public Interest Litigation", "Private Interest Litigation", "Public Information Law"], correctAnswer: 1 },
    { question: "Graphene किस तत्व का अपरूप (Allotrope) है?", options: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन", "नाइट्रोजन"], correctAnswer: 2 },
    { question: "भारत रत्न से सम्मानित होने वाले पहले गैर-भारतीय कौन थे?", options: ["नेल्सन मंडेला", "मार्टिन लूथर किंग", "खान अब्दुल गफ्फार खान", "दलाई लामा"], correctAnswer: 2 },
    { question: "NASA का मुख्यालय कहाँ स्थित है?", options: ["न्यूयॉर्क", "वाशिंगटन डी.सी.", "ह्यूस्टन", "शिकागो"], correctAnswer: 1 },
    { question: "IPv6 एड्रेस में कितने bits होते हैं?", options: ["32", "64", "128", "256"], correctAnswer: 2 },
    { question: "बायोगैस में मुख्य रूप से कौन सी गैस होती है?", options: ["ऑक्सीजन", "मीथेन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"], correctAnswer: 1 },
    { question: "भारतीय रिज़र्व बैंक (RBI) की स्थापना किस वर्ष हुई?", options: ["1930", "1935", "1940", "1947"], correctAnswer: 1 },
    { question: "डीजल इंजन का आविष्कार किसने किया?", options: ["रुडोल्फ डीजल", "मार्कोनी", "गोटलिब डेमलर", "जेम्स वाट"], correctAnswer: 0 },
    { question: "इलेक्ट्रॉन की खोज किसने की?", options: ["रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर", "चैडविक"], correctAnswer: 1 },
    { question: "वास्को डी गामा भारत किस वर्ष आया था?", options: ["1492", "1496", "1498", "1501"], correctAnswer: 2 },
    { question: "अंतर्राष्ट्रीय न्यायालय (ICJ) का मुख्यालय कहाँ है?", options: ["पेरिस", "लंदन", "द हेग", "जिनेवा"], correctAnswer: 2 }
];

// ==========================================
// GAME STATE VARIABLES
// ==========================================
let currentQuestionIndex = 0;
let correctIndex = 0;
let questionsAnswered = 0;
let currentScore = 0;
let skipsRemaining = 5;
let usedQuestionIndices = new Set();

let timerInterval = null;
let timeLeft = 45;
let isMuted = false;
let isProcessingClick = false;

// Audio Objects (Handled safely if audio files are missing)
const questionSound = new Audio('kbc-question.mp3');
const timerSound = new Audio('kbc-timer.mp3');

function playSound(audioObj, durationMs = null) {
    if (isMuted) return;
    try {
        audioObj.currentTime = 0;
        const playPromise = audioObj.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {}); // Prevent uncaught autoplay error
        }
        if (durationMs) {
            setTimeout(() => {
                audioObj.pause();
            }, durationMs);
        }
    } catch (e) {}
}

function stopAllSounds() {
    try {
        questionSound.pause();
        timerSound.pause();
    } catch (e) {}
}

// ==========================================
// SCREEN NAVIGATION
// ==========================================
function showScreen(screenToShow) {
    [screenLogo, screenRules, screenWelcome, screenGame, screenGameOver].forEach(scr => {
        scr.classList.remove('active');
    });
    screenToShow.classList.add('active');
}

logoTrigger.addEventListener('click', () => showScreen(screenRules));
continueBtn.addEventListener('click', () => showScreen(screenRules));
rulesNextBtn.addEventListener('click', () => showScreen(screenWelcome));

startBtn.addEventListener('click', () => {
    initNewGame();
    showScreen(screenGame);
});

playAgainBtn.addEventListener('click', () => {
    initNewGame();
    showScreen(screenGame);
});

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '🔇 Muted' : '🔊 Sound On';
    if (isMuted) stopAllSounds();
});

// ==========================================
// CORE GAME LOGIC
// ==========================================
function initNewGame() {
    questionsAnswered = 0;
    currentScore = 0;
    skipsRemaining = 5;
    usedQuestionIndices.clear();

    // Reset Lifelines
    fiftyFiftyBtn.classList.remove('used');
    fiftyFiftyBtn.disabled = false;
    audienceBtn.classList.remove('used');
    audienceBtn.disabled = false;

    // Reset Skip Button
    skipCountEl.textContent = skipsRemaining;
    skipBtn.disabled = false;

    updateHUD();
    loadNextQuestion();
}

function updateHUD() {
    questionCountEl.textContent = `#${questionsAnswered + 1}`;
    scoreDisplayEl.textContent = `₹ ${currentScore.toLocaleString('en-IN')}`;
}

function pickUniqueQuestionIndex() {
    if (usedQuestionIndices.size >= easyQuestions.length) {
        usedQuestionIndices.clear();
    }
    let idx;
    do {
        idx = Math.floor(Math.random() * easyQuestions.length);
    } while (usedQuestionIndices.has(idx));

    usedQuestionIndices.add(idx);
    return idx;
}

function loadNextQuestion() {
    isProcessingClick = false;
    pollModal.classList.remove('active');
    feedbackBanner.className = 'feedback-banner';
    feedbackBanner.textContent = '';

    currentQuestionIndex = pickUniqueQuestionIndex();
    const qObj = easyQuestions[currentQuestionIndex];
    correctIndex = qObj.correctAnswer;

    // Use textContent so HTML tags like <head> render properly
    questionTextEl.textContent = qObj.question;

    optionButtons.forEach((btn, idx) => {
        btn.disabled = false;
        btn.classList.remove('correct-ans', 'wrong-ans', 'hidden-opt');
        const textSpan = btn.querySelector('.opt-text');
        textSpan.textContent = qObj.options[idx] || '';
    });

    updateHUD();
    playSound(questionSound, 4000);
    startTimer();
}

// ==========================================
// TIMER LOGIC (45 Seconds Countdown)
// ==========================================
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 45;
    runTimeEl.textContent = timeLeft;
    timerBox.classList.remove('danger');

    playSound(timerSound, 45000);

    timerInterval = setInterval(() => {
        timeLeft--;
        runTimeEl.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerBox.classList.add('danger');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            stopAllSounds();
            endGame("⏰ समय समाप्त! (Time's Up!)", "You ran out of time on this question.");
        }
    }, 1000);
}

// ==========================================
// OPTION SELECTION HANDLER
// ==========================================
optionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (isProcessingClick) return;
        isProcessingClick = true;

        clearInterval(timerInterval);
        stopAllSounds();

        // Lock all buttons
        optionButtons.forEach(b => (b.disabled = true));

        if (index === correctIndex) {
            btn.classList.add('correct-ans');
            questionsAnswered++;
            currentScore += 10000 * questionsAnswered; // Progressive prize calculation
            updateHUD();

            feedbackBanner.textContent = '✅ सही उत्तर! (Correct Answer!) Loading next question...';
            feedbackBanner.className = 'feedback-banner correct';

            setTimeout(() => {
                loadNextQuestion();
            }, 1800);
        } else {
            btn.classList.add('wrong-ans');
            optionButtons[correctIndex].classList.add('correct-ans');

            const rightText = easyQuestions[currentQuestionIndex].options[correctIndex];
            feedbackBanner.textContent = `❌ गलत उत्तर! सही जवाब था: "${rightText}"`;
            feedbackBanner.className = 'feedback-banner wrong';

            setTimeout(() => {
                endGame('❌ गलत उत्तर! (Wrong Answer)', `The correct answer was: ${rightText}`);
            }, 2400);
        }
    });
});

// ==========================================
// LIFELINES & SKIP LOGIC
// ==========================================

// 1. 50:50 Lifeline
fiftyFiftyBtn.addEventListener('click', () => {
    if (fiftyFiftyBtn.disabled || isProcessingClick) return;

    let wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIndex);
    // Shuffle wrong indices and hide 2 of them
    wrongIndices.sort(() => Math.random() - 0.5);

    optionButtons[wrongIndices[0]].classList.add('hidden-opt');
    optionButtons[wrongIndices[0]].disabled = true;

    optionButtons[wrongIndices[1]].classList.add('hidden-opt');
    optionButtons[wrongIndices[1]].disabled = true;

    fiftyFiftyBtn.classList.add('used');
    fiftyFiftyBtn.disabled = true;
});

// 2. Audience Poll Lifeline
audienceBtn.addEventListener('click', () => {
    if (audienceBtn.disabled || isProcessingClick) return;

    const correctPercent = Math.floor(Math.random() * 21) + 60; // 60% to 80%
    let remaining = 100 - correctPercent;
    const votes = [0, 0, 0, 0];
    votes[correctIndex] = correctPercent;

    const others = [0, 1, 2, 3].filter(i => i !== correctIndex);
    others.forEach((idx, pos) => {
        if (pos === others.length - 1) {
            votes[idx] = remaining;
        } else {
            const part = Math.floor(Math.random() * (remaining + 1));
            votes[idx] = part;
            remaining -= part;
        }
    });

    for (let i = 0; i < 4; i++) {
        const bar = document.getElementById(`poll-option${i + 1}`);
        const val = document.getElementById(`poll-val${i + 1}`);
        if (bar && val) {
            bar.style.width = `${votes[i]}%`;
            val.textContent = `${votes[i]}%`;
        }
    }

    pollModal.classList.add('active');
    audienceBtn.classList.add('used');
    audienceBtn.disabled = true;
});

closePollBtn.addEventListener('click', () => {
    pollModal.classList.remove('active');
});

// 3. Skip Question Button (Max 5 times)
skipBtn.addEventListener('click', () => {
    if (skipsRemaining <= 0 || isProcessingClick) return;

    skipsRemaining--;
    skipCountEl.textContent = skipsRemaining;
    if (skipsRemaining === 0) {
        skipBtn.disabled = true;
    }

    clearInterval(timerInterval);
    stopAllSounds();
    loadNextQuestion();
});

// ==========================================
// GAME OVER HANDLER
// ==========================================
function endGame(title, reason) {
    clearInterval(timerInterval);
    stopAllSounds();

    gameoverTitleEl.textContent = title;
    gameoverReasonEl.textContent = reason;
    finalCorrectEl.textContent = questionsAnswered;
    finalScoreEl.textContent = `₹ ${currentScore.toLocaleString('en-IN')}`;

    showScreen(screenGameOver);
}
