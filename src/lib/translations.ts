export type Lang = "en" | "th";

const translations = {
  // Navbar
  "nav.home": { en: "Home", th: "หน้าแรก" },
  "nav.about": { en: "About Nan", th: "เกี่ยวกับน่าน" },
  "nav.places": { en: "Places", th: "สถานที่" },
  "nav.activities": { en: "Activities", th: "กิจกรรม" },
  "nav.blog": { en: "Blog", th: "บล็อก" },
  "nav.travelInfo": { en: "Travel Info", th: "ข้อมูลการเดินทาง" },
  "nav.tours": { en: "Tours", th: "ทัวร์" },
  "nav.contact": { en: "Contact", th: "ติดต่อเรา" },

  // Homepage
  "home.hero.title": { en: "Discover Nan", th: "ค���นพบน่าน" },
  "home.hero.subtitle": {
    en: "Thailand's Hidden Gem",
    th: "อัญมณีที่ซ่���นเร้นของประเทศไทย",
  },
  "home.hero.description": {
    en: "Explore ancient temples, misty mountains, and authentic culture in one of northern Thailand's most enchanting provinces. Your adventure starts here.",
    th: "สำรวจวัดโบราณ ภูเขาสายหมอก และวัฒนธรรมอันแท้จริง ในจังหวัดที่มีเสน่ห์ที่สุดแห่งหนึ่งของภาคเห��ือ การผจญภัยของคุณเริ่มต้นที่นี่",
  },
  "home.hero.explorePlaces": { en: "Explore Places", th: "สำรวจสถานที่" },
  "home.hero.bookTour": { en: "Book a Tour", th: "จองทัวร์" },
  "home.cards.temples.title": { en: "Ancient Temples", th: "วัดโบราณ" },
  "home.cards.temples.desc": {
    en: "700+ year old temples with stunning murals and Lanna architecture",
    th: "วัดอายุกว่า 700 ปี พร้อมจิตรกรรมฝาผนังและสถาปัตยกรรมล้านนาที่งดงาม",
  },
  "home.cards.mountains.title": {
    en: "Mountain Adventures",
    th: "ผจญภัยบนภูเขา",
  },
  "home.cards.mountains.desc": {
    en: "Doi Phu Kha National Park, trekking trails, and scenic viewpoints",
    th: "อุทยานแห่งชาติดอยภูคา เส้นทางเดินป่า และจุดชมวิวที่สวยงาม",
  },
  "home.cards.culture.title": { en: "Local Culture", th: "วัฒนธรรมท้องถิ่น" },
  "home.cards.culture.desc": {
    en: "Traditional villages, local cuisine, and artisan crafts",
    th: "หมู่บ้านดั้งเดิม อาหารท้องถิ่น และงานหัตถกรรม",
  },
  "home.places.title": { en: "Places to Visit", th: "สถานที่น่าเที่ยว" },
  "home.places.desc": {
    en: "From sacred temples to pristine national parks, discover the best of what Nan has to offer.",
    th: "จากวัดศักดิ์สิทธิ์ถึงอุทยานแห่งชาติที่บริสุทธิ์ ค้นพบสิ่งที่ดีที่สุดของน่าน",
  },
  "home.places.viewAll": { en: "View all places", th: "ดูสถานที่ทั้งหมด" },
  "home.activities.title": { en: "Things to Do", th: "กิจกรรมน่าสนใจ" },
  "home.activities.desc": {
    en: "Hands-on cultural experiences, workshops, and adventures in Nan.",
    th: "ประสบการณ์วัฒนธรรมแบบลงมือทำ เวิร์กช็อป และการผจญภัยในน่าน",
  },
  "home.activities.viewAll": {
    en: "View all activities",
    th: "ดูกิจกรรมทั้งหมด",
  },
  "home.blog.title": { en: "Latest from the Blog", th: "บทความล่าสุด" },
  "home.blog.desc": {
    en: "Stories, guides, and tips from our adventures in Nan province.",
    th: "เรื่องราว คู่มือ และเคล็ดลับจากการผจญภัยในจังหวัดน่าน",
  },
  "home.blog.readMore": { en: "Read more posts", th: "อ่านบทความเพิ่มเติม" },
  "home.cta.title": { en: "Ready to Explore Nan?", th: "พร��อมสำ��วจน่านหรือยัง?" },
  "home.cta.desc": {
    en: "Let us help you plan the perfect trip. From guided tours to local recommendations, we're here to make your Nan experience unforgettable.",
    th: "ให้เราช่วยคุณวางแผนทริปที่สมบูรณ์แบบ ตั้งแต่ทัวร์นำเที่ยวไปจนถึงคำแนะนำจากคนท้องถิ่น เราพร้อมทำให้ประสบการณ์น่านของคุณน่าจดจำ",
  },
  "home.cta.viewTours": { en: "View Tour Packages", th: "ดูแพ็กเกจทัวร์" },
  "home.cta.getInTouch": { en: "Get in Touch", th: "ติดต่อเรา" },

  // About
  "about.title": { en: "About Nan Province", th: "เกี่ยวกับจังหวัดน่าน" },
  "about.subtitle": {
    en: "A hidden treasure in northern Thailand where ancient traditions meet breathtaking natural beauty.",
    th: "ขุมทรัพย์ที่ซ่อนเร้นในภาคเหนือของประเทศไทย ที่ซึ่งประเพณีโบราณพบกับความงามธรรมชาติที่น่าทึ่ง",
  },
  "about.whyVisit.title": { en: "Why Visit Nan?", th: "ทำไมต้องมาน่าน?" },
  "about.whyVisit.p1": {
    en: "Nan province sits in the mountainous northeast of northern Thailand, sharing a border with Laos. Unlike the well-trodden tourist trails of Chiang Mai and Chiang Rai, Nan offers an authentic experience largely untouched by mass tourism.",
    th: "จังหวัดน่านตั้งอยู่ในภาคเหนือตอนบนสุดของประเทศไทย มีพรมแดนติดกับลาว ต่างจากเส้นทางท่องเที่ยวยอดนิยมของเชียงใหม่และเชียงราย น่านมอบประสบการณ์ที่แท้จริงที่ยังไม่ถูกรบกวนจากการท่องเที่ยวแบบหมู่คณะ",
  },
  "about.whyVisit.p2": {
    en: "The province is home to some of Thailand's most remarkable temple murals, pristine national parks, and vibrant local communities that maintain centuries-old traditions.",
    th: "จังหวัดนี้เป็นที่ตั้งของจิตรกรรมฝาผนังวัดที่งดงามที่สุดของไทย อุทยานแห่งชาติที่บริสุทธิ์ และชุมชนท้องถิ่นที่มีชีวิตชีวาซึ่งรักษาประเพณีเก่าแก่หลายร้อยปี",
  },
  "about.history.title": { en: "History & Heritage", th: "ประวัติศาสตร์และมรดก" },
  "about.history.p1": {
    en: "Nan was once an independent kingdom with strong ties to the Lanna and Sukhothai kingdoms. Its strategic position along trade routes between Thailand and Laos shaped a unique cultural identity.",
    th: "น่านเคยเป็นอาณาจักรอิสระที่มีความสัมพันธ์แน่นแฟ้นกับอาณาจักรล้านนาและสุโขทัย ตำแหน่งที่ตั้งเชิงยุทธศาสตร์บนเส้นทางการค้าระหว่างไทยกับลาว หล่อหลอมอัตลักษณ์ทางวัฒนธรรมที่เป็นเอกลักษณ์",
  },
  "about.history.p2": {
    en: "The city's temples house some of the finest examples of Lanna-era mural paintings in Thailand, including the famous 'Whispering of Love' at Wat Phumin.",
    th: "วัดในเมืองเป็นที่ตั้งของจิตรกรรมฝาผนังสมัยล้านนาที่งดงามที่สุดในประเทศไทย รวมถึง 'กระซิบรัก' ที่วัดภูมินทร์อันโด่งดัง",
  },
  "about.climate.title": { en: "Geography & Climate", th: "ภูมิศาสตร์และภูมิอากาศ" },
  "about.climate.cool": { en: "Cool Season (Nov-Feb)", th: "ฤดูหนาว (พ.ย.-ก.พ.)" },
  "about.climate.cool.desc": {
    en: "The best time to visit. Temperatures range from 10-25°C in the mountains. Clear skies, comfortable weather, and the famous sea of mist at Doi Samer Dao.",
    th: "ช่วงเวลาที่ดีที่สุดในการเที่ยว อุณหภูมิ 10-25°C บนภูเขา ท้องฟ้าแจ่มใส อากาศสบาย และทะเลหมอกอันโด่งดังที่ดอยเสมอดาว",
  },
  "about.climate.hot": { en: "Hot Season (Mar-May)", th: "ฤดูร้อน (มี.ค.-พ.ค.)" },
  "about.climate.hot.desc": {
    en: "Warm days up to 35°C. Songkran (Thai New Year) in April is a festive time to visit.",
    th: "อากาศร้อนถึง 35°C สงกรานต์ในเดือนเมษายนเป็นช่วงเทศกาลที่น่าเที่ยว",
  },
  "about.climate.rainy": { en: "Rainy Season (Jun-Oct)", th: "ฤดูฝน (มิ.ย.-ต.ค.)" },
  "about.climate.rainy.desc": {
    en: "Lush green landscapes and fewer tourists. Rain usually falls in short afternoon bursts. Great for photography.",
    th: "ภูมิทัศน์สีเขียวชอุ่มและนักท่องเที่ยวน้อยลง ฝนมักตกช่วงสั้นๆ ตอนบ่าย เหมาะสำหรับถ่ายรูป",
  },
  "about.climate.elevation": { en: "Elevation", th: "ระดับความสูง" },
  "about.climate.elevation.desc": {
    en: "Nan city sits at ~200m. Mountain peaks reach up to 2,079m at Doi Phu Kha, making it notably cooler than lowland Thailand.",
    th: "เมืองน่านอยู่สูง ~200 ม. ยอดเขาสูงถึง 2,079 ม. ที่ดอยภูคา ทำให้อากาศเย็นกว่าพื้นที่ราบของไทย",
  },
  "about.people.title": { en: "People & Culture", th: "ผู้คนและวัฒนธรรม" },
  "about.people.p1": {
    en: "Nan's population is a rich tapestry of ethnic groups including Thai Yuan, Tai Lue, Hmong, Mien, and other hill tribe communities.",
    th: "ประชากรน่านเป็นส่วนผสมอันหลากหลายของกลุ่มชาติพันธุ์ ทั้งไทยวน ไทลื้อ ม้ง เมี่ยน และชุมชนชาวเขาอื่นๆ",
  },
  "about.people.p2": {
    en: "The Tai Lue people are particularly renowned for their distinctive textiles, temple architecture, and cultural festivals.",
    th: "ชาวไทลื้อเป็นที่รู้จักเป็นพิเศษในเรื่องผ้าทอที่เป็นเอกลักษณ์ สถาปัตยกรรมวัด และเทศกาลทางวัฒนธรรม",
  },

  // Blog
  "blog.title": { en: "Blog", th: "บล็อก" },
  "blog.subtitle": {
    en: "Stories, guides, and insider tips about exploring Nan province.",
    th: "เรื่องราว คู่มือ และเคล็ดลับจากคนในพื้นที่เกี่ยวกับการสำรวจจังหวัดน่าน",
  },
  "blog.empty": { en: "No blog posts yet. Check back soon!", th: "ยังไม่มีบทความ กลับมาเร็วๆ นี้!" },
  "blog.by": { en: "By", th: "โดย" },
  "blog.backToBlog": { en: "Back to Blog", th: "กลับไปบล็อก" },

  // Places
  "places.title": { en: "Places to Visit", th: "สถานที่น่าเที่ยว" },
  "places.subtitle": {
    en: "From ancient temples to pristine national parks, explore the best of Nan province.",
    th: "จากวัดโบราณถึงอุทยานแห่งชาติที่บริสุทธิ�� สำรวจสิ่งที่ดีที่สุดของจังหวัดน่าน",
  },
  "places.backToPlaces": { en: "Back to Places", th: "กลับไปสถานที่" },
  "places.location": { en: "Location", th: "ที่ตั้ง" },
  "places.openMaps": { en: "Open in Google Maps", th: "เปิดใน Google Maps" },

  // Categories
  "category.temple": { en: "Temples", th: "วัด" },
  "category.nature": { en: "Nature & Parks", th: "ธรรมชาติและอุทยาน" },
  "category.culture": { en: "Culture & Heritage", th: "วัฒน���รรมและมรดก" },
  "category.food": { en: "Food & Dining", th: "อาหารและร้านอาหาร" },
  "category.attraction": { en: "Attractions", th: "สถานที่ท่องเที่ยว" },
  "category.activity": { en: "Activities", th: "กิจกรรม" },

  // Activities
  "activities.title": { en: "Activities & Experiences", th: "กิจกรรมและประสบการณ์" },
  "activities.subtitle": {
    en: "Hands-on cultural experiences, workshops, and unique adventures in Nan province.",
    th: "ประสบการณ์วัฒนธรรมแบบลงมือทำ เวิร์กช็อป และการผจญภัยที่ไม่ซ้ำใครในจังหวัดน่าน",
  },
  "activities.empty": {
    en: "No activities listed yet. Check back soon!",
    th: "ยังไม่มีกิจกรรม กลับมาเร็วๆ นี้!",
  },
  "activities.backToActivities": { en: "Back to Activities", th: "กลับไปกิจกรรม" },

  // Travel Info
  "travel.title": { en: "Travel Information", th: "ข้อมูลการเดินทาง" },
  "travel.subtitle": {
    en: "Everything you need to plan your trip to Nan province.",
    th: "ทุกสิ่งที่คุณต้องรู้เพื่อวางแผนทริปไปจังหวัดน่าน",
  },
  "travel.gettingThere": { en: "Getting to Nan", th: "การเดินทางไปน่าน" },
  "travel.byAir": { en: "By Air", th: "โดยเครื่องบิน" },
  "travel.byAir.desc": {
    en: "Nan Nakhon Airport (NNT) has daily flights from Bangkok via Nok Air and AirAsia. Flight time is approximately 1 hour 15 minutes.",
    th: "สนามบินน่านนคร (NNT) มีเที่ยวบินประจำวันจากกรุงเทพฯ โดยนกแอร์และแอร์เอเชีย ใช้เวลาบินประมาณ 1 ชั่วโมง 15 นาที",
  },
  "travel.byBus": { en: "By Bus", th: "โดยรถบัส" },
  "travel.byBus.desc": {
    en: "Buses run daily from Bangkok's Mo Chit terminal (10-11 hours), Chiang Mai (6 hours), and Chiang Rai (6 hours).",
    th: "รถบัสออกทุกวันจากสถานีหมอชิต กรุงเทพฯ (10-11 ชั่วโมง) เชียงใหม่ (6 ชั่วโมง) และเชียงราย (6 ชั่วโมง)",
  },
  "travel.byCar": { en: "By Car", th: "โดยรถยนต์" },
  "travel.byCar.desc": {
    en: "Nan is approximately 670 km from Bangkok via Route 32 and Route 101. The drive takes about 8-9 hours.",
    th: "น่านอยู่ห่างจากกรุงเทพฯ ประมาณ 670 กม. ผ่านทางหลวงหมายเลข 32 และ 101 ��ช้เวลาขับรถประมาณ 8-9 ชั่วโมง",
  },
  "travel.gettingAround": { en: "Getting Around", th: "การเดินทางในน่าน" },
  "travel.gettingAround.tip": {
    en: "Renting a motorbike or car is highly recommended — Nan's attractions are spread across the province and public transport is limited outside the city.",
    th: "แนะนำให้เช่ามอเตอร์ไซค์หรือรถยนต์ สถานที่ท่องเที่ยวของน่านกระจายอยู่ทั่วจังหวัด และระบบขนส่งสาธารณะมีจำกัดนอกเมือง",
  },
  "travel.visa": { en: "Visa Information", th: "ข้อมูลวีซ่า" },
  "travel.tips": { en: "Practical Tips", th: "เคล็ดลับที่เป็นประโยชน์" },
  "travel.bestTime": { en: "Best Time to Visit", th: "ช่วงเวลาที่ดีที่สุด" },

  // Tours
  "tours.title": { en: "Tours & Consultation", th: "ทัวร์และคำปรึกษา" },
  "tours.subtitle": {
    en: "Experience Nan with local expertise. Guided tours, custom itineraries, and travel consultation.",
    th: "สัมผัสน่านกับผู้เชี่ย���ชาญท้องถิ่น ท���วร์นำเที่ยว แผนการท่องเที่ยวแบบกำหนดเอง และคำปรึกษาด้านการเดินทาง",
  },
  "tours.packages": { en: "Tour Packages", th: "แพ็กเกจทัวร์" },
  "tours.business.title": {
    en: "Are You a Business in Nan?",
    th: "คุณเป็นธุรกิจในน่านหรือไม่?",
  },
  "tours.business.desc": {
    en: "We help local businesses, hotels, restaurants, and activity providers reach international tourists.",
    th: "เราช่วยธุรกิจท้องถิ่น โรงแรม ร้านอาหาร และผู้ให้บริการกิจกรรม เข้าถึงนักท่องเที่ยวต่างชาติ",
  },
  "tours.business.cta": { en: "Partner With Us", th: "ร่วมเป็นพาร์ทเนอร์" },
  "tours.cta.title": {
    en: "Ready to Book Your Nan Adventure?",
    th: "พร้อมจองการผจญภ��ยน่านหรือยัง?",
  },
  "tours.cta.desc": {
    en: "Contact us for pricing, availability, and custom tour requests.",
    th: "ติด��่อเราสำหรับราคา ช่วงเวลาว่าง และคำขอทัวร์แบบกำหนดเอง",
  },
  "tours.cta.contact": { en: "Contact Us to Book", th: "ติดต่อเราเพื่อจอง" },

  // Contact
  "contact.title": { en: "Contact Us", th: "ติดต่อเรา" },
  "contact.subtitle": {
    en: "Have questions about Nan? Want to book a tour or partner with us? We'd love to hear from you.",
    th: "มีคำถามเกี่ยวกับน่าน? อยากจองทัวร์หรือร่วมเป็นพาร์ทเนอร์? เรายินดีรับฟัง",
  },
  "contact.form.title": { en: "Send Us a Message", th: "ส่งข้อความถึงเรา" },
  "contact.form.name": { en: "Name", th: "ชื่อ" },
  "contact.form.email": { en: "Email", th: "อีเมล" },
  "contact.form.subject": { en: "Subject", th: "หัวข้อ" },
  "contact.form.selectTopic": { en: "Select a topic...", th: "เลือกหัวข้อ..." },
  "contact.form.tourBooking": { en: "Tour Booking", th: "จองทัวร์" },
  "contact.form.travelAdvice": { en: "Travel Advice", th: "คำแน��นำการเดินทาง" },
  "contact.form.businessPartnership": { en: "Business Partnership", th: "พาร์ทเนอร์ธุรกิจ" },
  "contact.form.general": { en: "General Inquiry", th: "สอบถามทั่วไป" },
  "contact.form.message": { en: "Message", th: "ข้อความ" },
  "contact.form.placeholder": {
    en: "Tell us how we can help...",
    th: "บอกเราว่าเราช่วยอะไรได้บ้าง...",
  },
  "contact.form.send": { en: "Send Message", th: "ส่งข้อความ" },
  "contact.form.sending": { en: "Sending...", th: "กำลังส่ง..." },
  "contact.form.sent.title": { en: "Message Sent!", th: "ส่งข้อความแล้ว!" },
  "contact.form.sent.desc": {
    en: "Thank you for reaching out. We'll get back to you within 24 hours.",
    th: "ขอบคุณที่ติดต่อเรา เราจะตอบกลับภายใน 24 ชั่วโมง",
  },
  "contact.form.sendAnother": { en: "Send another message", th: "ส่งข้อความอีก" },
  "contact.info.title": { en: "Get in Touch", th: "ช่องทางติดต่อ" },
  "contact.info.email": { en: "Email", th: "อีเมล" },
  "contact.info.location": { en: "Location", th: "ที่ตั้ง" },
  "contact.info.locationValue": {
    en: "Nan Province, Northern Thailand",
    th: "จังหวัดน่าน ภาคเหนือของประเทศไทย",
  },
  "contact.info.responseTime": { en: "Response Time", th: "เวลาตอบกลับ" },
  "contact.info.responseTimeValue": {
    en: "We aim to respond within 24 hours",
    th: "เราตั้งใจตอบกลับภายใน 24 ชั่วโมง",
  },
  "contact.info.business": { en: "For Businesses", th: "สำหรับธุรกิจ" },
  "contact.info.businessValue": {
    en: 'Interested in promoting your business? Select "Business Partnership" in the form.',
    th: 'สนใจโปรโมทธุรกิจ? เลือก "พาร์ทเนอร์ธุรกิจ" ในแบบฟอร์ม',
  },

  // Footer
  "footer.description": {
    en: "Your guide to exploring Nan province, Thailand. We help foreign tourists discover the beauty, culture, and hidden gems of one of northern Thailand's most enchanting destinations.",
    th: "คู่มือการสำรวจจังหวัดน่าน ประเทศไทย เราช่วยนักท่องเที่ยวต่างชาติค้นพบความงาม วัฒนธรรม และสถานที่ซ่อนเร้นของจุดหมายปลายทางที่มีเสน่ห์ที่สุดแห่งหนึ่งของภาคเหนือ",
  },
  "footer.explore": { en: "Explore", th: "สำรวจ" },
  "footer.contact": { en: "Contact", th: "ติดต่อ" },
  "footer.rights": { en: "All rights reserved.", th: "สงวนลิขสิทธิ์" },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] || translations[key]?.["en"] || key;
}

export default translations;
