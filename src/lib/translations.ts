export type Lang = "en" | "th";

const translations = {
  // Navbar
  "nav.home": { en: "Home", th: "หน้าแรก" },
  "nav.about": { en: "About Nan", th: "เกี่ยวกับน่าน" },
  "nav.places": { en: "Places", th: "สถานที่" },
  "nav.activities": { en: "Activities", th: "กิจกรรม" },
  "nav.blog": { en: "Blog", th: "บล็อก" },
  "nav.travelInfo": { en: "Getting Here", th: "การเดินทาง" },
  "nav.tours": { en: "Tours", th: "ทัวร์" },
  "nav.contact": { en: "Contact", th: "ติดต่อ" },

  // Homepage — Hero
  "home.hero.title": {
    en: "Welcome to Nan",
    th: "ยินดีต้อนรับสู่น่าน",
  },
  "home.hero.description": {
    en: "A place where mornings start with mist over the mountains and evenings end with the best food you've ever had. Come see what life is like here.",
    th: "ที่ที่เช้าเริ่มต้นด้วยหมอกเหนือขุนเขา และค่ำคืนจบลงด้วยอาหารที่อร่อยที่สุดที่คุณเคยลิ้มลอง มาดูว่าชีวิตที่นี่เป็นยังไง",
  },
  "home.hero.explorePlaces": { en: "See what's here", th: "ดูว่ามีอะไรบ้าง" },
  "home.hero.bookTour": { en: "Plan a visit", th: "วางแผนมาเที่ยว" },

  // Homepage — Intro
  "home.intro.title": {
    en: "Nan isn't a tourist destination. It's someone's home, and they'd like you to visit.",
    th: "น่านไม่ใช่แค่สถานที่ท่องเที่ยว แต่เป็นบ้านของใครบางคน และเขาอยากให้คุณมาเยือน",
  },
  "home.intro.desc": {
    en: "Most visitors to northern Thailand never make it this far. Those who do find something they didn't expect — a quiet province with deep roots, warm people, and a pace of life that makes you want to stay a little longer.",
    th: "นักท่องเที่ยวส่วนใหญ่ที่มาภาคเหนือไม่เคยมาถึงที่นี่ แต่คนที่มาจะพบสิ่งที่ไม่คาดคิด — จังหวัดเงียบสงบที่มีรากลึก ผู้คนอบอุ่น และจังหวะชีวิตที่ทำให้อยากอยู่ต่ออีกสักหน่อย",
  },

  // Homepage — Places
  "home.places.label": { en: "Places", th: "สถานที่" },
  "home.places.title": { en: "Places worth the trip", th: "สถานที่ที่คุ้มค่าแก่การมาเยือน" },
  "home.places.desc": {
    en: "Temples with murals painted centuries ago, mountains that disappear into clouds, villages where salt has been harvested the same way for 700 years.",
    th: "วัดที่มีจิตรกรรมฝาผนังวาดมาหลายร้อยปี ภูเขาที่หายไปในเมฆ หมู่บ้านที่ทำเกลือแบบเดิมมา 700 ปี",
  },
  "home.places.viewAll": { en: "See all places", th: "ดูสถานที่ทั้งหมด" },

  // Homepage — Activities
  "home.activities.label": { en: "Join in", th: "ร่วมสนุก" },
  "home.activities.title": { en: "Things to do here", th: "สิ่งที่ทำได้ที่นี่" },
  "home.activities.desc": {
    en: "Cook with a local family, learn to weave the patterns that have been here for generations, or get your hands in the soil on a working farm.",
    th: "ทำอาหารกับครอบครัวท้องถิ่น เรียนทอผ้าลายที่สืบทอดมาหลายรุ่น หรือลงมือปลูกข้าวในนาจริงๆ",
  },
  "home.activities.viewAll": { en: "See all activities", th: "ดูกิจกรรมทั้งหมด" },

  // Homepage — Image break
  "home.break.label": { en: "Slow down", th: "ช้าลงสักหน่อย" },
  "home.break.title": {
    en: "Nan moves at its own pace",
    th: "น่านมีจังหวะของตัวเอง",
  },

  // Homepage — Blog
  "home.blog.label": { en: "Stories", th: "เรื่องเล่า" },
  "home.blog.title": { en: "From the blog", th: "จากบล็อก" },
  "home.blog.readMore": { en: "More stories", th: "เรื่องเล่าเพิ่มเติม" },
  "home.blog.readArticle": { en: "Read more", th: "อ่านต่อ" },

  // Homepage — CTA
  "home.cta.title": {
    en: "Come see for yourself",
    th: "มาดูด้วยตัวเอง",
  },
  "home.cta.desc": {
    en: "We grew up here. We know the back roads, the best noodle stalls, the viewpoints that aren't on any map. Let us show you around.",
    th: "เราโตที่นี่ เรารู้จักทางลัด ร้านก๋วยเตี๋ยวที่อร่อยที่สุด จุดชมวิวที่ไม่มีในแผนที่ไหน ให้เราพาคุณไปดู",
  },
  "home.cta.viewTours": { en: "See our tours", th: "ดูทัวร์ของเรา" },
  "home.cta.getInTouch": { en: "Say hello", th: "ทักทายเรา" },

  // About
  "about.title": { en: "About Nan", th: "เกี่ยวกับน่าน" },
  "about.subtitle": {
    en: "A small province in the mountains where things still feel the way they used to.",
    th: "จังหวัดเล็กๆ บนภูเขา ที่ทุกอย่างยังคงรู้สึกเหมือนเดิม",
  },
  "about.whyVisit.title": { en: "Why come here?", th: "ทำไมต้องมาที่นี่?" },
  "about.whyVisit.p1": {
    en: "Nan sits in the far northeast of northern Thailand, tucked between mountains and the Lao border. It's the kind of place most tourists drive past on their way to Chiang Mai. But that's exactly what makes it special — it's stayed itself.",
    th: "น่านตั้งอยู่ทางตะวันออกเฉียงเหนือสุดของภาคเหนือ ซ่อนตัวระหว่างภูเขาและชายแดนลาว เป็นที่ที่นักท่องเที่ยวส่วนใหญ่ขับผ่านระหว่างทางไปเชียงใหม่ แต่นั่นแหละที่ทำให้มันพิเศษ — มันยังคงเป็นตัวของตัวเอง",
  },
  "about.whyVisit.p2": {
    en: "The temples here have some of the most beautiful murals in Thailand. The national parks are genuinely wild. And the communities still live by traditions that go back centuries.",
    th: "วัดที่นี่มีจิตรกรรมฝาผนังที่สวยที่สุดในไทย อุทยานแห่งชาติยังคงเป็นป่าจริงๆ และชุมชนยังคงใช้ชีวิตตามประเพณีที่สืบทอดมาหลายร้อยปี",
  },
  "about.history.title": { en: "A long history", th: "ประวัติศาสตร์ยาวนาน" },
  "about.history.p1": {
    en: "Nan used to be its own kingdom. It had ties to Lanna and Sukhothai, and its position on the trade routes between Thailand and Laos gave it a culture all its own — a mix of Thai, Lao, and local hill tribe traditions.",
    th: "น่านเคยเป็นอาณาจักรของตัวเอง มีความสัมพันธ์กับล้านนาและสุโขทัย ตำแหน่งที่ตั้งบนเส้นทางการค้าระหว่างไทยกับลาวทำให้มีวัฒนธรรมเฉพาะตัว — ผสมผสานไทย ลาว และชนเผ่าท้องถิ่น",
  },
  "about.history.p2": {
    en: "Walk into Wat Phumin and you'll see murals from hundreds of years ago that still feel alive — scenes of everyday life, love stories, and a famous painting called the 'Whispering of Love' that's become a symbol of the province.",
    th: "เดินเข้าไปในวัดภูมินทร์แล้วจะเห็นจิตรกรรมฝาผนังอายุหลายร้อยปีที่ยังมีชีวิตชีวา — ภาพชีวิตประจำวัน เรื่องรัก และภาพเขียนอันโด่งดัง 'กระซิบรัก' ที่กลายเป็นสัญลักษณ์ของจังหวัด",
  },
  "about.climate.title": { en: "When to visit", th: "มาเมื่อไหร่ดี" },
  "about.climate.cool": { en: "Cool Season (Nov–Feb)", th: "ฤดูหนาว (พ.ย.–ก.พ.)" },
  "about.climate.cool.desc": {
    en: "This is when most people visit. Cool mornings, clear skies, and the famous sea of mist at Doi Samer Dao. Temperatures in the mountains drop to 10°C — bring a jacket.",
    th: "ช่วงที่คนส่วนใหญ่มาเที่ยว เช้าเย็นสบาย ท้องฟ้าแจ่มใส และทะเลหมอกอันโด่งดังที่ดอยเสมอดาว อุณหภูมิบนภูเขาลดลงถึง 10°C เอาแจ็คเก็ตมาด้วย",
  },
  "about.climate.hot": { en: "Hot Season (Mar–May)", th: "ฤดูร้อน (มี.ค.–พ.ค.)" },
  "about.climate.hot.desc": {
    en: "It gets warm, up to 35°C. But if you come in April, you'll catch Songkran — the Thai New Year water festival. Worth the heat.",
    th: "อากาศร้อนขึ้นถึง 35°C แต่ถ้ามาเดือนเมษายนจะได้ร่วมสงกรานต์ คุ้มค่ากับความร้อน",
  },
  "about.climate.rainy": { en: "Rainy Season (Jun–Oct)", th: "ฤดูฝน (มิ.ย.–ต.ค.)" },
  "about.climate.rainy.desc": {
    en: "Everything turns green. Fewer visitors, lower prices. Rain comes in short bursts, usually in the afternoon — it won't ruin your trip.",
    th: "ทุกอย่างเขียวขจี นักท่องเที่ยวน้อย ราคาถูกลง ฝนตกเป็นช่วงสั้นๆ มักตอนบ่าย ไม่ทำให้ทริปเสีย",
  },
  "about.climate.elevation": { en: "Up in the mountains", th: "บนภูเขา" },
  "about.climate.elevation.desc": {
    en: "The city sits at about 200m, but the peaks go up to 2,079m at Doi Phu Kha. It's noticeably cooler up there than the rest of Thailand.",
    th: "ตัวเมืองอยู่สูงราว 200 ม. แต่ยอดเขาสูงถึง 2,079 ม. ที่ดอยภูคา อากาศเย็นกว่าที่อื่นในไทยชัดเจน",
  },
  "about.people.title": { en: "The people here", th: "ผู้คนที่นี่" },
  "about.people.p1": {
    en: "Nan is home to Thai Yuan, Tai Lue, Hmong, Mien, and other communities who've been here for generations. Each group has their own food, textiles, festivals, and way of life.",
    th: "น่านเป็นบ้านของไทยวน ไทลื้อ ม้ง เมี่ยน และชุมชนอื่นๆ ที่อยู่ที่นี่มาหลายรุ่น แต่ละกลุ่มมีอาหาร ผ้าทอ เทศกาล และวิถีชีวิตของตัวเอง",
  },
  "about.people.p2": {
    en: "The Tai Lue are especially known for their weaving — intricate patterns passed down through families. You'll see their influence everywhere, from temple architecture to the textiles sold at the morning market.",
    th: "ชาวไทลื้อเป็นที่รู้จักเป็นพิเศษเรื่องการทอผ้า — ลวดลายซับซ้อนที่สืบทอดในครอบครัว จะเห็นอิทธิพลของพวกเขาทุกที่ ตั้งแต่สถาปัตยกรรมวัดจนถึงผ้าทอที่ขายในตลาดเช้า",
  },

  // Blog
  "blog.title": { en: "Stories", th: "เรื่องเล่า" },
  "blog.subtitle": {
    en: "Notes, guides, and things we've learned from living and traveling in Nan.",
    th: "บันทึก คู่มือ และสิ่งที่เราเรียนรู้จากการใช้ชีวิตและท่องเที่ยวในน่าน",
  },
  "blog.empty": { en: "Nothing here yet — check back soon.", th: "ยังไม่มีเรื่องเล่า กลับมาเร็วๆ นี้" },
  "blog.by": { en: "By", th: "โดย" },
  "blog.backToBlog": { en: "Back to stories", th: "กลับไปเรื่องเล่า" },

  // Places
  "places.title": { en: "Places", th: "สถานที่" },
  "places.subtitle": {
    en: "Temples, mountains, villages — the spots we'd take a friend to on their first visit.",
    th: "วัด ภูเขา หมู่บ้าน — ที่ที่เราจะพาเพื่อนไปถ้ามาเที่ยวครั้งแรก",
  },
  "places.backToPlaces": { en: "Back to places", th: "กลับไปสถานที่" },
  "places.location": { en: "Location", th: "ที่ตั้ง" },
  "places.openMaps": { en: "Open in Google Maps", th: "เปิดใน Google Maps" },

  // Categories
  "category.temple": { en: "Temples", th: "วัด" },
  "category.nature": { en: "Nature", th: "ธรรมชาติ" },
  "category.culture": { en: "Culture", th: "วัฒนธรรม" },
  "category.food": { en: "Food", th: "อาหาร" },
  "category.attraction": { en: "Sights", th: "สถานที่" },
  "category.activity": { en: "Experience", th: "ประสบการณ์" },

  // Activities
  "activities.title": { en: "Things to do", th: "สิ่งที่ทำได้" },
  "activities.subtitle": {
    en: "Get your hands dirty. Cook, weave, farm, raft — this isn't sightseeing, it's joining in.",
    th: "ลงมือทำ ทำอาหาร ทอผ้า ทำนา ล่องแก่ง — ไม่ใช่แค่ดู แต่ร่วมทำด้วย",
  },
  "activities.empty": { en: "Coming soon.", th: "เร็วๆ นี้" },
  "activities.backToActivities": { en: "Back to activities", th: "กลับไปกิจกรรม" },

  // Travel Info
  "travel.title": { en: "Getting Here", th: "การเดินทาง" },
  "travel.subtitle": {
    en: "Nan is off the beaten path — that's the point. Here's how to get here.",
    th: "น่านไม่ได้อยู่ใกล้ — นั่นแหละประเด็น นี่คือวิธีมาถึงที่นี่",
  },
  "travel.gettingThere": { en: "Getting to Nan", th: "การเดินทางไปน่าน" },
  "travel.byAir": { en: "Fly in", th: "บิน" },
  "travel.byAir.desc": {
    en: "Nan Nakhon Airport (NNT) has daily flights from Bangkok — about 75 minutes with Nok Air or AirAsia. The airport is tiny and 10 minutes from town.",
    th: "สนามบินน่านนคร (NNT) มีเที่ยวบินจากกรุงเทพฯ ทุกวัน ประมาณ 75 นาที กับนกแอร์หรือแอร์เอเชีย สนามบินเล็กและอยู่ห่างเมืองแค่ 10 นาที",
  },
  "travel.byBus": { en: "Take the bus", th: "นั่งรถบัส" },
  "travel.byBus.desc": {
    en: "Overnight buses from Bangkok's Mo Chit take 10–11 hours. From Chiang Mai or Chiang Rai, it's about 6 hours. VIP buses are comfortable and cheap.",
    th: "รถบัสคืนจากหมอชิตใช้เวลา 10–11 ชั่วโมง จากเชียงใหม่หรือเชียงรายประมาณ 6 ชั่วโมง รถ VIP สะดวกสบายและราคาไม่แพง",
  },
  "travel.byCar": { en: "Drive", th: "ขับรถ" },
  "travel.byCar.desc": {
    en: "About 670km from Bangkok, 8–9 hours. The last stretch through the mountains is beautiful. From Chiang Mai, take Route 1 south then 101 east — around 4 hours.",
    th: "ประมาณ 670 กม. จากกรุงเทพฯ 8–9 ชั่วโมง ช่วงสุดท้ายผ่านภูเขาสวยมาก จากเชียงใหม่ใช้ทางหลวง 1 ลงใต้แล้วเลี้ยว 101 ตะวันออก ประมาณ 4 ชั่วโมง",
  },
  "travel.gettingAround": { en: "Once you're here", th: "เมื่อมาถึงแล้ว" },
  "travel.gettingAround.tip": {
    en: "Rent a motorbike or car — you'll need one. Nan's best spots are spread across the province and there's not much public transport outside town. Bikes are 200–300 baht a day.",
    th: "เช่ามอเตอร์ไซค์หรือรถยนต์ — จำเป็นต้องมี ที่เที่ยวดีๆ กระจายทั่วจังหวัดและไม่ค่อยมีรถสาธารณะนอกเมือง มอเตอร์ไซค์วันละ 200–300 บาท",
  },
  "travel.visa": { en: "Entry", th: "การเข้าประเทศ" },
  "travel.tips": { en: "Good to know", th: "ดีที่ต้องรู้" },
  "travel.bestTime": { en: "Best time to come", th: "ช่วงเวลาที่ดีที่สุด" },

  // Tours
  "tours.title": { en: "Tours", th: "ทัวร์" },
  "tours.subtitle": {
    en: "We'll take you to the places we love — the ones guidebooks don't know about.",
    th: "เราจะพาคุณไปที่ที่เรารัก — ที่ที่หนังสือท่องเที่ยวไม่รู้จัก",
  },
  "tours.packages": { en: "Our tours", th: "ทัวร์ของเรา" },
  "tours.business.title": {
    en: "Run a business in Nan?",
    th: "มีธุรกิจในน่าน?" },
  "tours.business.desc": {
    en: "We connect local businesses with travelers from around the world. If you run a guesthouse, restaurant, or activity in the area, let's work together.",
    th: "เราเชื่อมต่อธุรกิจท้องถิ่นกับนักเดินทางจากทั่วโลก ถ้าคุณมีเกสต์เฮาส์ ร้านอาหาร หรือกิจกรรมในพื้นที่ มาทำงานด้วยกัน",
  },
  "tours.business.cta": { en: "Get in touch", th: "ติดต่อเรา" },
  "tours.cta.title": {
    en: "Let us show you around",
    th: "ให้เราพาคุณไปดู",
  },
  "tours.cta.desc": {
    en: "Drop us a message and we'll figure out the perfect trip together — no cookie-cutter packages, just real experiences.",
    th: "ส่งข้อความมา แล้วเราจะช่วยวางแผนทริปที่ใช่ด้วยกัน — ไม่ใช่แพ็กเกจสำเร็จรูป แต่เป็นประสบการณ์จริง",
  },
  "tours.cta.contact": { en: "Send us a message", th: "ส่งข้อความ" },

  // Contact
  "contact.title": { en: "Say hello", th: "ทักทายเรา" },
  "contact.subtitle": {
    en: "Questions, ideas, or just want to say hi — we'd love to hear from you.",
    th: "มีคำถาม ไอเดีย หรือแค่อยากทักทาย — เรายินดีรับฟัง",
  },
  "contact.form.title": { en: "Drop us a line", th: "ส่งข้อความ" },
  "contact.form.name": { en: "Name", th: "ชื่อ" },
  "contact.form.email": { en: "Email", th: "อีเมล" },
  "contact.form.subject": { en: "What's this about?", th: "เรื่องอะไร?" },
  "contact.form.selectTopic": { en: "Pick one...", th: "เลือกหัวข้อ..." },
  "contact.form.tourBooking": { en: "Book a tour", th: "จองทัวร์" },
  "contact.form.travelAdvice": { en: "Travel questions", th: "คำถามการเดินทาง" },
  "contact.form.businessPartnership": { en: "Work together", th: "ร่วมงานกัน" },
  "contact.form.general": { en: "Just saying hi", th: "แค่ทักทาย" },
  "contact.form.message": { en: "Your message", th: "ข้อความ" },
  "contact.form.placeholder": {
    en: "Tell us what's on your mind...",
    th: "บอกเราว่าคิดอะไรอยู่...",
  },
  "contact.form.send": { en: "Send", th: "ส่ง" },
  "contact.form.sending": { en: "Sending...", th: "กำลังส่ง..." },
  "contact.form.sent.title": { en: "Got it!", th: "ได้รับแล้ว!" },
  "contact.form.sent.desc": {
    en: "Thanks for reaching out — we'll get back to you soon.",
    th: "ขอบคุณที่ติดต่อมา เราจะตอบกลับเร็วๆ นี้",
  },
  "contact.form.sendAnother": { en: "Send another", th: "ส่งอีก" },
  "contact.info.title": { en: "Other ways to reach us", th: "ช่องทางอื่น" },
  "contact.info.email": { en: "Email", th: "อีเมล" },
  "contact.info.location": { en: "Where we are", th: "เราอยู่ที่ไหน" },
  "contact.info.locationValue": {
    en: "Nan Province, Northern Thailand",
    th: "จังหวัดน่าน ภาคเหนือของประเทศไทย",
  },
  "contact.info.responseTime": { en: "Response time", th: "เวลาตอบกลับ" },
  "contact.info.responseTimeValue": {
    en: "Usually within a day",
    th: "ปกติภายในหนึ่งวัน",
  },
  "contact.info.business": { en: "For businesses", th: "สำหรับธุรกิจ" },
  "contact.info.businessValue": {
    en: "Want to list your place or service? Choose \"Work together\" above.",
    th: "อยากลงรายการสถานที่หรือบริการ? เลือก \"ร่วมงานกัน\" ด้านบน",
  },

  // Footer
  "footer.description": {
    en: "We're a small team from Nan who want to share our home with the world. This place shaped who we are, and we think it might change you too.",
    th: "เราเป็นทีมเล็กๆ จากน่านที่อยากแบ่งปันบ้านเกิดกับทุกคน สถานที่นี้หล่อหลอมเรา และเราคิดว่ามันอาจเปลี่ยนคุณเช่นกัน",
  },
  "footer.explore": { en: "Explore", th: "สำรวจ" },
  "footer.contact": { en: "Reach us", th: "ติดต่อ" },
  "footer.rights": { en: "All rights reserved.", th: "สงวนลิขสิทธิ์" },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] || translations[key]?.["en"] || key;
}

export default translations;
