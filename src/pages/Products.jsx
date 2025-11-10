import React, { useState } from 'react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredSearch, setingredSearch] = useState('');
  const [oilSearch, setOilSearch] = useState('');
  const [extractSearch, setExtractSearch] = useState('');
  const [pulseSearch,setPulseSearch]=useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const herbsData = [
    { herb1: "Apium Graveoens", botanical1: "AOHnite Ferox", herb2: "Agar", botanical2: "Aquillaria gallocha" },
    { herb1: "Ageda", botanical1: "Achyranthes aspera", herb2: "Ajmod", botanical2: "Apium graveoens" },
    { herb1: "Ajowan seeds", botanical1: "Ajowan seeds", herb2: "Akkalkara mul", botanical2: "Anacylus pyrethrum" },
    { herb1: "Aloes", botanical1: "Aloes indica", herb2: "Amba chhal", botanical2: "Mangifera indica" },
    { herb1: "Ambahalder", botanical1: "Cucurma amda", herb2: "Amla", botanical2: "Emblica officinalis" },
    { herb1: "Amli", botanical1: "Tamarindus indicus", herb2: "Anantmool", botanical2: "Hemidesmus indicus" },
    { herb1: "Ankdo", botanical1: "Calotropis giganta", herb2: "Annatto seeds", botanical2: "Baxa orellana" },
    { herb1: "Anuir", botanical1: "Ficus carica", herb2: "Apple", botanical2: "Pyrus malus" },
    { herb1: "Aritha", botanical1: "Sapindus trifoliatus", herb2: "Arjun bark", botanical2: "Terminalia arjuna" },
    { herb1: "Arni mool root", botanical1: "Clitoria ternatea", herb2: "Ashok bark", botanical2: "Saraca indica" },
  ];

  const oils = [
    { name: "Ajowain Oil", type: "Essential Oil" },
    { name: "Anise Oil", type: "Essential Oil" },
    { name: "Basil Oil", type: "Essential Oil" },
    { name: "Cedarwood Oil", type: "Essential Oil" },
    { name: "Cinnamon Oil", type: "Essential Oil" },
    { name: "Eucalyptus Oil", type: "Essential Oil" },
    { name: "Lavender Oil", type: "Essential Oil" },
    { name: "Peppermint Oil", type: "Essential Oil" },
    { name: "Tea Tree Oil", type: "Essential Oil" },
    { name: "Almond Oil", type: "Carrier Oil" },
    { name: "Coconut Oil", type: "Carrier Oil" },
    { name: "Jojoba Oil", type: "Carrier Oil" },
  ];

  const extracts = [
    { name: "Ashwagandha Extract", specification: "5%" },
    { name: "Green Tea Extract", specification: "50%" },
    { name: "Turmeric Extract", specification: "95%" },
    { name: "Ginkgo Biloba Extract", specification: "24%" },
    { name: "Grape Seed Extract", specification: "95%" },
    { name: "Rhodiola Extract", specification: "3%" },
  ];

  const healthIngredients = [
    { ingredient: "Cow Colostrum Powder", botanicalName: "", partUsed: "" },
    { ingredient: "Psyllium Husk", botanicalName: "", partUsed: "" },
    { ingredient: "Spirullina", botanicalName: "", partUsed: "" },
    { ingredient: "Wheatgrass Powder", botanicalName: "Triticum aestivum", partUsed: "Grass" },
    { ingredient: "Moringa Leaf Powder", botanicalName: "Moringa oleifera", partUsed: "Leaf" },
    { ingredient: "Ashwagandha Powder", botanicalName: "Withania somnifera", partUsed: "Root" },
  ];

  const grainsAndPulses = [
  { ingredient: "Black Gram", botanicalName: "", partUsed: "" },
  { ingredient: "Batri Dall", botanicalName: "", partUsed: "" },
  { ingredient: "Black Lentil", botanicalName: "", partUsed: "" },
  { ingredient: "Brown Eye Bean", botanicalName: "", partUsed: "" },
  { ingredient: "Chickpeas", botanicalName: "Cicer arietinum", partUsed: "Seed" },
  { ingredient: "Green Gram", botanicalName: "Vigna radiata", partUsed: "Seed" },
  { ingredient: "Green Peas", botanicalName: "Pisum sativum", partUsed: "Seed" },
  { ingredient: "Kidney Beans", botanicalName: "Phaseolus vulgaris", partUsed: "Seed" },
  { ingredient: "Kidney Beans (Rajma Chitra)", botanicalName: "Phaseolus vulgaris", partUsed: "Seed" },
  { ingredient: "Red Lentil", botanicalName: "Lens culinaris", partUsed: "Seed" },
  { ingredient: "Red Split Lentils", botanicalName: "Lens culinaris", partUsed: "Seed" },
  { ingredient: "Split Moth Beans", botanicalName: "Vigna aconitifolia", partUsed: "Seed" },
  { ingredient: "Split Pigeon Peas", botanicalName: "Cajanus cajan", partUsed: "Seed" },
  { ingredient: "Split Chickpeas", botanicalName: "Cicer arietinum", partUsed: "Seed" },
  { ingredient: "Moth Bean", botanicalName: "Vigna aconitifolia", partUsed: "Seed" },
  { ingredient: "Matpe Beans", botanicalName: "Vigna mungo", partUsed: "Seed" },
  { ingredient: "Red Kidney Beans", botanicalName: "Phaseolus vulgaris", partUsed: "Seed" },
  { ingredient: "Split Green Gram (With Skin)", botanicalName: "Vigna radiata", partUsed: "Seed" },
  { ingredient: "Split Yellow Mung Dal", botanicalName: "Vigna radiata", partUsed: "Seed" },
  { ingredient: "Split Peas", botanicalName: "Pisum sativum", partUsed: "Seed" },
  { ingredient: "Whole Gram", botanicalName: "Cicer arietinum", partUsed: "Seed" },
  { ingredient: "White Peas", botanicalName: "Pisum sativum", partUsed: "Seed" },
];


  const filterData = herbsData.filter((item) =>
    Object.values(item).some((val) => val.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const ingredData = healthIngredients.filter((item) =>
    Object.values(item).some((val) => val.toLowerCase().includes(ingredSearch.toLowerCase()))
  );

  const filteredOils = oils.filter((item) =>
    Object.values(item).some((val) => val.toLowerCase().includes(oilSearch.toLowerCase()))
  );

  const filteredExtracts = extracts.filter((item) =>
    Object.values(item).some((val) => val.toLowerCase().includes(extractSearch.toLowerCase()))
  );

  const filterPulses= grainsAndPulses.filter((item)=> Object.values(item).some((val) => val.toLowerCase().includes(pulseSearch.toLowerCase())))

  // Convert herbs data to flat array
  const flatHerbsData = filterData.flatMap(item => [
    { name: item.herb1, botanical: item.botanical1 },
    { name: item.herb2, botanical: item.botanical2 }
  ]);

  return (
    <>
      <style>{`
        /* Banner */
        .product-banner {
        padding:7%;
          background-size: cover;
          background-position: bottom;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(236, 72, 153, 0.4));
        }

        .product-banner-title {
          position: relative;
          color: white;
          margin-top:75px;
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        /* Main Section */
        .products-main-section {
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
          padding: 5rem 0;
        }

        .product-section-wrapper {
          margin-bottom: 6rem;
        }

        /* Section Header */
        .section-header-box {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title-main {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
              background: linear-gradient(135deg, rgb(236, 72, 153), rgb(147, 51, 234)) text;
    -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          color: #6c757d;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Search and Filter Bar */
        .search-filter-bar {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          margin-bottom: 3rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          min-width: 250px;
          position: relative;
        }

        .search-input-modern {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e9ecef;
          border-radius: 16px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input-modern:focus {
          outline: none;
          border-color: #0d6efd;
          box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #adb5bd;
        }

        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1rem;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          padding: 1rem 1.25rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border-left: 4px solid transparent;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .product-card:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .card-pink {
          border-left-color: #ec4899;
        }

        .card-pink:hover {
          background: linear-gradient(90deg, rgba(236, 72, 153, 0.03), white);
        }

        .card-green {
          border-left-color: #4ade80;
        }

        .card-green:hover {
          background: linear-gradient(90deg, rgba(74, 222, 128, 0.03), white);
        }

        .card-orange {
          border-left-color: #fbbf24;
        }

        .card-orange:hover {
          background: linear-gradient(90deg, rgba(251, 191, 36, 0.03), white);
        }

        .card-blue {
          border-left-color: #3b82f6;
        }

        .card-blue:hover {
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.03), white);
        }

        .product-icon {
          width: 45px;
          height: 45px;
          min-width: 45px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .icon-pink {
          background: linear-gradient(135deg, #ec4899, #9333ea);
        }

        .icon-green {
          background: linear-gradient(135deg, #4ade80, #0d9488);
        }

        .icon-orange {
          background: linear-gradient(135deg, #fbbf24, #f97316);
        }

        .icon-blue {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .product-content {
          flex: 1;
          min-width: 0;
        }

        .product-card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-card-subtitle {
          font-size: 0.8rem;
          color: #6c757d;
          margin-bottom: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-badge {
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .badge-pink {
          background: linear-gradient(135deg, #ec4899, #9333ea);
        }

        .badge-green {
          background: linear-gradient(135deg, #4ade80, #0d9488);
        }

        .badge-orange {
          background: linear-gradient(135deg, #fbbf24, #f97316);
        }

        .badge-blue {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        /* Featured Image Section */
        .featured-section {
          background: white;
          border-radius: 32px;
          padding: 3rem;
          margin-bottom: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .featured-image {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .featured-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .featured-image:hover img {
          transform: scale(1.1);
        }

        .featured-text h3 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ec4899, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .featured-text p {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.8;
        }

        /* Stats Box */
        .stats-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          border-radius: 16px;
          background: #f8f9fa;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #0d6efd, #6610f2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
          margin-top: 0.5rem;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: #6c757d;
        }

        .empty-state-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.3;
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }

          .featured-content {
            gap: 2rem;
          }
        }

        @media (max-width: 991px) {
          .products-main-section {
            padding: 4rem 0;
          }

          .section-title-main {
            font-size: 2.3rem;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .featured-section {
            padding: 2rem;
          }

          .featured-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .featured-image img {
            height: 350px;
          }

          .stats-box {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 767px) {
          .product-banner {
            height: 450px;
          }

          .product-banner-title {
            font-size: 2.5rem;
            padding: 0 1rem;
          }

          .products-main-section {
            padding: 3rem 0;
          }

          .section-title-main {
            font-size: 2rem;
          }

          .search-filter-bar {
            padding: 1.5rem;
            gap: 1rem;
          }

          .search-box {
            min-width: 100%;
          }

          .product-card {
            padding: 0.9rem 1rem;
          }

          .product-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
            font-size: 1.3rem;
          }

          .product-card-title {
            font-size: 0.9rem;
          }

          .product-card-subtitle {
            font-size: 0.75rem;
          }

          .product-badge {
            padding: 0.2rem 0.5rem;
            font-size: 0.6rem;
          }

          .featured-section {
            padding: 1.5rem;
            border-radius: 24px;
          }

          .featured-text h3 {
            font-size: 2rem;
          }

          .featured-image img {
            height: 300px;
          }

          .stats-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 575px) {
          .product-banner {
            height: 350px;
          }

          .product-banner-title {
            font-size: 2rem;
          }

          .section-title-main {
            font-size: 1.75rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .product-card {
            padding: 0.8rem;
          }

          .product-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 1.2rem;
          }

          .product-card-title {
            font-size: 0.85rem;
          }

          .product-card-subtitle {
            font-size: 0.7rem;
          }

          .featured-text h3 {
            font-size: 1.75rem;
          }

          .featured-text p {
            font-size: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Banner */}
      <div
        className="product-banner"
        style={{
          backgroundImage: `url(${require('../assets/images/ProductBanner1.jpeg')})`,
        }}
      >
        <div className="product-banner-overlay"></div>
        <h1 className="product-banner-title">Our Products</h1>
      </div>

      {/* Main Products Section */}
      <section className="products-main-section">
        <div className="container">
          
          {/* Herbs Section */}
          <div className="product-section-wrapper">
            <div className="section-header-box">
              <h2 className="section-title-main" style={{ background: 'linear-gradient(135deg, #ec4899, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                🌿 Herbs In Crude, Powder & Extracts
              </h2>
              <p className="section-subtitle">
                Premium quality herbs sourced from the finest regions worldwide
              </p>
            </div>

            <div className="featured-section">
              <div className="featured-content">
                <div className="featured-image">
                  <img src={require('../assets/images/herbsimage.png')} alt="Herbs" />
                </div>
                <div className="featured-text">
                  <h3>Natural Herbal Excellence</h3>
                  <p>
                    Discover our extensive collection of authentic herbs available in crude, powder, and extract forms. Each product is carefully sourced and processed to maintain maximum potency and purity.
                  </p>
                  <div className="stats-box">
                    <div className="stat-item">
                      <div className="stat-number">{flatHerbsData.length}+</div>
                      <div className="stat-label">Varieties</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">100%</div>
                      <div className="stat-label">Natural</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">Pure</div>
                      <div className="stat-label">Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-filter-bar">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input-modern"
                  placeholder="Search herbs or botanical names..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="product-grid">
              {flatHerbsData.length > 0 ? (
                flatHerbsData.map((item, index) => (
                  <div key={index} className="product-card card-pink">
                    <div className="product-icon icon-pink">🌿</div>
                    <div className="product-content">
                      <h4 className="product-card-title">{item.name}</h4>
                      <p className="product-card-subtitle">{item.botanical}</p>
                    </div>
                    <div className="product-badge badge-pink">Herb</div>
                  </div>
                ))
              ) : (
                <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                  <div className="empty-state-icon">🔍</div>
                  <p>No herbs found matching your search</p>
                </div>
              )}
            </div>
          </div>

          {/* Health Ingredients Section */}
          <div className="product-section-wrapper">
            <div className="section-header-box">
              <h2 className="section-title-main" style={{ background: 'linear-gradient(135deg, #4ade80, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                💚 Health Ingredients
              </h2>
              <p className="section-subtitle">
                Essential ingredients for optimal health and wellness
              </p>
            </div>

            <div className="featured-section">
              <div className="featured-content">
                <div className="featured-text">
                  <h3 style={{ background: 'linear-gradient(135deg, #4ade80, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Wellness Boosters</h3>
                  <p>
                    Our health ingredients are specially selected to support your wellness journey. From superfoods to traditional remedies, each ingredient is tested for quality and efficacy.
                  </p>
                  <div className="stats-box">
                    <div className="stat-item">
                      <div className="stat-number">{healthIngredients.length}+</div>
                      <div className="stat-label">Products</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">Organic</div>
                      <div className="stat-label">Certified</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">Fresh</div>
                      <div className="stat-label">Quality</div>
                    </div>
                  </div>
                </div>
                <div className="featured-image">
                  <img src={require('../assets/images/ingradients.png')} alt="Health Ingredients" />
                </div>
              </div>
            </div>

            <div className="search-filter-bar">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input-modern"
                  placeholder="Search health ingredients..."
                  value={ingredSearch}
                  onChange={(e) => setingredSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="product-grid">
              {ingredData.length > 0 ? (
                ingredData.map((item, index) => (
                  <div key={index} className="product-card card-green">
                    <div className="product-icon icon-green">💚</div>
                    <div className="product-content">
                      <h4 className="product-card-title">{item.ingredient}</h4>
                      <p className="product-card-subtitle">
                        {item.botanicalName || item.partUsed || 'Premium Quality'}
                      </p>
                    </div>
                    <div className="product-badge badge-green">Wellness</div>
                  </div>
                ))
              ) : (
                <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                  <div className="empty-state-icon">🔍</div>
                  <p>No ingredients found matching your search</p>
                </div>
              )}
            </div>
          </div>

          {/* Essential Oils Section */}
          <div className="product-section-wrapper">
            <div className="section-header-box">
              <h2 className="section-title-main" style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                💧 Herbal Essential Oils
              </h2>
              <p className="section-subtitle">
                Pure and therapeutic grade essential oils from nature
              </p>
            </div>

            <div className="featured-section">
              <div className="featured-content">
                <div className="featured-image">
                  <img src={require('../assets/images/oilproduct.png')} alt="Essential Oils" />
                </div>
                <div className="featured-text">
                  <h3 style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Aromatic Purity</h3>
                  <p>
                    Experience the healing power of nature with our collection of essential and carrier oils. Each oil is steam-distilled or cold-pressed to preserve its natural therapeutic properties.
                  </p>
                  <div className="stats-box">
                    <div className="stat-item">
                      <div className="stat-number">{oils.length}+</div>
                      <div className="stat-label">Oil Types</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">Pure</div>
                      <div className="stat-label">Grade</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">Natural</div>
                      <div className="stat-label">Extraction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-filter-bar">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input-modern"
                  placeholder="Search essential oils..."
                  value={oilSearch}
                  onChange={(e) => setOilSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="product-grid">
              {filteredOils.length > 0 ? (
                filteredOils.map((item, index) => (
                  <div key={index} className="product-card card-orange">
                    <div className="product-icon icon-orange">💧</div>
                    <div className="product-content">
                      <h4 className="product-card-title">{item.name}</h4>
                      <p className="product-card-subtitle">Therapeutic Grade</p>
                    </div>
                    <div className="product-badge badge-orange">{item.type}</div>
                  </div>
                ))
              ) : (
                <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                  <div className="empty-state-icon">🔍</div>
                  <p>No oils found matching your search</p>
                </div>
              )}
            </div>
          </div>

          {/* Botanical Extracts Section */}
          <div className="product-section-wrapper">
            <div className="section-header-box">
              <h2 className="section-title-main" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ⚗️ Herbal Botanical Extracts
              </h2>
              <p className="section-subtitle">
                Concentrated botanical extracts for maximum potency
              </p>
            </div>

            <div className="featured-section">
              <div className="featured-content">
                <div className="featured-text">
                  <h3 style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Potent Formulations</h3>
                  <p>
                    Our botanical extracts are standardized and concentrated to ensure consistent quality and effectiveness. Perfect for supplements, cosmetics, and therapeutic applications.
                  </p>
                  <div className="stats-box">
                    <div className="stat-item">
                      <div className="stat-number">{extracts.length}+</div>
                      <div className="stat-label">Extracts</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">Lab</div>
                      <div className="stat-label">Tested</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">High</div>
                      <div className="stat-label">Potency</div>
                    </div>
                  </div>
                </div>
                <div className="featured-image">
                  <img src={require('../assets/images/extractoil.png')} alt="Botanical Extracts" />
                </div>
              </div>
            </div>

            <div className="search-filter-bar">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input-modern"
                  placeholder="Search botanical extracts..."
                  value={extractSearch}
                  onChange={(e) => setExtractSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="product-grid">
              {filteredExtracts.length > 0 ? (
                filteredExtracts.map((item, index) => (
                  <div key={index} className="product-card card-blue">
                    <div className="product-icon icon-blue">⚗️</div>
                    <div className="product-content">
                      <h4 className="product-card-title">{item.name}</h4>
                      <p className="product-card-subtitle">Standardized Extract</p>
                    </div>
                    <div className="product-badge badge-blue">{item.specification}</div>
                  </div>
                ))
              ) : (
                <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                  <div className="empty-state-icon">🔍</div>
                  <p>No extracts found matching your search</p>
                </div>
              )}
            </div>
          </div>
          {/* Pulses and Grains Section */}
           <div className="product-section-wrapper">
  <div className="section-header-box">
    <h2
      className="section-title-main"
      style={{
        background: 'linear-gradient(135deg, #22c55e, #16a34a)', // Green gradient
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      🌾 Pulses & Grains
    </h2>
    <p className="section-subtitle">
      High-quality pulses and grains sourced from trusted farms for global supply.
    </p>
  </div>

  <div className="featured-section">
    <div className="featured-content">
       <div className="featured-image">
        <img
          src={require('../assets/images/banner5.jpg')}
          alt="Pulses and Grains"
        />
      </div>
      <div className="featured-text">
        <h3
          style={{
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Wholesome & Nutritious
        </h3>
        <p>
          Our pulses and grains are carefully selected for their superior taste, nutrition, and
          purity. Ideal for exports, retail packaging, and bulk trade.
        </p>

        <div className="stats-box">
          <div className="stat-item">
            <div className="stat-number">{grainsAndPulses.length}+</div>
            <div className="stat-label">Varieties</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Farm</div>
            <div className="stat-label">Fresh</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Globally</div>
            <div className="stat-label">Sourced</div>
          </div>
        </div>
      </div> 
    </div>
  </div>

  <div className="search-filter-bar">
    <div className="search-box">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input-modern"
        placeholder="Search pulses or grains..."
        value={pulseSearch}
        onChange={(e) => setPulseSearch(e.target.value)}
      />
    </div>
  </div>

  <div className="product-grid">
    {filterPulses.length > 0 ? (
      filterPulses.map((item, index) => (
        <div key={index} className="product-card card-green">
          <div className="product-icon icon-green">🌾</div>
          <div className="product-content">
            <h4 className="product-card-title">{item.ingredient}</h4>
            {item.botanicalName && (
              <p className="product-card-subtitle">
                <em>{item.botanicalName}</em>
              </p>
            )}
          </div>
          {item.partUsed && (
            <div className="product-badge badge-green">{item.partUsed}</div>
          )}
        </div>
      ))
    ) : (
      <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
        <div className="empty-state-icon">🔍</div>
        <p>No pulses or grains found</p>
      </div>
    )}
  </div>
</div>
        </div>
      </section>
    </>
  );
};

export default Products;