import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@nantourism.com" },
    update: {},
    create: {
      email: "admin@nantourism.com",
      password: hashedPassword,
      name: "Admin",
      role: "ADMIN",
    },
  });

  const post1 = await prisma.post.upsert({
    where: { slug: "welcome-to-nan" },
    update: {},
    create: {
      title: "Welcome to Nan: Thailand's Hidden Gem",
      slug: "welcome-to-nan",
      content: `<p>Nestled in the mountainous terrain of northern Thailand, Nan province remains one of the country's best-kept secrets. Unlike the bustling tourist hubs of Chiang Mai or Bangkok, Nan offers an authentic Thai experience that feels untouched by mass tourism.</p>
<p>From ancient temples adorned with stunning murals to misty mountain peaks and traditional villages, Nan is a destination that rewards the curious traveler. Whether you're seeking adventure in Doi Phu Kha National Park, cultural immersion in centuries-old communities, or simply a peaceful escape from the modern world, Nan has something extraordinary to offer.</p>
<p>In this blog, we'll be your guide to everything Nan — from practical travel tips to hidden spots that only locals know about. Stay tuned for more stories from this remarkable corner of Thailand.</p>`,
      excerpt:
        "Discover why Nan province is one of northern Thailand's most captivating destinations for adventurous travelers.",
      published: true,
      category: "travel",
      tags: "nan,thailand,travel,introduction",
      authorId: admin.id,
    },
  });

  const post2 = await prisma.post.upsert({
    where: { slug: "top-temples-in-nan" },
    update: {},
    create: {
      title: "5 Must-Visit Temples in Nan Province",
      slug: "top-temples-in-nan",
      content: `<p>Nan's temples are among the most beautiful and historically significant in all of Thailand. Here are five you absolutely cannot miss:</p>
<h3>1. Wat Phumin</h3>
<p>Famous for its cruciform layout and the iconic "Whispering of Love" mural, Wat Phumin is Nan's most celebrated temple. The intricate murals depict scenes from the Jataka tales and everyday life in old Nan.</p>
<h3>2. Wat Phra That Chae Haeng</h3>
<p>Perched on a hill overlooking the Nan River valley, this temple houses a revered golden chedi believed to be over 600 years old. The panoramic views alone are worth the visit.</p>
<h3>3. Wat Phra That Chang Kham</h3>
<p>Located in the heart of the city, this temple features elephant-base stupas and a beautiful collection of Lanna-style architecture.</p>
<h3>4. Wat Nong Bua</h3>
<p>Known for its Tai Lue-style murals that rival those of Wat Phumin, this quiet temple offers a more intimate experience.</p>
<h3>5. Wat Sri Panton</h3>
<p>A hidden gem with some of the most detailed gold-leaf murals in the province. Often overlooked by tourists, making it a peaceful place to visit.</p>`,
      excerpt:
        "Explore the most stunning and historically rich temples across Nan province, from famous Wat Phumin to hidden gems.",
      published: true,
      category: "culture",
      tags: "temples,culture,nan,sightseeing",
      authorId: admin.id,
    },
  });

  await prisma.place.upsert({
    where: { slug: "wat-phumin" },
    update: {},
    create: {
      name: "Wat Phumin",
      slug: "wat-phumin",
      description:
        "Nan's most famous temple, known for its cruciform design and the iconic 'Whispering of Love' mural painting. A must-visit cultural landmark in the heart of the city.",
      category: "temple",
      latitude: 18.7769,
      longitude: 100.7731,
      address: "Pha Kong, Mueang Nan District, Nan 55000",
      published: true,
    },
  });

  await prisma.place.upsert({
    where: { slug: "doi-phu-kha-national-park" },
    update: {},
    create: {
      name: "Doi Phu Kha National Park",
      slug: "doi-phu-kha-national-park",
      description:
        "A stunning national park featuring misty mountain peaks, rare flora including the Chomphu Phu Kha tree, scenic viewpoints, and excellent trekking trails through pristine forest.",
      category: "nature",
      latitude: 19.1847,
      longitude: 101.0864,
      address: "Bo Kluea District, Nan 55220",
      published: true,
    },
  });

  await prisma.place.upsert({
    where: { slug: "bo-kluea-salt-wells" },
    update: {},
    create: {
      name: "Bo Kluea Salt Wells",
      slug: "bo-kluea-salt-wells",
      description:
        "An ancient salt-producing village with wells that have been used for over 700 years. Learn about traditional salt harvesting methods and explore the charming mountain village.",
      category: "culture",
      latitude: 19.1333,
      longitude: 101.1667,
      address: "Bo Kluea District, Nan 55220",
      published: true,
    },
  });

  await prisma.place.upsert({
    where: { slug: "nan-riverside-art-gallery" },
    update: {},
    create: {
      name: "Nan Riverside Art Gallery",
      slug: "nan-riverside-art-gallery",
      description:
        "A beautiful gallery showcasing local and contemporary art set along the scenic Nan River. Features rotating exhibitions from Thai and international artists.",
      category: "attraction",
      latitude: 18.7833,
      longitude: 100.7667,
      address: "Mueang Nan District, Nan 55000",
      published: true,
    },
  });

  // Activities
  await prisma.place.upsert({
    where: { slug: "thai-cooking-workshop" },
    update: {},
    create: {
      name: "Thai Cooking Workshop",
      nameTh: "เวิร์กช็อปทำอาหารไทย",
      slug: "thai-cooking-workshop",
      description:
        "Learn to cook authentic northern Thai dishes with a local chef. Visit the morning market to select fresh ingredients, then prepare classic dishes like Khao Soi and Som Tam in a hands-on cooking class.",
      descriptionTh:
        "เรียนทำอาหารไทยเหนือแท้ๆ กับเชฟท้องถิ่น เยี่ยมชมตลาดเช้าเพื่อเลือกวัตถุดิบสด แล้วลงมือทำอาหารคลาสสิกอย่างข้าวซอยและส้มตำ",
      category: "activity",
      latitude: 18.7769,
      longitude: 100.7731,
      address: "Mueang Nan District, Nan 55000",
      addressTh: "อำเภอเมืองน่าน จังหวัดน่าน 55000",
      published: true,
    },
  });

  await prisma.place.upsert({
    where: { slug: "traditional-weaving-experience" },
    update: {},
    create: {
      name: "Traditional Weaving Experience",
      nameTh: "ประสบการณ์ทอผ้าแบบดั้งเดิม",
      slug: "traditional-weaving-experience",
      description:
        "Visit a Tai Lue weaving village and learn the centuries-old art of traditional textile weaving. Create your own small piece of fabric using ancient patterns and techniques passed down through generations.",
      descriptionTh:
        "เยี่ยมชมหมู่บ้านทอผ้าไทลื้อ และเรียนรู้ศิลปะการทอผ้าแบบดั้งเดิมที่สืบทอดมาหลายร้อยปี สร้างผ้าทอชิ้นเล็กๆ ของคุณเองด้วยลวดลายและเทคนิคโบราณ",
      category: "activity",
      latitude: 18.8000,
      longitude: 100.7800,
      address: "Mueang Nan District, Nan 55000",
      addressTh: "อำเภอเมืองน่าน จังหวัดน่าน 55000",
      published: true,
    },
  });

  await prisma.place.upsert({
    where: { slug: "rice-farming-experience" },
    update: {},
    create: {
      name: "Rice Farming Experience",
      nameTh: "ประสบการณ์ทำนาข้าว",
      slug: "rice-farming-experience",
      description:
        "Get your hands dirty with a real on-field rice farming experience. Learn about traditional rice cultivation methods, plant rice seedlings, and enjoy a farm-fresh lunch with a local farming family.",
      descriptionTh:
        "ลงมือทำนาจริงๆ เรียนรู้วิธีปลูกข้าวแบบดั้งเดิม ปักดำกล้าข้าว และเพลิดเพลินกับอาหารกลางวันจากฟาร์มสดๆ กับครอบครัวเกษตรกรท้องถิ่น",
      category: "activity",
      latitude: 18.7500,
      longitude: 100.8000,
      address: "Phu Phiang District, Nan 55000",
      addressTh: "อำเภอภูเพียง จังหวัดน่าน 55000",
      published: true,
    },
  });

  console.log("Seed data created successfully!");
  console.log(`Admin user: ${admin.email}`);
  console.log(`Posts created: ${post1.title}, ${post2.title}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
