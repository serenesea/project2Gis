/**
 * Created by Антонина on 28.01.2017.
 */
var jsonData =
    [{"name":"Israel", "areas":[
        {"name":"Haifa area","cities":[
            {"name":"Haifa","streets":[
                {"name":"Ben Guriona-Haifa","addresses":[967,286,889,827,738]},
                {"name":"Itshak Rager-Haifa","addresses":[795,169,369,485,944,169,70,169,891,188,650]},
                {"name":"Lenina-Haifa","addresses":[515,781,671,868,765,807,417,581,203,395,397,35,900,355,109,973,39]}]},
            {"name":"Hadera","streets":[
                {"name":"Ben Guriona-Hadera","addresses":[967,286,889,827,738]},
                {"name":"Itshak Rager-Hadera","addresses":[565]},
                {"name":"Lenina-Hadera","addresses":[515,781,671,868,765,807,417,581,203,395,397,35,900,355,109,973,39]},
                {"name":"Bar Kochba-Hadera","addresses":[409,73,907,468,428,882,899,664,820,314,798,607,397,430,486,251]},
                {"name":"Ussishkin-Hadera","addresses":[374,611,82,687,140,710,27,402]}]},
            {"name":"Tirat Karmel","streets":[
                {"name":"Itshak Rager-Tirat Karmel","addresses":[795,169,369,485,944,169,70,169,891,188,650]},
                {"name":"Lenina-Tirat Karmel","addresses":[515,781,671,868,765,807,417,581,203,395,397,35,900,355,109,973,39]},
                {"name":"Ben Guriona-Tirat Karmel","addresses":[374,611,82,687,140,710,27,402]}]}]},
        {"name":"North","cities":
            [{"name":"Akko","streets":
                [{"name":"Lenina-Akko","addresses":[344,272,906,663,299,459,838,250,394,890,197,483,15,318,629,382,542,230,679,583]},
                    {"name":"Moskowskaya-Akko","addresses":[810,342,203,277,950,164,380,669,921,217,706,470]},
                    {"name":"Ben Guriona-Akko","addresses":[140,162,108]}]},
                {"name":"Nazaret","streets":[
                    {"name":"Lenina-Nazaret","addresses":[344,272,906,663,299,459,838,250,394,890,197,483,15,318,629,382,542,230,679,583]},
                    {"name":"Moskowskaya-Nazaret","addresses":[664,171,185,522,963,794,340,948,337]},
                    {"name":"Bar Kochba-Nazaret","addresses":[409,73,907,468,428,882,899,664,820,314,798,607,397,430,486,251]},
                    {"name":"Ben Guriona-Nazaret","addresses":[140,162,108]}]},
                {"name":"Afula","streets":[
                    {"name":"Lenina-Afula","addresses":[344,272,906,663,299,459,838,250,394,890,197,483,15,318,629,382,542,230,679,583]},
                    {"name":"Rabi Tsvi-Afula","addresses":[664,171,185,522,963,794,340,948,337]},
                    {"name":"Moskowskaya-Afula","addresses":[810,342,203,277,950,164,380,669,921,217,706,470]},
                    {"name":"Ben Guriona-Afula","addresses":[140,162,108]}]}]},
        {"name":"Center","cities":[
            {"name":"Givat Shmuel","streets":[
                {"name":"Moskowskaya-Givat Shmuel","addresses":[582,325,54,348,296,937,617,694,205,828,780,535,226,874,503,124,14,989,663,947]},
                {"name":"Itshak Rager-Givat Shmuel","addresses":[171]},
                {"name":"Lenina-Givat Shmuel","addresses":[806,469,286,685,61,585,402,459,346,354]},
                {"name":"Ben Guriona-Givat Shmuel","addresses":[885,314,345,61,270,810,729,371,668,970,705,168,132,628,664,145,484,485,469]}]},
            {"name":"Kfar Sava","streets":[
                {"name":"Moskowskaya-Kfar Sava","addresses":[582,325,54,348,296,937,617,694,205,828,780,535,226,874,503,124,14,989,663,947]},
                {"name":"Itshak Rager-Kfar Sava","addresses":[171]},
                {"name":"Byalik-Kfar Sava","addresses":[806,469,286,685,61,585,402,459,346,354]},
                {"name":"Rhov-Kfar Sava","addresses":[806,469,286,685,61,585,402,459,346,354]},
                {"name":"Sderot-Kfar Sava","addresses":[806,469,286,685,61,585,402,459,346,354]},
                {"name":"Ben Guriona-Kfar Sava","addresses":[885,314,345,61,270,810,729,371,668,970,705,168,132,628,664,145,484,485,469]}]},
            {"name":"Lod","streets":[
                {"name":"Weizman-Lod","addresses":[932,701,690,251,174,404,211,100,996,668,483,768,139,276]},
                {"name":"Ben Guriona-Lod","addresses":[408,906,384,595,484,770,251,881,540,576,113,50]},
                {"name":"Moskowskaya-Lod","addresses":[582,325,54,348,296,937,617,694,205,828,780,535,226,874,503,124,14,989,663,947]},
                {"name":"Itshak Rager-Lod","addresses":[171]},
                {"name":"Shaul-Lod","addresses":[806,469,286,685,61,585,402,459,346,354]},
                {"name":"Sd Erushalaim-Lod","addresses":[885,314,345,61,270,810,729,371,668,970,705,168,132,628,664,145,484,485,469]}]},
            {"name":"Nes Tsiona","streets":[
                {"name":"Zhabotinsky-Nes","addresses":[932,701,690,251,174,404,211,100,996,668,483,768,139,276]},
                {"name":"Herzl-Nes","addresses":[408,906,384,595,484,770,251,881,540,576,113,50]},
                {"name":"Moskowskaya-Nes","addresses":[582,325,54,348,296,937,617,694,205,828,780,535,226,874,503,124,14,989,663,947]},
                {"name":"Itshak Rager-Nes","addresses":[171]},
                {"name":"Lenina-Nes","addresses":[806,469,286,685,61,585,402,459,346,354]},
                {"name":"Ben Guriona-Nes","addresses":[885,314,345,61,270,810,729,371,668,970,705,168,132,628,664,145,484,485,469]}]}]},
        {"name":"Tel-Aviv Area","cities":[
            {"name":"Tel-Aviv","streets":[
                {"name":"Ben Guriona-TA","addresses":[134,10,936,150]},
                {"name":"Moskowskaya-TA","addresses":[268,232,423,839,925,126,901]},
                {"name":"Itshak Rager-TA","addresses":[54,928,484,641,578,690,970,674,681,450,421,78]},
                {"name":"Lenina-TA","addresses":[544,511,273,842,146,263,400,970,836,518,48,792,839,502,625]}]},
            {"name":"Holon","streets":[
                {"name":"Ben Guriona-Holon","addresses":[134,10,936,150]},
                {"name":"Moskowskaya-Holon","addresses":[268,232,423,839,925,126,901]},
                {"name":"Itshak Rager-Holon","addresses":[54,928,484,641,578,690,970,674,681,450,421,78]},
                {"name":"Sd Erushalaim-Holon","addresses":[544,511,273,842,146,263,400,970,836,518,48,792,839,502,625]}]},
            {"name":"Ramat Gan","streets":[
                {"name":"Ben Guriona-Ramat Gan","addresses":[134,10,936,150]},
                {"name":"Eli Kohen-Ramat Gan","addresses":[268,232,423,839,925,126,901]},
                {"name":"Itshak Rager-Ramat Gan","addresses":[54,928,484,641,578,690,970,674,681,450,421,78]},
                {"name":"Lenina-Ramat Gan","addresses":[544,511,273,842,146,263,400,970,836,518,48,792,839,502,625]}]},
            {"name":"Ramat Hasharon","streets":[
                {"name":"Ben Guriona-Ramat Hasharon","addresses":[134,10,936,150]},
                {"name":"Moskowskaya-Ramat Hasharon","addresses":[268,232,423,839,925,126,901]},
                {"name":"Itshak Rager-Ramat Hasharon","addresses":[54,928,484,641,578,690,970,674,681,450,421,78]},
                {"name":"Orlov-Ramat Hasharon","addresses":[544,511,273,842,146,263,400,970,836,518,48,792,839,502,625]}]},
            {"name":"Ili-Eguda","streets":[
                {"name":"Afridar-Ili-Eguda","addresses":[268,232,423,839,925,126,901]},
                {"name":"Itshak Rager-Ili-Eguda","addresses":[54,928,484,641,578,690,970,674,681,450,421,78]},
                {"name":"Ben Guriona-Ili-Eguda","addresses":[653,167,134,379,255,256,982,469,576,821]},
                {"name":"Lenina-Ili-Eguda","addresses":[544,511,273,842,146,263,400,970,836,518,48,792,839,502,625]}]},
            {"name":"Kiriat Ono","streets":[
                {"name":"Rhov-Kiriat Ono","addresses":[268,232,423,839,925,126,901]},
                {"name":"Itshak Rager-Kiriat Ono","addresses":[54,928,484,641,578,690,970,674,681,450,421,78]},
                {"name":"Ben Guriona-Kiriat Ono","addresses":[653,167,134,379,255,256,982,469,576,821]},
                {"name":"Lenina-Kiriat Ono","addresses":[544,511,273,842,146,263,400,970,836,518,48,792,839,502,625]}]}]},
        {"name":"South","cities":[
            {"name":"Ashkelon","streets":[
                {"name":"Bar kochba-Ashkelon","addresses":[492,298]},
                {"name":"Sderot-Ashkelon","addresses":[139,634]}]},
            {"name":"Ashdod","streets":[
                {"name":"Rhov-Ashdod","addresses":[492,298]},
                {"name":"Sderot-Ashdod","addresses":[139,634]}]},
            {"name":"Ofakim","streets":[
                {"name":"Ben Tsvi-Ofakim","addresses":[492,298]},
                {"name":"Moskowskaya-Ofakim","addresses":[139,634]}]}]}]}]