// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>مرحبًا بك في Bakora</h1>
        <p>منصة متكاملة لخدمات السيارات وقطع الغيار والذكاء الاصطناعي</p>
        <div className="hero-buttons">
          <Link to="/services" className="btn-primary">استعرض الخدمات</Link>
          <Link to="/auth" className="btn-secondary">سجّل الآن</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>طلب قطع الغيار</h3>
          <p>ابحث واطلب القطع المناسبة لسيارتك بسهولة</p>
        </div>
        <div className="feature-card">
          <h3>إنقاذ سريع</h3>
          <p>في حالات الطوارئ، فريقنا جاهز في أي وقت</p>
        </div>
        <div className="feature-card">
          <h3>متابعة ذكية</h3>
          <p>ذكاء صناعي ينبهك بكل ما يخص سيارتك وصيانتها</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 Bakora - كل الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default Home;
