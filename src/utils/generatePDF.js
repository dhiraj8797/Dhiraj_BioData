import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { imageToBase64 } from './imageUtils';

export const generateBiodataPDF = async () => {
  const doc = new jsPDF();
  
  // Clean, professional colors
  const colors = {
    primary: [41, 128, 185],     // Nice blue
    secondary: [52, 73, 94],     // Dark blue-gray
    accent: [231, 76, 60],       // Nice red accent
    light: [245, 245, 245],      // Light gray
    dark: [44, 62, 80],         // Dark gray
    muted: [149, 165, 166]       // Muted gray
  };
  
  // Clean white background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, 'F');
  
  // Header with clean design
  doc.setFillColor(...colors.primary);
  doc.rect(0, 0, 210, 60, 'F');
  
  // Name and title
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('DHIRAJ KUMAR', 105, 30, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.text('Associate Consultant at Capgemini', 105, 45, { align: 'center' });
  
  // Contact info in header
  doc.setFontSize(10);
  doc.text('+91-7022918586 | kumar.dhirajqa@gmail.com', 105, 55, { align: 'center' });
  
  // Add actual profile photo
  try {
    // Convert image to base64 and add to PDF
    const imgData = await imageToBase64('/images/profile-photo.jpg');
    doc.addImage(imgData, 'JPEG', 20, 70, 50, 50);
  } catch (error) {
    console.log('Image loading failed, using placeholder');
    // Fallback to placeholder
    doc.setFillColor(...colors.light);
    doc.rect(20, 70, 50, 50, 'F');
    doc.setDrawColor(...colors.primary);
    doc.setLineWidth(1);
    doc.rect(20, 70, 50, 50, 'S');
    
    doc.setFontSize(8);
    doc.setTextColor(...colors.muted);
    doc.text('Profile Photo', 45, 95, { align: 'center' });
  }
  
  // Quick info boxes next to photo
  doc.setFillColor(...colors.light);
  doc.rect(80, 70, 55, 15, 'F');
  doc.setFillColor(...colors.light);
  doc.rect(140, 70, 50, 15, 'F');
  
  doc.setFontSize(9);
  doc.setTextColor(...colors.dark);
  doc.setFont('helvetica', 'bold');
  doc.text('Age: 26 Years', 107, 80, { align: 'center' });
  doc.text('Height: 5\'10\"', 165, 80, { align: 'center' });
  
  doc.setFillColor(...colors.light);
  doc.rect(80, 90, 55, 15, 'F');
  doc.setFillColor(...colors.light);
  doc.rect(140, 90, 50, 15, 'F');
  
  doc.text('Religion: Hindu', 107, 100, { align: 'center' });
  doc.text('Diet: Vegetarian', 165, 100, { align: 'center' });
  
  // Section divider
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(0.5);
  doc.line(20, 130, 190, 130);
  
  // Personal Details Section
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.setFont('helvetica', 'bold');
  doc.text('Personal Details', 20, 145);
  
  const personalDetails = [
    ['Date of Birth', '23 September 1998'],
    ['Age', '27 Years'],
    ['Height', "5'10\""],
    ['Weight', '68 kg'],
    ['Religion', 'Hindu'],
    ['Mother Tongue', 'Hindi'],
    ['Marital Status', 'Never Married'],
    ['Diet', 'Vegetarian'],
    ['Smoke', 'No'],
    ['Drink', 'No']
  ];
  
  autoTable(doc, {
    startY: 155,
    head: [['Particulars', 'Details']],
    body: personalDetails,
    theme: 'grid',
    headStyles: { 
      fillColor: [...colors.primary], 
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 11
    },
    styles: { 
      fontSize: 10, 
      cellPadding: 4,
      lineWidth: 0.1,
      lineColor: [200, 200, 200]
    },
    alternateRowStyles: {
      fillColor: [...colors.light]
    }
  });
  
  // Education & Career Section
  const eduY = doc.lastAutoTable.finalY || 155;
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.text('Education & Career', 20, eduY + 15);
  
  const educationCareer = [
    ['Highest Qualification', 'B.E / B.Tech – Computer Science'],
    ['College', 'KIIT University, Bhubaneswar'],
    ['Passed Out', '2020'],
    ['Company', 'Capgemini India'],
    ['Designation', 'Associate Consultant'],
    ['Experience', '3+ Years'],
    ['Annual Income', 'INR 10-15 Lakhs']
  ];
  
  autoTable(doc, {
    startY: eduY + 25,
    head: [['Particulars', 'Details']],
    body: educationCareer,
    theme: 'grid',
    headStyles: { 
      fillColor: [...colors.primary], 
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 11
    },
    styles: { 
      fontSize: 10, 
      cellPadding: 4,
      lineWidth: 0.1,
      lineColor: [200, 200, 200]
    },
    alternateRowStyles: {
      fillColor: [...colors.light]
    }
  });
  
  // Family Details Section
  const familyY = doc.lastAutoTable.finalY || eduY + 25;
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.text('Family Details', 20, familyY + 15);
  
  const familyDetails = [
    ['Father', 'Wakil Mahato (Government Employee)'],
    ['Mother', 'Geeta Devi (Homemaker)'],
    ['Brother', 'Abhishek Kumar (Unmarried)'],
    ['Sister', 'Manisha Kumari (Working in PwC, Married)'],
    ['Family Type', 'Small Family'],
    ['Family Values', 'Traditional & Modern'],
    ['Family Status', 'Middle Class']
  ];
  
  autoTable(doc, {
    startY: familyY + 25,
    head: [['Particulars', 'Details']],
    body: familyDetails,
    theme: 'grid',
    headStyles: { 
      fillColor: [...colors.primary], 
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 11
    },
    styles: { 
      fontSize: 10, 
      cellPadding: 4,
      lineWidth: 0.1,
      lineColor: [200, 200, 200]
    },
    alternateRowStyles: {
      fillColor: [...colors.light]
    }
  });
  
  // Kundali Details Section
  const kundaliY = doc.lastAutoTable.finalY || familyY + 25;
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.text('Horoscope Details', 20, kundaliY + 15);
  
  const kundaliDetails = [
    ['Rashi', 'Tula (Libra)'],
    ['Nakshatra', 'Chitra'],
    ['Gotra', 'Kashyap'],
    ['Manglik', 'Non-Manglik'],
    ['Birth Time', '7:00 AM'],
    ['Birth Place', 'Gopalganj, Bihar']
  ];
  
  autoTable(doc, {
    startY: kundaliY + 25,
    head: [['Particulars', 'Details']],
    body: kundaliDetails,
    theme: 'grid',
    headStyles: { 
      fillColor: [...colors.primary], 
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 11
    },
    styles: { 
      fontSize: 10, 
      cellPadding: 4,
      lineWidth: 0.1,
      lineColor: [200, 200, 200]
    },
    alternateRowStyles: {
      fillColor: [...colors.light]
    }
  });
  
  // About Me Section
  const aboutY = doc.lastAutoTable.finalY || kundaliY + 25;
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.text('About Me', 20, aboutY + 15);
  
  doc.setFillColor(...colors.light);
  doc.rect(20, aboutY + 20, 170, 40, 'F');
  
  doc.setFontSize(10);
  doc.setTextColor(...colors.dark);
  const aboutText = 'I am a simple, grounded, and family-oriented individual who values honesty, respect, and meaningful relationships. I have a passion for cooking and enjoy preparing meals for my loved ones. Traveling is something I deeply enjoy, as it allows me to explore new places and experiences.';
  
  const splitAbout = doc.splitTextToSize(aboutText, 160);
  doc.text(splitAbout, 25, aboutY + 30);
  
  // Partner Preference
  const prefY = aboutY + 65;
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.text('Partner Preference', 20, prefY);
  
  doc.setFillColor(...colors.light);
  doc.rect(20, prefY + 5, 170, 40, 'F');
  
  doc.setFontSize(10);
  doc.setTextColor(...colors.dark);
  const partnerText = 'I am looking for a life partner who is kind-hearted, understanding, and supportive. Someone who values family, shares a positive attitude towards life, and can be a true companion in all phases of life.';
  
  const splitPartner = doc.splitTextToSize(partnerText, 160);
  doc.text(splitPartner, 25, prefY + 15);
  
  // Contact Details
  const contactY = prefY + 50;
  doc.setFontSize(16);
  doc.setTextColor(...colors.primary);
  doc.text('Contact Information', 20, contactY);
  
  const contactDetails = [
    ['Mobile', '+91-7022918586'],
    ['Father Mobile', '+91-7352507593'],
    ['Mother Mobile', '+91-8092816946'],
    ['Email', 'kumar.dhirajqa@gmail.com'],
    ['Address', 'Hanumangadhi Sareya Ward No 6, Gopalganj, Bihar - 841428']
  ];
  
  autoTable(doc, {
    startY: contactY + 5,
    head: [['Contact', 'Details']],
    body: contactDetails,
    theme: 'grid',
    headStyles: { 
      fillColor: [...colors.primary], 
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 11
    },
    styles: { 
      fontSize: 10, 
      cellPadding: 4,
      lineWidth: 0.1,
      lineColor: [200, 200, 200]
    },
    alternateRowStyles: {
      fillColor: [...colors.light]
    }
  });
  
  // Footer
  const footerY = doc.lastAutoTable.finalY || contactY + 5;
  doc.setFillColor(...colors.dark);
  doc.rect(0, footerY + 15, 210, 30, 'F');
  
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text('Thank you for visiting my profile', 105, footerY + 25, { align: 'center' });
  doc.text('Wishing you the best in your search', 105, footerY + 35, { align: 'center' });
  
  return doc;
};

export const downloadPDF = async () => {
  try {
    const doc = await generateBiodataPDF();
    doc.save('Dhiraj_Kumar_Biodata.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please try again.');
  }
};
