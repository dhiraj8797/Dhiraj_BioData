"use client";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import KundaliMatchSection from "../components/KundaliMatchSection";
import PersonalDetails from "../components/PersonalDetails";
import ContactCard from "../components/ContactCard";
import FamilyDetails from "../components/FamilyDetails";
import Gallery from "../components/Gallery";
import EducationCareer from "../components/EducationCareer";
import MoreAboutMe from "../components/MoreAboutMe";
import Footer from "../components/Footer";

export default function Home() {
  const heroData = {
    title: "Dhiraj Kumar",
    subtitle: "Associate Consultant at Capgemini",
    intro: "I hold a Bachelor's degree in Information Technology and currently work as a Software Tester at Capgemini. I am a caring and grounded individual with strong family values and a deep emotional connection with my loved ones. I believe in maintaining a balanced life with positivity, respect, and meaningful relationships at its core.",
    location: "Hanumangadhi Sareya Ward No 6, Gopalganj, Bihar - 841428",
    photo: "/images/profile-photo.jpg",
    ctaPrimary: "View Full Profile",
    ctaSecondary: "Download Biodata"
  };

  const contactData = {
    phone: "+91-7022918586",
    fatherPhone: "+91-7352507593",
    motherPhone: "+91-8092816946",
    sisterPhone: "+91-9810897152",
    brotherPhone: "+91-8541912407",
    email: "kumar.dhirajqa@gmail.com",
    city: "Hanumangadhi Sareya Ward No 6, Gopalganj, Bihar - 841428"
  };

  const aboutData = {
    aboutMe: "I am a simple, grounded, and family-oriented individual who values honesty, respect, and meaningful relationships. I have a passion for cooking and enjoy preparing meals for my loved ones. Traveling is something I deeply enjoy, as it allows me to explore new places and experiences. I believe in maintaining a positive outlook on life and balancing personal and professional commitments with dedication.",
    partnerPreference: "I am looking for a life partner who is kind-hearted, understanding, and supportive. Someone who values family, shares a positive attitude towards life, and can be a true companion in all phases of life. A cheerful and warm personality with a good sense of understanding would be greatly appreciated. I believe in building a relationship based on trust, mutual respect, and companionship."
  };

  const personalDetails = [
    { label: "Date of Birth", value: "23-Sep-1998" },
    { label: "Age", value: "27 years" },
    { label: "Height", value: "5'10\"" },
    { label: "Marital Status", value: "Never Married" },
    { label: "Religion", value: "Hindu" },
    { label: "Community", value: "Nonia" },
    { label: "Mother Tongue", value: "Hindi" },
    { label: "Email ID", value: "kumar.dhirajqa@gmail.com" },
    { label: "Contact No.", value: "+91-7022918586" }
  ];

  const familyDetails = [
    { label: "Father's Name", value: "Wakil Mahato, Govt Employee" },
    { label: "Mother's Name", value: "Geeta Devi, HouseWife" },
    { label: "Sister", value: "Manisha Kumari (Working in PwC, Married 6th Feb 2025)" },
    { label: "Brother", value: "Abhishek Kumar, Preparing for Govt Jobs" },
    { label: "Family Type", value: "Small Family" },
    { label: "Family Values", value: "Traditional and Modern Both" }
  ];

  const educationCareer = [
    { label: "Highest Qualification", value: "B.E / B.Tech – Bachelor of Engineering / Bachelor of Technology" },
    { label: "College Attended", value: "KIIT – Kalinga Institute of Industrial Technology" },
    { label: "Income", value: "INR 10 Lakh to 15 Lakh" }
  ];

  return (
    <main>
      <Hero hero={heroData} contact={contactData} />
      <AboutSection aboutMe={aboutData.aboutMe} partnerPreference={aboutData.partnerPreference} />
      <PersonalDetails items={personalDetails} />
      <FamilyDetails familyDetails={familyDetails} />
      <EducationCareer items={educationCareer} />
      <MoreAboutMe />
      <ContactCard contact={contactData} pdf="/biodata.pdf" />
      <Gallery photos={["/images/gallery/Screenshot 2026-03-25 163530.png", "/images/gallery/Screenshot 2026-03-25 163552.png", "/images/gallery/Screenshot 2026-03-25 163708.png"]} />
      <KundaliMatchSection />
      <Footer />
    </main>
  );
}
