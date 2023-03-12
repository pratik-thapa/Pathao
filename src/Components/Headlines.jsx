import React from 'react'

export default function Headlines() {
    return (
        <div>
            <div className="container">
                <div className="headlines mt-5">
                    <h1 className='text-center py-5'>Making Headlines</h1>
                </div>
                <div className="tablets ">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> <img src={require('../img/CNBC.jpg')} alt="" className='w-50' /> </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><img src={require('../img/bbc.png')} alt=""  className='w-50' /></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><img src={require('../img/news.png')} alt=""  className='w-10' /> </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="kantipur-tab" data-bs-toggle="tab" data-bs-target="#kantipur-tab-pane" type="button" role="tab" aria-controls="kantipur-tab-pane" aria-selected="false"><img src={require('../img/kantipur.png')} alt=""  className='w-75' /></button>
                    </li>
                </ul>
                <div class="tab-content px-4 py-4" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                        <h5>Building a mobile wallet for a cash-based economy: Pathao CEO
                        </h5>

                        <h3>
                            Hussain Elius of Pathao explains how his company is attempting to enter the e-transaction space by allowing customers to top their wallets up via its network of drivers.
                        </h3>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <h5>छोराको क्यान्सर उपचारका लागि पोलियो लागेका यी बुवाले चिया पसल खोलेका छन् र पठाओ चलाउँछन्</h5>
                        <h3>
                        "I had a problem with my right leg when I was a child. I can't do that much work. However, I am trying to save money by working as hard as I can, ”said Mishra. Watch this video made by Srijana Shrestha talking to him.
                        </h3>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">

                    <h5>
                    पठाओकी शोभा [फोटोफिचर]   
                    </h5>
                    <h3>
                    शोभा श्रेष्ठ बिहान अफिस जाँदा, आउँदा पठाओ चलाउँछिन् । उनी पठाओ राइडर भएको झन्डै २ वर्ष भयो । उनी फरक सक्षमता भएकी पठाओ राइडर हुन् । पठाओका ग्राहकहरु राइड लिन बोलाउँछन् र उनको स्कुटरका थप दुई पांग्रा देखेर मुख अमिलो बनाउँछन् । तलदेखि माथिसम्म हेर्छन्, थुप्रै प्रश्न पनि सोध्छन् । तर उनलाई आफू फरक सक्षमता भएको व्यक्ति हुनुमा कुनै पश्चाताप नभएको बताउँछिन् । 
                    </h3>
                    </div>
                    <div class="tab-pane fade" id="kantipur-tab-pane" role="tabpanel" aria-labelledby="kantipur-tab" tabindex="0">
                    <h5>
                    रक्तदान गर्ने व्यक्तिलाई पठाओको निःशुल्क राईड</h5>
                    <h3>जीवन बचाउन रक्तदान गर्ने व्यक्तिलाई निःशुल्क सवारी यात्रा गराउन पठाओ र हाम्रो लाइफ बैँकको सहकार्य बिच सहकार्य भएको छ । रक्त दान गर्नलाई प्रोत्साहित गर्न निःशुल्क राईड दिने सहकार्य भएको हो ।</h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
