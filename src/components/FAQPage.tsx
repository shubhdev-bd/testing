import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

interface FAQPageProps {
  onBack: () => void;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

/**
 * FAQ Page Component
 * Displays frequently asked questions with expandable answers
 * Features search functionality and categorized questions
 * FIXED: Proper expansion behavior and structured answer formatting
 */
const FAQPage: React.FC<FAQPageProps> = ({ onBack }) => {
  // State for managing expanded FAQ items
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // FAQ data with 50 comprehensive questions and structured answers
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I check my NEET UG 2025 result?",
      answer: `To check your NEET UG 2025 result:

• Visit the official website www.neet.nta.nic.in  
• Click on 'NEET UG Result 2025' link  
• Enter your application number and password  
• Download your scorecard for future reference  

Keep multiple copies of your scorecard as it's required for Counselling.`,
      category: "neet-ug",
    },
    {
      id: 2,
      question: "What is the NEET UG Counselling process?",
      answer: `The NEET UG Counselling process involves:

• Registration on the official Counselling website  
• Choice filling of colleges and courses  
• Seat allotment based on rank and preferences  
• Document verification at designated centers  
• Fee payment and admission confirmation  

The process is conducted in multiple rounds.`,
      category: "Counselling",
    },
    {
      id: 3,
      question: "How can I predict my college admission chances?",
      answer: `Use our College Predictor tool by entering your NEET rank, category, and preferred states.

The tool analyzes previous year cutoffs and provides accurate predictions for government and private medical colleges.

It considers factors like state quota, management quota, and category-wise reservations.`,
      category: "tools",
    },
    {
      id: 4,
      question: "What documents are required for NEET Counselling?",
      answer: `Required documents include:

• NEET scorecard  
• Class 10th and 12th marksheets  
• Category certificate (if applicable)  
• Domicile certificate  
• Aadhar card  
• Passport size photographs  
• Medical fitness certificate  
• Character certificate  

Ensure all documents are original with photocopies.`,
      category: "Counselling",
    },
    {
      id: 5,
      question: "What is NEET PG and how is it different from NEET UG?",
      answer: `NEET PG is for admission to postgraduate medical courses (MD/MS/Diploma), while NEET UG is for undergraduate courses (MBBS/BDS).

NEET PG requires an MBBS degree for eligibility.

It has a different exam pattern and a separate Counselling process.

The competition is generally higher in NEET PG.`,
      category: "neet-pg",
    },
    {
      id: 6,
      question: "What is INICET and who can appear for it?",
      answer: `INICET (Institute of National Importance Combined Entrance Test) is for admission to PG medical courses in AIIMS, JIPMER, PGIMER, and NIMHANS.

Only MBBS graduates are eligible.

It's conducted separately from NEET PG and has its own Counselling process.`,
      category: "inicet",
    },
    {
      id: 7,
      question: "How do I use the Rank Predictor tool?",
      answer: `Enter your expected NEET score or percentile in our Rank Predictor tool.

It analyzes previous year trends and provides an estimated rank range.

The tool considers factors like exam difficulty, number of candidates, and normalization process to give accurate predictions.`,
      category: "tools",
    },
    {
      id: 8,
      question: "What are the eligibility criteria for NEET UG 2025?",
      answer: `Eligibility criteria:

• Age: Minimum 17 years, maximum 25 years (30 for reserved categories)  
• Qualification: 12th with Physics, Chemistry, Biology/Biotechnology  
• Minimum marks: 50% for General, 45% for reserved categories  
• Nationality: Indian citizens, NRIs, OCIs eligible.`,
      category: "neet-ug",
    },
    {
      id: 9,
      question: "How many attempts are allowed for NEET?",
      answer: `There is no limit on the number of NEET attempts as per current NTA guidelines.

However, candidates must meet the age criteria (maximum 25 years for General category, 30 years for reserved categories) at the time of admission.`,
      category: "neet-ug",
    },
    {
      id: 10,
      question: "What is the difference between AIQ and State quota?",
      answer: `AIQ (All India Quota) reserves 15% seats for all India merit, open to candidates from any state.

State quota reserves 85% seats for state domicile candidates.

AIQ has higher cutoffs but more college options across India.`,
      category: "Counselling",
    },
    {
      id: 11,
      question: "How do I apply for NEET PG 2025?",
      answer: `NEET PG application process:

• Visit official NBE website  
• Register with basic details  
• Fill application form with academic details  
• Upload required documents  
• Pay application fee  
• Submit and take printout  

Ensure all details are correct before submission.`,
      category: "neet-pg",
    },
    {
      id: 12,
      question: "What is the exam pattern for INICET?",
      answer: `INICET exam pattern:

• 200 multiple choice questions  
• 3 hours duration  
• Computer-based test  
• Negative marking: -1 for wrong answers  
• Subjects: Pre-clinical, Para-clinical, and Clinical subjects from MBBS curriculum.`,
      category: "inicet",
    },
    {
      id: 13,
      question: "How to choose the right medical college?",
      answer: `Consider factors:

• NIRF ranking and accreditation  
• Faculty quality and infrastructure  
• Hospital facilities and patient load  
• Fee structure and scholarships  
• Location and hostel facilities  
• Placement and PG entrance success rate.`,
      category: "Counselling",
    },
    {
      id: 14,
      question: "What is the fee structure for government medical colleges?",
      answer: `Government medical college fees vary by state:

• Central government colleges: ₹5,000–₹50,000 per year  
• State government colleges: ₹10,000–₹1,00,000 per year  
• Deemed universities: ₹5,00,000–₹25,00,000 per year  
• Private colleges: ₹10,00,000–₹50,00,000 per year.`,
      category: "Counselling",
    },
    {
      id: 15,
      question: "How to prepare for NEET PG effectively?",
      answer: `NEET PG preparation strategy:

• Complete MBBS syllabus revision  
• Focus on high-yield topics  
• Solve previous year questions  
• Take regular mock tests  
• Join test series  
• Study from standard textbooks  
• Regular revision and practice.`,
      category: "neet-pg",
    },
    {
      id: 16,
      question: "What are the career options after MBBS?",
      answer: `Career options:

• Postgraduate medical courses (MD/MS)  
• Diploma courses  
• Clinical practice  
• Medical research  
• Public health  
• Medical writing  
• Healthcare administration  
• Medical education  
• Pharmaceutical industry.`,
      category: "career",
    },
    {
      id: 17,
      question: "How to get admission in AIIMS through INICET?",
      answer: `AIIMS admission through INICET:

• Qualify INICET exam  
• Participate in INICET Counselling  
• Choice filling for AIIMS centers  
• Seat allotment based on rank  
• Document verification  
• Fee payment and admission confirmation.`,
      category: "inicet",
    },
    {
      id: 18,
      question: "What is the validity of NEET scorecard?",
      answer: `NEET scorecard is valid for the admission year only.

For NEET UG, it's valid for the current academic session.  
For NEET PG, it's valid for the specific admission cycle.  

You need to reappear for subsequent years.`,
      category: "neet-ug",
    },
    {
      id: 19,
      question: "How to apply for state quota Counselling?",
      answer: `State quota Counselling process:

• Check state Counselling authority website  
• Register with required documents  
• Pay Counselling fee  
• Fill choices of colleges  
• Attend Counselling rounds  
• Document verification  
• Seat confirmation and fee payment.`,
      category: "Counselling",
    },
    {
      id: 20,
      question: "What is the difference between MD and MS degrees?",
      answer: `MD (Doctor of Medicine) is for non-surgical specialties like Internal Medicine, Pediatrics, Psychiatry.

MS (Master of Surgery) is for surgical specialties like General Surgery, Orthopedics, ENT.

Both are 3-year postgraduate courses with different clinical focus.`,
      category: "neet-pg",
    },
    {
      id: 21,
      question: "How to calculate NEET percentile?",
      answer: `NEET percentile is calculated using the formula:

• (Number of candidates with score less than you / Total number of candidates) × 100  
• NTA provides percentile scores along with raw scores  
• Percentile indicates your relative performance among all candidates`,
      category: "neet-ug",
    },
    {
      id: 22,
      question: "What is the NEET UG exam pattern for 2025?",
      answer: `NEET UG 2025 pattern:

• 200 questions (180 to be attempted)  
• Physics: 50 questions  
• Chemistry: 50 questions  
• Biology: 100 questions  
• Duration: 3 hours 20 minutes  
• Marking: +4 for correct, -1 for incorrect answers`,
      category: "neet-ug",
    },
    {
      id: 23,
      question: "How to prepare for INICET exam?",
      answer: `INICET preparation:

• Thorough revision of MBBS subjects  
• Focus on clinical subjects  
• Practice MCQs regularly  
• Join test series  
• Study recent advances  
• Time management practice  
• Regular mock tests and analysis`,
      category: "inicet",
    },
    {
      id: 24,
      question: "What is the Counselling fee for NEET UG?",
      answer: `NEET UG Counselling fees vary:

• AIQ Counselling: ₹1,000 for registration  
• State Counselling: ₹500–₹2,000 depending on state  
• Security deposit: ₹2,00,000 for government colleges  
• Additional fees for choice modification and upgradation`,
      category: "Counselling",
    },
    {
      id: 25,
      question: "How to get NEET UG admit card?",
      answer: `NEET admit card download:

• Visit official NTA NEET website  
• Click on 'Download Admit Card'  
• Enter application number and password  
• Download and print admit card  
• Check all details carefully  
• Carry original admit card to exam center`,
      category: "neet-ug",
    },
    {
      id: 26,
      question: "What is the NEET PG exam pattern?",
      answer: `NEET PG pattern:

• 200 MCQs  
• Duration: 3.5 hours  
• Computer-based test  
• Subjects: Pre-clinical, Para-clinical, Clinical  
• Marking: +4 for correct, -1 for incorrect  
• No choice between questions`,
      category: "neet-pg",
    },
    {
      id: 27,
      question: "How to check NEET PG result?",
      answer: `NEET PG result checking:

• Visit NBE official website  
• Click on NEET PG result link  
• Enter roll number and password  
• Download scorecard  
• Check rank and percentile  
• Save multiple copies for Counselling`,
      category: "neet-pg",
    },
    {
      id: 28,
      question: "What is the bond policy for medical colleges?",
      answer: `Bond policies vary by state:

• Service bond: 1–7 years in government service  
• Bond amount: ₹10 lakhs to ₹1 crore  
• Rural service mandatory in some states  
• Private colleges may have different terms  
• Check specific state policies before admission`,
      category: "Counselling",
    },
    {
      id: 29,
      question: "How to apply for management quota seats?",
      answer: `Management quota application:

• Contact college directly  
• Submit required documents  
• Appear for college interview  
• Pay higher fees as per college norms  
• No Counselling required  
• Direct admission based on NEET score and college criteria`,
      category: "Counselling",
    },
    {
      id: 30,
      question:
        "What is the difference between government and private medical colleges?",
      answer: `Key differences:

• Fee: Government colleges have lower fees  
• Infrastructure: Both can have good facilities  
• Faculty: Government colleges often have experienced faculty  
• Admission: Government through Counselling, private through management quota  
• Bond: Government colleges may have service bonds`,
      category: "Counselling",
    },
    {
      id: 31,
      question: "How to prepare for NEET UG in 6 months?",
      answer: `6-month preparation plan:

• Complete syllabus in 4 months  
• Revision and practice in 2 months  
• Daily 8–10 hours study  
• Focus on NCERT books  
• Regular mock tests  
• Analyze weak areas  
• Time management practice`,
      category: "neet-ug",
    },
    {
      id: 32,
      question: "What is the INICET Counselling process?",
      answer: `INICET Counselling:

• Registration on official website  
• Choice filling for institutes  
• Seat allotment based on rank  
• Document verification  
• Fee payment  
• Admission confirmation  
• Multiple rounds conducted`,
      category: "inicet",
    },
    {
      id: 33,
      question: "How to get domicile certificate for medical Counselling?",
      answer: `Domicile certificate process:

• Apply to district collector office  
• Submit required documents (birth certificate, school certificates)  
• Pay prescribed fees  
• Verification process  
• Certificate issuance  
• Valid for Counselling in respective state`,
      category: "Counselling",
    },
    {
      id: 34,
      question: "What is the NEET UG cutoff for 2025?",
      answer: `NEET UG cutoff varies by category:

• General: 50th percentile  
• OBC/SC/ST: 40th percentile  
• PWD: 45th percentile  
• Actual scores depend on exam difficulty  
• Previous year cutoffs can be used as reference  
• Official cutoff announced with results`,
      category: "neet-ug",
    },
    {
      id: 35,
      question: "How to choose between MBBS and BDS?",
      answer: `MBBS vs BDS comparison:

• MBBS: General medicine, broader scope  
• BDS: Dental specialization, focused practice  
• Duration: Both 5 years including internship  
• Career prospects: MBBS has wider options  
• Competition: MBBS generally more competitive  
• Choose based on interest and aptitude`,
      category: "career",
    },
    {
      id: 36,
      question: "What is the NEET PG Counselling schedule?",
      answer: `NEET PG Counselling timeline:

• Registration: Usually starts 2–3 weeks after result  
• Choice filling: 3–4 days  
• Seat allotment: Multiple rounds  
• Document verification: 2–3 days per round  
• Classes start: As per academic calendar  
• Check official notifications for exact dates`,
      category: "neet-pg",
    },
    {
      id: 37,
      question: "How to get category certificate for NEET?",
      answer: `Category certificate process:

• Apply to competent authority (Tehsildar/SDM)  
• Submit required documents  
• Income certificate for EWS  
• Caste certificate for SC/ST/OBC  
• Validity: Usually 1–3 years  
• Required for Counselling and admission`,
      category: "Counselling",
    },
    {
      id: 38,
      question: "What is the INICET exam syllabus?",
      answer: `INICET syllabus covers:

• Pre-clinical subjects: Anatomy, Physiology, Biochemistry  
• Para-clinical: Pathology, Microbiology, Pharmacology  
• Clinical subjects: Medicine, Surgery, Pediatrics, Obstetrics & Gynecology  
• Community Medicine  
• Recent advances in medical science`,
      category: "inicet",
    },
    {
      id: 39,
      question: "How to calculate NEET UG rank?",
      answer: `NEET rank calculation:

• Based on total score obtained  
• Tie-breaking criteria: Biology marks, Chemistry marks, Physics marks, Age  
• Separate ranks for different categories  
• All India rank and state rank provided  
• Rank determines college allotment eligibility`,
      category: "neet-ug",
    },
    {
      id: 40,
      question: "What is the medical fitness requirement for MBBS?",
      answer: `Medical fitness criteria:

• Physical and mental fitness  
• Vision: 6/6 in one eye, 6/60 in other  
• Hearing: Normal hearing ability  
• No communicable diseases  
• Medical examination by authorized doctor  
• Fitness certificate required for admission`,
      category: "Counselling",
    },

    {
      id: 41,
      question: "How to prepare for NEET PG while doing internship?",
      answer: `Preparation during internship:

• Utilize clinical exposure for practical knowledge  
• Study during free time and night shifts  
• Focus on high-yield topics  
• Join online test series  
• Group study with fellow interns  
• Balance clinical duties and preparation`,
      category: "neet-pg",
    },
    {
      id: 42,
      question:
        "What is the difference between deemed and private universities?",
      answer: `Deemed vs Private:

• Deemed: Government recognition, autonomous status  
• Private: Privately funded, affiliated to state universities  
• Fee structure: Both generally expensive  
• Quality: Varies by institution  
• Recognition: Both recognized for practice  
• Admission: Through NEET Counselling or management quota`,
      category: "Counselling",
    },
    {
      id: 43,
      question: "How to get NEET UG application form?",
      answer: `NEET application process:

• Visit official NTA website  
• Register with basic details  
• Fill application form online  
• Upload required documents  
• Pay application fee  
• Submit and take printout  
• Keep application number safe`,
      category: "neet-ug",
    },
    {
      id: 44,
      question: "What is the INICET result declaration process?",
      answer: `INICET result process:

• Results declared on official website  
• Scorecard download available  
• Rank and percentile provided  
• Category-wise results  
• Counselling schedule announced  
• Merit list preparation for Counselling`,
      category: "inicet",
    },
    {
      id: 45,
      question: "How to choose medical specialization after MBBS?",
      answer: `Specialization selection:

• Assess personal interests and aptitude  
• Consider clinical vs non-clinical branches  
• Research career prospects and scope  
• Evaluate work-life balance  
• Consider duration and difficulty  
• Seek guidance from seniors and mentors`,
      category: "career",
    },
    {
      id: 46,
      question: "What is the NEET PG application fee?",
      answer: `NEET PG fees:

• General/OBC: ₹4,750  
• SC/ST/PWD: ₹2,500  
• Additional fees for late application  
• Payment through online mode  
• No refund of application fee  
• Keep payment receipt for future reference`,
      category: "neet-pg",
    },
    {
      id: 47,
      question: "How to verify NEET result authenticity?",
      answer: `Result verification:

• Check on official NTA website only  
• Verify application number and personal details  
• Cross-check with SMS received  
• Download from official portal  
• Avoid fake websites  
• Contact NTA helpline for queries`,
      category: "neet-ug",
    },
    {
      id: 48,
      question: "What is the INICET Counselling fee structure?",
      answer: `INICET Counselling fees:

• Registration fee varies by institute  
• Security deposit required  
• Counselling participation fee  
• Document verification charges  
• Seat acceptance fee  
• Check individual institute notifications for exact amounts`,
      category: "inicet",
    },
    {
      id: 49,
      question: "How to handle NEET Counselling stress?",
      answer: `Managing Counselling stress:

• Stay informed about process  
• Prepare documents in advance  
• Have backup options ready  
• Seek family and peer support  
• Practice relaxation techniques  
• Stay positive and focused  
• Consult counselors if needed`,
      category: "Counselling",
    },
    {
      id: 50,
      question: "What are the future prospects in medical field?",
      answer: `Medical career prospects:

• Clinical practice in various specialties  
• Research and academics  
• Healthcare administration  
• Public health and policy  
• Medical technology and innovation  
• Global opportunities  
• Entrepreneurship in healthcare  
• Telemedicine and digital health`,
      category: "career",
    },

    {
      id: 51,
      question: "How do I check my NEET UG 2025 result?",
      answer: `To check your NEET UG 2025 result:

• Visit the official website www.neet.nta.nic.in
• Click on 'NEET UG Result 2025' link
• Enter your application number and password
• Download your scorecard for future reference

Keep multiple copies of your scorecard as it's required for Counselling.`,
      category: "neet-ug",
    },
    {
      id: 52,
      question: "What is the NEET UG Counselling process?",
      answer: `The NEET UG Counselling process involves:

• Registration on the official Counselling website
• Choice filling of colleges and courses
• Seat allotment based on rank and preferences
• Document verification at designated centers
• Fee payment and admission confirmation

The process is conducted in multiple rounds.`,
      category: "Counselling",
    },
    {
      id: 53,
      question: "How can I predict my college admission chances?",
      answer: `Use our College Predictor tool by:

• Entering your NEET rank, category, and preferred states
• Analyzing previous year cutoffs for accurate predictions
• Considering factors like state quota, management quota, and category-wise reservations

The tool provides predictions for both government and private medical colleges.`,
      category: "tools",
    },
    {
      id: 54,
      question: "What documents are required for NEET Counselling?",
      answer: `Required documents include:

• NEET scorecard
• Class 10th and 12th marksheets
• Category certificate (if applicable)
• Domicile certificate
• Aadhar card
• Passport size photographs
• Medical fitness certificate
• Character certificate

Ensure all documents are original with photocopies.`,
      category: "Counselling",
    },
    {
      id: 55,
      question: "What is NEET PG and how is it different from NEET UG?",
      answer: `NEET PG vs NEET UG differences:

• NEET PG: For postgraduate medical courses (MD/MS/Diploma)
• NEET UG: For undergraduate courses (MBBS/BDS)
• NEET PG requires an MBBS degree for eligibility
• Different exam patterns and separate Counselling processes
• Generally higher competition in NEET PG`,
      category: "neet-pg",
    },
    {
      id: 56,
      question: "What is INICET and who can appear for it?",
      answer: `INICET (Institute of National Importance Combined Entrance Test):

• For admission to PG medical courses in AIIMS, JIPMER, PGIMER, and NIMHANS
• Only MBBS graduates are eligible
• Conducted separately from NEET PG
• Has its own Counselling process
• Covers institutes of national importance`,
      category: "inicet",
    },
    {
      id: 57,
      question: "How do I use the Rank Predictor tool?",
      answer: `Using the Rank Predictor tool:

• Enter your expected NEET score or percentile
• Tool analyzes previous year trends
• Provides estimated rank range
• Considers exam difficulty, number of candidates, and normalization process
• Gives accurate predictions based on historical data`,
      category: "tools",
    },
    {
      id: 58,
      question: "What are the eligibility criteria for NEET UG 2025?",
      answer: `NEET UG 2025 eligibility criteria:

• Age: Minimum 17 years, maximum 25 years (30 for reserved categories)
• Qualification: 12th with Physics, Chemistry, Biology/Biotechnology
• Minimum marks: 50% for General, 45% for reserved categories
• Nationality: Indian citizens, NRIs, OCIs eligible`,
      category: "neet-ug",
    },
    {
      id: 59,
      question: "How many attempts are allowed for NEET?",
      answer: `NEET attempt limits:

• No limit on the number of NEET attempts as per current NTA guidelines
• Must meet age criteria (maximum 25 years for General category, 30 years for reserved categories)
• Age limit applies at the time of admission
• Can appear multiple times until age limit is reached`,
      category: "neet-ug",
    },
    {
      id: 60,
      question: "What is the difference between AIQ and State quota?",
      answer: `AIQ vs State quota differences:

• AIQ (All India Quota): 15% seats for all India merit, open to candidates from any state
• State quota: 85% seats reserved for state domicile candidates
• AIQ has higher cutoffs but more college options across India
• State quota provides better chances for domicile students`,
      category: "Counselling",
    },
    {
      id: 61,
      question: "How do I apply for NEET PG 2025?",
      answer: `NEET PG application process:

• Visit official NBE website
• Register with basic details
• Fill application form with academic details
• Upload required documents
• Pay application fee
• Submit and take printout

Ensure all details are correct before submission.`,
      category: "neet-pg",
    },
    {
      id: 62,
      question: "What is the exam pattern for INICET?",
      answer: `INICET exam pattern:

• 200 multiple choice questions
• 3 hours duration
• Computer-based test
• Negative marking: -1 for wrong answers
• Subjects: Pre-clinical, Para-clinical, and Clinical subjects from MBBS curriculum`,
      category: "inicet",
    },
    {
      id: 63,
      question: "How to choose the right medical college?",
      answer: `Consider these factors:

• NIRF ranking and accreditation
• Faculty quality and infrastructure
• Hospital facilities and patient load
• Fee structure and scholarships
• Location and hostel facilities
• Placement and PG entrance success rate`,
      category: "Counselling",
    },
    {
      id: 64,
      question: "What is the fee structure for government medical colleges?",
      answer: `Government medical college fees vary by state:

• Central government colleges: ₹5,000-50,000 per year
• State government colleges: ₹10,000-1,00,000 per year
• Deemed universities: ₹5,00,000-25,00,000 per year
• Private colleges: ₹10,00,000-50,00,000 per year`,
      category: "Counselling",
    },
    {
      id: 65,
      question: "How to prepare for NEET PG effectively?",
      answer: `NEET PG preparation strategy:

• Complete MBBS syllabus revision
• Focus on high-yield topics
• Solve previous year questions
• Take regular mock tests
• Join test series
• Study from standard textbooks
• Regular revision and practice`,
      category: "neet-pg",
    },
    {
      id: 66,
      question: "What are the career options after MBBS?",
      answer: `Career options after MBBS:

• Postgraduate medical courses (MD/MS)
• Diploma courses
• Clinical practice
• Medical research
• Public health
• Medical writing
• Healthcare administration
• Medical education
• Pharmaceutical industry`,
      category: "career",
    },
    {
      id: 67,
      question: "How to get admission in AIIMS through INICET?",
      answer: `AIIMS admission through INICET:

• Qualify INICET exam
• Participate in INICET Counselling
• Choice filling for AIIMS centers
• Seat allotment based on rank
• Document verification
• Fee payment and admission confirmation`,
      category: "inicet",
    },
    {
      id: 68,
      question: "What is the validity of NEET scorecard?",
      answer: `NEET scorecard validity:

• Valid for the admission year only
• For NEET UG: Valid for current academic session
• For NEET PG: Valid for specific admission cycle
• Need to reappear for subsequent years
• No carry-forward of scores`,
      category: "neet-ug",
    },
    {
      id: 69,
      question: "How to apply for state quota Counselling?",
      answer: `State quota Counselling process:

• Check state Counselling authority website
• Register with required documents
• Pay Counselling fee
• Fill choices of colleges
• Attend Counselling rounds
• Document verification
• Seat confirmation and fee payment`,
      category: "Counselling",
    },
    {
      id: 70,
      question: "What is the difference between MD and MS degrees?",
      answer: `MD vs MS degrees:

• MD (Doctor of Medicine): Non-surgical specialties like Internal Medicine, Pediatrics, Psychiatry
• MS (Master of Surgery): Surgical specialties like General Surgery, Orthopedics, ENT
• Both are 3-year postgraduate courses
• Different clinical focus and training requirements`,
      category: "neet-pg",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "neet-ug", label: "NEET UG", icon: BookOpen },
    { id: "neet-pg", label: "NEET PG", icon: Award },
    { id: "inicet", label: "INICET", icon: Users },
    { id: "Counselling", label: "Counselling", icon: HelpCircle },
    { id: "tools", label: "Tools", icon: BookOpen },
    { id: "career", label: "Career", icon: Award },
  ];

  /**
   * Toggle FAQ item expansion
   * FIXED: Only one item can be expanded at a time
   * @param id - FAQ item ID to toggle
   */
  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  /**
   * Filter FAQs based on search term and category
   * @returns Filtered FAQ items
   */
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  /**
   * Format answer text with proper line breaks and bullet points
   * @param answer - Raw answer text
   * @returns Formatted JSX
   */
  const formatAnswer = (answer: string) => {
    const lines = answer.split("\n").filter((line) => line.trim());
    return (
      <div className="space-y-2">
        {lines.map((line, index) => {
          if (line.startsWith("•")) {
            return (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 font-bold mt-1">•</span>
                <span>{line.substring(1).trim()}</span>
              </div>
            );
          }
          return (
            <p key={index} className="font-medium">
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white mb-6 md:mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get All Your Questions Answered
            </h2>
            <p className="text-blue-100 text-base md:text-lg">
              Find answers to common questions about NEET, Counselling, and
              medical admissions
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-lg mb-6 md:mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border text-black border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-xl transition-all duration-200 text-sm ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-blue-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items - FIXED: Proper grid layout and expansion behavior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className={`bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                expandedItem === faq.id ? "faq-expanded" : "faq-collapsed"
              }`}
            >
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full p-4 md:p-6 text-left flex items-start justify-between hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-2">
                    {faq.question}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {categories.find((cat) => cat.id === faq.category)?.label ||
                      "General"}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {expandedItem === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </button>

              {/* Expandable Answer - Only shows for the specific expanded item */}
              {expandedItem === faq.id && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-slate-200/50 animate-in slide-in-from-top-2">
                  <div className="pt-4 text-slate-700 leading-relaxed text-sm md:text-base">
                    {formatAnswer(faq.answer)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No questions found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl md:rounded-2xl p-6 text-white text-center mt-8">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            Still have questions?
          </h3>
          <p className="text-green-100 mb-4 text-sm md:text-base">
            Our support team is here to help you with personalized assistance
          </p>
          <button className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
