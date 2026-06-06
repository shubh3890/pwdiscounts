'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'
import Navbar from './Navbar'
import { categories } from '../data/categories'

const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/YOUR_FORM_ID'

const benefitsBySlug = {
  'pw-ca-finance-discount': [
  'Get latest pricing on PW CA Foundation, CA Inter, ACCA, CS and Commerce batches via ambassador',
  'Access exclusive discounts on PW MBA and MBA GMAT preparation batches',
  'Ambassador will align your batch selection with upcoming ICAI and other exam cycles',
  'Get honest comparison of PW CA Finance batch options matched to your budget and timeline',
],
'pw-upsc-discount': [
  'Get latest PW UPSC IAS batch pricing including Power Batch variants via campus ambassador',
  'Access discounts on all PW State PSC batches — UPPSC, MPPSC, MPSC, BPSC, OPSC, WBPSC',
  'Ambassador will recommend the right batch based on your target exam and preparation stage',
  'Get details on PW Judiciary preparation batches and current enrollment offers',
],
'pw-ssc-discount': [
  'Get latest PW SSC CGL, CHSL, MTS and CPO batch pricing and available discounts',
  'Access exclusive offers on PW Railway RRB NTPC, Group D, AE and JE batches',
  'Ambassador will share Power Batch pricing and compare it with regular batch options',
  'Get details on test series bundles and combo packages for SSC and Railway preparation',
],
'pw-banking-skills-discount': [
  'Get latest PW IBPS PO, SBI PO, RBI and BFSI batch pricing via campus ambassador',
  'Access exclusive discounts on PW Digital Marketing and Data Science skill courses',
  'Ambassador will share complete course inclusions — lectures, tests, placement support',
  'Get details on combo packages covering both banking exam prep and skill development',
],
'pw-state-exams-discount': [
  'Get latest pricing on PW WB Exams, UP Exams and Bihar Exams batches via ambassador',
  'Access exclusive discounts on Power Batch and Crash Course variants for state exams',
  'Ambassador will recommend the right batch based on your target state exam and timeline',
  'Get details on offline and online batch options available for your state examination',
],
'pw-defence-discount': [
  'Get latest PW NDA, Agniveer and NSAT batch pricing and available discounts via ambassador',
  'Access exclusive offers on PW CDS preparation batches for defence aspirants',
  'Ambassador will share complete batch details — syllabus coverage, tests, doubt sessions',
  'Get guidance on the right PW defence batch based on your target exam and eligibility',
],
'pw-entrance-discount': [
  'Get latest PW CUET UG and CUET PG batch pricing and available discounts',
  'Access exclusive offers on PW IPMAT, NIMCET and CLAT preparation batches',
  'Ambassador will recommend the right entrance exam batch based on your target college',
  'Get details on combo packages covering multiple entrance exams at discounted pricing',
],
'pw-professional-discount': [
  'Get latest PW UGC NET batch pricing and available discounts via campus ambassador',
  'Access exclusive offers on PW IELTS preparation and Agriculture competitive exam batches',
  'Ambassador will share complete details on PW Teacher Training and TET exam batches',
  'Get guidance on the right professional course batch based on your career goals',
],
  'pw-jee-discount': [
  'Get the latest PW JEE batch pricing directly from a verified campus ambassador on WhatsApp',
  'Access exclusive discounts on Arjuna, Eklavya, Lakshya and other current PW JEE batches',
  'Get a complete comparison of all available PW JEE batch options and their fees',
  'Campus ambassador will guide you to the right batch based on your preparation level and budget',
],
'pw-neet-discount': [
  'Get latest PW NEET batch pricing including Yakeen, Arjuna NEET and repeater batches',
  'Access exclusive discounts on PW NEET UG batches directly via campus ambassador on WhatsApp',
  'Get a complete breakdown of batch inclusions — lectures, DPPs, test series, doubt sessions',
  'Ambassador will recommend the right PW NEET batch based on your target year and budget',
],
'pw-vidyapeeth-discount': [
  'Get exclusive discounts on PW Vidyapeeth UG and PG degree and diploma programs',
  'Campus ambassador will share complete course list, fees, and current enrollment offers',
  'Find out which Vidyapeeth programs can be pursued alongside JEE or NEET preparation',
  'Get direct WhatsApp support for admission process, documents, and fee payment queries',
],
'pw-ca-foundation-discount': [
  'Get the latest PW CA Foundation batch pricing and available discounts via ambassador',
  'Access details on batch inclusions — lectures, study material, mock tests, doubt sessions',
  'Ambassador will align your batch selection with the upcoming May or November ICAI exam cycle',
  'Get exclusive pricing not publicly listed on the PW website through the ambassador program',
],
'pw-skills-discount': [
  'Get exclusive discounts on PW Skills courses — Full Stack, Data Science, DSA, Cloud and more',
  'Campus ambassador will share detailed placement statistics and hiring partner information',
  'Get a complete course curriculum, duration, and fee breakdown directly on WhatsApp',
  'Access limited-time pwskills.com enrollment offers available only through the ambassador program',
],
'physics-wallah-discount': [
  'Get genuine PW discounts across ALL batches — JEE, NEET, Vidyapeeth, CA, Skills in one place',
  'Verified campus ambassador contacts you personally on WhatsApp within 2 hours',
  'Compare all available PW batch options and pricing before making any decision',
  'Get honest guidance on which PW batch actually suits your goal, timeline and budget',
],
  'jee-offers': [
    'Access information on available JEE Main coaching discounts and early-bird offers',
    'Get details on student scholarship programs at various JEE coaching institutes',
    'Find affordable online JEE preparation courses with verified discount information',
    'Receive personalized offer details matched to your JEE preparation timeline',
  ],
  'neet-offers': [
    'Discover NEET UG coaching discounts from verified educational sources',
    'Access information on merit-based scholarships for NEET aspirants',
    'Find affordable online and offline NEET preparation offers',
    'Get updated information on new batch discounts at NEET coaching institutes',
  ],
  'vidyapeeth-offers': [
    'Find offers on distance learning and open university programs',
    'Access information on flexible study course discounts',
    'Discover online learning options with student pricing',
    'Get details on enrollment period promotional offers',
  ],
  'ca-foundation-offers': [
    'Get information on CA Foundation course discounts at leading coaching centers',
    'Access details on study material bundles and combined offer packages',
    'Find information on test series and mock exam discounts',
    'Receive updates on new batch promotional offers for CA Foundation',
  ],
  'mba-offers': [
    'Discover CAT, XAT, and SNAP coaching discounts and student offers',
    'Access information on group enrollment discounts at MBA coaching institutes',
    'Find online MBA entrance preparation courses with student pricing',
    'Get details on early enrollment offers and scholarship programs',
  ],
  'gate-offers': [
    'Access information on GATE coaching discounts for engineering graduates',
    'Find offers on GATE test series and practice materials',
    'Get details on online GATE preparation course promotions',
    'Receive updates on limited-time GATE coaching enrollment offers',
  ],
  'ssc-offers': [
    'Discover SSC CGL, CHSL, and MTS coaching discount information',
    'Access details on affordable online SSC preparation course offers',
    'Find information on SSC test series bundles with student discounts',
    'Get updates on government job coaching enrollment promotions',
  ],
  'banking-offers': [
    'Access IBPS PO, SBI PO, and RBI Grade B coaching discount information',
    'Find offers on banking exam test series and study material packages',
    'Get details on online banking preparation course student pricing',
    'Receive updates on new batch offers at banking coaching institutes',
  ],
  'skills-offers': [
    'Discover online coding, data science, and digital marketing course discounts',
    'Access information on technology skill development course offers',
    'Find student pricing on popular online learning platform subscriptions',
    'Get details on certification course bundles and promotional offers',
  ],
}

const seoContentBySlug = {
  'pw-ca-finance-discount': `Physics Wallah has expanded its course offerings significantly into the CA and Finance space, making quality preparation accessible for CA Foundation, CA Intermediate, ACCA, CS Foundation, Commerce, MBA entrance and BFSI programs.

PW CA batches follow the ICAI syllabus strictly and are taught by experienced CA faculty. The combination of quality content and highly affordable pricing compared to traditional CA coaching institutes makes PW a strong choice for commerce students.

As a verified PW Campus Ambassador we can share the latest batch pricing, available discounts, and help you align your enrollment with the upcoming May or November ICAI exam cycles. Whether you are starting CA Foundation or continuing to CA Inter, we have the right batch details for you.

PW MBA preparation covers CAT, XAT, SNAP, NMAT and MBA GMAT with experienced faculty and comprehensive study material. The ACCA and CS batches follow international and ICSI syllabi respectively.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete CA and Finance batch options, current pricing, and available discounts.`,

'pw-upsc-discount': `Physics Wallah has built one of the most comprehensive and affordable UPSC and Civil Services preparation platforms in India. PW UPSC batches cover the complete UPSC CSE Prelims and Mains syllabus with experienced faculty who have deep subject expertise across General Studies papers.

Beyond UPSC, PW offers dedicated batches for all major State Public Service Commissions including UPPSC, MPPSC, MPSC, BPSC, OPSC and WBPSC. Each state batch is tailored to the specific syllabus and pattern of that state's examination.

As a verified PW Campus Ambassador we can share the latest batch pricing for all UPSC and State PSC batches, including Power Batch variants that offer more intensive preparation support. The campus ambassador program gives you direct access to the best available pricing.

PW Judiciary preparation batches cover both state judicial service examinations and the All India Bar Examination, taught by experienced legal faculty.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete Civil Services batch options, current pricing, and available discounts matched to your target examination.`,

'pw-ssc-discount': `Physics Wallah SSC and Railway batches are among the most popular on the platform, trusted by lakhs of government job aspirants across India. PW SSC batches cover SSC CGL, CHSL, MTS, CPO and other Staff Selection Commission examinations with comprehensive subject coverage.

PW Railway batches cover RRB NTPC, Group D, AE and JE examinations with subject-specific preparation and extensive practice question banks. Both SSC and Railway batches include quantitative aptitude, reasoning, English and general awareness preparation.

As a verified PW Campus Ambassador we have access to the latest SSC and Railway batch pricing, Power Batch variants, and any ongoing enrollment discounts. Power Batches offer more intensive preparation with additional mock tests and mentorship support.

Test series and combo packages combining SSC and Railway preparation are popular options that offer better value. Our ambassador will share complete details on available bundle options.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete SSC and Railway batch options, current pricing, and available discounts.`,

'pw-banking-skills-discount': `Physics Wallah Banking batches cover all major banking recruitment examinations including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, RBI Assistant and BFSI skill programs. PW banking preparation combines exam-focused coaching with practical banking knowledge.

PW Skills courses under the banking and finance umbrella include BFSI skills training designed for students targeting careers in banking, insurance and financial services beyond just exam cracking.

As a verified PW Campus Ambassador we can share the latest banking batch pricing, available discounts, and details on skill course bundles that combine exam preparation with job-ready skill development.

PW Digital Marketing and Data Science courses are also available at competitive pricing through the campus ambassador program. These courses include placement support and industry-recognized certification.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete Banking and Skills batch options, current pricing, and available discounts.`,

'pw-state-exams-discount': `Physics Wallah State Exam batches are specifically designed for students targeting West Bengal, Uttar Pradesh and Bihar state-level competitive examinations. These batches cover state-specific syllabi, exam patterns and language requirements that differ from central government examinations.

PW WB Exam batches cover WBCS, WB Police, WB Primary TET and other West Bengal state examinations. PW UP Exam batches cover UPPSC PCS, UP Police, UPSSSC and other Uttar Pradesh state examinations. PW Bihar Exam batches cover BPSC, Bihar Police and other Bihar state examinations.

Power Batch and Crash Course variants are available for state examinations, offering more intensive preparation for students close to their target exam date. As a verified PW Campus Ambassador we can share pricing for both regular and Power Batch options.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete State Exam batch options, current pricing, and available discounts for your specific target state examination.`,

'pw-defence-discount': `Physics Wallah Defence batches are designed for students aspiring to join the Indian Armed Forces through NDA, Agniveer, CDS and NSAT examinations. PW brings the same philosophy of quality and affordability to defence exam preparation that has made it the most trusted ed-tech brand in India.

PW NDA batches cover Mathematics and General Ability Test preparation with experienced faculty. The Agniveer batch covers all four services — Army, Navy, Air Force and Coast Guard — with syllabus-specific preparation and extensive practice tests.

The NSAT (National Scholarship cum Admission Test) batch is a special offering from PW designed for students seeking scholarship-based admissions. As a verified PW Campus Ambassador we can share complete details on this special batch and any available discounts.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete Defence batch options, current pricing, and available discounts for your target examination.`,

'pw-entrance-discount': `Physics Wallah Entrance Exam batches cover the full range of university and college entrance examinations beyond JEE and NEET. CUET UG and CUET PG batches are among the most popular, covering the Central Universities Common Entrance Test for undergraduate and postgraduate admissions.

PW IPMAT batches cover the Integrated Program in Management Aptitude Test for IIM Indore and IIM Rohtak five-year MBA programs. PW NIMCET batches cover the NIT MCA Common Entrance Test for MCA admissions at National Institutes of Technology.

PW CLAT batches cover the Common Law Admission Test for National Law Universities with comprehensive legal aptitude and reasoning preparation. As a verified PW Campus Ambassador we can share the latest batch pricing and available discounts for all entrance exam batches.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with complete Entrance Exam batch options, current pricing, and available discounts matched to your target examination.`,

'pw-professional-discount': `Physics Wallah Professional course batches cover a range of career-focused examinations and certifications that go beyond traditional competitive exam preparation. UGC NET batches cover both Paper 1 and subject-specific Paper 2 preparation for college teaching and Junior Research Fellowship eligibility.

PW IELTS preparation batches cover all four modules — Listening, Reading, Writing and Speaking — with experienced faculty and regular mock tests. Agriculture competitive exam batches cover ICAR, State Agriculture Service examinations and other agriculture-sector recruitment tests.

PW Teacher Training and TET batches cover CTET, State TET examinations and teacher training programs for students targeting school teaching careers. These batches follow the NCTE syllabus and include child development, pedagogy and subject knowledge preparation.

As a verified PW Campus Ambassador we can share the latest pricing and available discounts for all professional course batches. Submit the inquiry form and our ambassador will contact you on WhatsApp within 2 hours.`,
  'pw-jee-discount': `Physics Wallah has transformed JEE preparation in India by making high-quality coaching accessible at a fraction of the cost of traditional institutes. PW JEE batches including Arjuna, Eklavya, and Lakshya are designed for different preparation levels and timelines.

As a verified PW Campus Ambassador, we can connect you directly with the latest batch pricing, ongoing discounts, and enrollment offers that may not be publicly listed on the PW website. The campus ambassador program exists specifically to help students get the best available pricing on PW batches.

PW JEE batches cover the complete JEE Main and JEE Advanced syllabus taught by experienced faculty including top educators with years of IIT-JEE teaching experience. Each batch includes video lectures, Daily Practice Problems, regular tests, and doubt-solving sessions.

The shift to online JEE preparation has made PW batches accessible to students in every city and town across India — not just metro students. With our ambassador discount, the already-affordable PW pricing becomes even more student-friendly.

Students who have used PW JEE batches consistently report high satisfaction with faculty quality, content depth, and the value-for-money offered compared to traditional classroom coaching costing several times more.

Fill out the inquiry form above and our PW Campus Ambassador will reach out on WhatsApp within 2 hours with the complete batch list, current pricing, available discounts, and honest guidance on which batch suits your preparation level.`,

'pw-neet-discount': `Physics Wallah NEET batches have earned the trust of lakhs of medical aspirants across India through a combination of experienced faculty, comprehensive content, and highly affordable pricing compared to traditional NEET coaching institutes.

PW NEET batches including Yakeen and Arjuna NEET cover the complete NEET UG syllabus across Physics, Chemistry, and Biology from Class 11 and 12. The batches include live classes, recorded lectures, DPPs, full-length mock tests, and regular doubt-clearing sessions.

As a verified PW Campus Ambassador we have access to the latest batch pricing and available discounts for NEET aspirants. Whether you are a first-time NEET aspirant or a repeater looking for a focused batch, we can guide you to the right option.

PW also offers dedicated NEET repeater batches with a revised curriculum focused on weak areas and exam-taking strategy — a popular option among students appearing for their second or third NEET attempt.

The quality of PW NEET faculty is a major reason for the platform's popularity. Educators bring years of NEET teaching experience and their teaching style makes complex Biology, Physics, and Chemistry topics highly accessible.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with the complete NEET batch lineup, current fees, and available discount options.`,

'pw-vidyapeeth-discount': `PW Vidyapeeth is Physics Wallah's initiative to make higher education flexible and accessible for Indian students. It offers UG and PG degree programs, diploma courses, and professional certifications through an online learning model designed around the busy schedules of competitive exam aspirants and working professionals.

One of the biggest advantages of PW Vidyapeeth is the ability to pursue a recognized degree simultaneously while preparing for JEE, NEET, CA, or government job examinations. This dual-track approach is increasingly popular among students who want educational security alongside their competitive exam journey.

As a verified PW Campus Ambassador we can share the complete Vidyapeeth course catalog, fee structure, current enrollment offers, and details on university recognition and placement support.

PW Vidyapeeth programs are delivered through a well-structured online platform with video lectures, live sessions, assignments, and online examinations. The flexible schedule makes it genuinely manageable alongside other studies.

Enrollment discounts and special batch offers for Vidyapeeth programs are periodically available through the campus ambassador program. These offers are not always publicly listed and are shared directly with interested students.

Fill the inquiry form and our campus ambassador will reach out on WhatsApp within 2 hours with the full Vidyapeeth course list, current fees, available discounts, and admission process details.`,

'pw-ca-foundation-discount': `Physics Wallah CA Foundation batches bring the same philosophy of quality and affordability that made PW a household name in JEE and NEET preparation — to the Chartered Accountancy space. CA Foundation is the first step in the CA journey and building strong conceptual foundations is critical for long-term success in the CA course.

PW CA Foundation batches cover all four papers prescribed by the Institute of Chartered Accountants of India — Principles and Practice of Accounting, Business Laws and Business Correspondence, Quantitative Aptitude and Business Mathematics, and Business Economics and Business Commercial Knowledge.

As a verified PW Campus Ambassador we can share the latest CA Foundation batch details including fee structure, available discounts, batch start dates aligned with the May and November ICAI exam cycles, and what is included in each package.

The affordability of PW CA Foundation batches compared to traditional CA coaching is significant. Many students save substantially by choosing PW while accessing faculty with strong CA teaching backgrounds.

Batch inclusions typically cover video lectures, study materials, mock tests modeled on ICAI examination patterns, and doubt-solving sessions. Specific inclusions vary by batch and our ambassador will share complete details.

Submit the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with batch options, current pricing, available discounts, and guidance on timing your enrollment around the ICAI exam calendar.`,

'pw-skills-discount': `PW Skills — available at pwskills.com — is Physics Wallah's technology education platform designed to make quality tech skill development accessible at honest pricing. PW Skills offers courses in Full Stack Web Development, Data Science and Machine Learning, Python Programming, Java, Data Structures and Algorithms, Cloud Computing, Cybersecurity, and more.

What sets PW Skills apart is the combination of structured curriculum, live mentorship, and placement support at pricing significantly lower than traditional coding bootcamps and private institutes. The platform is designed for both complete beginners and experienced professionals looking to upskill.

As a verified PW Campus Ambassador we can share the latest PW Skills course catalog, fee structure, current enrollment offers, placement statistics, and help you identify which course aligns with your career goals.

PW Skills courses include live classes with industry professionals, recorded content for flexible revision, hands-on projects, code reviews, doubt-solving sessions, and dedicated placement preparation. Many courses conclude with a job-assistance program connecting students with hiring partners.

Campus ambassador exclusive pricing and limited-time enrollment offers are periodically available for PW Skills courses. These offers are shared directly with students who reach out through the ambassador program.

Fill the inquiry form and our PW Campus Ambassador will contact you on WhatsApp within 2 hours with the complete PW Skills course list, current fees, available discounts, and honest guidance on which program fits your career goals and current skill level.`,

'physics-wallah-discount': `Physics Wallah — widely known as PW — is India's most trusted and affordable ed-tech platform for competitive exam preparation. Founded with the mission of making quality education accessible to every Indian student regardless of financial background, PW has grown into a platform trusted by millions of students preparing for JEE, NEET, CA Foundation, and government job examinations.

This platform is operated by a verified Physics Wallah Campus Ambassador as part of the official PW Ambassador Program. Our role is to help students navigate the available PW batch options, understand current pricing, and access the best available discounts — directly and personally through WhatsApp.

PW offers batches across multiple categories — JEE Main and Advanced batches like Arjuna, Eklavya and Lakshya, NEET UG batches like Yakeen and Arjuna NEET, PW Vidyapeeth degree and diploma programs, CA Foundation batches, and technology courses through PW Skills at pwskills.com.

The campus ambassador program exists to give students a direct human point of contact within the PW ecosystem. Instead of navigating the website alone, students can ask their ambassador specific questions about which batch suits them, what the actual total cost is, and what discounts are currently available.

As your campus ambassador we provide honest, unbiased guidance. If a particular PW batch is not the right fit for your situation we will tell you that directly. Our goal is to help you make the right educational decision — not just to push an enrollment.

Fill the inquiry form on this page and our PW Campus Ambassador will contact you personally on WhatsApp within 2 hours. We will share complete batch options, current pricing, available discounts, and take as much time as needed to answer your questions.`,
  'jee-offers': `JEE Main and JEE Advanced are among the most competitive engineering entrance examinations conducted in India, attracting over 1 million aspirants annually. Cracking JEE requires consistent preparation spanning months to years, and finding the right coaching support at an affordable price point is critical for many students.

Educational institutes offering JEE preparation courses periodically announce student discounts, scholarship programs, and early enrollment offers. These offers are especially common at the start of new academic sessions, during festive periods, and when new online batches are launched.

Online JEE preparation platforms have significantly expanded access to quality coaching at lower price points compared to traditional classroom coaching. Many platforms now offer tiered pricing, scholarship tests, and sibling discounts that can substantially reduce the overall preparation cost.

JEE aspirants should look for offers on comprehensive course packages that include recorded lectures, live classes, doubt-solving sessions, test series, and study materials. Bundle packages often provide better value than purchasing individual components separately.

It is advisable to compare available offers from multiple sources before making a decision. Submit an inquiry through pw discount to receive consolidated, verified information on currently available JEE preparation course discounts tailored to your specific preparation needs and timeline.`,

  'neet-offers': `NEET UG is the national-level medical entrance examination for admission to MBBS, BDS, BAMS, and other healthcare courses across government and private medical colleges in India. With over 2 million registered candidates each year, the competition for limited medical seats is intense.

Quality NEET preparation is a significant investment, and many educational institutes offer periodic student discounts, merit scholarships, and promotional enrollments to make coaching more accessible. These offers often align with the academic calendar — shortly before NEET batch start dates and following the NEET result announcements.

The shift toward online NEET preparation has created more pricing flexibility for students. Many platforms offer scholarship tests that allow meritorious students to access premium courses at heavily discounted rates.

A complete NEET preparation course typically covers Physics, Chemistry, and Biology from Class 11 and Class 12, along with regular assessment tests, previous year question analysis, and full-length mock tests. Bundled packages addressing all these components often come with special student pricing.

Submit an inquiry on pw discount to receive up-to-date, verified information on available NEET UG coaching discounts, scholarship programs, and promotional enrollment opportunities in your city and online.`,

  'vidyapeeth-offers': `Distance education and open university programs provide flexible learning pathways for students across India, enabling them to pursue higher education while managing work, family, or other commitments. These programs are particularly popular for undergraduate and postgraduate degrees in arts, commerce, and management.

Distance learning institutes and open universities periodically offer promotional enrollment packages, early registration discounts, and study material bundles. Offers are frequently available at the beginning of academic sessions and during special enrollment campaigns.

Online distance learning has grown significantly, with many programs now incorporating video lectures, online assignments, and virtual proctored examinations. This hybrid approach offers better learning outcomes than traditional correspondence courses.

When evaluating distance education offers, consider the total cost including admission fees, course fees, examination fees, and study material costs. Complete package offers often provide better value than individual component pricing.

Submit an inquiry through pw discount to receive information on currently available distance learning and open university course offers that align with your educational goals and budget.`,

  'ca-foundation-offers': `The Chartered Accountancy course in India, conducted by the Institute of Chartered Accountants of India (ICAI), begins with the CA Foundation examination. CA Foundation tests students on Principles and Practice of Accounting, Business Laws, Quantitative Aptitude and Business Mathematics, and Business Economics.

CA Foundation coaching institutes frequently offer promotional discounts, especially at the start of new batches that align with the May and November examination cycles. Group enrollment discounts, referral offers, and early bird promotions are common in this segment.

Quality CA Foundation preparation includes comprehensive coverage of all four papers, regular mock tests, revision sessions, and access to previous years' question papers. Many institutes offer combined packages that include both coaching and ICAI-standard study materials.

Online CA Foundation courses have expanded significantly, offering recorded lectures, live doubt-clearing sessions, and online test platforms. These online options often come with competitive pricing compared to classroom-based coaching.

Submit an inquiry through pw discount to get current information on available CA Foundation course discounts, scholarship programs, and bundled offer packages at leading coaching institutes.`,

  'mba-offers': `MBA entrance examinations including CAT, XAT, SNAP, NMAT, IIFT, and MAT are the primary pathways to premier business school admissions in India. Each examination has distinct patterns, syllabus areas, and difficulty levels, requiring targeted preparation strategies.

MBA coaching institutes commonly offer promotional discounts for early enrollments, combo packages covering multiple entrance exams, and scholarship programs based on previous academic performance. Offers are particularly frequent at the start of new CAT batches, typically in March-April and August-September.

Comprehensive MBA entrance preparation covers Quantitative Ability, Verbal Ability and Reading Comprehension, Data Interpretation, and Logical Reasoning. Top-performing institutes also include GD-PI preparation, WAT training, and admissions counseling as part of their packages.

Online MBA coaching platforms have made quality preparation more accessible, with recorded content, live sessions, and AI-powered performance analytics available at competitive price points. Many platforms offer scholarship tests and trial periods.

Submit an inquiry through pw discount to receive updated information on MBA entrance coaching discounts, combo exam packages, and available scholarship opportunities from leading preparation institutes.`,

  'gate-offers': `GATE (Graduate Aptitude Test in Engineering) is a national examination conducted by IITs and IISc for admission to M.Tech programs at IITs and NITs, and for recruitment to prestigious PSUs (Public Sector Undertakings) including ONGC, BHEL, NTPC, and others.

GATE preparation requires deep subject mastery in engineering fundamentals, and quality coaching can significantly improve scores. Coaching institutes and online platforms periodically offer discounts on GATE courses, especially at the beginning of new GATE batches.

Subject-wise coaching packages, comprehensive full-syllabus courses, and test series bundles are the primary GATE preparation products. Test series subscriptions are particularly important as GATE is exam-pattern intensive.

Online GATE preparation has grown substantially, with platforms offering branch-specific recorded lectures, live classes, and extensive practice question banks. These online options are often more affordable than traditional classroom coaching.

Submit an inquiry through pw discount to receive information on available GATE coaching discounts, test series offers, and subject-specific preparation packages for your engineering branch.`,

  'ssc-offers': `The Staff Selection Commission (SSC) conducts various examinations including CGL (Combined Graduate Level), CHSL (Combined Higher Secondary Level), CPO (Central Police Organisation), MTS (Multi-Tasking Staff), and JE (Junior Engineer) for recruitment to government posts.

SSC examinations are among the most popular government job recruitment exams in India, attracting millions of applicants annually. Quality coaching for SSC exams covers Quantitative Aptitude, English Language, General Intelligence and Reasoning, and General Awareness across different tiers.

SSC coaching institutes and online platforms offer promotional pricing on course enrollments, especially before the announcement of new SSC examination notifications and at the start of new batches. Combo packages covering CGL and CHSL preparation are common.

Online SSC preparation has become a dominant format, with live classes, recorded content, daily practice questions, and mock test series available at accessible price points. Many platforms offer free trial periods and scholarship tests.

Submit an inquiry through pw discount to get current information on SSC coaching discounts, combo package offers, and test series subscriptions to support your government job preparation journey.`,

  'banking-offers': `Banking examinations including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, RBI Assistant, NABARD, and various insurance sector exams offer some of the most sought-after government job opportunities in India.

Banking exam preparation requires strong performance in Quantitative Aptitude, Reasoning Ability, English Language, General Awareness, and Computer Knowledge. Quality coaching that builds speed and accuracy is critical for success given the competitive cutoffs.

Banking coaching institutes and online platforms periodically offer discounts on new batch enrollments, particularly when new IBPS or SBI notifications are released. Complete banking preparation packages covering prelims, mains, and interview preparation often come with attractive student pricing.

Online banking preparation has grown significantly, with daily practice platforms, video lectures, current affairs capsules, and full-length mock tests available at competitive rates. Platforms frequently offer limited-time offer discounts and scholarship programs.

Submit an inquiry through pw discount to receive updated information on available banking exam coaching discounts, test series offers, and combo packages covering multiple banking recruitment examinations.`,

  'skills-offers': `The demand for technical skills including programming, data science, cloud computing, digital marketing, UI/UX design, and cybersecurity continues to grow across industries. Quality skill development courses from credible platforms have become essential for career advancement and job market readiness.

Online skill development platforms frequently offer promotional discounts, bundle pricing on course libraries, and scholarship programs. Flash sales, festive offers, and special student pricing are common on major platforms and independent course creators.

When evaluating skill development courses, consider the curriculum depth, instructor credentials, hands-on project work, career support, and certification recognition by employers. Value-for-money packages often include lifetime access, community support, and placement assistance.

Free trial periods, introductory pricing for new course launches, and referral-based discounts are widely available in the online skills education segment. Comparing offers across platforms before enrollment can result in significant savings.

Submit an inquiry through pw discount to get information on currently available skill development course discounts, platform subscription offers, and career-focused learning packages in your area of interest.`,
}

export default function CategoryPage({ slug }) {
  const cat = categories.find((c) => c.slug === slug)
  if (!cat) return null

  const related = categories.filter((c) => c.slug !== slug).slice(0, 4)
  const benefits = benefitsBySlug[slug] || []
  const seoContent = seoContentBySlug[slug] || ''

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
          <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-30 pointer-events-none`} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-[#64748B] mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#94A3B8]">{cat.title} Offers</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ color: cat.accent, borderColor: `${cat.accent}33` }}
            >
              <span style={{ color: cat.accent }}>●</span>
              {cat.shortTitle} Student Offers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
            >
              {cat.title}{' '}
              <span className="text-gradient">Student Discounts</span>
              <br />& Educational Offers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Discover the latest available {cat.title} course discounts, student scholarship programs,
              and educational offers. Submit an inquiry and receive details within 24 hours.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-amber-500 text-bg font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-amber-500/30 hover:scale-105 transition-all"
            >
              Get {cat.shortTitle} Offer Details
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                What You Get When You <span className="text-gradient">Submit an Inquiry</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-5"
                >
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: cat.accent }} />
                  <p className="text-[#CBD5E1] text-sm leading-relaxed">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8">
                About {cat.title} <span className="text-gradient">Educational Offers</span>
              </h2>
              <div className="prose prose-invert prose-sm max-w-none">
                {seoContent.split('\n\n').map((para, i) => (
                  <p key={i} className="text-[#94A3B8] leading-relaxed mb-5">{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Internal Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-bold mb-8 text-center">
              Explore <span className="text-gradient">Related Categories</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="group flex items-center justify-between bg-card border border-white/5 rounded-xl px-5 py-4 hover:border-primary/20 transition-all card-hover"
                >
                  <span className="text-sm font-medium text-[#CBD5E1] group-hover:text-primary transition-colors">{r.title}</span>
                  <ArrowRight size={14} className="text-[#64748B] group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/" className="inline-flex items-center gap-1.5 text-[#64748B] text-sm hover:text-primary transition-colors">
                <ArrowLeft size={13} /> Back to All Categories
              </Link>
            </div>
          </div>
        </section>

        <CTA heading={`Ready to Unlock ${cat.shortTitle} Student Discounts?`} />

        {/* Disclaimer */}
        <div className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-surface/40 border border-white/5 rounded-xl px-5 py-4 text-center">
            <p className="text-[#64748B] text-xs leading-relaxed">
              <strong className="text-[#94A3B8]">Disclaimer:</strong> pw discount is an independent educational information platform and is not officially affiliated with any coaching institute, educational company, or examining body. All information shared is for informational purposes only. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
