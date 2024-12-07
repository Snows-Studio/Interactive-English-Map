function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + ' million';  
    } else if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'K';  
    }
    return number.toLocaleString();  
}

// Initialize svgMap with formatted data
new svgMap({
    targetElementID: 'svgMap',
    data: {
        data: {
            population: {
                name: 'Population:',
                format: '{0}',
                thresholdMax: 1400000000,
                thresholdMin: 5000
            },
            englishFirstLanguage: {
                name: 'English as First Language:',
                format: '{0} %'
            },
            mainLanguage: {
                name: 'Main Spoken Language(s):',
                format: '{0}'
            },
            capital: {
                name: 'Capital:',
                format: '{0}'
            },
            area: {
                name: 'Area (sq miles):',
                format: '{0}'
            }
        },
        applyData: 'population',
        values: {
            US: { population: formatNumber(312092668), englishFirstLanguage: 78.26, mainLanguage: 'English', capital: 'Washington, D.C.', area: formatNumber(3794100) },
            IN: { population: formatNumber(1450000000), englishFirstLanguage: 0.02, mainLanguage: 'Hindi, English', capital: 'New Delhi', area: formatNumber(1269194) },
            NG: { population: formatNumber(206200000), englishFirstLanguage: 9.70, mainLanguage: 'English', capital: 'Abuja', area: formatNumber(356669) },
            PK: { population: formatNumber(220892331), englishFirstLanguage: 0.0035, mainLanguage: 'Urdu, English', capital: 'Islamabad', area: formatNumber(340130) },
            GB: { population: formatNumber(64000000), englishFirstLanguage: 92.30, mainLanguage: 'English', capital: 'London', area: formatNumber(94300) },
            PH: { population: formatNumber(110000000), englishFirstLanguage: 63.74, mainLanguage: 'Filipino, English', capital: 'Manila', area: formatNumber(115831) },
            DE: { population: formatNumber(80600000), englishFirstLanguage: 0.47, mainLanguage: 'German', capital: 'Berlin', area: formatNumber(137988) },
            UG: { population: formatNumber(44270000), englishFirstLanguage: 45, mainLanguage: 'English', capital: 'Kampala', area: formatNumber(93106) },
            FR: { population: formatNumber(67500000), englishFirstLanguage: 57.25, mainLanguage: 'French, English', capital: 'Paris', area: formatNumber(248573) },
            CA: { population: formatNumber(37138500), englishFirstLanguage: 54.37, mainLanguage: 'English, French', capital: 'Ottawa', area: formatNumber(3851785) },
            EG: { population: formatNumber(110990000), englishFirstLanguage: 38.85, mainLanguage: 'Arabic, English', capital: 'Cairo', area: formatNumber(386662) },
            AU: { population: formatNumber(23401892), englishFirstLanguage: 72.74, mainLanguage: 'English', capital: 'Canberra', area: formatNumber(2966870) },
            BD: { population: formatNumber(165323100), englishFirstLanguage: 0.43, mainLanguage: 'Bengali, English', capital: 'Dhaka', area: formatNumber(56698) },
            PL: { population: formatNumber(38501000), englishFirstLanguage: 0.30, mainLanguage: 'Polish', capital: 'Warsaw', area: formatNumber(120733) },
            GH: { population: formatNumber(27000000), englishFirstLanguage: 66.67, mainLanguage: 'English', capital: 'Accra', area: formatNumber(92096) },
            TH: { population: formatNumber(63038247), englishFirstLanguage: 27.16, mainLanguage: 'Thai, English', capital: 'Bangkok', area: formatNumber(198117) },
            UA: { population: formatNumber(33365000), englishFirstLanguage: 51, mainLanguage: 'Ukrainian, Russian', capital: 'Kyiv', area: formatNumber(233062) },
            IT: { population: formatNumber(59619290), englishFirstLanguage: 13.74, mainLanguage: 'Italian', capital: 'Rome', area: formatNumber(116348) },
            ZA: { population: formatNumber(52981991), englishFirstLanguage: 9.31, mainLanguage: 'Zulu, Afrikaans, English', capital: 'Pretoria', area: formatNumber(469694) },
            MX: { population: formatNumber(120664000), englishFirstLanguage: 12.9, mainLanguage: 'Spanish', capital: 'Mexico City', area: formatNumber(758449) },
            MY: { population: formatNumber(27170000), englishFirstLanguage: 61.1, mainLanguage: 'Malay', capital: 'Kuala Lumpur', area: formatNumber(127354) },
            ID: { population: formatNumber(279118866), englishFirstLanguage: 0.3, mainLanguage: 'Indonesian', capital: 'Jakarta', area: formatNumber(737815) },
            AF: { population: formatNumber(41130000), englishFirstLanguage: 6, mainLanguage: 'Pashto, Dari', capital: 'Kabul', area: formatNumber(251825) },
            NL: { population: formatNumber(16770000), englishFirstLanguage: 90.9, mainLanguage: 'Dutch, English', capital: 'Amsterdam', area: formatNumber(15844) },
            TR: { population: formatNumber(80200256), englishFirstLanguage: 17, mainLanguage: 'Turkish', capital: 'Ankara', area: formatNumber(302455) },
            ZW: { population: formatNumber(14439000), englishFirstLanguage: 79.86, mainLanguage: 'English, Shona', capital: 'Harare', area: formatNumber(150873) },
            IQ: { population: formatNumber(31700000), englishFirstLanguage: 34.7, mainLanguage: 'Arabic, Kurdish, English', capital: 'Baghdad', area: formatNumber(169235) },
            BR: { population: formatNumber(215000000), englishFirstLanguage: 0.14, mainLanguage: 'Portuguese', capital: 'Brasília', area: formatNumber(3287263) },
            ES: { population: formatNumber(47190000), englishFirstLanguage: 22, mainLanguage: 'Spanish', capital: 'Madrid', area: formatNumber(195360) },
            CN: { population: formatNumber(1432035200), englishFirstLanguage: 0.1, mainLanguage: 'Mandarin', capital: 'Beijing', area: formatNumber(3705408) },
            SE: { population: formatNumber(10377771), englishFirstLanguage: 89, mainLanguage: 'Swedish, English', capital: 'Stockholm', area: formatNumber(173745) },
            KE: { population: formatNumber(52533109), englishFirstLanguage: 18.83, mainLanguage: 'Swahili, English', capital: 'Nairobi', area: formatNumber(224961) },
            CM: { population: formatNumber(19740000), englishFirstLanguage: 38, mainLanguage: 'French, English', capital: 'Yaoundé', area: formatNumber(183570) },
            MA: { population: formatNumber(37340000), englishFirstLanguage: 18.3, mainLanguage: 'Arabic, French, English', capital: 'Rabat', area: formatNumber(274460) },
            BE: { population: formatNumber(10584534), englishFirstLanguage: 60, mainLanguage: 'Dutch, French, German, English', capital: 'Brussels', area: formatNumber(11823) },
            IL: { population: formatNumber(7303000), englishFirstLanguage: 83.60, mainLanguage: 'Hebrew, Arabic, English', capital: 'Jerusalem', area: formatNumber(8038) },
            AT: { population: formatNumber(8415000), englishFirstLanguage: 73, mainLanguage: 'German', capital: 'Vienna', area: formatNumber(32550) },
            RO: { population: formatNumber(19043767), englishFirstLanguage: 31.5, mainLanguage: 'Romanian, English', capital: 'Bucharest', area: formatNumber(238397) },
            JO: { population: formatNumber(10203140), englishFirstLanguage: 37.5, mainLanguage: 'Arabic, English', capital: 'Amman', area: formatNumber(34428) },
            KE: { population: formatNumber(52533109), englishFirstLanguage: 18.83, mainLanguage: 'Swahili, English', capital: 'Nairobi', area: formatNumber(224961) },
            CM: { population: formatNumber(19740000), englishFirstLanguage: 38, mainLanguage: 'French, English', capital: 'Yaoundé', area: formatNumber(183570) },
            MA: { population: formatNumber(37340000), englishFirstLanguage: 18.3, mainLanguage: 'Arabic, French, English', capital: 'Rabat', area: formatNumber(274460) },
            BE: { population: formatNumber(10584534), englishFirstLanguage: 60, mainLanguage: 'Dutch, French, German, English', capital: 'Brussels', area: formatNumber(11823) },
            IL: { population: formatNumber(7303000), englishFirstLanguage: 83.60, mainLanguage: 'Hebrew, Arabic, English', capital: 'Jerusalem', area: formatNumber(8038) },
            AT: { population: formatNumber(8415000), englishFirstLanguage: 73, mainLanguage: 'German', capital: 'Vienna', area: formatNumber(32550) },
            RO: { population: formatNumber(19043767), englishFirstLanguage: 31.5, mainLanguage: 'Romanian, English', capital: 'Bucharest', area: formatNumber(238397) },
            JO: { population: formatNumber(10203140), englishFirstLanguage: 37.5, mainLanguage: 'Arabic, English', capital: 'Amman', area: formatNumber(34428) },
            HR: { population: formatNumber(4105267), englishFirstLanguage: 57.6, mainLanguage: 'Croatian, English', capital: 'Zagreb', area: formatNumber(56594) },
            SK: { population: formatNumber(5456362), englishFirstLanguage: 26, mainLanguage: 'Slovak, English', capital: 'Bratislava', area: formatNumber(49037) },
            CH: { population: formatNumber(8580000), englishFirstLanguage: 38, mainLanguage: 'German, French, Italian, English', capital: 'Bern', area: formatNumber(41285) },
            LT: { population: formatNumber(2722289), englishFirstLanguage: 50, mainLanguage: 'Lithuanian, English', capital: 'Vilnius', area: formatNumber(65300) },
            LU: { population: formatNumber(634814), englishFirstLanguage: 71.1, mainLanguage: 'Luxembourgish, French, German, English', capital: 'Luxembourg City', area: formatNumber(2586) },
            EE: { population: formatNumber(1326535), englishFirstLanguage: 55, mainLanguage: 'Estonian, English', capital: 'Tallinn', area: formatNumber(45227) },
            SI: { population: formatNumber(2078654), englishFirstLanguage: 48.8, mainLanguage: 'Slovene, English', capital: 'Ljubljana', area: formatNumber(20273) },
            CY: { population: formatNumber(1189265), englishFirstLanguage: 76, mainLanguage: 'Greek, Turkish, English', capital: 'Nicosia', area: formatNumber(9251) },
            LV: { population: formatNumber(1886198), englishFirstLanguage: 53, mainLanguage: 'Latvian, English', capital: 'Riga', area: formatNumber(64559) },
            BG: { population: formatNumber(6948445), englishFirstLanguage: 25, mainLanguage: 'Bulgarian, English', capital: 'Sofia', area: formatNumber(110879) },
            MK: { population: formatNumber(2083459), englishFirstLanguage: 35, mainLanguage: 'Macedonian, Albanian, English', capital: 'Skopje', area: formatNumber(25713) },
            GE: { population: formatNumber(3989167), englishFirstLanguage: 60, mainLanguage: 'Georgian, Russian, English', capital: 'Tbilisi', area: formatNumber(69700) },
            IS: { population: formatNumber(364134), englishFirstLanguage: 98, mainLanguage: 'Icelandic, English', capital: 'Reykjavik', area: formatNumber(103000) },
            MD: { population: formatNumber(2657637), englishFirstLanguage: 12, mainLanguage: 'Romanian, Russian', capital: 'Chisinau', area: formatNumber(33846) },
            BY: { population: formatNumber(9449323), englishFirstLanguage: 33.5, mainLanguage: 'Belarusian, Russian, English', capital: 'Minsk', area: formatNumber(207600) },
            KW: { population: formatNumber(4136500), englishFirstLanguage: 0, mainLanguage: 'Arabic, English', capital: 'Kuwait City', area: formatNumber(17818) },
            OM: { population: formatNumber(5106622), englishFirstLanguage: 18, mainLanguage: 'Arabic, English', capital: 'Muscat', area: formatNumber(119500) },
            QA: { population: formatNumber(2881053), englishFirstLanguage: 26.5, mainLanguage: 'Arabic, English', capital: 'Doha', area: formatNumber(11571) },
            LB: { population: formatNumber(6848000), englishFirstLanguage: 47.2, mainLanguage: 'Arabic, French, English', capital: 'Beirut', area: formatNumber(10452) },
            YE: { population: formatNumber(29825968), englishFirstLanguage: 1.5, mainLanguage: 'Arabic, English', capital: 'Sanaa', area: formatNumber(527968) },
            AZ: { population: formatNumber(10139177), englishFirstLanguage: 35, mainLanguage: 'Azerbaijani, Russian, English', capital: 'Baku', area: formatNumber(86600) },
            AR: { population: formatNumber(44271000), englishFirstLanguage: 4.5, mainLanguage: 'Spanish', capital: 'Buenos Aires', area: formatNumber(2780400) },
            KH: { population: formatNumber(15288489), englishFirstLanguage: 4.8, mainLanguage: 'Khmer, English', capital: 'Phnom Penh', area: formatNumber(181035) },
            AM: { population: formatNumber(2963243), englishFirstLanguage: 45, mainLanguage: 'Armenian, Russian, English', capital: 'Yerevan', area: formatNumber(29743) },
            EE: { population: formatNumber(1326535), englishFirstLanguage: 55, mainLanguage: 'Estonian, English', capital: 'Tallinn', area: formatNumber(45227) },
            TJ: { population: formatNumber(9537000), englishFirstLanguage: 0, mainLanguage: 'Tajik, Russian', capital: 'Dushanbe', area: formatNumber(143100) },
            BT: { population: formatNumber(807610), englishFirstLanguage: 60, mainLanguage: 'Dzongkha, English', capital: 'Thimphu', area: formatNumber(38394) },
            PS: { population: formatNumber(5101414), englishFirstLanguage: 55, mainLanguage: 'Arabic, English', capital: 'Ramallah', area: formatNumber(6020) },
            CO: { population: formatNumber(50882891), englishFirstLanguage: 4.6, mainLanguage: 'Spanish', capital: 'Bogotá', area: formatNumber(1141748) },
            VZ: { population: formatNumber(28435940), englishFirstLanguage: 6.3, mainLanguage: 'Spanish', capital: 'Caracas', area: formatNumber(912050) },
            DO: { population: formatNumber(10847904), englishFirstLanguage: 10.5, mainLanguage: 'Spanish', capital: 'Santo Domingo', area: formatNumber(48671) },
            GE: { population: formatNumber(3989167), englishFirstLanguage: 60, mainLanguage: 'Georgian, Russian, English', capital: 'Tbilisi', area: formatNumber(69700) },
            RU: { population: formatNumber(145912025), englishFirstLanguage: 5.5, mainLanguage: 'Russian', capital: 'Moscow', area: formatNumber(17098242) },
            NZ: { population: formatNumber(5000000), englishFirstLanguage: 98.7, mainLanguage: 'English, Māori', capital: 'Wellington', area: formatNumber(103483) },
        }
    }
});
