
let logo = document.querySelector('.logo');
let rules = document.querySelector('.rules');
let welcome = document.querySelector('#welcome');
let nextButton = document.querySelector('.next');
let game = document.querySelector('#startButton');
let mainGame = document.querySelector('#game');
let fiftyFifty = document.querySelector('.fifty_fifty');
let name1 = document.querySelector('.name1');
let askTheAudience = document.querySelector('.audience');
let name2 = document.querySelector('.name2');
let options = document.querySelectorAll('.options');
let questionsEasy = document.querySelector('.ques-easy');
let easyLevel = document.querySelector('.easy-level');
let refresh = document.querySelector('.refresh');
let time = document.querySelector('#run-time');
let timerInterval;
let timeLeft = 0;

mainGame.style.display = 'none';
// first page (rules)
logo.onclick = () => {
    logo.style.display = 'none';
    mainGame.style.display = 'none';
    rules.style.display = 'block';
}
// second page (welcome)
nextButton.onclick = () => {
    rules.style.display = 'none';
    welcome.style.display = 'block';
};
// third page (maingame)
game.onclick = () => {
    welcome.style.display = 'none';
    mainGame.style.display = 'block';
    questionAudio(); // Play question audio
}

name1.style.display = 'none';
name2.style.display = 'none';

// fifty fifty lifeline name 
fiftyFifty.addEventListener('mouseover', () => {
    name1.style.display = 'block';

});
fiftyFifty.addEventListener('mouseout', () => {
    name1.style.display = 'none';
})

// audiance poll lifeline name 
askTheAudience.addEventListener('mouseover', () => {
    name2.style.display = 'block';
});
askTheAudience.addEventListener('mouseout', () => {
    name2.style.display = 'none';
})

// option click color change
let o1 = document.querySelector('#option1');
let o2 = document.querySelector('#option2');
let o3 = document.querySelector('#option3');
let o4 = document.querySelector('#option4');
let option = [o1, o2, o3, o4];

let clicked1 = o1.onclick = () => {
    o2.disabled = true;
    o3.disabled = true;
    o4.disabled = true;

    if (o1.innerHTML !== Answer) {
        setTimeout(() => {
            o1.style.backgroundColor = 'red';
            option[ans].style.backgroundColor = 'green';
            alert("Wrong answer, play again");
        }, 2000);
        setTimeout(() => {
            mainGame.style.display = 'none';
            refresh.style.display = 'block';
        }, 3000);
    }
    else {
        o1.style.backgroundColor = 'green';
        setTimeout(() => {
            alert("Correct answer");
            alert("Ready for Next Question");
            o1.disabled = false;
            o2.disabled = false;
            o3.disabled = false;
            o4.disabled = false;
            option[ans].style.backgroundColor = 'rgb(44, 44, 101)';

            nextQuestion.onclick = null; // Remove the event listener
            nextQuestion();

        }, 2000);

    }
}
let clicked2 = o2.onclick = () => {
    o2.style.backgroundColor = 'green';
    o1.disabled = true;
    o3.disabled = true;
    o4.disabled = true;

    if (o2.innerHTML !== Answer) {
        setTimeout(() => {
            o2.style.backgroundColor = 'red';
            option[ans].style.backgroundColor = 'green';
            alert("Wrong answer, play again");
        }, 2000);
        setTimeout(() => {
            mainGame.style.display = 'none';
            refresh.style.display = 'block';

        }, 3000);
    }
    else {
        o2.style.backgroundColor = 'green';
        setTimeout(() => {
            alert("Correct answer");
            alert("Ready for Next Question");

            o1.disabled = false;
            o2.disabled = false;
            o3.disabled = false;
            o4.disabled = false;
            option[ans].style.backgroundColor = 'rgb(44, 44, 101)';

            nextQuestion.onclick = null; // Remove the event listener
            nextQuestion();

        }, 2000);

    }
}
let clicked3 = o3.onclick = () => {
    o3.style.backgroundColor = 'green';
    o2.disabled = true;
    o1.disabled = true;
    o4.disabled = true;

    if (o3.innerHTML !== Answer) {
        setTimeout(() => {
            o3.style.backgroundColor = 'red';
            option[ans].style.backgroundColor = 'green';
            alert("Wrong answer, paly again ");
        }, 2000);
        setTimeout(() => {
            mainGame.style.display = 'none';
            refresh.style.display = 'block';

        }, 3000);
    }
    else {
        o3.style.backgroundColor = 'green';
        setTimeout(() => {
            alert("Correct answer");
            alert("Ready for Next Question");

            o1.disabled = false;
            o2.disabled = false;
            o3.disabled = false;
            o4.disabled = false;
            option[ans].style.backgroundColor = 'rgb(44, 44, 101)';

            nextQuestion.onclick = null; // Remove the event listener
            nextQuestion();

        }, 2000);
    }
}
let clicked4 = o4.onclick = () => {
    o4.style.backgroundColor = 'green';
    o2.disabled = true;
    o3.disabled = true;
    o1.disabled = true;
    if (o4.innerHTML !== Answer) {
        setTimeout(() => {
            o4.style.backgroundColor = 'red';
            option[ans].style.backgroundColor = 'green';
            alert("Wrong answer, play again");

        }, 2000);
        setTimeout(() => {
            mainGame.style.display = 'none';
            refresh.style.display = 'block';

        }, 3000);
    }
    else {
        o4.style.backgroundColor = 'green';
        setTimeout(() => {
            alert("Correct answer");
            alert("Ready for Next Question");

            o1.disabled = false;
            o2.disabled = false;
            o3.disabled = false;
            o4.disabled = false;
            option[ans].style.backgroundColor = 'rgb(44, 44, 101)';

            nextQuestion.onclick = null; // Remove the event listener
            nextQuestion();

        }, 2000);

    }
}

// questions array with options and corect ans 
const easyQuestions = [
    { question: "भारत की राजधानी क्या है?", options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], correctAnswer: 1 },
    { question: "भारत का राष्ट्रीय पक्षी कौन है?", options: ["तोता", "कबूतर", "मोर", "कौवा"], correctAnswer: 2 },
    { question: "2 + 2 = ?", options: ["3", "4", "5", "6"], correctAnswer: 1 },
    { question: "सूरज किस दिशा से उगता है?", options: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"], correctAnswer: 2 },
    { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "फुटबॉल", "हॉकी", "कबड्डी"], correctAnswer: 2 },
    { question: "सात दिनों में से तीसरा दिन कौन सा होता है?", options: ["सोमवार", "मंगलवार", "बुधवार", "गुरुवार"], correctAnswer: 2 },
    { question: "'जन गण मन' किसने लिखा?", options: ["टैगोर", "बंकिम चंद्र", "गांधी", "नेहरू"], correctAnswer: 0 },
    { question: "कंप्यूटर का दिमाग किसे कहते हैं?", options: ["CPU", "RAM", "Monitor", "Mouse"], correctAnswer: 0 },
    { question: "भारत के प्रधानमंत्री कौन हैं (2024)?", options: ["मोदी", "राहुल", "केजरीवाल", "योगी"], correctAnswer: 0 },
    { question: "ताजमहल कहाँ है?", options: ["दिल्ली", "जयपुर", "आगरा", "भोपाल"], correctAnswer: 2 },

    { question: "पानी का रासायनिक सूत्र क्या है?", options: ["O2", "CO2", "H2O", "HO2"], correctAnswer: 2 },
    { question: "भारत में कितने राज्य हैं (2024)?", options: ["28", "29", "27", "26"], correctAnswer: 0 },
    { question: "भारत का सबसे लंबा नदी कौन सा है?", options: ["यमुना", "गंगा", "नर्मदा", "गोदावरी"], correctAnswer: 1 },
    { question: "गांधी जयंती कब मनाई जाती है?", options: ["15 अगस्त", "2 अक्टूबर", "26 जनवरी", "14 नवंबर"], correctAnswer: 1 },
    { question: "भारत की मुद्रा क्या है?", options: ["डॉलर", "रुपया", "येन", "दिरहम"], correctAnswer: 1 },
    { question: "महात्मा गांधी को क्या कहा जाता है?", options: ["राष्ट्रपिता", "प्रधानमंत्री", "गुरुजी", "संस्थापक"], correctAnswer: 0 },
    { question: "स्वतंत्रता दिवस कब मनाते हैं?", options: ["26 जनवरी", "15 अगस्त", "1 मई", "2 अक्टूबर"], correctAnswer: 1 },
    { question: "तिरंगे में सफेद रंग किसे दर्शाता है?", options: ["बलिदान", "शांति", "हरियाली", "प्रगति"], correctAnswer: 1 },
    { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "हाथी", "चीता", "बाघ"], correctAnswer: 3 },
    { question: "इंटरनेट का जनक कौन है?", options: ["टिम बर्नर्स ली", "चार्ल्स बैबेज", "विंटन सर्फ", "स्टीव जॉब्स"], correctAnswer: 2 },

    { question: "रामायण के लेखक कौन हैं?", options: ["तुलसीदास", "वाल्मीकि", "व्यास", "कालीदास"], correctAnswer: 1 },
    { question: "ताजमहल किसने बनवाया?", options: ["अकबर", "शाहजहाँ", "औरंगजेब", "हुमायूं"], correctAnswer: 1 },
    { question: "सबसे बड़ा ग्रह कौन सा है?", options: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"], correctAnswer: 2 },
    { question: "भारत का पहला प्रधानमंत्री कौन था?", options: ["गांधी", "नेहरू", "पटेल", "राजेंद्र प्रसाद"], correctAnswer: 1 },
    { question: "ईमेल का आविष्कार किसने किया?", options: ["बिल गेट्स", "रॉय टॉमलिंसन", "स्टीव जॉब्स", "मार्क जुकरबर्ग"], correctAnswer: 1 },
    { question: "ताजमहल किस नदी के किनारे स्थित है?", options: ["गंगा", "यमुना", "सरस्वती", "गोदावरी"], correctAnswer: 1 },
    { question: "भारत का सबसे बड़ा राज्य क्षेत्रफल में कौन सा है?", options: ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"], correctAnswer: 2 },
    { question: "मनुष्य का सामान्य तापमान क्या होता है?", options: ["98.6°F", "100°F", "96.4°F", "99°F"], correctAnswer: 0 },
    { question: "राष्ट्रीय ध्वज में कितने रंग होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 1 },
    { question: "सबसे तेज दौड़ने वाला जानवर कौन है?", options: ["घोड़ा", "बाघ", "चीता", "सिंह"], correctAnswer: 2 },

    { question: "भारत रत्न किसे दिया जाता है?", options: ["राज्यपाल", "प्रधानमंत्री", "राष्ट्र सेवा में उत्कृष्ट योगदान", "पुलिस अधिकारी"], correctAnswer: 2 },
    { question: "हवा में सबसे अधिक कौन सी गैस होती है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"], correctAnswer: 3 },
    { question: "न्यूटन ने क्या खोजा?", options: ["बल", "गुरुत्वाकर्षण", "विद्युत", "चुंबक"], correctAnswer: 1 },
    { question: "भारत की सबसे ऊँची चोटी कौन सी है?", options: ["कंचनजंघा", "माउंट एवरेस्ट", "गॉडविन ऑस्टिन (K2)", "नंदा देवी"], correctAnswer: 2 },
    { question: "कंप्यूटर का जनक किसे कहा जाता है?", options: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "लिनस टॉर्वाल्ड्स"], correctAnswer: 0 },
    { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक", "आर्कटिक", "हिंद महासागर", "प्रशांत महासागर"], correctAnswer: 3 },
    { question: "विज्ञान दिवस कब मनाया जाता है?", options: ["28 फरवरी", "15 मार्च", "5 जून", "1 मई"], correctAnswer: 0 },
    { question: "अशोक स्तंभ कहाँ स्थित है?", options: ["दिल्ली", "सांची", "सारनाथ", "कोलकाता"], correctAnswer: 2 },
    { question: "भारत में पहला मोबाइल नेटवर्क कब शुरू हुआ?", options: ["1995", "2000", "1990", "1985"], correctAnswer: 0 },
    { question: "मंगल ग्रह को किस रंग का ग्रह कहते हैं?", options: ["नीला", "लाल", "पीला", "सफेद"], correctAnswer: 1 },

    { question: "भारतीय संविधान कब लागू हुआ?", options: ["26 जनवरी 1950", "15 अगस्त 1947", "2 अक्टूबर 1952", "26 नवंबर 1949"], correctAnswer: 0 },
    { question: "राजा राम मोहन राय ने किस की शुरुआत की?", options: ["ब्राह्म समाज", "आर्य समाज", "रामकृष्ण मिशन", "जैन समाज"], correctAnswer: 0 },
    { question: "भारत का राष्ट्रीय फल कौन सा है?", options: ["सेब", "केला", "आम", "संतरा"], correctAnswer: 2 },
    { question: "किस रंग की धार तिरंगे में सबसे ऊपर होती है?", options: ["हरा", "नीला", "केसरिया", "सफेद"], correctAnswer: 2 },
    { question: "महात्मा गांधी को 'महात्मा' किसने कहा?", options: ["नेहरू", "टैगोर", "सरदार पटेल", "सुभाष चंद्र बोस"], correctAnswer: 1 },
    { question: "UN का मुख्यालय कहाँ है?", options: ["लंदन", "न्यूयॉर्क", "पेरिस", "जिनेवा"], correctAnswer: 1 },
    { question: "भारत की पहली महिला राष्ट्रपति कौन थीं?", options: ["सुषमा स्वराज", "प्रतिभा पाटिल", "इंदिरा गांधी", "मेधा पाटकर"], correctAnswer: 1 },
    { question: "ATM का फुल फॉर्म क्या है?", options: ["Any Time Money", "Automated Teller Machine", "Auto Transfer Machine", "All Time Money"], correctAnswer: 1 },
    { question: "चंद्रयान-1 किस देश का मिशन था?", options: ["चीन", "अमेरिका", "रूस", "भारत"], correctAnswer: 3 },
    { question: "ISRO की स्थापना कब हुई?", options: ["1965", "1969", "1972", "1980"], correctAnswer: 1 },

    { question: "भारत का पहला उपग्रह कौन सा था?", options: ["INSAT", "Bhaskar", "Aryabhata", "Rohini"], correctAnswer: 2 },
    { question: "कौन सा ग्रह पृथ्वी से सबसे नजदीक है?", options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"], correctAnswer: 0 },
    { question: "अशोक का शेर चिन्ह किस स्थान से लिया गया है?", options: ["सांची", "सारनाथ", "कांची", "काबुल"], correctAnswer: 1 },
    { question: "राष्ट्रीय पक्षी कौन है?", options: ["हंस", "मोर", "तोता", "कबूतर"], correctAnswer: 1 },
    { question: "नालंदा विश्वविद्यालय किस राज्य में है?", options: ["उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल", "मध्य प्रदेश"], correctAnswer: 1 },
    { question: "भारत का पहला राष्ट्रपति कौन था?", options: ["राजेंद्र प्रसाद", "नेहरू", "गांधी", "ज़ाकिर हुसैन"], correctAnswer: 0 },
    { question: "किस देश ने शून्य बजट खेती को अपनाया?", options: ["भारत", "अमेरिका", "चीन", "जापान"], correctAnswer: 0 },
    { question: "Google की स्थापना किसने की?", options: ["बिल गेट्स", "लैरी पेज और सर्गेई ब्रिन", "स्टीव जॉब्स", "मार्क जुकरबर्ग"], correctAnswer: 1 },
    { question: "HTML का पूरा नाम क्या है?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Tool Multi Language", "Hyperlink Text Marking Language"], correctAnswer: 1 },
    { question: "CPU का पूरा नाम क्या है?", options: ["Central Processing Unit", "Computer Power Unit", "Central Performance Unit", "Control Processing Unit"], correctAnswer: 0 },

    { question: "पृथ्वी को नीला ग्रह क्यों कहा जाता है?", options: ["हरियाली के कारण", "जल के कारण", "पर्वतों के कारण", "आकाश के कारण"], correctAnswer: 1 },
    { question: "गुरुत्वाकर्षण का सिद्धांत किसने दिया?", options: ["आइंस्टीन", "गैलीलियो", "न्यूटन", "रामानुजन"], correctAnswer: 2 },
    { question: "भारत का सबसे ऊँचा पर्वत कौन सा है?", options: ["कंचनजंघा", "एवरेस्ट", "नंदा देवी", "अनामुंडी"], correctAnswer: 0 },
    { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक", "हिन्द महासागर", "आर्कटिक", "प्रशांत महासागर"], correctAnswer: 3 },
    { question: "हवा महल कहाँ स्थित है?", options: ["जयपुर", "दिल्ली", "लखनऊ", "भोपाल"], correctAnswer: 0 },
    { question: "रामायण के लेखक कौन हैं?", options: ["व्यास", "तुलसीदास", "वाल्मीकि", "कबीर"], correctAnswer: 2 },
    { question: "भारत का पहला मोबाइल नेटवर्क कौन सा था?", options: ["Airtel", "BSNL", "Idea", "Vodafone"], correctAnswer: 1 },
    { question: "ओलंपिक खेल कितने वर्षों में होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
    { question: "राष्ट्रीय ध्वज में कितने रंग होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 1 },
    { question: "सूर्यग्रहण कब होता है?", options: ["सूर्य-पृथ्वी-चंद्रमा", "चंद्रमा-पृथ्वी-सूर्य", "पृथ्वी-सूर्य-चंद्रमा", "चंद्रमा-सूर्य-पृथ्वी"], correctAnswer: 3 },

    { question: "भारत का सबसे बड़ा राज्य क्षेत्रफल में कौन सा है?", options: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"], correctAnswer: 2 },
    { question: "कंप्यूटर में इस्तेमाल होने वाली 'RAM' का अर्थ क्या है?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Right Access Memory"], correctAnswer: 0 },
    { question: "नरेंद्र मोदी किस राज्य से सांसद हैं?", options: ["उत्तर प्रदेश", "गुजरात", "मध्य प्रदेश", "बिहार"], correctAnswer: 0 },
    { question: "Qutub Minar कहाँ स्थित है?", options: ["दिल्ली", "जयपुर", "लखनऊ", "हैदराबाद"], correctAnswer: 0 },
    { question: "भारत रत्न किस क्षेत्र में दिया जाता है?", options: ["खेल", "सेना", "साहित्य", "सभी क्षेत्रों में उत्कृष्ट योगदान"], correctAnswer: 3 },
    { question: "विश्व का सबसे बड़ा देश कौन है (क्षेत्रफल में)?", options: ["अमेरिका", "कनाडा", "रूस", "चीन"], correctAnswer: 2 },
    { question: "UNO की स्थापना कब हुई?", options: ["1945", "1950", "1939", "1919"], correctAnswer: 0 },
    { question: "भारत में सबसे पहले रेलवे लाइन कहाँ बनी थी?", options: ["दिल्ली से आगरा", "मुंबई से ठाणे", "कोलकाता से हावड़ा", "चेन्नई से मदुरै"], correctAnswer: 1 },
    { question: "कंप्यूटर का जनक किसे कहा जाता है?", options: ["चार्ल्स बैबेज", "न्यूटन", "जॉन नेपियर", "आइंस्टीन"], correctAnswer: 0 },
    { question: "सौरमंडल में कितने ग्रह हैं?", options: ["7", "8", "9", "10"], correctAnswer: 1 },

    { question: "भारत का पहला प्रधानमंत्री कौन था?", options: ["गांधीजी", "नेहरू", "पटेल", "राजेंद्र प्रसाद"], correctAnswer: 1 },
    { question: "सांप सीढ़ी का खेल कहाँ उत्पन्न हुआ?", options: ["अमेरिका", "भारत", "चीन", "मिस्र"], correctAnswer: 1 },
    { question: "स्वतंत्रता संग्राम 1857 को क्या कहा जाता है?", options: ["पहला स्वतंत्रता संग्राम", "दूसरा स्वतंत्रता संग्राम", "गांधी आंदोलन", "भारत छोड़ो आंदोलन"], correctAnswer: 0 },
    { question: "भारत में जनगणना कितने वर्षों में होती है?", options: ["5 साल", "10 साल", "15 साल", "हर साल"], correctAnswer: 1 },
    { question: "हमारे सौरमंडल में सबसे बड़ा ग्रह कौन है?", options: ["पृथ्वी", "शनि", "बृहस्पति", "मंगल"], correctAnswer: 2 },
    { question: "ईमेल का आविष्कार किसने किया?", options: ["शिवा अय्यदुरई", "टिम बर्नर्स-ली", "बिल गेट्स", "स्टीव जॉब्स"], correctAnswer: 0 },
    { question: "पानीपत की पहली लड़ाई कब हुई थी?", options: ["1526", "1556", "1761", "1947"], correctAnswer: 0 },
    { question: "डॉक्टर भीमराव अंबेडकर ने किस धर्म को अपनाया था?", options: ["हिंदू", "इस्लाम", "बौद्ध", "ईसाई"], correctAnswer: 2 },
    { question: "रेड क्रॉस की स्थापना किसने की?", options: ["हेनरी डूनैंट", "फ्लोरेंस नाइटिंगेल", "लुई पाश्चर", "मार्को पोलो"], correctAnswer: 0 },
    { question: "शतरंज का आविष्कार किस देश में हुआ था?", options: ["भारत", "चीन", "पाकिस्तान", "ईरान"], correctAnswer: 0 },

    { question: "भारत की पहली महिला प्रधानमंत्री कौन थी?", options: ["प्रतिभा पाटिल", "सोनिया गांधी", "इंदिरा गांधी", "सुषमा स्वराज"], correctAnswer: 2 },
    { question: "दुनिया की सबसे बड़ी इमारत कौन सी है?", options: ["बुर्ज खलीफा", "एंपायर स्टेट बिल्डिंग", "लोटस टॉवर", "पेट्रोनास टॉवर"], correctAnswer: 0 },
    { question: "मिल्खा सिंह किस खेल से जुड़े थे?", options: ["क्रिकेट", "हॉकी", "एथलेटिक्स", "कुश्ती"], correctAnswer: 2 },
    { question: "Google की स्थापना कब हुई थी?", options: ["1995", "1998", "2000", "2005"], correctAnswer: 1 },
    { question: "महात्मा गांधी को किसने 'राष्ट्रपिता' कहा?", options: ["नेहरू", "पटेल", "सुभाष चंद्र बोस", "भगत सिंह"], correctAnswer: 2 },
    { question: "तिरंगा झंडे में सफेद रंग का मतलब क्या है?", options: ["शक्ति", "शांति", "विकास", "क्रांति"], correctAnswer: 1 },
    { question: "भारत की सबसे बड़ी रेल सेवा कौन सी है?", options: ["Rajdhani", "Duronto", "Indian Railways", "Shatabdi"], correctAnswer: 2 },
    { question: "पहला नोबेल पुरस्कार किसे मिला था?", options: ["मार्टिन लूथर", "मैरी क्यूरी", "हेनरी डूनैंट", "विलियम रेंटजन"], correctAnswer: 3 },
    { question: "किस दिन को 'बाल दिवस' के रूप में मनाया जाता है?", options: ["2 अक्टूबर", "15 अगस्त", "5 सितंबर", "14 नवंबर"], correctAnswer: 3 },
    { question: "कंप्यूटर में प्रयुक्त 'www' का पूरा नाम क्या है?", options: ["World Wide Web", "Wide Web World", "Web World Wide", "Wide World Web"], correctAnswer: 0 }
    , { question: "'To Kill a Mockingbird' किसने लिखा?", options: ["हार्पर ली", "मार्क ट्वेन", "जॉन स्टीनबेक", "फिट्जगेराल्ड"], correctAnswer: 0 },
    { question: "सोने का रासायनिक प्रतीक क्या है?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: 2 },
    { question: "HTML का फुल फॉर्म क्या है?", options: ["HyperText Makeup Language", "HyperText Markup Language", "Hyper Transfer Markup", "HyperText Markdown"], correctAnswer: 1 },
    { question: "भारत का पहला राष्ट्रपति कौन था?", options: ["राजेंद्र प्रसाद", "नेहरू", "गांधी", "पटेल"], correctAnswer: 0 },
    { question: "Microsoft के संस्थापक कौन हैं?", options: ["स्टीव जॉब्स", "बिल गेट्स", "एलन मस्क", "लैरी पेज"], correctAnswer: 1 },
    { question: "स्वतंत्रता दिवस कब मनाते हैं?", options: ["15 अगस्त", "2 अक्टूबर", "26 जनवरी", "14 नवंबर"], correctAnswer: 0 },
    { question: "CPU का फुल फॉर्म?", options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Peripheral Unit"], correctAnswer: 1 },
    { question: "भारत की सबसे बड़ी झील कौन सी है?", options: ["डल", "चिल्का", "पिछोला", "लोथल"], correctAnswer: 1 },
    { question: "महाभारत के लेखक कौन हैं?", options: ["वाल्मीकि", "व्यास", "कबीर", "तुलसीदास"], correctAnswer: 1 },
    { question: "Facebook के संस्थापक?", options: ["लैरी पेज", "मार्क जुकरबर्ग", "सर्गेई ब्रिन", "एलन मस्क"], correctAnswer: 1 },
    { question: "न्यूटन ने किसका खोज किया?", options: ["गुरुत्वाकर्षण", "प्रकाश", "गति", "ध्वनि"], correctAnswer: 0 },
    { question: "ATM का फुल फॉर्म?", options: ["Any Time Money", "Automatic Teller Machine", "At The Moment", "All Time Machine"], correctAnswer: 1 },
    { question: "भारत की सबसे ऊंची चोटी?", options: ["एवरेस्ट", "नंदा देवी", "कंचनजंगा", "धौलागिरी"], correctAnswer: 2 },
    { question: "JavaScript किसके लिए प्रयोग होती है?", options: ["Back-end", "Front-end", "सिर्फ Server", "None"], correctAnswer: 1 },
    { question: "CPU में कौन सा हिस्सा Control करता है?", options: ["ALU", "CU", "RAM", "ROM"], correctAnswer: 1 },
    { question: "भारत का पहला राष्ट्रपति कौन था?", options: ["राजेंद्र प्रसाद", "नेहरू", "गांधी", "पटेल"], correctAnswer: 0 },
    { question: "HTML का फुल फॉर्म क्या है?", options: ["HyperText Makeup Language", "HyperText Markup Language", "Hyper Transfer Markup", "HyperText Markdown"], correctAnswer: 1 },
    { question: "Microsoft के संस्थापक कौन हैं?", options: ["स्टीव जॉब्स", "बिल गेट्स", "एलन मस्क", "लैरी पेज"], correctAnswer: 1 },
    { question: "स्वतंत्रता दिवस कब मनाते हैं?", options: ["15 अगस्त", "2 अक्टूबर", "26 जनवरी", "14 नवंबर"], correctAnswer: 0 },
    { question: "CPU का फुल फॉर्म?", options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Peripheral Unit"], correctAnswer: 1 },
    { question: "भारत की सबसे बड़ी झील कौन सी है?", options: ["डल", "चिल्का", "पिछोला", "लोथल"], correctAnswer: 1 },
    { question: "महाभारत के लेखक कौन हैं?", options: ["वाल्मीकि", "व्यास", "कबीर", "तुलसीदास"], correctAnswer: 1 },
    { question: "Facebook के संस्थापक?", options: ["लैरी पेज", "मार्क जुकरबर्ग", "सर्गेई ब्रिन", "एलन मस्क"], correctAnswer: 1 },
    { question: "न्यूटन ने किसका खोज किया?", options: ["गुरुत्वाकर्षण", "प्रकाश", "गति", "ध्वनि"], correctAnswer: 0 },
    { question: "ATM का फुल फॉर्म?", options: ["Any Time Money", "Automatic Teller Machine", "At The Moment", "All Time Machine"], correctAnswer: 1 },
    { question: "भारत की सबसे ऊंची चोटी?", options: ["एवरेस्ट", "नंदा देवी", "कंचनजंगा", "धौलागिरी"], correctAnswer: 2 },
    { question: "JavaScript किसके लिए प्रयोग होती है?", options: ["Back-end", "Front-end", "सिर्फ Server", "None"], correctAnswer: 1 },
    { question: "CPU में कौन सा हिस्सा Control करता है?", options: ["ALU", "CU", "RAM", "ROM"], correctAnswer: 1 },
    { question: "भारत में कुल कितने राज्य हैं (2024)?", options: ["28", "29", "30", "27"], correctAnswer: 0 },
    { question: "गांधी जी का पूरा नाम क्या था?", options: ["मोहनदास करमचंद गांधी", "महात्मा गांधी", "राजगोपाल गांधी", "के. गांधी"], correctAnswer: 0 },
    { question: "लाल किला कहाँ स्थित है?", options: ["दिल्ली", "आगरा", "जयपुर", "लखनऊ"], correctAnswer: 0 },
    { question: "भारतीय संसद में कितने सदन होते हैं?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
    { question: "UNO का मुख्यालय कहाँ है?", options: ["लंदन", "न्यूयॉर्क", "जिनेवा", "पेरिस"], correctAnswer: 1 },
    { question: "भारत का सबसे बड़ा राज्य क्षेत्रफल के अनुसार?", options: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"], correctAnswer: 2 },
    { question: "DNA का फुल फॉर्म?", options: ["Deoxyribonucleic Acid", "Digital Network Area", "Data Numeric Access", "None"], correctAnswer: 0 },
    { question: "भारत का राष्ट्रीय पशु?", options: ["हाथी", "शेर", "बाघ", "गधा"], correctAnswer: 2 },
    { question: "सौरमंडल का सबसे बड़ा ग्रह?", options: ["पृथ्वी", "शनि", "बृहस्पति", "मंगल"], correctAnswer: 2 },
    { question: "विटामिन D का स्रोत?", options: ["सूरज की रोशनी", "दूध", "चावल", "आलू"], correctAnswer: 0 },
    { question: "भारत में योजना आयोग की स्थापना कब हुई थी?", options: ["1947", "1950", "1952", "1955"], correctAnswer: 1 },
    { question: "ICSE का फुल फॉर्म?", options: ["Indian Certificate of Secondary Education", "Indian Central School Education", "International Council of School Education", "None"], correctAnswer: 0 },
    { question: "Bluetooth किसके लिए प्रयोग होता है?", options: ["डेटा ट्रांसफर", "पॉवर सप्लाई", "चार्जिंग", "स्क्रीन शेयरिंग"], correctAnswer: 0 },
    { question: "ATM किस क्षेत्र से संबंधित है?", options: ["बैंकिंग", "स्वास्थ्य", "पर्यटन", "शिक्षा"], correctAnswer: 0 },
    { question: "CPU का कार्य?", options: ["प्रोसेसिंग", "स्टोरेज", "प्रिंटिंग", "नेटवर्किंग"], correctAnswer: 0 },
    { question: "भारत में सबसे लंबी नदी?", options: ["गंगा", "यमुना", "नर्मदा", "गोदावरी"], correctAnswer: 0 },
    { question: "USB का फुल फॉर्म?", options: ["Universal Serial Bus", "Universal Service Band", "United System Board", "None"], correctAnswer: 0 },
    { question: "'To Kill a Mockingbird' किसने लिखा?", options: ["हार्पर ली", "मार्क ट्वेन", "जॉन स्टीनबेक", "फिट्जगेराल्ड"], correctAnswer: 0 },
    { question: "सोने का रासायनिक प्रतीक क्या है?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: 2 },
    { question: "HTML का फुल फॉर्म क्या है?", options: ["HyperText Makeup Language", "HyperText Markup Language", "Hyper Transfer Markup", "HyperText Markdown"], correctAnswer: 1 },
    { question: "भारत का पहला राष्ट्रपति कौन था?", options: ["राजेंद्र प्रसाद", "नेहरू", "गांधी", "पटेल"], correctAnswer: 0 },
    { question: "Microsoft के संस्थापक कौन हैं?", options: ["स्टीव जॉब्स", "बिल गेट्स", "एलन मस्क", "लैरी पेज"], correctAnswer: 1 },
    { question: "स्वतंत्रता दिवस कब मनाते हैं?", options: ["15 अगस्त", "2 अक्टूबर", "26 जनवरी", "14 नवंबर"], correctAnswer: 0 },
    { question: "CPU का फुल फॉर्म?", options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Peripheral Unit"], correctAnswer: 1 },
    { question: "भारत की सबसे बड़ी झील कौन सी है?", options: ["डल", "चिल्का", "पिछोला", "लोथल"], correctAnswer: 1 },
    { question: "महाभारत के लेखक कौन हैं?", options: ["वाल्मीकि", "व्यास", "कबीर", "तुलसीदास"], correctAnswer: 1 },
    { question: "Facebook के संस्थापक?", options: ["लैरी पेज", "मार्क जुकरबर्ग", "सर्गेई ब्रिन", "एलन मस्क"], correctAnswer: 1 },
    { question: "न्यूटन ने किसका खोज किया?", options: ["गुरुत्वाकर्षण", "प्रकाश", "गति", "ध्वनि"], correctAnswer: 0 },
    { question: "ATM का फुल फॉर्म?", options: ["Any Time Money", "Automatic Teller Machine", "At The Moment", "All Time Machine"], correctAnswer: 1 },
    { question: "भारत की सबसे ऊंची चोटी?", options: ["एवरेस्ट", "नंदा देवी", "कंचनजंगा", "धौलागिरी"], correctAnswer: 2 },
    { question: "JavaScript किसके लिए प्रयोग होती है?", options: ["Back-end", "Front-end", "सिर्फ Server", "None"], correctAnswer: 1 },
    { question: "CPU में कौन सा हिस्सा Control करता है?", options: ["ALU", "CU", "RAM", "ROM"], correctAnswer: 1 },
    { question: "UN का मुख्यालय कहाँ है?", options: ["लंदन", "पेरिस", "न्यूयॉर्क", "जिनेवा"], correctAnswer: 2 },
    { question: "π (पाई) का मान क्या है?", options: ["3.14", "2.17", "4.13", "1.41"], correctAnswer: 0 },
    { question: "भारत का राष्ट्रीय पशु?", options: ["सिंह", "हाथी", "शेर", "बाघ"], correctAnswer: 3 },
    { question: "Bluetooth किसका उदाहरण है?", options: ["LAN", "MAN", "PAN", "WAN"], correctAnswer: 2 },
    { question: "RAM का कार्य?", options: ["स्थायी मेमोरी", "डाटा स्टोर", "डाटा प्रोसेस", "अस्थायी मेमोरी"], correctAnswer: 3 },
    { question: "ISRO की स्थापना कब हुई?", options: ["1950", "1969", "1984", "1999"], correctAnswer: 1 },
    { question: "हाइड्रोजन का प्रतीक?", options: ["Hy", "H", "Hd", "Hg"], correctAnswer: 1 },
    { question: "गांधी जी का जन्म कब हुआ?", options: ["1869", "1872", "1859", "1881"], correctAnswer: 0 },
    { question: "PAN का पूरा नाम?", options: ["Private Area Network", "Personal Access Network", "Personal Area Network", "Public Area Network"], correctAnswer: 2 },
    { question: "HTML में हेडर कौन सा टैग है?", options: ["<head>", "<header>", "<h1>", "<title>"], correctAnswer: 1 },
    { question: "Ctrl + S का उपयोग?", options: ["सहेजने के लिए", "खोलने के लिए", "प्रिंट करने के लिए", "बंद करने के लिए"], correctAnswer: 0 },
    { question: "Binary संख्या प्रणाली में कितने अंक होते हैं?", options: ["2", "8", "10", "16"], correctAnswer: 0 },
    { question: "भारत का राष्ट्रीय गान?", options: ["वन्दे मातरम्", "सारे जहाँ से अच्छा", "जन गण मन", "हम होंगे कामयाब"], correctAnswer: 2 },
    { question: "PDF का पूरा नाम?", options: ["Public Document File", "Portable Document Format", "Printed Document Format", "Private Data File"], correctAnswer: 1 },
    { question: "Java किस प्रकार की भाषा है?", options: ["High-level", "Low-level", "Middle-level", "None"], correctAnswer: 0 },
    { question: "Google Chrome किसने बनाया?", options: ["Google", "Microsoft", "Apple", "IBM"], correctAnswer: 0 },
    { question: "चर्नोबिल हादसा किस वर्ष हुआ था?", options: ["1984", "1985", "1986", "1987"], correctAnswer: 2 },
    { question: "सापेक्षता का सिद्धांत किसने दिया?", options: ["न्यूटन", "बोहर", "आइंस्टीन", "हॉकिंग"], correctAnswer: 2 },
    { question: "पाई का मान लगभग क्या होता है?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: 1 },
    { question: "DNS का फुल फॉर्म क्या है?", options: ["Domain Name System", "Data Network Service", "Digital Name Source", "Domain Net System"], correctAnswer: 0 },
    { question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", options: ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"], correctAnswer: 1 },
    { question: "AI का फुल फॉर्म क्या है?", options: ["Artificial Interface", "Artificial Intelligence", "Automatic Integration", "Applied Intelligence"], correctAnswer: 1 },
    { question: "GPS का फुल फॉर्म?", options: ["Global Pointing System", "Global Positioning System", "Geo Positioning Set", "Google Position System"], correctAnswer: 1 },
    { question: "भारतीय संविधान कब लागू हुआ?", options: ["1950", "1947", "1949", "1952"], correctAnswer: 0 },
    { question: "Internet का आविष्कार कब हुआ?", options: ["1980", "1969", "1991", "1975"], correctAnswer: 1 },
    { question: "Google की स्थापना कब हुई?", options: ["1996", "1997", "1998", "1999"], correctAnswer: 2 },
    { question: "Bluetooth तकनीक किस पर आधारित है?", options: ["Wi-Fi", "Infrared", "Radio waves", "Satellite"], correctAnswer: 2 },
    { question: "World Wide Web किसने बनाया?", options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], correctAnswer: 1 },
    { question: "Bitcoin किस पर आधारित है?", options: ["Cryptography", "Blockchain", "AI", "ML"], correctAnswer: 1 },
    { question: "RAM किस प्रकार की memory है?", options: ["Permanent", "Temporary", "Secondary", "None"], correctAnswer: 1 },
    { question: "LED का मतलब क्या होता है?", options: ["Light Emitting Diode", "Low Energy Device", "Line Edit Display", "None"], correctAnswer: 0 },

    { question: "श्रीरामकृष्ण मिशन की स्थापना किसने की थी?", options: ["विवेकानंद", "दयानंद", "रामकृष्ण", "केशव सेन"], correctAnswer: 0 },
    { question: "डार्विन ने किस सिद्​धांत की स्थापना की?", options: ["सापेक्षता", "विकासवाद", "गुरुत्वाकर्षण", "कोशिका"], correctAnswer: 1 },
    { question: "भारत का सबसे बड़ा बंदरगाह कौन सा है?", options: ["मुंबई", "चेन्नई", "कोलकाता", "कांडला"], correctAnswer: 0 },
    { question: "न्यूनतम तापमान किस गैस का होता है?", options: ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"], correctAnswer: 1 },
    { question: "एटम बम का आविष्कार किसने किया?", options: ["ओपेनहाइमर", "बोर", "रदरफोर्ड", "शिलर्ड"], correctAnswer: 0 },
    { question: "ताजमहल किस शैली में बना है?", options: ["द्रविड़", "मुगल", "यूरोपीय", "गौथिक"], correctAnswer: 1 },
    { question: "ओलंपिक खेलों का प्रतीक चिन्ह क्या है?", options: ["तीर", "छल्ले", "सूर्य", "झंडा"], correctAnswer: 1 },
    { question: "CUDA किस कंपनी की टेक्नोलॉजी है?", options: ["AMD", "Intel", "NVIDIA", "Qualcomm"], correctAnswer: 2 },
    { question: "Higgs boson को क्या कहा जाता है?", options: ["आइंस्टीन पार्टिकल", "गॉड पार्टिकल", "ग्रेविटी बिंदु", "मास पॉइंट"], correctAnswer: 1 },
    { question: "न्यायपालिका में PIL का पूर्ण रूप क्या है?", options: ["Public Integration Law", "Public Interest Litigation", "Private Interest Litigation", "Public Information Law"], correctAnswer: 1 },
    { question: "FIFA वर्ल्ड कप 2018 कहाँ हुआ था?", options: ["ब्राजील", "रूस", "स्पेन", "अर्जेंटीना"], correctAnswer: 1 },
    { question: "नेट न्यूट्रैलिटी किससे सम्बंधित है?", options: ["बैंकिंग", "इंटरनेट", "मेडिकल", "शिक्षा"], correctAnswer: 1 },
    { question: "Graphene किसका एलोट्रॉप है?", options: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन", "नाइट्रोजन"], correctAnswer: 2 },
    { question: "ISI का पूरा नाम क्या है?", options: ["Indian Standards Institute", "Indian Survey Institute", "International Standards Institute", "Institute of Survey India"], correctAnswer: 0 },
    { question: "किस राष्ट्र ने सबसे पहले zero discover किया?", options: ["अमेरिका", "भारत", "ग्रीस", "मिस्र"], correctAnswer: 1 },
    { question: "Bharat Ratna से सम्मानित होने वाले पहले गैर-भारतीय कौन थे?", options: ["नेल्सन मंडेला", "मार्टिन लूथर किंग", "मदर टेरेसा", "सर एडविना"], correctAnswer: 0 },
    { question: "NASA का मुख्यालय कहाँ है?", options: ["न्यूयॉर्क", "वाशिंगटन डीसी", "ह्यूस्टन", "शिकागो"], correctAnswer: 1 },
    { question: "यूरोप की सबसे लंबी नदी कौन सी है?", options: ["डेन्यूब", "वोल्गा", "रेन", "थेम्स"], correctAnswer: 1 },
    { question: "NCERT का फुल फॉर्म क्या है?", options: ["National Council of Educational Research and Training", "National College for Education and Rural Training", "New Council for Education Research and Teaching", "None"], correctAnswer: 0 },
    { question: "IPv6 में कितने bits होते हैं?", options: ["32", "64", "128", "256"], correctAnswer: 2 },
    { question: "स्पैम email किसे कहते हैं?", options: ["महत्वपूर्ण मेल", "अनचाही मेल", "कमर्शियल मेल", "सुरक्षित मेल"], correctAnswer: 1 },
    { question: "Human genome project किस क्षेत्र से जुड़ा है?", options: ["इतिहास", "भूगोल", "आनुवांशिकता", "भूगर्भ"], correctAnswer: 2 },
    { question: "बायोगैस में मुख्य gas कौन सी होती है?", options: ["ऑक्सीजन", "मीथेन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"], correctAnswer: 1 },
    { question: "सुप्रीम कोर्ट में जजों की सेवानिवृत्ति उम्र?", options: ["60", "62", "65", "70"], correctAnswer: 2 },
    { question: "सांड्रा बुलॉक किस क्षेत्र से सम्बंधित हैं?", options: ["क्रिकेट", "फुटबॉल", "सिनेमा", "पॉलिटिक्स"], correctAnswer: 2 },
    { question: "Blue Moon किसे कहते हैं?", options: ["दूसरा फुल मून", "पहला फुल मून", "अद्भुत मून", "कोई मून नहीं"], correctAnswer: 0 },
    { question: "Uno का full form?", options: ["University National Organization", "United Nations Organization", "Unity National Organization", "None"], correctAnswer: 1 },
    { question: "BharatNet किससे जुड़ी योजना है?", options: ["मेडिकल", "इंटरनेट कनेक्टिविटी", "हवाई यात्रा", "रेलवे"], correctAnswer: 1 },
    { question: "RBI का स्थापना वर्ष?", options: ["1930", "1935", "1940", "1947"], correctAnswer: 1 },
    { question: "पहला नोबेल पुरस्कार किस क्षेत्र के लिए दिया गया?", options: ["शांति", "रसायन", "भौतिकी", "साहित्य"], correctAnswer: 2 },
    { question: "न्यूटन का तीसरा नियम है...", options: ["बल लगाओ", "हर क्रिया की विपरीत प्रतिक्रिया", "आकर्षण बल", "गतिज ऊर्जा"], correctAnswer: 1 },
    { question: "Uranium-235 primarily used in?", options: ["Medicine", "Weapons", "Power generation", "Jewelry"], correctAnswer: 2 },
    { question: "विलियम शेक्सपियर द्वारा लिखित कौन सा नाटक नहीं है?", options: ["हेमलेट", "मैकबेथ", "रोमियो एंड जूलिएट", "किंग लियर", "पृथ्वीराज रासो"], correctAnswer: 4 },
    { question: "पृथ्वी का कुल भूमध्यरेखा perimeter कितना है?", options: ["30,000km", "40,075km", "50,000km", "25,000km"], correctAnswer: 1 },
    { question: "AIDS वायरस का नाम है?", options: ["HIV", "SIV", "DENV", "COVID"], correctAnswer: 0 },
    { question: "अंटार्कटिका में सबसे ऊँचा पर्वत?", options: ["माउंट विनसन", "माउंट एल्ब्रस", "माउंट एवरेस्ट", "मॉन्ट ब्लैंक"], correctAnswer: 0 },
    { question: "डीजल इंजन का आविष्कार किसने किया?", options: ["रुडोल्फ डीजल", "मार्कोनो", "गोटलिब डेमलर", "हॉर्नर"], correctAnswer: 0 },
    { question: "इलेक्ट्रॉन की खोज किसने की?", options: ["रदरफोर्ड", "थॉमसन", "बोहर", "कार्नोट"], correctAnswer: 1 },
    { question: "हड़प्पा सभ्यता का प्रमुख नगर कौन सा था?", options: ["मोहनजोदड़ो", "लड़काना", "लोटल", "हरप्पा"], correctAnswer: 3 },
    { question: "इंटरपोल का मुख्यालय किस देश में है?", options: ["फ्रांस", "जर्मनी", "इटली", "यूएसए"], correctAnswer: 0 },
    { question: "बाइबल का पुराना नियम किस भाषा में लिखा गया?", options: ["ग्रीक", "लैटिन", "हिब्रू", "अरबी"], correctAnswer: 2 },
    { question: "एप्पल कंपनी का को-फाउंडर कौन नहीं है?", options: ["स्टीव जॉब्स", "स्टीव वॉजनियाक", "रॉन वेन", "सरगी ब्रिन"], correctAnswer: 3 },
    { question: "Vasco da Gama भारत किस साल आया था?", options: ["1492", "1496", "1498", "1501"], correctAnswer: 2 },
    { question: "International Court of Justice का मुख्यालय?", options: ["पेरिस", "लंदन", "हेग", "वारसा"], correctAnswer: 2 },
    { question: "कौन सा अमिताभ बच्चन की पहली फिल्म थी?", options: ["जंजीर", "सात हिंदुस्तानी", "आनंद", "शोले"], correctAnswer: 1 },
    { question: "चंद्रग्रहण किस कारण होता है?", options: ["पृथ्वी-सूर्य-चंद्रमा", "चंद्रमा-पृथ्वी-सूर्य", "सूर्य-पृथ्वी-चंद्रमा", "चंद्रमा-सूर्य-पृथ्वी"], correctAnswer: 0 },
    { question: "कंप्यूटर का father किसे कहते हैं?", options: ["चार्ल्स बैबेज", "एनरिको फर्मी", "एडविन हबल", "स्टीव जॉब्स"], correctAnswer: 0 },
    { question: "PyQGIS किस टूल से जुड़ा है?", options: ["AutoCAD", "QGIS", "Photoshop", "Sap2000"], correctAnswer: 1 },
    { question: "राष्ट्रीय विज्ञान दिवस कब मनाते हैं?", options: ["5 जून", "2 अक्टूबर", "28 फरवरी", "15 मार्च"], correctAnswer: 2 }

];


let que = Math.floor(Math.random() * easyQuestions.length); // Mocking Math.random for consistent question selection
let selectedQuestions = easyQuestions[que];
// console.log(easyQuestions.length);

questionsEasy.innerHTML = selectedQuestions.question;
o1.innerHTML = easyQuestions[que].options[0];
o2.innerHTML = easyQuestions[que].options[1];
o3.innerHTML = easyQuestions[que].options[2];
o4.innerHTML = easyQuestions[que].options[3];

let Answer = easyQuestions[que].options[easyQuestions[que].correctAnswer];
let ans = easyQuestions[que].correctAnswer;
startTimer();
// console.log(Answer);
// console.log(ans);
// console.log(selectedQuestions)



// print next question 

function getRandomQuestion() {
    que = Math.floor(Math.random() * easyQuestions.length);
    // console.log("Question Index:", que);

}

function resetOptions() {
    for (let i = 0; i < option.length; i++) {
        option[i].style.display = 'inline-block';  // या '' भी हो सकता है, जो सही लगे
        option[i].disabled = false;
        option[i].style.backgroundColor = 'rgb(44, 44, 101)'; // पहले जैसा color reset करें
    }
}

let nextQuestion = function nextQuestion() {
    getRandomQuestion();
    questionAudio(); // Play question audio
    resetOptions();
    timerAudio(); // Play timer audio

    selectedQuestions = easyQuestions[que];

    questionsEasy.innerHTML = selectedQuestions.question;
    o1.innerHTML = easyQuestions[que].options[0];
    o2.innerHTML = easyQuestions[que].options[1];
    o3.innerHTML = easyQuestions[que].options[2];
    o4.innerHTML = easyQuestions[que].options[3];

    Answer = easyQuestions[que].options[easyQuestions[que].correctAnswer];
    ans = easyQuestions[que].correctAnswer;
    startTimer();
    // console.log(Answer);
    // console.log(ans);
    // console.log(selectedQuestions)
}

// repeat question function 
let repeat = document.getElementById('repeat');
let r = 0;
let repeatQuestion = repeat.onclick = function () {
    if (r <= 5) {
        nextQuestion(); // Call the next question function
        r++;
    }
}

// function table() {
//     <table>
//         <tr>
//             <th>Questions</th>
//             <th>Options</th>
//             <th>Correct Answer</th>
//         </tr>
//         <tr>
//             <td>{easyQuestions.question}</td>
//             <td>{easyQuestions.options}</td>
//             <td>{easyQuestions.option.correctAnswer}</td>

//         </tr>
//     </table>
// }

refresh.onclick = () => {
    window.location.reload();
}

// timer ai generated (only logic)

function startTimer() {
    clearInterval(timerInterval); // पहले वाला timer रोकें यदि कोई चल रहा हो
    timeLeft = 0;
    time.innerHTML = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft++;
        // timerAudio(); // Timer audio play करें
        time.innerHTML = timeLeft;

        if (timeLeft >= 46) {
            clearInterval(timerInterval);
            alert("समय समाप्त! गेम खत्म हुआ।");

            // गेम को रोकने के लिए:
            mainGame.style.display = 'none';
            refresh.style.display = 'block'; // या आपके गेम रिस्टार्ट के लिए जो भी UI 

            // console.log(timeLeft);
        }
    }, 1000);
}

// जब नया question दिखाएं, तब startTimer() कॉल 

// 50-50 lifeline logic ai generated 
fiftyFifty.addEventListener('click', () => {
    // correct answer index
    const correctIndex = ans;
    let removedCount = 0;

    for (let i = 0; i < option.length; i++) {
        if (i !== correctIndex && removedCount < 2) {
            option[i].innerHTML = '';  // या option[i].disabled = true;
            removedCount++;
        }
    }

    fiftyFifty.style.display = 'none'; // lifeline एक बार ही यूज़ हो
});

// audiancepoll lifeline logic 

const pollContainer = document.querySelector('.poll-container'); // यह div आपके HTML में होना चाहिए और शुरू में hidden हो

askTheAudience.addEventListener('click', () => {
    let correctIndex = ans;
    // 60 से 80 के बीच random कर सकते हैं
    let correctPercent = Math.floor(Math.random() * 21) + 60;
    let remainingPercent = 100 - correctPercent;

    let votes = [0, 0, 0, 0];
    votes[correctIndex] = correctPercent;

    // बाकी विकल्पों में votes बाँटें
    let otherIndexes = [0, 1, 2, 3].filter(i => i !== correctIndex);

    for (let i = 0; i < otherIndexes.length; i++) {
        if (i === otherIndexes.length - 1) {
            votes[otherIndexes[i]] = remainingPercent; // बाकी बचा
        } else {
            let val = Math.floor(Math.random() * (remainingPercent / 2));
            votes[otherIndexes[i]] = val;
            remainingPercent -= val;
        }
    }

    // polls UI update करें
    for (let i = 0; i < option.length; i++) {
        // उदाहरण के लिए poll bars या text show करें
        let pollBar = document.querySelector(`#poll-option${i + 1}`); // HTML में ऐसा element बनाएँ
        if (pollBar) {
            pollBar.style.width = votes[i] + '%';
            pollBar.innerText = votes[i] + '%';
        }
    }
    pollContainer.style.display = 'block'; // poll दिखाएं
    askTheAudience.style.display = 'none';
    setTimeout(() => {
        pollContainer.style.display = 'none';
    }, 8000);
});
function questionAudio() {


    // Audio file ka path yahan likhein
    var audio = new Audio('kbc-question.mp3');

    // Audio play karne ke liye
    audio.play();
    
    setTimeout(() => {
    // Audio pause karne ke liye
    audio.pause();
    }, 4000);
}

function timerAudio() {
    // Audio file ka path yahan likhein
    var audio = new Audio('kbc-timer.mp3');

    // Audio play karne ke liye
    audio.play();
    
    setTimeout(() => {
        // Audio pause karne ke liye
        audio.pause();
    }, 46000);
}
