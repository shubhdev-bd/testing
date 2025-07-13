import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  MapPin,
  ExternalLink,
  X,
  Building2,
  Users,
  Calendar,
  Award,
} from "lucide-react";

interface UniversitiesPageProps {
  onBack: () => void;
}

interface College {
  id: number;
  name: string;
  pgSeats: number;
  state: string;
  affiliation: string;
  management: string;
  programs: string[];
  established: number;
  website: string;
}

/**
 * Universities Page Component
 * Displays list of medical colleges with detailed information
 * Features search, filtering, and detailed college popup
 */
const UniversitiesPage: React.FC<UniversitiesPageProps> = ({ onBack }) => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for selected college popup
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  // State for state filter
  const [selectedState, setSelectedState] = useState("all");

  // Sample college data
  const colleges: College[] = [
    {
      id: 1,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 2,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 3,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 4,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 5,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 6,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 7,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 8,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 9,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 10,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 11,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 12,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 13,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 14,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 15,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 16,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 17,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 18,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 19,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 20,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 21,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 22,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 23,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 24,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 25,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 26,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 27,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 28,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 29,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 30,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 31,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 32,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 33,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 34,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 35,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 36,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 37,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 38,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 39,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 40,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 40,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 41,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 42,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 43,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 44,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 45,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 46,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 47,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 48,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 49,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 50,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 51,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 52,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 53,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 57,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 55,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 56,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 57,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 58,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 59,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 60,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 61,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 62,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 63,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 64,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 65,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 66,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 67,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 68,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 69,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 70,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 71,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 72,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 73,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 74,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 75,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 76,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 77,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 78,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 79,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 80,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 81,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 82,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 83,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 84,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 85,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 86,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 87,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 88,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 89,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 90,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 91,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 92,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 93,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 94,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 95,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 96,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 97,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 98,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 99,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 100,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 101,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 102,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 103,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 104,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 105,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 106,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 107,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 108,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 109,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 110,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 111,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 112,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 113,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 114,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 115,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 116,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 117,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 118,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 119,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 120,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 121,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 122,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 123,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 124,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 125,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 126,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 127,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 128,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 129,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 130,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 131,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
    {
      id: 132,
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      pgSeats: 198,
      state: "Puducherry",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1823,
      website: "https://www.jipmer.edu.in",
    },
    {
      id: 133,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
      pgSeats: 178,
      state: "Uttar Pradesh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1983,
      website: "https://www.sgpgi.ac.in",
    },
    {
      id: 134,
      name: "All Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 847,
      state: "Delhi",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
      established: 1956,
      website: "https://www.aiims.edu",
    },
    {
      id: 135,
      name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
      pgSeats: 456,
      state: "Chandigarh",
      affiliation: "Autonomous",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PhD"],
      established: 1962,
      website: "https://www.pgimer.edu.in",
    },
    {
      id: 136,
      name: "Christian Medical College (CMC), Vellore",
      pgSeats: 234,
      state: "Tamil Nadu",
      affiliation: "Deemed University",
      management: "Private",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1900,
      website: "https://www.cmch-vellore.edu",
    },
    {
      id: 137,
      name: "King George's Medical University (KGMU)",
      pgSeats: 389,
      state: "Uttar Pradesh",
      affiliation: "State University",
      management: "State Government",
      programs: ["MBBS", "MD", "MS", "DM", "MCh"],
      established: 1905,
      website: "https://www.kgmcindia.edu",
    },
    {
      id: 138,
      name: "Maulana Azad Medical College (MAMC)",
      pgSeats: 267,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "State Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1958,
      website: "https://www.mamc.ac.in",
    },
    {
      id: 139,
      name: "Armed Forces Medical College (AFMC)",
      pgSeats: 156,
      state: "Maharashtra",
      affiliation: "Deemed University",
      management: "Central Government",
      programs: ["MBBS", "MD", "MS"],
      established: 1948,
      website: "https://www.afmc.nic.in",
    },
  ];
  // Get unique states for filter
  const states = [
    "all",
    ...Array.from(new Set(colleges.map((college) => college.state))),
  ];

  /**
   * Filter colleges based on search term and state
   * @returns Filtered college list
   */
  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState =
      selectedState === "all" || college.state === selectedState;
    return matchesSearch && matchesState;
  });

  /**
   * Open college details popup
   * @param college - College object to display
   */
  const openCollegeDetails = (college: College) => {
    setSelectedCollege(college);
  };

  /**
   * Close college details popup
   */
  const closeCollegeDetails = () => {
    setSelectedCollege(null);
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
            Medical Universities & Colleges
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Explore Medical Universities
            </h2>
            <p className="text-indigo-100 text-lg">
              Discover top medical colleges and universities across India
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search colleges, categories, or names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
              />
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state === "all" ? "All States" : state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              onClick={() => openCollegeDetails(college)}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {college.management}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-800 mb-3 line-clamp-2 leading-tight">
                {college.name}
              </h3>

              <div className="space-y-1 mb-3">
                <div className="flex items-center text-sm text-slate-600">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{college.state}</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Users className="w-3 h-3 mr-1" />
                  <span>{college.pgSeats} PG Seats</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Est. {college.established}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {college.programs.slice(0, 3).map((program) => (
                  <span
                    key={program}
                    className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs"
                  >
                    {program}
                  </span>
                ))}
                {college.programs.length > 3 && (
                  <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
                    +{college.programs.length - 3} more
                  </span>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-xs">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No colleges found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>

      {/* College Details Popup */}
      {selectedCollege && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Popup Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      {selectedCollege.name}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {selectedCollege.management}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {selectedCollege.affiliation}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeCollegeDetails}
                  className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* College Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        PG Seats
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">
                      {selectedCollege.pgSeats}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        State
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.state}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Established
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.established}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Award className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Affiliation
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.affiliation}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Management
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.management}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="w-5 h-5 text-indigo-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Website
                      </span>
                    </div>
                    <a
                      href={selectedCollege.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Programs Section */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">
                  Available Programs
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCollege.programs.map((program) => (
                    <span
                      key={program}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium">
                  Add to Favorites
                </button>
                <a
                  href={selectedCollege.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-200 text-slate-800 py-3 rounded-xl hover:bg-slate-300 transition-all duration-200 font-medium text-center"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversitiesPage;
