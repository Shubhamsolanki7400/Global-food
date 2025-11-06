import React, { useState } from 'react';

const Products = () => {
//   const [searchTerm,setSearchTerm]=useState('')
//   const [ingredSearch,setingredSearch]=useState('')
//   const herbsData = [
//     { herb1: "Apium Graveoens", botanical1: "AOHnite Ferox", herb2: "Agar", botanical2: "Aquillaria gallocha" },
//     { herb1: "Ageda", botanical1: "Achyranthes aspera", herb2: "Ajmod", botanical2: "Apium graveoens" },
//     { herb1: "Ajowan seeds", botanical1: "Ajowan seeds", herb2: "Akkalkara mul", botanical2: "Anacylus pyrethrum" },
//     { herb1: "Aloes", botanical1: "Aloes indica", herb2: "Amba chhal", botanical2: "Mangifera indica" },
//     { herb1: "Ambahalder", botanical1: "Cucurma amda", herb2: "Amla", botanical2: "Emblica officinalis" },
//     { herb1: "Amli", botanical1: "Tamarindus indicus", herb2: "Anantmool", botanical2: "Hemidesmus indicus" },
//     { herb1: "Ankdo", botanical1: "Calotropis giganta", herb2: "Annatto seeds", botanical2: "Baxa orellana" },
//     { herb1: "Anuir", botanical1: "Ficus carica", herb2: "Apple", botanical2: "Pyrus malus" },
//     { herb1: "Aritha", botanical1: "Sapindus trifoliatus", herb2: "Arjun bark", botanical2: "Terminalia arjuna" },
//     { herb1: "Arni mool root", botanical1: "Clitoria ternatea", herb2: "Ashok bark", botanical2: "Saraca indica" },
//     { herb1: "Shwagandha", botanical1: "Withania somnifera", herb2: "Atibala-chikana", botanical2: "Sida cordifolia" },
//     { herb1: "Ativish", botanical1: "Aconitum heterophyllum", herb2: "Babul bark", botanical2: "Acacia arabica" },
//     { herb1: "Babul pods", botanical1: "Acacia arabica", herb2: "Baheda", botanical2: "Terminalia belerica" },
//     { herb1: "Bakayan(fruit)", botanical1: "Melia azedarach", herb2: "Banafshah, wild violet", botanical2: "Viola odorata" },
//     { herb1: "Baru mool", botanical1: "Andropogon halepensis", herb2: "Babchi seeds", botanical2: "Psoralea" },
//     { herb1: "Beal fruit", botanical1: "Aegle marmelos", herb2: "Beal mul", botanical2: "Aegle marmelos" },
//     { herb1: "Bealphal", botanical1: "Aegle marmelos", herb2: "Belladona leaf/herb", botanical2: "Atropa belladonna" },
//     { herb1: "Belladona root", botanical1: "Atropa belladonna", herb2: "Bhava", botanical2: "Vassia fistula fruit" },
//     { herb1: "Bharangi mool", botanical1: "Clerodendrum indicum", herb2: "Bhillama, bhella", botanical2: "Semecarpus anacardium" },
//     { herb1: "Bhui kokhala", botanical1: "Kantakari", herb2: "Bhoi-pathri", botanical2: "Launaea pinnatifida" },
//     { herb1: "Bidhara", botanical1: "Argyreia speciosa", herb2: "Bijasar", botanical2: "Pterocarpus marsupium" },
//     { herb1: "Bhui-amla", botanical1: "Phyllanthus niruri", herb2: "Black piper", botanical2: "Piper nigrum" },
//     { herb1: "Blackteal", botanical1: "Sesamum indicum", herb2: "Chavak", botanical2: "Piper chaba" },
//     { herb1: "Chitrak mool", botanical1: "Plumbago rosea", herb2: "Chopchini", botanical2: "Smilax china" },
//     { herb1: "Cinchona officinale", botanical1: "Cinchona officinale", herb2: "Curry leaf", botanical2: "Bergera koenigis" },
//     { herb1: "Dalchini", botanical1: "Eragrostis", herb2: "Darbha", botanical2: "Cynosuroide" },
//     { herb1: "Daruhalder", botanical1: "Berberis aristata", herb2: "Dashmool", botanical2: "Dashmool" },
//     { herb1: "Devdhar", botanical1: "Cedrus deodara", herb2: "Dikemari", botanical2: "Gardenis gummifera" },
//     { herb1: "Dhamasa", botanical1: "Fagonia arabica", herb2: "Dhayati", botanical2: "Woodfordia fruticosa" },
//     { herb1: "Dhana", botanical1: "", herb2: "Dhatura folio", botanical2: "Dhatura alba" },
//     { herb1: "Dhatura phool", botanical1: "Woodfordia horbundas", herb2: "Dudal", botanical2: "Taraxacum officinale" },
//     { herb1: "Dudhi", botanical1: "Euphorbia thymifolia", herb2: "Elaichi", botanical2: "Elattaria cardamomum" },
//     { herb1: "Ephedra", botanical1: "Ephedra vulgaris", herb2: "Eranda root", botanical2: "Ricinus communis" },
//     { herb1: "Euphorbia", botanical1: "Euphorbia hirta", herb2: "Gahula", botanical2: "Prunus mahaleb" },
//     { herb1: "Gandhprasarini leaf", botanical1: "Paederia foetida", herb2: "Garlic, lashun", botanical2: "Allium sativum" },
//     { herb1: "Garmola, amaltas", botanical1: "Cassia fistula", herb2: "Ginger, lashun", botanical2: "Zingiber officinale" },
//     { herb1: "Glycyrrhiza, mulethi", botanical1: "Glycyrrhiza glabra", herb2: "Godambi", botanical2: "Semecarpus anacardium" },
//     { herb1: "Gokhru", botanical1: "Tribulus terrestris", herb2: "Gorakhmundi", botanical2: "Sphaeranthus indicus" },
//     { herb1: "Green chilli", botanical1: "Capsicum annum", herb2: "Guduchi, galo, amruta", botanical2: "Tinospora cordifolia" },
//     { herb1: "Guggal", botanical1: "", herb2: "Guggal ethyl acetate", botanical2: "" },
//     { herb1: "Gurmar", botanical1: "Gymnema sylvestre", herb2: "Halder", botanical2: "Curcuma longa" },
//     { herb1: "Harde, harir, haritaki", botanical1: "Terminalia chebula", herb2: "Henna leaf", botanical2: "Lawsonia alba" },
//     { herb1: "Hing", botanical1: "Ferula assafoetida", herb2: "Indrajav", botanical2: "Wrightia tinctoria" },
//     // And so on...
//   ];

//   const oils = [
//     // Essential Oils
//     { name: "Ajowain Oil", type: "Essential Oil" },
//     { name: "Anise Oil", type: "Essential Oil" },
//     { name: "Amyris Oil", type: "Essential Oil" },
//     { name: "Astrofolia Oil", type: "Essential Oil" },
//     { name: "Basil Oil", type: "Essential Oil" },
//     { name: "Betel Leaf Oil", type: "Essential Oil" },
//     { name: "Betel Nut Oil", type: "Essential Oil" },
//     { name: "Blue Chamomile Oil", type: "Essential Oil" },
//     { name: "Cade Oil", type: "Essential Oil" },
//     { name: "Cajeput Oil", type: "Essential Oil" },
//     { name: "Calamus Oil", type: "Essential Oil" },
//     { name: "Caraway Oil", type: "Essential Oil" },
//     { name: "Carrot Seed Oil", type: "Essential Oil" },
//     { name: "Cassia Oil", type: "Essential Oil" },
//     { name: "Cedarwood Oil", type: "Essential Oil" },
//     { name: "Celery Seed Oil", type: "Essential Oil" },
//     { name: "Cinnamon Bark Oil", type: "Essential Oil" },
//     { name: "Cinnamon Leaf Oil", type: "Essential Oil" },
//     { name: "Clove Bud Oil", type: "Essential Oil" },
//     { name: "Clove Leaf Oil", type: "Essential Oil" },
//     { name: "Cumin Oil", type: "Essential Oil" },
//     { name: "Curry Leaf Oil", type: "Essential Oil" },
//     { name: "Cyperiol Oil (nagarmotha)", type: "Essential Oil" },
//     { name: "Chamomile Oil", type: "Essential Oil" },
//     { name: "Davana Oil", type: "Essential Oil" },
//     { name: "Dill Seed Oil", type: "Essential Oil" },
//     { name: "Elemi Oil", type: "Essential Oil" },
//     { name: "Eucalyptus Citrodora Oil", type: "Essential Oil" },
//     { name: "Eucalyptus Oil (Nilgiri)", type: "Essential Oil" },
//     { name: "Fennel Oil", type: "Essential Oil" },
//     { name: "Bitter Fennel Oil", type: "Essential Oil" },
//     { name: "Sweet Fenugreek Oil", type: "Essential Oil" },
//     { name: "Frankincense Oil", type: "Essential Oil" },
//     { name: "Geranium Oil", type: "Essential Oil" },
//     { name: "Ginger Lily Oil", type: "Essential Oil" },
//     { name: "Grape Fruit Oil", type: "Essential Oil" },
//     { name: "Holy Basil Oil", type: "Essential Oil" },
//     { name: "Jasmine Oil", type: "Essential Oil" },
//     { name: "Jatamansi Oil", type: "Essential Oil" },
//     { name: "Jyotismati Oil", type: "Essential Oil" },
//     { name: "Juniper Berry Oil", type: "Essential Oil" },
//     { name: "Kapoor Kachrai Oil", type: "Essential Oil" },
//     { name: "Laurel Leaf Oil", type: "Essential Oil" },
//     { name: "Lemon Balm (Melissa) Oil", type: "Essential Oil" },
//     { name: "Lemon Grass Oil", type: "Essential Oil" },
//     { name: "Lime Oil", type: "Essential Oil" },
//     { name: "Mandarin Oil", type: "Essential Oil" },
//     { name: "Malkangani Oil", type: "Essential Oil" },
//     { name: "Marjoram Oil", type: "Essential Oil" },
//     { name: "Melissa Oil", type: "Essential Oil" },
//     { name: "Myrrh Oil", type: "Essential Oil" },
//     { name: "Myrtle Oil", type: "Essential Oil" },
//     { name: "Neroli Oil", type: "Essential Oil" },
//     { name: "Niaouli Oil", type: "Essential Oil" },
//     { name: "Olibanum Oil", type: "Essential Oil" },
//     { name: "Orange Oil", type: "Essential Oil" },
//     { name: "Bitter Orange Oil", type: "Essential Oil" },
//     { name: "Sweet Oregano Oil", type: "Essential Oil" },
//     { name: "Palmarosa Oil", type: "Essential Oil" },
//     { name: "Parsley Seed Oil", type: "Essential Oil" },
//     { name: "Patchouli Oil", type: "Essential Oil" },
//     { name: "Peru Balsam Oil", type: "Essential Oil" },
//     { name: "Petit Grain Oil", type: "Essential Oil" },
//     { name: "Rose Geranium Oil", type: "Essential Oil" },
//     { name: "Rose Oil", type: "Essential Oil" },
//     { name: "Rosemary Oil", type: "Essential Oil" },
//     { name: "Spikenard Oil (jatmansi)", type: "Essential Oil" },
//     { name: "Star Anise Oil", type: "Essential Oil" },
//     { name: "Sugandh Kokila Oil", type: "Essential Oil" },
//     { name: "Sugandhmantri Oil", type: "Essential Oil" },
//     { name: "Tea Tree Oil", type: "Essential Oil" },
//     { name: "Turmeric Root Oil", type: "Essential Oil" },
//     { name: "Tegetus Oil", type: "Essential Oil" },
//     { name: "Thyme Oil", type: "Essential Oil" },
//     { name: "Tolu Balsam Oil", type: "Essential Oil" },
//     { name: "Turmeric Oil", type: "Essential Oil" },
//     { name: "Valerian Root Oil", type: "Essential Oil" },
//     { name: "Vanilla Oil", type: "Essential Oil" },
//     { name: "Verbena Oil", type: "Essential Oil" },
//     { name: "Amla Oil", type: "Carrier Oil" },
//     { name: "Almond Oil", type: "Carrier Oil" },
//     { name: "Aloe Vera Oil", type: "Carrier Oil" },
//     { name: "Apricot Oil", type: "Carrier Oil" },
//     { name: "Arachis Oil", type: "Carrier Oil" },
//     { name: "Argan Oil", type: "Carrier Oil" },
//     { name: "Avocado Oil", type: "Carrier Oil" },
//     { name: "Ashwagandha Oil", type: "Carrier Oil" },
//     { name: "Bhringraj Oil", type: "Carrier Oil" },
//     { name: "Brahmi Oil", type: "Carrier Oil" },
//     { name: "Black Seed Oil", type: "Carrier Oil" },
//     { name: "Borage Seed Oil", type: "Carrier Oil" },
//     { name: "Calendula Oil", type: "Carrier Oil" },
//     { name: "Castor Oil", type: "Carrier Oil" },
//     { name: "Cashew Nut Oil", type: "Carrier Oil" },
//     { name: "Coconut Oil", type: "Carrier Oil" },
//     { name: "Ginger Grass Oil", type: "Carrier Oil" },
//     { name: "Jasmine Absolute", type: "Carrier Oil" },
//     { name: "Lavender Oil", type: "Carrier Oil" },
//     { name: "Lemon Grass Oil", type: "Carrier Oil" },
//     { name: "Mimosa Absolute", type: "Carrier Oil" },
//     { name: "Myrtle Oil", type: "Carrier Oil" },
//     { name: "Rose Wood Oil", type: "Carrier Oil" },
//     { name: "Spike Lavender Oil", type: "Carrier Oil" },
//     { name: "Cucumber Oil", type: "Carrier Oil" },
//     { name: "Custard Apple Seed Oil", type: "Carrier Oil" },
//     { name: "Corn Oil", type: "Carrier Oil" },
//     { name: "Evening Primrose Oil", type: "Carrier Oil" },
//     { name: "Extra Virgin Olive Oil", type: "Carrier Oil" },
//     { name: "Flax Seed Oil", type: "Carrier Oil" },
//     { name: "Grapeseed Oil", type: "Carrier Oil" },
//     { name: "Hazel Nut Oil", type: "Carrier Oil" },
//     { name: "Hemp Seed Oil", type: "Carrier Oil" },
//     { name: "Jojoba Oil (colourless)", type: "Carrier Oil" },
//     { name: "Jojoba Oil (golden)", type: "Carrier Oil" },
//     { name: "Karanj Oil", type: "Carrier Oil" },
//     { name: "Laurel Berry Oil", type: "Carrier Oil" },
//     { name: "Linseed Oil", type: "Carrier Oil" },
//     { name: "Moringa Oil", type: "Carrier Oil" },
//     { name: "Musk Melon Oil", type: "Carrier Oil" },
//     { name: "Sage Oil", type: "Carrier Oil" },
//     { name: "Tuberose Oil", type: "Carrier Oil" },
//     { name: "Tarragon Oil", type: "Carrier Oil" },
//     { name: "Vertiver Oil", type: "Carrier Oil" },
//     { name: "Wintergreen Oil", type: "Carrier Oil" },
//     { name: "Ylang Ylang Oil", type: "Carrier Oil" },
//     { name: "Neem Oil", type: "Carrier Oil" },
//     { name: "Olive Oil Pomace", type: "Carrier Oil" },
//     { name: "Papaya Seed Oil", type: "Carrier Oil" },
//     { name: "Peach Kernel Oil", type: "Carrier Oil" },
//     { name: "Pomegranate Oil", type: "Carrier Oil" },
//     { name: "Pumpkin Seed Oil", type: "Carrier Oil" },
//     { name: "Rose Hip Seed Oil", type: "Carrier Oil" },
//     { name: "Safflower Oil", type: "Carrier Oil" },
//     { name: "Sawpalmetto Oil", type: "Carrier Oil" },
//     { name: "Soybean Oil", type: "Carrier Oil" },
//     { name: "Seabuckthorn Oil", type: "Carrier Oil" },
//     { name: "Sesame Seed Oil", type: "Carrier Oil" },
//     { name: "Virgin Olive Oil", type: "Carrier Oil" },
//     { name: "Walnut Oil", type: "Carrier Oil" },
//     { name: "Watermelon Seed Oil", type: "Carrier Oil" },
//     { name: "Wheat Germ Oil", type: "Carrier Oil" },
//     { name: "Armoise Oil", type: "Carrier Oil" },
//     { name: "Angelica Root Oil", type: "Carrier Oil" },
//     { name: "Bay Oil", type: "Carrier Oil" },
//     { name: "Bergamot Oil", type: "Carrier Oil" },
//     { name: "Citronella Oil", type: "Carrier Oil" },
//     { name: "Clary Sage Oil", type: "Carrier Oil" },
//     { name: "Cyprus Oil", type: "Carrier Oil" },
//     { name: "Galangal Oil", type: "Carrier Oil" }
//   ];

//   const extracts = [
//     { name: "Astaxanthin", specification: "N/A" },
//     { name: "Lutein", specification: "N/A" },
//     { name: "Lycopene", specification: "N/A" },
//     { name: "Acai Berry Extract", specification: "N/A" },
//     { name: "Pomegranate Extract", specification: "N/A" },
//     { name: "Bilberry Extract", specification: "N/A" },
//     { name: "Pine Bark Extract", specification: "N/A" },
//     { name: "Resveratrol", specification: "N/A" },
//     { name: "Green Tea Extract", specification: "N/A" },
//     { name: "Acerola Cherry Extract", specification: "N/A" },
//     { name: "Phyllanthus Emblica Extract", specification: "N/A" },
//     { name: "Mangosteen Extract", specification: "N/A" },
//     { name: "Grape Seed Extract", specification: "N/A" },
//     { name: "Soybean Extract", specification: "N/A" },
//     { name: "Black Cohosh Extract", specification: "N/A" },
//     { name: "Wild Yam Extract", specification: "N/A" },
//     { name: "Chrysanthemum Extract", specification: "N/A" },
//     { name: "Baical Skullcap Root Extract", specification: "N/A" },
//     { name: "Angelica/Dong Quai Extract", specification: "N/A" },
//     { name: "Kudzu Root (Puerara) Extract", specification: "N/A" },
//     { name: "Avocado Soy", specification: "20%, 40%" },
//     { name: "Lycopene", specification: "2%, 2.5%" },
//     { name: "Pomegranate Extract", specification: "8%, 16%, 98%" },
//     { name: "Grape Seed Extract", specification: "15:1, 10:1" },
//     { name: "Soybean Extract", specification: "85%" },
//     { name: "Black Cohosh Extract", specification: "10:1, 1%" },
//     { name: "Green Tea Extract", specification: "40%, 80%" },
//     { name: "Mangosteen Extract", specification: "30%-40%" },
//     { name: "Soybean Extract", specification: "3%, 5%" },
//     { name: "Pomegranate Extract", specification: "5%, 10%, 20%" },
//     { name: "Grape Seed Extract", specification: "5%, 6%, 10%" },
//     { name: "Baical Skullcap Root Extract", specification: "10:1" },
//     { name: "Chrysanthemum Extract", specification: "40%" },
//     { name: "Soybean Extract", specification: "25%, 36%" },
//     { name: "Black Cohosh Extract", specification: "30%-98%" },
//     { name: "Green Tea Extract", specification: "10%, 20%, 50%, 98%" },
//     { name: "Acai Berry Extract", specification: "50%, 95%, 98%" },
//     { name: "Pomegranate Extract", specification: "17%, 25%" },
//     { name: "Lycopene", specification: "10:1" },
//     { name: "Black Cohosh Extract", specification: "10%, 20%, 30%, 95%" },
//     { name: "Grape Seed Extract", specification: "95% OPC, 80%-95% Polyphenol" },
//     { name: "Gymnema Extract", specification: "25%" },
//     { name: "Bitter Melon Extract", specification: "10%" },
//     { name: "Dogbane Leaf Extract", specification: "10:1" },
//     { name: "Artichoke Extract", specification: "2.5%, 5%" },
//     { name: "Mulberry Leaf Extract", specification: "DNJ 1%" },
//     { name: "Tartary Buckwheat Extract", specification: "10:1" },
//     { name: "Celery Seed Extract", specification: "1%, 10:1, 5:1" },
//     { name: "Pomegranate Extract", specification: "40% Polyphenol" },
//     { name: "Garlic Extract", specification: "Allicin 1%, Alliin 2%, 5%" },
//     { name: "Corn Silk Extract", specification: "Beta sitosterol 5%, 10:1" },
//     { name: "Salvia Miltiorrhiza Extract", specification: "10:1, 10%, 20%" },
//     { name: "Red Yeast Rice Extract", specification: "0.1%, 0.3%, 0.8%, 1%" },
//     { name: "Corosolic Acid", specification: "1%, 2%, 5%, 10%, 20%, 98%" },
//     { name: "Ginkgo Biloba Extract", specification: "CP2005, CP2010, USP32" },
//     { name: "Raspberry Ketone Extract", specification: "99%" },
//     { name: "Senna Extract", specification: "6%-20%" },
//     { name: "Hawthorn Extract", specification: "5%-30%" },
//     { name: "Lotus Leaf Extract", specification: "10:1, 1%, 2%" },
//     { name: "Green Tea Extract", specification: "50%, 95%, 98%" },
//     { name: "Garcinia Cambogia Extract", specification: "50%, 60%" },
//     { name: "White Kidney Bean Extract", specification: "10:1, 1%, 2%" },
//     { name: "Irvingia Gabonensis Extract", specification: "10:1, 20:1" },
//     { name: "Green Coffee Bean Extract", specification: "50%, 60%, 98%" },
//     { name: "5-HTP/Griffonia Seed Extract", specification: "20%-90%" },
//     { name: "CoQ10", specification: "N/A" },
//     { name: "Huperzine A", specification: "N/A" },
//     { name: "Rhodiola Rosea Extract", specification: "N/A" },
//     { name: "Panax Ginseng Extract", specification: "N/A" },
//     { name: "Valerian Root Extract", specification: "N/A" },
//     { name: "Horse Chestnut Extract", specification: "N/A" },
//     { name: "Lemon Balm Extract", specification: "N/A" },
//     { name: "Gastrodia Tuber Extract", specification: "N/A" },
//     { name: "Galanthamine Hydrobromide", specification: "N/A" },
//     { name: "Passion Flower Extract", specification: "N/A" },
//     { name: "Siberian Ginseng Extract", specification: "N/A" },
//     { name: "Semen Ziziphi Spinosae Extract", specification: "N/A" },
//     { name: "Butcher’s Broom Extract", specification: "N/A" },
//     { name: "Yarrow Extract", specification: "N/A" },
//     { name: "Juniper Berry", specification: "N/A" },
//     { name: "HoneySuckle Flower Extract", specification: "N/A" },
//     { name: "Rosemary Extract", specification: "N/A" },
//     { name: "Holy basil extract", specification: "N/A" },
//     { name: "Folium Perillae Extract", specification: "N/A" },
//     { name: "Aloe Vera Gel Freeze Dried Powder", specification: "N/A" },
//     { name: "Witch Hazel Extract", specification: "N/A" },
//     { name: "Peppermint Extract", specification: "N/A" },
//     { name: "Bearberry Extract", specification: "N/A" },
//     { name: "Rose Extract", specification: "N/A" },
//   ];
//   const healthIngredients = [
//     { ingredient: "Cow Colostrum Powder", botanicalName: "", partUsed: "" },
//     { ingredient: "Psyllium Husk", botanicalName: "", partUsed: "" },
//     { ingredient: "Spirullina", botanicalName: "", partUsed: "" },
//     { ingredient: "Energy Brow (Safed Musli + Ashwagandha) Sugar Free", botanicalName: "", partUsed: "" },
//     { ingredient: "Noni Juice", botanicalName: "", partUsed: "" },
//     { ingredient: "Wheatgrass Powder", botanicalName: "Triticum aestivum", partUsed: "Grass" },
//     { ingredient: "Barley Grass Powder", botanicalName: "Hordeum vulgare", partUsed: "Grass" },
//     { ingredient: "Moringa Leaf Powder", botanicalName: "Moringa oleifera", partUsed: "Leaf" },
//     { ingredient: "Beetroot Powder", botanicalName: "Beta vulgaris", partUsed: "Root" },
//     { ingredient: "Amla Powder", botanicalName: "Phyllanthus emblica", partUsed: "Fruit" },
//     { ingredient: "Ginger Powder", botanicalName: "Zingiber officinale", partUsed: "Root" },
//     { ingredient: "Turmeric Powder", botanicalName: "Curcuma longa", partUsed: "Rhizome" },
//     { ingredient: "Ashwagandha Powder", botanicalName: "Withania somnifera", partUsed: "Root" },
//     { ingredient: "Safed Musli Powder", botanicalName: "Chlorophytum borivilianum", partUsed: "Root" },
//     { ingredient: "Shatavari Powder", botanicalName: "Asparagus racemosus", partUsed: "Root" },
//     { ingredient: "Gokshura Powder", botanicalName: "Tribulus terrestris", partUsed: "Fruit" },
//     { ingredient: "Giloy Powder", botanicalName: "Tinospora cordifolia", partUsed: "Stem" },
//     { ingredient: "Green Tea Extract", botanicalName: "Camellia sinensis", partUsed: "Leaf" },
//     { ingredient: "Flaxseed Powder", botanicalName: "Linum usitatissimum", partUsed: "Seed" },
//   ];
// const filterData= herbsData.filter((item)=>Object.values(item).some((val)=>val.toLowerCase().includes(searchTerm.toLowerCase())))
// const ingredData=healthIngredients.filter((item)=>Object.values(item).some((val)=>val.toLowerCase().includes(ingredSearch.toLowerCase())))

//   return (
//     <div className="product-main-list-parent">
//       <div className="about-banner position-relative text-center d-flex align-items-center justify-content-center" style={{ height: '600px', backgroundImage: `url(${require('../assets/images/ProductBanner1.jpeg')})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
//         <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
//         <h1 className="position-relative text-white display-3 fw-bold">Product Banner</h1>
//       </div>
//       <div className="container py-5">
//         <div className="row">
//           <div className='text-center mb-4'>  <h2 class="section-title ">Herbs In Crude , Powder & Extracts</h2></div>
//         </div>
//         <div className="row">


//           {/* Left Column - Table */}
//           <div className="col-md-6 mb-4">
//             <input type="text" placeholder='search herb or botanical name...' 
//             className='form-control mb-3'
//             value={searchTerm}
//             onChange={(e)=>setSearchTerm(e.target.value)}
//             />
//             <div className="table-responsive-scrlbar" style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
//               <table className="table table-bordered table-striped text-center align-middle mb-0">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>Herb</th>
//                     <th>Botanical Name</th>
//                     <th>Herb</th>
//                     <th>Botanical Name</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filterData.length> 0 ?(
//                     filterData.map((item,index)=>(
//                       <tr key={index}>
//                         <td>{item.herb1}</td>
//                         <td>{item.botanical1}</td>
//                         <td>{item.herb2}</td>
//                         <td>{item.botanical2}</td>
//                       </tr>
//                     ))
//                   ):(
//                     <tr colSpan='4'>No Matching herbs found</tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right Column - Image */}
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <img
//               src={require('../assets/images/herbsimage.png')}
//               alt="Herbs"
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: '400px', objectFit: 'cover' }}
//             />
//           </div>
//         </div>
//         <div className="row my-4">
//           <div className="row">
//             <div className='text-center mb-4'>  <h2 class="section-title ">Health Ingredients</h2></div>
//           </div>
//           {/* Left Column - Image */}
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <img
//               src={require('../assets/images/ingradients.png')}
//               alt="Ingredients"
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "400px", objectFit: "cover" }}
//             />
//           </div>

//           {/* Right Column - Scrollable Table */}
//           <div className="col-md-6 mb-4">
//             <input type="text"  onChange={(e)=>setingredSearch(e.target.value)} value={ingredSearch} className='form-control mb-3' placeholder='Search Ingredient Name...'/>
//             <div
//               className="table-responsive-scrlbar" style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }}
//             >
//               <table className="table table-bordered table-striped text-center align-middle mb-0">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>Ingredient</th>
//                     <th>Botanical Name</th>
//                     <th>Part Used</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {
//                     ingredData.length>0 ?(
//                    ingredData.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.ingredient}</td>
//                       <td>{item.botanicalName || "-"}</td>
//                       <td>{item.partUsed || "-"}</td>
//                     </tr>
//                   ))
//                     ):(<tr colSpan='4'>There is no data available</tr>)}
                  
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {/* Left Column - Scrollable Oil List */}
//           <div className="row">
//             <div className='text-center mb-4'>  <h2 class="section-title ">Herbal Essential Oils</h2></div>
//           </div>
//           <div className="col-md-6 mb-4">
            
//             <div className="table-responsive-scrlbar" style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
//               <table className="table table-bordered table-striped text-center align-middle mb-0">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>Oil Name</th>
//                     <th>Type</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {oils.map((oil, index) => (
//                     <tr key={index}>
//                       <td>{oil.name}</td>
//                       <td>{oil.type}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <img
//               src={require('../assets/images/oilproduct.png')}
//               alt="Oils"
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: '400px', objectFit: 'cover' }}
//             />
//           </div>
//           {/* Right Column - Image */}
//         </div>
//         <div className="row my-4">
//           <div className="row">
//             <div className='text-center mb-4'>  <h2 class="section-title ">Herbal Botanical Extracts</h2></div>
//           </div>
//           {/* Left Column - Image */}
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <img
//               src={require('../assets/images/extractoil.png')}
//               alt="Extracts"
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "400px", objectFit: "cover" }}
//             />
//           </div>

//           {/* Right Column - Scrollable Table */}
//           <div className="col-md-6 mb-4">
//             <div
//               className="table-responsive-scrlbar" style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }}
//             >
//               <table className="table table-bordered text-center mb-0">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>Extract Name</th>
//                     <th>Specification</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {extracts.map((extract, index) => (
//                     <tr key={index}>
//                       <td>{extract.name}</td>
//                       <td>{extract.specification}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div></div>

//   );
<></>
};

export default Products;
 {/* Banner Section */}
      <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/Service.jpg')})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Our Services</h1>
      </div>

      


