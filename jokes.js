const jokes = [
    "दांत का डॉक्टर- आपका दांत निकालना पड़ेगा क्योंकि ये सड़ चुका है.\nराजू- हां तो कितने पैसे लगेंगे ?\nदांत का डॉक्टर- बस 500 रुपये लगेंगे.\nराजू- 50 रुपये रुपये ले लो और थोड़ा सा ढीला कर दो, निकाल तो मैं खुद लूंगा\n\n",
    "दुकानदार- बहनजी आप दुकान पर आती हैं, गहने देखती हैं पर कुछ लेती क्यों नहीं ?\nकस्टमर- हमेशा लेती हूं पर आप ध्यान नहीं देते...\n\n",
    "डॉक्टर- चश्मा किसके लिए बनवाना है?\nबब्लू- टीचर के लिए.\nडॉक्टर- पर क्यों?\nबब्लू- क्योंकि उन्हें मैं हमेशा गधा ही नजर आता हूं.\n\n",
    "लड़की का एक्सीडेंट हो गया.\nडॉक्टर - आपके पैर खराब हो गए हैं.\nलड़की - क्या ये सही नहीं होंगे?\nडॉक्टर - नहीं इनको काटना पड़ेगा.\nलड़की - ओह! नो अब मैं क्या करुंगी?\nडॉक्टर - धीरज रखिए. ईश्वर सब ठीक करेगा.\nलड़की - अरे मुझे उसकी टेंशन नहीं है. दरअसल मैंने कल ही नया सैंडल खरीदा है, और उस दुकान पर लिखा था- \"बिका माल वापस नहीं होगा\"\n\n",
    "टीचर- 'संगठन में ही शक्ति है' का एक अच्छा सा उदाहरण दो?\nछात्र- जेब में एक बीड़ी हो तो टूट जाती है और पूरा बंडल हो तो नहीं टूटता.\nमास्टर जी बेहोश\n\n",
    "टीचर- बच्चों क्या तुम चीनी भाषा पढ़ सकते हो?\nछात्र- हां\nटीचर- कैसे?\nछात्र- अगर वो हिंदी या अंग्रेजी में लिखी हो तो \n\n",
    "मंटू- पापा क्या मैं भगवान की तरह दिखता हूं?\nपापा- नहीं , पर तुम ऐसा क्यों पूछ रहे हो बेटा?\nमंटू- क्योंकि पापा मैं कहीं भी जाता हूं, तो \nसब यही कहते है हे भगवान फिर आ गया\n\n",
    "मच्छर का बच्चा पहली बार उड़ा, जब वापस आया तो\nपापा ने पूछा: कैसा लगा उड़कर?\nमच्छर ने कहा: बहुत अच्छा... जहां भी गया, लोग तालियां बजा रहे थे\n\n",
    "बाप: नालायक तू फेल कैसे हो गया?\nबेटा: पेपर में मास्टरजी ने सवाल ही ऐसे दिए थे, जो मैंने कभी सुने ही नहीं थे.\nबाप: तो तूने जवाब कैसे-कैसे लिखे?\nबेटा: मैं भी होशियार ठहरा... मैं भी ऐसे उत्तर लिख आया, जो कभी मास्टर ने भी नहीं सुने.\n\n",
    "आर्मी ट्रेनिंग के दौरान, अफसर ने पूछा: 'ये हाथ में क्या है'?\nसुरेश: “सर, बन्दूक है !”\nअफसर: “ये बन्दूक नहीं! तुम्हारी इज़्ज़त है, शान है, ये तुम्हारी मां है मां !!”\nफिर अफसर ने दूसरे सिपाही रमेश से पूछा: “ये हाथ में क्या है?”\nरमेश: सर, ये सुरेश की मां है, उसकी इज़्ज़त है, उसकी शान है और हमारी मौसी है मौसी..!\nसर बेहोश\n\n",
    "गप्पू जंगल से जा रहा था तभी एक पैर में सांप ने काट लिया,\nगप्पू को गुस्सा आया और टांग आगे करके बोला: ले काट ले जितना काटना है.\nसांप ने 3-4 काटा और थक कर बोला: अबे तू इंसान है या भूत?\nगप्पू: मैं तो इंसान ही ठहरा पर मेरा ये पैर नकली है...\n\n",
    "Santa Ko Koi Mobile Par Tang Kar Raha Tha...\nSanta Ne New SIM Card Khareed Kar Usko SMS Kiya,\n\"Maine Woh Number Band Kar Diya Hai,\nAb Tera Baap Bhi Mujhe Tang Nahi Kar Sakta!\" :D\n\n",
    "GHAR वाले हमेशा कहते है,\n\"उन बिगडे हुए ,बेवडे लडको के साथ मत रहना,तु भी बिगड जाएगा\"\n\"अब घरवालो को कौन समझाएगा की,\n\"गंगाधर ही शक्तीमान है\"\n\n",
    "Mother: Kaun tha phone pe (Who was on the phone)?\nMe: Friend tha (It was a friend).\nMother: Vastav me kon tha (Who was it Really)?\nMe: Sanjay Dutt (Actor).\n\n",
    "She (Crying): A guy stole my purse.\nHe: Kitne paise the (How much was in it)?\nShe: 40 rupees.\nHe: Toh ro kyun rahi hai (Why are you crying)?\nShe: Purse Gucci ka tha (It was a Gucci Purse). *crying*\n\n",
    "टीचर- इतने दिन कहां थे, स्कूल क्यों नहीं आए?\nगोलू- बर्ड फ्लू हो गया था मैम।\nटीचर- पर ये तो पक्षियों को होता है इंसानों को नहीं।\nगोलू- इंसान समझा ही कहां आपने...रोज तो मुर्गा बना देती हो..!!\n\n",
    "बंता- तुम खाली पेट होने पर कितने केले खा सकते हो?\nसंता (कुछ पल सोचकर कहा)- मैं 6 केले खा सकता हूँ।\nबंता ने हँसते हुए जवाब दिया- गलत जवाब दोस्त,\nपहला केला खा लेने के बाद तुम्हारा पेट खाली कहां रहेगा !?\nइसलिए खाली पेट होने पर तुम केवल\nएक ही केला खा सकते हो।\nसंता घर पहुंचा और जाते ही बीवी से सवाल किया\nतुम खाली पेट होने पर कितने केले खा सकती हो?\nबीवी- मैं 4 केले खा सकती हूँ।\nसंता (निराश स्वर में बोला)- अगर 6 कहती तो\nएक मस्त का Jokes सुनाता तुझे\n\n",
    "Offline रहता हूं तो सिर्फ दाल, रोटी, नौकरी एवं\nपरिवार की ही चिंता रहती है\nOnline होते ही\nधर्म, समाज, राजनीती, देश, विश्व\nऔर पूरे ब्रह्माण्ड की चिंताए\nहोने लगती है\nआम भारतीय नागरिक\n\n",
    "ये वो दौर है जनाब\nजहां इंसान गिर जाये तो\nहँसी निकल जाती है\nऔर मोबाईल गिर जाये तो\nजान निकल जाती है\n\n",
    "दो लड़कियां बस में सीट के लिए लड़ रही थीं\nकंडक्टर- अरे क्यों लड़ रही हो,\nजो उम्र में सबसे बड़ी है वो बैठ जाए\nफिर क्या, पूरे रास्ते दोनों खड़ी ही रहीं\n\n",
    "एक भिखारी को 100 का नोट मिला\nवो फाइव स्टार होटेल में गया और भरपेट खाना खाया\n1500 रुपये का बिल आया, उसने मेनेजर से कहा, पैसे तो नहीं है\nमैनेजर ने पुलिस के हवाले कर दिया\nभिखारी ने पुलिस को 100 का नोट दिया, और छूट गया\nइसे कहते हैं...\nफाइनेन्सियल मैनेजमेन्ट विदाउट एमबीए इन इंडिया\n\n",
    "महिला- डॉक्टर साहब, मेरे पति नींद में\nबातें करने लगे हैं! क्या करूँ?\nडॉक्टर- उन्हें दिन में बोलने का\nमौका दीजिए!\n\n",
    "कुछ अमीरों की चर्चा…\nकिसी ने कहा मेरा बाथरुम 10 लाख का तो किसी ने 20 लाख को किसी ने 50 लाख का बताया\nऔर जब यही बात एक गाँव के आदमी से पूछी गई तो उसने बताया की मै जहा सुबह लोटा लेके जाता हूँ उस खेत की कीमत 7 करोड़ है\nऔर ऐसे बाथरुम तो हम रोज़ बदल देते है !!\n\n",
    "पप्पू शराब पीकर गाड़ी चला रहा था,\nअचानक गाड़ी एक खम्बे से टकरा गयी\nपुलिस-बाहर निकल साले\nपप्पू-माफ़ कर दो दरोगा जी\nपुलिस-साले दारू पी के गाड़ी चलाता है, मुंह खोल\nपप्पू-अरे नहीं साब, पहले से खूब पी रखी है और कितना पिलाओगे\n\n",
    "एक कंजूस को बिजली का करंट लग गया\nबीवी- आप ठीक तो है ना\nकंजूस- फालतू की बात छोड़ मीटर देखकर बता यूनिट कितना बढ़ा…. \n\n",
    "पप्पू जलेबी बेच रहा था, लेकिन कह रहा था\nआलू ले लो आलू ले लो...\n.\n.\nराहगीर- लेकिन ये तो जलेबी है\n.\nपप्पू- चुप हो जा! वरना मक्खियां आ जाएंगी।\n\n",
    "वकील - हत्या की रात तुम्हारे पति के अंतिम शब्द?\n.\nपत्नी - मेरा चश्मा कहां है संगीता...?\n.\nवकील - तो इसमें मारने वाली क्या बात थी...?\n.\nपत्नी - मेरा नाम रंजना है!\n.\nपूरा कोर्ट खामोश...\n\n",
    "एक सज्जन बता रहे थे कि\nवो पिछले 20 सालों से गीता के उपदेश सुनते आ रहे हैं...!\n.\nपता करने पर पता चला कि\nगीता उनकी धर्मपत्नी का नाम है...!!\n\n",
    "एक बार दो चूहे के बच्चे बाइक पर जा रहे थे...\n\nरास्ते में उन्हें शेर का बच्चा मिला...उसने कहा मुझे भी बिठा लो\n\nकुछ सोचने के बाद चूहे ने कहा...देख ले,\n\nवरना बाद में तेरी मम्मी बोलेंगी गुंडों के साथ घूमता है\n\n",
    "गणित की क्लास चल रही थी\n\nटीचर ने पूछा- बताओं 1000 किलो = एक टन, तो 3000 किलों कितना होगा?\n\nपप्पू- जी सर....टन, टन, टन\n\nटीचर को समझ नहीं आ रहा कि शाबासी दूं या क्लास से बाहर निकालूं\n\n",
    "मेहमान- और बताओ बेटा आगे का क्या प्लान है...\n\nबच्चा- बस आपके जाते है बिस्कुट खाउंगा...\n\nवैसे भी नमकीन और मेवा तो आपने छोड़ी नहीं है\n"
];

let random_Joke = jokes[Math.floor(Math.random() * jokes.length)];
document.write(random_Joke);

setInterval(()=>{
    document.querySelector('#joke').classList.toggle('cantRead');
    document.querySelector('#body').classList.toggle('red');
    document.querySelector('#next').classList.toggle('blue');
}, 500);
