// fetched via AW Api
const awCountries = {
    "Country": [{
            "AgeVerificationRequired": "false",
            "CountryID": "58",
            "CountryISO2": "AF",
            "CountryISO3": "AFG",
            "CountryName": "Afghanistan",
            "Nationality": "Afghan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "108",
            "CountryISO2": "AL",
            "CountryISO3": "ALB",
            "CountryName": "Albania",
            "Nationality": "Albanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "1",
            "CountryISO2": "DZ",
            "CountryISO3": "DZA",
            "CountryName": "Algeria",
            "Nationality": "Algerian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "212",
            "CountryISO2": "AS",
            "CountryISO3": "ASM",
            "CountryName": "American Samoa",
            "Nationality": "American Samoan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "109",
            "CountryISO2": "AD",
            "CountryISO3": "AND",
            "CountryName": "Andorra",
            "Nationality": "Andorran"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "2",
            "CountryISO2": "AO",
            "CountryISO3": "AGO",
            "CountryName": "Angola",
            "Nationality": "Angolan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "160",
            "CountryISO2": "AI",
            "CountryISO3": "AIA",
            "CountryName": "Anguilla",
            "Nationality": "Anguillan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "161",
            "CountryISO2": "AG",
            "CountryISO3": "ATG",
            "CountryName": "Antigua and Barbuda",
            "Nationality": "Antiguans/Barbudans"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "198",
            "CountryISO2": "AR",
            "CountryISO3": "ARG",
            "CountryName": "Argentina",
            "Nationality": "Argentinean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "110",
            "CountryISO2": "AM",
            "CountryISO3": "ARM",
            "CountryName": "Armenia",
            "Nationality": "Armenian"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "162",
        //     "CountryISO2": "AW",
        //     "CountryISO3": "ABW",
        //     "CountryName": "Aruba",
        //     "Nationality": "Dutch"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "213",
            "CountryISO2": "AU",
            "CountryISO3": "AUS",
            "CountryName": "Australia",
            "Nationality": "Australian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "111",
            "CountryISO2": "AT",
            "CountryISO3": "AUT",
            "CountryName": "Austria",
            "Nationality": "Austrian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "112",
            "CountryISO2": "AZ",
            "CountryISO3": "AZE",
            "CountryName": "Azerbaijan",
            "Nationality": "Azerbaijani"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "163",
            "CountryISO2": "BS",
            "CountryISO3": "BHS",
            "CountryName": "Bahamas",
            "Nationality": "Bahamian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "59",
            "CountryISO2": "BH",
            "CountryISO3": "BHR",
            "CountryName": "Bahrain",
            "Nationality": "Bahraini"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "60",
            "CountryISO2": "BD",
            "CountryISO3": "BGD",
            "CountryName": "Bangladesh",
            "Nationality": "Bangladeshi"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "164",
            "CountryISO2": "BB",
            "CountryISO3": "BRB",
            "CountryName": "Barbados",
            "Nationality": "Barbadian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "113",
            "CountryISO2": "BY",
            "CountryISO3": "BLR",
            "CountryName": "Belarus",
            "Nationality": "Belarusian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "114",
            "CountryISO2": "BE",
            "CountryISO3": "BEL",
            "CountryName": "Belgium",
            "Nationality": "Belgian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "165",
            "CountryISO2": "BZ",
            "CountryISO3": "BLZ",
            "CountryName": "Belize",
            "Nationality": "Belizean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "3",
            "CountryISO2": "BJ",
            "CountryISO3": "BEN",
            "CountryName": "Benin",
            "Nationality": "Beninese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "166",
            "CountryISO2": "BM",
            "CountryISO3": "BMU",
            "CountryName": "Bermuda",
            "Nationality": "Bermudian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "61",
            "CountryISO2": "BT",
            "CountryISO3": "BTN",
            "CountryName": "Bhutan",
            "Nationality": "Bhutanese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "199",
            "CountryISO2": "BO",
            "CountryISO3": "BOL",
            "CountryName": "Bolivia",
            "Nationality": "Bolivian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "115",
            "CountryISO2": "BA",
            "CountryISO3": "BIH",
            "CountryName": "Bosnia and Herzegovina",
            "Nationality": "Bosnian / Herzegovinian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "4",
            "CountryISO2": "BW",
            "CountryISO3": "BWA",
            "CountryName": "Botswana",
            "Nationality": "batswana"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "200",
            "CountryISO2": "BR",
            "CountryISO3": "BRA",
            "CountryName": "Brazil",
            "Nationality": "Brazilian"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "62",
        //     "CountryISO2": "IO",
        //     "CountryISO3": "IOT",
        //     "CountryName": "British Indian Ocean Territory",
        //     "Nationality": "British"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "63",
            "CountryISO2": "BN",
            "CountryISO3": "BRN",
            "CountryName": "Brunei Darussalam",
            "Nationality": "Bruneian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "116",
            "CountryISO2": "BG",
            "CountryISO3": "BGR",
            "CountryName": "Bulgaria",
            "Nationality": "Bulgarian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "5",
            "CountryISO2": "BF",
            "CountryISO3": "BFA",
            "CountryName": "Burkina Faso",
            "Nationality": "Burkinabe"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "6",
            "CountryISO2": "BI",
            "CountryISO3": "BDI",
            "CountryName": "Burundi",
            "Nationality": "Burundian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "64",
            "CountryISO2": "KH",
            "CountryISO3": "KHM",
            "CountryName": "Cambodia",
            "Nationality": "Cambodian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "7",
            "CountryISO2": "CM",
            "CountryISO3": "CMR",
            "CountryName": "Cameroon",
            "Nationality": "Cameroonian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "168",
            "CountryISO2": "CA",
            "CountryISO3": "CAN",
            "CountryName": "Canada",
            "Nationality": "Canadian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "8",
            "CountryISO2": "CV",
            "CountryISO3": "CPV",
            "CountryName": "Cape Verde",
            "Nationality": "Cape Verdean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "9",
            "CountryISO2": "CF",
            "CountryISO3": "CAF",
            "CountryName": "Central African Republic",
            "Nationality": "Central African"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "10",
            "CountryISO2": "TD",
            "CountryISO3": "TCD",
            "CountryName": "Chad",
            "Nationality": "Chadian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "201",
            "CountryISO2": "CL",
            "CountryISO3": "CHL",
            "CountryName": "Chile",
            "Nationality": "Chilean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "65",
            "CountryISO2": "CN",
            "CountryISO3": "CHN",
            "CountryName": "China",
            "Nationality": "Chinese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "202",
            "CountryISO2": "CO",
            "CountryISO3": "COL",
            "CountryName": "Colombia",
            "Nationality": "Colombian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "11",
            "CountryISO2": "KM",
            "CountryISO3": "COM",
            "CountryName": "Comoros",
            "Nationality": "Comoran"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "13",
        //     "CountryISO2": "CG",
        //     "CountryISO3": "COG",
        //     "CountryName": "Congo",
        //     "Nationality": "Congolese"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "12",
            "CountryISO2": "CD",
            "CountryISO3": "COD",
            "CountryName": "Congo, Democratic Republic of",
            "Nationality": "Congolese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "170",
            "CountryISO2": "CR",
            "CountryISO3": "CRI",
            "CountryName": "Costa Rica",
            "Nationality": "Costa Rican"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "14",
            "CountryISO2": "CI",
            "CountryISO3": "CIV",
            "CountryName": "Cote D'Ivoire",
            "Nationality": "Ivorian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "117",
            "CountryISO2": "HR",
            "CountryISO3": "HRV",
            "CountryName": "Croatia",
            "Nationality": "Croatian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "171",
            "CountryISO2": "CU",
            "CountryISO3": "CUB",
            "CountryName": "Cuba",
            "Nationality": "Cuban"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "118",
            "CountryISO2": "CY",
            "CountryISO3": "CYP",
            "CountryName": "Cyprus",
            "Nationality": "Cypriot"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "119",
            "CountryISO2": "CZ",
            "CountryISO3": "CZE",
            "CountryName": "Czech Republic",
            "Nationality": "Czech"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "120",
            "CountryISO2": "DK",
            "CountryISO3": "DNK",
            "CountryName": "Denmark",
            "Nationality": "Danish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "15",
            "CountryISO2": "DJ",
            "CountryISO3": "DJI",
            "CountryName": "Djibouti",
            "Nationality": "Djibouti"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "172",
        //     "CountryISO2": "DM",
        //     "CountryISO3": "DMA",
        //     "CountryName": "Dominica",
        //     "Nationality": "Dominican"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "173",
            "CountryISO2": "DO",
            "CountryISO3": "DOM",
            "CountryName": "Dominican Republic",
            "Nationality": "Dominican"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "203",
            "CountryISO2": "EC",
            "CountryISO3": "ECU",
            "CountryName": "Ecuador",
            "Nationality": "Ecuadorean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "16",
            "CountryISO2": "EG",
            "CountryISO3": "EGY",
            "CountryName": "Egypt",
            "Nationality": "Egyptian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "174",
            "CountryISO2": "SV",
            "CountryISO3": "SLV",
            "CountryName": "El Salvador",
            "Nationality": "Salvadoran"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "17",
            "CountryISO2": "GQ",
            "CountryISO3": "GNQ",
            "CountryName": "Equatorial Guinea",
            "Nationality": "Equatorial Guinean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "18",
            "CountryISO2": "ER",
            "CountryISO3": "ERI",
            "CountryName": "Eritrea",
            "Nationality": "Eritrean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "121",
            "CountryISO2": "EE",
            "CountryISO3": "EST",
            "CountryName": "Estonia",
            "Nationality": "Estonian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "19",
            "CountryISO2": "ET",
            "CountryISO3": "ETH",
            "CountryName": "Ethiopia",
            "Nationality": "Ethiopian"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "204",
        //     "CountryISO2": "FK",
        //     "CountryISO3": "FLK",
        //     "CountryName": "Falkland Islands (Malvinas)",
        //     "Nationality": "British"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "122",
            "CountryISO2": "FO",
            "CountryISO3": "FRO",
            "CountryName": "Faroe Islands",
            "Nationality": "Faroese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "216",
            "CountryISO2": "FJ",
            "CountryISO3": "FJI",
            "CountryName": "Fiji",
            "Nationality": "Fijian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "123",
            "CountryISO2": "FI",
            "CountryISO3": "FIN",
            "CountryName": "Finland",
            "Nationality": "Finnish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "124",
            "CountryISO2": "FR",
            "CountryISO3": "FRA",
            "CountryName": "France",
            "Nationality": "French"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "205",
            "CountryISO2": "GF",
            "CountryISO3": "GUF",
            "CountryName": "French Guiana",
            "Nationality": "French Guianese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "217",
            "CountryISO2": "PF",
            "CountryISO3": "PYF",
            "CountryName": "French Polynesia",
            "Nationality": "French Polynesian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "20",
            "CountryISO2": "GA",
            "CountryISO3": "GAB",
            "CountryName": "Gabon",
            "Nationality": "Gabonese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "21",
            "CountryISO2": "GM",
            "CountryISO3": "GMB",
            "CountryName": "Gambia",
            "Nationality": "Gambian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "125",
            "CountryISO2": "GE",
            "CountryISO3": "GEO",
            "CountryName": "Georgia",
            "Nationality": "Georgian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "126",
            "CountryISO2": "DE",
            "CountryISO3": "DEU",
            "CountryName": "Germany",
            "Nationality": "German"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "22",
            "CountryISO2": "GH",
            "CountryISO3": "GHA",
            "CountryName": "Ghana",
            "Nationality": "Ghanaian"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "127",
        //     "CountryISO2": "GI",
        //     "CountryISO3": "GIB",
        //     "CountryName": "Gibraltar",
        //     "Nationality": "British"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "128",
            "CountryISO2": "GR",
            "CountryISO3": "GRC",
            "CountryName": "Greece",
            "Nationality": "Greek"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "175",
            "CountryISO2": "GL",
            "CountryISO3": "GRL",
            "CountryName": "Greenland",
            "Nationality": "Greenlandic"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "176",
            "CountryISO2": "GD",
            "CountryISO3": "GRD",
            "CountryName": "Grenada",
            "Nationality": "Grenadian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "177",
            "CountryISO2": "GP",
            "CountryISO3": "GLP",
            "CountryName": "Guadeloupe",
            "Nationality": "Guadeloupian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "218",
            "CountryISO2": "GU",
            "CountryISO3": "GUM",
            "CountryName": "Guam",
            "Nationality": "Guamanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "178",
            "CountryISO2": "GT",
            "CountryISO3": "GTM",
            "CountryName": "Guatemala",
            "Nationality": "Guatemalan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "23",
            "CountryISO2": "GN",
            "CountryISO3": "GIN",
            "CountryName": "Guinea",
            "Nationality": "Guinean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "24",
            "CountryISO2": "GW",
            "CountryISO3": "GNB",
            "CountryName": "Guinea-Bissau",
            "Nationality": "Guinea-Bissauan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "206",
            "CountryISO2": "GY",
            "CountryISO3": "GUY",
            "CountryName": "Guyana",
            "Nationality": "Guyanese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "179",
            "CountryISO2": "HT",
            "CountryISO3": "HTI",
            "CountryName": "Haiti",
            "Nationality": "Haitian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "180",
            "CountryISO2": "HN",
            "CountryISO3": "HND",
            "CountryName": "Honduras",
            "Nationality": "Honduran"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "69",
            "CountryISO2": "HK",
            "CountryISO3": "HKG",
            "CountryName": "Hong Kong",
            "Nationality": "Chinese (Hong Kong)"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "130",
            "CountryISO2": "HU",
            "CountryISO3": "HUN",
            "CountryName": "Hungary",
            "Nationality": "Hungarian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "131",
            "CountryISO2": "IS",
            "CountryISO3": "ISL",
            "CountryName": "Iceland",
            "Nationality": "Icelander"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "70",
            "CountryISO2": "IN",
            "CountryISO3": "IND",
            "CountryName": "India",
            "Nationality": "Indian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "71",
            "CountryISO2": "ID",
            "CountryISO3": "IDN",
            "CountryName": "Indonesia",
            "Nationality": "Indonesian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "72",
            "CountryISO2": "IR",
            "CountryISO3": "IRN",
            "CountryName": "Iran, Islamic Republic of",
            "Nationality": "Iranian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "73",
            "CountryISO2": "IQ",
            "CountryISO3": "IRQ",
            "CountryName": "Iraq",
            "Nationality": "Iraqi"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "251",
            "CountryISO2": "IE",
            "CountryISO3": "IRL",
            "CountryName": "Ireland",
            "Nationality": "Irish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "141",
            "CountryISO2": "IM",
            "CountryISO3": "IMN",
            "CountryName": "Isle of Man",
            "Nationality": "British (Manx)"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "74",
            "CountryISO2": "IL",
            "CountryISO3": "ISR",
            "CountryName": "Israel",
            "Nationality": "Israeli"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "133",
            "CountryISO2": "IT",
            "CountryISO3": "ITA",
            "CountryName": "Italy",
            "Nationality": "Italian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "181",
            "CountryISO2": "JM",
            "CountryISO3": "JAM",
            "CountryName": "Jamaica",
            "Nationality": "Jamaican"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "75",
            "CountryISO2": "JP",
            "CountryISO3": "JPN",
            "CountryName": "Japan",
            "Nationality": "Japanese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "76",
            "CountryISO2": "JO",
            "CountryISO3": "JOR",
            "CountryName": "Jordan",
            "Nationality": "Jordanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "77",
            "CountryISO2": "KZ",
            "CountryISO3": "KAZ",
            "CountryName": "Kazakhstan",
            "Nationality": "Kazakhstani"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "25",
            "CountryISO2": "KE",
            "CountryISO3": "KEN",
            "CountryName": "Kenya",
            "Nationality": "Kenyan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "223",
            "CountryISO2": "KI",
            "CountryISO3": "KIR",
            "CountryName": "Kiribati",
            "Nationality": "I-Kiribati"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "78",
            "CountryISO2": "KP",
            "CountryISO3": "PRK",
            "CountryName": "Korea, Democratic People's Republic of",
            "Nationality": "North Korean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "79",
            "CountryISO2": "KR",
            "CountryISO3": "KOR",
            "CountryName": "Korea, Republic of",
            "Nationality": "South Korean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "80",
            "CountryISO2": "KW",
            "CountryISO3": "KWT",
            "CountryName": "Kuwait",
            "Nationality": "Kuwaiti"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "81",
            "CountryISO2": "KG",
            "CountryISO3": "KGZ",
            "CountryName": "Kyrgyzstan",
            "Nationality": "Kyrgyz"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "82",
            "CountryISO2": "LA",
            "CountryISO3": "LAO",
            "CountryName": "Lao People's Democratic Republic",
            "Nationality": "Laotian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "135",
            "CountryISO2": "LV",
            "CountryISO3": "LVA",
            "CountryName": "Latvia",
            "Nationality": "Latvian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "83",
            "CountryISO2": "LB",
            "CountryISO3": "LBN",
            "CountryName": "Lebanon",
            "Nationality": "Lebanese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "26",
            "CountryISO2": "LS",
            "CountryISO3": "LSO",
            "CountryName": "Lesotho",
            "Nationality": "Mosotho"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "27",
            "CountryISO2": "LR",
            "CountryISO3": "LBR",
            "CountryName": "Liberia",
            "Nationality": "Liberian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "28",
            "CountryISO2": "LY",
            "CountryISO3": "LBY",
            "CountryName": "Libyan Arab Jamahiriya",
            "Nationality": "Libyan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "136",
            "CountryISO2": "LI",
            "CountryISO3": "LIE",
            "CountryName": "Liechtenstein",
            "Nationality": "Liechtensteiner"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "137",
            "CountryISO2": "LT",
            "CountryISO3": "LTU",
            "CountryName": "Lithuania",
            "Nationality": "Lithuanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "138",
            "CountryISO2": "LU",
            "CountryISO3": "LUX",
            "CountryName": "Luxembourg",
            "Nationality": "Luxembourger"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "84",
            "CountryISO2": "MO",
            "CountryISO3": "MAC",
            "CountryName": "Macao",
            "Nationality": "Macaense"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "139",
            "CountryISO2": "MK",
            "CountryISO3": "MKD",
            "CountryName": "Macedonia, The Former Yugoslav Republic Of",
            "Nationality": "Macedonian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "29",
            "CountryISO2": "MG",
            "CountryISO3": "MDG",
            "CountryName": "Madagascar",
            "Nationality": "Malagasy"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "30",
            "CountryISO2": "MW",
            "CountryISO3": "MWI",
            "CountryName": "Malawi",
            "Nationality": "Malawian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "85",
            "CountryISO2": "MY",
            "CountryISO3": "MYS",
            "CountryName": "Malaysia",
            "Nationality": "Malaysian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "86",
            "CountryISO2": "MV",
            "CountryISO3": "MDV",
            "CountryName": "Maldives",
            "Nationality": "Maldivan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "31",
            "CountryISO2": "ML",
            "CountryISO3": "MLI",
            "CountryName": "Mali",
            "Nationality": "Malian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "140",
            "CountryISO2": "MT",
            "CountryISO3": "MLT",
            "CountryName": "Malta",
            "Nationality": "Maltese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "224",
            "CountryISO2": "MH",
            "CountryISO3": "MHL",
            "CountryName": "Marshall Islands",
            "Nationality": "Marshallese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "182",
            "CountryISO2": "MQ",
            "CountryISO3": "MTQ",
            "CountryName": "Martinique",
            "Nationality": "Martiniquais"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "32",
            "CountryISO2": "MR",
            "CountryISO3": "MRT",
            "CountryName": "Mauritania",
            "Nationality": "Mauritanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "33",
            "CountryISO2": "MU",
            "CountryISO3": "MUS",
            "CountryName": "Mauritius",
            "Nationality": "Mauritian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "34",
            "CountryISO2": "YT",
            "CountryISO3": "MYT",
            "CountryName": "Mayotte",
            "Nationality": "Mahoran"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "183",
            "CountryISO2": "MX",
            "CountryISO3": "MEX",
            "CountryName": "Mexico",
            "Nationality": "Mexican"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "225",
            "CountryISO2": "FM",
            "CountryISO3": "FSM",
            "CountryName": "Micronesia, Federated States Of",
            "Nationality": "Micronesian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "142",
            "CountryISO2": "MD",
            "CountryISO3": "MDA",
            "CountryName": "Moldova, Republic of",
            "Nationality": "Moldovan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "143",
            "CountryISO2": "MC",
            "CountryISO3": "MCO",
            "CountryName": "Monaco",
            "Nationality": "Monacan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "87",
            "CountryISO2": "MN",
            "CountryISO3": "MNG",
            "CountryName": "Mongolia",
            "Nationality": "Mongolian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "184",
            "CountryISO2": "MS",
            "CountryISO3": "MSR",
            "CountryName": "Montserrat",
            "Nationality": "Montserratian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "35",
            "CountryISO2": "MA",
            "CountryISO3": "MAR",
            "CountryName": "Morocco",
            "Nationality": "Moroccan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "36",
            "CountryISO2": "MZ",
            "CountryISO3": "MOZ",
            "CountryName": "Mozambique",
            "Nationality": "Mozambican"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "88",
            "CountryISO2": "MM",
            "CountryISO3": "MMR",
            "CountryName": "Myanmar",
            "Nationality": "Myanmar"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "37",
            "CountryISO2": "NA",
            "CountryISO3": "NAM",
            "CountryName": "Namibia",
            "Nationality": "Namibian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "227",
            "CountryISO2": "NR",
            "CountryISO3": "NRU",
            "CountryName": "Nauru",
            "Nationality": "Nauruan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "89",
            "CountryISO2": "NP",
            "CountryISO3": "NPL",
            "CountryName": "Nepal",
            "Nationality": "Nepalese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "144",
            "CountryISO2": "NL",
            "CountryISO3": "NLD",
            "CountryName": "Netherlands",
            "Nationality": "Dutch"
        },
        // {
        //     "AgeVerificationRequired": "false",
        //     "CountryID": "186",
        //     "CountryISO2": "AN",
        //     "CountryISO3": "ANT",
        //     "CountryName": "Netherlands Antilles",
        //     "Nationality": "Dutch"
        // },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "228",
            "CountryISO2": "NC",
            "CountryISO3": "NCL",
            "CountryName": "New Caledonia",
            "Nationality": "New Caledonian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "229",
            "CountryISO2": "NZ",
            "CountryISO3": "NZL",
            "CountryName": "New Zealand",
            "Nationality": "New Zealander"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "187",
            "CountryISO2": "NI",
            "CountryISO3": "NIC",
            "CountryName": "Nicaragua",
            "Nationality": "Nicaraguan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "38",
            "CountryISO2": "NE",
            "CountryISO3": "NER",
            "CountryName": "Niger",
            "Nationality": "Nigerian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "39",
            "CountryISO2": "NG",
            "CountryISO3": "NGA",
            "CountryName": "Nigeria",
            "Nationality": "Nigerien"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "230",
            "CountryISO2": "NU",
            "CountryISO3": "NIU",
            "CountryName": "Niue",
            "Nationality": "Niuean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "145",
            "CountryISO2": "NO",
            "CountryISO3": "NOR",
            "CountryName": "Norway",
            "Nationality": "Norwegian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "90",
            "CountryISO2": "OM",
            "CountryISO3": "OMN",
            "CountryName": "Oman",
            "Nationality": "Omani"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "91",
            "CountryISO2": "PK",
            "CountryISO3": "PAK",
            "CountryName": "Pakistan",
            "Nationality": "Pakistani"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "233",
            "CountryISO2": "PW",
            "CountryISO3": "PLW",
            "CountryName": "Palau",
            "Nationality": "Palauan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "92",
            "CountryISO2": "PS",
            "CountryISO3": "PSE",
            "CountryName": "Palestinian Territory",
            "Nationality": "Palestine"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "188",
            "CountryISO2": "PA",
            "CountryISO3": "PAN",
            "CountryName": "Panama",
            "Nationality": "Panamanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "235",
            "CountryISO2": "PG",
            "CountryISO3": "PNG",
            "CountryName": "Papua New Guinea",
            "Nationality": "Papua New Guinean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "207",
            "CountryISO2": "PY",
            "CountryISO3": "PRY",
            "CountryName": "Paraguay",
            "Nationality": "Paraguayan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "208",
            "CountryISO2": "PE",
            "CountryISO3": "PER",
            "CountryName": "Peru",
            "Nationality": "Peruvian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "93",
            "CountryISO2": "PH",
            "CountryISO3": "PHL",
            "CountryName": "Philippines",
            "Nationality": "Filipino"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "146",
            "CountryISO2": "PL",
            "CountryISO3": "POL",
            "CountryName": "Poland",
            "Nationality": "Polish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "147",
            "CountryISO2": "PT",
            "CountryISO3": "PRT",
            "CountryName": "Portugal",
            "Nationality": "Portuguese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "189",
            "CountryISO2": "PR",
            "CountryISO3": "PRI",
            "CountryName": "Puerto Rico",
            "Nationality": "Puerto Rican"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "94",
            "CountryISO2": "QA",
            "CountryISO3": "QAT",
            "CountryName": "Qatar",
            "Nationality": "Qatari"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "40",
            "CountryISO2": "RE",
            "CountryISO3": "REU",
            "CountryName": "Reunion",
            "Nationality": "Reunionese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "148",
            "CountryISO2": "RO",
            "CountryISO3": "ROU",
            "CountryName": "Romania",
            "Nationality": "Romanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "149",
            "CountryISO2": "RU",
            "CountryISO3": "RUS",
            "CountryName": "Russia",
            "Nationality": "Russian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "41",
            "CountryISO2": "RW",
            "CountryISO3": "RWA",
            "CountryName": "Rwanda",
            "Nationality": "Rwandan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "190",
            "CountryISO2": "KN",
            "CountryISO3": "KNA",
            "CountryName": "Saint Kitts and Nevis",
            "Nationality": "Kittian and Nevisian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "191",
            "CountryISO2": "LC",
            "CountryISO3": "LCA",
            "CountryName": "Saint Lucia",
            "Nationality": "Saint Lucian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "237",
            "CountryISO2": "WS",
            "CountryISO3": "WSM",
            "CountryName": "Samoa",
            "Nationality": "Samoan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "150",
            "CountryISO2": "SM",
            "CountryISO3": "SMR",
            "CountryName": "San Marino",
            "Nationality": "San Marinese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "43",
            "CountryISO2": "ST",
            "CountryISO3": "STP",
            "CountryName": "Sao Tome and Principe",
            "Nationality": "Sao Tomean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "95",
            "CountryISO2": "SA",
            "CountryISO3": "SAU",
            "CountryName": "Saudi Arabia",
            "Nationality": "Saudi"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "44",
            "CountryISO2": "SN",
            "CountryISO3": "SEN",
            "CountryName": "Senegal",
            "Nationality": "Senegalese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "151",
            "CountryISO2": "CS",
            "CountryISO3": "SCG",
            "CountryName": "Serbia and Montenegro",
            "Nationality": "Serbian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "45",
            "CountryISO2": "SC",
            "CountryISO3": "SYC",
            "CountryName": "Seychelles",
            "Nationality": "Seychellois"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "46",
            "CountryISO2": "SL",
            "CountryISO3": "SLE",
            "CountryName": "Sierra Leone",
            "Nationality": "Sierra Leonean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "96",
            "CountryISO2": "SG",
            "CountryISO3": "SGP",
            "CountryName": "Singapore",
            "Nationality": "Singaporean"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "152",
            "CountryISO2": "SK",
            "CountryISO3": "SVK",
            "CountryName": "Slovakia",
            "Nationality": "Slovakian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "153",
            "CountryISO2": "SI",
            "CountryISO3": "SVN",
            "CountryName": "Slovenia",
            "Nationality": "Slovenian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "238",
            "CountryISO2": "SB",
            "CountryISO3": "SLB",
            "CountryName": "Solomon Islands",
            "Nationality": "Solomon Islander"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "47",
            "CountryISO2": "SO",
            "CountryISO3": "SOM",
            "CountryName": "Somalia",
            "Nationality": "Somali"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "48",
            "CountryISO2": "ZA",
            "CountryISO3": "ZAF",
            "CountryName": "South Africa",
            "Nationality": "South African"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "154",
            "CountryISO2": "ES",
            "CountryISO3": "ESP",
            "CountryName": "Spain",
            "Nationality": "Spanish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "97",
            "CountryISO2": "LK",
            "CountryISO3": "LKA",
            "CountryName": "Sri Lanka",
            "Nationality": "Sri Lankan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "49",
            "CountryISO2": "SD",
            "CountryISO3": "SDN",
            "CountryName": "Sudan",
            "Nationality": "Sudanese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "209",
            "CountryISO2": "SR",
            "CountryISO3": "SUR",
            "CountryName": "Suriname",
            "Nationality": "Surinamer"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "50",
            "CountryISO2": "SZ",
            "CountryISO3": "SWZ",
            "CountryName": "Swaziland",
            "Nationality": "Swazi"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "155",
            "CountryISO2": "SE",
            "CountryISO3": "SWE",
            "CountryName": "Sweden",
            "Nationality": "Swedish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "156",
            "CountryISO2": "CH",
            "CountryISO3": "CHE",
            "CountryName": "Switzerland",
            "Nationality": "Swiss"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "98",
            "CountryISO2": "SY",
            "CountryISO3": "SYR",
            "CountryName": "Syrian Arab Republic",
            "Nationality": "Syrian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "99",
            "CountryISO2": "TW",
            "CountryISO3": "TWN",
            "CountryName": "Taiwan",
            "Nationality": "Taiwanese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "100",
            "CountryISO2": "TJ",
            "CountryISO3": "TJK",
            "CountryName": "Tajikistan",
            "Nationality": "Tajik"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "51",
            "CountryISO2": "TZ",
            "CountryISO3": "TZA",
            "CountryName": "Tanzania, United Republic of",
            "Nationality": "Tanzanian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "101",
            "CountryISO2": "TH",
            "CountryISO3": "THA",
            "CountryName": "Thailand",
            "Nationality": "Thai"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "68",
            "CountryISO2": "TL",
            "CountryISO3": "TLS",
            "CountryName": "Timor-Leste",
            "Nationality": "Timorese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "52",
            "CountryISO2": "TG",
            "CountryISO3": "TGO",
            "CountryName": "Togo",
            "Nationality": "Togolese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "239",
            "CountryISO2": "TK",
            "CountryISO3": "TKL",
            "CountryName": "Tokelau",
            "Nationality": "Tokelauan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "240",
            "CountryISO2": "TO",
            "CountryISO3": "TON",
            "CountryName": "Tonga",
            "Nationality": "Tongan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "194",
            "CountryISO2": "TT",
            "CountryISO3": "TTO",
            "CountryName": "Trinidad and Tobago",
            "Nationality": "Trinidadian / Tobagonian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "53",
            "CountryISO2": "TN",
            "CountryISO3": "TUN",
            "CountryName": "Tunisia",
            "Nationality": "Tunisian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "102",
            "CountryISO2": "TR",
            "CountryISO3": "TUR",
            "CountryName": "Turkey",
            "Nationality": "Turkish"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "103",
            "CountryISO2": "TM",
            "CountryISO3": "TKM",
            "CountryName": "Turkmenistan",
            "Nationality": "Turkmen"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "241",
            "CountryISO2": "TV",
            "CountryISO3": "TUV",
            "CountryName": "Tuvalu",
            "Nationality": "Tuvaluan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "54",
            "CountryISO2": "UG",
            "CountryISO3": "UGA",
            "CountryName": "Uganda",
            "Nationality": "Ugandan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "157",
            "CountryISO2": "UA",
            "CountryISO3": "UKR",
            "CountryName": "Ukraine",
            "Nationality": "Ukrainian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "104",
            "CountryISO2": "AE",
            "CountryISO3": "ARE",
            "CountryName": "United Arab Emirates",
            "Nationality": "Emirati"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "158",
            "CountryISO2": "UK",
            "CountryISO3": "GBR",
            "CountryName": "United Kingdom",
            "Nationality": "British"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "196",
            "CountryISO2": "US",
            "CountryISO3": "USA",
            "CountryName": "United States",
            "Nationality": "American"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "210",
            "CountryISO2": "UY",
            "CountryISO3": "URY",
            "CountryName": "Uruguay",
            "Nationality": "Uruguayan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "105",
            "CountryISO2": "UZ",
            "CountryISO3": "UZB",
            "CountryName": "Uzbekistan",
            "Nationality": "Uzbekistani"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "242",
            "CountryISO2": "VU",
            "CountryISO3": "VUT",
            "CountryName": "Vanuatu",
            "Nationality": "Ni-Vanuatu"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "211",
            "CountryISO2": "VE",
            "CountryISO3": "VEN",
            "CountryName": "Venezuela",
            "Nationality": "Venezuelan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "106",
            "CountryISO2": "VN",
            "CountryISO3": "VNM",
            "CountryName": "Viet Nam",
            "Nationality": "Vietnamese"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "244",
            "CountryISO2": "WF",
            "CountryISO3": "WLF",
            "CountryName": "Wallis and Futuna",
            "Nationality": "Wallisian / Futunan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "55",
            "CountryISO2": "EH",
            "CountryISO3": "ESH",
            "CountryName": "Western Sahara",
            "Nationality": "Western Saharan"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "107",
            "CountryISO2": "YE",
            "CountryISO3": "YEM",
            "CountryName": "Yemen",
            "Nationality": "Yemenite"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "56",
            "CountryISO2": "ZM",
            "CountryISO3": "ZMB",
            "CountryName": "Zambia",
            "Nationality": "Zambian"
        },
        {
            "AgeVerificationRequired": "false",
            "CountryID": "57",
            "CountryISO2": "ZW",
            "CountryISO3": "ZWE",
            "CountryName": "Zimbabwe",
            "Nationality": "Zimbabwean"
        }
    ]
}

const countryCodeOverrides = {
    'UK': 'GB',
}

const countryCodes = {}


awCountries.Country.forEach(item => {
    let cc = item.CountryISO2
    cc = countryCodeOverrides[cc] ? countryCodeOverrides[cc] : cc
    countryCodes[item.Nationality] = cc
})

function flagCdn(nationality) {
    let isoCode =
        countryCodes[nationality] ? countryCodes[nationality] : ''
    isoCode = String(isoCode).toLowerCase()
    return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${isoCode}.svg`
}